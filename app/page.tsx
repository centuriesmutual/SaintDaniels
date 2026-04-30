'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <PageTransition>
      <Navbar />
      <div className="home-page" style={{ 
        margin: 0, 
        padding: 0, 
        minHeight: 'auto', 
        paddingBottom: '12rem',
        background: 'linear-gradient(135deg, #f5f1e8 0%, #e8dcc6 100%)'
      }}>
        <Hero />
      </div>
      <Footer />
    </PageTransition>
  );
}
