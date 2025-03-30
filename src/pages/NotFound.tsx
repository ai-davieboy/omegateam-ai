
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <div className="min-h-[80vh] flex items-center justify-center bg-dark px-4">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-neon animate-glow-pulse font-orbitron mb-4">404</h1>
          <p className="text-2xl text-gray-300 mb-8 font-titillium">
            The page you're looking for doesn't exist in our system.
          </p>
          <Link to="/">
            <Button className="bg-neon text-dark hover:bg-transparent hover:text-neon border border-neon shadow-neon hover:shadow-neon-strong transition-all duration-300">
              <Home className="mr-2 h-4 w-4" />
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
