
import { useState, FormEvent, useEffect, useRef } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Check, MapPin, Phone, Mail, Clock, Lock, Loader2 } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you as soon as possible.",
      duration: 5000,
    });
    
    setSubmitted(true);
    setIsSubmitting(false);
    
    if (formRef.current) {
      formRef.current.reset();
    }
  };
  
  // Simple matrix rain effect for background
  useEffect(() => {
    // Create canvas for matrix effect
    const canvas = document.getElementById('matrix-bg') as HTMLCanvasElement;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Characters to display
    const chars = '01';
    
    // Font size and columns
    const fontSize = 12;
    const columns = canvas.width / fontSize;
    
    // Array for drops - one per column
    const drops: number[] = [];
    
    // Initialize drops
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * canvas.height);
    }
    
    // Drawing function
    const draw = () => {
      // Semi-transparent black background to create fade effect
      ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Green text for falling characters
      ctx.fillStyle = 'rgba(50, 190, 163, 0.3)';
      ctx.font = `${fontSize}px monospace`;
      
      // Loop through drops
      for (let i = 0; i < drops.length; i++) {
        // Random character
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        // Randomly reset drop back to top
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.98) {
          drops[i] = 0;
        }
        
        // Move drop
        drops[i]++;
      }
    };
    
    // Animation interval
    const matrixInterval = setInterval(draw, 120);
    
    // Resize handler
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Recalculate columns and reset drops
      const newColumns = canvas.width / fontSize;
      
      for (let i = 0; i < newColumns; i++) {
        if (i >= drops.length) {
          drops[i] = Math.floor(Math.random() * canvas.height);
        }
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      clearInterval(matrixInterval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Navbar />
      
      {/* Canvas for matrix background effect */}
      <canvas id="matrix-bg" className="fixed inset-0 z-0 pointer-events-none opacity-30"></canvas>
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-orbitron">
              Get in <span className="text-neon animate-glow-pulse">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 font-titillium">
              Let's discuss how our AI-powered outreach can transform your sales pipeline.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="glassmorphism rounded-lg p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-radial opacity-20"></div>
              <div className="relative z-10">
                <h2 className="text-2xl font-bold text-white mb-6 font-orbitron">
                  Send Us a <span className="text-neon">Message</span>
                </h2>
                
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="mb-6 mx-auto w-16 h-16 bg-neon/20 rounded-full flex items-center justify-center">
                      <Check className="text-neon w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-medium text-white mb-2">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-gray-300 mb-6">
                      Thank you for reaching out. We'll get back to you as soon as possible.
                    </p>
                    <Button 
                      className="bg-transparent border border-neon text-neon hover:bg-neon hover:text-black transition-all duration-300"
                      onClick={() => setSubmitted(false)}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-white">Name</Label>
                        <Input
                          id="name"
                          className="bg-dark-lighter border-gray-800 focus:border-neon focus:ring focus:ring-neon/20 text-white"
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-white">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          className="bg-dark-lighter border-gray-800 focus:border-neon focus:ring focus:ring-neon/20 text-white"
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="title" className="text-white">Your Title</Label>
                      <Input
                        id="title"
                        className="bg-dark-lighter border-gray-800 focus:border-neon focus:ring focus:ring-neon/20 text-white"
                        placeholder="Your job title"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-white">Message</Label>
                      <Textarea
                        id="message"
                        className="bg-dark-lighter border-gray-800 focus:border-neon focus:ring focus:ring-neon/20 text-white h-32"
                        placeholder="How can we help you?"
                        required
                      />
                    </div>
                    
                    <div className="flex items-center">
                      <Button
                        type="submit"
                        className="bg-neon text-black hover:bg-transparent hover:text-neon border border-neon shadow-neon hover:shadow-neon-strong transition-all duration-300"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          "Send Message"
                        )}
                      </Button>
                    </div>
                    
                    <p className="text-xs text-gray-400 mt-4">
                      This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
                    </p>
                  </form>
                )}
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-6 font-orbitron">
                  Contact <span className="text-neon">Information</span>
                </h2>
                
                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-neon/10 rounded-lg flex items-center justify-center shadow-neon">
                        <MapPin className="text-neon" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-white font-medium">Location</h3>
                      <p className="text-gray-300">
                        Dubai Silicon Oasis – Free Zone<br />
                        Techno Point Building – Dubai – UAE
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-neon/10 rounded-lg flex items-center justify-center shadow-neon">
                        <Phone className="text-neon" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-white font-medium">Phone</h3>
                      <p className="text-gray-300">+971 4-123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-neon/10 rounded-lg flex items-center justify-center shadow-neon">
                        <Mail className="text-neon" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-white font-medium">Email</h3>
                      <p className="text-gray-300">info@omegateam.ai</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-neon/10 rounded-lg flex items-center justify-center shadow-neon">
                        <Clock className="text-neon" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-white font-medium">Business Hours</h3>
                      <p className="text-gray-300">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday - Sunday: Closed
                      </p>
                      <p className="text-gray-400 text-sm mt-1">
                        (Our AI works 24/7)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="glassmorphism rounded-lg p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Lock className="text-neon" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-white font-medium mb-2">Data Security Guarantee</h3>
                    <p className="text-gray-300 text-sm">
                      Any information you share with us is protected by our strict data security protocols 
                      and never shared with third parties.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Map placeholder */}
              <div className="glassmorphism h-64 rounded-lg overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-b from-dark/50 to-transparent z-10 pointer-events-none"></div>
                <div className="h-full w-full bg-dark-lighter flex items-center justify-center">
                  <p className="text-gray-400">Interactive map would be embedded here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
