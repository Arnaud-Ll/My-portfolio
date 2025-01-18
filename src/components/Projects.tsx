import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import ProjectCard from './ProjectCard';

const featuredProject = {
  title: 'Bank marketing',
  description: 'Utiliser la dataviz et le machine learning pour prévoir et optimiser les résultats de la campagne marketing d\'une banque',
  image: 'https://res.cloudinary.com/dmtfnhvn6/image/upload/v1737205891/BANK%20MARKETING%20PROJECT.png',
  tags: ['Python', 'Machine Learning', 'Streamlit', 'Projet d\'équipe'],
  link: 'https://les4datafantastiques.streamlit.app/',
};

const projects = [
  {
    title: 'FVH Company',
    description: 'Création d\'une base de données de + de 12 000 000 de lignes en python pour l\'analyse de données',
    image: 'https://res.cloudinary.com/dmtfnhvn6/image/upload/v1737210724/FVH_Company_Logo_trvhiq.jpg',
    tags: ['Python', 'Dataset '],
    link: 'https://www.kaggle.com/datasets/arnaudleleu/fvh-fruits-and-vegetables-and-herbs-selling-company',
  },
  {
    title: 'IBM HR Attrition',
    description: 'Analyse du turn-over sur cette base de données RH créée par les Data Scientists d\'IBM',
    image: 'https://img.freepik.com/vecteurs-libre/illustration-concept-rejetee_114360-23764.jpg?t=st=1737214634~exp=1737218234~hmac=2519dd3c044772692a9daebbf46883b4227c8a76131ecabd9e728d9b0dd2ac17&w=1800',
    tags: ['PowerBI', 'Dataviz', 'RH'],
    link: 'https://github.com/Arnaud-Ll/My-portfolio/tree/main/assets/IBM_HR_Dashboard.pdf',
  },
  {
    title: 'WIP',
    description: 'Projet en cours',
    image: 'https://img.freepik.com/vecteurs-libre/plat-sous-modele-construction_23-2147739034.jpg?t=st=1737216459~exp=1737220059~hmac=51a298f5c1ed0c1b39e2b94886d4813e0c8dbf1b1536ea5f1924752078f321c8&w=1060',
    tags: ['Work', 'In', 'Progress'],
    link: 'https://fr.wikipedia.org/wiki/Work_in_progress',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16 text-pink-500 dark:text-blue-500">
          Mes projets
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
                  Voir le projet
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
