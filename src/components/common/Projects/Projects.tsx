'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GitHubLogoIcon, ExternalLinkIcon } from '@radix-ui/react-icons';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import styles from './Projects.module.css';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'Super FlashCards',
    description: 'Responsive interactive flashcard app with create/edit features, dark mode, session tracking, and smooth animations.',
    tech: ['Next.js', 'React', 'Material UI', 'Framer Motion'],
    github: 'https://github.com/AnshChaurasiya/Super-FlashCards',
    demo: 'https://super-flashcards.vercel.app',
    gradient: 'linear-gradient(135deg, #EC4899, #A78BFA)',
  },
  {
    title: 'GenArtVerse',
    description: 'AI art & poetry generator using voice/text with Azure LLM, Hugging Face, and speech recognition.',
    tech: ['React', 'FastAPI', 'Azure LLM', 'Python'],
    github: 'https://github.com/AnshChaurasiya/LLM-Based-Art-Generator',
    demo: null,
    gradient: 'linear-gradient(135deg, #A5B4FC, #7DD3FC)',
  },
  {
    title: 'Local AI Agent Framework',
    description: 'Intelligent agent framework with local LLM integration for autonomous task execution.',
    tech: ['Python', 'LLM', 'Agent Framework'],
    github: 'https://github.com/AnshChaurasiya/Local-AI-Agent-Framework',
    demo: null,
    gradient: 'linear-gradient(135deg, #10B981, #6EE7B7)',
  },
  {
    title: 'VOLCON',
    description: 'Real-time hand gesture-based volume control system using computer vision.',
    tech: ['Python', 'OpenCV', 'Mediapipe'],
    github: 'https://github.com/AnshChaurasiya/Hand-Gesture-Volume-Control-System',
    demo: null,
    gradient: 'linear-gradient(135deg, #F59E0B, #FBBF24)',
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!sectionRef.current || reducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
      });

      const cards = gridRef.current?.querySelectorAll(`.${styles.projectCard}`);
      if (cards) {
        gsap.from(cards, {
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 80%',
          },
          y: 80,
          opacity: 0,
          stagger: 0.15,
          duration: 0.8,
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section ref={sectionRef} className={styles.projects} id="projects">
      <article className={styles.container}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.5rem 1.5rem',
          background: 'rgba(236, 72, 153, 0.2)',
          border: '1px solid rgba(236, 72, 153, 0.3)',
          borderRadius: '2rem',
          color: '#EC4899',
          fontSize: '0.875rem',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          marginBottom: '2rem',
          backdropFilter: 'blur(12px)',
        }}>
          <span style={{ fontSize: '1.25rem' }}>🌃</span>
          Creation District
        </div>
        
        <h2 ref={titleRef} className={styles.title}>
          Featured <span className={styles.highlight}>Projects</span>
        </h2>

        <div ref={gridRef} className={styles.grid}>
          {projects.map((project, index) => (
            <article key={index} className={styles.projectCard}>
              <div 
                className={styles.cardHeader} 
                style={{ background: project.gradient }}
              />
              
              <div className={styles.cardContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                
                <ul className={styles.techList}>
                  {project.tech.map((tech, i) => (
                    <li key={i} className={styles.techItem}>{tech}</li>
                  ))}
                </ul>

                <div className={styles.links}>
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                    aria-label="View source code on GitHub"
                  >
                    <GitHubLogoIcon width={20} height={20} />
                    Code
                  </a>
                  {project.demo && (
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.link}
                      aria-label="View live demo"
                    >
                      <ExternalLinkIcon width={20} height={20} />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </article>
    </section>
  );
}
