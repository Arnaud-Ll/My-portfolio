import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

interface ThemeToggleProps {
  className?: string;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ className }) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setIsDark(!isDark)}
      className={`p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg ${className}`}
    >
      {isDark ? (
        <Moon className="w-6 h-6 text-blue-500" />
      ) : (
        <Sun className="w-6 h-6 text-pink-500" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;