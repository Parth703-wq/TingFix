
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Search, MapPin, Download, Shield, Award, Users } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [location, setLocation] = useState('');
  const [service, setService] = useState('');

  const slides = [
    {
      title: "Professional Home Repairs & Maintenance",
      subtitle: "Certified technicians for all your home service needs",
      image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&h=600&fit=crop"
    },
    {
      title: "Expert Appliance Installation & Repair",
      subtitle: "Quick, reliable service for all home appliances",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop"
    },
    {
      title: "Professional Cleaning Services",
      subtitle: "Deep cleaning and maintenance by trained professionals",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[700px] overflow-hidden">
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
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl text-white">
          <div className="flex items-center space-x-2 mb-4">
            <Shield className="w-6 h-6 text-secondary-400" />
            <span className="text-secondary-400 font-semibold">Trusted by 50,000+ customers</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in leading-tight">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl mb-8 animate-fade-in text-gray-200">
            {slides[currentSlide].subtitle}
          </p>

          {/* Search Bar */}
          <div className="bg-white rounded-2xl p-6 mb-8 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg border">
                <MapPin className="w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  placeholder="Enter your location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="flex-1 border-none outline-none text-gray-800 bg-transparent"
                />
              </div>
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg border">
                <Search className="w-5 h-5 text-gray-500" />
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="flex-1 border-none outline-none text-gray-800 bg-transparent"
                >
                  <option value="">Select service type</option>
                  <option value="repair">Home Repairs</option>
                  <option value="appliances">Appliance Services</option>
                  <option value="cleaning">Cleaning Services</option>
                  <option value="maintenance">Maintenance</option>
                </select>
              </div>
              <Button className="bg-primary-600 hover:bg-primary-700 text-white h-14 text-lg font-semibold">
                Find Services
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-6 h-6 text-secondary-400 mr-2" />
                <span className="text-2xl font-bold">50K+</span>
              </div>
              <p className="text-gray-300">Happy Customers</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Award className="w-6 h-6 text-secondary-400 mr-2" />
                <span className="text-2xl font-bold">1000+</span>
              </div>
              <p className="text-gray-300">Certified Technicians</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Shield className="w-6 h-6 text-secondary-400 mr-2" />
                <span className="text-2xl font-bold">20+</span>
              </div>
              <p className="text-gray-300">Cities Served</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary-600 hover:bg-primary-700 text-lg px-8 py-4">
              Book a Service
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-4">
              <Download className="w-5 h-5 mr-2" />
              Download App
            </Button>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
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
