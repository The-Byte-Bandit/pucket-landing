import { Variants } from "framer-motion";

export const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.33, 0, 0.67, 1] },
  },
  exit: { opacity: 0, y: -20, transition: { duration: 0.6, ease: [0.33, 0, 0.67, 1] } },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.33, 0, 0.67, 1] },
  },
  exit: { opacity: 0, y: 30, transition: { duration: 0.6, ease: [0.33, 0, 0.67, 1] } },
};

export const fadeInOut: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1.2, ease: [0.33, 0, 0.67, 1] },
  },
  exit: { opacity: 0, transition: { duration: 0.6, ease: [0.33, 0, 0.67, 1] } },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
  exit: { opacity: 0, transition: { duration: 0.6, ease: [0.33, 0, 0.67, 1] } },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.1, ease: [0.33, 0, 0.67, 1] },
  },
  exit: { opacity: 0, x: -100, transition: { duration: 0.6, ease: [0.33, 0, 0.67, 1] } },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.1, ease: [0.33, 0, 0.67, 1] },
  },
  exit: { opacity: 0, x: 100, transition: { duration: 0.6, ease: [0.33, 0, 0.67, 1] } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: [0.33, 0, 0.67, 1] },
  },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.6, ease: [0.33, 0, 0.67, 1] } },
};

export const tilt: Variants = {
  initial: { scale: 1, rotate: 0 },
  animate: {
    scale: 1.05,
    rotate: 2,
    transition: { duration: 0.5, ease: [0.33, 0, 0.67, 1] },
  },
};