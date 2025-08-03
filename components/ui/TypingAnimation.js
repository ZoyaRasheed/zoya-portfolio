'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TypingAnimation = ({ 
  text, 
  className = '', 
  speed = 100,
  showCursor = true,
  onComplete 
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (!isComplete) {
      setIsComplete(true);
      onComplete?.();
    }
  }, [currentIndex, text, speed, isComplete, onComplete]);

  return (
    <div className={className}>
      <AnimatePresence mode="wait">
        {displayedText.split('').map((char, index) => (
          <motion.span
            key={index}
            initial={{ 
              opacity: 0, 
              rotateX: -90,
              y: 20
            }}
            animate={{ 
              opacity: 1, 
              rotateX: 0,
              y: 0
            }}
            transition={{
              duration: 0.2,
              delay: index * 0.02,
              type: "spring",
              stiffness: 300,
              damping: 20
            }}
            className="inline-block"
            style={{ transformOrigin: 'center bottom' }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </AnimatePresence>
      
      {showCursor && !isComplete && (
        <motion.span
          className="inline-block w-0.5 h-[1em] bg-current ml-1"
          animate={{ opacity: [1, 0, 1] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}
      {showCursor && isComplete && (
        <motion.span
          className="inline-block w-0.5 h-[1em] bg-current ml-1"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 2, duration: 0.5 }}
        />
      )}
    </div>
  );
};

export default TypingAnimation;