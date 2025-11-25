
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Showcase from './components/Showcase';
import LeaderboardPreview from './components/LeaderboardPreview';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#030712] text-white selection:bg-indigo-500/30">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <LeaderboardPreview />
      </main>
      <Footer />
    </div>
  );
}

export default App;
