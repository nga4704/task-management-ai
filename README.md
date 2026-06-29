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

```bash id="clone_step"
git clone <your-repository-url>
cd frontend

### 2. Install dependencies
// BACKEND
npm install

// FRONTEND
npm install

### 3. Setup environment variables
Create a .env file in the root folder:
// BACKEND
PORT=5000
DATABASE_URL="postgresql://postgres.."
DIRECT_URL="postgresql://postgres:.."
SUPABASE_URL=https://..."
SUPABASE_SERVICE_ROLE_KEY=""
GROQ_API_KEY=""

// FRONTEND
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_API_URL=http://localhost:5000

### 4. Run project in development mode
// BACKEND
npm run dev

// FRONTEND
npm run dev

Then open:
http://localhost:5173
