
import React from 'react';
import { useScrollTrigger } from '../hooks/useScrollTrigger';

const Story: React.FC = () => {
  const [ref, isVisible] = useScrollTrigger<HTMLDivElement>();

  return (
    <section className="min-h-screen w-full flex items-center justify-center relative py-20 lg:py-40">
       <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
           style={{ 
             backgroundImage: "url('/images/backgrounds/story.jpg')",
             transform: isVisible ? 'translateY(0)' : 'translateY(20%)',
             transition: 'transform 1.5s ease-out'
           }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
      </div>
      <div
        ref={ref}
        className={`relative z-10 text-center transition-all duration-1000 ease-in-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="font-serif text-4xl md:text-6xl max-w-2xl mx-auto leading-tight">
          Elegance crafted, confidence worn.
        </h2>
      </div>
    </section>
  );
};

export default Story;
