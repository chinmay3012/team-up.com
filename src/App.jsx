import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import DemoWidget from './components/DemoWidget';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-text-main selection:bg-primary selection:text-primary-foreground">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <DemoWidget />
        <Testimonials />
        <Pricing />

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-surface to-background pointer-events-none"></div>
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-heading">Ready to play?</h2>
            <p className="text-xl text-text-muted mb-10">
              Join thousands of players finding their perfect match every day.
            </p>
            <button className="bg-primary hover:bg-primary-hover text-primary-foreground px-10 py-5 rounded-full text-xl font-bold transition-all shadow-[0_0_30px_rgba(0,229,153,0.4)] hover:shadow-[0_0_50px_rgba(0,229,153,0.6)] hover:scale-105">
              Download App
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
