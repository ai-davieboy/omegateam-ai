
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import TeamCard from "@/components/TeamCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Team = () => {
  const teamMembers = [
    {
      name: "Adam",
      title: "Chief Operation Officer",
      photoUrl: "https://raw.githubusercontent.com/ai-davieboy/shared-pics/refs/heads/main/adam.png"
    },
    {
      name: "Jitka",
      title: "Chief Financial Officer",
      photoUrl: "https://raw.githubusercontent.com/ai-davieboy/shared-pics/refs/heads/main/jitka.png"
    },
    {
      name: "Arjun",
      title: "Chief AI Officer",
      photoUrl: "https://raw.githubusercontent.com/ai-davieboy/shared-pics/refs/heads/main/arjun.png"
    },
    {
      name: "Chris",
      title: "Cyber Security & Data Protection",
      photoUrl: "https://raw.githubusercontent.com/ai-davieboy/shared-pics/refs/heads/main/chris.png"
    },
    {
      name: "Zara",
      title: "Business Development Lead",
      photoUrl: "https://raw.githubusercontent.com/ai-davieboy/shared-pics/refs/heads/main/zara.png"
    },
    {
      name: "Bryan",
      title: "Business Development Partner",
      photoUrl: "https://raw.githubusercontent.com/ai-davieboy/shared-pics/refs/heads/main/bryan.png"
    },
    {
      name: "Hana",
      title: "Business Development Partner",
      photoUrl: "https://raw.githubusercontent.com/ai-davieboy/shared-pics/refs/heads/main/hana.png"
    },
    {
      name: "Claire",
      title: "Business Development Partner",
      photoUrl: "https://raw.githubusercontent.com/ai-davieboy/shared-pics/refs/heads/main/claire_burns.png"
    },
    {
      name: "Nasser",
      title: "Chief Commercial Officer",
      photoUrl: "https://raw.githubusercontent.com/ai-davieboy/shared-pics/refs/heads/main/nasser.png"
    },
    {
      name: "Kailee",
      title: "Growth Manager",
      photoUrl: "https://raw.githubusercontent.com/ai-davieboy/shared-pics/refs/heads/main/kailee.png"
    },
    {
      name: "Jisoo",
      title: "Client Manager",
      photoUrl: "https://raw.githubusercontent.com/ai-davieboy/shared-pics/refs/heads/main/jisoo.png"
    },
    {
      name: "Wang",
      title: "Lead Research Analyst",
      photoUrl: "https://raw.githubusercontent.com/ai-davieboy/shared-pics/refs/heads/main/wang.png"
    }
  ];

  useEffect(() => {
    // Log image URLs to debug
    teamMembers.forEach(member => {
      console.log(`Loading image for ${member.name}:`, member.photoUrl);
    });
  }, []);

  return (
    <>
      <Navbar />
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <Link to="/" className="inline-flex items-center text-gray-400 hover:text-neon transition-colors mb-4">
              <ArrowLeft size={16} className="mr-2" />
              Back to home
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-orbitron">
              Our <span className="text-neon animate-glow-pulse">Team</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl font-titillium">
              Meet the AI agents working around the clock to connect you with your next best clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamCard
                key={index}
                name={member.name}
                title={member.title}
                photoUrl={member.photoUrl}
              />
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/contact">
              <Button className="bg-neon text-dark hover:bg-transparent hover:text-neon border border-neon text-lg px-8 py-6 shadow-neon hover:shadow-neon-strong transition-all duration-300">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Team;
