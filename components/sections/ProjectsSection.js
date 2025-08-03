'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import AnimatedText from '../ui/AnimatedText';
import { projectsData } from '@/config/projects';

const ProjectsSection = () => {
  const featuredProjects = projectsData.filter(project => project.featured);
  const otherProjects = projectsData.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-4 text-white font-poppins">
            <AnimatedText text="Selected Work" />
          </h2>
          <div className="w-24 h-px bg-blue-400 mx-auto"></div>
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-20">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 last:mb-0 ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              {/* Project Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <motion.div
                  className="aspect-[4/3] relative bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg border border-blue-400/20"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Placeholder for project image */}
                  <div className="w-full h-full bg-gradient-to-br from-blue-600/30 to-pink-600/30 flex items-center justify-center">
                    <span className="text-blue-200 text-lg font-poppins">{project.title} Preview</span>
                  </div>
                </motion.div>
              </div>

              {/* Project Details */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <span className="text-sm font-medium text-blue-300 uppercase tracking-wide font-poppins">
                    {project.category} • {project.year}
                  </span>
                  <h3 className="text-3xl font-light mt-2 mb-4 text-white font-poppins">{project.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed font-poppins">
                    {project.longDescription}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-900/30 text-blue-200 rounded-full text-sm font-medium border border-blue-400/20 font-poppins"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-medium text-blue-300 hover:text-white transition-colors duration-300 font-poppins"
                      >
                        View Live
                        <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-medium text-blue-300 hover:text-white transition-colors duration-300 font-poppins"
                      >
                        View Code
                        <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Grid */}
        {otherProjects.length > 0 && (
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-light text-center mb-12 text-white font-poppins"
            >
              <AnimatedText text="Other Projects" />
            </motion.h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-blue-900/10 to-purple-900/10 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg border border-blue-400/20 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="aspect-[4/3] relative bg-gradient-to-br from-blue-600/30 to-pink-600/30">
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-blue-200 font-poppins">{project.title}</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-blue-300 uppercase tracking-wide font-poppins">
                        {project.category}
                      </span>
                      <span className="text-xs text-gray-400 font-poppins">{project.year}</span>
                    </div>
                    
                    <h4 className="text-lg font-medium mb-2 text-white font-poppins">{project.title}</h4>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2 font-poppins">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-blue-900/30 text-blue-200 rounded text-xs border border-blue-400/20 font-poppins"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-xs text-gray-400 font-poppins">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                    
                    <div className="flex space-x-3">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-medium text-blue-300 hover:text-white transition-colors duration-300 font-poppins"
                        >
                          Live Demo
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-medium text-blue-300 hover:text-white transition-colors duration-300 font-poppins"
                        >
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;