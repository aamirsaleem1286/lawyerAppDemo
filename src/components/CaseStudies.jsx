import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Clock, Target, DollarSign } from 'lucide-react';

const CaseStudies = () => {
  const studies = [
    {
      company: 'Global Law Partners',
      industry: 'Corporate Law',
      logo: 'GLP',
      challenge: 'Managing high-volume M&A due diligence with limited resources',
      solution: 'Implemented AskFides for automated document review and risk analysis',
      results: [
        { metric: '75%', label: 'Faster Due Diligence', icon: Clock },
        { metric: '$2.4M', label: 'Annual Cost Savings', icon: DollarSign },
        { metric: '3x', label: 'Deal Volume Increase', icon: TrendingUp }
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      company: 'TechVentures Legal',
      industry: 'IP & Technology',
      logo: 'TVL',
      challenge: 'Keeping pace with rapid regulatory changes in tech sector',
      solution: 'Deployed AskFides compliance monitoring and legal research tools',
      results: [
        { metric: '90%', label: 'Time Saved on Research', icon: Clock },
        { metric: '100%', label: 'Compliance Rate', icon: Target },
        { metric: '5x', label: 'Client Capacity', icon: TrendingUp }
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      company: 'FinServe Legal Group',
      industry: 'Financial Services',
      logo: 'FLG',
      challenge: 'Contract review bottleneck causing client delays',
      solution: 'Integrated AskFides AI contract review into workflow',
      results: [
        { metric: '85%', label: 'Faster Turnaround', icon: Clock },
        { metric: '40%', label: 'Cost Reduction', icon: DollarSign },
        { metric: '98%', label: 'Client Satisfaction', icon: Target }
      ],
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <section className="py-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-primary mb-6">
            Real Results from <span className="text-gradient">Real Law Firms</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how leading law firms are transforming their practice with AskFides.
          </p>
        </motion.div>

        {/* Case Studies */}
        <div className="space-y-12">
          {studies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-3xl shadow-premium overflow-hidden border border-gray-100"
            >
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Left Side - Info */}
                <div className="p-12">
                  {/* Company Logo */}
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${study.color} rounded-2xl text-white text-2xl font-bold mb-6`}>
                    {study.logo}
                  </div>

                  <h3 className="text-3xl font-bold text-primary mb-2">{study.company}</h3>
                  <p className="text-accent font-semibold mb-8">{study.industry}</p>

                  {/* Challenge */}
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Challenge</h4>
                    <p className="text-gray-600">{study.challenge}</p>
                  </div>

                  {/* Solution */}
                  <div className="mb-8">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Solution</h4>
                    <p className="text-gray-600">{study.solution}</p>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group flex items-center space-x-2 text-accent font-semibold hover:text-highlight transition-colors"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>

                {/* Right Side - Results */}
                <div className={`bg-gradient-to-br ${study.color} p-12 flex items-center`}>
                  <div className="w-full">
                    <h4 className="text-2xl font-bold text-white mb-8">Key Results</h4>
                    <div className="space-y-6">
                      {study.results.map((result, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: idx * 0.1 }}
                          className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
                        >
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                              <result.icon size={24} className="text-white" />
                            </div>
                            <div>
                              <div className="text-4xl font-bold text-white mb-1">{result.metric}</div>
                              <div className="text-white/80">{result.label}</div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">Ready to achieve similar results?</p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(37, 99, 235, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-accent to-highlight text-white font-semibold rounded-xl shadow-lg"
          >
            Schedule a Demo
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
