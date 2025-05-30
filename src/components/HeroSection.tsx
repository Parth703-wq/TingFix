
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Search, MapPin, Play, CheckCircle, Star, Zap } from 'lucide-react';

const HeroSection = () => {
  const [location, setLocation] = useState('');
  const [service, setService] = useState('');

  const features = [
    { icon: CheckCircle, text: "Verified Professionals" },
    { icon: Star, text: "5-Star Rated Service" },
    { icon: Zap, text: "Same-Day Service" }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-50 via-white to-teal-50 overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-primary-200 to-primary-300 rounded-full floating-element opacity-60"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-secondary-200 to-secondary-300 rounded-full floating-element opacity-60" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-br from-accent-200 to-accent-300 rounded-full floating-element opacity-60" style={{animationDelay: '4s'}}></div>

      <div className="container mx-auto px-4 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-100 to-secondary-100 px-4 py-2 rounded-full text-sm font-medium text-primary-700">
              <Star className="w-4 h-4" />
              <span>Trusted by 100,000+ customers</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent">
                Professional
              </span>
              <br />
              <span className="text-gray-900">Home Services</span>
              <br />
              <span className="text-gray-600 text-3xl md:text-4xl">at your doorstep</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Expert technicians, transparent pricing, and guaranteed satisfaction. Get your home fixed by certified professionals in minutes.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 glass-card px-4 py-2 rounded-lg">
                  <feature.icon className="w-5 h-5 text-primary-600" />
                  <span className="text-sm font-medium text-gray-700">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Search Bar */}
            <div className="glass-card p-6 rounded-2xl space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Book a Service Now</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-3 p-4 bg-white rounded-xl border border-purple-100 shadow-sm">
                  <MapPin className="w-5 h-5 text-primary-500" />
                  <input
                    type="text"
                    placeholder="Your location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="flex-1 border-none outline-none text-gray-800 bg-transparent"
                  />
                </div>
                <div className="flex items-center space-x-3 p-4 bg-white rounded-xl border border-purple-100 shadow-sm">
                  <Search className="w-5 h-5 text-primary-500" />
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="flex-1 border-none outline-none text-gray-800 bg-transparent"
                  >
                    <option value="">Select service</option>
                    <option value="repair">Home Repairs</option>
                    <option value="appliances">Appliance Services</option>
                    <option value="cleaning">Cleaning Services</option>
                    <option value="maintenance">Maintenance</option>
                  </select>
                </div>
                <Button className="bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white h-14 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  Find Experts
                </Button>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300">
                Book Now
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-primary-300 text-primary-700 hover:bg-primary-50 text-lg px-8 py-4 transition-all duration-300">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative animate-slide-up">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=700&fit=crop&crop=center"
                alt="Professional Home Services"
                className="rounded-3xl shadow-2xl w-full max-w-lg mx-auto"
              />
              
              {/* Floating Stats Cards */}
              <div className="absolute -top-6 -left-6 glass-card p-4 rounded-xl shadow-lg floating-element">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">4.9★</div>
                  <div className="text-sm text-gray-600">Customer Rating</div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 glass-card p-4 rounded-xl shadow-lg floating-element" style={{animationDelay: '1s'}}>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary-600">24/7</div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
              </div>
            </div>
            
            {/* Background Gradient Circle */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-200 to-secondary-200 rounded-full opacity-20 scale-110 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
