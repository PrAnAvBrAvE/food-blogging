import React from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ArticlesSection from './components/ArticlesSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <AboutSection />
      <ArticlesSection />
      <Footer />
    </div>
  );
};

export default App;