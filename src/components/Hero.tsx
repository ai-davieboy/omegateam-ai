
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
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            {/* Logo at the top */}
            <div className="flex items-center mb-6">
              <span className="text-neon text-5xl mr-3 font-orbitron">Ω</span>
              <span className="text-white font-orbitron text-3xl">OmegaTeam</span>
            </div>
            
            {/* Main headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight font-orbitron">
              <span className="block text-neon animate-glow-pulse">
                AI LEAD GENERATION SWARM
              </span>
            </h1>
            
            {/* Subheadline */}
            <h2 className="text-xl md:text-2xl text-gray-300 mb-8 font-titillium leading-relaxed max-w-2xl">
              WORKING 24/7 TO FIND, ENGAGE, AND CONVERT YOUR
              <span className="block">IDEAL CLIENTS WITHOUT HUMAN INTERVENTION</span>
            </h2>
            
            {/* Process steps */}
            <div className="hidden md:flex items-center justify-between mb-12 max-w-xl">
              <div className="text-center">
                <div className="text-neon text-2xl font-orbitron animate-glow-pulse">DEFINE</div>
              </div>
              <div className="text-center">
                <div className="text-neon text-2xl font-orbitron animate-glow-pulse">FIND</div>
              </div>
              <div className="text-center">
                <div className="text-neon text-2xl font-orbitron animate-glow-pulse">ENGAGE</div>
              </div>
              <div className="text-center">
                <div className="text-neon text-2xl font-orbitron animate-glow-pulse">CONVERT</div>
              </div>
            </div>
            
            {/* Flow line illustration - we'll use SVG for this */}
            <div className="hidden md:block relative h-12 mb-12 max-w-xl">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 500 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,25 C125,-50 250,100 375,-50 C500,100 625,0 750,25"
                  stroke="#32bea3"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  className="animate-glow-pulse"
                />
                <circle cx="0" cy="25" r="6" fill="#32bea3" />
                <circle cx="166" cy="25" r="6" fill="#32bea3" />
                <circle cx="333" cy="25" r="6" fill="#32bea3" />
                <circle cx="500" cy="25" r="6" fill="#32bea3" />
              </svg>
            </div>
            
            {/* CTA Button */}
            <Link to="/contact">
              <Button className="bg-neon text-dark hover:bg-transparent hover:text-neon border border-neon text-lg px-8 py-6 shadow-neon hover:shadow-neon-strong transition-all duration-300">
                Get Started
              </Button>
            </Link>
          </div>
          
          {/* Right side - empty for now, would usually contain an image */}
          <div className="w-full lg:w-1/2 relative">
            {/* This space would be used for an image or animated graphic */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
