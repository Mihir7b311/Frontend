import { BrowserRouter as Router } from 'react-router-dom';
import AnimatedBackground from './components/AnimatedBackground/AnimatedBackground';
import AppRoutes from './routes';
import './styles/colors.css';    // Load colors first
import './styles/global.css';
import './styles/animations.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <AnimatedBackground />
        <div className="router-content">
          <AppRoutes />
        </div>
      </div>
    </Router>
  );
}

export default App;