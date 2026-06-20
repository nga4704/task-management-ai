# PROJECT CONTEXT

## Project Name

AI-Powered Project Management System

Tiếng Việt:
Xây dựng hệ thống quản lý dự án thông minh tích hợp trí tuệ nhân tạo

---

## Objective

Xây dựng hệ thống quản lý dự án hiện đại hỗ trợ:

* Quản lý Team
* Quản lý Project
* Quản lý Task
* Theo dõi tiến độ
* Phân tích hiệu suất
* Hỗ trợ ra quyết định bằng AI

---

## Tech Stack

### Frontend

* React
* TypeScript
* TailwindCSS
* React Router
* Axios
* React Hook Form
* Recharts

### Backend

* Node.js
* Express.js
* TypeScript
* Supabase Authentication
* JWT

### Database

* PostgreSQL
* Supabase

### ORM

* Prisma

### AI

* OpenAI API

---

## Core AI Features

### Progress Prediction (4)

Dự đoán khả năng hoàn thành dự án.

### Delay Risk Detection (2)

Phát hiện nguy cơ trễ tiến độ. (+)

### Schedule Suggestion (3)

Đề xuất lịch trình tối ưu.

### Team Productivity Analysis (1)

Đánh giá hiệu suất nhóm. (+)

---

## Main Modules

### Authentication

- Login
- Register
- Session Management

### Team Management

- Team CRUD
- Member Management
- Role Management

### Project Management

- Project CRUD
- Project Overview

### Task Management

- Task CRUD
- Assignment
- Status Tracking
- Progress Tracking

### Collaboration

- Notifications
- Activity Tracking

### Visualization

- Dashboard
- Kanban Board
- Calendar
- Timeline

### Analytics

- Performance Metrics
- Progress Reports
- Team Productivity Analysis

### AI Insights

- Progress Prediction
- Delay Risk Detection
- Schedule Suggestion
- Productivity Analysis

---

## User Roles

### Team Owner

- Tạo và quản lý Team.
- Quản lý thành viên trong Team.
- Tạo và quản lý Project.
- Toàn quyền trong phạm vi Team.

### Member

- Tham gia Project.
- Thực hiện Task được giao.
- Theo dõi tiến độ công việc.
- Cập nhật trạng thái Task.

---

## Architecture

React Frontend

↓

Express REST API

↓

Prisma ORM

↓

Supabase PostgreSQL

↓

OpenAI API

---

## Coding Principles

* Feature-based architecture
* Reusable components
* Strict TypeScript
* Responsive UI
* Clean Architecture
* SOLID Principles
