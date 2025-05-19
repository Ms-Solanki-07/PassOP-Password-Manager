# 🔐 PassOP - Password Manager

**PassOP** is a full-stack web application that allows users to securely manage and store their passwords. Built with **React.js**, **Express.js**, **MongoDB**, and styled using **Tailwind CSS**, it provides a minimal, clean, and responsive interface for saving, editing, copying, and deleting passwords.

---

## 🧩 Features

- ✅ Add, edit, and delete passwords
- 👁 Toggle password visibility
- 🔒 Passwords hidden by default for privacy
- 📋 Copy site, username, or password to clipboard
- 🔔 Real-time toast notifications for actions
- ☁️ Data stored in MongoDB using a backend API
- 🌐 Hosted backend using Render



---

## ⚙️ Tech Stack

### Backend

- Node.js + Express
- MongoDB + Mongoose
- CORS + Body-parser
- dotenv

### Frontend

- React `^19.1.0`
- Tailwind CSS
- Vite
- React Toastify
- UUID

---

## 🚀 Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB connection string (MongoDB Atlas recommended)

---

### 🔧 Installation - How to Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/your-username/passop.git
cd passop
```

### 2. Setup Backend
```bash 
cd backend
npm install
```
Create a ``.env`` file inside ``/backend``:
```
MONGO_URI=your_mongodb_connection_string
PORT=3000
```

Start the backend server:
```
npm start
```

### 3. Setup Frontend
Open a new terminal:
```
cd ..
npm install
npm run dev
```
The app will run locally at http://localhost:5173

---

## 🌐 API Endpoints
| Method | Endpoint | Description        |
| ------ | -------- | ------------------ |
| GET    | `/`      | Get all passwords  |
| POST   | `/`      | Add a new password |
| DELETE | `/`      | Delete a password  |
---
## 🛡 Security Note
⚠️ This version is for educational/demo purposes only.
Do not store real passwords.
For production use, consider adding:

- Password encryption (e.g., using Crypto or bcrypt)

- User authentication

- Secure HTTPS configuration

---
## ✍️ Authors <a name = "authors"></a>

- Ms Solanki - [GitHub](https://github.com/Ms-Solanki-07)

---
## 🎉 Follow us <a name = "follow-us"></a>
Stay connected and get the latest updates:
- LinkedIn: https://www.linkedin.com/in/ms-solanki-07-ms/
- Twitter: https://x.com/Ms_Solanki_07
- GitHub: https://github.com/Ms-Solanki-07
- Instagram: https://www.instagram.com/ms_solanki_07
---