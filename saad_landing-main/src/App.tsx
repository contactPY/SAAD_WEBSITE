import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Vision from './components/Vision';
import Events from './components/Events';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-paper-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Vision />
        <Events />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
