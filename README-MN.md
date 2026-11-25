# СОНСДОГ ЕРТӨНЦ — медиа платформ (Android + Next.js + Supabase + QPay)

Энэ нь олон төрлийн контентын платформын ажиллуулах боломжтой эхний full-stack суурь хувилбар. Нүүр, нийтлэл/өгүүллэг, аудио MP3, видео, хэрэглэгчийн бүртгэл/нэвтрэлт, Premium гишүүнчлэл, админ CRUD, QPay нэхэмжлэх/төлбөр баталгаажуулах урсгал багтсан.

> Энэ төсөл нь Themeka-ийн брэнд, код, зураг, текстийг хуулбарлаагүй. Харин мэдээ/контентын платформын нийтлэг бүтэц, өөрийн нэр ба дизайнтай жишиг систем.

## 1. Үүсгэх шаардлагатай бүртгэлүүд

1. GitHub: https://github.com/
2. Supabase: https://supabase.com/ — Database + Auth + Storage
3. Vercel: https://vercel.com/ — deployment
4. QPay мерчант: https://developer.qpay.mn/mn/docs/merchant?version=2.0.0 — бодит төлбөрт зориулсан байгууллага/мерчантын гэрээ, API эрх

## 2. Supabase тохируулах

1. Supabase-д New project үүсгэнэ.
2. Project-ийн SQL Editor нээнэ.
3. Энэ төслийн `supabase/schema.sql` файлын БҮХ агуулгыг хуулж SQL Editor-т тавиад Run дарна.
4. Project Settings → API хэсгээс Project URL, anon/publishable key, service_role key-г авна. `service_role` key-г хэзээ ч browser, GitHub эсвэл нийтийн чатад тавьж болохгүй.
5. Authentication → URL Configuration дээр Site URL-ийг Vercel-ийн домэйн болгоно. Redirect URLs-д `https://ТАНЫ-ДОМЭЙН/auth/callback` нэмнэ.
6. Authentication → Providers → Email хэсэгт email confirmation тохиргоогоо сонгоно.
7. Storage хэсэгт `media` bucket SQL-ээр үүссэн байна. Үүнд cover зураг, mp3, mp4 байршуулж Public URL-ийг админ формд оруулна.

## 3. Анхны админ эрх нээх

1. Эхлээд `/login` хуудаснаас өөрийн имэйлээр бүртгүүлж, и-мэйлээ баталгаажуулан нэвтэрнэ.
2. Supabase → Table Editor → `profiles` хүснэгтээс өөрийн хэрэглэгчийн `id`-г олно.
3. SQL Editor дээр дараах SQL-ийг ажиллуулж имэйлээ өөрийн бүртгэлтэй и-мэйлээр солино:

```sql
update public.profiles set role='admin' where email='YOUR_EMAIL@example.com';
```

4. Сайтаас гараад дахин нэвтэр. Дээд цэсэнд `Админ` гарна.

## 4. Vercel дээр нийтлэх

1. Төслийн бүх файлыг GitHub repository-д байршуул.
2. Vercel → Add New → Project → GitHub repository-оо сонго.
3. Framework Preset нь Next.js байгааг шалга.
4. Environment Variables хэсэгт `.env.example`-ийн утгуудыг бодит утгаар бөглө.
5. `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`, `SITE_URL`-г заавал тохируул.
6. QPay холбох хүртэл QPay хувьсагчдыг хоосон үлдээж болно; төлбөрийн endpoint тохиргоо байхгүй үед төлбөрийн хүсэлт алдаатай буцна.
7. Deploy дар.

## 5. QPay төлбөр холбох

QPay-ийн Merchant V2 API ашиглана. QPay-аас дараах мэдээлэл авна:

- `QPAY_USERNAME`
- `QPAY_PASSWORD`
- `QPAY_INVOICE_CODE`
- Production API ашиглах зөвшөөрөл

Туршилтын үед:

```env
QPAY_BASE_URL=https://merchant-sandbox.qpay.mn
```

Бодит төлбөрт QPay зөвшөөрсний дараа:

```env
QPAY_BASE_URL=https://merchant.qpay.mn
```

Бусад хувьсагч:

```env
QPAY_CALLBACK_URL=https://ТАНЫ-ДОМЭЙН/api/qpay/callback
MEMBERSHIP_PRICE_MNT=9900
SITE_URL=https://ТАНЫ-ДОМЭЙН
```

Хэрэглэгч `/membership` → QPay нэхэмжлэх үүсгэх → QR төлөх → `Төлбөр шалгах` дарна. Сервер QPay-ийн `/v2/payment/check`-ээр төлбөрийг баталгаажуулж байж 30 хоногийн Premium эрх олгоно. Зөвхөн browser-ийн “амжилттай” гэсэн мэдэгдэлд итгэж эрх олгохгүй.

## 6. Өгүүллэг, аудио, видео нэмэх

1. Админ → Supabase Storage → `media` bucket нээ.
2. `covers`, `audio`, `video` хавтас үүсгэж файлаа байршуул.
3. Файлын Public URL-ийг хуул.
4. Админ формын Cover URL, MP3 URL, Video URL талбарт оруул.
5. Гарчиг, slug, ангилал, тайлбар, үндсэн текст оруулаад `Нийтлэх` сонго.
6. Premium контент бол `Premium контент болгох` checkbox сонго.

MP3-д `audio/mpeg`, видео-д `video/mp4`, зурагт `image/jpeg`, `image/png`, `image/webp` ашиглана. Storage bucket-ийн эхний лимит 500 MB.

## 7. Android дээр код засах

- Хялбар хувилбар: Chrome → https://stackblitz.com/ дээр GitHub repo-оо нээгээд файлуудыг зас.
- Эсвэл GitHub Android апп/Chrome browser-оор файлуудыг засаж commit хий.
- Commit хийх бүрд Vercel автоматаар дахин deploy хийнэ.

## 8. Одоогийн боломж ба дараагийн хөгжүүлэлт

Одоогоор: контент нийтлэх/засах/устгах, хэрэглэгч бүртгэх/нэвтрэх, admin role, Premium эрхийн хугацаа, QPay invoice үүсгэх/баталгаажуулах, аудио/видео URL харуулах.

Дараагийн шатанд нэмэхийг зөвлөж буй зүйлс: нийтлэлийн хайлт ба бодит ангиллын шүүлтүүр, сэтгэгдэл/лайк, үзэлт ба сонссон байрлал хадгалах, зохиогчийн эрх/тайлбар, төлбөрийн тайлан ба буцаалт, захиалгын сунгалт/цуцлалт, eBarimt, админ хэрэглэгчийн удирдлага, SEO/sitemap, имэйл мэдэгдэл, backup, rate limit болон security audit.

## Аюулгүй байдлын санамж

- `SUPABASE_SERVICE_ROLE_KEY`, QPay нууц үг, API түлхүүрийг зөвхөн Vercel Environment Variables-д хадгал.
- Эдгээр түлхүүрийг `NEXT_PUBLIC_` нэрээр бүү эхлүүл.
- GitHub-д `.env.local` хэзээ ч commit хийж болохгүй.
- QPay production төлбөрийг бодит мөнгөөр туршихаас өмнө QPay-тай sandbox тест, буцаалт, callback-ийн гэрчилгээжүүлэлт хий.
- Нийтлэхээс өмнө өөрийн домэйн, үйлчилгээний нөхцөл, нууцлалын бодлого, төлбөр буцаах журам, зохиогчийн эрхийн мэдэгдэл нэм.
