'use client';

import { motion } from 'framer-motion';
import AnimatedText from '../ui/AnimatedText';
import { portfolioData } from '@/config/portfolio';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background geometric shapes */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 border border-gray-200 rounded-full"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        className="absolute bottom-20 left-20 w-32 h-32 bg-gray-100 rounded-lg"
        animate={{
          y: [-10, 10, -10],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-4">
            <AnimatedText 
              text={portfolioData.name}
              className="block"
              variant="letters"
            />
          </h1>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 1 }}
            className="h-px bg-gradient-to-r from-transparent via-black to-transparent mx-auto max-w-md mb-6"
          />
          
          <h2 className="text-xl md:text-2xl text-gray-600 font-light">
            <AnimatedText 
              text={portfolioData.title}
              delay={1.5}
            />
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed"
        >
          {portfolioData.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="mt-12"
        >
          <a
            href="#about"
            className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-black transition-colors duration-300"
          >
            Scroll to explore
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
      </div>
    </section>
  );
};

export default HeroSection;