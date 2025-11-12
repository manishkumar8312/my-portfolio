import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';

const About = () => {
  const infoItems = [
    { label: 'Name', value: 'Manish Kumar Sah', icon: '👨‍💻' },
    { label: 'Email', value: 'manishksah.2027@gmail.com', icon: '✉️' },
    { label: 'Location', value: 'India', icon: '📍' },
    { label: 'Experience', value: 'Project Admin(GSSoC-25)', icon: '💼' }
  ];

  const techStack = [
    { name: 'React', color: 'text-blue-400' },
    { name: 'Node.js', color: 'text-green-400' },
    { name: 'MongoDB', color: 'text-emerald-400' },
    { name: 'Tailwind CSS', color: 'text-cyan-400' },
    { name: 'Python', color: 'text-yellow-400' },
    { name: 'AI/ML', color: 'text-purple-400' }
  ];

  return (
    <motion.section
      id="about"
      aria-label="About Me"
      className="relative py-16 sm:py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tr from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <motion.div 
            className="text-center mb-12 sm:mb-16 lg:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-50px' }}
          >
            <span className="text-sm sm:text-base font-medium text-blue-300 mb-2 block">Get To Know More</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              About Me
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </motion.div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Profile Card */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-500 group-hover:shadow-blue-500/20 border border-white/10 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm">
                <div className="w-full h-auto aspect-square max-h-[500px] flex items-center justify-center p-6 sm:p-8 md:p-10">
                  <div className="text-center w-full">
                    {/* Floating Avatar Animation */}
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
                      className="w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 mx-auto mb-6 rounded-full border-4 border-white/20 shadow-xl overflow-hidden bg-gray-800/50"
                    >
                      <img 
                        src="/src/assets/images/profile2.jpg" 
                        alt="Manish Kumar Sah" 
                        className="w-full h-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = 'https://via.placeholder.com/400x400/1a1a2e/ffffff?text=MK';
                        }}
                      />
                    </motion.div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5">Manish Kumar Sah</h3>
                    <p className="text-blue-200 text-sm sm:text-base">Full Stack Developer & AI Enthusiast</p>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-4 sm:space-x-5 mt-6">
                      {[
                        { icon: <FaGithub />, href: 'https://github.com/manishkumar8312', label: 'GitHub' },
                        { icon: <FaLinkedin />, href: 'https://linkedin.com/in/manish8312', label: 'LinkedIn' },
                        { icon: <FaEnvelope />, href: 'mailto:manishksah.2027@gmail.com', label: 'Email' }
                      ].map((social, index) => (
                        <motion.a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
                          whileHover={{ y: -3, scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          aria-label={social.label}
                        >
                          <span className="text-lg sm:text-xl">{social.icon}</span>
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"></div>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-purple-500/10 rounded-full blur-xl"></div>
              </div>
            </motion.div>

            {/* About Content */}
            <motion.div 
              className="text-gray-300 space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <div className="space-y-4">
                <p className="text-base sm:text-lg leading-relaxed">
                  I'm a passionate <span className="text-white font-medium">Full Stack Developer</span> with expertise in building modern web applications. I specialize in creating seamless user experiences with clean, efficient, and maintainable code.
                </p>
                <p className="text-base sm:text-lg leading-relaxed">
                  With experience in both frontend and backend development, I bring ideas to life through innovative solutions. I'm particularly interested in <span className="text-white font-medium">AI/ML integration</span> and creating applications that leverage cutting-edge technologies.
                </p>
              </div>
              
              {/* Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {infoItems.map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/5 hover:border-white/10 transition-all"
                    whileHover={{ y: -2 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{item.icon}</span>
                      <div>
                        <p className="text-sm text-blue-200">{item.label}</p>
                        <p className="text-white font-medium">{item.value}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="pt-2">
                <p className="text-sm text-gray-400 mb-3">Tech Stack:</p>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, index) => (
                    <motion.span
                      key={index}
                      className={`px-3 py-1.5 text-sm rounded-full bg-white/5 border border-white/5 ${tech.color}`}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 * index, duration: 0.3 }}
                      viewport={{ once: true }}
                    >
                      {tech.name}
                    </motion.span>
                  ))}
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 sm:gap-4 pt-4">
                <motion.a
                  href="/src/assets/resume/Manish_Resume.pdf"
                  download="Resume.pdf"
                  className="flex-1 sm:flex-none px-6 py-2.5 sm:px-7 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm sm:text-base font-medium rounded-lg hover:opacity-90 transition-all hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500/50 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <FaDownload className="text-sm" />
                  <span>Download CV</span>
                </motion.a>
                <motion.a
                  href="#contact"
                  className="flex-1 sm:flex-none px-6 py-2.5 sm:px-7 sm:py-3 bg-transparent border-2 border-white/20 text-white text-sm sm:text-base font-medium rounded-lg hover:bg-white/5 transition-all hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/30 text-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  Let's Talk
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
