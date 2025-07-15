'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import styles from './MaskText.module.css';

interface MaskTextProps {
  text: string;
  className?: string;
}

export default function MaskText({ text, className = '' }: MaskTextProps) {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animate);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <div className={`${styles.maskContainer} ${className}`} ref={textRef}>
      <motion.div
        className={styles.textWrapper}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className={styles.maskedText}>{text}</div>
        <div className={styles.originalText}>{text}</div>
      </motion.div>
    </div>
  );
}
