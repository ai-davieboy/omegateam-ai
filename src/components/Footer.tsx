
import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail, ArrowRight, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark-lighter pt-16 pb-8 border-t border-neon/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center mb-4">
              <span className="text-neon text-3xl mr-2 font-orbitron">Ω</span>
              <span className="text-white font-orbitron text-xl">OmegaTeam</span>
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              AI-powered sales outreach company revolutionizing how businesses connect with their ideal clients.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-neon transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-neon transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-neon transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-neon transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-white font-titillium text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-neon transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" /> Home
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-gray-400 hover:text-neon transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" /> Features
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-gray-400 hover:text-neon transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" /> Case Studies
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-neon transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" /> Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-white font-titillium text-lg mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-neon transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" /> Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-neon transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" /> Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-neon transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" /> Data Processing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-neon transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" /> Cookie Policy
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-white font-titillium text-lg mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin size={18} className="text-neon mt-0.5 mr-2" />
                <p className="text-gray-400">
                  Dubai Silicon Oasis – Free Zone<br />
                  Techno Point Building – Dubai – UAE
                </p>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="text-neon mr-2" />
                <p className="text-gray-400">+971 4-123-4567</p>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="text-neon mr-2" />
                <p className="text-gray-400">info@omegateam.ai</p>
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
