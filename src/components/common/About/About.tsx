'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import styles from './About.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!sectionRef.current || reducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          end: 'top 50%',
          scrub: 1,
        },
        y: 50,
        opacity: 0,
      });

      const cards = cardsRef.current?.querySelectorAll(`.${styles.card}`);
      if (cards) {
        gsap.from(cards, {
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 80%',
            end: 'top 40%',
            scrub: 1,
          },
          y: 100,
          opacity: 0,
          stagger: 0.2,
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section ref={sectionRef} className={styles.about} id="about">
      <article className={styles.container}>
        <h2 ref={titleRef} className={styles.title}>
          About <span className={styles.highlight}>Me</span>
        </h2>

        <div ref={cardsRef} className={styles.grid}>
          <article className={styles.card}>
            <div className={styles.iconWrapper}>
              <span className={styles.icon}>🚀</span>
            </div>
            <h3 className={styles.cardTitle}>Full Stack Developer</h3>
            <p className={styles.cardText}>
              Building scalable web applications with React, Next.js, Node.js, and modern cloud technologies.
            </p>
          </article>

          <article className={styles.card}>
            <div className={styles.iconWrapper}>
              <span className={styles.icon}>🤖</span>
            </div>
            <h3 className={styles.cardTitle}>AI/ML Engineer</h3>
            <p className={styles.cardText}>
              Developing intelligent systems using Azure, Python, LLMs, and computer vision technologies.
            </p>
          </article>

          <article className={styles.card}>
            <div className={styles.iconWrapper}>
              <span className={styles.icon}>🎨</span>
            </div>
            <h3 className={styles.cardTitle}>Creative Developer</h3>
            <p className={styles.cardText}>
              Crafting immersive user experiences with Three.js, GSAP, and cinematic animations.
            </p>
          </article>
        </div>

        <p className={styles.bio}>
          Currently working at <strong>Compunnel Inc.</strong> as an AI/ML Engineer, 
          building ML pipelines and enhancing enterprise platforms. 
          Passionate about blending technology with creativity to build 
          innovative solutions that make a difference.
        </p>
      </article>
    </section>
  );
}
