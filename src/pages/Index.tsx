
import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ProcessTimeline from '../components/ProcessTimeline';
import Footer from '../components/Footer';
import FAQSection from '../components/FAQSection';
import Navbar from '../components/Navbar';
import StatCard from '../components/StatCard';
import TestimonialCard from '../components/TestimonialCard';

const Index = () => {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Stats Section */}
      <section id="stats" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-orbitron">
            Passive Sales Strategy Is <span className="text-neon">Costing You Growth</span>
          </h2>
          <p className="text-xl text-center mb-12 max-w-4xl mx-auto">
            Are you missing out on sales because your outreach isn't actively engaging decision-makers?
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <StatCard 
              percentage="352%" 
              description="of a sales rep's time is spent on actual selling." 
              source="Forbes"
            />
            <StatCard 
              percentage="87%" 
              description="of B2B buyers say cold calls feel intrusive or pressured." 
              source="LinkedIn State of Sales Report"
            />
            <StatCard 
              percentage="40%" 
              description="of SDRs admit fear of rejection limits their outreach." 
              source="Gartner Sales Insights"
            />
            <StatCard 
              percentage="60%" 
              description="of marketers cite poor data quality as their biggest barrier." 
              source="DemandGen Report"
            />
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <ProcessTimeline />
      
      {/* Testimonials Section */}
      <section id="testimonials" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-orbitron">
            Client <span className="text-neon">Success</span> Stories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="OmegaTeam has completely transformed our lead generation process. We're seeing higher quality leads and our sales team couldn't be happier."
              name="Sarah Johnson"
              role="VP of Sales"
              rating={5}
            />
            <TestimonialCard 
              quote="The AI-driven approach has given us an edge over competitors. Our conversion rates have increased by 45% since we started working with OmegaTeam."
              name="Michael Chen"
              role="Marketing Director"
              rating={5}
            />
            <TestimonialCard 
              quote="Not only do we get more leads, but the quality is consistently high. It's like having an elite sales team working 24/7."
              name="Jessica Williams"
              role="CEO"
              rating={5}
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section id="cta" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-orbitron">
              Ready to <span className="text-neon animate-glow-pulse">Transform</span> Your Outreach?
            </h2>
            <p className="text-xl text-gray-300 mb-8 font-titillium">
              While we do the heavy lifting, your sales reps can focus on what matters — closing deals, and enjoying that well-earned coffee.
            </p>
            
            <div className="flex justify-center mb-8">
              <img 
                src="https://github.com/ai-davieboy/shared-pics/blob/main/Cofee.png?raw=true" 
                alt="Coffee for Closers" 
                className="max-w-[70%] h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section - moved between CTA and Footer */}
      <FAQSection />
      
      <Footer />
    </div>
  );
};

export default Index;
