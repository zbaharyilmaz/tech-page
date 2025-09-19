import { useEffect, useState } from "react";

export const useParallax = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollY;
};

export const useParallaxTransform = (speed: number = 0.5) => {
  const scrollY = useParallax();

  return {
    transform: `translateY(${scrollY * speed}px)`,
  };
};
