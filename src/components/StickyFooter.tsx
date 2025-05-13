import React from 'react';
import EmailForm from './EmailForm';

const StickyFooter: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-slate-900/90 backdrop-blur-md z-40 py-4 px-4 border-t border-white/10 shadow-lg">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white">
            <h3 className="font-semibold text-lg">Don't miss our launch!</h3>
            <p className="text-slate-300 text-sm">Join the waitlist today.</p>
          </div>
          
          <div className="w-full md:w-auto md:max-w-md">
            <EmailForm dark={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyFooter;