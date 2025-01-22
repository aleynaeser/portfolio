'use client';

import React, { useRef } from 'react';
import { AnimatePresence, motion, useInView } from 'framer-motion';

interface IAnimatedText {
  text: string;
  duration?: number;
  delay?: number;
}

export default function AnimatedText({ text, duration = 0.3, delay = 0 }: IAnimatedText) {
  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: true });

  return (
    <div className='text-7xl font-semibold md:text-5xl'>
      <AnimatePresence>
        {text.split('').map((char, i) => (
          <motion.span
            key={`${text}-${i}`}
            ref={textRef}
            exit='hidden'
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: duration, delay: i * 0.1 + delay }}
          >
            {char === ' ' ? <span>&nbsp;</span> : char}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
}
