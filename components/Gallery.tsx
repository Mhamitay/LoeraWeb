import React from 'react';
import { useScrollTrigger } from '../hooks/useScrollTrigger';

const galleryImages = [
  '/images/gallery/gallery1.jpg',
  '/images/gallery/gallery2.jpg',
  '/images/gallery/gallery3.jpg',
  '/images/gallery/gallery4.jpg',
];

const Gallery: React.FC = () => {
  const [ref, isVisible] = useScrollTrigger<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="w-full py-20 lg:py-32 bg-black">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`text-center mb-16 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <h2 className="font-serif text-5xl md:text-7xl gold-text mb-4">A Glimpse of Gold</h2>
          <div className="w-24 h-px gold-bg mx-auto"></div>
        </div>

        {/* 2 Row Grid Layout */}
        <div className="grid grid-cols-2 gap-4 mb-12">
          {galleryImages.map((src, index) => (
            <div
              key={src}
              className={`group relative overflow-hidden aspect-[16/9] transition-all duration-1000 ease-in-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Browse All Link */}
        <div className="text-center">
          <a
            href="#gallery"
            className="inline-block font-serif text-lg gold-text hover:opacity-80 transition-opacity duration-300 border-b-2 gold-border pb-1"
          >
            Browse All
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
