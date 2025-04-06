
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
      
      {/* Process Section */}
      <ProcessTimeline />
      
      {/* Stats Section */}
      <section id="stats" className="py-16 bg-dark-lighter">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-orbitron">
            The <span className="text-neon">Numbers</span> Speak for Themselves
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatCard 
              percentage="67%" 
              description="Increase in qualified leads for B2B clients" 
              source="Internal data, 2023"
            />
            <StatCard 
              percentage="42%" 
              description="Reduction in cost per acquisition" 
              source="Client reporting"
            />
            <StatCard 
              percentage="89%" 
              description="Of clients renew their contracts" 
              source="Retention metrics, 2023"
            />
          </div>
        </div>
      </section>
      
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
              company="TechCorp Inc."
              rating={5}
            />
            <TestimonialCard 
              quote="The AI-driven approach has given us an edge over competitors. Our conversion rates have increased by 45% since we started working with OmegaTeam."
              name="Michael Chen"
              role="Marketing Director"
              company="Innovate Solutions"
              rating={5}
            />
            <TestimonialCard 
              quote="Not only do we get more leads, but the quality is consistently high. It's like having an elite sales team working 24/7."
              name="Jessica Williams"
              role="CEO"
              company="Growth Ventures"
              rating={5}
            />
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <FAQSection />
      
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
                src="https://github.com/ai-davieboy/shared-pics/blob/main/cup_of_coffee.png?raw=true" 
                alt="Coffee for Closers" 
                className="max-w-[70%] h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
