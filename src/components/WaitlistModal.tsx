import React, { useState, useEffect, useRef } from 'react';
import { X, Mail } from 'lucide-react';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WaitlistModal: React.FC<WaitlistModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch("https://hook.eu2.make.com/aywhwwinx9e3mjagp6mj9g8l9hpovlrv", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });

      alert("✅ You're on the waitlist!");
      setEmail('');
      onClose();
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    if (isOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div 
        ref={modalRef}
        className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 relative transform transition-all"
      >
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-slate-400 hover:text-slate-600"
        >
          <X size={24} />
        </button>
        
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold mb-2 text-slate-800">Join Our Waitlist</h3>
          <p className="text-slate-600">Be first to know when Tandem launches.</p>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="relative mb-4">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="email"
              placeholder="Your email address"
              className="w-full pl-10 pr-3 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-400 disabled:opacity-50"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSubmitting}
              required
            />
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 px-6 bg-gradient-to-r from-teal-400 to-pink-500 rounded-lg text-white font-semibold hover:opacity-90 transition duration-300 disabled:opacity-50"
          >
            {isSubmitting ? 'Joining...' : 'Join the Waitlist'}
          </button>
        </form>
        
        <p className="text-xs text-slate-500 mt-4 text-center">
          We'll never share your email with third parties.
        </p>
      </div>
    </div>
  );
};

export default WaitlistModal;