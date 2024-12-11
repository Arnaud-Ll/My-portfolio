import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'Leadership', value: 90 },
  { name: 'Analytics', value: 95 },
  { name: 'Innovation', value: 85 },
  { name: 'Communication', value: 88 },
  { name: 'Strategy', value: 92 },
];

const SkillsRadar = () => {
  const maxRadius = 150;
  const centerX = maxRadius;
  const centerY = maxRadius;

  const getCoordinates = (index: number, radius: number) => {
    const angle = (index * 2 * Math.PI) / skills.length - Math.PI / 2;
    return {
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle),
    };
  };

  const points = skills.map((_, i) => getCoordinates(i, maxRadius));
  const valuePoints = skills.map((skill, i) => 
    getCoordinates(i, (skill.value / 100) * maxRadius)
  );

  const pathData = valuePoints
    .map((point, i) => (i === 0 ? `M ${point.x},${point.y}` : `L ${point.x},${point.y}`))
    .join(' ') + ' Z';

  return (
    <div className="mt-8">
      <motion.svg
        width={maxRadius * 2}
        height={maxRadius * 2}
        className="mx-auto"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Background lines */}
        {[0.2, 0.4, 0.6, 0.8, 1].map((scale, i) => (
          <polygon
            key={i}
            points={points.map(p => `${centerX + (p.x - centerX) * scale},${centerY + (p.y - centerY) * scale}`).join(' ')}
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1"
          />
        ))}

        {/* Skill lines */}
        {points.map((point, i) => (
          <line
            key={i}
            x1={centerX}
            y1={centerY}
            x2={point.x}
            y2={point.y}
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1"
          />
        ))}

        {/* Skill area */}
        <motion.path
          d={pathData}
          fill="rgba(236,72,153,0.2)"
          stroke="rgb(236,72,153)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        />

        {/* Skill labels */}
        {skills.map((skill, i) => {
          const point = getCoordinates(i, maxRadius + 20);
          return (
            <text
              key={i}
              x={point.x}
              y={point.y}
              textAnchor="middle"
              fill="white"
              fontSize="12"
              className="font-medium"
            >
              {skill.name}
            </text>
          );
        })}
      </motion.svg>
    </div>
  );
};

export default SkillsRadar;