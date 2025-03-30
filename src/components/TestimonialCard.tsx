
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role?: string;
  company?: string;
  rating?: number;
}

const TestimonialCard = ({ quote, name, role, company, rating = 5 }: TestimonialCardProps) => {
  return (
    <div className="glassmorphism rounded-lg p-6 transition-all duration-300 hover:shadow-neon group">
      {/* Stars rating */}
      {rating > 0 && (
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={18}
              className={`mr-1 ${i < rating ? 'text-neon fill-neon/50' : 'text-gray-600'}`}
            />
          ))}
        </div>
      )}
      
      {/* Quote */}
      <p className="text-gray-300 mb-6 font-titillium leading-relaxed">
        "{quote}"
      </p>
      
      {/* Author */}
      <div className="flex items-center">
        <div className="ml-3">
          <h4 className="text-white font-medium text-lg">{name}</h4>
          {(role || company) && (
            <p className="text-neon/70 text-sm">
              {role}{role && company && ', '}{company}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
