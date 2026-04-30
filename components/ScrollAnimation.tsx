'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function ScrollFadeIn({ children, delay = 0, duration = 0.6 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

export function ScrollSlideIn({ children, direction = 'left', delay = 0, duration = 0.6 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const xValue = direction === 'left' ? -50 : direction === 'right' ? 50 : 0;
  const yValue = direction === 'up' ? 50 : direction === 'down' ? -50 : 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: xValue, y: yValue }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: xValue, y: yValue }}
      transition={{ duration, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

