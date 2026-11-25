# Миний AI Тархи · My AI Brain

**AI Wonderful** · AI ажилтны хичээл · Эхлэлийн хувилбар 1.0 · 2026 оны 11-р сар

---

## 🇲🇳 Монгол

Энэ фолдер бол таны AI ажилтнуудын нэгдсэн «тархи»: таны тухай мэдээлэл, AI ажилтнуудын заавар, дахин ашиглах аргачлал, хийж буй төслүүд бүгд энд хадгалагдана. Үндсэн фолдерын нэрийг сольж болно. Нэг л ажлын хувийг хэрэглэж, нөөц хувь (backup) хадгалаарай.

### Эндээс эхэлнэ

1. **ZIP файлаа эхлээд задална.** Windows дээр баруун товшоод **Extract All**, Mac дээр ZIP файлаа давхар товшино.
2. **Claude апп дээр** задалсан фолдероо ажлын фолдероор сонгоно (эсвэл local project-д нэмнэ), шаардлагатай зөвшөөрлийг өгнө. ZIP файлыг upload хийх нь фолдер холбосон гэсэн үг **биш**.
3. Дараах мессежийг хуулж илгээнэ:

> AGENTS.md болон README.md файлуудыг уншаарай. Ямар фолдерт хандаж чадаж байгаагаа баталгаажуул. Бичих эрхээ шалгахын тулд жижиг access-test.txt файл үүсгээд буцааж унш. Дараа нь Skills/brain-setup/SKILL.md-г дагаж миний тархийг тохируулахад тусал. Хэдхэн асуулт асууж, миний өгсөн хэрэгтэй мэдээллийг л хадгал.

4. Claude-ийн хадгалсан мэдээллийг хамт шалгана. Бүх талбарыг бөглөхөөс өмнө жинхэнэ ажлаа эхэлж болно.

Claude фолдерт хандаж чадахгүй бол Claude desktop апп-аа ашиглаж, фолдерын зөвшөөрлөө шалгаарай. Claude танд хадгалах файлуудыг гаргаж өгч болно, гэхдээ энэ нь фолдер автоматаар шинэчлэгдэж байна гэсэн үг биш.

### Юу хаана байх вэ

| Фолдер | Юу хадгалах вэ | Эндээс эхэл |
| --- | --- | --- |
| Context | Таны болон ажлын тань тухай хэрэгтэй мэдээлэл, зорилго, хүсэл сонирхол | [Миний тухай](Context/About-Me.md), [ажил](Context/Work.md), [хүсэл сонголт](Context/Preferences.md) |
| Employees | Таны AI ажилтнуудын хувийн заавар | [Ажилтны заавар](Employees/README.md) |
| Skills | Дахин ашиглах аргачлал, туслах материал | [Skill-ийн заавар](Skills/README.md) |
| Projects | Тодорхой төслүүдийн бриф, файл, шийдвэр, дараагийн алхам | [Төслийн заавар](Projects/README.md) |

Claude энэ газрын зургийг ашиглан тухайн ажилд хэрэгтэй файлуудаа сонгоно. Бүх тархийг тань үргэлж уншихгүй.

### Хэрэгтэй хүсэлтүүд (хуулж ашиглана)

- «Тархины минь эхлэлийн зааврыг уншаад ...-д тусал.»
- «Цаашид ингэж хийгээрэй. Энэ хүсэл сонголтыг тархиндаа хадгал.»
- «Энэ өөрчлөлт зөвхөн энэ төсөлд. Ерөнхий хүсэл сонголтыг минь бүү өөрчил.»
- «Тархины зааврыг уншаад, энэ хичээлийн тохиргооны файлыг дага. Бэлэн болсон ажилтны зааврыг Employees-д хадгал.»
- «Юу хийснээ, шийдвэр, санал хүсэлт, дараа нь юу хийхээ хадгал.»
- «[төслийн нэр]-ийн handoff-ийг уншаад хаана зогссоныг хэл.»
- «Тархинд минь юу өөрчилснөө харуул.»

### Эхлэлийн файлууд юу хийдэг вэ

- **AGENTS.md** — Claude-ийн ажиллах ерөнхий заавар (англиар бичигдсэн, Claude-д зориулсан).
- **CLAUDE.md** — Claude-г AGENTS.md руу чиглүүлнэ. Устгахгүй байгаарай.
- **.md файл** — гарчиг, жагсаалттай энгийн текст файл. Notepad-аар ч нээж болно.
- **SKILL.md** — дахин ашиглах skill фолдер доторх заавар. Claude-ээс тухайн замыг унш гэж хүсэхэд ажиллана. Claude-д автоматаар суугдахгүй.

Эхлэлийн хувилбарт тархи тохируулах, тархи шинэчлэх, төслийн handoff гэсэн 3 skill бий. Бусад мэргэжлийн skill-үүдийг хичээлийн явцад нэмнэ.

### Хяналтаа өөртөө байлга

- Claude-ээс юу хадгалснаа харуулахыг хүс.
- «Оруулаагүй» гэсэн талбар бол хоосон, таны тухай баримт биш.
- Энэ фолдер чатын түүхийг бүхэлд нь хуулахгүй, данс холбохгүй, хуваарь идэвхжүүлэхгүй, AI-г дахин сургахгүй.
- **Нууц үг, API түлхүүр, нэвтрэх кодыг тархиндаа хэзээ ч бүү хадгал.**
- Нууц төслүүдэд зөвхөн хэрэгтэй мэдээлэлд нь хандах эрх өг.

---

## 🇬🇧 English

This folder is your shared home for useful information, employee instructions, reusable processes, and current work. You can rename the main folder. Keep one working copy and back it up.

**Start:** (1) Extract the ZIP. (2) In the Claude app, select the extracted folder as the working folder and grant access — an uploaded ZIP does not connect the folder. (3) Send:

> Read AGENTS.md and README.md in this AI Brain. Confirm which folder you can access. Create and read back a small access-test.txt file in this folder to verify write access. Then follow Skills/brain-setup/SKILL.md to help me personalize my brain. Ask a few questions at a time and save only useful information I provide.

**Map:** Context = facts, goals and preferences · Employees = personalized job instructions · Skills = reusable processes · Projects = briefs, files, decisions and next steps.

**Language:** Claude asks once whether you prefer Mongolian or English, saves your choice in Context/Preferences.md, and uses it for conversation and saved notes.

Ask the assistant to show what it saved. "Not provided" / «Оруулаагүй» fields are blank, not facts. The folder does not transfer chat history, connect accounts, activate schedules, or retrain a model. Never store passwords, API keys, or login codes here.
