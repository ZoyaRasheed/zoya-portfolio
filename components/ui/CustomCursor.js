'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if device supports hover (desktop)
    if (!window.matchMedia('(pointer: fine)').matches) {
      return;
    }

    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
      setIsVisible(true);
    };

    const mouseEnter = () => setIsVisible(true);
    const mouseLeave = () => setIsVisible(false);

    const handleMouseEnter = () => setCursorVariant('hover');
    const handleMouseLeave = () => setCursorVariant('default');

    // Add listeners to existing interactive elements
    const addInteractiveListeners = () => {
      const interactiveElements = document.querySelectorAll('a, button, [data-cursor="hover"], input, textarea');
      interactiveElements.forEach(el => {
        if (!el.hasAttribute('data-cursor-attached')) {
          el.setAttribute('data-cursor-attached', 'true');
          el.addEventListener('mouseenter', handleMouseEnter);
          el.addEventListener('mouseleave', handleMouseLeave);
        }
      });
    };

    // Initial setup
    setTimeout(addInteractiveListeners, 100);

    // Set up mutation observer for dynamic content
    const observer = new MutationObserver(() => {
      setTimeout(addInteractiveListeners, 50);
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    window.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseenter', mouseEnter);
    document.addEventListener('mouseleave', mouseLeave);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      document.removeEventListener('mouseenter', mouseEnter);
      document.removeEventListener('mouseleave', mouseLeave);
      observer.disconnect();
      
      // Clean up listeners
      const elements = document.querySelectorAll('[data-cursor-attached="true"]');
      elements.forEach(el => {
        el.removeAttribute('data-cursor-attached');
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  // Don't render on touch devices
  if (typeof window !== 'undefined' && !window.matchMedia('(pointer: fine)').matches) {
    return null;
  }

  return (
    <motion.div
      className="cursor fixed pointer-events-none z-[9999] mix-blend-difference"
      style={{
        left: mousePosition.x - 16,
        top: mousePosition.y - 16,
      }}
      animate={{
        scale: cursorVariant === 'hover' ? 1.5 : 1,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
        mass: 0.5
      }}
    >
      <div className="w-8 h-8 bg-black rounded-full" />
    </motion.div>
  );
};

export default CustomCursor;