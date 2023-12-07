"use client";

import { motion, AnimatePresence } from "framer-motion";

const MotionAnimatePresence = AnimatePresence;
const MotionDiv = motion.div;
const MotionH2 = motion.h2;
const MotionP = motion.p;
const MotionSpan = motion.span;
const MotionFadeIn = ({
  children,
  className,
  direction,
  type,
  delay = 0,
  duration,
}) => {
  return (
    <MotionAnimatePresence>
      <MotionDiv
        initial={{
          x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
          y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
          opacity: 0,
        }}
        animate={{
          x: 0,
          y: 0,
          opacity: 1,
          transition: {
            type,
            delay,
            duration,
            ease: "easeOut",
          },
        }}
        exit={{
          x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
          y: direction === "up" ? -100 : direction === "down" ? 100 : 0,
          opacity: 0,
        }}
        className={className}
      >
        {children}
      </MotionDiv>
    </MotionAnimatePresence>
  );
};

export {
  MotionDiv,
  MotionH2,
  MotionP,
  MotionSpan,
  MotionAnimatePresence,
  MotionFadeIn,
};
