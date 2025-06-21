import { motion } from 'framer-motion';
import './AnimatedBackground.scss';

const AnimatedBackground = () => {
  return (
    <div className="animated-background">
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="particle"
          initial={{
            x: Math.random() * 100,
            y: Math.random() * 100,
            opacity: 0
          }}
          animate={{
            x: [null, Math.random() * 100],
            y: [null, Math.random() * 100],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear'
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;