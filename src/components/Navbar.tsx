
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
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

  // Close mobile menu when path changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Features', path: '/features' },
    { title: 'Case Studies', path: '/case-studies' },
    { title: 'Contact', path: '/contact' },
  ];

  const addRippleEffect = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    
    const size = Math.max(rect.width, rect.height) * 1.5;
    
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${event.clientX - rect.left - (size / 2)}px`;
    ripple.style.top = `${event.clientY - rect.top - (size / 2)}px`;
    
    ripple.classList.add('ripple');
    button.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 800);
  };

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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="hidden md:flex space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative overflow-hidden font-titillium ${
                    location.pathname === link.path
                      ? 'text-neon text-glow'
                      : 'text-gray-300 hover:text-neon transition-colors'
                  }`}
                  onClick={addRippleEffect}
                >
                  {link.title}
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <div className="hidden lg:flex items-center">
                <Phone size={16} className="text-neon mr-2" />
                <span className="text-sm text-gray-300">+971 4-123-4567</span>
              </div>
              <Link to="/contact">
                <Button className="bg-transparent border border-neon text-neon hover:bg-neon hover:text-black transition-all duration-300 shadow-neon hover:shadow-neon-strong">
                  Request Demo
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
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

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 p-4 border border-neon/30 backdrop-blur-md bg-dark/90 rounded-md shadow-neon animate-in fade-in duration-200">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`${
                    location.pathname === link.path
                      ? 'text-neon text-glow-strong'
                      : 'text-gray-300'
                  } font-titillium text-lg`}
                >
                  {link.title}
                </Link>
              ))}
              <div className="flex items-center pt-2">
                <Phone size={16} className="text-neon mr-2" />
                <span className="text-sm text-gray-300">+971 4-123-4567</span>
              </div>
              <Link to="/contact" className="pt-2">
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
