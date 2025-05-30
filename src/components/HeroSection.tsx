
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Search, MapPin, Download } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [location, setLocation] = useState('');
  const [service, setService] = useState('');

  const slides = [
    {
      title: "Professional Cleaning at Your Doorstep",
      subtitle: "Deep cleaning, regular maintenance, and more",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop"
    },
    {
      title: "Beauty Services at Home",
      subtitle: "Salon-quality treatments in the comfort of your home",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop"
    },
    {
      title: "Expert Home Repairs",
      subtitle: "Trusted professionals for all your repair needs",
      image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&h=600&fit=crop"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[600px] overflow-hidden">
      {/* Background Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl mb-8 animate-fade-in">
            {slides[currentSlide].subtitle}
          </p>

          {/* Search Bar */}
          <div className="bg-white rounded-2xl p-4 mb-6 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  placeholder="Enter your location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="flex-1 border-none outline-none text-gray-800"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Search className="w-5 h-5 text-gray-500" />
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="flex-1 border-none outline-none text-gray-800 bg-transparent"
                >
                  <option value="">Select service type</option>
                  <option value="cleaning">Cleaning</option>
                  <option value="beauty">Beauty & Wellness</option>
                  <option value="repairs">Home Repairs</option>
                  <option value="fitness">Fitness</option>
                </select>
              </div>
              <Button className="bg-primary-500 hover:bg-primary-600 text-white h-12">
                Search Services
              </Button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary-500 hover:bg-primary-600">
              Explore Services
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
              <Download className="w-4 h-4 mr-2" />
              Download App
            </Button>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
