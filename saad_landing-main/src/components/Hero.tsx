import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Users } from 'lucide-react';
import PhilosophyCarousel from './PhilosophyCarousel';

export default function Hero() {
  const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const ctaButtonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', stiffness: 100 },
    },
    hover: {
      scale: 1.05,
      boxShadow: '0 10px 30px rgba(37, 99, 235, 0.3)',
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.95 },
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-paper-white">
        <div className="absolute inset-0">
          <iframe 
            src='https://my.spline.design/3drobotheadtrackingmouse-fX8IP1AiSXsEiZ4P8lStWQVq/' 
            frameBorder='0' 
            width='100%' 
            height='100%'
            className="absolute inset-0 w-full h-full"
          />
        </div>
      </section>

      <section className="py-20 bg-paper-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <motion.div variants={heroVariants} className="mb-6">
              <span className="inline-block px-4 py-2 bg-light-gray backdrop-blur-sm border border-light-gray rounded-full text-pure-black text-sm font-medium">
                Student Association of AI & Data Science
              </span>
            </motion.div>

            <motion.h1
              variants={heroVariants}
              className="text-5xl md:text-7xl font-bold text-pure-black mb-6 leading-tight"
            >
              Shaping Tomorrow
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pure-black to-soft-black">
                With Intelligence
              </span>
            </motion.h1>

            <motion.p
              variants={heroVariants}
              className="text-xl md:text-2xl text-medium-gray mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              A dynamic student-driven community dedicated to fostering innovation, technical
              excellence, and collaborative learning in Artificial Intelligence and Data Science
            </motion.p>

            <motion.div
              variants={heroVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            >
              <motion.button
                variants={ctaButtonVariants}
                whileHover="hover"
                whileTap="tap"
                onClick={() => scrollToSection('contact')}
                className="group px-8 py-4 bg-pure-black text-paper-white rounded-lg font-semibold text-lg flex items-center space-x-2 shadow-xl hover:bg-soft-black transition-colors"
              >
                <span>Join SAAD</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                variants={ctaButtonVariants}
                whileHover="hover"
                whileTap="tap"
                onClick={() => scrollToSection('events')}
                className="px-8 py-4 bg-paper-white border-2 border-pure-black text-pure-black rounded-lg font-semibold text-lg flex items-center space-x-2 hover:bg-light-gray transition-colors"
              >
                <Calendar className="w-5 h-5" />
                <span>Explore Events</span>
              </motion.button>

              <motion.button
                variants={ctaButtonVariants}
                whileHover="hover"
                whileTap="tap"
                onClick={() => scrollToSection('team')}
                className="px-8 py-4 bg-paper-white border-2 border-pure-black text-pure-black rounded-lg font-semibold text-lg flex items-center space-x-2 hover:bg-light-gray transition-colors"
              >
                <Users className="w-5 h-5" />
                <span>Meet the Team</span>
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto"
            >
              {[
                { number: '300+', label: 'Active Members' },
                { number: '50+', label: 'Events Hosted' },
                { number: '20+', label: 'Industry Partners' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.7 + index * 0.1 }}
                  className="bg-paper-white rounded-lg p-6 shadow-lg border border-light-gray"
                >
                  <div className="text-4xl font-bold text-pure-black mb-2">{stat.number}</div>
                  <div className="text-medium-gray">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            <PhilosophyCarousel />
          </motion.div>
        </div>
      </section>
    </>
  );
}
