# DATABASE SCHEMA

## users

id UUID PK

full_name VARCHAR(255)

email VARCHAR(255) UNIQUE

password_hash TEXT

avatar_url TEXT

role ENUM

created_at

updated_at

---

## teams

id UUID PK

name VARCHAR(255)

description TEXT

owner_id UUID FK users

created_at

updated_at

---

## team_members

id UUID PK

team_id UUID FK teams

user_id UUID FK users

role ENUM

joined_at

---

## projects

id UUID PK

team_id UUID FK teams

name VARCHAR(255)

description TEXT

status ENUM

priority ENUM

start_date

due_date

progress INTEGER

created_by UUID

created_at

updated_at

---

## project_members

id UUID PK

project_id UUID

user_id UUID

role ENUM

---

## tasks

id UUID PK

project_id UUID

assignee_id UUID

title VARCHAR(255)

description TEXT

status ENUM

priority ENUM

start_date

due_date

estimated_hours

actual_hours

created_at

updated_at

---

## task_comments

id UUID PK

task_id UUID

user_id UUID

content TEXT

created_at

---

## notifications

id UUID PK

user_id UUID

title

message

is_read

created_at

---

## ai_insights

id UUID PK

project_id UUID

prediction_score

delay_risk

recommendation TEXT

created_at

---

## Relationships

User

↓

TeamMember

↓

Team

↓

Project

↓

Task

↓

TaskComment
