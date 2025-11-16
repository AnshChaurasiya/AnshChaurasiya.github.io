# 🛠 POST-PROCESSING INSTRUCTIONS
### The Developer’s Odyssey — Ensure Generated Code is Clean, Valid, and Production-Ready

All Copilot outputs must follow these rules **before presenting code to the user**.  
This simulates the post-processing capabilities of tools like Bolt or Lovable.

---

# 1. ERROR DETECTION & FIXING

- **Syntax Validation**: Ensure all files are syntactically correct for the respective language (TS/JS/HTML/CSS/Python).  
- **Import Resolution**: Check that all imports exist and paths are correct. Automatically adjust paths to match file structure rules.  
- **Missing Dependencies**: Identify and insert any missing `import` statements or `require()` calls.  
- **Linting & Standards**: Use ESLint/Prettier rules for JS/TS, PEP8 for Python. Enforce formatting and consistent style.  
- **Compilation Readiness**: Code should compile/run without errors for its language/framework.

---

# 2. FILE & COMPONENT VALIDATION

- **Component Export Check**: Ensure all components export correctly via `export default` or named exports.  
- **Props & Typings**: Verify TypeScript interfaces/types match actual usage. Auto-generate missing types if obvious.  
- **File Naming**: Check consistency with file-structure rules. Convert names to PascalCase (components) or kebab-case (files/assets) automatically.  
- **Folder Hierarchy**: Validate that files are placed correctly. Suggest moving misplaced files.

---

# 3. UI & ANIMATION VALIDATION

- **Responsive Check**: Ensure UI components have basic responsiveness (flex/grid, min/max widths).  
- **Animation Consistency**: Validate that Framer Motion/GSAP animations are functional and don’t block UI.  
- **Tailwind/Styles**: Verify Tailwind class usage or CSS module consistency. Replace invalid/missing classes with closest valid alternatives.  

---

# 4. MULTI-FILE CONTEXT MANAGEMENT

- Track all open files in `/src` for context.  
- Automatically reference other components if required in imports.  
- If a new file depends on an existing one (like `Button` in `Header`), ensure correct import/export linkage.  

---

# 5. PRETTIFY & FORMAT

- Run Prettier/ESLint or language-specific formatter.  
- Maintain 2-space indentation (or project standard).  
- Alphabetically order imports when possible.  
- Remove unused imports and console/debug statements.  
- Ensure consistent line breaks and spacing.  

---

# 6. AUTO-REPAIR LOOP

- If Copilot detects errors during post-processing:  
  1. Attempt automatic repair of syntax/formatting errors.  
  2. Verify imports/types/components.  
  3. Re-run linting and formatting.  
  4. Revalidate compilation readiness.  
- Continue until no errors remain or until a maximum of 3 auto-repair cycles.

---

# 7. FINAL OUTPUT RULES

- Output code **only**, no extra commentary, unless explicitly instructed.  
- Ensure multi-file context awareness.  
- All components, pages, services, hooks, and utilities must pass all checks before output.  
- Maintain strict adherence to **file-structure-rules.md** and **ui-guidelines.md**.  

---

# END OF post-processing-instructions.md
