import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, MousePointerClick } from 'lucide-react';
import { TypewriterEffect } from './TypewriterEffect';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <header className="relative min-h-screen flex flex-col items-center justify-center px-4">
      <ThemeToggle className="absolute top-4 right-4" />
      
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative"
      >
        <div className="absolute -inset-20 bg-gradient-to-r from-pink-500/30 to-pink-600/30 dark:from-blue-500/30 dark:to-blue-600/30 rounded-full blur-2xl" />
        <div className="w-40 h-40 rounded-full overflow-hidden ring-4 ring-pink-500 dark:ring-blue-500 ring-opacity-50 relative">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      <h1 className="text-4xl font-bold mb-4 mt-8">Arnaud Leleu</h1>
      
      <TypewriterEffect words={['Data', 'Business', 'Simplifier']} />

      <div className="flex gap-4 mt-8">
        <motion.button
          whileHover={{ y: -2, boxShadow: '0 10px 25px -5px rgba(236, 72, 153, 0.4)' }}
          className="px-6 py-2 bg-gradient-to-r from-pink-500 to-pink-600 dark:from-blue-500 dark:to-blue-600 rounded-full text-white font-semibold"
        >
          Mes projets
        </motion.button>
        <motion.button
          whileHover={{ y: -2, boxShadow: '0 10px 25px -5px rgba(236, 72, 153, 0.4)' }}
          className="px-6 py-2 bg-gradient-to-r from-pink-500 to-pink-600 dark:from-blue-500 dark:to-blue-600 rounded-full text-white font-semibold"
        >
          Contactez-moi
        </motion.button>
      </div>

      <div className="flex gap-6 mt-8">
        <motion.a
          href="https://linkedin.com/bananananannana"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <Linkedin className="w-8 h-8 text-pink-500 dark:text-blue-500" />
        </motion.a>
        <motion.a
          href="https://github.io/bananannanananan"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, rotate: -5 }}
        >
          <Github className="w-8 h-8 text-pink-500 dark:text-blue-500" />
        </motion.a>
      </div>

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute bottom-8"
      >
        <MousePointerClick className="w-8 h-8 text-pink-500 dark:text-blue-500" />
      </motion.div>
    </header>
  );
};

export default Header;