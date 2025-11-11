import React, { useState, useEffect, useRef } from 'react';

const galleryImages = [
  '/images/gallery/gallery1.jpg', // Gold reflections
  '/images/gallery/gallery2.jpg', // Golden light
  '/images/gallery/gallery3.jpg', // Molten gold texture
  '/images/gallery/gallery4.jpg', // Jewelry detail
];

const Gallery: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const { top, height } = section.getBoundingClientRect();
      const scrollableHeight = height - window.innerHeight;
      
      // Prevent calculations when the element is not in the viewport
      if (top > window.innerHeight || top < -height) {
        return;
      }

      // Calculate progress from 0 (top of section at top of viewport)
      // to 1 (bottom of section at bottom of viewport)
      const currentProgress = Math.abs(top) / scrollableHeight;
      setProgress(Math.max(0, Math.min(1, currentProgress)));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const numImages = galleryImages.length;
  // Calculate the segment of scroll progress dedicated to each image transition
  const progressPerImage = numImages > 1 ? 1 / (numImages - 1) : 1;

  return (
    <section ref={sectionRef} className="relative w-full h-[400vh] bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Title that fades out as scrolling begins */}
        <div className="absolute inset-0 flex items-center justify-center text-center z-10">
          <div 
            className="relative transition-opacity duration-300" 
            style={{ opacity: Math.max(0, 1 - progress * 10) }}
          >
            <h2 className="font-serif text-5xl md:text-7xl gold-text mb-4">A Glimpse of Gold</h2>
            <div className="w-24 h-px gold-bg mx-auto"></div>
          </div>
        </div>

        {/* Animated Images */}
        {galleryImages.map((src, index) => {
          const idealProgress = index * progressPerImage;
          const distance = Math.abs(progress - idealProgress);
          
          // An image is fully opaque at its ideal progress point and fades out as we move away.
          // The multiplication factor (e.g., * 2) controls the speed of the cross-fade.
          const opacity = Math.max(0, 1 - (distance / progressPerImage) * 2);
          
          // The image gently scales down to its normal size as it becomes the active image.
          const scale = 1 + Math.min(0.1, distance * 0.2);

          return (
            <div
              key={src}
              className="absolute inset-0 h-full w-full"
              style={{
                opacity: opacity,
                transform: `scale(${scale})`,
                zIndex: 20 + index, // Ensure images stack correctly
              }}
            >
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Gallery;
