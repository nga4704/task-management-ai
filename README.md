# 🤖 AI-Powered Project Management System

An intelligent team project management system integrated with AI to help users plan projects, break down tasks, assign work, and optimize productivity.

Built with React, TypeScript, Vite, TailwindCSS, Zustand, Supabase, and AI APIs.

---

## 🧠 Overview

This system helps teams manage projects more efficiently by combining traditional task management with AI assistance.

AI supports:
- Automatic task generation from project descriptions  
- Task prioritization  
- Workload optimization  
- Smart scheduling suggestions  
- Productivity insights  

---

## 🚀 Features

### 👥 Authentication
- Login / Register (Supabase)
- Session management
- Protected routes

### 📁 Project Management
- Create / update / delete projects
- Assign team members
- Track progress

### ✅ Task Management
- Task statuses: TODO / IN_PROGRESS / REVIEW / DONE
- Priority levels: Low / Medium / High
- Assign tasks to users
- Filter & track tasks

### 🧠 AI Features
- AI task breakdown generator
- Smart scheduling suggestions
- Task prioritization
- Productivity analysis

### 📊 Dashboard
- Project overview
- Task statistics
- Team performance insights

### 🌙 UI/UX
- Dark / Light mode
- Responsive design
- Modern UI with TailwindCSS
- Smooth interactions

---

## 🛠 Tech Stack

### Frontend
- ReactJS
- TypeScript
- Vite
- TailwindCSS
- Zustand
- React Query (optional)

### Backend / Services
- Supabase (Auth + Database)
- Node.js / Express (if applicable)
- PostgreSQL
- Prisma ORM (if used)

### AI Integration
- OpenAI API / Groq API
- Prompt Engineering for task generation

---

## 📦 Installation Guide

### 1. Clone project

git clone <your-repository-url>

### 2. Install dependencies

#### Backend
cd backend
npm install

#### Frontend
cd ../frontend
npm install

### 3. Setup environment variables

Create a `.env` file.

#### Backend (.env)

PORT=5000
DATABASE_URL="postgresql://..."
DIRECT_URL="postgresql://..."
SUPABASE_URL="https://..."
SUPABASE_SERVICE_ROLE_KEY="..."
GROQ_API_KEY="..."

#### Frontend (.env)

VITE_SUPABASE_URL=...
VITE_SUPABASE_ANON_KEY=...
VITE_API_URL=http://localhost:5000

### 4. Setup database

Move to the backend folder:

```bash
cd backend
```

Generate Prisma Client:

```bash
npx prisma generate
```

Run database migrations:

```bash
npx prisma migrate deploy
```

If you don't have existing migrations and only want to synchronize the schema with the database:

```bash
npx prisma db push
```

(Optional) Seed demo data:

```bash
npm run seed
```

### 5. Run the project

#### Backend

```bash
npm run dev
```

#### Frontend

```bash
cd frontend
npm run dev
```

Open:

http://localhost:5173
