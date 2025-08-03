'use client';

import { motion } from 'framer-motion';

const AnimatedText = ({ 
  text, 
  className = '', 
  variant = 'words',
  delay = 0 
}) => {
  const textArray = variant === 'words' 
    ? text.split(' ') 
    : text.split('');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: delay * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{ overflow: 'hidden', display: 'flex', flexWrap: 'wrap' }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
    >
      {textArray.map((item, index) => (
        <motion.span
          variants={child}
          key={index}
          style={{ marginRight: variant === 'words' ? '0.25rem' : '0' }}
        >
          {item}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;