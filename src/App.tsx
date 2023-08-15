import React from 'react';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Activities from './components/Activities';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';


function App() {
  return (
    <main className="flex min-h-screen portrait:w-screen landscape:w-full flex-col items-center justify-between font-mono bg-[#1a0623]">
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Activities/>
      <Contact/>
      <Footer/>
    </main>
  );
}

export default App;
