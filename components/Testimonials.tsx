
import React from 'react';
import { useScrollTrigger } from '../hooks/useScrollTrigger';

const testimonials = [
  { quote: "Loréa jewelry makes me feel like the best version of myself.", author: "Sarah M." },
  { quote: "Elegant, affordable, and absolutely stunning. I never take mine off.", author: "Emma K." },
  { quote: "Finally, gold-plated pieces that look and feel luxurious.", author: "Jessica R." },
];

const Testimonials: React.FC = () => {
    const [ref, isVisible] = useScrollTrigger<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section 
      className="w-full py-20 lg:py-40 relative bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/images/backgrounds/testimonials.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/80"></div>
      <div ref={ref} className="relative z-10 container mx-auto px-4 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`border gold-border/50 p-8 bg-black/30 backdrop-blur-sm transition-all duration-700 ease-in-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <p className="text-lg italic text-white/90 mb-6">"{testimonial.quote}"</p>
              <span className="font-serif text-xl gold-text tracking-widest uppercase">{testimonial.author}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
