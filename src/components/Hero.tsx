
import { useState, useEffect } from 'react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Advanced gradient background with stronger colors */}
      <div className="absolute inset-0 bg-black">
        {/* Dark teal radial gradient from top right - increased opacity */}
        <div className="absolute inset-0 bg-gradient-to-bl from-neon/30 via-neon/5 to-transparent opacity-100"></div>
        
        {/* Bottom left teal accent - increased size and opacity */}
        <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-gradient-radial from-neon/15 via-neon/5 to-transparent opacity-70"></div>
        
        {/* Bottom right teal accent - increased intensity */}
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-neon/20 via-neon/10 to-transparent"></div>
        
        {/* Upper right corner glow - enhanced brightness and blur */}
        <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-radial from-neon/30 via-neon/10 to-transparent opacity-80 blur-3xl"></div>
      </div>
      
      {/* Grid overlay for tech pattern effect - increased contrast */}
      <div className="absolute inset-0 opacity-20"
           style={{
             backgroundImage: 'linear-gradient(rgba(50, 190, 163, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(50, 190, 163, 0.15) 1px, transparent 1px)',
             backgroundSize: '40px 40px',
           }}></div>
      
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
