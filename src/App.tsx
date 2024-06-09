import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Menu from './components/menu/Menu';
import About from './pages/about/About';
import Team from './pages/about/team/Team';
import Contact from './pages/contact/Contact';
import Footer from './components/footer/Footer';
import LogIn from './pages/log-in/LogIn';
import SignUp from './pages/sign-up/SignUp';
import Home from './pages/home/Home';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
};

const AppContent: React.FC = () => {
  const location = useLocation();
  const [hideElements, setHideElements] = useState(false);
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';

  useEffect(() => {
    setHideElements(isAuthPage);
  }, [isAuthPage]);

  return (
    <>
      {!hideElements && <Menu />}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LogIn setHideElements={setHideElements} />} />
        <Route path="/signup" element={<SignUp setHideElements={setHideElements} />} />
      </Routes>
      {!hideElements && <Footer />}
    </>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

export default App;
