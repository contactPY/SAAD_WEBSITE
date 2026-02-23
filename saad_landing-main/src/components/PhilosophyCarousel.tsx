import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb, Target, Rocket, ChevronLeft, ChevronRight } from 'lucide-react';

interface PhilosophyCard {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  borderColor: string;
  textColor: string;
}

const philosophyCards: PhilosophyCard[] = [
  {
    id: 1,
    title: "Innovation First",
    description: "We push boundaries and explore cutting-edge technologies to solve real-world problems. Our community thrives on creativity and forward-thinking approaches to AI and Data Science challenges.",
    icon: <Lightbulb className="w-16 h-16" />,
    gradient: "from-blue-600 via-blue-700 to-blue-800",
    borderColor: "border-blue-300",
    textColor: "text-blue-100"
  },
  {
    id: 2,
    title: "Excellence Driven",
    description: "We maintain high standards in technical skills, research, and professional development. Our members are committed to achieving outstanding results and pushing the envelope of what's possible.",
    icon: <Target className="w-16 h-16" />,
    gradient: "from-purple-600 via-purple-700 to-purple-800",
    borderColor: "border-purple-300",
    textColor: "text-purple-100"
  },
  {
    id: 3,
    title: "Growth Mindset",
    description: "We embrace challenges and continuously evolve our skills and knowledge together. Learning is a journey, and we support each other in reaching new heights in AI and Data Science expertise.",
    icon: <Rocket className="w-16 h-16" />,
    gradient: "from-green-600 via-green-700 to-green-800",
    borderColor: "border-green-300",
    textColor: "text-green-100"
  }
];

export default function PhilosophyCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying || isLoading) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % philosophyCards.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isLoading]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + philosophyCards.length) % philosophyCards.length);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % philosophyCards.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const currentCard = philosophyCards[currentIndex];

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="relative">
            <motion.div
              className="w-20 h-20 border-4 border-blue-500 border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-0 w-20 h-20 border-4 border-purple-500 border-b-transparent rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-gray-800 text-lg font-medium"
          >
            Loading Philosophy...
          </motion.p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-500 rounded-full opacity-10"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Our Philosophy
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The core values that drive our community and shape our approach to AI and Data Science
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative w-full max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 300, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -300, scale: 0.8 }}
              transition={{ 
                duration: 0.8,
                ease: [0.4, 0, 0.2, 1]
              }}
              className={`relative bg-gradient-to-br ${currentCard.gradient} rounded-3xl border-2 ${currentCard.borderColor} p-12 md:p-16 shadow-2xl backdrop-blur-sm`}
            >
              <div className="flex flex-col items-center text-center">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    delay: 0.3,
                    duration: 0.6,
                    ease: "backOut"
                  }}
                  className="text-white mb-8"
                >
                  {currentCard.icon}
                </motion.div>
                
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-3xl md:text-5xl font-bold text-white mb-6"
                >
                  {currentCard.title}
                </motion.h3>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className={`text-lg md:text-xl ${currentCard.textColor} max-w-3xl mx-auto leading-relaxed`}
                >
                  {currentCard.description}
                </motion.p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            onClick={goToPrevious}
            className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 bg-gray-100/80 backdrop-blur-sm border border-gray-300 rounded-full p-3 hover:bg-gray-200/80 transition-colors z-20"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </motion.button>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            onClick={goToNext}
            className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 bg-gray-100/80 backdrop-blur-sm border border-gray-300 rounded-full p-3 hover:bg-gray-200/80 transition-colors z-20"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </motion.button>
        </div>

        {/* Dots indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex space-x-3 mt-12"
        >
          {philosophyCards.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'w-12 h-3 bg-gray-800'
                  : 'w-3 h-3 bg-gray-400 hover:bg-gray-600'
              }`}
            />
          ))}
        </motion.div>

        {/* Auto-play toggle */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="mt-8 px-6 py-2 bg-gray-100/80 backdrop-blur-sm border border-gray-300 rounded-full text-gray-700 hover:bg-gray-200/80 transition-colors"
        >
          {isAutoPlaying ? 'Pause' : 'Play'} Auto-play
        </motion.button>
      </div>
    </div>
  );
}
