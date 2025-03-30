
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark-lighter pt-16 pb-8 border-t border-neon/10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between">
          <div className="w-full max-w-md">
            <Link to="/" className="flex items-center mb-4">
              <span className="text-neon text-3xl mr-2 font-orbitron">Ω</span>
              <span className="text-white font-orbitron text-xl">OmegaTeam</span>
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              AI lead generation swarm working 24/7 to find, engage, and convert your Ideal clients without human intervention.
            </p>
          </div>
          
          <div className="w-full max-w-md text-right">
            <h4 className="text-white font-titillium text-lg mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start justify-end">
                <p className="text-gray-400 text-right">
                  Dubai Silicon Oasis – Free Zone<br />
                  Techno Point Building – Dubai – UAE
                </p>
                <MapPin size={18} className="text-neon mt-0.5 ml-2" />
              </div>
              <div className="flex items-center justify-end">
                <p className="text-gray-400">+971 4-123-4567</p>
                <Phone size={18} className="text-neon ml-2" />
              </div>
              <div className="flex items-center justify-end">
                <p className="text-gray-400">hello@omegateam.ai</p>
                <Mail size={18} className="text-neon ml-2" />
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
