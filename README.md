# Expense Tracker

A compact, user-friendly React application for tracking personal income and expenses with instant UI updates and persisted data. 

---

## Demo

- Live demo: (add your deployed URL here)

---

## Tech stack

- React (functional components & hooks)
- Context API + Reducer for global state
- JavaScript (ES6+), HTML, CSS
- Browser `localStorage` for persistence

---

## Core features

- Add and remove income/expense transactions (description + amount)
- Live balance, total income, and total expenses
- Transaction list with delete actions
- Persistent data via `localStorage` (survives refresh)
- Responsive UI for desktop and mobile

---

## Architecture & approach

Modular component structure with a centralized state using the Context API and a reducer (`context/AppReducer.js`). Components live in `src/components/` and state logic in `src/context/` to ensure separation of concerns and ease of testing.

---

## Challenges & solutions

- State management: Solved prop-drilling and predictable updates with a reducer + Context pattern.
- Persistence: Synchronized app state with `localStorage` so users keep data between sessions without a backend.

---

## How to run locally

1. Install dependencies:

```bash
npm install
```

2. Run the app:

```bash
npm start
```

App will open at `http://localhost:3000` by default.

---


