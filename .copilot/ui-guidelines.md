# 🎨 UI GUIDELINES  
### The Developer’s Odyssey — Cinematic UI/UX Design Standards  
These guidelines define the visual identity, layout rules, spacing systems, UI behaviors, and component aesthetics for the entire project.  
All UI generated must follow these rules **with no exceptions**.

---

# 1. CORE DESIGN PRINCIPLES  
These are the foundations of the Odyssey design language:

### **1.1 Cinematic Immersion**
Every UI element must feel:
- atmospheric  
- alive  
- layered  
- animated subtly  
- storytelling-driven  

### **1.2 Spatial Depth**
Use:
- parallax layers  
- blur  
- glows  
- gradients  
- opacity transitions  
- floating elements  

### **1.3 Soft Minimalism (Not Flat, Not Overcrowded)**
Use:
- gentle glows  
- smooth corners  
- glassy layers  
- toned shadows  
- clean spacing  

Avoid:
- harsh shadows  
- overly flat shapes  
- rigid blocks  

### **1.4 Design = Storytelling**
Every visual choice must reflect:
> “A journey through evolving worlds of knowledge, skill, and creativity.”

This ideological anchor influences:
- color palettes  
- motion  
- backgrounds  
- cursor themes  
- environmental elements  

---

# 2. COLOR SYSTEM  
Each world uses its own palette, with a **global root palette**.

## **2.1 Global Token Colors**
Used across all worlds:

| Token | Color | Usage |
|-------|--------|--------|
| `--text-primary` | #F1F4F8 | Main text |
| `--text-secondary` | #94A3B8 | Secondary text |
| `--accent` | #A5B4FC | Buttons, highlights |
| `--highlight` | #7DD3FC | Motion paths, cursor |
| `--bg` | #0E0F14 | Base background |

---

# 3. WORLD-SPECIFIC PALETTES  

