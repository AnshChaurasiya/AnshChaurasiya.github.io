# 🧩 COMPONENT TEMPLATES
### Version 1.0 — Senior Frontend AI

Copilot must generate components using **modular, reusable, and scalable patterns**. Follow design language strictly.

---

# 1. COMPONENT STRUCTURE

- Use functional components with React/Next.js by default
- Component Naming:
  - PascalCase for components: `UserCard`, `Navbar`
  - camelCase for props: `userName`, `isActive`
- File Naming:
  - One component per file
  - Use `ComponentName.jsx/tsx` or `ComponentName.js/ts`
- Folder Structure:
  ```
  components/
    Button/
      Button.jsx
      Button.module.css
      index.js
  ```
- Default export preferred

---

# 2. PROPS & REUSABILITY

- Use explicit prop definitions
- Default props must be provided where applicable
- Support `className` for styling overrides
- Avoid hard-coded values; rely on props and design tokens
- Example:
  ```tsx
  interface ButtonProps {
    label: string;
    variant?: 'primary' | 'secondary';
    onClick?: () => void;
    disabled?: boolean;
  }
  ```

---

# 3. BUTTONS

- Variants:
  - Primary, Secondary, Tertiary
- States:
  - Default, Hover, Focus, Active, Disabled
- Animation:
  - Smooth transitions, 150-300ms
- Accessibility:
  - `aria-label` if text not descriptive
- Example:
  ```tsx
  <Button variant="primary" onClick={handleClick}>Submit</Button>
  ```

---

# 4. CARDS

- Shadow: `shadow-md`
- Padding: consistent with spacing scale
- Rounded corners: `border-radius: 8px`
- Supports header, body, footer slots
- Example:
  ```tsx
  <Card>
    <CardHeader>Title</CardHeader>
    <CardBody>Content</CardBody>
    <CardFooter>Actions</CardFooter>
  </Card>
  ```

---

# 5. FORMS & INPUTS

- Labels above inputs
- Support error validation messages
- Default states:
  - Enabled, Disabled, Focus, Error
- Inputs must be reusable
- Example:
  ```tsx
  <TextInput
    label="Email"
    value={email}
    onChange={handleChange}
    error={emailError}
  />
  ```

---

# 6. MODALS & POPUPS

- Centered
- Backdrop: `rgba(0,0,0,0.5)`
- Smooth open/close animations
- Accessible keyboard navigation
- Close button must be focusable
- Example:
  ```tsx
  <Modal isOpen={isOpen} onClose={handleClose}>
    <ModalHeader>Modal Title</ModalHeader>
    <ModalBody>Modal Content</ModalBody>
    <ModalFooter>Actions</ModalFooter>
  </Modal>
  ```

---

# 7. NAVIGATION

- Top navigation bars or sidebars should be consistent
- Responsive collapsible menus
- Highlight active routes
- Example:
  ```tsx
  <Navbar>
    <NavItem href="/home">Home</NavItem>
    <NavItem href="/about">About</NavItem>
  </Navbar>
  ```

---

# 8. ICONS & IMAGES

- Prefer vector icons (SVG)
- Images must include `alt` text for accessibility
- Responsive sizing and lazy loading
- Example:
  ```tsx
  <Icon name="search" size={24} color="#111827" />
  ```

---

# 9. LAYOUT TEMPLATES

- Flex and grid-based reusable layouts
- Standard spacing and breakpoints
- Use `Container`, `Row`, `Col` pattern where necessary
- Example:
  ```tsx
  <Container>
    <Row>
      <Col>Content 1</Col>
      <Col>Content 2</Col>
    </Row>
  </Container>
  ```

---

# 10. ANIMATION & MOTION

- Components must support subtle motion effects:
  - Hover scale, fade-in/out, slide
- Duration: 150-500ms
- Easing: `ease-in-out`
- Use animation props if applicable

---

# END OF component-templates.md
