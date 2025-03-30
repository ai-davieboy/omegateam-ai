
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Activity, Brain, CheckCircle, Code, Database, FileSpreadsheet, Lightbulb, Link as LinkIcon, Mail, MessageCircle, MessagesSquare, Rocket, Users } from 'lucide-react';

const Features = () => {
  const capabilities = [
    {
      title: "AI Lead Scoring",
      description: "Prioritize prospects based on likelihood to convert using proprietary algorithms.",
      icon: <Brain className="w-10 h-10 text-neon" />,
      benefits: ["Focuses effort on high-value targets", "Reduces wasted outreach", "Continuously improves via ML"],
    },
    {
      title: "Dynamic Sequencing",
      description: "Smart follow-up schedules adjusted in real-time based on engagement patterns.",
      icon: <Activity className="w-10 h-10 text-neon" />,
      benefits: ["Perfect timing for each prospect", "Never too frequent or too sparse", "Optimizes for response rates"],
    },
    {
      title: "Hyper-Personalization",
      description: "Messages customized to each prospect's role, industry, and potential pain points.",
      icon: <Users className="w-10 h-10 text-neon" />,
      benefits: ["Beyond basic mail merge", "Industry-specific insights", "Role-based messaging"],
    },
    {
      title: "Intent Signal Analysis",
      description: "AI interprets response tone and content to gauge interest levels and next steps.",
      icon: <MessageCircle className="w-10 h-10 text-neon" />,
      benefits: ["Detects subtle buying signals", "Eliminates misinterpretation", "Routes qualified leads instantly"],
    }
  ];

  const integrations = [
    {
      name: "Email Platforms",
      description: "Seamlessly integrates with Gmail, Outlook, and other major email providers.",
      icon: <Mail className="w-8 h-8 text-neon" />,
      connectText: "Connect your email"
    },
    {
      name: "CRM Systems",
      description: "Bi-directional sync with Salesforce, HubSpot, Pipedrive and other CRM platforms.",
      icon: <Database className="w-8 h-8 text-neon" />,
      connectText: "Connect your CRM"
    },
    {
      name: "LinkedIn",
      description: "Enriches prospect data with professional insights from LinkedIn (public data only).",
      icon: <LinkIcon className="w-8 h-8 text-neon" />,
      connectText: "Enhance with LinkedIn"
    },
    {
      name: "Data Providers",
      description: "Integrates with ZoomInfo, Apollo, and other B2B data sources for enhanced targeting.",
      icon: <FileSpreadsheet className="w-8 h-8 text-neon" />,
      connectText: "Connect data sources"
    },
    {
      name: "Analytics",
      description: "Pushes performance metrics to your preferred dashboarding and BI tools.",
      icon: <Activity className="w-8 h-8 text-neon" />,
      connectText: "Connect analytics"
    },
    {
      name: "Custom Webhooks",
      description: "Trigger custom workflows in your existing tools via our flexible API.",
      icon: <Code className="w-8 h-8 text-neon" />,
      connectText: "Configure API"
    },
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$1,500",
      period: "/month",
      description: "Perfect for teams starting with AI outreach",
      features: [
        "Up to 1,000 prospects/month",
        "Email outreach only",
        "3 AI sequence templates",
        "Basic CRM integration",
        "Standard support"
      ],
      cta: "Get Started",
      highlighted: false
    },
    {
      name: "Growth",
      price: "$3,500",
      period: "/month",
      description: "For scaling teams with serious growth goals",
      features: [
        "Up to 5,000 prospects/month",
        "Email + LinkedIn outreach",
        "10 AI sequence templates",
        "Full CRM integration",
        "Priority support",
        "Custom reporting",
        "A/B testing capabilities"
      ],
      cta: "Most Popular",
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For organizations with complex requirements",
      features: [
        "Unlimited prospects",
        "Multi-channel outreach",
        "Custom AI development",
        "Enterprise integrations",
        "Dedicated success manager",
        "Compliance reviews",
        "White-labeled solution",
        "On-premise deployment option"
      ],
      cta: "Contact Us",
      highlighted: false
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
              AI-Powered <span className="text-neon animate-glow-pulse">Features</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 font-titillium">
              Discover the cutting-edge capabilities that make our AI sales outreach platform the most effective solution for modern B2B businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Core Capabilities Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4 font-orbitron">
              Core <span className="text-neon animate-glow-pulse">Capabilities</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our AI engine combines multiple technologies to create an outbound machine that works 24/7.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <div 
                key={index} 
                className="glassmorphism rounded-lg p-8 transition-all duration-300 hover:shadow-neon group"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-6 bg-dark-lighter p-4 rounded-full w-20 h-20 flex items-center justify-center group-hover:animate-border-glow">
                    {capability.icon}
                  </div>
                  <h3 className="text-2xl font-orbitron text-neon mb-3 group-hover:animate-glow-pulse">
                    {capability.title}
                  </h3>
                  <p className="text-gray-300 mb-6">{capability.description}</p>
                  <div className="mt-auto">
                    <h4 className="text-white mb-3 font-medium">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {capability.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start text-gray-300">
                          <CheckCircle size={18} className="text-neon mr-2 flex-shrink-0 mt-1" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-16 bg-dark-lighter">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4 font-orbitron">
              Seamless <span className="text-neon animate-glow-pulse">Integrations</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Connect our AI outreach platform with your existing tools for a frictionless workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrations.map((integration, index) => (
              <div 
                key={index} 
                className="glassmorphism rounded-lg p-6 transition-all duration-300 hover:shadow-neon group"
              >
                <div className="flex items-start">
                  <div className="bg-dark p-3 rounded-full flex items-center justify-center mr-4 group-hover:animate-border-glow">
                    {integration.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-titillium text-white mb-2">{integration.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{integration.description}</p>
                    <Button variant="outline" className="border-neon text-neon hover:bg-neon hover:text-black transition-all duration-300">
                      {integration.connectText}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4 font-orbitron">
              See Our <span className="text-neon animate-glow-pulse">AI in Action</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Watch a brief demo of how our platform transforms your sales outreach process.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Video Placeholder */}
            <div className="aspect-w-16 aspect-h-9 glassmorphism rounded-lg overflow-hidden">
              <div className="w-full h-full bg-dark-lighter flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-radial opacity-30"></div>
                <div className="relative z-10 text-center">
                  <Rocket size={60} className="mx-auto text-neon mb-4 animate-glow-pulse" />
                  <h3 className="text-2xl font-titillium font-bold text-white mb-2">
                    Product Demo Video
                  </h3>
                  <p className="text-gray-300 mb-6">
                    See how our AI outreach platform works in this demonstration.
                  </p>
                  <Button className="bg-neon text-dark hover:bg-transparent hover:text-neon border border-neon shadow-neon hover:shadow-neon-strong transition-all duration-300">
                    Watch Demo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-dark-lighter">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4 font-orbitron">
              Simple, Transparent <span className="text-neon animate-glow-pulse">Pricing</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Choose the plan that fits your business needs and scale as you grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`rounded-lg overflow-hidden transition-all duration-300 ${
                  plan.highlighted 
                    ? 'border-2 border-neon shadow-neon relative transform hover:-translate-y-1' 
                    : 'glassmorphism hover:shadow-neon'
                }`}
              >
                {plan.highlighted && (
                  <div className="bg-neon text-black py-1 px-4 absolute top-0 left-0 right-0 text-center font-medium">
                    {plan.cta}
                  </div>
                )}
                <div className={`p-8 ${plan.highlighted ? 'pt-12' : ''}`}>
                  <h3 className="text-2xl font-orbitron text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-3xl font-bold text-neon">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-gray-300">
                        <CheckCircle size={18} className="text-neon mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button className={`w-full ${
                      plan.highlighted 
                        ? 'bg-neon text-black hover:bg-transparent hover:text-neon' 
                        : 'bg-transparent text-neon hover:bg-neon hover:text-black'
                      } border border-neon transition-all duration-300`}
                    >
                      {plan.highlighted ? plan.cta : plan.cta}
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400">
              All plans include a 14-day guarantee. <br/>
              Need custom features? <Link to="/contact" className="text-neon hover:underline">Contact us</Link> for a tailored solution.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Lightbulb size={50} className="mx-auto text-neon mb-6 animate-glow-pulse" />
            <h2 className="text-3xl font-bold text-white mb-4 font-orbitron">
              Ready to <span className="text-neon animate-glow-pulse">Revolutionize</span> Your Sales Outreach?
            </h2>
            <p className="text-xl text-gray-300 mb-8 font-titillium">
              Our AI agents are standing by to help you reach more prospects with less effort.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button className="bg-neon text-dark hover:bg-transparent hover:text-neon border border-neon shadow-neon hover:shadow-neon-strong transition-all duration-300 text-lg px-8 py-6">
                  Request Demo
                </Button>
              </Link>
              <Link to="/case-studies">
                <Button className="bg-transparent text-white hover:text-neon border border-white/20 hover:border-neon transition-all duration-300 text-lg px-8 py-6">
                  View Case Studies
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Features;
