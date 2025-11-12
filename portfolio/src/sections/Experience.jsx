import { motion, AnimatePresence } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaArrowRight } from 'react-icons/fa';

const experiences = [
  {
    type: 'work',
    title: 'Project Admin',
    company: 'GirlScript Summer of Code',
    date: 'May 2025 - Oct 2025',
    description: 'Served as a Project Admin at GSSoC, guiding open-source contributors, reviewing pull requests, and managing project development. Mentored participants in understanding code structure, maintaining best practices, and contributing effectively to collaborative repositories.',
    icon: <FaBriefcase className="text-white" />,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    type: 'education',
    title: 'B.Tech in Computer Science',
    company: 'Lovely Professional University',
    date: '2023 - Present',
    description: 'Pursuing my degree in Computer Science and Engineering with a focus on software development and artificial intelligence.',
    icon: <FaGraduationCap className="text-white" />,
    color: 'from-purple-500 to-pink-500'
  },
  {
    type: 'work',
    title: 'Campus Mantri',
    company: 'GeeksforGeeks',
    date: 'Mar 2025 - Present',
    description: 'Led a community of 3000+ members and organized 10+ hackathons, workshops, and coding events to promote a strong coding culture and active participation in GeeksforGeeks programs and contests.',
    icon: <FaBriefcase className="text-white" />,
    color: 'from-green-500 to-emerald-500'
  },
  {
    type: 'education',
    title: 'High School',
    company: 'Regional Secondary School',
    date: '2020 - 2022',
    description: 'Completed my high school education with a focus on Physics, Chemistry, and Mathematics.',
    icon: <FaGraduationCap className="text-white" />,
    color: 'from-amber-500 to-orange-500'
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tr from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-blue-300 mb-2 block">Professional & Academic</span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              My Journey
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="relative mt-12">
            {/* Timeline line */}
            <motion.div 
              className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"
              initial={{ scaleY: 0 }}
              whileInView={{ 
                scaleY: 1,
                transition: { 
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1]
                }
              }}
              viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
            />

            <div className="space-y-8">
              <AnimatePresence>
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ 
                      opacity: 1, 
                      y: 0,
                      transition: {
                        delay: 0.1 + (index * 0.1),
                        duration: 0.5,
                        ease: "easeOut"
                      }
                    }}
                    viewport={{ once: true, margin: "-50px 0px -50px 0px" }}
                    className={`relative flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
                  >
                    {/* Timeline dot */}
                    <motion.div 
                      className={`absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br ${exp.color} border-4 border-white/20 shadow-lg z-10 flex items-center justify-center`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    >
                      {exp.icon}
                    </motion.div>
                    
                    {/* Timeline content */}
                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-10' : 'pl-10'}`}>
                      <motion.div 
                        className={`p-5 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}
                        whileHover={{ y: -5 }}
                      >
                        <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full mb-2 ${exp.type === 'work' ? 'bg-blue-900/30 text-blue-300' : 'bg-purple-900/30 text-purple-300'}`}>
                          {exp.type === 'work' ? 'Work' : 'Education'}
                        </span>
                        <h3 className="text-lg font-bold text-white mb-1">{exp.title}</h3>
                        <p className="text-blue-300 text-sm font-medium mb-1">{exp.company}</p>
                        <p className="text-xs text-gray-300 mb-2">{exp.date}</p>
                        <p className="text-sm text-gray-300 mb-3">{exp.description}</p>
                        <motion.div 
                          className={`inline-flex items-center text-xs font-medium ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'} text-blue-300 group`}
                          whileHover={{ x: index % 2 === 0 ? 5 : -5 }}
                        >
                          {index % 2 === 0 ? 'View Details' : 'Read More'}
                          <FaArrowRight className="ml-1.5 group-hover:translate-x-1 transition-transform duration-200" />
                        </motion.div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: { 
                delay: 0.3,
                duration: 0.5,
                ease: 'easeOut'
              }
            }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <motion.a
              href="/src/assets/resume/Manish_Resume.pdf"
              download="Resume.pdf"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 group"
              whileHover={{ 
                scale: 1.03,
                boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.4)'
              }}
              whileTap={{ scale: 0.98 }}
            >
              Download Resume
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
        
