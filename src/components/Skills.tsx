import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SkillRating from './SkillRating';
import { Users2, Brain, Lightbulb, Target } from 'lucide-react';

const softSkills = [
  { icon: Users2, label: 'Gestion de projet' },
  { icon: Brain, label: 'Esprit d\'équipe' },
  { icon: Lightbulb, label: 'Résolution de problèmes' },
  { icon: Target, label: '10 ans d\'expérience métier' },
];

const Skills: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 px-4 md:px-8 relative">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-center mb-16 text-pink-500 dark:text-blue-500">
          Compétences & expertises
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Expertises</h3>
            <div className="grid grid-cols-2 gap-6">
              {softSkills.map((Skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="p-4 rounded-lg bg-white/5 backdrop-blur-sm flex flex-col items-center gap-3"
                >
                  <Skill.icon className="w-8 h-8 text-pink-500 dark:text-blue-500" />
                  <span className="text-sm font-medium">{Skill.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Compétences techniques</h3>
            <SkillRating />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;