import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Network from './pages/Network';
import About from './pages/About';
import Contact from './pages/Contact';
import Press from './pages/Press';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/om-netvaerket" element={<Network />} />
          <Route path="/om-isabella" element={<About />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/presse" element={<Press />} />
          <Route path="/cookie-og-privatlivspolitik" element={<Privacy />} />
          <Route path="/handels-og-abonnementsbetingelser" element={<Terms />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
