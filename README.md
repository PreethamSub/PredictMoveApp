# 📊 Predict Move — Learn Stock Trading & Investments

**Predict Move** is a subscription-based online learning platform for mastering stock trading, financial markets, and investment strategies. Built using the **MERN** stack, the platform delivers high-quality courses and real-time sessions through a secure and scalable web application. (View a live demo [here](https://predictmove.glitch.me/))

---
![predictmove](https://github.com/user-attachments/assets/1293139c-98d9-42fa-a1af-424fc3d6b11f)

## 🔧 Tech Stack

- **Frontend:** React.js, Redux Toolkit, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Authentication & Security:** JWT, bcrypt, CSRF Protection, CORS
- **Media Delivery:** Static assets served via CDN

---

## 🚀 Features

- 📚 **Subscription-Based Courses** — Access premium content on finance and trading  
- 🔐 **Secure Auth System** — Login & registration with hashed passwords and JWTs  
- 📡 **CDN Media Hosting** — Efficient streaming of course videos and resources  
- 🔄 **Role-Based Access** — Admin & user dashboards with custom privileges  
- 🧾 **Course Management** — Admin tools to manage courses, users, and sessions  
- 🌍 **Cross-Origin Security** — CSRF & CORS implemented for API protection  
- 🧠 **Progress Tracking** — Monitor learning and course completion in real-time

---

## 🗂️ Folder Structure

```
predict-move/
├── client/                  # React frontend
│   ├── public/              # Public assets
│   └── src/
│       ├── assets/          # Images, icons, media files (via CDN)
│       ├── components/      # Reusable React components
│       ├── pages/           # Route-based page components
│       ├── redux/           # Redux slices and store setup
│       ├── services/        # API calls via Axios
│       └── utils/           # Utility functions
│
├── server/                  # Express backend
│   ├── controllers/         # Route logic (courses, users, auth)
│   ├── middleware/          # Auth, error handling, CSRF, etc.
│   ├── models/              # Mongoose models (User, Course, etc.)
│   ├── routes/              # Express route definitions
│   ├── config/              # DB and environment config
│   └── utils/               # Helpers, validators
│
├── .env                     # Environment variables
├── .gitignore
├── README.md
├── package.json
└── LICENSE
```

---

## 🔐 Security Highlights

| Feature            | Implementation                             |
|--------------------|---------------------------------------------|
| Password Hashing   | `bcrypt`                                    |
| Token Auth         | `JWT (Access & Refresh Tokens)`             |
| CSRF Protection    | `csurf` middleware                          |
| CORS               | Configured to allow trusted origins only    |

---

## 🌐 CDN Media Integration

Static content like course thumbnails and video streams are served via CDN for improved speed and reliability.

```html
<img src="https://cdn.predictmove.com/images/stock-basics.jpg" alt="Course Image" />
```

---

## 🧪 Getting Started (Development)

### 1. Clone the Repository

```bash
git clone https://github.com/PreethamSub/predictmoveapp.git
cd predict-move
```

### 2. Setup Environment Variables

Create `.env` files in both `/client` and `/server` folders with necessary variables:

```env
# .env (server)
JWT_SECRET=mykey
PORT=3030
MONGODB_URL="mongodb://...<URI>"
```

### 3. Install Dependencies

```bash
# Install server dependencies
cd server && npm install

# Install client dependencies
cd ../client && npm install
```

### 4. Run the App

```bash
# In one terminal, run backend
cd server && npm run dev

# In another terminal, run frontend
npm start
```

---

## 🌱 Roadmap

- ✅ Initial Course Upload & Access Control   
- 🧠 AI-Powered Stock Prediction Modules *(coming soon)* 

---

## 🤝 Contributing

We welcome contributions! Feel free to fork the project.

---

## 📬 Contact

Have questions or feedback? Reach out!!

---
