import { motion } from 'framer-motion';
import { Check, X, Sparkles } from 'lucide-react';

const Comparison = () => {
  const comparisons = [
    {
      feature: 'Research Speed',
      traditional: 'Hours of manual research',
      generic: 'Limited legal knowledge',
      askfides: 'Instant AI-powered research'
    },
    {
      feature: 'Accuracy',
      traditional: 'Prone to human error',
      generic: 'Generic responses',
      askfides: '98% accuracy with citations'
    },
    {
      feature: 'Contract Review',
      traditional: 'Manual clause-by-clause',
      generic: 'Surface-level analysis',
      askfides: 'Deep AI analysis in seconds'
    },
    {
      feature: 'Compliance',
      traditional: 'Manual tracking',
      generic: 'No compliance features',
      askfides: 'Automated monitoring'
    },
    {
      feature: 'Legal Citations',
      traditional: 'Manual verification',
      generic: 'Often inaccurate',
      askfides: 'Auto-verified & up-to-date'
    },
    {
      feature: 'Cost',
      traditional: '$200-500/hour',
      generic: 'Low cost, low value',
      askfides: 'Affordable enterprise pricing'
    },
    {
      feature: 'Integration',
      traditional: 'Fragmented tools',
      generic: 'No legal integrations',
      askfides: 'Unified legal platform'
    },
    {
      feature: 'Security',
      traditional: 'Varies by firm',
      generic: 'Basic security',
      askfides: 'Enterprise-grade SOC2'
    }
  ];

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary mb-4 sm:mb-6">
            Why Choose <span className="text-gradient">AskFides</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
            See how AskFides outperforms traditional legal work and generic AI solutions.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-premium overflow-hidden border border-gray-100"
        >
          {/* Table Header */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 p-4 sm:p-6 bg-gray-50 border-b border-gray-200 text-center">
            <div className="font-semibold text-gray-900">Feature</div>
            <div>
              <div className="font-semibold text-gray-900">Traditional Legal Work</div>
            </div>
            <div>
              <div className="font-semibold text-gray-900">Generic AI</div>
            </div>
            <div>
              <div className="flex items-center justify-center space-x-2">
                <Sparkles size={20} className="text-accent" />
                <span className="font-semibold text-accent">AskFides</span>
              </div>
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-gray-100">
            {comparisons.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 p-4 sm:p-6 hover:bg-gray-50/50 transition-colors"
              >
                <div className="font-semibold text-gray-900 flex items-center py-2">
                  {item.feature}
                </div>
                <div className="text-gray-600 text-sm flex items-center justify-center py-2">
                  <div className="flex items-start space-x-2">
                    <X size={16} className="text-red-500 flex-shrink-0 mt-0.5" />
                    <span>{item.traditional}</span>
                  </div>
                </div>
                <div className="text-gray-600 text-sm flex items-center justify-center py-2">
                  <div className="flex items-start space-x-2">
                    <X size={16} className="text-orange-500 flex-shrink-0 mt-0.5" />
                    <span>{item.generic}</span>
                  </div>
                </div>
                <div className="flex items-center justify-center py-2">
                  <div className="inline-flex items-start space-x-2 px-3 py-2 bg-green-50 rounded-lg border border-green-200 text-center">
                    <Check size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-green-700">{item.askfides}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Footer */}
          <div className="p-6 sm:p-8 bg-gradient-to-r from-accent/5 to-highlight/5 border-t border-gray-100">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 text-center md:text-left">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-primary mb-2">Ready to Transform Your Legal Workflow?</h3>
                <p className="text-gray-600">Join 500+ leading law firms already using AskFides.</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(37, 99, 235, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-accent to-highlight text-white font-semibold rounded-xl shadow-lg whitespace-nowrap"
              >
                Get Started Free
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Comparison;
