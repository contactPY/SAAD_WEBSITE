import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Instagram, Linkedin, CheckCircle, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import { EMAILJS_CONFIG, getOwnerTemplateParams, getSenderTemplateParams } from '../config/emailjs';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const formVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 20,
      },
    },
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setStatusMessage('');

    try {
      // Send notification email to SAAD team (owner)
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID_OWNER,
        getOwnerTemplateParams(formData),
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      // Send confirmation email to sender
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID_SENDER,
        getSenderTemplateParams(formData),
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      setStatus('success');
      setStatusMessage('Message sent successfully! Check your email for confirmation.');
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        message: '',
      });

      // Reset status after 5 seconds
      setTimeout(() => {
        setStatus('idle');
        setStatusMessage('');
      }, 5000);
    } catch (error) {
      console.error('Email sending failed:', error);
      setStatus('error');
      setStatusMessage('Failed to send message. Please try again or contact us directly at saadnmiet@gmail.com');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-paper-white to-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Get In Touch</h2>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            Have questions, ideas, or a passion for Artificial Intelligence and Data Science? We
            would love to connect with you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-pure-black to-soft-black rounded-2xl p-8 text-black shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-6 mb-8">
                <motion.a
                  href="mailto:saadnmiet@gmail.com"
                  whileHover={{ x: 10 }}
                  className="flex items-start space-x-4 hover:bg-white/10 p-3 rounded-lg transition-colors"
                >
                  <Mail className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <div className="text-black/80">saadnmiet@gmail.com</div>
                  </div>
                </motion.a>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start space-x-4 p-3"
                >
                  <Phone className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Phone</div>
                    <div className="text-black/80">+91 84215 72603</div>
                    <div className="text-sm text-black/60">Shrutika Patil (President)</div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start space-x-4 p-3"
                >
                  <MapPin className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Location</div>
                    <div className="text-black/80 text-sm leading-relaxed">
                      PCET's & NMVPM's Nutan Maharashtra Institute of Engineering and Technology
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="pt-6 border-t border-black/20">
                <h4 className="font-semibold mb-4">Connect on Social Media</h4>
                <div className="flex space-x-4">
                  <motion.a
                    href="https://www.instagram.com/saad.nmiet?igsh=MW9wZzlibDE5NTl2Ng=="
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/20 backdrop-blur-sm p-4 rounded-xl hover:bg-white/30 transition-colors"
                  >
                    <Instagram className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/company/saad-nmiet/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/20 backdrop-blur-sm p-4 rounded-xl hover:bg-white/30 transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 80, damping: 20 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-black mb-6">Send Us a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                    Your Name
                  </label>
                  <motion.input
                    whileFocus={{
                      scale: 1.02,
                      borderColor: '#1a1a1a',
                      boxShadow: '0 0 0 3px rgba(26, 26, 26, 0.1)',
                    }}
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none transition-all"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                    Email Address
                  </label>
                  <motion.input
                    whileFocus={{
                      scale: 1.02,
                      borderColor: '#1a1a1a',
                      boxShadow: '0 0 0 3px rgba(26, 26, 26, 0.1)',
                    }}
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                    Message
                  </label>
                  <motion.textarea
                    whileFocus={{
                      scale: 1.02,
                      borderColor: '#1a1a1a',
                      boxShadow: '0 0 0 3px rgba(26, 26, 26, 0.1)',
                    }}
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none transition-all resize-none"
                    placeholder="Tell us about your interest in SAAD..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status === 'sending'}
                  whileHover={status !== 'sending' ? { scale: 1.02, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)' } : {}}
                  whileTap={status !== 'sending' ? { scale: 0.98 } : {}}
                  className={`w-full bg-gradient-to-r from-pure-black to-soft-black text-white font-semibold py-4 rounded-lg flex items-center justify-center space-x-2 shadow-lg transition-all ${
                    status === 'sending' ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90'
                  }`}
                >
                  {status === 'sending' ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </motion.button>

                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-2 text-green-600 bg-green-50 p-3 rounded-lg"
                  >
                    <CheckCircle className="w-5 h-5" />
                    <span>{statusMessage}</span>
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg"
                  >
                    <AlertCircle className="w-5 h-5" />
                    <span>{statusMessage}</span>
                  </motion.div>
                )}
              </form>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-8 bg-white border border-light-gray rounded-xl p-6"
            >
              <p className="text-black leading-relaxed">
                <span className="font-semibold text-black">Join us!</span> Whether you're
                interested in joining the association, collaborating on projects, or participating
                in upcoming events, SAAD welcomes enthusiastic and driven students.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
