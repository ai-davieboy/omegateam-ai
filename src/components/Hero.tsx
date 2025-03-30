
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  const [matrixChars, setMatrixChars] = useState<JSX.Element[]>([]);
  
  useEffect(() => {
    const createMatrixChar = () => {
      const chars = "01";
      const randomChar = chars[Math.floor(Math.random() * chars.length)];
      const x = Math.random() * window.innerWidth;
      const delay = Math.random() * 10;
      const duration = 10 + Math.random() * 20;
      const size = Math.random() * 18 + 10;
      
      return (
        <div
          key={`${x}-${Date.now()}`}
          className="matrix-code animate-matrix-fall"
          style={{
            left: `${x}px`,
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
            fontSize: `${size}px`,
          }}
        >
          {randomChar}
        </div>
      );
    };
    
    // Generate initial set of matrix characters
    const initialChars = Array.from({ length: 50 }, () => createMatrixChar());
    setMatrixChars(initialChars);
    
    // Add new characters periodically
    const interval = setInterval(() => {
      setMatrixChars(prevChars => {
        if (prevChars.length > 100) {
          return [...prevChars.slice(-80), createMatrixChar()];
        }
        return [...prevChars, createMatrixChar()];
      });
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Matrix effect */}
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        {matrixChars}
      </div>
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="max-w-3xl mx-auto">
            {/* Main headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight font-orbitron">
              <span className="block text-neon animate-glow-pulse">
                AI LEAD GENERATION SWARM
              </span>
            </h1>
            
            {/* Subheadline - with updated capitalization */}
            <h2 className="text-xl md:text-2xl text-gray-300 mb-8 font-titillium leading-relaxed">
              Working 24/7 to Find, Engage, and Convert Your
              <span className="block">Ideal Clients Without Human Intervention</span>
            </h2>
            
            {/* CTA Button - updated text and centered */}
            <div className="flex justify-center">
              <Link to="/contact">
                <Button className="bg-neon text-dark hover:bg-transparent hover:text-neon border border-neon text-lg px-8 py-6 shadow-neon hover:shadow-neon-strong transition-all duration-300">
                  Start Converting Clients Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
