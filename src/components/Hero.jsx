import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Play, X } from 'lucide-react';

const Hero = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 40;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        opacity: Math.random() * 0.4 + 0.1,
      });
    }

    let animationId;
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(37, 99, 235, ${particle.opacity})`;
        ctx.fill();
      });
      animationId = requestAnimationFrame(animate);
    }
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Canvas Particle Background */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Animated Gradient Mesh Background */}
      <div className="absolute inset-0 gradient-mesh pointer-events-none" />

      {/* Floating Gradient Orbs */}
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-highlight/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -50, 0], y: [0, -50, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/3 w-48 h-48 bg-purple-300/20 rounded-full blur-3xl"
      />

      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(37, 99, 235, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(37, 99, 235, 0.3) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-left space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-accent/10 rounded-full mb-6 group hover:bg-accent/20 transition-colors">
                <Sparkles size={16} className="text-accent group-hover:rotate-12 transition-transform" />
                <span className="text-sm font-semibold text-accent">Powered by Advanced AI</span>
              </div>
            </motion.div>

            {/* Heading with text reveal */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            >
              <h1 className="text-6xl lg:text-7xl font-bold text-primary leading-tight">
                <span className="inline-block overflow-hidden">
                  <motion.span
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-block"
                  >
                    AI Built For
                  </motion.span>
                </span>{' '}
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="text-gradient inline-block"
                >
                  Modern Legal
                </motion.span>{' '}
                <span className="inline-block overflow-hidden">
                  <motion.span
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-block"
                  >
                    Professionals
                  </motion.span>
                </span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
              className="text-xl text-gray-600 leading-relaxed max-w-xl"
            >
              Transform your legal workflow with enterprise-grade AI. Research faster, draft smarter, and deliver exceptional results with confidence.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(37, 99, 235, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-gradient-to-r from-accent to-highlight text-white font-semibold rounded-xl shadow-lg flex items-center justify-center space-x-2 relative overflow-hidden"
              >
                <span className="relative z-10">Start Free Trial</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform relative z-10" />
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.4 }}
                />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsVideoOpen(true)}
                className="px-8 py-4 bg-white text-accent font-semibold rounded-xl border-2 border-accent hover:bg-accent/5 transition-colors flex items-center justify-center space-x-2 group"
              >
                <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Play 
                  size={16} className="text-accent ml-0.5" />
                </div>
                <span>Watch Demo</span>
              </motion.button>
            </motion.div>

            {/* Stats with staggered animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.45, ease: 'easeOut' }}
              className="grid grid-cols-3 gap-8 pt-8"
            >
              {[
                { value: '10M+', label: 'Documents Analyzed' },
                { value: '98%', label: 'Accuracy Rate' },
                { value: '500+', label: 'Law Firms' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.15, duration: 0.5 }}
                >
                  <div className="text-4xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right - Interactive Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
            className="relative"
          >
            {/* Floating badges around the dashboard */}
            <motion.div
              animate={{ y: [0, -12, 0], rotate: [0, -2, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 z-20 bg-white rounded-xl shadow-premium px-4 py-3 border border-gray-100"
            >
              <div className="flex items-center space-x-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                </span>
                <span className="text-sm font-semibold text-gray-700">AI Processing</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 12, 0], rotate: [0, 2, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-4 -left-4 z-20 bg-white rounded-xl shadow-premium px-4 py-3 border border-gray-100"
            >
              <div className="text-xs text-gray-600">Response Time</div>
              <div className="text-2xl font-bold text-accent">0.8s</div>
            </motion.div>

            {/* Main Dashboard Card */}
            <div className="relative">
              {/* Glow Effect */}
              <motion.div
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -inset-4 bg-gradient-to-r from-accent/30 to-highlight/30 rounded-3xl blur-2xl"
              />

              {/* Dashboard Card */}
              <motion.div
                whileHover={{ y: -4 }}
                className="relative bg-white rounded-2xl shadow-premium p-8 border border-gray-100"
              >
                {/* Window Controls */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="w-3 h-3 bg-red-500 rounded-full cursor-pointer"
                    />
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="w-3 h-3 bg-yellow-500 rounded-full cursor-pointer"
                    />
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="w-3 h-3 bg-green-500 rounded-full cursor-pointer"
                    />
                  </div>
                  <motion.div
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex items-center space-x-2 text-sm text-gray-500"
                  >
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                    </span>
                    <span>Live</span>
                  </motion.div>
                </div>

                {/* AI Chat Interface */}
                <div className="space-y-4">
                  {/* AI Message */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="flex items-start space-x-3"
                  >
                    <motion.div
                      animate={{ rotate: [0, 5, 0, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                      className="w-8 h-8 bg-gradient-to-br from-accent to-highlight rounded-lg flex items-center justify-center flex-shrink-0"
                    >
                      <Sparkles size={16} className="text-white" />
                    </motion.div>
                    <div className="flex-1 bg-gray-50 rounded-xl p-4">
                      <p className="text-sm text-gray-700">Analyzing contract for potential risks and compliance issues...</p>
                    </div>
                  </motion.div>

                  {/* User Message */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-8 h-8 bg-gray-200 rounded-lg flex-shrink-0" />
                    <div className="flex-1 bg-accent/10 rounded-xl p-4 border border-accent/20">
                      <p className="text-sm text-gray-700">Review the NDA agreement for our Series B funding round</p>
                    </div>
                  </motion.div>
                </div>

                {/* Results */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6, duration: 0.5 }}
                  className="grid grid-cols-2 gap-4 mt-6"
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-green-50 rounded-xl p-4 border border-green-200"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1.8, type: 'spring', stiffness: 200 }}
                      className="text-2xl font-bold text-green-600"
                    >
                      94%
                    </motion.div>
                    <div className="text-xs text-green-700 mt-1">Compliance Score</div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-blue-50 rounded-xl p-4 border border-blue-200"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 2.0, type: 'spring', stiffness: 200 }}
                      className="text-2xl font-bold text-blue-600"
                    >
                      3
                    </motion.div>
                    <div className="text-xs text-blue-700 mt-1">Issues Found</div>
                  </motion.div>
                </motion.div>

                {/* Progress Bar */}
                <div className="mt-6 space-y-2">
                  <div className="flex justify-between text-xs text-gray-600">
                    <span>Analysis Progress</span>
                    <span>87%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '87%' }}
                      transition={{ duration: 2.5, delay: 0.8, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-accent to-highlight rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [1, 0.3, 1], y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gray-400 rounded-full"
          />
        </motion.div>
      </motion.div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
            onClick={() => setIsVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              >
                <X size={20} />
              </motion.button>

              {/* Video iframe */}
              {/* <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/watch?v=d0AH3aIdCys"
                title="AskFides Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              /> */}
              <iframe
  className="w-full h-full"
  src="https://www.youtube.com/embed/d0AH3aIdCys?autoplay=1&mute=1&playsinline=1"
  title="YouTube Video"
  allow="autoplay; encrypted-media"
  allowFullScreen
/>
              {/* <video
  className="w-full h-full object-cover"
  controls
  autoPlay
  playsInline
  muted
>
  <source src="https://www.youtube.com/watch?v=d0AH3aIdCys" type="video/mp4" />
</video> */}

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
