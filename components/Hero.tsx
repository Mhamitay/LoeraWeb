
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="h-screen w-full flex flex-col items-center justify-center relative text-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-[3000ms] ease-in-out"
        style={{
          backgroundImage: "url('/images/backgrounds/hero.jpg')",
          opacity: isLoaded ? 0.3 : 0,
        }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <div className={`relative z-10 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl tracking-widest gold-text">
          LORÉA
        </h1>
        <p className="mt-4 text-lg md:text-xl tracking-wider text-white/80">
          You Make Gold Beautiful.
        </p>
      </div>
    </section>
  );
};

export default Hero;
