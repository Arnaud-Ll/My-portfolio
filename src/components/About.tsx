import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Timeline from './Timeline';

const About: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 px-4 md:px-8">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-center mb-16 text-pink-500 dark:text-blue-500">
          About Me
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6">Experience Journey</h3>
          <Timeline />
        </div>
      </motion.div>
    </section>
  );
};

export default About;