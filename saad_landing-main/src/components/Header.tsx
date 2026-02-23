import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.95]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroHeight = window.innerHeight;
      
      setIsScrolled(scrollPosition > 50);
      setIsHeroVisible(scrollPosition < heroHeight - 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.header
      style={{ opacity: headerOpacity }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isHeroVisible ? '-translate-y-full' : 'translate-y-0'
      } ${
        isScrolled ? 'bg-paper-white shadow-lg' : 'bg-paper-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <Sparkles className={`w-8 h-8 ${isScrolled ? 'text-pure-black' : 'text-pure-black'}`} />
            <span className={`text-xl font-bold ${isScrolled ? 'text-pure-black' : 'text-pure-black'}`}>
              SAAD NMIET
            </span>
          </motion.div>

          <nav className="hidden md:flex space-x-8">
            {['About', 'Vision', 'Events', 'Team', 'Contact'].map((item, index) => (
              <motion.button
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`font-medium transition-colors ${
                  isScrolled ? 'text-soft-black hover:text-pure-black' : 'text-soft-black hover:text-pure-black'
                }`}
              >
                {item}
              </motion.button>
            ))}
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-pure-black' : 'text-pure-black'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-pure-black' : 'text-pure-black'}`} />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-paper-white shadow-lg"
        >
          <div className="px-4 py-4 space-y-3">
            {['About', 'Vision', 'Events', 'Team', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left py-2 text-soft-black hover:text-pure-black font-medium"
              >
                {item}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
