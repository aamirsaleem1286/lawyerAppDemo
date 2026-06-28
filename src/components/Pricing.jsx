import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, Sparkles, Building2, Users, Zap } from 'lucide-react';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: 'Starter',
      icon: Zap,
      price: '99',
      annualPrice: '79',
      period: 'per user/month',
      description: 'Perfect for solo practitioners and small firms',
      features: [
        'AI Legal Research',
        'Contract Review (100/month)',
        'Document Drafting',
        '10GB Storage',
        'Email Support',
        'Basic Analytics',
        'Mobile App Access'
      ],
      cta: 'Start Free Trial',
      popular: false,
      color: 'from-gray-600 to-gray-700'
    },
    {
      name: 'Professional',
      icon: Users,
      price: '299',
      annualPrice: '239',
      period: 'per user/month',
      description: 'For growing firms with advanced needs',
      features: [
        'Everything in Starter',
        'Unlimited Contract Reviews',
        'Advanced AI Research',
        'Compliance Monitoring',
        'Due Diligence Tools',
        '100GB Storage',
        'Priority Support',
        'Advanced Analytics',
        'API Access',
        'Custom Workflows'
      ],
      cta: 'Start Free Trial',
      popular: true,
      color: 'from-accent to-highlight'
    },
    {
      name: 'Enterprise',
      icon: Building2,
      price: 'Custom',
      annualPrice: 'Custom',
      period: 'tailored to your needs',
      description: 'For large firms requiring maximum security',
      features: [
        'Everything in Professional',
        'Private Cloud Deployment',
        'Unlimited Storage',
        'SSO & Advanced Security',
        'Dedicated Account Manager',
        'Custom Integrations',
        'SLA Guarantees',
        'White-label Options',
        'Training & Onboarding',
        'Custom AI Models'
      ],
      cta: 'Contact Sales',
      popular: false,
      color: 'from-purple-600 to-purple-700'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="py-2 bg-white relative overflow-hidden">
      {/* Background */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
        className="absolute top-20 -right-20 w-96 h-96 border border-accent/5 rounded-full"
      />
      <div className="absolute inset-0 gradient-mesh opacity-30" />

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
            Simple, <span className="text-gradient">Transparent Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the plan that fits your firm. All plans include a 14-day free trial.
          </p>

          {/* Annual/Monthly Toggle */}
          <div className="inline-flex items-center space-x-4">
            <span className={`text-sm font-semibold ${!isAnnual ? 'text-primary' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-14 h-7 bg-gray-200 rounded-full transition-colors"
            >
              <motion.div
                animate={{ x: isAnnual ? 28 : 0 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                className="absolute top-0.5 left-0.5 w-6 h-6 bg-gradient-to-r from-accent to-highlight rounded-full shadow-md"
              />
            </button>
            <span className={`text-sm font-semibold ${isAnnual ? 'text-primary' : 'text-gray-500'}`}>
              Annual
            </span>
            <div className="inline-flex items-center px-3 py-1 bg-green-50 rounded-full border border-green-200">
              <Sparkles size={14} className="text-green-600 mr-1" />
              <span className="text-green-700 text-xs font-semibold">Save 20%</span>
            </div>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid lg:grid-cols-3 gap-8 mb-16 items-start"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.25 },
              }}
              className={`relative bg-white rounded-3xl p-8 border-2 transition-all ${
                plan.popular
                  ? 'border-accent shadow-premium scale-105 z-10'
                  : 'border-gray-200 shadow-lg hover:shadow-premium'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <motion.div
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                >
                  <div className="px-6 py-2 bg-gradient-to-r from-accent to-highlight text-white text-sm font-bold rounded-full shadow-lg">
                    Most Popular
                  </div>
                </motion.div>
              )}

              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-2xl flex items-center justify-center mb-6`}
              >
                <plan.icon size={32} className="text-white" />
              </motion.div>

              {/* Plan Name */}
              <h3 className="text-2xl font-bold text-primary mb-2">{plan.name}</h3>
              <p className="text-gray-600 mb-6">{plan.description}</p>

              {/* Price with animation */}
              <div className="mb-8">
                {plan.price === 'Custom' ? (
                  <div className="text-4xl font-bold text-primary">Custom</div>
                ) : (
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold text-primary">$</span>
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={isAnnual ? plan.annualPrice : plan.price}
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 10, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-5xl font-bold text-primary"
                      >
                        {isAnnual ? plan.annualPrice : plan.price}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                )}
                <p className="text-sm text-gray-500 mt-1">{plan.period}</p>
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-xl font-semibold mb-8 transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-accent to-highlight text-white shadow-lg hover:shadow-xl'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                {plan.cta}
              </motion.button>

              {/* Features */}
              <div className="space-y-4">
                {plan.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.03 }}
                    className="flex items-start space-x-3"
                  >
                    <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                      <Check size={12} className="text-white" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enterprise Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-12 text-white overflow-hidden relative"
        >
          {/* Decorative circles */}
          <div className="absolute -top-20 -right-20 w-64 h-64 border border-white/10 rounded-full" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 border border-white/10 rounded-full" />

          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-4xl font-bold mb-4">Need a Custom Solution?</h3>
              <p className="text-gray-300 mb-6">
                Our Enterprise plan offers unlimited flexibility, dedicated support, and custom features tailored to your firm's unique needs.
              </p>
              <ul className="space-y-3 mb-8">
                {['Volume discounts for large teams', 'Custom AI model training', 'Dedicated infrastructure'].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <Check size={20} className="text-green-400" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center space-x-2 px-8 py-4 bg-white text-primary font-semibold rounded-xl hover:shadow-2xl transition-all"
              >
                <span>Contact Sales</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: '500+', label: 'Enterprise Clients' },
                { value: '99.99%', label: 'Uptime SLA' },
                { value: '24/7', label: 'Support' },
                { value: 'SOC 2', label: 'Certified' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
                >
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
