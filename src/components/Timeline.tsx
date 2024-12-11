import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const timelineData = [
  {
    year: '2024',
    title: 'Business Analyst / Data Analyst',
    company: '-',
    description: 'Reconversion professionnelle, acquisition de compétences métier et développement de projets professionnels',
  },
  {
    year: '2020',
    title: 'Responsable d\'exploitation',
    company: 'Orléans Spectacles puis Orléans Events',
    description: 'Développement commercial, modernisation des process, mise en œuvre de solutions budgétaires automatisées',
  },
  {
    year: '2014',
    title: 'Comptable',
    company: 'Orléans Gestion',
    description: 'Conception et suivi de tableaux de bords automatisés, gain de temps significatif dans le traitement des données pour plusieurs collaborateurs',
  },
];

const Timeline: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="relative">
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-pink-500/20 dark:bg-blue-500/20" />
      
      {timelineData.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: index * 0.2 }}
          className="ml-12 mb-8 relative"
        >
          <div className="absolute -left-12 top-1.5 w-4 h-4 rounded-full bg-pink-500 dark:bg-blue-500">
            <div className="absolute inset-0 rounded-full animate-ping bg-pink-500/40 dark:bg-blue-500/40" />
          </div>
          
          <div className="p-4 rounded-lg bg-white/5 backdrop-blur-sm">
            <span className="text-sm text-pink-500 dark:text-blue-500 font-semibold">
              {item.year}
            </span>
            <h4 className="text-lg font-semibold mt-1">{item.title}</h4>
            <p className="text-sm text-gray-300">{item.company}</p>
            <p className="mt-2 text-sm text-gray-400">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;