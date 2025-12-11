import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './HomePage';
import PrivacyPolicy from './PrivacyPolicy';
import Terms from './Terms';
import HexaMergeDetail from './HexaMergeDetail';
import SubifyDetail from './SubifyDetail';

// Smooth scroll component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

// Smooth scroll to anchor
function SmoothScroll() {
  useEffect(() => {
    const handleClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        e.preventDefault();
        const id = target.getAttribute('href');
        const element = document.querySelector(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <SmoothScroll />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/projects/hexamerge" element={<HexaMergeDetail />} />
        <Route path="/projects/subify" element={<SubifyDetail />} />
      </Routes>
    </Router>
  );
}
