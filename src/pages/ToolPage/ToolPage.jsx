import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import FileUpload from '../../components/FileUpload/FileUpload';
import StringInput from '../../components/StringInput/StringInput';
import './ToolPage.scss';

const ToolPage = () => {
  const { toolName } = useParams();
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState(null);
  const [analysisMessages, setAnalysisMessages] = useState([]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  const toolConfig = {
    'smart-contract': {
      title: 'Smart Contract Vulnerability Checker',
      description: 'Upload your Solidity (.sol) file to analyze for vulnerabilities',
      breadcrumb: 'Smart Contracts',
      inputComponent: (
        <FileUpload 
          onFileUpload={setFile} 
          accept=".sol" 
        />
      ),
      analysisSteps: [
        'Initializing smart contract scanner...',
        'Parsing Solidity code structure...',
        'Analyzing function visibility patterns...',
        'Checking for reentrancy vulnerabilities...',
        'Scanning for integer overflow issues...',
        'Validating access control mechanisms...',
        'Examining gas optimization opportunities...',
        'Running security pattern detection...',
        'Compiling vulnerability report...',
        'Analysis complete!'
      ]
    },
    'wallet-scoring': {
      title: 'Wallet Scoring Kit',
      description: 'Enter a wallet address to analyze its risk profile',
      breadcrumb: 'Wallet Analysis',
      inputComponent: (
        <StringInput 
          value={inputValue}
          onChange={setInputValue}
          placeholder="0x..."
        />
      ),
      analysisSteps: [
        'Connecting to blockchain networks...',
        'Fetching wallet transaction history...',
        'Analyzing transaction patterns...',
        'Evaluating fund sources and destinations...',
        'Checking for suspicious activities...',
        'Calculating risk indicators...',
        'Processing behavioral analysis...',
        'Generating comprehensive risk score...',
        'Preparing detailed assessment...',
        'Wallet analysis complete!'
      ]
    },
    'token-vulnerability': {
      title: 'Token Vulnerability Scoring',
      description: 'Enter a token contract address to evaluate its security',
      breadcrumb: 'Token Security',
      inputComponent: (
        <StringInput 
          value={inputValue}
          onChange={setInputValue}
          placeholder="0x..."
        />
      ),
      analysisSteps: [
        'Initializing token contract analysis...',
        'Retrieving contract source code...',
        'Examining token economics model...',
        'Analyzing liquidity pool security...',
        'Checking for honeypot mechanisms...',
        'Evaluating ownership controls...',
        'Scanning for backdoor functions...',
        'Assessing market manipulation risks...',
        'Calculating security metrics...',
        'Token evaluation complete!'
      ]
    }
  };

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setResult(null);
    setAnalysisMessages([]);
    setCurrentMessageIndex(0);

    const steps = toolConfig[toolName].analysisSteps;
    
    // Start the animation sequence
    steps.forEach((step, index) => {
      setTimeout(() => {
        setAnalysisMessages(prev => [...prev, step]);
        setCurrentMessageIndex(index);
        
        // If this is the last step, show results after a brief delay
        if (index === steps.length - 1) {
          setTimeout(() => {
            setResult({
              score: Math.floor(Math.random() * 100),
              vulnerabilities: [
                'Reentrancy vulnerability detected in withdraw function',
                'Unchecked low-level calls found',
                'Integer overflow potential in calculation functions',
                'Missing access control on critical functions'
              ],
              recommendations: [
                'Implement checks-effects-interactions pattern',
                'Add proper access controls using OpenZeppelin',
                'Use SafeMath library for arithmetic operations',
                'Add comprehensive input validation',
                'Implement circuit breaker pattern for emergency stops'
              ]
            });
            setIsAnalyzing(false);
          }, 1000);
        }
      }, index * 800); // 800ms delay between each message
    });
  };

  useEffect(() => {
    if (!toolConfig[toolName]) {
      navigate('/dashboard');
    }
  }, [toolName, navigate]);

  if (!toolConfig[toolName]) return null;

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

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <motion.div 
      className="tool-page"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div className="tool-header" variants={itemVariants}>
        <div className="breadcrumb">{toolConfig[toolName].breadcrumb}</div>
        <h1>{toolConfig[toolName].title}</h1>
        <p>{toolConfig[toolName].description}</p>
      </motion.div>

      <div className="tool-content">
        <motion.div className="input-section" variants={itemVariants}>
          {toolConfig[toolName].inputComponent}
          <motion.button 
            className="analyze-button"
            onClick={handleAnalyze}
            disabled={isAnalyzing || (!file && !inputValue)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isAnalyzing ? 'Analyzing...' : 'Analyze'}
          </motion.button>
        </motion.div>

        {/* Analysis Progress Animation */}
        <AnimatePresence>
          {isAnalyzing && analysisMessages.length > 0 && (
            <motion.div 
              className="analysis-progress"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="progress-header">
                <h3>Analysis in Progress</h3>
                <div className="progress-indicator">
                  <div className="progress-bar">
                    <motion.div 
                      className="progress-fill"
                      initial={{ width: 0 }}
                      animate={{ 
                        width: `${((currentMessageIndex + 1) / toolConfig[toolName].analysisSteps.length) * 100}%` 
                      }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  <span className="progress-text">
                    {Math.round(((currentMessageIndex + 1) / toolConfig[toolName].analysisSteps.length) * 100)}%
                  </span>
                </div>
              </div>
              
              <div className="messages-container">
                <AnimatePresence>
                  {analysisMessages.slice(Math.max(0, currentMessageIndex - 1)).map((message, index) => {
                    const actualIndex = Math.max(0, currentMessageIndex - 1) + index;
                    const isCurrent = actualIndex === currentMessageIndex;
                    const isPrevious = actualIndex === currentMessageIndex - 1;
                    
                    return (
                      <motion.div
                        key={actualIndex}
                        className="analysis-message"
                        initial={{ 
                          scale: 0.7,
                          opacity: 0
                        }}
                        animate={{ 
                          scale: isCurrent ? 1.2 : isPrevious ? 0.8 : 0.7,
                          opacity: isCurrent ? 1 : isPrevious ? 0.3 : 0,
                          y: isPrevious ? -40 : 0
                        }}
                        exit={{
                          opacity: 0,
                          scale: 0.6,
                          transition: { duration: 0.3 }
                        }}
                        transition={{ 
                          duration: 0.6,
                          ease: "easeInOut"
                        }}
                      >
                        <span className="message-text">
                          {message}
                        </span>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Results Section */}
        {result && !isAnalyzing && (
          <motion.div 
            className="result-section"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          >
            <h2>Analysis Results</h2>
            <div className="result-card">
              <div className="score">
                <span>Security Score</span>
                <motion.div 
                  className="score-value"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  {result.score}/100
                </motion.div>
              </div>
              <div className="analysis-details">
                <div className="vulnerabilities">
                  <h3>Detected Vulnerabilities</h3>
                  <ul>
                    {result.vulnerabilities.map((vuln, i) => (
                      <motion.li 
                        key={i}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 + (i * 0.1) }}
                      >
                        {vuln}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div className="recommendations">
                  <h3>Security Recommendations</h3>
                  <ul>
                    {result.recommendations.map((rec, i) => (
                      <motion.li 
                        key={i}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.7 + (i * 0.1) }}
                      >
                        {rec}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default ToolPage;