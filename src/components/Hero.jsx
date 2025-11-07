import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="hero-section"
    style={{
      backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/background.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "white"
    }}>
      <motion.h1
      className="hero-title"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: [0, -5, 0] }}     
      >
        Data Scientiste/IA | Développeuse Full Stack
      </motion.h1>

      <motion.p
        className="hero-subtitle"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Je transforme des idées en solutions numériques efficaces et élégantes
      </motion.p>
      <motion.a
        href="#projects"
        className="hero-button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Voir mes projets
      </motion.a>
    </section>
  );
};

export default Hero;
