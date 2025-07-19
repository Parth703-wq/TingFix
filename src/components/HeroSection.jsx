import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Search, MapPin, CheckCircle, Star, Users, Shield, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const [location, setLocation] = useState('');
  const [service, setService] = useState('');
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/services');
  };

  const handleViewServices = () => {
    navigate('/services');
  };

  const handleFindProfessionals = () => {
    if (service) {
      navigate(`/services?category=${service}`);
    } else {
      navigate('/services');
    }
  };

  const stats = [
    { number: "50,000+", label: "Happy Customers" },
    { number: "1,000+", label: "Verified Professionals" },
    { number: "24/7", label: "Customer Support" },
    { number: "4.9★", label: "Average Rating" }
  ];

  const features = [
    { icon: Shield, text: "Background Verified Technicians" },
    { icon: Clock, text: "Same Day Service Available" },
    { icon: Star, text: "Guaranteed Quality Service" }
  ];

  return (
    <section className="relative bg-white">
      {/* Main Hero Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Trust Badge */}
            <div className="inline-flex items-center space-x-2 bg-emerald-50 px-4 py-2 rounded-full border border-emerald-200">
              <Shield className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-medium text-emerald-700">Trusted by 50,000+ Customers</span>
            </div>
            
            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Professional
                <span className="text-primary-600 block">Home Services</span>
                <span className="text-gray-600 text-3xl lg:text-4xl font-normal">You Can Trust</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                Connect with verified, experienced professionals for all your home service needs. 
                Quality work, transparent pricing, guaranteed satisfaction.
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center">
                    <feature.icon className="w-4 h-4 text-primary-600" />
                  </div>
                  <span className="text-gray-700 font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 text-lg font-semibold"
                onClick={handleGetStarted}
              >
                Get Started Today
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg"
                onClick={handleViewServices}
              >
                View Our Services
              </Button>
            </div>
          </div>

          {/* Right Content - Service Booking Form */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Book a Service</h3>
                <p className="text-gray-600">Get matched with the right professional in minutes</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Location</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Enter your area"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Required</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none bg-white"
                    >
                      <option value="">Select a service</option>
                      <option value="plumbing">Plumbing Services</option>
                      <option value="electrical">Electrical Work</option>
                      <option value="appliances">Appliance Repair</option>
                      <option value="cleaning">Professional Cleaning</option>
                      <option value="painting">Painting Services</option>
                      <option value="carpentry">Carpentry Work</option>
                    </select>
                  </div>
                </div>

                <Button 
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 text-lg font-semibold"
                  onClick={handleFindProfessionals}
                >
                  Find Professionals
                </Button>
              </div>

              <div className="text-center">
                <p className="text-sm text-gray-500">
                  Free quotes • No booking fees • Instant matching
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;