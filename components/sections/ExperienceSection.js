'use client';

import { motion } from 'framer-motion';
import AnimatedText from '../ui/AnimatedText';
import { experienceData, skillsData } from '@/config/experience';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-4 text-white font-poppins">
            <AnimatedText text="Experience" />
          </h2>
          <div className="w-24 h-px bg-blue-400 mx-auto"></div>
        </motion.div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-blue-400/30"></div>
            
            {experienceData.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="relative flex items-start mb-12 last:mb-0"
              >
                {/* Timeline dot */}
                <div className={`absolute left-6 w-4 h-4 rounded-full ${exp.current ? 'bg-blue-400' : 'bg-gray-500'} z-10`}></div>
                
                {/* Content */}
                <div className="ml-20 bg-gradient-to-br from-blue-900/10 to-purple-900/10 backdrop-blur-sm rounded-lg shadow-lg border border-blue-400/20 p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-medium text-white font-poppins">{exp.position}</h3>
                      <p className="text-lg text-blue-300 font-medium font-poppins">{exp.company}</p>
                    </div>
                    <div className="text-sm text-gray-400 mt-2 md:mt-0 font-poppins">
                      <p>{exp.duration}</p>
                      <p>{exp.location}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 font-poppins">{exp.description}</p>
                  
                  {exp.achievements && exp.achievements.length > 0 && (
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-white mb-2 font-poppins">Key Achievements:</h4>
                      <ul className="text-sm text-gray-300 space-y-1 font-poppins">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <span className="inline-block w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-900/30 text-blue-200 rounded-full text-xs font-medium border border-blue-400/20 font-poppins"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-light text-center mb-12 text-white font-poppins">
            <AnimatedText text="Technical Skills" />
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillsData.technical.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h4 className="text-lg font-medium text-white mb-4 font-poppins">{skillGroup.category}</h4>
                <div className="flex flex-wrap justify-center gap-2">
                  {skillGroup.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-900/20 text-blue-200 rounded-full text-sm hover:bg-blue-800/30 transition-colors duration-200 border border-blue-400/20 font-poppins"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;