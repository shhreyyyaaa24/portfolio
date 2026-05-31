"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorFollower() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [isMoving, setIsMoving] = useState(false);
  const moveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 150);
      cursorY.set(e.clientY - 150);
      
      setIsMoving(true);
      if (moveTimeoutRef.current) clearTimeout(moveTimeoutRef.current);
      moveTimeoutRef.current = setTimeout(() => setIsMoving(false), 300);
    };

    window.addEventListener("mousemove", moveCursor, { passive: true });
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      if (moveTimeoutRef.current) clearTimeout(moveTimeoutRef.current);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Main following glow */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-30"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
        }}
      >
        <div className="w-[300px] h-[300px] rounded-full bg-radial from-accent/20 via-accent/5 to-transparent blur-3xl transition-all duration-500"
          style={{
            opacity: isMoving ? 1 : 0.6,
          }}
        />
      </motion.div>

      {/* Secondary trailing glow */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-20"
        style={{
          left: cursorX,
          top: cursorY,
        }}
      >
        <div className="w-[200px] h-[200px] rounded-full bg-radial from-gradient-2/30 via-gradient-2/5 to-transparent blur-2xl transition-all duration-700" />
      </motion.div>

      {/* Pulse effect on cursor */}
      <motion.div
        className="fixed w-3 h-3 rounded-full bg-accent pointer-events-none z-50"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
          x: -6,
          y: -6,
        }}
        animate={{
          scale: isMoving ? 1.2 : 0.8,
          opacity: isMoving ? 0.8 : 0.3,
        }}
        transition={{ duration: 0.3 }}
      />
    </>
  );
}
