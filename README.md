# React Users Directory

A modular React application to list and explore users fetched from a remote API.  
Built with **React**, **Next.js** **TypeScript**, **React-Bootstrap**, **Jest**, and supports **modals**, **pagination**, **search**, **sorting**, **unit tests**, and **Storybook**.

---

## 🚀 Features

- ✅ The project uses a feature-folder-based structure to support extensibility.
- ✅ Fetches users from API (`https://jsonplaceholder.typicode.com/users`)
- ✅ Search users by name (with debounce, client side)
- ✅ Paginated list (client side)
- ✅ Modal to show user details (retrieving from API)
- ✅ Custom React Context-based modal system
- ✅ Shared components and hooks.
- ✅ Hooks with extracted logic from components.
- ✅ Unit tests with Jest and React Testing Library
- ✅ Storybook documentation for components
- ✅ Preventing redundant component renders with React.memo, useMemo, useCallback

---

## 📦 Tech Stack

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [React-Bootstrap](https://react-bootstrap.github.io/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Storybook](https://storybook.js.org/)

---

## 🖥️ Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev

# 3. Run tests
npm run test

# 4. Run Storybook
npm run storybook
```
---

## 🔮 Future Improvements
- **State Management Integration:**
Introduce a proper state management library (such as Redux Toolkit or Zustand) for better scalability and state handling.

- **Move Filtering and Pagination to Server-Side:**
Offload data filtering and pagination to the server to improve performance on large datasets.

- **Husky Pre-commit Hooks:**
Add Husky hooks for enforcing code quality checks (linting, formatting, tests) before each commit.

- **Enhanced Linter Configuration:**
Extend ESLint rules for stricter code quality, consistency, and adherence to best practices.