# API SPECIFICATION

Base URL

/api/v1

---

# AUTH

POST /auth/register

POST /auth/login

POST /auth/logout

GET /auth/profile

PUT /auth/profile

---

# TEAMS

GET /teams

POST /teams

GET /teams/:teamId

PUT /teams/:teamId

DELETE /teams/:teamId

POST /teams/:teamId/members

DELETE /teams/:teamId/members/:userId

GET /teams/:teamId/projects

---

# PROJECTS

GET /projects

POST /projects

GET /projects/:projectId

PUT /projects/:projectId

DELETE /projects/:projectId

---

# PROJECT MEMBERS

GET /projects/:projectId/members

POST /projects/:projectId/members

DELETE /projects/:projectId/members/:userId

---

# TASKS

GET /tasks

POST /tasks

GET /tasks/:taskId

PUT /tasks/:taskId

DELETE /tasks/:taskId

---

# COMMENTS

GET /tasks/:taskId/comments

POST /tasks/:taskId/comments

DELETE /comments/:commentId

---

# ANALYTICS

GET /analytics/dashboard

GET /analytics/team/:teamId

GET /analytics/project/:projectId

---

# AI

POST /ai/predict-progress

POST /ai/suggest-schedule

POST /ai/analyze-risks

GET /ai/insights/:projectId
