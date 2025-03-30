import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
          <Link to="/" className="flex items-center group">
            <span className="text-neon text-4xl mr-2 font-orbitron">Ω</span>
            <span className="text-white font-orbitron text-2xl group-hover:text-glow transition-all">
              OmegaTeam
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/contact">
              <Button className="bg-transparent border border-neon text-neon hover:bg-neon hover:text-black transition-all duration-300 shadow-neon hover:shadow-neon-strong">
                Request Demo
              </Button>
            </Link>
          </div>

          <div className="md:hidden">
            <button
              className="text-white p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <X size={24} className="text-neon" />
              ) : (
                <Menu size={24} className="text-neon" />
              )}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 p-4 border border-neon/30 backdrop-blur-md bg-dark/90 rounded-md shadow-neon animate-in fade-in duration-200">
            <div className="flex flex-col space-y-4">
              <Link to="/contact">
                <Button className="bg-transparent w-full border border-neon text-neon hover:bg-neon hover:text-black transition-all duration-300 shadow-neon">
                  Request Demo
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
