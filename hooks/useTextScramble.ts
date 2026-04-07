'use client';

import { useEffect, useState, useCallback, useRef } from 'react';

const CHARS = '!<>-_\\/[]{}—=+*^?#________';

export function useTextScramble(initialText: string) {
  const [displayText, setDisplayText] = useState(initialText);
  const [isScrambling, setIsScrambling] = useState(false);
  const displayTextRef = useRef(initialText);
  const animationIdRef = useRef<number | null>(null);
  const isMountedRef = useRef(true);

  // Keep ref in sync with current displayText
  useEffect(() => {
    displayTextRef.current = displayText;
  }, [displayText]);

  // Cleanup animation on unmount
  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
      if (animationIdRef.current !== null) {
        cancelAnimationFrame(animationIdRef.current);
        animationIdRef.current = null;
      }
    };
  }, []);

  const scramble = useCallback((newText: string) => {
    // Cancel any in-flight animation before starting a new one
    if (animationIdRef.current !== null) {
      cancelAnimationFrame(animationIdRef.current);
      animationIdRef.current = null;
    }

    return new Promise<void>((resolve) => {
      const oldText = displayTextRef.current;
      const length = Math.max(oldText.length, newText.length);
      const queue: Array<{
        from: string;
        to: string;
        start: number;
        end: number;
        char?: string;
      }> = [];

      for (let i = 0; i < length; i++) {
        const from = oldText[i] || '';
        const to = newText[i] || '';
        const start = Math.floor(Math.random() * 40);
        const end = start + Math.floor(Math.random() * 40);
        queue.push({ from, to, start, end });
      }

      let frame = 0;

      const update = () => {
        if (!isMountedRef.current) {
          resolve();
          return;
        }

        let output = '';
        let complete = 0;

        for (let i = 0; i < queue.length; i++) {
          const { from, to, start, end, char: currentChar } = queue[i];

          if (frame >= end) {
            complete++;
            output += to;
          } else if (frame >= start) {
            if (!currentChar || Math.random() < 0.25) {
              const randomChar = CHARS[Math.floor(Math.random() * CHARS.length)];
              queue[i].char = randomChar;
              output += randomChar;
            } else {
              output += currentChar;
            }
          } else {
            output += from;
          }
        }

        setDisplayText(output);

        if (complete === queue.length) {
          setDisplayText(newText);
          setIsScrambling(false);
          resolve();
        } else {
          animationIdRef.current = requestAnimationFrame(update);
          frame++;
        }
      };

      setIsScrambling(true);
      animationIdRef.current = requestAnimationFrame(update);
    });
  }, []);

  useEffect(() => {
    setDisplayText(initialText);
    displayTextRef.current = initialText;
  }, [initialText]);

  return { displayText, scramble };
}
