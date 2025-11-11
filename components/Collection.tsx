
import React from 'react';
import { useScrollTrigger } from '../hooks/useScrollTrigger';

const collectionItems = [
  { name: 'Elysian Ring', image: '/images/collection/ring.jpg' },
  { name: 'Solstice Necklace', image: '/images/collection/necklace.jpg' },
  { name: 'Aura Bracelet', image: '/images/collection/bracelet.jpg' },
  { name: 'Celeste Earrings', image: '/images/collection/earrings.jpg' },
];

const Collection: React.FC = () => {
  const [ref, isVisible] = useScrollTrigger<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="w-full py-20 lg:py-40 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto px-4 text-center">
        <div
          ref={ref}
          className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <h2 className="font-serif text-5xl md:text-7xl gold-text mb-4">The Signature Collection</h2>
          <div className="w-24 h-px gold-bg mx-auto mb-12"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {collectionItems.map((item, index) => (
            <div
              key={item.name}
              className={`group relative overflow-hidden transition-all duration-1000 ease-in-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="font-serif text-2xl gold-text">{item.name}</span>
              </div>
              <div className="absolute inset-0 border-2 gold-border opacity-0 group-hover:opacity-50 transition-opacity duration-500 scale-90 group-hover:scale-100"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collection;
