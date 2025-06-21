import { motion } from 'framer-motion';
import './StringInput.scss';

const StringInput = ({ value, onChange, placeholder }) => {
  return (
    <motion.div 
      className="string-input-container"
      whileHover={{ scale: 1.02 }}
    >
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="string-input"
      />
    </motion.div>
  );
};

export default StringInput;