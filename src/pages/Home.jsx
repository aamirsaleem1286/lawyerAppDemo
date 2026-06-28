import ScrollProgress from '../components/ScrollProgress';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TrustedBy from '../components/TrustedBy';
import Features from '../components/Features';
import ProductShowcase from '../components/ProductShowcase';
import WorkflowTimeline from '../components/WorkflowTimeline';
import Comparison from '../components/Comparison';
import Security from '../components/Security';
import Testimonials from '../components/Testimonials';
import CaseStudies from '../components/CaseStudies';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="overflow-hidden">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <TrustedBy />
      <Features />
      <ProductShowcase />
      <WorkflowTimeline />
      <Comparison />
      <Security />
      <Testimonials />
      <CaseStudies />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Home;
