import React from 'react';
import { motion } from 'framer-motion';
import { Hexagon } from 'lucide-react';

interface Skill {
  name: string;
  level: number; // 1-5
}

const skills: Skill[] = [
  { name: 'Data Analysis', level: 5 },
  { name: 'Python', level: 4.5 },
  { name: 'SQL', level: 5 },
  { name: 'Power BI', level: 4.5 },
  { name: 'Machine Learning', level: 4 },
  { name: 'Data Visualization', level: 5 },
  { name: 'Statistical Analysis', level: 4.5 },
  { name: 'ETL Processes', level: 4 },
];

const SkillRating: React.FC = () => {
  const renderRating = (level: number) => {
    const shapes = [];
    const fullShapes = Math.floor(level);
    const hasHalf = level % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullShapes) {
        shapes.push(
          <Hexagon
            key={i}
            className="w-4 h-4 text-pink-500 dark:text-blue-500 fill-current"
          />
        );
      } else if (i === fullShapes && hasHalf) {
        shapes.push(
          <div key={i} className="relative">
            <Hexagon className="w-4 h-4 text-pink-500 dark:text-blue-500" />
            <div className="absolute inset-0 overflow-hidden w-1/2">
              <Hexagon className="w-4 h-4 text-pink-500 dark:text-blue-500 fill-current" />
            </div>
          </div>
        );
      } else {
        shapes.push(
          <Hexagon
            key={i}
            className="w-4 h-4 text-pink-500 dark:text-blue-500"
          />
        );
      }
    }
    return shapes;
  };

  return (
    <div className="grid gap-4">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex items-center justify-between p-3 rounded-lg bg-white/5 backdrop-blur-sm"
        >
          <span className="font-medium">{skill.name}</span>
          <div className="flex gap-1">{renderRating(skill.level)}</div>
        </motion.div>
      ))}
    </div>
  );
};

export default SkillRating;