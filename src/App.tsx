import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Showcase from './components/Showcase';
import LeaderboardPreview from './components/LeaderboardPreview';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',
        smooth: 1.5,
        effects: true,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-[#030712] text-white selection:bg-indigo-500/30">
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Hero />
            <Features />
            <Showcase />
            <LeaderboardPreview />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
