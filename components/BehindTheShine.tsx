
import React from 'react';
import { useScrollTrigger } from '../hooks/useScrollTrigger';

const BehindTheShine: React.FC = () => {
  const [ref, isVisible] = useScrollTrigger<HTMLDivElement>();

  return (
    <section ref={ref} className="w-full min-h-screen flex items-center bg-black">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-16">
        <div
          className={`px-4 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}
        >
          <h2 className="font-serif text-5xl md:text-7xl gold-text mb-6">Behind the Shine</h2>
          <p className="text-lg text-white/80 leading-relaxed">
            Every Loréa creation is the culmination of meticulous design and masterful execution. Our artisans pour their soul into shaping molten gold, transforming raw material into a wearable work of art that captures light and hearts alike.
          </p>
        </div>
        <div className="h-[60vh] md:h-screen relative overflow-hidden">
            <div
                className={`w-full h-full bg-cover bg-center transition-all duration-[2000ms] ease-out ${
                    isVisible ? 'scale-100 opacity-70' : 'scale-110 opacity-0'
                }`}
                style={{ backgroundImage: "url('https://picsum.photos/seed/lorea-shine/1080/1920')" }} // Slow-moving gold background
            ></div>
        </div>
      </div>
    </section>
  );
};

export default BehindTheShine;
