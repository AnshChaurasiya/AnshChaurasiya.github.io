# 🎬 ANIMATION RULES  
### The Developer’s Odyssey — Cinematic Motion & Interaction Guidelines  

All UI motion, transitions, and interactive animations MUST strictly follow these rules.  
This ensures consistency, cinematic quality, and immersion across worlds.

---

# 1. CORE PRINCIPLES OF MOTION

### **1.1 Cinematic Storytelling**
- Every animation tells a story or enhances UX  
- Avoid purely decorative motion without purpose  

### **1.2 Hierarchical Motion**
- Use **primary**, **secondary**, **micro** animation levels:

| Level | Example | Duration | Notes |
|-------|--------|---------|-------|
| Primary | Page transitions | 0.8–1.5s | Eye-catching, global |
| Secondary | Component entrance | 0.4–0.8s | Supports storytelling |
| Micro | Hover, click | 0.1–0.3s | Subtle feedback |

### **1.3 Natural Easing**
Use smooth easing to mimic physical behavior:
- `power2.out` → deceleration  
- `power3.inOut` → smooth in/out  
- `elastic.out` → playful bounces  
- `sine.inOut` → subtle fade motion  

No linear animations unless for loading bars or timers.

---

# 2. WORLD-SPECIFIC MOTION STYLES

| World | Motion Type | Key Notes |
|-------|------------|-----------|
| Awakening Grove | gentle float, sway, subtle rotation | Leaves, particles, ambient flow |
| Trial Peaks | lift, drift, bounce | Snow, clouds, UI hover feedback |
| Creation District | neon pulse, glow sweep, oscillate | Buttons, cards, highlights |
| Future Constellarium | fade-in/out, parallax drift, sparkle | Stars, cursor trails, floating panels |

---

# 3. PAGE & SECTION TRANSITIONS

### **3.1 Entry & Exit Animations**
- Fade-through opacity: 0 → 1  
- Slight vertical drift: y ± 10–20px  
- Particle overlay optional  
- Duration: 0.8–1.2s

### **3.2 Parallax Motion**
- 3 depth layers: foreground, midground, background  
- Foreground moves fastest, background slowest  
- Smooth scroll-triggered motion  
- Mobile: reduce factor by 50%

### **3.3 Delays & Stagger**
- Staggered entrance for multiple components: 0.05–0.1s  
- Cards, list items, particles enter sequentially  

---

# 4. INTERACTIVE MOTIONS

### **4.1 Hover Animations**
- Scale: 1 → 1.05  
- Glow intensity: +20%  
- Duration: 0.2–0.3s  
- Subtle rotation: ±2–3° optional  

### **4.2 Click/Tap Feedback**
- Shrink: 0.95 scale  
- Ripple/light sweep animation  
- Duration: 0.1–0.15s  

### **4.3 Drag/Swipe**
- Smooth follow motion  
- Ease back to origin with elastic out  
- Optional bounce on limits  

---

# 5. MICRO ANIMATIONS
- Loader: smooth looping with subtle bounce  
- Buttons: glow sweep or ripple  
- Icons: gentle rotation or pulse  
- Cursor: trails, sparkles, floating glow  

**Tip:** Always synchronize with world palette & theme.

---

# 6. ANIMATION PERFORMANCE RULES
- Max 60 FPS  
- Avoid heavy particle counts on mobile  
- Hardware-accelerated transforms (translate3d, opacity, scale)  
- Limit simultaneous heavy animations to 3 layers per scene  

---

# 7. GSAP & FRAMER MOTION RECOMMENDATIONS
- Use GSAP timelines for coordinated sequences  
- Use `motion.div` from Framer Motion for React components  
- Always define: duration, easing, delay, stagger, and optional repeat  

---

# 8. DO’S & DON’TS

### **DO**
- Animate sequentially, not simultaneously  
- Combine opacity, scale, and position  
- Use easing curves to mimic physics  

### **DON’T**
- Instant pops without transition  
- Overuse elastic or bounce on every element  
- Ignore stagger for lists or cards  

---

# 9. ACCESSIBILITY CONSIDERATIONS
- Provide reduced-motion fallback (`prefers-reduced-motion`)  
- Avoid flashing or high-contrast blinking  
- Ensure animations enhance, not hinder, readability  

---

# END OF animation-rules.md
