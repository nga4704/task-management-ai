# AI Context

Project:
AI-Powered Project Management System

Architecture:

User
↓
Team
↓
Project
↓
Task

Tech Stack:

Frontend:

* React
* TypeScript
* TailwindCSS
* React Query
* React Router
* Axios

Backend:

* Express.js
* TypeScript
* Prisma
* PostgreSQL (Supabase)

AI:

* OpenAI API

Architecture Pattern:

Controller
↓
Service
↓
Prisma

Rules:

* No business logic in controller
* Use React Query for server state
* Use TypeScript strict mode
* Never use any
* Never rewrite unrelated files
* Reuse existing components when possible
* Return only modified files

Current Goal:

Complete MVP for graduation thesis.

Priority:

1. Team
2. Project
3. Task
4. Dashboard
5. Notification
6. Analytics
7. AI Features

Mỗi chat mới với ChatGPT/Copilot/Cursor đều mở đầu bằng:
Read docs/ai-context.md first.
Follow all project rules.

-------------------------------------------------------------------------

Chia Chat theo Bounded Context
Chat A — Team Module
Context:
Team Management only

Modules:
Team
TeamMember

Features:
- Create Team
- Invite Member
- Remove Member
- Update Member Role

Chat B — Project Module
Context:
Project Management only

Modules:
Project

Features:
- Create Project
- Project Detail
- Project List
- Project Switcher

Chat C — Task Module
Context:
Task Management only

Modules:
Task

Features:
- CRUD Task
- Assign Task
- Update Status
- Update Progress

Chat D — Board Module
Context:
Kanban Board only

Modules:
Board

Features:
- Drag and Drop
- Task Movement
- Status Synchronization

Chat E — Dashboard & Analytics
Context:
Dashboard only

Features:
- Statistics
- Charts
- Team Metrics
- Project Metrics

Chat F — AI Module
Context:
AI Features only

Features:
- Progress Prediction
- Delay Risk Detection
- Productivity Analysis
- Schedule Suggestion

Workflow Chuẩn Cho Từng Task
Mỗi task phải có format cố định.

Ví dụ:

Task:
Implement Get Project Detail API

Context:
Project Module

Current Architecture:
Controller -> Service -> Prisma

Requirements:

- Get project by id
- Include task count
- Include member count
- Handle project not found

Files Allowed:

- project.controller.ts
- project.service.ts

Do not modify other files.

Return:

1. Assumptions
2. Modified files
3. Summary
4. Risks
5. Tests

Workflow Làm Việc Hằng Ngày
Bước 1

Xác định module.

Ví dụ:

Project Detail Page
Bước 2

Viết specification.

Goal:
Display project information.

Requirements:
- Name
- Description
- Status
- Member count
- Task count
Bước 3

Cho AI generate.

Bước 4

Review bằng prompt review.

Bước 5

Merge vào codebase.

Prompt Review Chuẩn

Sau khi AI code xong:

Act as a Senior Fullstack Engineer.

Review the implementation.

Check:

1. TypeScript issues
2. React Query mistakes
3. Prisma query issues
4. N+1 query risks
5. Security issues
6. Missing validation
7. Error handling
8. Architecture violations
9. Unnecessary re-renders
10. Maintainability concerns

Return only issues found.

Prompt Debug Chuẩn

Đây là prompt bạn nên dùng thường xuyên.

Act as a Senior Debugging Engineer.

Analyze the problem.

Context:
[paste relevant code]

Error:
[paste error]

Expected Behavior:
[paste expectation]

Return:

1. Root cause
2. Why it happens
3. Minimal fix
4. Better long-term solution
5. Files affected

Do not rewrite the whole code.

Roadmap Thực Tế Cho Dự Án Hiện Tại

Dựa trên những gì bạn đã làm trong các cuộc chat gần đây:

Sprint 1 (Hoàn thiện Core)
Auth
Team
Project
Task

Checklist:

Team CRUD
Member Management
Project CRUD
Task CRUD
Assign Task
Update Status
Update Progress

Sprint 2 (Board)
Kanban Board

Checklist:

Fetch tasks
Group by status
Drag & Drop
Optimistic Update

Sprint 3 (Dashboard)
Dashboard
Analytics

Checklist:

Total Projects
Total Tasks
Completed Tasks
Team Productivity

Sprint 4 (Notifications)
Notification Center

Checklist:

Task Assigned
Status Changed
Deadline Approaching

Sprint 5 (AI)

Chỉ làm sau khi hệ thống chạy ổn định.

Feature 1
Project Summary

AI đọc:

project info
tasks
progress

và sinh summary.

Feature 2
Delay Risk Detection

Rule-based + AI.

Feature 3
Productivity Analysis

Phân tích:

completed tasks
overdue tasks
completion rate

Master Prompt Dùng Cho Mọi Task

Lưu vào:

docs/master-prompt.md
Read docs/ai-context.md first.

Project:
AI-Powered Project Management System

Architecture:

User
↓
Team
↓
Project
↓
Task

Backend:
Controller -> Service -> Prisma

Rules:

* TypeScript strict
* No any
* No business logic in controller
* Do not rewrite unrelated files
* Follow existing architecture
* Reuse existing components

Before implementation:

1. List assumptions
2. Identify missing information
3. Ask questions if needed

After implementation return:

1. Summary
2. Modified files
3. Risks
4. Tests
5. Migration steps (if any)

