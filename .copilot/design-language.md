# 🎨 DESIGN LANGUAGE
### Version 1.0 — Senior Frontend AI

Copilot must adhere strictly to the project’s design language while generating UI components, animations, and layouts.

---

# 1. COLOR PALETTE

- Primary: #4F46E5 (Indigo-600)
- Secondary: #10B981 (Emerald-500)
- Accent: #F59E0B (Amber-500)
- Neutral:
  - Light: #F3F4F6
  - Medium: #9CA3AF
  - Dark: #111827
- Error / Warning / Info:
  - Error: #EF4444
  - Warning: #FBBF24
  - Info: #3B82F6

> Always use semantic color variables instead of hard-coded hex wherever possible.

---

# 2. TYPOGRAPHY

- Primary Font: Inter, sans-serif
- Secondary Font: Roboto, sans-serif
- Font Sizes:
  - XS: 0.75rem (12px)
  - SM: 0.875rem (14px)
  - MD: 1rem (16px)
  - LG: 1.125rem (18px)
  - XL: 1.25rem (20px)
  - XXL: 1.5rem (24px)
- Line Heights: 1.2 – 1.5x depending on context
- Font Weights:
  - Regular: 400
  - Medium: 500
  - Bold: 700

---

# 3. SPACING SYSTEM

- Base unit: 4px
- Spacing scales: 4, 8, 12, 16, 24, 32, 48, 64
- Use consistent spacing for margins, paddings, and gaps.
- Avoid arbitrary spacing; always align to scale.

---

# 4. BORDER & RADIUS

- Standard border-radius: 8px
- Buttons / Inputs:
  - Small: 4px
  - Medium: 8px
  - Large: 12px
- Borders:
  - 1px solid neutral-light (#E5E7EB)
  - Error: 1px solid #EF4444

---

# 5. UI COMPONENT PATTERNS

- Buttons:
  - Primary / Secondary / Tertiary
  - Include hover, focus, active states
- Cards:
  - Shadow: `shadow-md`
  - Padding: `p-4` to `p-6`
  - Rounded corners: 8px
- Forms:
  - Label above input
  - Error validation inline
- Navigation:
  - Consistent top/bottom navigation patterns
- Modals / Popups:
  - Centered
  - Background overlay: `rgba(0,0,0,0.5)`
  - Close icon accessible

---

# 6. ICONOGRAPHY

- Use consistent icon set (e.g., Heroicons or Material Icons)
- All icons must have `aria-label` for accessibility
- Size: 16px – 24px by default
- Color: match context or use neutral-dark

---

# 7. ANIMATION & MOTION

- Animations must be smooth and subtle
- Duration:
  - Fast: 150ms
  - Medium: 300ms
  - Slow: 500ms
- Easing: `ease-in-out` by default
- Transitions: hover, focus, modals, page changes

---

# 8. RESPONSIVENESS

- Mobile-first approach
- Breakpoints:
  - XS: 0 – 639px
  - SM: 640 – 767px
  - MD: 768 – 1023px
  - LG: 1024 – 1279px
  - XL: 1280px +
- Ensure all components scale correctly at each breakpoint

---

# 9. ACCESSIBILITY

- Follow WCAG 2.1 AA standards
- Ensure contrast ratios >= 4.5:1 for text
- Keyboard navigation must work for all interactive components
- Include `aria-*` attributes where applicable

---

# END OF design-language.md
