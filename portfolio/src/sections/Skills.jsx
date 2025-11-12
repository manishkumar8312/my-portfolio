import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiRedux,
  SiTypescript,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-5xl text-blue-400 drop-shadow-glow" />, level: "90%" },
  { name: "Node.js", icon: <FaNodeJs className="text-5xl text-green-500 drop-shadow-glow" />, level: "85%" },
  { name: "JavaScript", icon: <FaJs className="text-5xl text-yellow-400 drop-shadow-glow" />, level: "90%" },
  { name: "TypeScript", icon: <SiTypescript className="text-5xl text-blue-500 drop-shadow-glow" />, level: "80%" },
  { name: "HTML5", icon: <FaHtml5 className="text-5xl text-orange-500 drop-shadow-glow" />, level: "95%" },
  { name: "CSS3", icon: <FaCss3Alt className="text-5xl text-blue-400 drop-shadow-glow" />, level: "90%" },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-5xl text-cyan-400 drop-shadow-glow" />, level: "90%" },
  { name: "MongoDB", icon: <SiMongodb className="text-5xl text-green-600 drop-shadow-glow" />, level: "80%" },
  { name: "Express", icon: <SiExpress className="text-5xl text-gray-300 drop-shadow-glow" />, level: "85%" },
  { name: "Redux", icon: <SiRedux className="text-5xl text-purple-500 drop-shadow-glow" />, level: "85%" },
  { name: "Git", icon: <FaGitAlt className="text-5xl text-orange-600 drop-shadow-glow" />, level: "85%" },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-24 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 overflow-hidden"
    >
      {/* Floating gradient orbs */}
      <div className="absolute top-10 left-20 w-40 h-40 bg-blue-500/10 blur-3xl rounded-full animate-pulse-slow" />
      <div className="absolute bottom-20 right-32 w-52 h-52 bg-purple-500/10 blur-3xl rounded-full animate-pulse-slow" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1, ease: "easeOut" }}
          className="text-center text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
        >
          My Skills
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center text-gray-400 max-w-2xl mx-auto mb-16 text-lg"
        >
          A showcase of technologies and tools I use to build beautiful, scalable, and high-performing applications.
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                scale: 1.08,
                rotateY: 10,
                boxShadow: "0 0 20px rgba(0, 255, 255, 0.3)",
              }}
              viewport={{ once: true }}
              className="group relative bg-gradient-to-br from-gray-800/60 to-gray-900/40 border border-gray-700 rounded-2xl p-6 flex flex-col items-center backdrop-blur-lg transition-all duration-300"
            >
              <motion.div
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.2,
                  ease: "easeInOut",
                }}
              >
                {skill.icon}
              </motion.div>

              <h3 className="font-semibold text-lg mt-4 text-white tracking-wide group-hover:text-cyan-400 transition-colors">
                {skill.name}
              </h3>

              <div className="w-full bg-gray-800/70 rounded-full h-2 mt-3 overflow-hidden">
                <motion.div
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full shadow-lg"
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.level }}
                  transition={{
                    duration: 1,
                    delay: 0.3 + index * 0.1,
                    ease: "easeInOut",
                  }}
                />
              </div>

              <motion.span
                className="mt-2 text-sm text-gray-400"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1 + index * 0.1 }}
              >
                {skill.level}
              </motion.span>

              {/* Neon border on hover */}
              <motion.div
                className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-cyan-400/40 transition-all duration-500"
                animate={{
                  boxShadow: ["0 0 0px cyan", "0 0 15px cyan", "0 0 0px cyan"],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
