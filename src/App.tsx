import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import { Home } from './Pages/Home';
import { Ingredients } from './Pages/Ingredients';
import { Bundles } from './Pages/Bundles';
import { Sweets } from './Pages/Sweets';
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
        </Route>
      </Routes>
    </Router>
  )
}

export default App;
