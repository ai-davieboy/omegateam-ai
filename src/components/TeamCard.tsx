
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
      {/* Image with fallback - increased height from h-64 to h-72 */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={photoUrl}
          alt={`${name} - ${title}`}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.src = 'https://placehold.co/400x400/121212/32bea3?text=' + encodeURIComponent(name.charAt(0));
            console.log(`Failed to load image for ${name}:`, photoUrl);
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-70"></div>
      </div>
      
      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-titillium font-bold text-white mb-1">{name}</h3>
        <p className="text-neon mb-4">{title}</p>
      </div>
    </div>
  );
};

export default TeamCard;
