import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import { Ingredients } from '@pages/Ingredients';
import { Bundles } from '@pages/Bundles';
import { Cakes } from '@pages/Cakes';
import { Dashboard } from '@pages/Dashboard/Dashboard';
import { DashboardOverview } from '@pages/Dashboard/DashboardOverview';
import { DashboardCalculator } from '@pages/Dashboard/DashboardCalculator';
import { Config } from '@pages/Config';
import '@styles/App.css';
import '@styles/DashboardDropdown.css';

function App() {

  return (
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
          <Route path="/config" element={<Config />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App;
