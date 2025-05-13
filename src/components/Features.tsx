import React from 'react';
import { Zap, Shield, MessageSquare, HeartHandshake } from 'lucide-react';
import EmailForm from './EmailForm';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="p-4 rounded-full bg-white/10 text-white mb-4 transform transition-all duration-300 hover:scale-110">
        {icon}
      </div>
      <h3 className="text-lg font-medium text-white">{title}</h3>
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-800">
          Key <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-pink-500">Features</span>
        </h2>
        <p className="text-xl text-slate-600 text-center max-w-2xl mx-auto mb-16">
          Tandem combines AI technology with human expertise for seamless collaboration.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <Feature 
            icon={<Zap size={28} className="text-teal-400" />}
            title="AI Speed Matching"
          />
          
          <Feature 
            icon={<Shield size={28} className="text-pink-500" />}
            title="Secure Escrow"
          />
          
          <Feature 
            icon={<MessageSquare size={28} className="text-violet-500" />}
            title="In-App AI Chat"
          />
          
          <Feature 
            icon={<HeartHandshake size={28} className="text-amber-500" />}
            title="24/7 Support"
          />
        </div>
        
        <div className="max-w-md mx-auto">
          <EmailForm 
            buttonText="Join the Waitlist"
            dark={false}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;