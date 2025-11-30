# 🗂️ Todo Backend API (Node.js + Express + MongoDB)

A simple REST API for a Todo application built with Node.js, Express, and MongoDB (Mongoose).  
Supports creating, reading, updating, deleting, searching, and filtering tasks. Frontend will be added later.

---

## 🚀 Features

- Create, read, update, and delete tasks (CRUD)
- Mark tasks as completed
- Search tasks by title (`?search=xyz`)
- Filter tasks by status (`?status=completed` or `status=pending`)
- MongoDB + Mongoose for data storage

---

## 🛠 Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB (Atlas or local)
- **ODM:** Mongoose
- **Config:** dotenv

---

## 📦 Setup & Installation

1. **Clone the repository**
```bash
git clone https://github.com/<your-username>/todo-backend.git
cd todo-backend
```

2. **Install dependencies**
```bash
npm install
```

3. **Environment variables**  
Create a `.env` file in the project root based on `.env.example`:
```text
MONGO_URI=your-mongodb-connection-string-here
PORT=5000
```
- For MongoDB Atlas, use the connection string from the Atlas dashboard.
- Make sure your IP is allowed in Atlas Network Access.

4. **Run the server**
```bash
# development (if you add nodemon)
npm run dev

# or plain node
npm start
```

The API will be available at:
```
http://localhost:5000
```

---

## 📚 API Endpoints

**Base URL:** `http://localhost:5000`

### Tasks

- **Create a task**
  - `POST /tasks`
  - Body (JSON):
```json
    {
      "title": "Buy milk",
      "description": "2% low fat"
    }
```

- **Get all tasks (with optional search/filter)**
  - `GET /tasks`
  - Query params:
    - `search` (optional) – filters by title (partial, case-insensitive)
    - `status` (optional) – `"completed"` or `"pending"`
  - Examples:
    - `GET /tasks`
    - `GET /tasks?search=read`
    - `GET /tasks?status=completed`
    - `GET /tasks?search=read&status=pending`

- **Update a task**
  - `PUT /tasks/:id`
  - Body (JSON, any updatable fields):
```json
    {
      "title": "Buy milk and bread",
      "completed": true
    }
```

- **Mark a task as complete (shortcut)**
  - `PATCH /tasks/:id/complete`

- **Delete a task**
  - `DELETE /tasks/:id`

---

## 🧱 Project Structure
```
todo-backend/
├── config/
│   └── database.js      # MongoDB connection
├── models/
│   └── Task.js          # Mongoose Task schema/model
├── routes/
│   └── tasks.js         # Task routes (CRUD + search/filter)
├── .env.example         # Example env vars (no secrets)
├── .gitignore
├── package.json
├── server.js            # Express app entry
└── README.md
```

---

## 🔐 Environment & Security

- `.env` is not committed (see `.gitignore`).
- Never push real `MONGO_URI` or other secrets to GitHub.
- For sharing, only push `.env.example`.

---

## 🧭 Next Steps

- Add a React (or other) frontend to consume this API.
- Implement authentication (JWT) so each user has their own tasks.
- Add reminder times and notifications for tasks.

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.# Todo-Backend-API-Node.js-Express-MongoDB
# todo-backend-api
