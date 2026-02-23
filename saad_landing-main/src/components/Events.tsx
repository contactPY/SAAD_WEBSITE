import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Trophy, Sparkles, Search } from 'lucide-react';

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
      gradient: 'from-purple-500 to-pink-500',
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'AI & Data Science Webinar',
      type: 'Interactive Session',
      date: 'September 5th, 2025',
      speaker: 'Dr. Krishna Chaitanya Rao Kathala',
      organization: 'Ohio State University',
      description: 'Expert insights and interactive Q&A session on cutting-edge AI trends and research',
      icon: Users,
      gradient: 'from-blue-500 to-cyan-500',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'AVISHKAR - Research Poster Competition',
      type: 'Academic Competition',
      department: 'AI & Data Science',
      description: 'Platform for showcasing innovative research projects and cutting-edge solutions',
      icon: Trophy,
      gradient: 'from-green-500 to-emerald-500',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Searchathon: Diwali Edition',
      type: 'Technical Competition',
      format: 'Offline Google Hunt',
      theme: 'Tradition meets Technology',
      description: 'Test your logical reasoning and problem-solving skills in this festive tech challenge',
      icon: Search,
      gradient: 'from-orange-500 to-yellow-500',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <section id="events" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Activities & Events
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
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
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-700">
                  {event.type}
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${event.gradient}`}>
                    <event.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{event.title}</h3>

                <div className="space-y-2 mb-4 text-sm text-gray-600">
                  {event.date && (
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-blue-500" />
                      <span>{event.date}</span>
                    </div>
                  )}
                  {event.speaker && (
                    <div className="flex items-start space-x-2">
                      <Users className="w-4 h-4 text-blue-500 mt-0.5" />
                      <div>
                        <div className="font-semibold text-gray-900">{event.speaker}</div>
                        <div className="text-xs">{event.organization}</div>
                      </div>
                    </div>
                  )}
                  {event.department && (
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-blue-500" />
                      <span>{event.department}</span>
                    </div>
                  )}
                  {event.format && (
                    <div className="flex items-center space-x-2">
                      <Trophy className="w-4 h-4 text-blue-500" />
                      <span>{event.format}</span>
                    </div>
                  )}
                </div>

                <p className="text-gray-600 leading-relaxed">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
