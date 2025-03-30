
import { useState, useEffect } from 'react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Simple radial gradient overlay */}
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
