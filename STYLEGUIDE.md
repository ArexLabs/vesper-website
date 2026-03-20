# Vesper Launcher Website – Code & Style Guide

This style guide defines best practices and conventions for contributing to the Vesper Launcher Website project. Adhering to these guidelines ensures a clean, consistent, and maintainable codebase for all contributors.

---

## Table of Contents

1. General Principles
2. File & Folder Organization
3. Naming Conventions
4. HTML Guidelines
5. CSS/SCSS Guidelines
6. JavaScript/TypeScript Guidelines
7. Git & Commit Messages
8. Documentation
9. Example Component

---

## 1. General Principles

- Prioritize readability and simplicity.
- Use clear, descriptive names for variables, functions, and files.
- Write self-documenting code where possible.
- Remove unused code instead of commenting it out.
- Ensure code is linted and passes all automated checks before committing.

---

## 2. File & Folder Organization

- Group related files into feature-oriented or functional directories.
- Use `kebab-case` for folder and file names (e.g., `user-profile.js`).
- Keep assets (images, fonts, etc.) in a dedicated `/public` folder.

---

## 3. Naming Conventions

- Use `camelCase` for variables and functions: `launchVesper()`
- Use `PascalCase` for React components and classes: `VesperButton`
- Use `SCREAMING_SNAKE_CASE` for constants: `API_BASE_URL`
- Use `snake_case` for file names: `user_profile.ts`

---

## 4. HTML Guidelines

- Write semantic HTML5 where possible (`<header>`, `<nav>`, `<main>`, `<footer>`, etc.).
- Use alt text for all images.
- Minimize unnecessary nesting.
- Indent code using 4 spaces or tabs.
- Use _improved_ Next.js Components (instead of an a-tag use the Link-tag )

---

## 5. CSS/TailwindCSS Guidelines

### For Tailwind CSS:

- Use utility classes to compose styles directly in your JSX/HTML.
- Compose custom utility classes using `@apply` in your CSS/SCSS if you need to extract repetitive styles.
- Prefer semantic and grouped Tailwind classes for clarity (e.g., `px-4 py-2 text-brand-accent`).
- Keep Tailwind class lists tidy and avoid excessive chaining.
- Use the official [TailwindCSS color palette](https://tailwindcss.com/docs/customizing-colors) or the project's custom theme via `globals.css`.
- Whenever possible, use Tailwind's spacing, typography, and color scale utilities instead of raw values.
- Responsive and state-based classes (e.g., `sm:`, `md:`, `hover:`, `focus:`) should be applied as needed for adaptive design.

### For CSS/SCSS:

> The project currently does not use SCSS, but CSS for the TailwindCSS

- If custom CSS/SCSS is needed, prefer SCSS partials, and organize using the 7-1 pattern (base, components, layout, utilities, etc.).
- Use BEM naming (`.block__element--modifier`) for custom class names in SCSS.
- Place all colors, spacing, typography, and frequently reused values in SCSS variables or Tailwind config.
- Avoid using `!important` unless absolutely unavoidable.
- Never write plain `.css` files; use `.scss` for all custom styles.
- Use semantic class names and keep specificity low to work seamlessly with Tailwind utilities.

> **Note:** For buttons and other UI elements, it is recommended to use reusable component primitives (e.g., [shadcn/ui's Button](https://ui.shadcn.com/docs/components/button)) instead of default HTML elements for consistency, accessibility, and theme support.

**Example (Tailwind in JSX, using a component like `Button` from shadcn/ui):**
```tsx
import { Button } from "@/components/ui/button";

<Button className="px-4 py-2 text-sm font-mono text-brand-accent hover:bg-brand-accent/10 transition-colors">
  Launch Vesper
</Button>
```

**Example (Custom SCSS with Tailwind `@apply`):**
```scss
.button-primary {
  @apply px-4 py-2 font-semibold text-white bg-brand-accent rounded hover:bg-brand-accent/90;
}
```

---

## 6. JavaScript/TypeScript Guidelines

- Prefer modern ES6+ features (arrow functions, destructuring, etc.).
- All new code should be written in TypeScript.
- Strictly type all function inputs and outputs.
- Avoid using `any` type unless absolutely necessary.
- Use async/await for asynchronous operations.
- Prettier and ESLint must be run before PR submission.

---

## 7. Git & Commit Messages

- Use feature branches named with `feature/`, `fix/`, or `chore/` prefixes.
- Commit messages should follow [Conventional Commits](https://www.conventionalcommits.org/) (e.g., `feat: add user login component`).
- Rebase and resolve conflicts before submitting PRs.

---

## 8. Documentation

- All components, utilities, and services should include basic JSDoc or TSDoc comments.
- Update related README sections when adding features or making significant changes.

---

## 9. Example Component

Below is an example React component illustrating the coding conventions described above.

```tsx
// File: vesper_button.tsx

import React from "react";

interface VesperButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

/**
 * VesperButton - Standard button for the Vesper Launcher
 */
export const VesperButton: React.FC<VesperButtonProps> = ({
  label,
  onClick,
  disabled = false
}) => (
  <button
    className="vesper-button"
    onClick={onClick}
    disabled={disabled}
    type="button"
  >
    {label}
  </button>
);
```
- **File name:** `vesper_button.tsx` (snake_case, TypeScript)
- **Component name:** `VesperButton` (PascalCase)
- **Interface name:** `VesperButtonProps` (PascalCase)
- **Uses:** TypeScript, JSDoc, semantic props, consistent formatting

---

*Thank you for helping build the Vesper Launcher Website!*
