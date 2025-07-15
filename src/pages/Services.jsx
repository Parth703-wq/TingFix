import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search, MapPin } from 'lucide-react';

const Services = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    { 
      id: 'cleaning', 
      name: 'Cleaning Services',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=300&h=200&fit=crop',
      description: 'Professional home cleaning services'
    },
    { 
      id: 'beauty', 
      name: 'Beauty & Wellness',
      image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=300&h=200&fit=crop',
      description: 'Beauty treatments at your doorstep'
    },
    { 
      id: 'electrical', 
      name: 'Electrical Services',
      image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=300&h=200&fit=crop',
      description: 'Licensed electrical services'
    },
    { 
      id: 'plumbing', 
      name: 'Plumbing Services',
      image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=300&h=200&fit=crop',
      description: 'Expert plumbing solutions'
    },
    { 
      id: 'appliances', 
      name: 'AC Repair Services',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=200&fit=crop',
      description: 'AC installation and repair'
    }
  ];

  const locations = [
    'Andheri West, Mumbai',
    'Bandra East, Mumbai', 
    'Powai, Mumbai',
    'Malad West, Mumbai',
    'Thane West, Mumbai',
    'Borivali East, Mumbai',
    'Juhu, Mumbai',
    'Kandivali West, Mumbai',
    'Versova, Mumbai',
    'Lokhandwala, Mumbai'
  ];

  const handleServiceSelect = (categoryId) => {
    navigate(`/service-professionals/${categoryId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section with Search */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 mb-8 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Professional Services</h1>
            <p className="text-xl mb-8 opacity-90">Connect with verified professionals for your home service needs</p>
            
            {/* Location Search */}
            <div className="max-w-2xl mx-auto relative">
              <div className="flex items-center bg-white rounded-full p-2 shadow-lg">
                <Search className="w-5 h-5 text-gray-400 ml-4" />
                <Input
                  placeholder="Search by location (e.g., Andheri, Bandra, Powai...)"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="border-0 focus:ring-0 text-gray-800 text-lg"
                />
              </div>
              {location && (
                <div className="absolute top-full left-0 right-0 bg-white rounded-lg shadow-lg mt-2 z-10 max-h-60 overflow-y-auto">
                  {locations
                    .filter(loc => loc.toLowerCase().includes(location.toLowerCase()))
                    .map((loc, index) => (
                      <button
                        key={index}
                        onClick={() => setLocation(loc)}
                        className="w-full text-left px-4 py-3 hover:bg-gray-100 text-gray-800 border-b last:border-b-0"
                      >
                        <MapPin className="w-4 h-4 inline mr-2 text-primary-500" />
                        {loc}
                      </button>
                    ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Service Categories Grid */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Choose Your Service</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map(category => (
              <Card 
                key={category.id} 
                className="cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group"
                onClick={() => handleServiceSelect(category.id)}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-gray-600">{category.description}</p>
                    <div className="mt-4 text-primary-600 font-medium group-hover:text-primary-700">
                      View Professionals →
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Services;