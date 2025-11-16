# 🗂 FILE STRUCTURE RULES  
### The Developer’s Odyssey — Project Architecture & File Organization  

All Copilot-generated projects, components, and assets MUST follow these rules.  
Ensures maintainable, scalable code, multi-file awareness, and clarity for team collaboration.

---

# 1. PROJECT ROOT STRUCTURE

```
/project-root
  ├── public/              # Static assets (images, fonts, favicons)
  ├── src/                 # Source code
  │   ├── components/      # Reusable UI components
  │   ├── pages/           # Route-based pages (Next.js style)
  │   ├── services/        # API and backend service integrations
  │   ├── utils/           # Helper functions, constants
  │   ├── styles/          # Tailwind overrides, global styles
  │   ├── context/         # React context providers
  │   ├── hooks/           # Custom hooks
  │   ├── animations/      # Motion & animation logic
  │   └── assets/          # Images, icons, JSON files
  ├── tests/               # Unit and integration tests
  ├── .copilot/            # AI prompt rules & templates
  ├── package.json
  ├── tailwind.config.js
  ├── next.config.js
  ├── tsconfig.json
  └── README.md
```

**Rule:** Copilot must not generate files outside this hierarchy unless explicitly instructed.

---

# 2. COMPONENT STRUCTURE

- Each component resides in its own folder with following files:

```
/components/ComponentName/
  ├── ComponentName.tsx
  ├── ComponentName.module.css / .scss / .tailwind.ts
  ├── ComponentName.stories.tsx   # Optional Storybook stories
  ├── index.ts                     # Re-export for easy imports
  └── types.ts                     # TypeScript types/interfaces
```

- Component naming rules: **PascalCase** for components, **camelCase** for variables/functions.

---

# 3. PAGE STRUCTURE (Next.js)

- Pages folder structure mirrors routes:

```
/pages
  ├── index.tsx
  ├── about.tsx
  ├── dashboard/
  │   ├── index.tsx
  │   └── settings.tsx
  └── api/
      ├── hello.ts
```

- Nested folders match URL paths.
- Each page uses only its necessary components, imports via absolute paths.

---

# 4. SERVICES / API STRUCTURE

- One file per service or endpoint:

```
/services
  ├── authService.ts
  ├── jobService.ts
  └── mlPipelineService.ts
```

- Each service exports functions for CRUD/API calls.  
- Prefer `axios` or `fetch` wrapped in reusable functions.

---

# 5. ASSETS / STATIC FILES

```
/assets
  ├── images/
  ├── icons/
  ├── animations/
  └── data/
```

- All filenames in **kebab-case**.  
- Avoid spaces, special characters.

---

# 6. CONTEXT & STATE MANAGEMENT

- One folder per context provider:

```
/context
  ├── AuthContext.tsx
  ├── ThemeContext.tsx
```

- Export custom hooks (`useAuth`, `useTheme`) for cleaner imports.

---

# 7. UTILS / HELPERS

- Each helper in own file:

```
/utils
  ├── formatDate.ts
  ├── validators.ts
  └── apiHelpers.ts
```

- No monolithic helper files unless absolutely necessary.

---

# 8. TESTS

```
/tests
  ├── components/
  ├── pages/
  └── services/
```

- Test file naming: `ComponentName.test.tsx`  
- Prefer **React Testing Library** + **Jest** conventions.

---

# 9. IMPORT & EXPORT RULES

- Absolute paths using `/src` alias  
- Single component index.ts re-exports for cleaner imports

Example:

```ts
import Button from 'components/Button';
import { fetchJobs } from 'services/jobService';
```

---

# 10. VERSION CONTROL & CLEANUP

- Always include `.gitignore`  
- Avoid committing `node_modules/` or build artifacts  
- Keep folder hierarchy lean and logical

---

# END OF file-structure-rules.md
