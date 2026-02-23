import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Trophy, Sparkles, Search, Linkedin } from 'lucide-react';

export default function Events() {
  const eventCardVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
    hover: {
      scale: 1.05,
      rotateY: 5,
      boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
      transition: { duration: 0.3 },
    },
  };

  const events = [
    {
      title: 'SAAD Inauguration',
      type: 'Milestone Event',
      description: 'Official launch marking a new era of innovation and excellence in AI & Data Science at NMIET',
      icon: Sparkles,
      gradient: 'from-pure-black to-soft-black',
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800',
      linkedin: 'https://www.linkedin.com/posts/saad-nmiet_departmentofaiandds-nmiet-saad-activity-7385202525806714880-V4_y',
    },
    {
      title: 'AI & Data Science Webinar',
      type: 'Interactive Session',
      date: 'September 5th, 2025',
      speaker: 'Dr. Krishna Chaitanya Rao Kathala',
      organization: 'Ohio State University',
      description: 'Expert insights and interactive Q&A session on cutting-edge AI trends and research',
      icon: Users,
      gradient: 'from-soft-black to-medium-gray',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      linkedin: 'https://www.linkedin.com/posts/saad-nmiet_saad-nmiet-aianddatascience-activity-7385205342110064640-Ftz0',
    },
    {
      title: 'AVISHKAR - Research Poster Competition',
      type: 'Academic Competition',
      department: 'AI & Data Science',
      description: 'Platform for showcasing innovative research projects and cutting-edge solutions',
      icon: Trophy,
      gradient: 'from-medium-gray to-soft-black',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
      linkedin: 'https://www.linkedin.com/posts/saad-nmiet_departmentofaiandds-nmiet-saad-activity-7385210207762579457-44mB',
    },
    {
      title: 'Searchathon: Diwali Edition',
      type: 'Technical Competition',
      format: 'Offline Google Hunt',
      theme: 'Tradition meets Technology',
      description: 'Test your logical reasoning and problem-solving skills in this festive tech challenge',
      icon: Search,
      gradient: 'from-soft-black to-pure-black',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
      linkedin: 'https://www.linkedin.com/posts/saad-nmiet_departmentofaiandds-saad-nmiet-activity-7385210490395881472-Rh0K',
    },
  ];

  return (
    <section id="events" className="py-24 bg-gradient-to-b from-paper-white to-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Activities & Events
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            From workshops and webinars to competitions and celebrations, we create opportunities
            for learning, innovation, and community building
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              custom={index}
              variants={eventCardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100"
            >
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${event.gradient} opacity-60`}></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-black">
                  {event.type}
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${event.gradient}`}>
                    <event.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-black mb-3">{event.title}</h3>

                <div className="space-y-2 mb-4 text-sm text-black">
                  {event.date && (
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-pure-black" />
                      <span>{event.date}</span>
                    </div>
                  )}
                  {event.speaker && (
                    <div className="flex items-start space-x-2">
                      <Users className="w-4 h-4 text-pure-black mt-0.5" />
                      <div>
                        <div className="font-semibold text-black">{event.speaker}</div>
                        <div className="text-xs text-black">{event.organization}</div>
                      </div>
                    </div>
                  )}
                  {event.department && (
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-pure-black" />
                      <span>{event.department}</span>
                    </div>
                  )}
                  {event.format && (
                    <div className="flex items-center space-x-2">
                      <Trophy className="w-4 h-4 text-pure-black" />
                      <span>{event.format}</span>
                    </div>
                  )}
                </div>

                <p className="text-black leading-relaxed">{event.description}</p>

                {event.linkedin && (
                  <motion.a
                    href={event.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center space-x-2 mt-4 text-pure-black font-semibold hover:text-soft-black transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span>View on LinkedIn</span>
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
