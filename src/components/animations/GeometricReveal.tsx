'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import styles from './GeometricReveal.module.css';

interface GeometricRevealProps {
  children: React.ReactNode;
  className?: string;
}

export default function GeometricReveal({ children, className = '' }: GeometricRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.reveal);
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div className={`${styles.revealContainer} ${className}`} ref={containerRef}>
      <motion.div
        className={styles.content}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {children}
      </motion.div>
      <svg className={styles.clipPath} width="0" height="0">
        <defs>
          <clipPath id="hexagonalClip" clipPathUnits="objectBoundingBox">
            <path d="M0.5,0 L0.933,0.25 L0.933,0.75 L0.5,1 L0.067,0.75 L0.067,0.25 Z" />
          </clipPath>
        </defs>
      </svg>
      <div className={styles.revealMask}>
        {Array.from({ length: 30 }).map((_, index) => (
          <div
            key={index}
            className={styles.hexagon}
            style={
              {
                '--delay': `${Math.random() * 0.5}s`,
                '--x': `${Math.random() * 100}%`,
                '--y': `${Math.random() * 100}%`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>
    </div>
  );
}
