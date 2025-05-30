
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Star, Clock, MapPin } from 'lucide-react';

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [rating, setRating] = useState('all');

  const services = [
    {
      id: 1,
      title: 'Deep Home Cleaning',
      category: 'cleaning',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop',
      price: 1500,
      duration: '3-4 hours',
      rating: 4.8,
      reviews: 2847,
      description: 'Comprehensive deep cleaning for your entire home including kitchen, bathrooms, and all rooms.'
    },
    {
      id: 2,
      title: 'Salon at Home - Hair & Beauty',
      category: 'beauty',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop',
      price: 2000,
      duration: '2-3 hours',
      rating: 4.9,
      reviews: 1923,
      description: 'Professional hair styling, facial, and beauty treatments in the comfort of your home.'
    },
    {
      id: 3,
      title: 'AC Service & Repair',
      category: 'appliances',
      image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400&h=300&fit=crop',
      price: 800,
      duration: '1-2 hours',
      rating: 4.7,
      reviews: 3421,
      description: 'Complete AC maintenance, gas refilling, and repair services by certified technicians.'
    },
    {
      id: 4,
      title: 'Personal Fitness Trainer',
      category: 'fitness',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
      price: 1200,
      duration: '1 hour',
      rating: 4.6,
      reviews: 856,
      description: 'Certified personal trainers for customized workout sessions at your home or nearby park.'
    },
    {
      id: 5,
      title: 'Plumbing Services',
      category: 'repairs',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      price: 500,
      duration: '1-3 hours',
      rating: 4.5,
      reviews: 2156,
      description: 'Expert plumbing services for leaks, installations, and emergency repairs.'
    },
    {
      id: 6,
      title: 'Interior Painting',
      category: 'painting',
      image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&h=300&fit=crop',
      price: 5000,
      duration: '1-2 days',
      rating: 4.8,
      reviews: 1245,
      description: 'Professional interior painting services with premium quality paints and expert finish.'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'cleaning', name: 'Cleaning' },
    { id: 'beauty', name: 'Beauty & Wellness' },
    { id: 'repairs', name: 'Home Repairs' },
    { id: 'fitness', name: 'Fitness' },
    { id: 'appliances', name: 'Appliances' },
    { id: 'painting', name: 'Painting' }
  ];

  const filteredServices = services.filter(service => {
    if (selectedCategory !== 'all' && service.category !== selectedCategory) return false;
    if (priceRange !== 'all') {
      if (priceRange === 'low' && service.price > 1000) return false;
      if (priceRange === 'medium' && (service.price < 1000 || service.price > 3000)) return false;
      if (priceRange === 'high' && service.price < 3000) return false;
    }
    if (rating !== 'all') {
      if (rating === '4+' && service.rating < 4) return false;
      if (rating === '4.5+' && service.rating < 4.5) return false;
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Our Services</h1>
          <p className="text-gray-600">Find the perfect service for your needs</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Filters</h3>
                
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Category</h4>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                          selectedCategory === category.id 
                            ? 'bg-primary-500 text-white' 
                            : 'hover:bg-gray-100'
                        }`}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-medium mb-3">Price Range</h4>
                  <div className="space-y-2">
                    {[
                      { id: 'all', name: 'All Prices' },
                      { id: 'low', name: 'Under ₹1,000' },
                      { id: 'medium', name: '₹1,000 - ₹3,000' },
                      { id: 'high', name: 'Above ₹3,000' }
                    ].map(price => (
                      <button
                        key={price.id}
                        onClick={() => setPriceRange(price.id)}
                        className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                          priceRange === price.id 
                            ? 'bg-primary-500 text-white' 
                            : 'hover:bg-gray-100'
                        }`}
                      >
                        {price.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Rating</h4>
                  <div className="space-y-2">
                    {[
                      { id: 'all', name: 'All Ratings' },
                      { id: '4+', name: '4+ Stars' },
                      { id: '4.5+', name: '4.5+ Stars' }
                    ].map(ratingOption => (
                      <button
                        key={ratingOption.id}
                        onClick={() => setRating(ratingOption.id)}
                        className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                          rating === ratingOption.id 
                            ? 'bg-primary-500 text-white' 
                            : 'hover:bg-gray-100'
                        }`}
                      >
                        {ratingOption.name}
                      </button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Services Grid */}
          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredServices.map(service => (
                <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge className="absolute top-3 right-3 bg-white text-gray-800">
                        {service.category}
                      </Badge>
                    </div>
                    
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-primary-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {service.description}
                      </p>
                      
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="font-medium">{service.rating}</span>
                          <span className="text-gray-500 text-sm">({service.reviews})</span>
                        </div>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Clock className="w-4 h-4 mr-1" />
                          {service.duration}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-2xl font-bold text-primary-600">₹{service.price}</span>
                        </div>
                        <Link to={`/service/${service.id}`}>
                          <Button size="sm" className="bg-primary-500 hover:bg-primary-600">
                            Book Now
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {filteredServices.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No services found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Services;
