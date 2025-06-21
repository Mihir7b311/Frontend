import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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

  const toolConfig = {
    'smart-contract': {
      title: 'Smart Contract Vulnerability Checker',
      description: 'Upload your Solidity (.sol) file to analyze for vulnerabilities',
      inputComponent: (
        <FileUpload 
          onFileUpload={setFile} 
          accept=".sol" 
        />
      )
    },
    'wallet-scoring': {
      title: 'Wallet Scoring Kit',
      description: 'Enter a wallet address to analyze its risk profile',
      inputComponent: (
        <StringInput 
          value={inputValue}
          onChange={setInputValue}
          placeholder="0x..."
        />
      )
    },
    'token-vulnerability': {
      title: 'Token Vulnerability Scoring',
      description: 'Enter a token contract address to evaluate its security',
      inputComponent: (
        <StringInput 
          value={inputValue}
          onChange={setInputValue}
          placeholder="0x..."
        />
      )
    }
  };

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    // Simulate analysis
    setTimeout(() => {
      setResult({
        score: Math.floor(Math.random() * 100),
        vulnerabilities: ['Reentrancy', 'Unchecked low-level calls'],
        recommendations: ['Use checks-effects-interactions pattern', 'Implement proper access controls']
      });
      setIsAnalyzing(false);
    }, 2000);
  };

  useEffect(() => {
    if (!toolConfig[toolName]) {
      navigate('/dashboard');
    }
  }, [toolName, navigate]);

  if (!toolConfig[toolName]) return null;

  return (
    <motion.div 
      className="tool-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="tool-header">
        <h1>{toolConfig[toolName].title}</h1>
        <p>{toolConfig[toolName].description}</p>
      </div>

      <div className="tool-content">
        <div className="input-section">
          {toolConfig[toolName].inputComponent}
          <button 
            className="analyze-button"
            onClick={handleAnalyze}
            disabled={isAnalyzing || (!file && !inputValue)}
          >
            {isAnalyzing ? 'Analyzing...' : 'Analyze'}
          </button>
        </div>

        {result && (
          <motion.div 
            className="result-section"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2>Analysis Results</h2>
            <div className="result-card">
              <div className="score">
                <span>Security Score</span>
                <div className="score-value">{result.score}/100</div>
              </div>
              <div className="vulnerabilities">
                <h3>Detected Vulnerabilities:</h3>
                <ul>
                  {result.vulnerabilities.map((vuln, i) => (
                    <li key={i}>{vuln}</li>
                  ))}
                </ul>
              </div>
              <div className="recommendations">
                <h3>Recommendations:</h3>
                <ul>
                  {result.recommendations.map((rec, i) => (
                    <li key={i}>{rec}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default ToolPage;