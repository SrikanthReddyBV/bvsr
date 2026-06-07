"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function ScrollReveal({ children, delay = 0, y = 40 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ 
        duration: 0.8, 
        delay: delay, 
        ease: [0.16, 1, 0.3, 1] // Custom ultra-smooth cinematic easing
      }}
    >
      {children}
    </motion.div>
  );
}