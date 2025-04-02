
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Leaf, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark-lighter pt-16 pb-8 border-t border-neon/10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <span className="text-neon text-3xl mr-2 font-orbitron">Ω</span>
              <span className="text-white font-orbitron text-lg">OmegaTeam</span>
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              AI lead generation swarm working 24/7 to find, engage, and convert your Ideal clients without human intervention.
            </p>
          </div>
          
          <div>
            <div className="flex items-center mb-4">
              <Leaf size={18} className="text-neon mr-2 flex-shrink-0" />
              <h4 className="text-white font-titillium text-lg">Our Commitment to Sustainability​</h4>
            </div>
            <p className="text-gray-400 text-sm">
              For every client partnership, we establish and maintain a beehive, supporting biodiversity and underlining the vital role bees play in our ecosystem.
            </p>
            <div className="mt-4">
              <a href="https://github.com/omegateam" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-neon transition-colors">
                <Github size={18} className="mr-2" />
                <span className="text-sm">GitHub</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-titillium text-lg mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin size={18} className="text-neon mt-0.5 mr-2 flex-shrink-0" />
                <p className="text-gray-400 text-sm">
                  Dubai Silicon Oasis – Free Zone<br />
                  Techno Point Building – Dubai – UAE
                </p>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="text-neon mr-2 flex-shrink-0" />
                <p className="text-gray-400 text-sm">+971 4-123-4567</p>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="text-neon mr-2 flex-shrink-0" />
                <p className="text-gray-400 text-sm">hello@omegateam.ai</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} omegateam.ai. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm mt-2 md:mt-0">
              Developed with advanced AI technology
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
