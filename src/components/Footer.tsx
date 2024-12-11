import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-white/10">
      <div className="max-w-6xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm text-gray-400"
        >
          © 2024 John Doe. Crafting insights, one dataset at a time.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-500"
        >
          Made with <Heart className="w-4 h-4 text-pink-500 dark:text-blue-500" /> using modern tech
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;