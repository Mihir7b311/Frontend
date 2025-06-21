import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import GlowButton from '../../components/GlowButton/GlowButton';
import './Dashboard.scss';

const tools = [
  {
    name: 'smart-contract',
    title: 'Smart Contract Vulnerability Checker',
    description: 'Upload .sol files to detect vulnerabilities in your smart contracts'
  },
  {
    name: 'wallet-scoring',
    title: 'Wallet Scoring Kit',
    description: 'Analyze wallet addresses for risk assessment and scoring'
  },
  {
    name: 'token-vulnerability',
    title: 'Token Vulnerability Scoring',
    description: 'Evaluate token contracts for potential security issues'
  }
];

const DashboardPage = () => {
  const navigate = useNavigate();

  return (
    <motion.div 
      className="dashboard-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="dashboard-title">Security Tools</h1>
      <div className="tools-grid">
        {tools.map((tool, index) => (
          <motion.div
            key={tool.name}
            className="tool-card"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            whileHover={{ y: -5 }}
          >
            <h2>{tool.title}</h2>
            <p>{tool.description}</p>
            <GlowButton 
              text="Open Tool" 
              onClick={() => navigate(`/tool/${tool.name}`)} 
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default DashboardPage;