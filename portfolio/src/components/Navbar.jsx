import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: <FaGithub className="text-xl" />, href: 'https://github.com/manishkumar8312' },
  { icon: <FaLinkedin className="text-xl" />, href: 'https://linkedin.com/in/manish8312' },
  { icon: <HiOutlineMail className="text-xl" />, href: 'mailto:manishksah.2027@gmail.com' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close menu when a nav link is clicked
  const closeMenu = () => setIsOpen(false);

  return (
    <motion.nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark/95 backdrop-blur-md py-2' : 'py-3 md:py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center justify-between w-full md:w-auto">
            <a href="#" className="flex items-center">
              <img 
                src="/assets/icons/logo.png" 
                alt="Manish Kumar Sah" 
                className="h-8 w-auto md:h-10"
              />
              <span className="ml-2 md:ml-3 text-xl font-bold gradient-text">Manish</span>
            </a>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-light/70 hover:text-white focus:outline-none"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <FaTimes className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <FaBars className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-light/80 hover:text-white transition-colors duration-300 text-sm font-medium px-2 py-1 rounded-md hover:bg-white/5"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-light/70 hover:text-white transition-colors duration-300 text-lg p-1.5 rounded-full hover:bg-white/10"
                aria-label={social.href.includes('github') ? 'GitHub' : social.href.includes('linkedin') ? 'LinkedIn' : 'Email'}
              >
                {social.icon}
              </a>
            ))}
          </div>

        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'tween' }}
              className="fixed inset-0 bg-dark/95 backdrop-blur-lg md:hidden z-40 flex flex-col justify-center items-center space-y-8"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-2xl text-light/80 hover:text-primary transition-colors"
                  onClick={closeMenu}
                >
                  {link.name}
                </a>
              ))}
              
              <div className="flex items-center space-x-6 mt-8">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light/60 hover:text-primary text-2xl transition-colors"
                    onClick={closeMenu}
                    aria-label={social.href.includes('github') ? 'GitHub' : social.href.includes('linkedin') ? 'LinkedIn' : 'Email'}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
