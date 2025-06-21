import { Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/Welcome/Welcome';
import DashboardPage from './pages/Dashboard/Dashboard';
import ToolPage from './pages/ToolPage/ToolPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/tool/:toolName" element={<ToolPage />} />
    </Routes>
  );
};

export default AppRoutes;