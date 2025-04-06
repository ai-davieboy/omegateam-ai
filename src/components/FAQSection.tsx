
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What industries do you support?",
      answer: "We support a wide range of B2B industries including SaaS, professional services, manufacturing, healthcare, fintech, and more. Our AI outreach system is adaptable to various selling contexts and can be customized for your specific industry needs."
    },
    {
      question: "How do you comply with privacy regulations?",
      answer: "We strictly adhere to GDPR, CCPA, and other relevant privacy regulations. We only use publicly available business information, implement rigorous data security measures, and provide clear opt-out mechanisms for all communications."
    },
    {
      question: "How quickly can I expect results?",
      answer: "Most clients see initial positive responses within the first 2-4 weeks. However, building a sustainable pipeline typically takes 2-3 months as our AI system learns and optimizes based on response patterns specific to your market."
    },
    {
      question: "Do I need to prepare any materials?",
      answer: "Yes, we'll need your ideal client profile, value proposition, and any existing marketing materials you have. We'll also need access to a team member who can provide industry expertise during the onboarding process."
    },
    {
      question: "How is this different from traditional outreach?",
      answer: "Unlike human-driven outreach that's limited by time and consistency, our AI operates 24/7, maintains perfect consistency, learns continuously from interactions, and can manage thousands of simultaneous conversations without quality degradation."
    },
    {
      question: "What happens when someone responds positively?",
      answer: "When we identify a qualified opportunity, we immediately transfer the conversation to your sales team via your CRM or email, providing full context and conversation history so you can smoothly continue the relationship-building process."
    }
  ];

  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-orbitron">
            FAQ<span className="text-neon animate-glow-pulse">s</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-titillium">
            Get answers to common questions about our AI-powered outreach solution.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto glassmorphism p-6 rounded-lg">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-white/10 last:border-b-0">
                <AccordionTrigger className="text-white font-titillium text-left hover:text-neon py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 font-titillium">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
