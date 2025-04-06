import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ProcessTimeline from '../components/ProcessTimeline';
import Footer from '../components/Footer';
import FAQSection from '../components/FAQSection';
import Navbar from '../components/Navbar';
import StatCard from '../components/StatCard';
import TestimonialCard from '../components/TestimonialCard';
import TeamCard from '../components/TeamCard';
import { Shield, Clock, Zap, Users, Target, CheckCircle, Globe, MessageSquare, Layers, ShieldCheck, ShieldAlert, ShieldOff, ShieldX } from 'lucide-react';

const Index = () => {
  const teamMembers = [
    {
      name: "Adam",
      title: "Chief Operation Officer",
      photoUrl: "https://raw.githubusercontent.com/ai-davieboy/shared-pics/refs/heads/main/adam.png"
    },
    {
      name: "Jitka",
      title: "Chief Financial Officer",
      photoUrl: "https://raw.githubusercontent.com/ai-davieboy/shared-pics/refs/heads/main/jitka.png"
    },
    {
      name: "Arjun",
      title: "Chief AI Officer",
      photoUrl: "https://raw.githubusercontent.com/ai-davieboy/shared-pics/refs/heads/main/arjun.png"
    },
    {
      name: "Chris",
      title: "Cyber Security & Data Protection",
      photoUrl: "https://raw.githubusercontent.com/ai-davieboy/shared-pics/refs/heads/main/chris.png"
    },
    {
      name: "Zara",
      title: "Business Development Lead",
      photoUrl: "https://raw.githubusercontent.com/ai-davieboy/shared-pics/refs/heads/main/zara.png"
    },
    {
      name: "Bryan",
      title: "Business Development Partner",
      photoUrl: "https://raw.githubusercontent.com/ai-davieboy/shared-pics/refs/heads/main/bryan.png"
    },
    {
      name: "Hana",
      title: "Business Development Partner",
      photoUrl: "https://raw.githubusercontent.com/ai-davieboy/shared-pics/refs/heads/main/hana.png"
    },
    {
      name: "Claire",
      title: "Business Development Partner",
      photoUrl: "https://raw.githubusercontent.com/ai-davieboy/shared-pics/refs/heads/main/claire_burns.png"
    },
    {
      name: "Nasser",
      title: "Chief Commercial Officer",
      photoUrl: "https://raw.githubusercontent.com/ai-davieboy/shared-pics/refs/heads/main/nasser.png"
    },
    {
      name: "Kailee",
      title: "Growth Manager",
      photoUrl: "https://raw.githubusercontent.com/ai-davieboy/shared-pics/refs/heads/main/kailee.png"
    },
    {
      name: "Jisoo",
      title: "Client Manager",
      photoUrl: "https://raw.githubusercontent.com/ai-davieboy/shared-pics/refs/heads/main/jisoo.png"
    },
    {
      name: "Wang",
      title: "Lead Research Analyst",
      photoUrl: "https://raw.githubusercontent.com/ai-davieboy/shared-pics/refs/heads/main/wang.png"
    }
  ];

  const aiFeatures = [
    {
      icon: <Clock className="w-8 h-8 text-neon" />,
      title: "24/7 Consistency",
      description: "Our AI operates continuously, ensuring leads are engaged promptly regardless of time zones."
    },
    {
      icon: <Zap className="w-8 h-8 text-neon" />,
      title: "Instant Deployment",
      description: "No lengthy onboarding. Get your AI outreach engine running in days, not months."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-neon" />,
      title: "Data-Driven Decisions",
      description: "Every interaction generates insights to continually refine your targeting."
    },
    {
      icon: <Target className="w-8 h-8 text-neon" />,
      title: "Precision Targeting",
      description: "AI identifies and prioritizes prospects most likely to convert based on behavior patterns."
    },
    {
      icon: <Shield className="w-8 h-8 text-neon" />,
      title: "Zero Human Errors",
      description: "Eliminate typos, scheduling mishaps, and follow-up failures that plague manual outreach."
    },
    {
      icon: <Globe className="w-8 h-8 text-neon" />,
      title: "Time Zone Coverage",
      description: "Connect with prospects globally without staffing international teams."
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-neon" />,
      title: "Personalized Outreach",
      description: "Each message is tailored to the recipient's role, industry, and potential pain points."
    },
    {
      icon: <Layers className="w-8 h-8 text-neon" />,
      title: "Seamless Multitasking",
      description: "Manage thousands of concurrent conversations without quality degradation."
    }
  ];

  const dataSecurityFeatures = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-neon" />,
      title: "Data Privacy & Compliance",
      description: "Fully GDPR-compliant."
    },
    {
      icon: <ShieldX className="w-6 h-6 text-neon" />,
      title: "No Personal Data",
      description: "We don't store/process personal data"
    },
    {
      icon: <Shield className="w-6 h-6 text-neon" />,
      title: "Public Data Only",
      description: "Legal, publicly available sources"
    },
    {
      icon: <Target className="w-6 h-6 text-neon" />,
      title: "Purpose-Driven",
      description: "Only relevant decision-makers"
    },
    {
      icon: <ShieldOff className="w-6 h-6 text-neon" />,
      title: "Easy Opt-Out",
      description: "One-click unsubscribe always available"
    }
  ];

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
      
      {/* Why AI Section */}
      <section id="why-ai" className="py-16 bg-dark/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-orbitron">
                Why <span className="text-neon">AI</span>?
              </h2>
              <h3 className="text-2xl mb-8 font-titillium">
                Humans fail at routine. But excel at relationships.
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {aiFeatures.map((feature, index) => (
                  <div key={index} className="glassmorphism p-5 rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      {feature.icon}
                      <h4 className="font-bold">{feature.title}</h4>
                    </div>
                    <p className="text-gray-300 text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <img 
                  src="https://github.com/ai-davieboy/shared-pics/blob/main/ai-graphic.png?raw=true" 
                  alt="AI-powered prospecting" 
                  className="max-w-full h-auto rounded-lg shadow-neon"
                />
                <div className="absolute inset-0 bg-gradient-radial rounded-lg opacity-30"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Data Security Section */}
      <section id="data-security" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-orbitron">
            Your <span className="text-neon">Data Security</span> Is Our Priority
          </h2>
          <p className="text-xl text-center mb-10 max-w-4xl mx-auto">
            We implement bank-level encryption and strict data access policies to ensure your information is always protected.
          </p>
          
          <div className="flex flex-col lg:flex-row items-start gap-12">
            <div className="lg:w-2/5 space-y-4">
              {dataSecurityFeatures.map((feature, index) => (
                <div key={index} className="glassmorphism p-4 rounded-lg flex items-center">
                  <div className="mr-4 flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{feature.title}</h4>
                    <p className="text-gray-300 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <ProcessTimeline />
      
      {/* Team Section */}
      <section id="team" className="py-16 bg-dark/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 font-orbitron">
            Our <span className="text-neon">Team</span>
          </h2>
          <p className="text-xl text-center mb-12 max-w-4xl mx-auto">
            Meet the AI agents working around the clock to connect you with your next best clients.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamCard
                key={index}
                name={member.name}
                title={member.title}
                photoUrl={member.photoUrl}
              />
            ))}
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
