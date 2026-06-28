import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Managing Partner',
      company: 'Mitchell & Associates',
      image: 'SM',
      content: 'AskFides has transformed how we handle contract reviews. What used to take days now takes hours. The accuracy is remarkable, and our clients are impressed with the faster turnaround times.',
      rating: 5
    },
    {
      name: 'David Chen',
      role: 'General Counsel',
      company: 'TechCorp Global',
      image: 'DC',
      content: 'As an in-house legal team of three supporting a 500+ person company, AskFides has been a game-changer. It\'s like having 10 additional attorneys on staff.',
      rating: 5
    },
    {
      name: 'Jennifer Rodriguez',
      role: 'Senior Associate',
      company: 'Thompson & Partners',
      image: 'JR',
      content: 'The legal research capabilities are incredible. I can find relevant case law in seconds that would have taken me hours to locate manually. This tool has made me significantly more efficient.',
      rating: 5
    },
    {
      name: 'Michael O\'Brien',
      role: 'Compliance Director',
      company: 'Financial Services Inc.',
      image: 'MO',
      content: 'The compliance monitoring features give us peace of mind. We\'re always up-to-date with regulatory changes, and the automated alerts ensure nothing falls through the cracks.',
      rating: 5
    },
    {
      name: 'Emily Taylor',
      role: 'Partner',
      company: 'Taylor Legal Group',
      image: 'ET',
      content: 'I was skeptical about AI in legal work, but AskFides proved me wrong. It doesn\'t replace lawyers—it makes us better. The ROI has been exceptional.',
      rating: 5
    },
    {
      name: 'Robert Kim',
      role: 'Chief Legal Officer',
      company: 'MedTech Solutions',
      image: 'RK',
      content: 'Security was our top concern, and AskFides exceeded our expectations. SOC 2 compliance, private cloud options, and enterprise-grade security gave us confidence to proceed.',
      rating: 5
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
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
    <section className="py-8 bg-white relative overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent" />
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-20 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl"
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
          <h2 className="text-5xl lg:text-6xl font-bold text-primary mb-6">
            Trusted by <span className="text-gradient">Legal Professionals</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what legal professionals are saying about AskFides.
          </p>
        </motion.div>

        {/* Testimonials Grid with Stagger */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-premium transition-all"
            >
              {/* Quote Icon with subtle rotation */}
              <motion.div
                whileHover={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.4 }}
                className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6"
              >
                <Quote size={24} className="text-accent" />
              </motion.div>

              {/* Rating with hover pulse */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.3, rotate: 15 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <Star size={16} className="fill-yellow-400 text-yellow-400" />
                  </motion.div>
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed italic group-hover:text-gray-900 transition-colors">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4 pt-6 border-t border-gray-100 group-hover:border-accent/20 transition-colors">
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  className="w-12 h-12 bg-gradient-to-br from-accent to-highlight rounded-full flex items-center justify-center text-white font-bold shadow-md"
                >
                  {testimonial.image}
                </motion.div>
                <div>
                  <div className="font-semibold text-primary group-hover:text-accent transition-colors">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-12 border border-gray-200"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: '4.9/5', label: 'Average Rating' },
              { value: '500+', label: 'Law Firms' },
              { value: '50K+', label: 'Active Users' },
              { value: '98%', label: 'Would Recommend' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
              >
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
