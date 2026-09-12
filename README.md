# 💻 DevStack Builder

**DevStack Builder** is a React application where users can explore different development technologies and create their own preferred technology stack.

Users can choose technologies from different categories such as frontend, backend, database, styling, and deployment. The selected technologies are then displayed together as a custom development stack.

---

## 🚀 Technologies Used

* React
* TypeScript
* Tailwind CSS
* DaisyUI
* Vite
* JSON
* React Toastify
---

## ✨ Features

### 1. Explore Technologies

Users can browse different development technologies with information such as their name, category, description, and other details.

### 2. Build a Custom Tech Stack

Users can select technologies and add them to their own development stack. Only one technology from the same category stays selected at a time.

### 3. Add and Remove Technologies

Users can add technologies to the stack and remove them when they are no longer needed. The interface also updates depending on whether a technology is selected.

---

# 📘 React Questions & Answers

## 1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside JavaScript or TypeScript.

React uses JSX because it makes creating and understanding the user interface easier.

---

## 2. What is the difference between props and state?

**Props** are used to pass data from a parent component to a child component.

**State** is data managed inside a component that can change over time.

For example, I passed technology information to `TechCard` using props, while the selected technologies are stored in state.

---

## 3. What does the `useState` hook do, and where did you use it in this project?

`useState` allows a React component to store data that can change.

I used it to store the technologies selected by the user.

const [selectedTechnologies, setSelectedTechnologies] =
  useState<Technology[]>([]);

When a technology is added or removed, the state changes and React updates the UI.

---

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to perform tasks after a component renders, such as fetching data from an API or JSON file.

In this project, however, I did **not** use `useEffect` to load the JSON data. I used React's `use()` API with a Promise instead.

If I used the traditional fetching approach, I could use `useEffect` to fetch the JSON data after the component loads.

---

## 5. Why does every item in a `.map()` list need a unique `key` prop?

React needs a unique `key` to identify each item in a list.

It helps React understand which item was added, removed, or updated.

---

## 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different content depending on a condition.

For example, we can check whether the technology stack is empty:

{selectedTechnologies.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  <div>Selected technologies are shown here.</div>
)}

If no technology is selected, the empty-stack message is displayed. Otherwise, the selected technologies are displayed.

Conditional rendering can also be used to change a button depending on whether a technology is already selected.

---

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component passes data to a child component using **props**.

For example:

<TechCard technology={technology} />

Here, `technology` is passed from the parent to `TechCard`.

A child can communicate with the parent by calling a function that the parent passes as a prop.

For example:


<TechCard
  technology={technology}
  handleAddToStack={handleAddToStack}
/>


The child can then call:


handleAddToStack(technology);


So the flow is:

Parent -> Data through props -> Child

Child -> Calls function passed through props -> Parent

This allows the parent to manage the main state while child components can trigger changes.

---
