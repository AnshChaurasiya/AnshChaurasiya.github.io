'use client';

import { useEffect } from 'react';
import { useUIStore } from '@/store/uiStore';

export function useReducedMotion() {
  const { reducedMotion, setReducedMotion } = useUIStore();

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [setReducedMotion]);

  return reducedMotion;
}
