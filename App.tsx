
import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Story from './components/Story';
import Philosophy from './components/Philosophy';
import Collection from './components/Collection';
import Craftsmanship from './components/Craftsmanship';
import BehindTheShine from './components/BehindTheShine';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import JoinFooter from './components/JoinFooter';
// asdfjl
const GoldenParticle: React.FC<{ style: React.CSSProperties }> = ({ style }) => (
  <div
    className="absolute rounded-full gold-bg opacity-50 animate-pulse"
    style={style}
  ></div>
);

const App: React.FC = () => {
  const [particles, setParticles] = useState<React.CSSProperties[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 50 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      width: `${Math.random() * 2 + 1}px`,
      height: `${Math.random() * 2 + 1}px`,
      animationDuration: `${Math.random() * 5 + 5}s`,
      animationDelay: `${Math.random() * 5}s`,
      transform: `translate(${Math.random() * 50 - 25}px, ${Math.random() * 50 - 25}px)`,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="relative bg-black">
      <div style={{ zIndex: 1 }} className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-20">
        {particles.map((style, i) => (
          <GoldenParticle key={i} style={style} />
        ))}
      </div>
      
      <main className="relative z-10">
        <Hero />
        <Story />
        <Philosophy />
        <Collection />
        <Craftsmanship />
        <BehindTheShine />
        <Gallery />
        <Testimonials />
        <JoinFooter />
      </main>
    </div>
  );
}

export default App;
