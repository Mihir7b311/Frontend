import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './Dashboard.scss';

const tools = [
  {
    name: 'smart-contract',
    category: 'Smart Contracts',
    title: 'Vulnerability Analysis',
    description: 'Comprehensive static analysis of Solidity smart contracts. Detects security vulnerabilities, gas optimization opportunities, and compliance issues with industry standards.',
    features: ['Static Code Analysis', 'Gas Optimization', 'Compliance Verification', 'Risk Assessment'],
    icon: 'contract'
  },
  {
    name: 'wallet-scoring',
    category: 'Wallet Analysis',
    title: 'Risk Assessment',
    description: 'Advanced risk scoring system for wallet addresses. Analyzes transaction patterns, fund sources, behavioral indicators, and compliance red flags.',
    features: ['Risk Scoring Algorithm', 'Pattern Recognition', 'Source Verification', 'Behavioral Analysis'],
    icon: 'wallet'
  },
  {
    name: 'token-vulnerability',
    category: 'Token Security',
    title: 'Contract Evaluation',
    description: 'Deep security analysis of token contracts. Identifies potential vulnerabilities, liquidity risks, ownership concerns, and market manipulation vectors.',
    features: ['Security Vulnerability Scan', 'Liquidity Risk Analysis', 'Ownership Audit', 'Market Analysis'],
    icon: 'token'
  }
];

const DashboardPage = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <motion.div 
      className="dashboard-page"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div 
        className="page-header" 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="breadcrumb">Security Platform</div>
        <h1 className="page-title">
          Security <span className="title-accent">Tools</span>
        </h1>
        <p className="page-subtitle">
          Professional-grade blockchain security analysis tools for enterprises and security teams
        </p>
      </motion.div>

      <div className="tools-container">
        {tools.map((tool, index) => (
          <motion.div
            key={tool.name}
            className="tool-row"
            variants={cardVariants}
          >
            <motion.div
              className="tool-card"
              whileHover={{ 
                y: -12, 
                scale: 1.02,
                transition: { type: "spring", stiffness: 300, damping: 30 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="tool-header">
                <div className={`tool-icon ${tool.icon}`}></div>
                <div className="tool-info">
                  <div className="tool-category">{tool.category}</div>
                  <h2 className="tool-title">{tool.title}</h2>
                </div>
              </div>

              <p className="tool-description">{tool.description}</p>

              <div className="tool-features">
                <div className="features-list">
                  {tool.features.map((feature, i) => (
                    <div key={i} className="feature">{feature}</div>
                  ))}
                </div>
              </div>

              <div className="tool-action">
                <motion.button
                  className="action-button"
                  onClick={() => navigate(`/tool/${tool.name}`)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="button-text">Launch Tool</span>
                  <span className="button-arrow">→</span>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="dashboard-footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="footer-info">
          Enterprise Blockchain Security Platform
          <span className="version">v2.1.0</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DashboardPage;