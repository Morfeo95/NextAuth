# 🔐 NextAuth Starter (App Router)

- A clean and minimal authentication starter built with Next.js App Router and NextAuth.
- Designed to be easy to understand, extend and integrate into any project.

  ## ☕ Support the project

If this project saved you time or helped you learn something, you can support my work here:

[![Ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/franciscovera72624)


This project focuses on separation of concerns, clean architecture, and a developer-friendly structure.
---
## ✨ Features

- ✅ Next.js App Router (latest architecture)

- 🔐 Authentication with NextAuth

- 📧 Email & Password (Credentials Provider)

- 🔑 Google OAuth Provider

- 🧠 JWT-based sessions

- 🧭 Role-based access control (ADMIN / USER)

- 🛡️ Route protection via middleware

- 🧩 Clean separation of UI, logic and services

- 🚫 No UI framework required (Tailwind optional)

- 🧪 Demo-ready (no real backend required)

## 📁 Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── auth/[...nextauth]/route.js   # NextAuth configuration
│   │   ├── register/route.js             # Demo register endpoint
│   │   └── backend-status/route.js       # Health check
│   │
│   ├── auth/
│   │   ├── login/page.jsx
│   │   ├── register/page.jsx
│   │   └── forgot-password/page.jsx
│   │
│   ├── layout.js
│   ├── Providers.jsx
│   └── globals.css
│
├── components/
│   ├── AuthLayout.jsx
│   ├── LoginForm.jsx
│   └── RegisterForm.jsx
│
├── context/
│   └── AuthContext.jsx
│
├── core/
│   └── auth/
│       ├── useLogin.js
│       ├── useRegister.js
│       └── validators.js
│
├── lib/
│   └── apiClient.js
│
└── utils/
    └── roleUtils.js
```

## 🔐 Authentication Flow
* Credentials Login

- User submits email & password

- NextAuth validates credentials (demo logic)

- JWT is generated

- User role is stored in the token and session

- Google Login

- OAuth handled by NextAuth

- Role assigned during login

- Same session flow as credentials

# 🧭 Role System

* Roles are defined in one place:

```
export const ROLES = {
  ADMIN: "ADMIN",
  USER: "USER",
};
```


- Default redirect behavior:

- getDefaultRedirectPath(role)

ADMIN → /admin

USER → /dashboard

Guest → /

Route access is enforced using Next.js middleware.

## 🛡️ Protected Routes

Protected routes are defined in middleware.js:

```
export const config = {
  matcher: [
    "/dashboard/:path*",
    "/admin/:path*",
  ],
};
```


## Unauthorized access:

- Not logged in → redirected to /auth/login

- Logged in without permission → redirected to /403

## ⚙️ Environment Variables

### Create a .env.local file:

- NEXTAUTH_SECRET=your-secret-key
- NEXTAUTH_URL=http://localhost:3000

- GOOGLE_CLIENT_ID=your-google-client-id
- GOOGLE_CLIENT_SECRET=your-google-client-secret

## 🚀 Getting Started
npm install
npm run dev


### Visit:

http://localhost:3000/auth/login

## 🧪 Demo Notes

- Registration is simulated

- No database required

- Credentials provider accepts any email/password

- Ideal for prototyping, learning or extending with a real backend

## 🧩 Extending the Project

### You can easily add:

- 🗄️ Database (Prisma, Drizzle, TypeORM)

- 🔐 Password hashing (bcrypt)

- 🧑‍🤝‍🧑 More roles & permissions

- 🧾 Email verification

- 🔁 Refresh tokens

- 🎨 UI framework (Tailwind, Chakra, MUI)

- 📌 Why This Starter?

## This project is intentionally:

- Simple

- Readable

- Non-opinionated

- Production-friendly

### It avoids overengineering and focuses on clarity.

## 📄 License

**MIT License
Use it freely in personal or commercial projects.**

