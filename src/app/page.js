

import React from 'react';
import HomePage from './components/Homepage.jsx';
import About from './components/About.jsx';
import Expertise from './components/Expertise.jsx';
import Services from './components/Services.jsx';
import Solutions from './components/Solutions.jsx';
import Values from './components/Values.jsx';
import Industries from './components/Industries.jsx';
import Milestones from './components/Milestones.jsx';
import ContactPromo from './components/ContactPromo.jsx';
import Footer from './components/Footer.jsx';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden">
      <HomePage />
      <About  />
      <Expertise  />
      <Services />
      <Solutions />
      <Values />
      <Industries />
      <Milestones />
      <ContactPromo  />
      <Footer />
    </main>
  );
}
