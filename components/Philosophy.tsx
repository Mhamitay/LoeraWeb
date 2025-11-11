
import React from 'react';
import { useScrollTrigger } from '../hooks/useScrollTrigger';

const Philosophy: React.FC = () => {
  const [ref, isVisible] = useScrollTrigger<HTMLDivElement>();

  return (
    <section className="min-h-screen w-full flex items-center justify-center relative py-20 lg:py-40 bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('/images/backgrounds/philosophy.jpg')" }}>
      {/* Parallax background is achieved with bg-fixed. A gold texture image would be used here. */}
      <div className="absolute inset-0 bg-black/70"></div>
      <div
        ref={ref}
        className={`relative z-10 text-center transition-all duration-1000 ease-in-out px-4 ${
          isVisible ? 'opacity-100' : 'opacity-0 -translate-y-10'
        }`}
      >
        <h2 className="font-serif text-5xl md:text-7xl gold-text mb-8">Our Philosophy</h2>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-white/90 leading-relaxed">
          At Loréa, we believe beauty is not given—it's worn with confidence. Our exquisite gold-plated jewelry combines timeless elegance with modern craftsmanship, designed to complement your unique radiance. Each piece is more than an accessory; it's a statement of who you are.
        </p>
      </div>
    </section>
  );
};

export default Philosophy;
