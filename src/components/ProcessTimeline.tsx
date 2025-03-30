
import { Users, Search, MessageCircle, UserCheck } from 'lucide-react';

const ProcessTimeline = () => {
  const steps = [
    {
      title: 'DEFINE',
      icon: <Users className="text-neon w-8 h-8" />,
      description: "Define your ICP, buyer persona, and USP. Share a contact person for warm leads.",
    },
    {
      title: 'FIND',
      icon: <Search className="text-neon w-8 h-8" />,
      description: "We identify qualified companies and decision-makers. Emails are retrieved and verified for accuracy.",
    },
    {
      title: 'ENGAGE',
      icon: <MessageCircle className="text-neon w-8 h-8" />,
      description: "AI agents email decision-makers on your behalf. Responses are routed anonymously.",
    },
    {
      title: 'CONVERT',
      icon: <UserCheck className="text-neon w-8 h-8" />,
      description: "We respond based on replies: schedule calls, send info, follow up, identify right contacts.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-orbitron">
          How We <span className="text-neon animate-glow-pulse">Can Help</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6 font-titillium">
          We solve one big problem: <span className="font-bold">Most sales reps hate and struggle with the first stage of the sales cycle — prospecting.</span>
        </p>
        <p className="text-gray-400 max-w-2xl mx-auto font-titillium">
          Our AI swarm handles this automatically and efficiently, freeing your team to do what they do best: build relationships and close deals. 
          This isn't just an upgrade. It's the <span className="text-neon font-bold">future of sales</span>.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <div 
            key={index} 
            className="glassmorphism rounded-lg p-6 transition-all duration-500 hover:shadow-neon relative overflow-hidden group"
          >
            {/* Step number in glowing circle */}
            <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-dark-lighter border border-neon/30 flex items-center justify-center shadow-neon">
              <span className="text-neon text-sm font-bold">{index + 1}</span>
            </div>
            
            <div className="relative z-10 pt-8">
              {/* Icon */}
              <div className="mb-4 bg-dark-lighter p-4 rounded-full w-16 h-16 flex items-center justify-center group-hover:animate-border-glow transition-all duration-300">
                {step.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-orbitron text-neon mb-3 group-hover:animate-glow-pulse">
                {step.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-300 group-hover:text-white transition-colors">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessTimeline;
