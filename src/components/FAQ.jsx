import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'How does AskFides ensure data security and confidentiality?',
      answer: 'AskFides employs bank-level security with end-to-end AES-256 encryption, SOC 2 Type II and ISO 27001 certifications. All data is stored in secure, isolated environments with strict access controls. We never train our AI models on your confidential data, and you maintain full ownership of all your documents.'
    },
    {
      question: 'Can AskFides integrate with our existing legal software?',
      answer: 'Yes, AskFides offers seamless integrations with popular legal management systems, document repositories, and collaboration tools. Our API allows custom integrations, and our Enterprise plan includes dedicated support for custom workflow integration.'
    },
    {
      question: 'What happens to our data if we cancel our subscription?',
      answer: 'You retain full ownership of your data. Upon cancellation, you have 30 days to export all your documents and data. After this grace period, data is securely deleted according to our data retention policy and industry standards.'
    },
    {
      question: 'How accurate is the AI-powered legal research?',
      answer: 'Our AI maintains a 98% accuracy rate, validated through continuous testing against verified legal databases. All citations are automatically verified and linked to primary sources. We recommend attorney review for final validation, as with any research tool.'
    },
    {
      question: 'Do you offer training and onboarding support?',
      answer: 'Yes, all plans include comprehensive onboarding. Professional plans get priority support and training resources. Enterprise clients receive dedicated account managers, custom training sessions, and ongoing support to ensure successful adoption.'
    },
    {
      question: 'Can I try AskFides before committing?',
      answer: 'Absolutely! We offer a 14-day free trial with full access to all features in your chosen plan. No credit card required. Our team is available to guide you through the platform and answer any questions during your trial.'
    },
    {
      question: 'Is AskFides suitable for specialized practice areas?',
      answer: 'Yes, AskFides supports all major practice areas including corporate law, litigation, IP, compliance, real estate, and more. Our AI is trained on comprehensive legal databases covering multiple jurisdictions and specialties.'
    },
    {
      question: 'What languages does AskFides support?',
      answer: 'AskFides currently supports English, Spanish, French, German, and Mandarin Chinese. We\'re continuously expanding language support. Enterprise clients can request additional language customization.'
    },
    {
      question: 'How does pricing scale for larger teams?',
      answer: 'We offer volume discounts for teams of 10+ users. Enterprise plans include custom pricing based on your specific needs, user count, and required features. Contact our sales team for a tailored quote.'
    },
    {
      question: 'What kind of customer support do you provide?',
      answer: 'Starter plans include email support with 24-hour response time. Professional plans get priority support with 4-hour response. Enterprise clients receive 24/7 dedicated support with a guaranteed 1-hour response time for critical issues.'
    }
  ];

  return (
    <section className="py-2 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-primary mb-6">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about AskFides. Can't find an answer? Contact our team.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div
                className={`bg-white rounded-2xl border-2 transition-all overflow-hidden ${
                  openIndex === index
                    ? 'border-accent shadow-premium'
                    : 'border-gray-200 shadow-lg hover:border-gray-300'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left"
                >
                  <span className="text-lg font-semibold text-primary pr-8">
                    {faq.question}
                  </span>
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  >
                    {openIndex === index ? (
                      <Minus size={20} className="text-accent" />
                    ) : (
                      <Plus size={20} className="text-accent" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-8 pb-6 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center bg-white rounded-3xl p-12 shadow-premium border border-gray-100"
        >
          <h3 className="text-3xl font-bold text-primary mb-4">Still have questions?</h3>
          <p className="text-gray-600 mb-8">
            Our team is here to help. Get in touch and we'll answer all your questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-accent to-highlight text-white font-semibold rounded-xl shadow-lg"
            >
              Contact Support
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-accent font-semibold rounded-xl border-2 border-accent hover:bg-accent/5 transition-colors"
            >
              Schedule a Call
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
