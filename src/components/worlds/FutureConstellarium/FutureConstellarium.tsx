'use client';

import { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import GalaxyScene from '@/scenes/GalaxyScene';
import styles from './FutureConstellarium.module.css';

export default function FutureConstellarium() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  return (
    <section ref={sectionRef} className={styles.constellarium} id="vision">
      {/* 3D Galaxy Background */}
      <div className={styles.canvasContainer}>
        <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
          <GalaxyScene />
        </Canvas>
      </div>

      {/* Shooting Stars */}
      <div className={styles.shootingStars}>
        {!reducedMotion && [...Array(5)].map((_, i) => (
          <div
            key={i}
            className={styles.shootingStar}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 3}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.header}>
          <span className={styles.worldLabel}>WORLD 04: FUTURE CONSTELLARIUM</span>
          <h2 className={styles.title}>
            <span className={styles.cosmos}>The Infinite Horizon</span>
          </h2>
          <p className={styles.subtitle}>
            Beyond the boundaries of today lies a cosmos of possibilities.
            Where dreams crystallize into reality and innovation knows no limits.
          </p>
        </div>

        {/* Vision Cards */}
        <div className={styles.visionGrid}>
          {/* Vision 1 */}
          <article className={styles.visionCard}>
            <div className={styles.cardOrbit} />
            <div className={styles.cardContent}>
              <div className={styles.visionIcon}>🌌</div>
              <h3 className={styles.visionTitle}>Immersive Web Experiences</h3>
              <p className={styles.visionDesc}>
                Pioneering the next generation of web applications that blur the line
                between reality and digital, creating truly immersive user experiences
                through WebXR, 3D graphics, and spatial computing.
              </p>
            </div>
          </article>

          {/* Vision 2 */}
          <article className={styles.visionCard}>
            <div className={styles.cardOrbit} />
            <div className={styles.cardContent}>
              <div className={styles.visionIcon}>🤖</div>
              <h3 className={styles.visionTitle}>AI-Powered Development</h3>
              <p className={styles.visionDesc}>
                Leveraging artificial intelligence to revolutionize the development
                process, from intelligent code generation to automated testing and
                predictive analytics for better user experiences.
              </p>
            </div>
          </article>

          {/* Vision 3 */}
          <article className={styles.visionCard}>
            <div className={styles.cardOrbit} />
            <div className={styles.cardContent}>
              <div className={styles.visionIcon}>🌐</div>
              <h3 className={styles.visionTitle}>Decentralized Future</h3>
              <p className={styles.visionDesc}>
                Building for a decentralized web where users own their data,
                transactions are transparent, and applications run trustlessly
                on blockchain networks and peer-to-peer systems.
              </p>
            </div>
          </article>

          {/* Vision 4 */}
          <article className={styles.visionCard}>
            <div className={styles.cardOrbit} />
            <div className={styles.cardContent}>
              <div className={styles.visionIcon}>♿</div>
              <h3 className={styles.visionTitle}>Universal Accessibility</h3>
              <p className={styles.visionDesc}>
                Creating technology that is inclusive and accessible to everyone,
                regardless of abilities or circumstances. Making the digital world
                a place where no one is left behind.
              </p>
            </div>
          </article>
        </div>

        {/* Call to Action */}
        <div className={styles.cta}>
          <h3 className={styles.ctaTitle}>Let's Build the Future Together</h3>
          <p className={styles.ctaText}>
            Ready to turn your vision into reality? Let's collaborate and create
            something extraordinary that pushes the boundaries of what's possible.
          </p>
          <div className={styles.ctaButtons}>
            <a href="#contact" className={styles.primaryButton}>
              <span>Start a Project</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
              </svg>
            </a>
            <a href="https://github.com/AnshChaurasiya" className={styles.secondaryButton}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"/>
              </svg>
              <span>View GitHub</span>
            </a>
          </div>
        </div>
      </div>

      {/* Nebula Overlay */}
      <div className={styles.nebulaOverlay} />
    </section>
  );
}
