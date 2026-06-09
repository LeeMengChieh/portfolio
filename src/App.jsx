import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// Helpers
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import DesignWork from './pages/DesignWork';
import Illustration from './pages/Illustration';
import JapaneseWork from './pages/JapaneseWork';
import DesignDetail from './pages/DesignDetail';
import IllustrationDetail from './pages/IllustrationDetail';
import JapaneseDetail from './pages/JapaneseDetail';

// Stylesheets
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/reset.css';
import './styles/button.css';
import './styles/index.css';
import './styles/aboutMe.css';
import './styles/design.css';
import './styles/work.css';
import './styles/work-ill.css';
import './styles/work-jp.css';
import './styles/global-overrides.css';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/design" element={<DesignWork />} />
        <Route path="/design/:id" element={<DesignDetail />} />
        <Route path="/illustration" element={<Illustration />} />
        <Route path="/illustration/:id" element={<IllustrationDetail />} />
        <Route path="/japanese" element={<JapaneseWork />} />
        <Route path="/japanese/:id" element={<JapaneseDetail />} />
      </Routes>
    </Router>
  );
}
