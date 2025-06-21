import { BrowserRouter as Router } from 'react-router-dom';
import AnimatedBackground from './components/AnimatedBackground/AnimatedBackground';
import AppRoutes from './routes';
import './styles/global.css';
import './styles/animations.css';
import './styles/colors.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <AnimatedBackground />
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;