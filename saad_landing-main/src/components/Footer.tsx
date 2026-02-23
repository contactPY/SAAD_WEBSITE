import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Sparkles, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <Sparkles className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold">SAAD NMIET</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Student Association of Artificial Intelligence & Data Science
            </p>
            <p className="text-gray-500 text-xs mt-2 italic">
              Shaping tomorrow with intelligence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <a
                href="mailto:saadnmiet@gmail.com"
                className="flex items-start space-x-2 text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm">saadnmiet@gmail.com</span>
              </a>
              <div className="flex items-start space-x-2 text-gray-400">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm">+91 84215 72603 (President)</span>
              </div>
              <div className="flex items-start space-x-2 text-gray-400">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm">PCET's & NMVPM's Nutan Maharashtra Institute of Engineering and Technology</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <motion.a
                href="https://www.instagram.com/saad.nmiet?igsh=MW9wZzlibDE5NTl2Ng=="
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-lg hover:shadow-lg transition-shadow"
              >
                <Instagram className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/company/saad-nmiet/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 p-3 rounded-lg hover:shadow-lg transition-shadow"
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
            </div>
            <p className="text-gray-400 text-sm mt-4 leading-relaxed">
              Follow us for updates on events, workshops, and opportunities in AI & Data Science
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm"
        >
          <p>&copy; {new Date().getFullYear()} SAAD NMIET. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
