import { motion } from 'framer-motion';

const TrustedBy = () => {
  const companies = [
    { name: 'Clifford Chance', logo: 'CC' },
    { name: 'Baker McKenzie', logo: 'BM' },
    { name: 'Latham & Watkins', logo: 'LW' },
    { name: 'Skadden', logo: 'SK' },
    { name: 'Kirkland & Ellis', logo: 'KE' },
    { name: 'DLA Piper', logo: 'DP' },
    { name: 'Freshfields', logo: 'FB' },
    { name: 'Allen & Overy', logo: 'AO' },
    { name: 'White & Case', logo: 'WC' },
    { name: 'Norton Rose', logo: 'NR' },
    { name: 'Hogan Lovells', logo: 'HL' },
    { name: 'Sidley Austin', logo: 'SA' },
  ];

  // Duplicate the array for seamless infinite scroll
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Gradient fade edges */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8">
            Trusted by leading law firms and enterprises worldwide
          </p>
        </motion.div>

        {/* Infinite Scrolling Logos */}
        <div className="relative">
          <motion.div
            animate={{ x: [-window.innerWidth / 2, window.innerWidth / 2] }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            className="scroll-logos flex space-x-8 whitespace-nowrap will-change-transform"
            style={{ width: 'max-content' }}
          >
            {duplicatedCompanies.map((company, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.2, y: -4 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="flex-shrink-0 flex items-center justify-center cursor-pointer"
              >
                <div className="w-24 h-24 bg-white rounded-xl shadow-md flex items-center justify-center hover:shadow-premium transition-all duration-300 border border-gray-100 group">
                  <span className="text-xl font-bold text-gray-400 group-hover:text-accent transition-colors">{company.logo}</span>
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent to-highlight scale-x-0 group-hover:scale-x-100 transition-transform origin-center" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats with animated counters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="flex flex-wrap items-center justify-center space-x-8 md:space-x-12 gap-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-4xl font-bold text-primary">500+</div>
              <div className="text-sm text-gray-600 mt-2">Law Firms</div>
            </motion.div>
            <div className="w-px h-16 bg-gray-300 hidden sm:block" />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-4xl font-bold text-primary">50K+</div>
              <div className="text-sm text-gray-600 mt-2">Legal Professionals</div>
            </motion.div>
            <div className="w-px h-16 bg-gray-300 hidden sm:block" />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-4xl font-bold text-primary">25M+</div>
              <div className="text-sm text-gray-600 mt-2">Documents Processed</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBy;