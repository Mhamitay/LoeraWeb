
import React from 'react';

const Craftsmanship: React.FC = () => {
  return (
    <section 
      className="min-h-[70vh] w-full flex items-center justify-center relative text-center bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/images/backgrounds/craftsmanship.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 px-4">
        <h3 className="font-serif text-4xl md:text-6xl text-white/90 max-w-4xl leading-snug">
          “Perfection begins with patience.”
        </h3>
      </div>
    </section>
  );
};

export default Craftsmanship;
