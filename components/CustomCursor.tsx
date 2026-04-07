'use client';

import { useEffect, useState, useCallback } from 'react';

const HOVER_SELECTOR = '[data-cursor-hover], a, button, .portfolio-item, .service-card';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const onMouseMove = useCallback((e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  }, []);

  const handleMouseOver = useCallback((e: Event) => {
    const target = e.target as HTMLElement;
    if (target.closest(HOVER_SELECTOR)) {
      setIsHovering(true);
    }
  }, []);

  const handleMouseOut = useCallback((e: Event) => {
    const target = e.target as HTMLElement;
    const related = (e as MouseEvent).relatedTarget as HTMLElement | null;
    if (!related || !target.closest(HOVER_SELECTOR) || !related.closest(HOVER_SELECTOR)) {
      if (!related || !target.contains(related)) {
        setIsHovering(false);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia('(pointer: fine)').matches) {
      return;
    }

    setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [onMouseMove, handleMouseOver, handleMouseOut]);

  if (!isVisible) return null;

  return (
    <div
      className={`custom-cursor ${isHovering ? 'hover' : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
}
