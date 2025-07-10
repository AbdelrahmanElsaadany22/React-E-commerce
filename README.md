# 🛍️ React E-commerce Website

This is a full-featured **E-commerce web application** built using **React.js**, offering a smooth shopping experience including product browsing, cart management, authentication, checkout, and more.

## 🚀 Live Demo

🔗 [Click here to view the live site](https://abdelrahmanelsaadany22.github.io/React-E-commerce/)

---

---

## 🧰 Technologies & Tools Used

### 🖥️ Frontend

- **React.js** — main library for building UI components
- **React Router** — for client-side routing
- **React Context API** — for managing global cart and auth state
- **React Query** — for data fetching and caching
- **React Hot Toast** — for clean and simple user notifications
- **Axios** — for handling HTTP requests
- **Tailwind CSS / Custom CSS** — for styling and layout
- **React Spinners** — for loading indicators

### 🔐 Authentication

- JWT-based token system for user login
- Tokens stored in `localStorage`

### 🛒 Features

- Browse and view recent products
- Add products to shopping cart
- View and update cart
- Remove items from cart
- Checkout functionality
- Login/Signup system
- Responsive design for desktop and mobile

---

## 📁 Project Structure

```bash
e:/routeReact/p2/
└── E-commerce/
    ├── .gitignore
    ├── dist/ (ignored)
    ├── eslint.config.js
    ├── index.html
    ├── node_modules/ (ignored)
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.js
    ├── public/
    │   └── vite.svg
    ├── README.md
    ├── src/
    │   ├── App.css
    │   ├── App.jsx
    │   ├── assets/
    │   │   ├── icon.svg
    │   │   ├── images/
    │   │   │   ├── download (1).jpeg
    │   │   │   ├── download (2).jpeg
    │   │   │   ├── ...
    │   ├── components/
    │   │   ├── About/
    │   │   ├── Brands/
    │   │   ├── Cart/
    │   │   ├── Categories/
    │   │   ├── ...
    │   ├── Context/
    │   ├── Hooks/
    │   ├── index.css
    │   └── main.jsx
    ├── tailwind.config.js
    └── vite.config.js