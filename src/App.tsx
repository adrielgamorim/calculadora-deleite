import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import { Home } from '@pages/Home';
import { Ingredients } from '@pages/Ingredients';
import { Bundles } from '@pages/Bundles';
import { Sweets } from '@pages/Sweets';
import { Dashboard } from '@pages/Dashboard';
import { Config } from '@pages/Config';
import './App.css';

function App() {

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/ingredientes" element={<Ingredients />} />
          <Route path="/conjuntos" element={<Bundles />} />
          <Route path="/bolos" element={<Sweets />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/config" element={<Config />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App;
