'use client';

import { useState, useEffect, useRef } from 'react';

interface UseInViewAnimationOptions {
  threshold?: number;
  className?: string;
  delay?: number;
}

export function useInViewAnimation(
  options: UseInViewAnimationOptions = {}
) {
  const { threshold = 0.1, delay = 100 } = options;
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = Array.from(container.children);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = items.indexOf(entry.target);
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible', 'animate-in');
            }, index * delay);
          } else {
            entry.target.classList.remove('visible', 'animate-in');
          }
        });
      },
      { threshold }
    );

    items.forEach((item, i) => {
      item.setAttribute('data-index', String(i));
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, [threshold, delay]);

  return containerRef;
}
