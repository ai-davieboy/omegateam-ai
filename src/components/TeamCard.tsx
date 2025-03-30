
import { Linkedin, Twitter } from 'lucide-react';

interface TeamCardProps {
  name: string;
  title: string;
  photoUrl: string;
  linkedin?: string;
  twitter?: string;
}

const TeamCard = ({ name, title, photoUrl, linkedin, twitter }: TeamCardProps) => {
  return (
    <div className="glassmorphism rounded-lg overflow-hidden transition-all duration-300 hover:shadow-neon group">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={photoUrl}
          alt={name}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-70"></div>
      </div>
      
      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-titillium font-bold text-white mb-1">{name}</h3>
        <p className="text-neon mb-4">{title}</p>
        
        {/* Social links */}
        {(linkedin || twitter) && (
          <div className="flex space-x-3">
            {linkedin && (
              <a 
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-neon transition-colors"
              >
                <Linkedin size={18} />
              </a>
            )}
            {twitter && (
              <a 
                href={twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-neon transition-colors"
              >
                <Twitter size={18} />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamCard;
