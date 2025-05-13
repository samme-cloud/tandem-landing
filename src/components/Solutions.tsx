import React from 'react';
import { CheckCircle, FileCheck, CreditCard } from 'lucide-react';
import WaitlistButton from './WaitlistButton';

interface SolutionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ icon, title, description, color }) => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border-t-4 flex flex-col h-full">
      <div className={`p-3 rounded-full w-14 h-14 flex items-center justify-center mb-5 ${color}`}>
        {icon}
      </div>
      
      <h3 className="text-xl font-semibold mb-3 text-slate-800">{title}</h3>
      <p className="text-slate-600 mb-6 flex-grow">{description}</p>
      
      <div className="mt-auto">
        <WaitlistButton small text="Join Waitlist" />
      </div>
    </div>
  );
};

const Solutions: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          How <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-pink-500">Tandem</span> Solves It
        </h2>
        <p className="text-xl text-slate-300 text-center max-w-2xl mx-auto mb-16">
          Our AI-powered platform creates perfect matches and smooth projects.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SolutionCard 
            icon={<CheckCircle size={28} className="text-white" />}
            title="Pre-Vetted Experts"
            description="Every freelancer is rigorously screened, tested, and continuously rated to ensure top quality work."
            color="bg-gradient-to-br from-teal-400 to-teal-500"
          />
          
          <SolutionCard 
            icon={<FileCheck size={28} className="text-white" />}
            title="AI-Guided Briefing"
            description="Our AI helps you create clear, comprehensive project briefs to eliminate misunderstandings."
            color="bg-gradient-to-br from-violet-500 to-purple-600"
          />
          
          <SolutionCard 
            icon={<CreditCard size={28} className="text-white" />}
            title="Escrow Payments"
            description="Funds are only released when you're satisfied with completed milestones and deliverables."
            color="bg-gradient-to-br from-pink-400 to-pink-600"
          />
        </div>
      </div>
    </section>
  );
};

export default Solutions;