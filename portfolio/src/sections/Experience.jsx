import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const experiences = [
  {
    type: 'work',
    title: 'Project Admin',
    company: 'GirlScript Summer of Code',
    date: 'May 2025 - Oct 2025',
    description: 'Served as a Project Admin at GSSoC, guiding open-source contributors, reviewing pull requests, and managing project development. Mentored participants in understanding code structure, maintaining best practices, and contributing effectively to collaborative repositories.',
    icon: <FaBriefcase className="text-primary text-xl" />
  },
  {
    type: 'education',
    title: 'B.Tech in Computer Science',
    company: 'Lovely Professional University',
    date: '2023 - Present',
    description: 'Pursuing my degree in Computer Science and Engineering with a focus on software development and artificial intelligence.',
    icon: <FaGraduationCap className="text-secondary text-xl" />
  },
  {
    type: 'work',
    title: 'Campus Mantri',
    company: 'GeeksforGeeks',
    date: 'Mar 2025 - Present',
    description: 'Led a community of 3000+ members and organized 10+ hackathons, workshops, and coding events to promote a strong coding culture and active participation in GeeksforGeeks programs and contests.',
    icon: <FaBriefcase className="text-primary text-xl" />
  },
  {
    type: 'education',
    title: 'High School',
    company: 'Regional Secondary School',
    date: '2020 - 2022',
    description: 'Completed my high school education with a focus on Physics, Chemistry, and Mathematics.',
    icon: <FaGraduationCap className="text-secondary text-xl" />
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-dark/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="section-title text-center">
            My <span className="gradient-text">Journey</span>
          </h2>
          
          <div className="mt-12 relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary to-secondary"></div>
            
            {/* Timeline items */}
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-dark border-4 border-primary z-10 flex items-center justify-center">
                    {exp.icon}
                  </div>
                  
                  {/* Timeline content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                    <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                    <p className="text-light/70 mb-2">{exp.company}</p>
                    <p className="text-sm text-primary font-medium mb-2">{exp.date}</p>
                    <p className="text-light/80">{exp.description}</p>
                  </div>
                  
                  {/* Empty div for spacing on the other side */}
                  <div className="w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <a
              href="/src/assets/resume/Manish_Resume.pdf"
              download="Resume.pdf"
              className="inline-block border border-blue-400 text-blue-300 px-6 py-3 rounded-lg font-medium hover:bg-blue-500/10 transition-all transform hover:scale-105"
            >
              Download Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
