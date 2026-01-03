import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: 'QuickStay',
    description: 'QuickStay is a full-stack Hotel Booking Web Application built using the MERN Stack (MongoDB, Express.js, React.js, Node.js). It allows users to explore hotels, book stays seamlessly, and manage their reservations efficiently. Admins can list and manage hotel properties through a secure dashboard.',
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com/manishkumar8312/Hotel-Booking',
    demo: 'https://hotel-booking-backend-one-theta.vercel.app',
    image: '/projects/QuickStay.jpg'
  },
  {
    title: 'Live Posture Detection',
    description: 'This project utilizes ml5.js with PoseNet to detect human posture in real time through a webcam feed. Built using HTML, JavaScript, and p5.js, it identifies and tracks key body points such as shoulders, hips, and knees. The system visualizes these keypoints and skeletal connections on the screen, enabling live posture detection without providing feedback or correction.',
    tags: ['HTML', 'Javascript', 'ML5.js', 'P5.js'],
    github: 'https://github.com/manishkumar8312/Live-Posture',
    demo: 'https://live-posture.vercel.app/',
    image: '/projects/Posture.jpg'
  },
  {
    title: 'Algorithm Visualizer',
    description: 'It is an interactive algorithm visualizer to demonstrate the working of various sorting and pathfinding algorithms. It provides visual animations that show how algorithms process data and explore paths, allowing users to compare their behavior and performance in real time. The application focuses on making complex algorithmic concepts easy to understand.',
    tags: ['JavaScript', 'React', 'TailWind CSS', 'Algorithms'],
    github: 'https://github.com/manishkumar8312/AlgorithmVizualizer',
    demo: 'https://algorithm-vizualizer-chi.vercel.app/',
    image: '/projects/AlgorithmVisualizer.jpg'
  },
  {
    title: 'Terminal Portfolio',
    description: 'A CLI-inspired portfolio built for developers, allowing users to explore my work, skills, and contact info using terminal commands.',
    tags: ['JavaScript', 'React', 'TailWind CSS'],
    github: 'https://github.com/manishkumar8312/terminal-portfolio',
    demo: 'https://manish-terminal-portfolio.vercel.app/',
    image: '/projects/Terminal.jpeg'
  },
  {
    title: 'Evolution',
    description: 'EV-olution is a platform focused on promoting electric vehicle awareness by showcasing EV benefits, trends, and future mobility solutions.',
    tags: ['JavaScript', 'React', 'UI/UX'],
    github: 'https://github.com/manishkumar8312/EV-olution',
    demo: 'https://ev-olution-nu.vercel.app/',
    image: '/projects/Evolution.png'
  },
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-dark/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-primary/30 transition-colors"
    >
      <div className="h-48 overflow-hidden">
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/placeholder.jpg';
            }}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
            <span className="text-light/40">No Image Available</span>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-light/70 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, i) => (
            <span key={i} className="text-xs bg-dark/50 text-light/60 px-3 py-1 rounded-full border border-gray-800">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex items-center space-x-4">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-light/60 hover:text-primary transition-colors flex items-center"
          >
            <FiGithub className="mr-1" /> Code
          </a>
          <a 
            href={project.demo} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-light/60 hover:text-primary transition-colors flex items-center"
          >
            <FiExternalLink className="mr-1" /> Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="section-title">
            My <span className="gradient-text">Projects</span>
          </h2>
          
          <p className="text-light/70 max-w-2xl mb-12">
            Here are some of my recent projects. Each project was built to solve a specific problem or explore new technologies.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <a 
              href="https://github.com/manishkumar8312?tab=repositories" 
              className="inline-flex items-center px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors"
            >
              View All Projects
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
