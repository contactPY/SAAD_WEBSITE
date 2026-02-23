import { motion } from 'framer-motion';
import { BookOpen, Users, Lightbulb, TrendingUp } from 'lucide-react';

export default function About() {
  const aboutSectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const featureCardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', damping: 20 },
    },
    hover: {
      y: -10,
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
      transition: { duration: 0.3 },
    },
  };

  const features = [
    {
      icon: BookOpen,
      title: 'Learning by Doing',
      description:
        'Hands-on workshops, hackathons, and real-world projects that transform theory into practical skills.',
      gradient: 'from-pure-black to-soft-black',
    },
    {
      icon: TrendingUp,
      title: 'Industry Bridge',
      description:
        'Connecting classroom theory with practical industry experience through mentorship and collaboration.',
      gradient: 'from-soft-black to-medium-gray',
    },
    {
      icon: Lightbulb,
      title: 'Innovation Hub',
      description:
        'Transforming creative ideas into impactful solutions through cutting-edge AI and Data Science technologies.',
      gradient: 'from-medium-gray to-soft-black',
    },
    {
      icon: Users,
      title: 'Community Building',
      description:
        'Fostering collaboration, peer learning, and a supportive network of AI/DS enthusiasts.',
      gradient: 'from-soft-black to-pure-black',
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-paper-white to-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            About SAAD
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            SAAD is more than just a student organization - it's a community of curious minds
            passionate about exploring AI and Data Science. We bridge the gap between classroom
            learning and real industry experience.
          </p>
        </motion.div>

        <motion.div
          variants={aboutSectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={featureCardVariants}
              whileHover="hover"
              custom={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${feature.gradient} mb-6`}>
                <feature.icon className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">{feature.title}</h3>
              <p className="text-black leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-pure-black to-soft-black rounded-2xl p-12 text-center text-black shadow-2xl"
        >
          <h3 className="text-3xl font-bold mb-4">Our Philosophy</h3>
          <p className="text-xl leading-relaxed max-w-3xl mx-auto opacity-95">
            We empower students to explore emerging technologies, develop industry-relevant skills,
            and transform ideas into impactful solutions. Through innovation, collaboration, and
            continuous learning, we're shaping the future of AI and Data Science.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
