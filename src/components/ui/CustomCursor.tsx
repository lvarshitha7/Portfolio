'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

type CursorType = 'default' | 'pointer' | 'hover-text';

export default function CustomCursor() {
  const [isTouchDevice, setIsTouchDevice] = useState(true);
  const [cursorType, setCursorType] = useState<CursorType>('default');
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const cursorXSpring = useSpring(cursorX, { damping: 35, stiffness: 900, mass: 0.12 });
  const cursorYSpring = useSpring(cursorY, { damping: 35, stiffness: 900, mass: 0.12 });

  const isVisibleRef = useRef(false);
  const cursorTypeRef = useRef<CursorType>('default');
  const cursorTextRef = useRef('');

  useEffect(() => {
    const mediaQuery = window.matchMedia('(hover: none), (pointer: coarse)');
    const checkTouch = () => {
      setIsTouchDevice(mediaQuery.matches || navigator.maxTouchPoints > 0);
    };

    checkTouch();
    mediaQuery.addEventListener('change', checkTouch);
    return () => mediaQuery.removeEventListener('change', checkTouch);
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        setIsVisible(true);
      }
    };

    const handleMouseLeave = () => {
      isVisibleRef.current = false;
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      isVisibleRef.current = true;
      setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const cursorTextEl = target.closest('[data-cursor-text]');
      const clickableEl = target.closest(
        'a, button, [role="button"], input[type="submit"], input[type="button"]'
      );

      let newType: CursorType = 'default';
      let newText = '';

      if (cursorTextEl) {
        newText = cursorTextEl.getAttribute('data-cursor-text') || '';
        newType = 'hover-text';
      } else if (clickableEl) {
        newType = 'pointer';
      }

      if (newType !== cursorTypeRef.current) {
        cursorTypeRef.current = newType;
        setCursorType(newType);
      }

      if (newText !== cursorTextRef.current) {
        cursorTextRef.current = newText;
        setCursorText(newText);
      }
    };

    window.addEventListener('mousemove', moveCursor, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.body.style.cursor = 'none';

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
      document.body.style.cursor = 'auto';
    };
  }, [isTouchDevice, cursorX, cursorY]);

  if (isTouchDevice) return null;

  const cursorSize =
    cursorType === 'hover-text' ? 44 : cursorType === 'pointer' ? 40 : 8;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] flex items-center justify-center rounded-full will-change-transform"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: cursorSize,
          height: cursorSize,
          scale: isVisible ? 1 : 0,
          opacity: isVisible ? 1 : 0,
          backgroundColor:
            cursorType === 'hover-text'
              ? 'rgba(255, 255, 255, 0.95)'
              : cursorType === 'pointer'
                ? 'rgba(255, 122, 0, 0.12)'
                : '#FF7A00',
          border:
            cursorType === 'pointer'
              ? '1.5px solid rgba(255, 122, 0, 0.8)'
              : 'none',
        }}
        transition={{ type: 'spring', damping: 28, stiffness: 400, mass: 0.4 }}
      >
        {cursorType === 'hover-text' && (
          <span className="font-sans text-[7px] font-bold uppercase tracking-wide text-black select-none">
            {cursorText}
          </span>
        )}
      </motion.div>

      {cursorType === 'default' && (
        <motion.div
          className="pointer-events-none fixed left-0 top-0 z-[9998] rounded-full border border-[#FF7A00]/30 will-change-transform"
          style={{
            width: 20,
            height: 20,
            x: cursorXSpring,
            y: cursorYSpring,
            translateX: '-50%',
            translateY: '-50%',
          }}
          animate={{
            scale: isVisible ? 1 : 0,
            opacity: isVisible ? 0.6 : 0,
          }}
          transition={{ type: 'spring', damping: 30, stiffness: 500, mass: 0.3 }}
        />
      )}
    </>
  );
}
