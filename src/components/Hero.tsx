import React from 'react';

const Hero = () => {
  // Handle click to create ripple effect
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const ripple = document.createElement('div');
    ripple.className = 'ripple';
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    
    e.currentTarget.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 800); // Match the animation duration
  };
  
  return (
    <div 
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden cursor-pointer"
      onClick={handleClick}
    >
      {/* Base dark background with deep teal hue */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-dark-lighter"></div>
      
      {/* Grid pattern with increased visibility */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(50, 190, 163, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(50, 190, 163, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 0 0' // Ensure proper alignment
        }}
      ></div>
      
      {/* Glowing orb in top right - cyberpunk inspiration */}
      <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-neon/5 blur-3xl opacity-80"></div>
      
      {/* Glowing arc bottom left */}
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-neon/10 blur-3xl opacity-70"></div>
      
      {/* Main glow in center for emphasis */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-1/2 bg-gradient-radial from-neon/20 via-neon/5 to-transparent opacity-80 blur-3xl"></div>
      
      {/* Content container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="max-w-3xl mx-auto">
            {/* Main headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-12 text-white leading-tight font-orbitron relative">
              <span className="text-white opacity-90">LEAD GENERATION</span>{" "}
              <div className="relative inline-block">
                <span className="text-neon animate-glow-pulse">AI SWARM</span>
                <div className="absolute -inset-1 bg-neon/10 blur-md rounded-lg -z-10"></div>
              </div>
            </h1>
            
            {/* Subheadline - with normal font weight (not bold) */}
            <h2 className="text-xl md:text-2xl text-gray-300 mb-6 font-titillium leading-relaxed font-normal">
              Working tirelessly, like bees, 24/7 to find, engage, and convert your ideal clients without human intervention.
            </h2>
            
            {/* Bee image below subtitle */}
            <div className="my-8 mx-auto max-w-xs">
              <img 
                src="/lovable-uploads/58ab9a42-99bd-4e57-ba35-ebea566ae17d.png" 
                alt="AI Swarm Bees on Honeycomb" 
                className="w-[37.5%] h-auto mx-auto drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
