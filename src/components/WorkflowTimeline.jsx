import { motion } from 'framer-motion';
import { Upload, Search, FileText, CheckCircle, Download, Sparkles } from 'lucide-react';

const WorkflowTimeline = () => {
  const steps = [
    {
      icon: Upload,
      title: 'Upload',
      description: 'Upload documents in any format - PDF, Word, images, or scanned files',
      color: 'from-blue-500 to-blue-600',
      delay: 0
    },
    {
      icon: Sparkles,
      title: 'Analyze',
      description: 'AI processes and understands your documents with 98% accuracy',
      color: 'from-purple-500 to-purple-600',
      delay: 0.2
    },
    {
      icon: Search,
      title: 'Research',
      description: 'Instantly access relevant case law, statutes, and legal precedents',
      color: 'from-indigo-500 to-indigo-600',
      delay: 0.4
    },
    {
      icon: FileText,
      title: 'Draft',
      description: 'Generate high-quality legal documents with AI assistance',
      color: 'from-cyan-500 to-cyan-600',
      delay: 0.6
    },
    {
      icon: CheckCircle,
      title: 'Review',
      description: 'Automated review for risks, compliance, and accuracy',
      color: 'from-green-500 to-green-600',
      delay: 0.8
    },
    {
      icon: Download,
      title: 'Export',
      description: 'Export finalized documents in your preferred format',
      color: 'from-teal-500 to-teal-600',
      delay: 1.0
    }
  ];

  return (
    <section className="py-8 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-mesh opacity-50" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-primary mb-6">
            Streamlined <span className="text-gradient">Legal Workflow</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From upload to export, experience a seamless workflow designed for modern legal professionals.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-accent via-highlight to-accent transform -translate-y-1/2" />

          {/* Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: step.delay }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-8 shadow-premium border border-gray-100 hover:shadow-2xl transition-all hover:-translate-y-2 duration-300">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-accent to-highlight rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center mb-6`}>
                    <step.icon size={32} className="text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-primary mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Decorative Element */}
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-accent/5 to-transparent rounded-tl-full" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-20 bg-gradient-to-r from-accent to-highlight rounded-3xl p-12 text-white"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">85%</div>
              <div className="text-blue-100">Time Saved</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">98%</div>
              <div className="text-blue-100">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">3x</div>
              <div className="text-blue-100">Faster Turnaround</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkflowTimeline;
