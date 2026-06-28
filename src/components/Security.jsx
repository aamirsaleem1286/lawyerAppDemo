import { motion } from 'framer-motion';
import { Shield, Lock, Server, Eye, FileCheck, Users, Clock, Award } from 'lucide-react';

const Security = () => {
  const features = [
    {
      icon: Shield,
      title: 'SOC 2 Type II',
      description: 'Independently audited and certified for security controls'
    },
    {
      icon: Award,
      title: 'ISO 27001',
      description: 'International standard for information security management'
    },
    {
      icon: Lock,
      title: 'End-to-End Encryption',
      description: 'AES-256 encryption for data at rest and in transit'
    },
    {
      icon: Server,
      title: 'Private Cloud',
      description: 'Dedicated infrastructure for enterprise clients'
    },
    {
      icon: Eye,
      title: 'Data Privacy',
      description: 'GDPR, CCPA, and HIPAA compliant data handling'
    },
    {
      icon: Users,
      title: 'Role-Based Access',
      description: 'Granular permissions and access control'
    },
    {
      icon: Clock,
      title: 'Audit Logs',
      description: 'Complete audit trail of all system activities'
    },
    {
      icon: FileCheck,
      title: 'Data Residency',
      description: 'Choose where your data is stored and processed'
    }
  ];

  const certifications = [
    { name: 'SOC 2 Type II', badge: 'SOC2' },
    { name: 'ISO 27001', badge: 'ISO' },
    { name: 'GDPR', badge: 'GDPR' },
    { name: 'HIPAA', badge: 'HIPAA' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="py-32 bg-primary relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Floating orbs */}
      <motion.div
        animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/4 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-lg rounded-full mb-6 border border-white/20"
          >
            <Shield size={16} className="text-white" />
            <span className="text-sm font-semibold text-white">Enterprise Security</span>
          </motion.div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Bank-Level Security for{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Your Legal Data
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your clients trust you with their most sensitive information. We protect it with military-grade security.
          </p>
        </motion.div>

        {/* Security Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all hover:border-white/20"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.4 }}
                className="w-12 h-12 bg-gradient-to-br from-accent to-highlight rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
              >
                <feature.icon size={24} className="text-white" />
              </motion.div>
              <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-12 relative overflow-hidden"
        >
          {/* Subtle gradient bg */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-purple-500/5 pointer-events-none" />

          <div className="relative">
            <h3 className="text-3xl font-bold text-white text-center mb-12">
              Certified & Compliant
            </h3>

            <div className="grid md:grid-cols-4 gap-8 mb-12">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1, type: 'spring', stiffness: 150 }}
                  whileHover={{ y: -8, scale: 1.1 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-24 h-24 bg-white/10 backdrop-blur-lg rounded-2xl flex items-center justify-center mb-4 border border-white/20 hover:border-accent/50 transition-colors">
                    <span className="text-2xl font-bold text-white">{cert.badge}</span>
                  </div>
                  <span className="text-sm text-gray-300 text-center">{cert.name}</span>
                </motion.div>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-8 pt-8 border-t border-white/10">
              {[
                { value: '99.99%', label: 'Uptime SLA' },
                { value: '24/7', label: 'Security Monitoring' },
                { value: 'Zero', label: 'Data Breaches' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Our security infrastructure is designed and maintained by former security leaders from Fortune 500 companies and top law firms.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(255,255,255,0.1)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-primary font-semibold rounded-xl hover:shadow-2xl transition-shadow"
          >
            Read Security Whitepaper
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Security;
