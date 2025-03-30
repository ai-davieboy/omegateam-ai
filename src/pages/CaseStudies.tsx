
import { useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUp, ChevronRight, LineChart, MailOpen, Percent, Target, Zap } from 'lucide-react';

const CaseStudies = () => {
  // Parallax effect for sections
  useEffect(() => {
    const handleScroll = () => {
      const parallaxElements = document.querySelectorAll('.parallax');
      
      parallaxElements.forEach((element) => {
        const distance = window.scrollY;
        const elementOffset = (element as HTMLElement).offsetTop;
        const windowHeight = window.innerHeight;
        
        if (distance > elementOffset - windowHeight) {
          const speed = parseFloat((element as HTMLElement).dataset.speed || '0.1');
          (element as HTMLElement).style.transform = `translateY(${(distance - elementOffset + windowHeight) * speed}px)`;
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const caseStudies = [
    {
      id: "techsolutions",
      company: "TechSolutions Inc.",
      industry: "SaaS",
      challenge: "Struggling to scale outreach for enterprise clients while maintaining personalization",
      solution: "Deployed AI outreach to 5,000+ prospects with industry-specific messaging",
      results: {
        meetings: "327% increase in meetings booked",
        response: "42% higher response rate",
        time: "Sales team saved 35+ hours per week",
        roi: "733% ROI within first quarter"
      },
      testimonial: {
        quote: "The AI swarm completely transformed our outbound process. We're booking more meetings with less effort, and our sales team can focus on actually closing deals instead of prospecting.",
        author: "Sarah Johnson",
        position: "VP of Sales, TechSolutions Inc."
      },
      metrics: [
        { label: "Meetings Booked", before: 12, after: 51, unit: "per month" },
        { label: "Response Rate", before: 7, after: 28, unit: "%" },
        { label: "Time Saved", value: 35, unit: "hours/week" },
        { label: "Pipeline Generated", value: "$1.8M", unit: "" }
      ]
    },
    {
      id: "globalfinance",
      company: "Global Finance Partners",
      industry: "Financial Services",
      challenge: "Highly regulated industry limiting outreach options and facing prospect fatigue",
      solution: "Compliance-first AI outreach with dynamically adjusted messaging based on engagement",
      results: {
        meetings: "215% increase in qualified opportunities",
        response: "63% decrease in unsubscribe rates",
        time: "90% reduction in compliance review time",
        roi: "412% ROI over six months"
      },
      testimonial: {
        quote: "Working in a regulated industry, we were skeptical about AI outreach. OmegaTeam's solution not only maintained our compliance standards but dramatically improved our results.",
        author: "Michael Chen",
        position: "Director of Business Development, Global Finance Partners"
      },
      metrics: [
        { label: "Qualified Opportunities", before: 8, after: 25, unit: "per month" },
        { label: "Unsubscribe Rate", before: 4.7, after: 1.7, unit: "%" },
        { label: "Compliance Review", before: 48, after: 4, unit: "hours/week" },
        { label: "Client Acquisition Cost", before: "$3,200", after: "$1,100", unit: "" }
      ]
    },
    {
      id: "healthinnovators",
      company: "Health Innovators Lab",
      industry: "Healthcare Technology",
      challenge: "Long sales cycles with multiple stakeholders making consistent follow-up difficult",
      solution: "Multi-thread AI outreach targeting different decision-makers with role-specific messaging",
      results: {
        meetings: "189% increase in demos scheduled",
        response: "47% decrease in sales cycle length",
        time: "60% reduction in CRM data entry",
        roi: "522% ROI within eight months"
      },
      testimonial: {
        quote: "The multi-thread approach has been game-changing for us. We're now able to engage all stakeholders in the buying process simultaneously, significantly shortening our sales cycle.",
        author: "Dr. Alisha Patel",
        position: "Chief Commercial Officer, Health Innovators Lab"
      },
      metrics: [
        { label: "Demos Scheduled", before: 9, after: 26, unit: "per month" },
        { label: "Sales Cycle", before: 94, after: 50, unit: "days" },
        { label: "CRM Data Entry", before: 15, after: 6, unit: "hours/week" },
        { label: "Annual Contract Value", before: "$42K", after: "$67K", unit: "average" }
      ]
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-orbitron">
              Our Success <span className="text-neon animate-glow-pulse">Stories</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 font-titillium">
              See how our AI-powered outreach has transformed sales pipelines for companies across industries.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {caseStudies.map((study) => (
              <a
                key={study.id}
                href={`#${study.id}`}
                className="bg-transparent border border-neon/30 hover:border-neon text-white px-4 py-2 rounded-lg transition-all duration-300 hover:shadow-neon flex items-center"
              >
                <span>{study.company}</span>
                <ChevronRight size={16} className="ml-1 text-neon" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      {caseStudies.map((study, index) => (
        <section 
          id={study.id} 
          key={study.id}
          className={`py-16 ${index % 2 === 1 ? 'bg-dark-lighter' : ''} relative overflow-hidden`}
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="mb-3">
                  <span className="bg-neon/20 text-neon px-3 py-1 rounded-full text-sm font-medium">
                    {study.industry}
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4 font-orbitron">
                  {study.company}
                </h2>
                
                <div className="space-y-6 mb-8">
                  <div className="space-y-2">
                    <h3 className="text-xl font-titillium font-semibold text-white">Challenge</h3>
                    <p className="text-gray-300">{study.challenge}</p>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-titillium font-semibold text-white">Solution</h3>
                    <p className="text-gray-300">{study.solution}</p>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-titillium font-semibold text-white">Results</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="glassmorphism rounded-lg p-4">
                        <div className="flex items-start">
                          <ArrowUp className="text-neon mr-2 flex-shrink-0" />
                          <p className="text-gray-300 text-sm">{study.results.meetings}</p>
                        </div>
                      </div>
                      <div className="glassmorphism rounded-lg p-4">
                        <div className="flex items-start">
                          <MailOpen className="text-neon mr-2 flex-shrink-0" />
                          <p className="text-gray-300 text-sm">{study.results.response}</p>
                        </div>
                      </div>
                      <div className="glassmorphism rounded-lg p-4">
                        <div className="flex items-start">
                          <Zap className="text-neon mr-2 flex-shrink-0" />
                          <p className="text-gray-300 text-sm">{study.results.time}</p>
                        </div>
                      </div>
                      <div className="glassmorphism rounded-lg p-4">
                        <div className="flex items-start">
                          <Percent className="text-neon mr-2 flex-shrink-0" />
                          <p className="text-gray-300 text-sm">{study.results.roi}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Testimonial */}
                <div className="glassmorphism rounded-lg p-6 mb-6 hover:shadow-neon transition-all duration-300">
                  <p className="text-gray-300 italic mb-4">"{study.testimonial.quote}"</p>
                  <div>
                    <p className="text-white font-medium">{study.testimonial.author}</p>
                    <p className="text-neon/80 text-sm">{study.testimonial.position}</p>
                  </div>
                </div>
                
                <Link to="/contact">
                  <Button className="bg-transparent border border-neon text-neon hover:bg-neon hover:text-black transition-all duration-300 shadow-neon hover:shadow-neon-strong">
                    Get Similar Results
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
              </div>
              
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                {/* Key Metrics Visualization */}
                <div className="glassmorphism rounded-lg p-6 relative">
                  <div className="absolute inset-0 bg-gradient-radial opacity-20"></div>
                  <h3 className="text-xl font-titillium font-semibold text-white mb-6 relative z-10 flex items-center">
                    <LineChart className="text-neon mr-2" />
                    Key Performance Metrics
                  </h3>
                  
                  <div className="space-y-8 relative z-10">
                    {study.metrics.map((metric, i) => (
                      <div key={i} className="relative">
                        <div className="flex justify-between mb-2">
                          <span className="text-white font-medium">{metric.label}</span>
                          {'before' in metric ? (
                            <span className="text-neon font-medium">
                              {metric.before} → {metric.after} {metric.unit}
                            </span>
                          ) : (
                            <span className="text-neon font-medium">
                              {metric.value} {metric.unit}
                            </span>
                          )}
                        </div>
                        
                        {'before' in metric && (
                          <div className="h-2 w-full bg-gray-800 rounded-full mb-1 overflow-hidden">
                            <div 
                              className="h-full bg-gray-600 rounded-full"
                              style={{ width: `${Math.min(100, (metric.before as number) * 2)}%` }}
                            ></div>
                          </div>
                        )}
                        
                        {'after' in metric && (
                          <div className="h-3 w-full bg-gray-800 rounded-full overflow-hidden mt-1">
                            <div 
                              className="h-full bg-neon/80 animate-pulse rounded-full shadow-neon"
                              style={{ width: `${Math.min(100, (metric.after as number) * 2)}%` }}
                            ></div>
                          </div>
                        )}
                        
                        {'value' in metric && typeof metric.value === 'string' && !metric.value.includes('$') && (
                          <div className="h-3 w-full bg-gray-800 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-neon/80 animate-pulse rounded-full shadow-neon"
                              style={{ width: '85%' }}
                            ></div>
                          </div>
                        )}
                        
                        {'value' in metric && (typeof metric.value === 'number' || metric.value.includes('$')) && (
                          <div className="h-3 w-full bg-gray-800 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-neon/80 animate-pulse rounded-full shadow-neon"
                              style={{ 
                                width: typeof metric.value === 'number' 
                                  ? `${Math.min(100, metric.value * 2)}%`
                                  : '75%'
                              }}
                            ></div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  
                  {/* Light trails as decorative elements */}
                  <div className="absolute top-1/4 -left-4 w-8 h-1 bg-neon/30 rounded-full blur-sm"></div>
                  <div className="absolute bottom-1/3 -right-4 w-8 h-1 bg-neon/30 rounded-full blur-sm"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-neon/5 rounded-full blur-3xl"></div>
          <div className="parallax absolute -top-20 -left-20 w-60 h-60 bg-neon/3 rounded-full blur-3xl" data-speed="0.05"></div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-16 bg-dark-lighter relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Target size={50} className="mx-auto text-neon mb-6 animate-glow-pulse" />
            <h2 className="text-3xl font-bold text-white mb-4 font-orbitron">
              Ready to <span className="text-neon animate-glow-pulse">Achieve</span> These Results?
            </h2>
            <p className="text-xl text-gray-300 mb-8 font-titillium">
              Schedule a strategy call to see how our AI outreach solution can transform your sales pipeline.
            </p>
            <Link to="/contact">
              <Button className="bg-neon text-dark hover:bg-transparent hover:text-neon border border-neon shadow-neon hover:shadow-neon-strong transition-all duration-300 text-lg px-8 py-6">
                Book a Strategy Call
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CaseStudies;
