import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';
import { createClient } from '@/lib/supabase/server';
export const metadata: Metadata = { title: 'Сонсдог ертөнц | Media', description: 'Мэдээ, түүх, өгүүллэг, видео болон аудио контентын платформ' };
export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const { data: profile } = user ? await supabase.from('profiles').select('role').eq('id', user.id).maybeSingle() : { data: null };
  return <html lang="mn"><body><header className="site-header"><div className="nav-wrap"><Link className="brand" href="/">СОНСДОГ<span> ЕРТӨНЦ</span></Link><nav><Link href="/">Нүүр</Link><a href="/#categories">Ангилал</a><Link href="/membership">Premium</Link>{profile?.role === 'admin' && <Link href="/admin">Админ</Link>}</nav><div className="nav-actions">{user ? <Link className="btn btn-small" href="/login">Миний булан</Link> : <Link className="btn btn-small" href="/login">Нэвтрэх</Link>}</div></div></header><main>{children}</main><footer className="footer"><div className="container footer-inner"><div><b>СОНСДОГ ЕРТӨНЦ</b><p>Унших, сонсох, мэдрэх.</p></div><div><Link href="/membership">Гишүүнчлэл</Link><Link href="/login">Бүртгүүлэх</Link></div><small>© {new Date().getFullYear()} Сонсдог ертөнц. Бүх эрх хуулиар хамгаалагдана.</small></div></footer></body></html>;
}
