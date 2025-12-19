'use client';

import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup when component unmounts
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-2 h-2 bg-yellow-400 rounded-full pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 shadow-lg"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  );
}