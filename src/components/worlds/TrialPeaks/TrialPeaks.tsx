'use client';

import { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import MountainScene from '@/scenes/MountainScene';
import styles from './TrialPeaks.module.css';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: 'React & Next.js', level: 95, icon: '⚛️' },
  { name: 'TypeScript', level: 90, icon: '📘' },
  { name: 'Python & ML', level: 85, icon: '🐍' },
  { name: 'Node.js', level: 88, icon: '💚' },
  { name: 'Cloud (Azure)', level: 80, icon: '☁️' },
  { name: 'Three.js & GSAP', level: 85, icon: '🎨' },
];

export default function TrialPeaks() {
  const sectionRef = useRef<HTMLElement>(null);
  const peaksRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!sectionRef.current || reducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from(`.${styles.skillPeak}`, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        y: 100,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section ref={sectionRef} className={styles.peaks} id="skills">
      {/* 3D Mountain Background */}
      <div className={styles.canvasContainer}>
        <Canvas camera={{ position: [0, 2, 8], fov: 60 }}>
          <MountainScene />
        </Canvas>
      </div>

      {/* Snow Particles */}
      <div className={styles.snow}>
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className={styles.snowflake}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <article className={styles.content}>
        <div className={styles.badge}>
          <span className={styles.icon}>🏔️</span>
          Technical Mastery
        </div>
        
        <h2 className={styles.title}>
          The Trial <span className={styles.highlight}>Peaks</span>
        </h2>
        
        <p className={styles.description}>
          Each mountain peak represents a skill mastered through countless challenges.
          The higher the peak, the deeper the expertise.
        </p>

        <div ref={peaksRef} className={styles.skillGrid}>
          {skills.map((skill, index) => (
            <div key={index} className={styles.skillPeak}>
              <div className={styles.peakIcon}>{skill.icon}</div>
              <div className={styles.peakMountain}>
                <div
                  className={styles.peakFill}
                  style={{ height: `${skill.level}%` }}
                >
                  <div className={styles.peakGlow} />
                </div>
              </div>
              <div className={styles.skillName}>{skill.name}</div>
              <div className={styles.skillLevel}>{skill.level}%</div>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}
