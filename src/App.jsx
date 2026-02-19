import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Why from './components/Why';
import FloorPlan from './components/FloorPlan';
import Capacities from './components/Capacities';
import UseCases from './components/UseCases';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import './index.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="app">
      <Navbar onOpenModal={openModal} />
      <main>
        <Hero onOpenModal={openModal} />
        <TrustBar />
        <Why />
        <Gallery />
        <Capacities />
        <UseCases />
        <FloorPlan />
      </main>
      <Footer />
      <BookingModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;
