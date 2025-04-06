
import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
        scrolled ? 'bg-dark/90 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center group">
            <Link to="/" className="flex items-center">
              <span className="text-neon text-4xl mr-2 font-orbitron">Ω</span>
              <span className="text-white font-orbitron text-xl group-hover:text-glow transition-all">
                OmegaTeam
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/features" 
              className="text-white hover:text-neon transition-colors font-titillium"
            >
              Features
            </Link>
            <Link 
              to="/case-studies" 
              className="text-white hover:text-neon transition-colors font-titillium"
            >
              Case Studies
            </Link>
            <Link 
              to="/team" 
              className="text-white hover:text-neon transition-colors font-titillium"
            >
              Team
            </Link>
            <Link 
              to="/contact" 
              className="text-white hover:text-neon transition-colors font-titillium"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-white p-2 focus:outline-none group"
          >
            <Menu className="h-6 w-6 group-hover:text-neon transition-colors" />
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 p-4 border border-neon/30 backdrop-blur-md bg-dark/90 rounded-md shadow-neon animate-in fade-in duration-200">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/features" 
                className="text-white hover:text-neon transition-colors py-2 font-titillium"
              >
                Features
              </Link>
              <Link 
                to="/case-studies" 
                className="text-white hover:text-neon transition-colors py-2 font-titillium"
              >
                Case Studies
              </Link>
              <Link 
                to="/team" 
                className="text-white hover:text-neon transition-colors py-2 font-titillium"
              >
                Team
              </Link>
              <Link 
                to="/contact" 
                className="text-white hover:text-neon transition-colors py-2 font-titillium"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
