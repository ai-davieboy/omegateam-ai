
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  const faqs: FAQItem[] = [
    {
      question: "Do you guarantee conversions from your outreach?",
      answer: "We guarantee precision targeting, clean data, and consistent follow-up — conversions depend on product-market fit."
    },
    {
      question: "How can AI agent swarms benefit my business?",
      answer: "You gain scalable outreach, 24/7 engagement, and cost-effective pipeline generation with zero manual effort."
    },
    {
      question: "Do you use LinkedIn DMs or cold calls for outreach?",
      answer: "No. Our AI operates via cold email using only publicly available and verified data. No scraping, no cold calls."
    },
    {
      question: "What kind of businesses do you work with?",
      answer: "We work with B2B companies across industries who target specific decision-makers and have a clear value proposition."
    },
    {
      question: "How is your solution GDPR compliant?",
      answer: "We only use publicly available business contact information, provide clear opt-out options, and don't process personal data beyond what's necessary for outreach."
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
    <div className="container mx-auto px-4 py-16">
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
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
