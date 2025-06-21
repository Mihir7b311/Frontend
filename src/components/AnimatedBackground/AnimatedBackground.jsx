import { motion } from 'framer-motion';
import './AnimatedBackground.scss';

const AnimatedBackground = () => {
  // Minimal, elegant particles
  const particles = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    size: Math.random() * 2 + 1,
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 10,
  }));

  return (
    <div className="animated-background">
      {/* Subtle grid overlay */}
      <div className="grid-overlay" />
      
      {/* Minimal floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={`particle-${particle.id}`}
          className="particle"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          initial={{
            x: `${particle.initialX}vw`,
            y: `${particle.initialY}vh`,
            opacity: 0,
          }}
          animate={{
            x: [
              `${particle.initialX}vw`,
              `${(particle.initialX + 10) % 100}vw`,
              `${particle.initialX}vw`
            ],
            y: [
              `${particle.initialY}vh`,
              `${(particle.initialY + 8) % 100}vh`,
              `${particle.initialY}vh`
            ],
            opacity: [0, 0.4, 0.2, 0.4, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            repeatType: 'loop',
            delay: particle.delay,
            ease: 'linear',
          }}
        />
      ))}

      {/* Ambient background gradient */}
      <motion.div 
        className="ambient-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
      />
    </div>
  );
};

export default AnimatedBackground;