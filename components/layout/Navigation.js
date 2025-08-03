'use client';

import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const Navigation = () => {
  const navRef = useRef(null);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (navRef.current) {
        const rect = navRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        cursorX.set(x);
        cursorY.set(y);
      }
    };

    const currentNav = navRef.current;
    if (currentNav) {
      currentNav.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (currentNav) {
        currentNav.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [cursorX, cursorY]);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <motion.nav
      ref={navRef}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="absolute top-4 left-4 right-4 z-50 flex items-center justify-between"
    >
      {/* Logo */}
      <motion.a
        href="#home"
        className="text-2xl font-bold text-white font-poppins"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.05 }}
      >
        Zoya.
      </motion.a>

      {/* Navigation Items */}
      <motion.div
        className=" px-6 py-3 relative overflow-hidden"
        ref={navRef}
      >
        {/* Magnetic cursor effect */}
        <motion.div
          className="absolute w-20 h-20 bg-accent/10 rounded-full pointer-events-none"
          style={{
            left: cursorXSpring,
            top: cursorYSpring,
            x: '-50%',
            y: '-50%',
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
        
        <ul className="flex space-x-8 relative z-10">
          {navItems.map((item, index) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.a
                href={item.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 relative group block px-3 py-2 font-poppins"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-3 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-[calc(100%-1.5rem)]"></span>
              </motion.a>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.nav>
  );
};

export default Navigation;