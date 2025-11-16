'use client';

import { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import ForestScene from '@/scenes/ForestScene';
import styles from './AwakeningGrove.module.css';

export default function AwakeningGrove() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  return (
    <section ref={sectionRef} className={styles.grove} id="origin">
      {/* 3D Forest Background */}
      <div className={styles.canvasContainer}>
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ForestScene />
        </Canvas>
      </div>

      {/* Firefly Particles */}
      <div className={styles.fireflies}>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={styles.firefly}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Fog Layers */}
      <div className={styles.fog} />
      <div className={styles.fogLayer2} />

      {/* Content */}
      <article className={styles.content}>
        <div className={styles.badge}>
          <span className={styles.icon}>🌿</span>
          Origin Story
        </div>
        
        <h2 className={styles.title}>
          The Awakening <span className={styles.highlight}>Grove</span>
        </h2>
        
        <p className={styles.description}>
          Where it all began — a curious mind discovering the magic of code.
          From the first "Hello World" to building digital forests of my own.
        </p>

        <div className={styles.story}>
          <div className={styles.storyCard}>
            <div className={styles.storyIcon}>🌱</div>
            <h3>The First Seed</h3>
            <p>Started with Python and C++, discovering the power of algorithms</p>
          </div>

          <div className={styles.storyCard}>
            <div className={styles.storyIcon}>🌳</div>
            <h3>Growing Roots</h3>
            <p>Built foundations in data structures, problem-solving, and logic</p>
          </div>

          <div className={styles.storyCard}>
            <div className={styles.storyIcon}>🍃</div>
            <h3>Branching Out</h3>
            <p>Explored web development, AI/ML, and creative coding</p>
          </div>
        </div>
      </article>
    </section>
  );
}
