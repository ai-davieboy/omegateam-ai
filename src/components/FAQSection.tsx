
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  const faqs: FAQItem[] = [
    {
      question: "Do you guarantee conversions from your outreach?",
      answer: (
        <>
          <p className="text-gray-300 mb-2">No. Here's what we do guarantee:</p>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li className="text-gray-300"><strong className="text-neon">Perfect Targeting:</strong> We reach the right buyer personas, fully aligned with your ICP.</li>
            <li className="text-gray-300"><strong className="text-neon">Relentless Optimization:</strong> Through ongoing A/B testing, we maximize message open rates and replies.</li>
            <li className="text-gray-300"><strong className="text-neon">Best Effort Execution:</strong> If your offer is strong and the timing is right, we give it every possible edge to succeed.</li>
          </ul>
          <p className="text-gray-300">Ultimately, conversions depend on market demand and the strength of your proposition. We bring the tools, strategy, and execution—your offer seals the deal.</p>
        </>
      )
    },
    {
      question: "Do you use LinkedIn DMs or cold calls for outreach?",
      answer: (
        <>
          <p className="text-gray-300 mb-2">No. We don't cold call or slide into LinkedIn DMs.</p>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li className="text-gray-300">Cold calls interrupt people during their workday when they're focused on operational priorities — it's intrusive and rarely well-received.</li>
            <li className="text-gray-300">LinkedIn is perceived as a career and networking space, not a sales channel — many professionals find business pitches there off-putting or inappropriate.</li>
          </ul>
          <p className="text-gray-300">We use work email — it respects the prospect's time, allows thoughtful review, and consistently delivers the best results for high-ticket B2B sales.</p>
        </>
      )
    },
    {
      question: "What kind of businesses do you work with?",
      answer: "We work with B2B companies across industries who target specific decision-makers and have a clear value proposition."
    },
    {
      question: "What's the typical ROI timeline?",
      answer: "Most clients see initial results within 2-4 weeks, with positive ROI achieved within the first 6-8 weeks depending on sales cycle length."
    }
  ];
  
  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  return (
    <div className="container mx-auto px-4 py-16 bg-dark-lighter">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-orbitron">
          Frequently <span className="text-neon animate-glow-pulse">Asked Questions</span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Get answers to common questions about our AI-powered outreach solution.
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className="mb-4 glassmorphism rounded-lg overflow-hidden transition-all duration-300 hover:shadow-neon"
          >
            <button
              className="flex justify-between items-center w-full p-5 text-left"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-titillium font-medium text-white">{faq.question}</h3>
              <div className="flex-shrink-0 ml-4">
                {activeIndex === index ? (
                  <ChevronUp className="text-neon" />
                ) : (
                  <ChevronDown className="text-neon" />
                )}
              </div>
            </button>
            
            <div 
              className={`transition-all duration-300 ease-in-out ${
                activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
              } overflow-hidden`}
            >
              <div className="p-5 pt-0 border-t border-gray-700">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
