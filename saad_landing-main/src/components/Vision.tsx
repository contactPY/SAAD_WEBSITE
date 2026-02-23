import { motion } from 'framer-motion';
import { Target, Zap, Award, Globe } from 'lucide-react';

export default function Vision() {
  const missionItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
    hover: {
      scale: 1.02,
      backgroundColor: 'rgba(37, 99, 235, 0.05)',
      transition: { duration: 0.2 },
    },
  };

  const missions = [
    {
      icon: Zap,
      text: 'Conduct technical and non-technical events fostering innovation and creativity',
    },
    {
      icon: Target,
      text: 'Provide practical exposure through workshops and industry interaction',
    },
    {
      icon: Award,
      text: 'Bridge academic learning with real-world applications',
    },
    {
      icon: Globe,
      text: 'Cultivate a culture of research, collaboration, and technological leadership',
    },
  ];

  return (
    <section id="vision" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 rounded-3xl p-12 md:p-16 text-white shadow-2xl mb-16 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aDJ2MmgtMnpNMzQgMzRoMnYyaC0yek0zMiAzNGgydjJoLTJ6TTMwIDM0aDJ2MmgtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center mb-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Vision</h2>
              <div className="w-24 h-1 bg-white/30 mx-auto mb-8"></div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl leading-relaxed text-center max-w-5xl mx-auto"
            >
              To become a leading student-driven platform that cultivates excellence in Artificial
              Intelligence and Data Science by fostering innovation, research, and technological
              leadership, while empowering students to become future-ready professionals and
              responsible contributors to the global tech ecosystem.
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming students into industry-ready professionals through hands-on experience and
            innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {missions.map((mission, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={missionItemVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 flex items-start space-x-4"
            >
              <div className="flex-shrink-0">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <mission.icon className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed flex-1">{mission.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
