import React from 'react';
import { ArrowRight, Bot, Clock, Cpu, Database, Fingerprint, Globe, LineChart, Map, Zap } from 'lucide-react';
import Hero from "@/components/Hero";
import StatCard from "@/components/StatCard";
import ProcessTimeline from "@/components/ProcessTimeline";
import TestimonialCard from "@/components/TestimonialCard";
import FAQSection from "@/components/FAQSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TeamCard from "@/components/TeamCard";

const Index = () => {
  const stats = [
    {
      percentage: "35%",
      description: "of a sales rep's time is spent on actual selling.",
      source: "Forbes",
    },
    {
      percentage: "87%",
      description: "of B2B buyers say cold calls feel intrusive or pressured.",
      source: "LinkedIn State of Sales Report",
    },
    {
      percentage: "40%",
      description: "of SDRs admit fear of rejection limits their outreach.",
      source: "Gartner Sales Insights",
    },
    {
      percentage: "60%",
      description: "of marketers cite poor data quality as their biggest barrier.",
      source: "DemandGen Report",
    },
  ];
  
  const benefits = [
    {
      icon: <Clock className="w-7 h-7 text-neon" />,
      title: "24/7 Consistency",
      description: "Our AI operates continuously, ensuring leads are engaged promptly regardless of time zones."
    },
    {
      icon: <Zap className="w-7 h-7 text-neon" />,
      title: "Instant Deployment",
      description: "No lengthy onboarding. Get your AI outreach engine running in days, not months."
    },
    {
      icon: <LineChart className="w-7 h-7 text-neon" />,
      title: "Data-Driven Decisions",
      description: "Every interaction generates insights to continually refine your targeting."
    },
    {
      icon: <Database className="w-7 h-7 text-neon" />,
      title: "Precision Targeting",
      description: "AI identifies and prioritizes prospects most likely to convert based on behavior patterns."
    },
    {
      icon: <Bot className="w-7 h-7 text-neon" />,
      title: "Zero Human Errors",
      description: "Eliminate typos, scheduling mishaps, and follow-up failures that plague manual outreach."
    },
    {
      icon: <Globe className="w-7 h-7 text-neon" />,
      title: "Time Zone Coverage",
      description: "Connect with prospects globally without staffing international teams."
    },
    {
      icon: <Fingerprint className="w-7 h-7 text-neon" />,
      title: "Personalized Outreach",
      description: "Each message is tailored to the recipient's role, industry, and potential pain points."
    },
    {
      icon: <Cpu className="w-7 h-7 text-neon" />,
      title: "Seamless Multitasking",
      description: "Manage thousands of concurrent conversations without quality degradation."
    },
  ];
  
  const testimonials = [
    {
      quote: "OmegaTeam.ai transformed our workflow with their intelligent AI agents! Their innovative approach and seamless integration made our processes more efficient than ever. We're thrilled with the results and highly recommend them to any business looking to enhance productivity.",
      name: "Lucie Novak",
      role: "Head of Sales",
    },
    {
      quote: "Working with OmegaTeam.ai has revolutionized our operations. Their AI agents are incredibly intuitive and have enhanced our efficiency significantly. Their expertise and support exceeded our expectations, making them an indispensable part of our team.",
      name: "Martin Vlcek",
      role: "VP of Marketing",
    },
    {
      quote: "The AI-powered outreach from OmegaTeam.ai has completely changed how we approach client acquisition. The quality of leads and automation of follow-ups has given our team back countless hours while increasing our conversion rates substantially.",
      name: "Sarah Chen",
      role: "Director of Business Development",
    },
    {
      quote: "We've been able to scale our outreach efforts without adding headcount thanks to OmegaTeam.ai. Their AI outreach system consistently delivers qualified leads that convert at a higher rate than our previous manual efforts.",
      name: "Michael Johnson",
      role: "Chief Revenue Officer",
    },
  ];

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
  
  return (
    <>
      <Navbar />
      
      {/* Hero Section with updated subtitle */}
      <Hero />
      
      {/* Stats Section */}
      <section id="stats" className="py-16 bg-dark-lighter">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center font-orbitron">
            Passive Sales Strategy Is <span className="text-neon animate-glow-pulse">Costing You Growth</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 text-center font-titillium">
            Are you missing out on sales because your outreach isn't actively engaging decision-makers?
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                percentage={stat.percentage}
                description={stat.description}
                source={stat.source}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Timeline Section */}
      <ProcessTimeline />
      
      {/* Why AI Section */}
      <section id="why-ai" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-orbitron">
              Why <span className="text-neon animate-glow-pulse">AI?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-2 font-titillium">
              <strong>Humans fail at routine. But excel at relationships.</strong>
            </p>
            <p className="text-gray-400 max-w-2xl mx-auto font-titillium">
              
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="glassmorphism rounded-lg p-6 transition-all duration-300 hover:shadow-neon group"
              >
                <div className="bg-dark-lighter p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 group-hover:animate-border-glow">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-titillium font-bold text-white mb-2 group-hover:text-neon transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Data Privacy Section */}
      <section id="data-privacy" className="py-16 bg-dark-lighter">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-orbitron">
                Data Privacy & <span className="text-neon animate-glow-pulse">Compliance</span>
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                <strong>Fully GDPR-compliant.</strong>
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <ArrowRight size={20} className="text-neon" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-titillium font-medium">No Personal Data</h4>
                    <p className="text-gray-300">We don't store/process personal data</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <ArrowRight size={20} className="text-neon" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-titillium font-medium">Public Data Only</h4>
                    <p className="text-gray-300">Legal, publicly available sources</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <ArrowRight size={20} className="text-neon" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-titillium font-medium">Purpose-Driven</h4>
                    <p className="text-gray-300">Only relevant decision-makers</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <ArrowRight size={20} className="text-neon" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-titillium font-medium">Easy Opt-Out</h4>
                    <p className="text-gray-300">One-click unsubscribe always available</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="w-full lg:w-1/2 lg:pl-12">
              <div className="glassmorphism h-96 rounded-lg flex items-center justify-center p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-radial opacity-30"></div>
                <div className="text-center relative z-10">
                  <Fingerprint size={80} className="mx-auto text-neon mb-4 animate-glow-pulse" />
                  <h3 className="text-2xl font-titillium font-bold text-white mb-2">
                    Your Data Security Is Our Priority
                  </h3>
                  <p className="text-gray-300 max-w-md mx-auto">
                    We implement bank-level encryption and strict data access policies to ensure your information is always protected.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section id="team" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-orbitron">
              Our <span className="text-neon animate-glow-pulse">Team</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Meet the AI agents working around the clock to connect you with your next best clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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
      <section id="testimonials" className="py-16 bg-dark-lighter">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-orbitron">
              Our <span className="text-neon animate-glow-pulse">Clients</span> Say
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Hear from businesses that have transformed their outreach with our AI-powered solution.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                name={testimonial.name}
                role={testimonial.role}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section id="cta" className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-orbitron">
              Ready to <span className="text-neon animate-glow-pulse">Transform</span> Your Sales Outreach?
            </h2>
            <p className="text-xl text-gray-300 mb-8 font-titillium">
              Experience how our AI-powered solution can revolutionize your lead generation.
            </p>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <FAQSection />
      
      <Footer />
    </>
  );
};

export default Index;
