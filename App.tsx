import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowToEnjoy from './components/HowToEnjoy';
import Menu from './components/Menu';
import Story from './components/Story';
import Craftsmanship from './components/Craftsmanship';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="w-full min-h-screen flex flex-col font-sans text-sumi antialiased selection:bg-beer selection:text-sumi">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <HowToEnjoy />
        <Menu />
        <Story />
        <Craftsmanship />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;