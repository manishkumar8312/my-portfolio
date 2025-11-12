import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[calc(100vh-4rem)] md:min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark via-dark/95 to-dark/80">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-1/2 -left-1/2 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl"
          animate={{
            x: [0, 10, 0],
            y: [0, 10, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/2 -right-1/4 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-primary/5 rounded-full blur-3xl"
          animate={{
            x: [0, -15, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Text Content */}
          <motion.div 
            className="text-center lg:text-left max-w-3xl mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            >
              Hi, I'm <span className="gradient-text">Manish Kumar Sah</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl text-light/90 mb-4 sm:mb-6 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            >
              Full Stack Developer & AI Enthusiast
            </motion.p>
            
            <motion.p 
              className="text-base sm:text-lg text-light/70 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            >
              I build exceptional digital experiences with modern web technologies and create innovative solutions to real-world problems.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            >
              <a
                href="#contact"
                className="px-6 py-3 sm:px-8 sm:py-3.5 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-full hover:opacity-90 transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50 text-sm sm:text-base flex items-center justify-center gap-2"
              >
                <span>Get In Touch</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="#projects"
                className="px-6 py-3 sm:px-8 sm:py-3.5 bg-transparent border-2 border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/30 text-sm sm:text-base"
              >
                View My Work
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex items-center justify-center lg:justify-start gap-4 mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              {['github', 'linkedin', 'twitter', 'mail'].map((social, index) => (
                <a 
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-dark/50 border border-gray-800 flex items-center justify-center text-light/70 hover:text-primary hover:border-primary/50 transition-all"
                  aria-label={social}
                >
                  <span className="text-xl">
                    {social === 'github' && '🐱'}
                    {social === 'linkedin' && '💼'}
                    {social === 'twitter' && '🐦'}
                    {social === 'mail' && '✉️'}
                  </span>
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div 
            className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mt-12 lg:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full p-1 animate-spin-slow">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-dark/20">
                <img 
                  src="/public/assets/images/profile.jpg" 
                  alt="Manish Kumar Sah" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Tech stack floating icons */}
            <motion.div 
              className="hidden lg:flex absolute -bottom-8 -left-8 w-16 h-16 bg-dark/80 backdrop-blur-sm rounded-full border border-white/10 p-2"
              animate={{
                y: [0, -15, 0],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut'
              }}
            >
              <div className="w-full h-full bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full flex items-center justify-center">
                <img 
                  src="/assets/icons/react.svg" 
                  alt="React" 
                  className="w-10 h-10" 
                />
              </div>
            </motion.div>
            <motion.div 
              className="hidden lg:flex absolute top-1/2 -right-8 w-14 h-14 bg-dark/80 backdrop-blur-sm rounded-full border border-white/10 p-2"
              animate={{
                y: [0, -10, 0],
                rotate: [0, -15, 15, 0],
              }}
              transition={{
                duration: 10,
                delay: 1,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut'
              }}
            >
              <div className="w-full h-full bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-full flex items-center justify-center">
                <img 
                  src="/public/assets/icons/node.svg" 
                  alt="Node.js" 
                  className="w-8 h-8" 
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll indicator - Text only */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 cursor-pointer group"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          transition: { 
            delay: 1, 
            duration: 0.6,
            y: {
              repeat: Infinity,
              repeatType: 'reverse',
              duration: 1.5,
              ease: 'easeInOut'
            }
          }
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          const aboutSection = document.getElementById('about');
          if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      >
        <div className="flex flex-col items-center">
          <motion.span 
            className="text-sm text-light/60 mb-2 group-hover:text-primary transition-colors"
            initial={{ opacity: 0.6 }}
            animate={{ 
              opacity: [0.6, 1, 0.6],
              transition: {
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }
            }}
          >
            Scroll Down
          </motion.span>
          <motion.div 
            className="w-10 h-16 flex flex-col items-center justify-start"
            animate={{
              y: [0, 10, 0],
              transition: {
                repeat: Infinity,
                duration: 2,
                ease: 'easeInOut'
              }
            }}
          >
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="text-light/70 group-hover:text-primary transition-colors"
            >
              <path 
                d="M19 9L12 16L5 9" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;