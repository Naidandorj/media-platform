---
name: brain-setup
description: Personalize a student's local AI Brain through a short guided interview, verify folder access, and save useful context. Use for first-time setup or requested reconfiguration, not on every ordinary task.
---

# Set up this AI Brain

Locate the brain root and read AGENTS.md and README.md. Follow the owner's permissions. Apply the shared saving rules rather than duplicating them here.

## Check access first

Confirm the actual folder and whether the assistant can read it. If the user requested a write test, create a small access-test.txt at the root, using a new name if it already exists. Write only a neutral test message, then read it back. Report the actual outcome. Keep the test file until the user chooses to remove it. Do not claim write access based on reading alone.

If write access is unavailable, explain how the user can supply a supported folder or save the resulting files manually. Do not claim the brain is being updated automatically. Continue useful conversation if the user wants, labeling unsaved output.

## Ask only what is useful

Read the existing Context files before asking questions. Do not restart a completed interview.

**Language first.** If Context/Preferences.md has no saved language, ask only this, in both languages, and wait: «Та ямар хэлээр ярилцахыг хүсэж байна вэ — Монгол эсвэл English?» / "Which language would you like to use — Mongolian or English?" Save the answer under "Хэл · Language" in Context/Preferences.md with the date, then continue entirely in that language (see AGENTS.md "Language").

Then ask up to three related questions at a time, and wait. Begin with (Mongolian / English):

1. «Таныг юу гэж дуудах вэ?» / What would you like the AI to call you?
2. «Энэ тархи хувийн ажил, ажил мэргэжил, эсвэл аль алинд нь зориулагдсан уу? Анх ямар ажилд тусламж хэрэгтэй байна?» / Is this brain for personal tasks, work, or both? What is the first task you want help with?
3. «Тэр анхны ажил ямар байвал танд хэрэгтэй вэ? Одоо дагуулмаар байгаа хүсэл сонголт байна уу?» / What would make that first task useful, and are there any preferences you already want it to follow?

Skip answers already known from confirmed user context. Ask more only as required by the first task. Do not request a full life history, financial details, logins, or all future employee plans. For work, ask role/audience only when relevant. For scheduling, clarify timezone. Do not pressure the user to fill unused files.

## Save while you learn

Summarize the useful answers briefly and save confirmed details in Context/About-Me.md, Work.md, or Preferences.md. Use scoped updates with dates. Ask about ambiguous preferences rather than making broad assumptions. Preserve personalized content. Report the actual changed files.

Ask whether the user is ready to start the first useful task or wants to add anything essential. If they supplied an employee setup file, follow its process and save the personalized result in Employees using AGENTS.md's course integration rules. If they are starting a substantial project, create a named project from Projects/Project-Template and replace placeholders with confirmed facts, leaving unknowns explicit.

## Demonstrate continuity when wanted

Ask the user for one real lasting preference. Save it, show the changed section, and give this prompt for a fresh session:

«AI Тархи доторх AGENTS.md болон README.md-г уншаад, холбогдох Context файлуудыг унш. [сэдэв]-ийн талаар хадгалсан хүсэл сонголтыг минь хэлээд [жижиг ажил]-д ашигла.»
("Read AGENTS.md and README.md in my AI Brain, then read the relevant Context files. Tell me my saved preference for [topic] and apply it to [small task].")

Do not label the fresh-session test passed until it actually happens. Setup is complete enough to begin work once access is verified and the first useful context is saved; extra fields can stay blank. Distinguish folder setup, employee configuration, tool connections, and schedules.

