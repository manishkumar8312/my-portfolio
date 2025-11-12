import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const contactMethods = [
    {
      icon: <FaEnvelope className="text-2xl text-primary" />,
      title: 'Email',
      value: 'manishksah.2027@gmail.com',
      link: 'mailto:manishksah.2027@gmail.com',
    },
    {
      icon: <FaGithub className="text-2xl text-light" />,
      title: 'GitHub',
      value: 'manishkumar8312',
      link: 'https://github.com/manishkumar8312',
    },
    {
      icon: <FaLinkedin className="text-2xl text-blue-500" />,
      title: 'LinkedIn',
      value: 'manish8312',
      link: 'https://linkedin.com/in/manish8312',
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl text-red-400" />,
      title: 'Location',
      value: 'India',
      link: 'https://www.google.com/maps/place/India',
    },
    {
      icon: <FaPhone className="text-2xl text-green-400" />,
      title: 'Phone',
      value: '+91 7783059592',
      link: 'tel:+917783059592',
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          
          <p className="text-light/70 max-w-2xl mb-12">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out to me. 
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold">Contact Information</h3>
              <p className="text-light/80">
                Feel free to get in touch with me. I'm always open to discussing new projects, 
                creative ideas, or opportunities to be part of your vision.
              </p>
              
              <div className="space-y-4 mt-8">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start space-x-4 group"
                  >
                    <div className="p-3 bg-dark/50 rounded-lg group-hover:bg-primary/10 transition-colors">
                      {method.icon}
                    </div>
                    <div>
                      <h4 className="font-medium">{method.title}</h4>
                      <p className="text-light/70 group-hover:text-primary transition-colors">
                        {method.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-dark/50 border border-gray-800 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-dark/50 border border-gray-800 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-dark/50 border border-gray-800 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="Let me know how I can help you"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-3 bg-dark/50 border border-gray-800 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="Hi Manish, I would like to talk about..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 px-6 rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
