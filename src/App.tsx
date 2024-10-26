import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Dashboard from './components/Dashboard';
import Features from './components/Features';
import Footer from './components/Footer';
import LoanForm from './components/LoanForm';
import LoginModal from './components/LoginModal';
import { AppProvider } from './context/AppContext';

function App() {
  return (
    <AppProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
        <Navbar />
        <main>
          <Hero />
          <Dashboard />
          <Features />
        </main>
        <Footer />
        <LoanForm />
        <LoginModal />
      </div>
    </AppProvider>
  );
}

export default App;