import { motion } from 'framer-motion';
import { MessageSquare, FileSearch, BarChart3, AlertTriangle, Clock, CheckCircle } from 'lucide-react';
import { useState } from 'react';

const ProductShowcase = () => {
  const [activeTab, setActiveTab] = useState('chat');

  const tabs = [
    { id: 'chat', label: 'AI Chat', icon: MessageSquare },
    { id: 'analysis', label: 'Document Analysis', icon: FileSearch },
    { id: 'insights', label: 'Insights', icon: BarChart3 },
  ];

  return (
    <section className="py-2 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-primary mb-6">
            Experience the <span className="text-gradient">Future of Legal AI</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Seamlessly integrated tools that work together to supercharge your legal workflow.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex bg-gray-100 rounded-2xl p-2 space-x-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'bg-white text-accent shadow-lg'
                    : 'text-gray-600 hover:text-accent'
                }`}
              >
                <tab.icon size={20} />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Showcase Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative"
        >
          {/* Glow Effect */}
          <div className="absolute -inset-8 bg-gradient-to-r from-accent/20 to-highlight/20 rounded-3xl blur-3xl" />

          {/* Laptop Frame */}
          <div className="relative bg-gray-900 rounded-t-3xl p-3 shadow-premium">
            {/* Screen */}
            <div className="bg-white rounded-t-2xl overflow-hidden">
              {/* Browser Bar */}
              <div className="bg-gray-100 px-4 py-3 flex items-center space-x-2 border-b border-gray-200">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                </div>
                <div className="flex-1 bg-white rounded-lg px-4 py-1.5 text-sm text-gray-500 flex items-center">
                  <span className="text-green-600 mr-2">🔒</span>
                  app.askfides.com
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8 min-h-[500px]">
                {activeTab === 'chat' && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-6"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gray-200 rounded-full flex-shrink-0" />
                      <div className="flex-1 bg-gray-50 rounded-2xl rounded-tl-none p-4">
                        <p className="text-gray-700">
                          Analyze this employment contract for potential issues related to non-compete clauses and intellectual property rights.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-accent to-highlight rounded-full flex-shrink-0 flex items-center justify-center">
                        <MessageSquare size={20} className="text-white" />
                      </div>
                      <div className="flex-1 bg-accent/5 rounded-2xl rounded-tl-none p-4 border border-accent/20">
                        <p className="text-gray-700 mb-4">
                          I've analyzed the employment contract. Here are the key findings:
                        </p>
                        <div className="space-y-3">
                          <div className="flex items-start space-x-3">
                            <AlertTriangle size={18} className="text-orange-500 flex-shrink-0 mt-0.5" />
                            <div>
                              <div className="font-semibold text-gray-900">Non-Compete Duration</div>
                              <div className="text-sm text-gray-600">24-month restriction may be unenforceable in certain jurisdictions</div>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <AlertTriangle size={18} className="text-red-500 flex-shrink-0 mt-0.5" />
                            <div>
                              <div className="font-semibold text-gray-900">IP Rights Assignment</div>
                              <div className="text-sm text-gray-600">Broad assignment clause includes pre-existing work</div>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <CheckCircle size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
                            <div>
                              <div className="font-semibold text-gray-900">Termination Provisions</div>
                              <div className="text-sm text-gray-600">Well-balanced and compliant with state law</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 px-4 py-3 bg-gray-50 rounded-xl">
                      <div className="flex-1 text-gray-400 text-sm">Ask a follow-up question...</div>
                      <button className="px-4 py-2 bg-accent text-white rounded-lg text-sm font-semibold">
                        Send
                      </button>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'analysis' && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl font-bold text-primary">Contract Analysis Results</h3>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Clock size={16} />
                        <span>Analyzed in 2.3s</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                        <div className="text-3xl font-bold text-green-600">94%</div>
                        <div className="text-sm text-green-700 mt-1">Compliance Score</div>
                      </div>
                      <div className="bg-orange-50 rounded-xl p-4 border border-orange-200">
                        <div className="text-3xl font-bold text-orange-600">8</div>
                        <div className="text-sm text-orange-700 mt-1">Issues Found</div>
                      </div>
                      <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                        <div className="text-3xl font-bold text-blue-600">156</div>
                        <div className="text-sm text-blue-700 mt-1">Clauses Reviewed</div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-white border border-gray-200 rounded-xl p-4">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full" />
                            <span className="font-semibold text-gray-900">High Priority</span>
                          </div>
                          <span className="text-xs text-gray-500">Section 4.2</span>
                        </div>
                        <p className="text-sm text-gray-700">Indemnification clause lacks mutual provisions</p>
                      </div>

                      <div className="bg-white border border-gray-200 rounded-xl p-4">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-orange-500 rounded-full" />
                            <span className="font-semibold text-gray-900">Medium Priority</span>
                          </div>
                          <span className="text-xs text-gray-500">Section 7.1</span>
                        </div>
                        <p className="text-sm text-gray-700">Termination notice period shorter than industry standard</p>
                      </div>

                      <div className="bg-white border border-gray-200 rounded-xl p-4">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                            <span className="font-semibold text-gray-900">Low Priority</span>
                          </div>
                          <span className="text-xs text-gray-500">Section 9.3</span>
                        </div>
                        <p className="text-sm text-gray-700">Force majeure clause could be more specific</p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'insights' && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-6"
                  >
                    <h3 className="text-2xl font-bold text-primary mb-6">Contract Insights & Metrics</h3>

                    <div className="grid grid-cols-2 gap-6">
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                        <BarChart3 size={32} className="text-blue-600 mb-4" />
                        <div className="text-3xl font-bold text-blue-900 mb-2">156</div>
                        <div className="text-sm text-blue-700">Total Clauses Analyzed</div>
                      </div>

                      <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
                        <FileSearch size={32} className="text-purple-600 mb-4" />
                        <div className="text-3xl font-bold text-purple-900 mb-2">23</div>
                        <div className="text-sm text-purple-700">Key Terms Identified</div>
                      </div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-xl p-6">
                      <h4 className="font-semibold text-gray-900 mb-4">Risk Distribution</h4>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-600">High Risk</span>
                            <span className="text-gray-900 font-semibold">12%</span>
                          </div>
                          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full bg-red-500" style={{ width: '12%' }} />
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-600">Medium Risk</span>
                            <span className="text-gray-900 font-semibold">31%</span>
                          </div>
                          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full bg-orange-500" style={{ width: '31%' }} />
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-600">Low Risk</span>
                            <span className="text-gray-900 font-semibold">57%</span>
                          </div>
                          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full bg-green-500" style={{ width: '57%' }} />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-accent/10 to-highlight/10 border border-accent/20 rounded-xl p-6">
                      <div className="flex items-start space-x-3">
                        <CheckCircle size={24} className="text-accent flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-gray-900 mb-1">Overall Assessment</div>
                          <div className="text-sm text-gray-700">
                            This contract is generally well-structured with standard terms. Recommended to address the 3 high-priority issues before execution.
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Keyboard Base */}
            <div className="h-6 bg-gray-800 rounded-b-3xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductShowcase;
