
import React from 'react';
import Header from './components/homepage/Header.jsx';
import About from './components/homepage/About.jsx';
import Expertise from './components/homepage/Expertise.jsx';
import Services from './components/homepage/Services.jsx';
import Solutions from './components/homepage/Solutions.jsx';
import Values from './components/homepage/Values.jsx';
import Industries from './components/homepage/Industries.jsx';
import Milestones from './components/homepage/Milestones.jsx';
import ContactPromo from './components/homepage/ContactPromo.jsx';
import Footer from './components/Footer.jsx';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden relative">
      <Header />
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
