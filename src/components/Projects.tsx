import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import ProjectCard from './ProjectCard';

const featuredProject = {
  title: 'Data Visualization Dashboard',
  description: 'Interactive dashboard built with Power BI and Python, processing over 1M records daily',
  image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200',
  tags: ['Power BI', 'Python', 'SQL'],
  link: 'https://bana1.com',
};

const projects = [
  {
    title: 'Predictive Analytics Tool',
    description: 'Machine learning model for customer behavior prediction',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800',
    tags: ['Python', 'TensorFlow', 'SQL'],
    link: 'https://bana2.com',
  },
  {
    title: 'Automated Reporting System',
    description: 'End-to-end automation of business reporting',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800',
    tags: ['Power Automate', 'Excel', 'VBA'],
    link: 'https://bana3.com',
  },
  {
    title: 'Data Pipeline Architecture',
    description: 'Scalable ETL pipeline processing terabytes of data',
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=800',
    tags: ['Apache Airflow', 'AWS', 'Python'],
    link: 'https://bana4.com',
  },
];

const Projects = () => {
  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16 text-pink-500 dark:text-blue-500">
          Featured Projects
        </h2>

        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="relative group overflow-hidden rounded-xl">
            <img
              src={featuredProject.image}
              alt={featuredProject.title}
              className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
              <div className="absolute bottom-0 p-8">
                <h3 className="text-2xl font-bold mb-2">{featuredProject.title}</h3>
                <p className="text-gray-300 mb-4">{featuredProject.description}</p>
                <div className="flex gap-2 mb-4">
                  {featuredProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm bg-pink-500/20 dark:bg-blue-500/20 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <motion.a
                  href={featuredProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-pink-500 dark:bg-blue-500 rounded-full text-white font-medium hover:bg-pink-600 dark:hover:bg-blue-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  View Project
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;