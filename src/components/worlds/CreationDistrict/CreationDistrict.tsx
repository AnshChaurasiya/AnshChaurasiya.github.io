'use client';

import { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import CityScene from '@/scenes/CityScene';
import styles from './CreationDistrict.module.css';

const projects = [
  {
    icon: '??',
    title: 'NextGen Portfolio',
    desc: 'Immersive 3D portfolio with cinematic world transitions and React Three Fiber',
    tech: ['Next.js', 'R3F', 'GSAP', 'TypeScript'],
    github: 'https://github.com/AnshChaurasiya',
    demo: '#'
  },
  {
    icon: '??',
    title: 'Cyber Quest',
    desc: 'Interactive browser-based RPG with procedural generation and real-time multiplayer',
    tech: ['Three.js', 'WebGL', 'Socket.io', 'Node.js'],
    github: 'https://github.com/AnshChaurasiya',
    demo: '#'
  },
  {
    icon: '??',
    title: 'AI Code Assistant',
    desc: 'VS Code extension powered by GPT-4 for intelligent code completion and refactoring',
    tech: ['TypeScript', 'VS Code API', 'OpenAI', 'Webpack'],
    github: 'https://github.com/AnshChaurasiya',
    demo: '#'
  },
  {
    icon: '??',
    title: 'DataViz Pro',
    desc: 'Real-time data visualization dashboard with D3.js and WebSocket streaming',
    tech: ['React', 'D3.js', 'Redis', 'Python'],
    github: 'https://github.com/AnshChaurasiya',
    demo: '#'
  }
];

export default function CreationDistrict() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  return (
    <section ref={sectionRef} className={styles.district} id="projects">
      <div className={styles.canvasContainer}>
        <Canvas camera={{ position: [0, 2, 8], fov: 60 }}>
          <CityScene />
        </Canvas>
      </div>
      <div className={styles.neonGrid} />
      {!reducedMotion && (
        <div className={styles.cyberRain}>
          {[...Array(30)].map((_, i) => (
            <div key={i} className={styles.rainDrop} style={{ left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 2}s`, animationDuration: `${1 + Math.random()}s` }} />
          ))}
        </div>
      )}
      <div className={styles.content}>
        <div className={styles.header}>
          <span className={styles.worldLabel}>WORLD 03: CREATION DISTRICT</span>
          <h2 className={styles.title}>
            <span className={styles.glitch} data-text="The Neon Forge">The Neon Forge</span>
          </h2>
          <p className={styles.subtitle}>In the bustling metropolis of creation, ideas transform into reality through code and design.</p>
        </div>
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <article key={index} className={styles.projectCard}>
              <div className={styles.cardGlow} />
              <div className={styles.cardContent}>
                <div className={styles.projectIcon}>{project.icon}</div>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>{project.desc}</p>
                <div className={styles.techStack}>
                  {project.tech.map((tech, i) => (<span key={i} className={styles.tech}>{tech}</span>))}
                </div>
                <div className={styles.projectLinks}>
                  <a href={project.github} className={styles.link}><span>View Code</span></a>
                  <a href={project.demo} className={styles.link}><span>Live Demo</span></a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className={styles.scanlines} />
    </section>
  );
}
