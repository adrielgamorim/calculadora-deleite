import Layout from './Layout';
import { Cakes } from '@pages/Cakes';
import { Bundles } from '@pages/Bundles';
import { Ingredients } from '@pages/Ingredients';
import { Dashboard } from '@pages/Dashboard/Dashboard';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { DashboardOverview } from '@pages/Dashboard/DashboardOverview';
import { DashboardCalculator } from '@pages/Dashboard/DashboardCalculator';
import { ThemeProvider } from '@contexts/ThemeContext';
import { GlobalStyles } from '@styles/GlobalStyles';

function App() {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Dashboard />}>
              <Route index element={<DashboardOverview />} />
              <Route path="calculadora" element={<DashboardCalculator />} />
            </Route>

            <Route path="/ingredientes" element={<Ingredients />} />
            <Route path="/conjuntos" element={<Bundles />} />
            <Route path="/bolos" element={<Cakes />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App;
