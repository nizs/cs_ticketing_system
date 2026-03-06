# 🎫 Customer Support Zone – CS Ticket System

🔗 **Live Demo:** https://cs-ticket-system-peach.vercel.app

---

## 📌 Project Overview

Customer Support Zone is a React-based ticket management system that helps track customer support tickets and their progress.
Users can move tickets into **In Progress**, complete them, and track resolved tasks.

The project follows a clean UI design and implements dynamic state management using **React UseState**.

---

## 🚀 Features

* 📌 Responsive **Navbar** with menu and new ticket button
* 🎨 Gradient styled **Banner section**
* 🎫 **Customer Ticket Cards** displaying ticket information
* ⚡ Click a ticket to move it to **Task Status (In Progress)**
* 🔄 Ticket status automatically updates from **Open → In Progress**
* ✅ **Complete Button** to resolve tasks
* 📊 **Banner statistics** dynamically update

  * In Progress count
  * Resolved count
* 🔔 **React Toastify notifications** for actions
* 📱 Fully **responsive layout**

---

## 🛠 Technologies Used

* React.js
* Vite
* JavaScript (ES6+)
* Tailwind CSS
* DaisyUI
* React Icons
* React Toastify

---

## 🧠 Project Functionality

### Ticket Interaction

* Clicking a ticket moves it to **Task Status**
* Ticket status changes to **in-progress**
* Duplicate clicks are prevented

### Task Completion

When clicking the **Complete button**:

* The task is removed from **Task Status**
* The ticket status becomes **open** again
* The task is added to **Resolved Tasks**
* The **Resolved counter increases**
* The **In Progress counter decreases**

### Notifications

React Toastify is used to show notifications like:

* Ticket moved to **In Progress**
* Ticket already in progress
* Ticket successfully **resolved**

---

## 📚 React Concepts

### 1. What is JSX, and why is it used?

JSX stands for JavaScript XML. It allows developers to write HTML-like syntax inside JavaScript. JSX makes React code easier to read and helps describe the UI structure clearly.

---

### 2. What is the difference between State and Props?

State is data managed inside a component and can change over time. Props are data passed from a parent component to a child component and are read-only.

---

### 3. What is the useState hook, and how does it work?

`useState` is a React hook used to add state to functional components. It returns a state value and a function that updates the state and re-renders the component.

---

### 4. How can you share state between components in React?

State can be shared by lifting it to a common parent component and passing it down to child components through props.

---

### 5. How is event handling done in React?

Event handling in React is done using camelCase events like `onClick`, `onChange`, etc. These events call functions that handle user interactions.

---
