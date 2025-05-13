import React, { useState } from 'react';
import { Mail } from 'lucide-react';

interface EmailFormProps {
  buttonText?: string;
  dark?: boolean;
}

const EmailForm: React.FC<EmailFormProps> = ({ 
  buttonText = "Join the Waitlist",
  dark = false
}) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch("https://hook.eu2.make.com/vfnysqfhz4ml2rbzgx9krhum208zf9rx", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });

      alert("✅ You're on the waitlist!");
      setEmail('');
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-4 w-full"
    >
      <div className="relative flex-grow">
        <Mail 
          className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${dark ? 'text-slate-400' : 'text-slate-500'}`} 
          size={20} 
        />
        <input
          type="email"
          placeholder="Your email address"
          className={`
            w-full pl-10 pr-3 py-3 rounded-lg 
            ${dark 
              ? 'bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-slate-400' 
              : 'bg-white border border-slate-300 text-slate-800 placeholder:text-slate-500'
            }
            focus:outline-none focus:ring-2 focus:ring-teal-400
            disabled:opacity-50
          `}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isSubmitting}
          required
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="py-3 px-6 bg-gradient-to-r from-teal-400 to-pink-500 rounded-lg text-white font-semibold hover:opacity-90 transition duration-200 whitespace-nowrap disabled:opacity-50"
      >
        {isSubmitting ? 'Joining...' : buttonText}
      </button>
    </form>
  );
};

export default EmailForm;