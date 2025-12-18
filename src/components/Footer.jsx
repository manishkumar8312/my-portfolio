import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com/manishkumar8312", label: "GitHub" },
    { icon: <FaLinkedin />, href: "https://linkedin.com/in/manish8312", label: "LinkedIn" },
    { icon: <FaEnvelope />, href: "mailto:manishksah.2027@gmail.com", label: "Email" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#0a0a0a] to-[#111] border-t border-gray-800 py-10">
      <div className="container mx-auto px-6 text-center md:text-left">
        {/* Social Icons */}
        {/* <div className="flex justify-center md:justify-end space-x-8 mb-6">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="text-gray-400 hover:text-cyan-400 text-2xl transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.6)]"
            >
              {social.icon}
            </a>
          ))}
        </div> */}

        {/* Divider */}
        <div className="border-t border-gray-700 w-3/4 mx-auto mb-6 opacity-50" />

        {/* Footer Text */}
        <div className="text-center space-y-2">
          <p className="text-gray-400 text-sm">
            © {currentYear} <span className="text-white font-semibold">Manish Kumar Sah</span> — All Rights Reserved
          </p>
          <p className="text-xs text-gray-500">
            Built with <span className="text-cyan-400 font-medium">React</span>,{" "}
            <span className="text-cyan-400 font-medium">Three.js</span> &{" "}
            <span className="text-cyan-400 font-medium">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
