
import { useEffect, useState, useRef, RefObject } from 'react';

export const useScrollTrigger = <T extends HTMLElement,>(
  options: IntersectionObserverInit = { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
): [RefObject<T>, boolean] => {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (ref.current) {
           observer.unobserve(ref.current);
        }
      }
    }, options);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [ref, isVisible];
};
