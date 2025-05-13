import React, { useState, useEffect } from 'react';

const CountdownTimer: React.FC = () => {
  // Set the target date (5 days from now)
  const calculateTargetDate = () => {
    const target = new Date();
    target.setDate(target.getDate() + 5);
    target.setHours(0, 0, 0, 0);
    return target;
  };

  const targetDate = calculateTargetDate();

  // Initialize the countdown state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Update the countdown every second
  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        // Timer has expired
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      // Calculate the time units
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    // Initial update
    updateCountdown();

    // Set up the interval
    const intervalId = setInterval(updateCountdown, 1000);

    // Clean up the interval
    return () => clearInterval(intervalId);
  }, [targetDate]);

  // Time unit display component
  const TimeUnit: React.FC<{ value: number; label: string }> = ({ value, label }) => (
    <div className="flex flex-col items-center mx-2 sm:mx-4">
      <div className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-teal-400 to-pink-500 bg-clip-text text-transparent">
        {value.toString().padStart(2, '0')}
      </div>
      <div className="text-xs uppercase tracking-wide text-slate-300">{label}</div>
    </div>
  );

  return (
    <div className="flex justify-center items-center">
      <TimeUnit value={timeLeft.days} label="Days" />
      <div className="text-3xl sm:text-5xl font-bold text-slate-500">:</div>
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <div className="text-3xl sm:text-5xl font-bold text-slate-500">:</div>
      <TimeUnit value={timeLeft.minutes} label="Mins" />
      <div className="text-3xl sm:text-5xl font-bold text-slate-500">:</div>
      <TimeUnit value={timeLeft.seconds} label="Secs" />
    </div>
  );
};

export default CountdownTimer;