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
          A propos de moi
        </h2>
        
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-sm text-gray-300 space-y-4">
            <p>
            Analyste de données avec un regard unique, je combine expertise opérationnelle et vision stratégique pour transformer les données en décisions impactantes.
            </p>
            <p>
            Mon parcours atypique m’a appris à détecter les opportunités, résoudre les inefficacités et piloter des projets complexes, toujours avec un objectif : maximiser la performance.
            </p>
            <p>
            Je ne me limite pas aux chiffres. Mon expérience terrain me permet d’aller au-delà des analyses classiques pour révéler des insights clés et proposer des solutions concrètes, adaptées à vos besoins.
            </p>
            <p>
            Avec moi, vos données deviendront un levier puissant pour une transformation durable et mesurable.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6">Mon parcours</h3>
          <Timeline />
        </div>
      </motion.div>
    </section>
  );
};

export default About;