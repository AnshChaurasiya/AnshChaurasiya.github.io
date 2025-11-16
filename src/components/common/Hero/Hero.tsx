'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import styles from './Hero.module.css';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!heroRef.current || reducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.3,
      })
        .from(
          subtitleRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
          },
          '-=0.5'
        )
        .from(
          ctaRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
          },
          '-=0.4'
        );

      // Floating animation for the hero
      gsap.to(heroRef.current, {
        y: -10,
        duration: 3,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      });
    }, heroRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section ref={heroRef} className={styles.hero} id="home">
      <article className={styles.heroContent}>
        <h1 ref={titleRef} className={styles.title}>
          Hi, I&apos;m <span className={styles.highlight}>Ansh Chaurasiya</span>
        </h1>
        <p ref={subtitleRef} className={styles.subtitle}>
          Full Stack Developer & AI/ML Engineer crafting immersive digital experiences
        </p>
        <div ref={ctaRef} className={styles.ctaGroup}>
          <a href="#projects" className={styles.primaryBtn}>
            Explore Projects
          </a>
          <a href="#contact" className={styles.secondaryBtn}>
            Get In Touch
          </a>
        </div>
      </article>

      <div className={styles.heroVisual} aria-hidden="true">
        <div className={styles.glowOrb}></div>
      </div>
    </section>
  );
}
