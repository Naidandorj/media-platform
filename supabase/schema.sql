-- SONSDOG ERTONTS / Media platform schema
create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  display_name text,
  role text not null default 'member' check (role in ('member','admin')),
  created_at timestamptz not null default now()
);

create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles(id,email,display_name,role)
  values(new.id,new.email,coalesce(new.raw_user_meta_data->>'display_name',''), 'member')
  on conflict (id) do nothing;
  return new;
end; $$;
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users for each row execute procedure public.handle_new_user();

-- Prevent members from changing their own role.
create or replace function public.protect_profile_role()
returns trigger language plpgsql as $$
begin
  if new.role is distinct from old.role and current_user not in ('postgres','service_role') and coalesce(auth.jwt()->'app_metadata'->>'role','') <> 'admin' then
    raise exception 'Only an administrator can change a profile role';
  end if;
  return new;
end; $$;
drop trigger if exists protect_profile_role_trigger on public.profiles;
create trigger protect_profile_role_trigger before update on public.profiles for each row execute procedure public.protect_profile_role();

create or replace function public.is_admin() returns boolean language sql stable security definer set search_path=public as $$ select exists(select 1 from public.profiles where id=auth.uid() and role='admin') $$;

create table if not exists public.stories (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  excerpt text,
  body text not null default '',
  category text not null default 'Өгүүллэг',
  cover_url text,
  audio_url text,
  video_url text,
  is_premium boolean not null default false,
  status text not null default 'draft' check(status in ('draft','published')),
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.orders (
  id uuid primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  amount numeric(14,2) not null,
  currency text not null default 'MNT',
  status text not null default 'pending' check(status in ('pending','paid','failed','refunded')),
  qpay_invoice_id text not null,
  qpay_payment_data jsonb,
  paid_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists public.memberships (
  user_id uuid primary key references auth.users(id) on delete cascade,
  plan text not null default 'premium_30_days',
  expires_at timestamptz not null,
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;
alter table public.stories enable row level security;
alter table public.orders enable row level security;
alter table public.memberships enable row level security;

create policy "profiles read own or admin" on public.profiles for select using (auth.uid()=id or public.is_admin());
create policy "profiles update own" on public.profiles for update using(auth.uid()=id) with check(auth.uid()=id);
create policy "published stories public read" on public.stories for select using(status='published' or public.is_admin());
create policy "admins insert stories" on public.stories for insert with check(public.is_admin());
create policy "admins update stories" on public.stories for update using(public.is_admin()) with check(public.is_admin());
create policy "admins delete stories" on public.stories for delete using(public.is_admin());
create policy "users read own orders" on public.orders for select using(auth.uid()=user_id or public.is_admin());
create policy "users create own pending orders" on public.orders for insert with check(auth.uid()=user_id and status='pending');
create policy "users read own membership" on public.memberships for select using(auth.uid()=user_id or public.is_admin());

-- Public media bucket for cover images, MP3 and video files.
insert into storage.buckets(id,name,public,file_size_limit,allowed_mime_types) values('media','media',true,524288000,array['image/jpeg','image/png','image/webp','audio/mpeg','audio/mp3','video/mp4']) on conflict(id) do nothing;
create policy "Public can view media" on storage.objects for select using(bucket_id='media');
create policy "Admins upload media" on storage.objects for insert with check(bucket_id='media' and public.is_admin());
create policy "Admins update media" on storage.objects for update using(bucket_id='media' and public.is_admin());
create policy "Admins delete media" on storage.objects for delete using(bucket_id='media' and public.is_admin());
