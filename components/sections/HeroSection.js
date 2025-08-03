'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import TypingAnimation from '../ui/TypingAnimation';

const HeroSection = () => {
  const [showSubtitle, setShowSubtitle] = useState(false);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">

      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 border-2 border-blue-400/30 rounded-lg backdrop-blur-sm"
        animate={{
          rotate: [0, 180, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-32 left-16 w-20 h-20 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full backdrop-blur-sm"
        animate={{
          y: [-10, 10, -10],
          x: [-5, 5, -5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating Code Snippets */}
      <motion.div
        className="absolute top-32 left-32 text-blue-300/40 font-mono text-sm"
        animate={{
          y: [-5, 5, -5],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {'<div className="hero">'}
      </motion.div>

      <motion.div
        className="absolute bottom-40 right-32 text-pink-300/40 font-mono text-sm"
        animate={{
          y: [5, -5, 5],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {'const portfolio = () => {}'}
      </motion.div>

      <motion.div
        className="absolute top-1/2 right-20 text-purple-300/40 font-mono text-sm"
        animate={{
          x: [-3, 3, -3],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 4.2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {'npm install creativity'}
      </motion.div>

      {/* Animated Laptop/Screen */}
      <motion.div
        className="absolute top-16 left-1/2 transform -translate-x-1/2 w-24 h-16 border-2 border-gray-400/30 rounded-lg"
        animate={{
          rotateY: [-10, 10, -10],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-full h-3/4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-t-md mt-1 mx-1"></div>
        <div className="w-full h-1/4 bg-gray-600/30 rounded-b-lg"></div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-6 text-white font-poppins">
            <TypingAnimation 
              text="Hello, I am Zoya Rasheed"
              speed={80}
              className="block"
              onComplete={() => setShowSubtitle(true)}
            />
          </h1>
          
          {showSubtitle && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.8 }}
                className="h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto max-w-md mb-6"
              />
              
              <motion.h2 
                className="text-xl md:text-2xl text-blue-200/80 font-light font-poppins"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3, duration: 0.8 }}
              >
                Creative Developer & Digital Artist
              </motion.h2>
            </motion.div>
          )}
        </motion.div>

        {showSubtitle && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="text-lg text-gray-300/80 max-w-2xl mx-auto leading-relaxed mb-8 font-poppins"
          >
            Crafting digital experiences with purpose and precision
          </motion.p>
        )}

        {showSubtitle && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.8 }}
            className="mt-12"
          >
            <a
              href="#about"
              className="inline-flex items-center text-sm font-medium text-blue-300/80 hover:text-white transition-colors duration-300 font-poppins"
            >
              Explore My Work
              <motion.svg
                className="ml-2 w-4 h-4"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </motion.svg>
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;