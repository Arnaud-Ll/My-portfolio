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

        {/* New section added here */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-sm text-gray-300 space-y-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat ultricies felis,
              ac vehicula arcu tempus eu. Fusce eget suscipit turpis, ut aliquet tortor. Ut quis
              sollicitudin neque. Mauris sed orci ut nunc suscipit viverra. Curabitur faucibus
              fermentum diam, at auctor odio interdum id.
            </p>
            <p>
              Phasellus suscipit, ligula ut fermentum vestibulum, dui arcu fermentum ipsum, ac
              convallis orci urna sed eros. Nulla tristique vulputate leo ac volutpat. Nulla nec
              ligula ut ligula aliquet pretium. Nulla facilisi. Suspendisse potenti. In ac lacus
              nec ligula auctor viverra. Nam bibendum laoreet est, sed tempus felis.
            </p>
            <p>
              Sed at felis sit amet metus feugiat tempor vel vel justo. Mauris vel ante viverra,
              tincidunt enim sit amet, vulputate risus. Sed vestibulum nisl in sapien euismod
              faucibus. In euismod augue eu diam sollicitudin iaculis. Integer sit amet dolor sit
              amet libero laoreet iaculis.
            </p>
          </div>
        </div>

        {/* Timeline section */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6">Mon parcours</h3>
          <Timeline />
        </div>
      </motion.div>
    </section>
  );
};

export default About;