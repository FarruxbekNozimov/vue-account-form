# Vue Account Form

Welcome to **Vue Account Form**! This project is a test task designed to showcase a clean, modular, and scalable implementation of a Vue 3 application using Pinia for state management, TypeScript for type safety, and Vite for a fast development experience.

---

## Features

- **Vue 3**: Built with the latest version of Vue for a modern and reactive UI.
- **Pinia**: State management made simple and scalable.
- **TypeScript**: Type-safe code for better maintainability and fewer runtime errors.
- **Vite**: Blazing-fast development and build tooling.
- **Reusable Components**: Modular and reusable components for clean code.
- **Form Validation**: Real-time validation for account fields.
- **Responsive Design**: Works seamlessly across devices.

---

## Project Structure

Here’s an overview of the project structure:

```
vue-account-form/
├── src/
│   ├── assets/              # Static assets (images, styles, etc.)
│   ├── components/          # Reusable Vue components
│   ├── stores/              # Pinia stores for state management
│   ├── services/            # Business logic and API services
│   ├── utils/               # Utility functions and helpers
│   ├── views/               # Main views/pages
│   ├── App.vue              # Root Vue component
│   └── main.ts              # Application entry point
├── public/                  # Public assets (e.g., favicon)
├── index.html               # Main HTML file
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript configuration
├── package.json             # Project dependencies and scripts
└── README.md                # Project documentation (you're here!)
```

---

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

- Node.js (v16 or higher recommended)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/vue-account-form.git
   ```
2. Navigate to the project directory:
   ```bash
   cd vue-account-form
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Project

- Start the development server:

  ```bash
  npm run dev
  ```

  Open your browser and navigate to `http://localhost:5173`.

- Build for production:
  ```bash
  npm run build
  ```

### Running Tests

- Run unit tests with Vitest:
  ```bash
  npm run test:unit
  ```

### Linting

- Lint your code with ESLint:
  ```bash
  npm run lint
  ```

---

## Recommended IDE Setup

- **[VSCode](https://code.visualstudio.com/)**: A lightweight but powerful code editor.
- **[Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)**: Vue 3 support for VSCode (disable Vetur if installed).
- **[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)**: Integrates ESLint into VSCode for real-time linting.

---

## Key Technologies Used

- **Vue 3**: The core framework for building the user interface.
- **Pinia**: A lightweight and intuitive state management library for Vue.
- **TypeScript**: Adds static typing to JavaScript for better developer experience.
- **Vite**: A fast and modern build tool for Vue applications.
- **Vitest**: A blazing-fast unit testing framework.
- **ESLint**: Ensures code quality and consistency.

---

## Customizing the Project

You can customize the project by modifying the following files:

- **`vite.config.ts`**: Configure Vite settings (e.g., plugins, server options).
- **`tsconfig.json`**: Adjust TypeScript compiler options.
- **`src/stores/account.ts`**: Modify the Pinia store for account management.
- **`src/components/`**: Add or modify reusable components.

---

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

Happy coding! 🚀
