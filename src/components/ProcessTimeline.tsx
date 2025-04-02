
import { Users, Search, MessageCircle, UserCheck } from 'lucide-react';

const ProcessTimeline = () => {
  const steps = [
    {
      icon: <Users className="text-neon w-8 h-8" />,
      description: "Define your ICP, buyer persona, and USP. Share a contact person for warm leads.",
    },
    {
      icon: <Search className="text-neon w-8 h-8" />,
      description: "We identify qualified companies and decision-makers. Emails are retrieved and verified for accuracy.",
    },
    {
      icon: <MessageCircle className="text-neon w-8 h-8" />,
      description: "AI agents email decision-makers on your behalf. Responses are routed anonymously.",
    },
    {
      icon: <UserCheck className="text-neon w-8 h-8" />,
      description: "We respond based on replies: schedule calls, send info, follow up, identify right contacts.",
    },
  ];

  return (
    <div className="w-full px-4 py-16 bg-dark">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-orbitron">
            How We <span className="text-neon animate-glow-pulse">Can Help</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6 font-titillium">
            <span className="font-titillium">We solve one big problem:</span> Most sales reps hate and struggle with the first stage of the sales cycle — prospecting.
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
              <div className="relative z-10 flex flex-col items-center">
                {/* Icon - centered with more spacing */}
                <div className="mb-8 bg-dark-lighter p-4 rounded-full w-16 h-16 flex items-center justify-center group-hover:animate-border-glow transition-all duration-300">
                  {step.icon}
                </div>
                
                {/* Description */}
                <p className="text-gray-300 group-hover:text-white transition-colors text-center">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessTimeline;
