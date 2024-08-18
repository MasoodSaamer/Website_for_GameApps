import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import Workflow from './components/Workflow';
import Price from './components/Price';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import PublishedGames from './components/Published_games/PublishedGames'; // Import your new component

const AppRoutes = () => {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <div className="max-w-7xl mx-auto pt-20 px-6">
                <HeroSection />
                <Workflow />
                <FeatureSection />
              </div>
              <Testimonials />
              <Footer />
            </>
          } />
          <Route path="/published-games" element={<PublishedGames />} />
        </Routes>
      </Router>
    );
  }
  

export default AppRoutes;
