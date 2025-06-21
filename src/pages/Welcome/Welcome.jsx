import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './Welcome.scss';

const WelcomePage = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.4, 0, 0.2, 1],
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <motion.div 
      className="welcome-page"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="welcome-content">
        <motion.div className="title-section" variants={itemVariants}>
          <div className="logo-accent"></div>
          <div className="category-label">Enterprise Security Platform</div>
        </motion.div>

        <motion.h1 className="main-title" variants={itemVariants}>
          <span className="highlight">Blockchain</span>{' '}
          <span className="accent-word">Security</span>{' '}
          Suite
        </motion.h1>

        <motion.p className="subtitle" variants={itemVariants}>
          Advanced tools for smart contract auditing, wallet security analysis, 
          and comprehensive blockchain risk assessment. Built for security professionals 
          and enterprises.
        </motion.p>

        <motion.div className="cta-section" variants={itemVariants}>
          <motion.button
            className="primary-button"
            onClick={() => navigate('/dashboard')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Access Platform
            <span className="button-icon">→</span>
          </motion.button>
        </motion.div>

        <motion.div className="features-hint" variants={itemVariants}>
          <div className="feature-item">
            <div className="feature-icon"></div>
            <span>Smart Contract Analysis</span>
          </div>
          <div className="feature-item">
            <div className="feature-icon"></div>
            <span>Wallet Risk Scoring</span>
          </div>
          <div className="feature-item">
            <div className="feature-icon"></div>
            <span>Token Vulnerability Detection</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WelcomePage;