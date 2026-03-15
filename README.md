# 🍔 Food Delivery App

A responsive **React application** that displays food items fetched from an external API and allows users to add new items through a modal form.

The project follows a **production-ready architecture** using:

* Redux Toolkit
* RTK Query
* Tailwind CSS
* React Hook Form

The UI is designed according to the provided design and works across **mobile, tablet, and desktop devices**.

---

# 🚀 Live Demo

Netlify Deployment:

```
https://your-netlify-link.netlify.app
```

---

# 📌 Features

* Fetch items from API using **RTK Query**
* Display items as responsive cards
* Add new items via **modal form**
* Form validation using **React Hook Form**
* Global state management using **Redux Toolkit**
* Responsive UI with **Tailwind CSS**
* Horizontal scroll cards for mobile view
* Clean and scalable architecture

---

# 🛠 Tech Stack

| Technology      | Purpose                    |
| --------------- | -------------------------- |
| React           | Frontend library           |
| Redux Toolkit   | State management           |
| RTK Query       | API data fetching          |
| Tailwind CSS    | UI styling                 |
| React Hook Form | Form handling & validation |
| React Icons     | Icons                      |
| Netlify         | Deployment                 |

---

# 🌐 API Used

```
http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10
```

The API returns a list of food items that are rendered as cards in the UI.

---

# 📂 Project Architecture

The project follows a **feature-based scalable architecture** used in production React applications.

```
src
│
├── redux
│   └── store.js
│
├── services
│   └── itemApi.js
│
├── features
│   └── items
│       └── itemSlice.js
│
├── components
│   ├── Shared
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   │
│   ├── Banner
│   │   └── Banner.jsx
│   │
│   └── items
│       ├── ItemCard.jsx
│       ├── ItemSection.jsx
│       └── AddItemModal.jsx
│
├── pages
│   └── Home
│       └── Home.jsx
│
├── layouts
│    └── MainLayout.jsx
│
├── routes
│    └── Routes.jsx
│
├── index.css
└── main.jsx
```

---

# ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```
git clone https://github.com/MdAshiqurRahman98/food-delivery-app.git
```

---

### 2️⃣ Navigate to Project Directory

```
cd food-delivery-app
```

---

### 3️⃣ Install Dependencies

```
npm install
```

---

### 4️⃣ Run Development Server

```
npm run dev
```

Application will run at:

```
http://localhost:5173
```

---

# 🧠 State Management

State management is handled using **Redux Toolkit**.

### Store Location

```
src/redux/store.js
```

### API Fetching

Handled using **RTK Query**

```
src/services/itemApi.js
```

RTK Query automatically manages:

* caching
* loading states
* API requests

---

# ➕ Adding New Items

Users can add items using the **Add Item Modal Form**.

Fields include:

* Item Name
* Image URL

Example validation:

```
register("name", { required: "Name is required" })
```

Added items are stored in **Redux state** and displayed immediately.

---

# 📱 Responsive Design

The UI adapts to multiple screen sizes.

| Device  | Layout                  |
| ------- | ----------------------- |
| Mobile  | Horizontal scroll cards |
| Tablet  | 2-column layout         |
| Desktop | Multi-column grid       |

Example Tailwind classes used:

```
flex
grid
overflow-x-auto
rounded-xl
shadow-md
```

---

# 🎨 Styling

Styling is implemented using **Tailwind CSS**.

Styles are located at:

```
src/index.css
```

---

# 🚀 Deployment

The application can be deployed using **Netlify**.

### Build Project

```
npm run build
```

### Deploy

Upload the **dist** folder to Netlify
or connect the GitHub repository for automatic deployment.