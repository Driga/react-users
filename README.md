# React Users Directory

A modular React application to list and explore users fetched from a remote API. 
This project is a scalable, maintainable, and performance-optimized React application built with attention to best practices and modern frontend engineering principles. It demonstrates how to structure a real-world app using a modular architecture and clean separation of concerns.


---

## 💡 Key Highlights

### ⚙️ Architecture & Structure

- **Modular file system** based on features:
    - `features/user-list/`
    - `shared/components/`, `shared/hooks/`, `shared/providers/`
- **Barrel files (`index.ts`)** for intuitive imports.
- **Component-driven development** using `Storybook`.

### 🚀 Performance Optimizations

- ✅ `React.memo` and `useMemo` to avoid unnecessary renders.
- ✅ `useCallback` to stabilize callback props.
- ✅ **Debounced search input** to reduce frequent computation.
- ✅ Smart state lifting – only rerendering what’s necessary.

### 🌐 Accessibility & UX

- 📎 Semantic HTML & ARIA roles.
- 🌗 Responsive UI using Bootstrap classes.
- 🌀 Full-screen loaders & error messages.
- 🔀 Keyboard-friendly sortable table with pagination.


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
