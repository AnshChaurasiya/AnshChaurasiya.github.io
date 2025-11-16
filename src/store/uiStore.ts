import { create } from 'zustand';

interface UIState {
  menuOpen: boolean;
  reducedMotion: boolean;
  currentWorld: 'grove' | 'peaks' | 'district' | 'cosmos' | null;
  
  toggleMenu: () => void;
  setMenuOpen: (open: boolean) => void;
  setReducedMotion: (reduced: boolean) => void;
  setCurrentWorld: (world: UIState['currentWorld']) => void;
}

export const useUIStore = create<UIState>((set) => ({
  menuOpen: false,
  reducedMotion: false,
  currentWorld: null,
  
  toggleMenu: () => set((state) => ({ menuOpen: !state.menuOpen })),
  setMenuOpen: (open) => set({ menuOpen: open }),
  setReducedMotion: (reduced) => set({ reducedMotion: reduced }),
  setCurrentWorld: (world) => set({ currentWorld: world }),
}));
