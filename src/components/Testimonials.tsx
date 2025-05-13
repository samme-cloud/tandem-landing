import React from 'react';

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  image: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, role, image }) => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col">
      <div className="mb-6">
        <svg className="h-8 w-8 text-teal-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      
      <p className="text-slate-700 mb-6 flex-grow">"{quote}"</p>
      
      <div className="flex items-center">
        <img 
          src={image} 
          alt={name} 
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold text-slate-800">{name}</h4>
          <p className="text-slate-500 text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          What People Are <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-pink-500">Saying</span>
        </h2>
        <p className="text-xl text-slate-300 text-center max-w-2xl mx-auto mb-16">
          Early access users love the Tandem experience.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Testimonial 
            quote="Tandem paired me with the perfect AI developer for my project. The escrow system gave me peace of mind, and the work was excellent."
            name="Sarah Johnson"
            role="Startup Founder"
            image="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          
          <Testimonial 
            quote="As a CS student, Tandem has been amazing for finding real-world projects that match my skills. The AI-guided briefing makes requirements crystal clear."
            name="Michael Chen"
            role="Computer Science Student"
            image="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;