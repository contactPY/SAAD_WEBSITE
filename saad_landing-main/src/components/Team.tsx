import { motion } from 'framer-motion';
import { User, Mail, Phone } from 'lucide-react';

export default function Team() {
  const teamGridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const memberCardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
    hover: {
      y: -15,
      rotateX: 5,
      boxShadow: '0 20px 40px rgba(37, 99, 235, 0.2)',
      transition: { duration: 0.3 },
    },
  };

  const faculty = [
    {
      name: 'Prof. Tushar Waykole',
      role: 'Head of Department',
      department: 'AI & Data Science',
    },
    {
      name: 'Dr. Rohini Hanchate',
      role: 'Faculty Coordinator',
      department: 'AI & Data Science',
    },
  ];

  const coreTeam = [
    { name: 'Shrutika Patil', role: 'President', phone: '+91 84215 72603' },
    { name: 'Omkar Choudhary', role: 'Vice President' },
    { name: 'Snehal Pawar', role: 'Secretary' },
    { name: 'Yajurved Jadhav', role: 'Joint Secretary' },
    { name: 'Tushar Kolhale', role: 'Treasurer' },
    { name: 'Prajakta Salunkhe', role: 'Joint Treasurer' },
    { name: 'Mansi Khairnar', role: 'SE Representative' },
    { name: 'Aishwarya', role: 'Lady Representative' },
  ];

  const technicalTeams = [
    { name: 'Jones Nadar', role: 'Technical Head' },
    { name: 'Rajveer Mehrotra', role: 'Technical Coordinator' },
    { name: 'Gaurav Kasat', role: 'Design Head' },
    { name: 'Sanket Khobare', role: 'Design Coordinator' },
    { name: 'Avinash Pachpute', role: 'Marketing Head' },
    { name: 'Lisha Talele', role: 'Marketing Coordinator' },
    { name: 'Tanvi Badekar', role: 'Cultural Head' },
    { name: 'Fiza Shaikh', role: 'Cultural Coordinator' },
    { name: 'Parth Mahajan', role: 'Sports Head' },
    { name: 'Pratik Sonawane', role: 'Sports Coordinator' },
    { name: 'Tanuja Kinge', role: 'Student Coordinator' },
    { name: 'Vishal Raut', role: 'Student Coordinator' },
  ];

  const MemberCard = ({ member, gradient }: { member: any; gradient: string }) => (
    <motion.div
      variants={memberCardVariants}
      whileHover="hover"
      className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
    >
      <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${gradient} flex items-center justify-center mb-4`}>
        <User className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-3"
      >
        {member.role}
      </motion.div>
      {member.department && (
        <p className="text-gray-600 text-sm mb-2">{member.department}</p>
      )}
      {member.phone && (
        <div className="flex items-center space-x-2 text-gray-600 text-sm mt-3">
          <Phone className="w-4 h-4" />
          <span>{member.phone}</span>
        </div>
      )}
    </motion.div>
  );

  return (
    <section id="team" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Dedicated individuals driving innovation and excellence in AI & Data Science
          </p>
        </motion.div>

        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 mb-8 flex items-center"
          >
            <div className="w-2 h-8 bg-gradient-to-b from-blue-600 to-cyan-600 rounded-full mr-4"></div>
            Faculty Coordinators
          </motion.h3>
          <motion.div
            variants={teamGridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {faculty.map((member) => (
              <MemberCard key={member.name} member={member} gradient="from-purple-500 to-indigo-500" />
            ))}
          </motion.div>
        </div>

        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 mb-8 flex items-center"
          >
            <div className="w-2 h-8 bg-gradient-to-b from-blue-600 to-cyan-600 rounded-full mr-4"></div>
            Core Committee
          </motion.h3>
          <motion.div
            variants={teamGridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {coreTeam.map((member) => (
              <MemberCard key={member.name} member={member} gradient="from-blue-500 to-cyan-500" />
            ))}
          </motion.div>
        </div>

        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 mb-8 flex items-center"
          >
            <div className="w-2 h-8 bg-gradient-to-b from-blue-600 to-cyan-600 rounded-full mr-4"></div>
            Technical & Operational Teams
          </motion.h3>
          <motion.div
            variants={teamGridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {technicalTeams.map((member) => (
              <MemberCard key={member.name} member={member} gradient="from-green-500 to-emerald-500" />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
