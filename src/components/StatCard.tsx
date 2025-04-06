
import { useState, useEffect, useRef } from 'react';

interface StatCardProps {
  percentage: string;
  description: string;
  source: string;
}

const StatCard = ({ percentage, description, source }: StatCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const targetNumber = parseInt(percentage.replace(/[^0-9]/g, ''));
  
  // Animation for count increase
  useEffect(() => {
    if (isVisible && count < targetNumber) {
      const interval = setInterval(() => {
        setCount(prevCount => {
          const increment = Math.max(1, Math.floor(targetNumber / 30));
          const nextCount = prevCount + increment;
          return nextCount >= targetNumber ? targetNumber : nextCount;
        });
      }, 30);
      
      return () => clearInterval(interval);
    }
  }, [isVisible, count, targetNumber]);
  
  // Intersection observer to trigger animation when card is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      ref={cardRef}
      className="glassmorphism rounded-lg p-6 transition-all duration-300 group"
    >
      <div className="flex flex-col items-start space-y-4">
        <span className="text-4xl md:text-5xl font-orbitron text-neon group-hover:animate-glow-pulse">
          {isVisible ? `${count}${percentage.includes('%') ? '%' : ''}` : '0'}
        </span>
        <p className="text-gray-300 text-lg">{description}</p>
        <p className="text-neon/60 text-sm italic">({source})</p>
      </div>
    </div>
  );
};

export default StatCard;
