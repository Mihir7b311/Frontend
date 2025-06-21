import { motion } from 'framer-motion';
import './GlowButton.scss';

const GlowButton = ({ text, onClick }) => {
  return (
    <motion.button
      className="glow-button"
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {text}
    </motion.button>
  );
};

export default GlowButton;