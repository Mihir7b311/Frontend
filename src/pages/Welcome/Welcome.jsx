import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import GlowButton from '../../components/GlowButton/GlowButton';
import './Welcome.scss';

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <motion.div 
      className="welcome-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="welcome-content">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Blockchain Security Suite
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Advanced tools for smart contract auditing and wallet security
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <GlowButton 
            text="Enter Dashboard" 
            onClick={() => navigate('/dashboard')} 
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WelcomePage;