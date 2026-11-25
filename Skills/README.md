# Дахин ашиглах skill-үүд · Reusable skills

Эдгээр нь эхлэлийн хувилбартай хамт ирсэн, заавар дээр суурилсан skill-үүд. Claude тархинд тань хандаж байх үедээ уншиж, дагаснаар ажиллана. Өөрөө суугдахгүй, арын горимд ажиллахгүй, Claude-д шинэ эрх өгөхгүй.
*Instruction-based skills that work when an assistant reads and follows them with brain access. They don't install themselves, run in the background, or grant new permissions.*

| Skill | Юунд ашиглах вэ · Use it for |
| --- | --- |
| [Тархи тохируулах · Brain setup](brain-setup/SKILL.md) | Хандалтыг шалгаж, богино ярилцлагаар тархиа тохируулах · Check access and personalize the brain |
| [Тархи шинэчлэх · Brain maintenance](brain-maintenance/SKILL.md) | Хэрэгтэй санал, хүсэл сонголт, шийдвэрийг зөв газар хадгалах · Save feedback, preferences, and decisions in the right place |
| [Төслийн handoff · Project handoff](project-handoff/SKILL.md) | Ахицаа хадгалж, өөр чат эсвэл апп-д үргэлжлүүлэх · Record progress and continue in another session or tool |

AGENTS.md нь Claude-д эдгээрийг хэзээ унших ёстойг хэлдэг. Шаардлагатай бол шууд хэлж болно: «Миний AI Тархи доторх Skills/brain-maintenance/SKILL.md-г уншаад дага.»
*If needed, ask explicitly: "Read and follow Skills/brain-maintenance/SKILL.md in my AI Brain."*

Skill-ийг Claude-ийн skill системд суулгахыг хүсвэл Claude-ийн одоогийн албан ёсны зааврыг дагана. Суулгасан хувь энд байгаа үндсэн файл өөрчлөгдөхөд автоматаар шинэчлэгдэхгүй байж болно. Үндсэн хувийг энд хадгалж, суулгасан хувиа зориуд шинэчилнэ.
*To install a skill in Claude, follow Claude's current official instructions. An installed copy may not update when these master files change; keep the master here and update installed copies deliberately.*

Хэрэгтэй үедээ шинэ skill нэмнэ. Skill нь SKILL.md файл болон шаардлагатай бол references, assets, scripts фолдертой байж болно. Энэ эхлэлийн хувилбарт илтгэлийн программ, API холболт, төлбөртэй генерац, мэргэжлийн эвлүүлгийн ажлын урсгал ороогүй.
*Add task skills as needed (SKILL.md plus optional references, assets, or scripts). No presentation software, API connection, paid generation, or professional editing workflow is included.*