### 🌿 **3.1 Awakening Grove (Origin Forest)**  
- Greenish glow (#6EE7B7)  
- Emerald mist (#10B981)  
- Firefly yellow (#FDE68A)  
- Deep forest (#052E16)  

### 🏔 **3.2 Trial Peaks (Logic Mountains)**  
- Ice blue (#7DD3FC)  
- Snow white (#F8FAFC)  
- Slate gray (#1E293B)  
- High-altitude glow (#38BDF8)  

### 🌆 **3.3 Creation District (Neon City)**  
- Neon pink (#EC4899)  
- Electric cyan (#22D3EE)  
- Dark asphalt (#0F172A)  
- Vivid violet (#A78BFA)  

### 🌌 **3.4 Future Constellarium (Galaxy World)**  
- Star white (#F8FAFC)  
- Cosmic purple (#C084FC)  
- Nebula blue (#60A5FA)  
- Deep space (#020617)  

---

# 4. TYPOGRAPHY RULES  

### **Font Family**
Use exclusively:
```
Inter, Geist, or Lexend (preferred)
```

### **Font Usage**
- Headings → **bold, wide tracking, cinematic**  
- Subheadings → **semi-bold**  
- Body text → **normal weight**  
- Labels → **small, uppercased, spaced letters**  

---

# 5. LAYOUT RULES  

### 5.1 Spacing Scale  
Use Tailwind spacing scale, but with the following preferences:
- `py-16` for large sections  
- `py-24` for world intros  
- `gap-6` for cards  
- `gap-12` for large UI spaces  

### 5.2 Container Widths  
```
max-width: 1300px content sections  
max-width: 1600px for hero scenes  
max-width: 1000px for text-heavy areas  
```

### 5.3 Parallax Layers (MANDATORY)
Every world needs minimum **3 depth layers**:
- foreground  
- midground  
- background  

These influence:
- scroll speed  
- blur amount  
- light intensity  
- animation style  

---

# 6. COMPONENT VISUAL RULES  

## **6.1 Cards**
Cards must be:
- rounded-xl  
- glassy or semi-transparent  
- have soft glowing borders  
- contain micro-motion  
- scale slightly on hover  

Avoid:
- solid, opaque blocks  
- flat monochrome designs  

## **6.2 Buttons**
Buttons must have:
- glowing border or fill  
- soft hover expansion  
- slight exterior glow  
- subtle ripple or light sweep  

## **6.3 Sections**
Each world section must include:
- an atmospheric backdrop  
- a thematic cursor  
- depth-based scroll interactions  
- ambient particles  

---

# 7. INTERACTIVE UI RULES  

### 7.1 Hover Rules
All hover effects MUST:
- be subtle  
- animate over 0.25–0.45s  
- use smooth easing (`power2.out`, `power3.out`)  

### 7.2 Cursor Interaction
Every world MUST have a unique cursor design:
- glowing orb  
- drone  
- star  
- energy spark  

### 7.3 Scroll Behavior
Scroll interactions MUST:
- trigger GSAP animations  
- trigger parallax shifts  
- fade elements in sequentially  

No instant pop-ins.

---

# 8. TRANSITION RULES  
Page and world transitions should be:

### DO:
- fade-through  
- dissolve particles  
- cinematic camera pans  
- color shifts  

### DON'T:
- hard cuts  
- sudden opacity changes  
- instant scene swaps  

---

# 9. GLASSMORPHISM & NEON RULES  

Use glass where:
- UI panels  
- navigation  
- modal windows  

Use neon where:
- highlight text  
- active elements  
- interactive icons  

Balance both — never overuse.

---

# 10. DARK MODE (MANDATORY)  
This project **only uses dark mode**, but allows:
- soft gradients  
- ambient glows  
- atmospheric textures  

No bright white backgrounds.

---

# 11. ACCESSIBILITY RULES  
Follow:
- AA contrast standards  
- alt text for images  
- keyboard focus outlines  
- reduced-motion fallback  

Animations must degrade gracefully.

---

# 12. MOBILE RULES  
Mobile layouts must include:
- simplified parallax  
- reduced particle count  
- lighter animations  
- stacked sections  
- optimized text size  

Do NOT output heavy 3D scenes on mobile unless unavoidable.

---

# END OF ui-guidelines.md


# 🎨 UI GUIDELINES
### Project Codename: **The Developer’s Odyssey**
### Role: **UI/UX Lead + Frontend Architect**

This file defines all UI/UX rules, design principles, and styling instructions for the project.  
All components, pages, and layouts **must strictly follow these guidelines**.

---

# 1. DESIGN PHILOSOPHY

- **Immersive & Story-Driven:**  
  Every UI element must support the narrative and feel part of a “journey” through the app.

- **Cinematic Feel:**  
  Layers, motion, and transitions must create depth and emotional engagement.

- **User-Centric:**  
  Focus on clarity, accessibility, and intuitive navigation without sacrificing style.

- **Modular & Scalable:**  
  Components must be reusable, theme-aware, and adaptable to different worlds/scenes.

---

# 2. COLOR & THEME

### 🎨 Color Palettes
- Each “world” or section has a **primary palette**, **secondary palette**, and **accent colors**.
- Use TailwindCSS color tokens; create custom tokens in `theme.config.ts` when needed.

### 🌗 Dark/Light Mode
- Implement global dark/light support using `useTheme()` hook.
- Motion, shadows, and highlights must adapt automatically.

### 🟢 Accessibility
- Ensure all text/background combinations meet **WCAG AA contrast** standards.
- Focus indicators must be visible and consistent.

---

# 3. TYPOGRAPHY

- **Primary Font:** Inter (or Tailwind default)
- **Headings:** bold, layered for cinematic hierarchy
- **Body Text:** readable, modular spacing, supports motion (fade/slide-in)
- **Dynamic Text:** For storytelling sections, allow animated character-by-character reveal

---

# 4. COMPONENT BEHAVIOR

### Buttons & Interactions
- All buttons must have:
  - Hover states
  - Pressed states
  - Focus outlines
  - Motion transitions (e.g., scale, shadow, glow)

### Cards & Panels
- Use layered shadows for depth
- Support interactive micro-animations (e.g., tilt, glow, fade-in)
- Modular: can be reused in multiple scenes

### Forms & Inputs
- Inline validation
- Smooth focus animations
- Clear error messaging
- Motion cues for invalid/valid input

---

# 5. MOTION & ANIMATION GUIDELINES

- **Primary tools:** GSAP, Framer Motion, Lenis smooth scrolling
- **Rules:**
  - No abrupt animations
  - Use parallax layers for depth
  - Animate only meaningful elements to guide attention
  - Motion duration: 0.4–0.8s for micro-interactions, 1–2s for major scene transitions
- **Special:** Interactive story sections may use Three.js animations with corresponding UI triggers

---

# 6. ICONOGRAPHY & IMAGERY

- Use **vector icons** (Radix UI / custom SVG)
- Avoid raster images unless absolutely necessary
- All imagery must support world themes and cinematic feel
- Export assets with appropriate resolution for retina & 4K support

---

# 7. RESPONSIVENESS & LAYOUT

- Mobile-first, adaptive design
- Breakpoints: `sm`, `md`, `lg`, `xl` per Tailwind defaults
- Maintain cinematic spacing and layer hierarchy across screens
- All animations must adapt gracefully to screen size

---

# 8. DESIGN TOKENS & VARIABLES

- Centralize in `theme.config.ts`
- Include:
  - Colors
  - Spacing
  - Font sizes
  - Border-radius
  - Shadow definitions
  - Motion easing presets

---

# 9. ACCESSIBILITY & USABILITY

- Use semantic HTML tags
- Ensure all motion respects `prefers-reduced-motion`
- Keyboard navigable
- Screen reader-friendly labels
- Focused on readability and comprehension

---

# 10. OVERRIDE RULES

- These guidelines **cannot be violated** unless explicitly overridden by `system-rules.md`.
- Any generated component must be validated against this guide **before merging**.

---

# END OF ui-guidelines.md
