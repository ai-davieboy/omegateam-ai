
import { useState, useEffect } from 'react';

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
    const initialChars = Array.from({ length: 100 }, () => createMatrixChar());
    setMatrixChars(initialChars);
    
    // Add new characters periodically
    const interval = setInterval(() => {
      setMatrixChars(prevChars => {
        if (prevChars.length > 150) {
          return [...prevChars.slice(-120), createMatrixChar()];
        }
        return [...prevChars, createMatrixChar()];
      });
    }, 500); // Faster generation interval
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Matrix effect with increased opacity */}
      <div className="absolute inset-0 overflow-hidden opacity-40 pointer-events-none">
        {matrixChars}
      </div>
      
      {/* Radial gradient overlay with reduced opacity */}
      <div className="absolute inset-0 bg-gradient-radial opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="max-w-3xl mx-auto">
            {/* Main headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-12 text-white leading-tight font-orbitron">
              <span className="text-white">LEAD GENERATION</span>{" "}
              <span className="text-neon animate-glow-pulse">AI SWARM</span>
            </h1>
            
            {/* Subheadline - with updated capitalization and bold font */}
            <h2 className="text-xl md:text-2xl text-gray-300 mb-8 font-titillium leading-relaxed font-bold">
              Working 24/7 to Find, Engage, and Convert Your
              <span className="block">Ideal Clients Without Human Intervention</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
