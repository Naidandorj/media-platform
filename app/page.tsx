import Link from 'next/link';
import { createClient } from '@/lib/supabase/server';
type Story={id:string;title:string;slug:string;excerpt:string|null;cover_url:string|null;category:string;is_premium:boolean;published_at:string|null;created_at:string};
const cats=['Бүгд','Мэдээ','Түүх','Өгүүллэг','Аудио','Видео','Танин мэдэхүй','Боловсрол'];
export default async function Home(){
 const supabase=await createClient();
 const {data}=await supabase.from('stories').select('id,title,slug,excerpt,cover_url,category,is_premium,published_at,created_at').eq('status','published').order('published_at',{ascending:false}).limit(12);
 const stories=(data||[]) as Story[];
 return <><section className="hero"><div className="container hero-grid"><div><div className="eyebrow">ТАНЫ МЭДЛЭГ · ТАНЫ ЕРТӨНЦ</div><h1>Уншихаас цааш.<br/>Сонсож, мэдэр.</h1><p>Сонирхолтой өгүүллэг, бодит түүх, мэдээ мэдээлэл, аудио болон видео контентыг нэг дороос.</p><Link className="btn" href="#latest">Контент үзэх　→</Link></div><div className="hero-art"><span>STORIES THAT STAY WITH YOU</span></div></div></section>
 <section className="section" id="latest"><div className="container"><div className="section-head"><div><div className="eyebrow">DISCOVER</div><h2>Шинэ нийтлэлүүд</h2><p>Шинээр нэмэгдсэн контентууд</p></div><Link className="muted" href="/membership">Premium эрх авах →</Link></div><div className="categories" id="categories">{cats.map(c=><span className="chip" key={c}>{c}</span>)}</div>
 {stories.length? <div className="story-grid">{stories.map(s=><article className="story-card" key={s.id}><Link href={`/story/${s.slug}`}><div className="story-cover" style={{backgroundImage:s.cover_url?`url('${s.cover_url}')`:undefined}}><span className="tag">{s.is_premium?'PREMIUM · ':''}{s.category}</span></div></Link><div className="story-content"><div className="meta"><span>{s.published_at?new Date(s.published_at).toLocaleDateString('mn-MN'):'Шинэ'}</span><span>•</span><span>Контент</span></div><h3><Link href={`/story/${s.slug}`}>{s.title}</Link></h3><p>{s.excerpt||'Энэ нийтлэлийг нээж дэлгэрэнгүй уншина уу.'}</p><Link className="read" href={`/story/${s.slug}`}>Дэлгэрэнгүй унших →</Link></div></article>)}</div>:<div className="empty">Одоогоор нийтлэгдсэн контент алга байна. Админ хэсгээс эхний нийтлэлээ нэмээрэй.</div>}
 <div className="feature-band" style={{marginTop:34}}><div><h2>Илүү ихийг сонсож, уншмаар байна уу?</h2><p>Premium гишүүнчлэлээр онцгой контентод нэвтрээрэй.</p></div><Link className="btn" href="/membership">Гишүүнчлэл үзэх</Link></div></div></section></>;
}
