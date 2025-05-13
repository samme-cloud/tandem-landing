import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import WaitlistModal from './WaitlistModal';

interface WaitlistButtonProps {
  text?: string;
  small?: boolean;
}

const WaitlistButton: React.FC<WaitlistButtonProps> = ({ 
  text = "Join the Waitlist",
  small = false
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className={`
          ${small 
            ? 'py-2 px-4 text-sm' 
            : 'py-3 px-6 text-base'
          }
          flex items-center justify-center gap-2
          bg-gradient-to-r from-teal-400 to-pink-500 
          hover:opacity-90 rounded-lg text-white font-semibold 
          transition-all duration-300 transform hover:scale-105
        `}
      >
        <Mail size={small ? 16 : 20} />
        {text}
      </button>
      
      <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default WaitlistButton;