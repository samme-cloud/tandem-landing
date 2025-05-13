import React, { useState } from 'react';
import { ThumbsDown, Hourglass, ShieldAlert } from 'lucide-react';
import WaitlistButton from './WaitlistButton';

const PainPointCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => {
  const [hover, setHover] = useState(false);
  
  return (
    <div 
      className="bg-white rounded-2xl p-6 shadow-md transition-all duration-300 hover:shadow-lg relative overflow-hidden group"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="flex items-center mb-4">
        <div className="p-3 rounded-lg bg-slate-100 text-slate-700">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-3 text-slate-800">{title}</h3>
      <p className="text-slate-600 mb-4">{description}</p>
      
      <div className={`mt-auto transition-all duration-300 ${hover ? 'opacity-100' : 'opacity-60'}`}>
        <WaitlistButton text="Join Waitlist" small />
      </div>
      
      {/* Color accent on hover */}
      <div className={`absolute bottom-0 left-0 w-full h-1 transition-all duration-300 bg-gradient-to-r from-teal-400 to-pink-500 ${hover ? 'opacity-100' : 'opacity-0'}`}></div>
    </div>
  );
};

const PainPoints: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-800">
          Common Freelancing <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-pink-500">Frustrations</span>
        </h2>
        <p className="text-xl text-slate-600 text-center max-w-2xl mx-auto mb-12">
          Tandem eliminates the headaches of traditional freelance work.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PainPointCard 
            icon={<ThumbsDown size={24} />}
            title="Unvetted Talent"
            description="Hours wasted interviewing freelancers who can't deliver the quality you need."
          />
          
          <PainPointCard 
            icon={<Hourglass size={24} />}
            title="Scope Creep"
            description="Projects that expand endlessly with unclear requirements and shifting targets."
          />
          
          <PainPointCard 
            icon={<ShieldAlert size={24} />}
            title="Trust & Payments"
            description="The uncertainty of sending payments without guaranteed results or recourse."
          />
        </div>
      </div>
    </section>
  );
};

export default PainPoints;