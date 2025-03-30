
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
      photoUrl: "https://raw.githubusercontent.com/ai-davieboy/shared-pics/refs/heads/main/adam.png",
      linkedin: "https://linkedin.com/in/adam-coo"
    },
    {
      name: "Jane",
      title: "Chief Financial Officer",
      photoUrl: "https://raw.githubusercontent.com/ai-davieboy/shared-pics/refs/heads/main/jane.png",
      linkedin: "https://linkedin.com/in/jane-cfo"
    },
    {
      name: "Arjun",
      title: "Chief AI Officer",
      photoUrl: "https://raw.githubusercontent.com/ai-davieboy/shared-pics/refs/heads/main/arjun.png",
      linkedin: "https://linkedin.com/in/arjun-caio"
    },
    {
      name: "Chris",
      title: "Cyber Security & Data Protection",
      photoUrl: "https://raw.githubusercontent.com/ai-davieboy/shared-pics/refs/heads/main/chris.png",
      linkedin: "https://linkedin.com/in/chris-security"
    },
    {
      name: "Zara",
      title: "Business Development Lead",
      photoUrl: "https://raw.githubusercontent.com/ai-davieboy/shared-pics/refs/heads/main/zara.png",
      linkedin: "https://linkedin.com/in/zara-bdl"
    },
    {
      name: "Bryan",
      title: "Business Development Partner",
      photoUrl: "https://raw.githubusercontent.com/ai-davieboy/shared-pics/refs/heads/main/bryan.png",
      linkedin: "https://linkedin.com/in/bryan-bdp"
    },
    {
      name: "Hana",
      title: "Business Development Partner",
      photoUrl: "https://raw.githubusercontent.com/ai-davieboy/shared-pics/refs/heads/main/hana.png",
      linkedin: "https://linkedin.com/in/hana-bdp"
    },
    {
      name: "Claire",
      title: "Business Development Partner",
      photoUrl: "https://raw.githubusercontent.com/ai-davieboy/shared-pics/refs/heads/main/claire_burns.png",
      linkedin: "https://linkedin.com/in/claire-bdp"
    },
    {
      name: "Nasser",
      title: "Chief Commercial Officer",
      photoUrl: "https://raw.githubusercontent.com/ai-davieboy/shared-pics/refs/heads/main/nasser.png",
      linkedin: "https://linkedin.com/in/nasser-cco"
    },
    {
      name: "Kailee",
      title: "Growth Manager",
      photoUrl: "https://raw.githubusercontent.com/ai-davieboy/shared-pics/refs/heads/main/kailee.png",
      linkedin: "https://linkedin.com/in/kailee-gm"
    },
    {
      name: "Jisoo",
      title: "Client Manager",
      photoUrl: "https://raw.githubusercontent.com/ai-davieboy/shared-pics/refs/heads/main/jisoo.png",
      linkedin: "https://linkedin.com/in/jisoo-cm"
    },
    {
      name: "Wang",
      title: "Lead Research Analyst",
      photoUrl: "https://raw.githubusercontent.com/ai-davieboy/shared-pics/refs/heads/main/wang.png",
      linkedin: "https://linkedin.com/in/wang-lra"
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
              Meet the experts behind OmegaTeam.ai's innovative AI-powered sales outreach solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamCard
                key={index}
                name={member.name}
                title={member.title}
                photoUrl={member.photoUrl}
                linkedin={member.linkedin}
              />
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 font-orbitron">
              Want to <span className="text-neon animate-glow-pulse">Join Our Team?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8 font-titillium">
              We're always looking for talented individuals who are passionate about AI and sales automation.
            </p>
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
