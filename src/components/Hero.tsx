import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import CountdownTimer from './CountdownTimer';

const Hero: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, send the email to your backend
    alert(`Thank you! ${email} has been added to our waitlist.`);
    setEmail('');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Abstract background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-1/4 top-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute right-1/4 top-1/3 w-96 h-96 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 z-10 text-center py-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
          Get AI Work Done—
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-pink-500">Together</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-200 mb-8 max-w-2xl mx-auto">
          Join our waitlist to be first in line when Tandem launches.
        </p>

        {/* Countdown Timer */}
        <div className="mb-12">
          <p className="text-slate-300 mb-2">Launching In</p>
          <CountdownTimer />
        </div>

        {/* Email Capture Form */}
        <form 
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-12"
        >
          <div className="relative flex-grow">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="email"
              placeholder="Your email address"
              className="w-full pl-10 pr-3 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="py-3 px-6 bg-gradient-to-r from-teal-400 to-pink-500 rounded-lg text-white font-semibold hover:opacity-90 transition duration-200 whitespace-nowrap"
          >
            Join the Waitlist
          </button>
        </form>

        {/* App Store Badges */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 opacity-70 hover:opacity-100 transition duration-300">
          <p className="text-slate-300 mb-2 sm:mb-0">Coming soon to:</p>
          <div className="flex gap-4">
            <a href="#" className="transition hover:scale-105">
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-10" />
            </a>
            <a href="#" className="transition hover:scale-105">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-10" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;