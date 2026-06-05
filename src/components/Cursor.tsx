import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const Cursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Spring config for the outer ring (delayed/smooth)
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch devices to disable custom cursor
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if hovering over a clickable element
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('input-field') ||
        target.style.cursor === 'pointer'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    // Make default cursor invisible
    document.body.classList.add('custom-cursor-enabled');

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      document.body.classList.remove('custom-cursor-enabled');
    };
  }, [cursorX, cursorY]);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Outer smooth ring */}
      <motion.div
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
          width: isHovering ? '60px' : '36px',
          height: isHovering ? '60px' : '36px',
          border: '1.5px solid var(--accent-color)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          transition: 'width 0.2s, height 0.2s',
          backgroundColor: isHovering ? 'rgba(0, 240, 255, 0.1)' : 'transparent',
        }}
      />
      {/* Inner instant dot */}
      <motion.div
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          width: '6px',
          height: '6px',
          backgroundColor: 'var(--text-primary)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 10000,
          opacity: isHovering ? 0 : 1,
          transition: 'opacity 0.2s'
        }}
      />
    </>
  );
};

export default Cursor;
