# 📦 LostFinder - Lost & Found Web Application

LostFinder is a full-stack web application that helps users report lost or found items and connect with the rightful owners through email notifications.

## 🚀 Features

- 📝 Report Lost Items
- 📝 Report Found Items
- 📷 Upload item image
- 📍 Add location, date, and time
- 💾 Store item details in MongoDB Atlas
- 📧 Contact item owner via email
- 🔁 Reply directly to finder using Reply-To email
- ✅ Mark item as Returned
- 🗑 Delete returned items
- 📱 Responsive user interface

---

## 🛠 Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas
- Mongoose

### Email Service
- Nodemailer
- Gmail App Password

---

## 📂 Project Structure

```
LostFinder
│
├── frontend
│   ├── src
│   ├── public
│   └── package.json
│
├── backend
│   ├── models
│   ├── server.js
│   ├── db.js
│   ├── .env
│   └── package.json
│
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/LostFinder.git
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
npm install
npm start
```

---

## Environment Variables

Create a `.env` file inside the backend folder.

```
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_gmail_app_password

MONGODB_URI=your_mongodb_connection_string

PORT=5000
```

---

## API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /api/items | Fetch all items |
| POST | /api/items | Add new item |
| DELETE | /api/items/:id | Delete item |
| PATCH | /api/items/:id/returned | Mark item as returned |
| POST | /api/contact | Contact owner via email |

---

## 🌐 Live Demo

**Frontend**

```
https://lostfind-one.vercel.app
```

**Backend API**

```
https://lostfinder-djm2.onrender.com
```

---

## 📌 Deployment Notes

The application is successfully deployed using:

- **Frontend:** Vercel
- **Backend:** Render
- **Database:** MongoDB Atlas

### Email Notification

The Contact Owner feature is fully implemented.

During local development, email delivery works using SMTP configuration.

For the deployed version, email delivery may require additional configuration with a production email provider and verified sender because cloud hosting platforms enforce email authentication and sender verification policies.

The backend email integration is already implemented and can be configured with a production email service.

---


## Future Enhancements

- User Authentication
- Search & Filter
- Cloudinary Image Upload
- Admin Dashboard

---

## Author

**Pooja Hallikhede**

Computer Science Engineering Student