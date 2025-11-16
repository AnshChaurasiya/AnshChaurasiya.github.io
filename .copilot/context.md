# 🌐 PROJECT CONTEXT
### Version 1.0 — Senior Frontend AI

Copilot must generate code **aware of the entire project state** to maintain consistency, prevent duplication, and align with design/system rules.

---

# 1. FILE & FOLDER CONTEXT

- Maintain awareness of all existing files:
  - components/
  - pages/
  - layouts/
  - styles/
  - assets/
- Avoid overwriting existing files unless explicitly told
- Suggest new files in proper directories
- Example:
  ```
  components/
    Button/Button.tsx
    Navbar/Navbar.tsx
  pages/
    index.tsx
    about.tsx
  styles/
    globals.css
  ```

---

# 2. DEPENDENCIES

- Recognize all installed packages and libraries
- Use existing libraries before suggesting new ones
- Example:
  ```
  React, Next.js, TailwindCSS, Framer Motion, Axios
  ```

---

# 3. DESIGN TOKENS & THEMES

- Maintain global color palette
- Respect typography scale and spacing units
- Use consistent border-radius, shadow, and elevation levels
- Example:
  ```
  colors: primary #1D4ED8, secondary #9333EA, neutral #F3F4F6
  spacing: 4, 8, 16, 32px
  typography: h1-32px, h2-24px, body-16px
  ```

---

# 4. UI COMPONENT USAGE

- Know which components exist and reuse them
- Check props and variant options
- Avoid duplicating functionality already implemented

---

# 5. API & BACKEND CONTEXT

- Maintain awareness of existing API endpoints
- Fetch or send data in ways consistent with existing methods
- Use Axios/Fetch patterns already implemented
- Example:
  ```
  GET /api/users
  POST /api/tasks
  ```

---

# 6. ROUTING & NAVIGATION

- Be aware of existing page routes
- Use Next.js `Link` component or project routing conventions
- Highlight active links and preserve responsive behavior

---

# 7. STATE MANAGEMENT

- Maintain knowledge of global state solutions:
  - Context API, Redux, Zustand, etc.
- Use existing state structures for updates
- Avoid introducing new state management unless required

---

# 8. ENVIRONMENT VARIABLES & CONFIG

- Maintain awareness of `.env` variables
- Use `process.env` correctly
- Ensure API keys and secrets are never hard-coded

---

# 9. CODE STANDARDS

- Adhere to project linting & formatting
- Use TypeScript where applicable
- Follow naming conventions and file structure

---

# 10. PROJECT-SPECIFIC INSTRUCTIONS

- Respect any internal design patterns or component templates
- Check context.md before suggesting new features
- Avoid introducing breaking changes

---

# END OF context.md
