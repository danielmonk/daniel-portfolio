import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Code, Award, MapPin, Calendar, Linkedin, User } from 'lucide-react';

const PortfolioSite = () => {
  const [activeSection, setActiveSection] = useState('experience');

  const experiences = [
    {
      title: 'Frontend Developer',
      company: 'First Event',
      period: 'Feb 2021 - Present',
      duration: '4 yrs 2 mos',
      description: 'Developing responsive and innovative web applications'
    },
    {
      title: 'Director',
      company: 'Greazy Tees',
      period: 'Apr 2020 - Present',
      duration: '5 yrs',
      description: 'Leading strategic business development and operations'
    },
    {
      title: 'Frontend Developer',
      company: 'Zazzle Media',
      period: 'Dec 2017 - Feb 2021',
      duration: '3 yrs 3 mos',
      description: 'Creating cutting-edge digital experiences and web solutions'
    },
    {
      title: 'Web Developer',
      company: 'Mold Agency',
      period: 'Sep 2016 - Dec 2017',
      duration: '1 yr 4 mos',
      description: 'Developing web solutions and maintaining client websites'
    },
    {
      title: 'Junior Website Designer/Developer',
      company: 'Brave Creative Limited',
      period: 'Jul 2013 - Sep 2016',
      duration: '3 yrs 3 mos',
      description: 'Creating initial web designs and supporting development projects'
    }
  ];

  const skills = [
    'Photoshop', 'Web Design', 'React', 'JavaScript', 
    'Tailwind CSS', 'Frontend Development', 'UI/UX', 
    'HTML5', 'CSS3', 'Marketing Development'
  ];

  const certifications = [
    {
      title: 'Facebook Certified Marketing Developer',
      code: '500-101',
      issuer: 'Zazzle Media',
      year: 2020
    },
    {
      title: 'Advanced Level Apprenticeship in IT Application Specialist',
      issuer: 'Apprenticeships',
      year: 2015,
      company: 'Brave Creative Limited'
    },
    {
      title: 'OCR Level 3 Diploma in IT User Skills',
      issuer: 'OCR',
      year: 2015,
      company: 'Brave Creative Limited'
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          {/* Placeholder Avatar */}
          <div className="flex justify-center mb-4">
            <div className="w-32 h-32 bg-indigo-100 rounded-full flex items-center justify-center">
              <User className="w-16 h-16 text-indigo-500" />
            </div>
          </div>

          <h1 className="text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
            Daniel Monk
          </h1>
          <p className="text-xl text-neutral-600 flex items-center justify-center gap-2">
            <Code className="text-indigo-500" />
            Frontend Developer
          </p>
        </motion.header>

        {/* Navigation */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center space-x-4 mb-12"
        >
          {[
            { name: 'experience', icon: <Briefcase /> },
            { name: 'skills', icon: <Code /> },
            { name: 'certifications', icon: <Award /> }
          ].map((section) => (
            <button
              key={section.name}
              onClick={() => setActiveSection(section.name)}
              className={`
                px-4 py-2 rounded-full transition-all duration-300 
                flex items-center gap-2
                ${activeSection === section.name 
                  ? 'bg-indigo-500 text-white shadow-lg' 
                  : 'text-neutral-600 hover:bg-neutral-200'}
              `}
            >
              {section.icon}
              <span className="capitalize">{section.name}</span>
            </button>
          ))}
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            {activeSection === 'experience' && (
              <div>
                <h2 className="text-3xl font-bold mb-6 text-indigo-600 flex items-center gap-3">
                  <Briefcase /> Professional Journey
                </h2>
                {experiences.map((exp, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="mb-6 pb-6 border-b border-neutral-200 last:border-b-0"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-semibold">{exp.title}</h3>
                        <p className="text-neutral-600">{exp.company}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-neutral-500 flex items-center gap-2">
                          <Calendar size={16} />
                          {exp.period}
                        </p>
                      </div>
                    </div>
                    <p className="text-neutral-600 mt-2">{exp.description}</p>
                  </motion.div>
                ))}
              </div>
            )}

            {activeSection === 'skills' && (
              <div>
                <h2 className="text-3xl font-bold mb-6 text-indigo-600 flex items-center gap-3">
                  <Code /> Technical Skills
                </h2>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'certifications' && (
              <div>
                <h2 className="text-3xl font-bold mb-6 text-indigo-600 flex items-center gap-3">
                  <Award /> Certifications
                </h2>
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="mb-4 pb-4 border-b border-neutral-200 last:border-b-0"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-xl font-semibold">{cert.title}</h3>
                        <p className="text-neutral-600">
                          {cert.issuer} 
                          {cert.company && ` · ${cert.company}`}
                        </p>
                        {cert.code && <p className="text-sm text-neutral-500">{cert.code}</p>}
                      </div>
                      <span className="text-neutral-500">{cert.year}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="flex justify-center space-x-4 text-neutral-600">
            <a 
              href="#" 
              className="hover:text-indigo-600 transition-colors flex items-center gap-2"
            >
              <Linkedin /> LinkedIn Profile
            </a>
          </div>
        </motion.footer>
      </div>
    </div>
  );
};

export default PortfolioSite;