import { motion } from 'framer-motion';
import {
  Search,
  FileText,
  Briefcase,
  Shield,
  Target,
  Database,
  AlertCircle,
  BookOpen,
  FileCheck,
  Zap
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Search,
      title: 'Legal Research',
      description: 'AI-powered research across millions of case laws, statutes, and legal documents in seconds.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: FileCheck,
      title: 'Contract Review',
      description: 'Intelligent contract analysis that identifies risks, obligations, and key terms automatically.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: FileText,
      title: 'AI Drafting',
      description: 'Generate high-quality legal documents with AI assistance, maintaining your firm\'s style.',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: BookOpen,
      title: 'Case Law Search',
      description: 'Find relevant precedents and case law with natural language queries and semantic search.',
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: Shield,
      title: 'Compliance',
      description: 'Stay compliant with automated monitoring of regulatory changes and requirements.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Briefcase,
      title: 'Due Diligence',
      description: 'Streamline M&A and transaction due diligence with intelligent document review.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: AlertCircle,
      title: 'Risk Analysis',
      description: 'Identify potential risks and liabilities in contracts and legal documents proactively.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Database,
      title: 'Knowledge Management',
      description: 'Centralize and organize your firm\'s knowledge with AI-powered search and retrieval.',
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: Target,
      title: 'Document Intelligence',
      description: 'Extract key information, dates, parties, and clauses from any legal document.',
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: Zap,
      title: 'Citation Verification',
      description: 'Automatically verify citations and ensure accuracy of legal references.',
      color: 'from-yellow-500 to-yellow-600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Floating Background Shapes */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        className="absolute -top-32 -right-32 w-96 h-96 border border-accent/10 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
        className="absolute -bottom-32 -left-32 w-80 h-80 border border-highlight/10 rounded-full"
      />
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-highlight/5 rounded-full blur-3xl" />

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
            transition={{ duration: 0.4, type: 'spring', stiffness: 200 }}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-accent/10 rounded-full mb-6"
          >
            <Zap size={16} className="text-accent" />
            <span className="text-sm font-semibold text-accent">Powerful Features</span>
          </motion.div>
          <h2 className="text-5xl lg:text-6xl font-bold text-primary mb-6">
            Everything You Need to{' '}
            <span className="text-gradient">Transform Legal Work</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI platform provides comprehensive tools for modern legal professionals,
            from research to compliance, all in one unified workspace.
          </p>
        </motion.div>

        {/* Features Grid with Staggered Animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="group relative bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-premium transition-all duration-300"
            >
              {/* Gradient Border on Hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent/20 to-highlight/20 opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-xl" />

              {/* Icon with pulse glow on hover */}
              <motion.div
                whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.3 }}
                className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow`}
              >
                <feature.icon size={28} className="text-white" />
              </motion.div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-accent transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Animated Arrow on Hover */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileHover={{ opacity: 1, x: 0 }}
                className="absolute bottom-8 right-8 text-accent opacity-0 group-hover:opacity-100 transition-all flex items-center space-x-2"
              >
                <span className="text-sm font-semibold">Learn more</span>
                <span className="text-lg">→</span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-20"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(37, 99, 235, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-accent to-highlight text-white font-semibold rounded-xl shadow-lg inline-flex items-center space-x-2 group"
          >
            <span>Explore All Features</span>
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="inline-block"
            >
              →
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
