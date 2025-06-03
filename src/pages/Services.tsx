import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, Clock, MapPin, Phone, Mail, Shield } from 'lucide-react';
import { professionals } from '@/data/professionals';

const Services = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || 'all');
  const [priceRange, setPriceRange] = useState('all');
  const [rating, setRating] = useState('all');

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'cleaning', name: 'Cleaning' },
    { id: 'beauty', name: 'Beauty & Wellness' },
    { id: 'electrical', name: 'Electrical' },
    { id: 'plumbing', name: 'Plumbing' },
    { id: 'appliances', name: 'Appliances' },
    { id: 'painting', name: 'Painting' }
  ];

  const filteredProfessionals = professionals.filter(professional => {
    if (selectedCategory !== 'all' && professional.category !== selectedCategory) return false;
    if (rating !== 'all') {
      if (rating === '4+' && professional.rating < 4) return false;
      if (rating === '4.5+' && professional.rating < 4.5) return false;
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Our Professionals</h1>
          <p className="text-gray-600">Connect with verified professionals for your home service needs</p>
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

          {/* Professionals Grid */}
          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProfessionals.map(professional => (
                <Card key={professional.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <img
                        src={professional.image}
                        alt={professional.name}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {professional.verified && (
                        <Badge className="absolute top-3 right-3 bg-green-500 text-white">
                          <Shield className="w-3 h-3 mr-1" />
                          Verified
                        </Badge>
                      )}
                    </div>
                    
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-1 group-hover:text-primary-600 transition-colors">
                        {professional.name}
                      </h3>
                      <p className="text-primary-600 font-medium mb-2">
                        {professional.profession}
                      </p>
                      <p className="text-gray-600 text-sm mb-3">
                        {professional.description}
                      </p>
                      
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="font-medium">{professional.rating}</span>
                          <span className="text-gray-500 text-sm">({professional.reviews})</span>
                        </div>
                        <div className="flex items-center text-gray-500 text-sm">
                          <MapPin className="w-4 h-4 mr-1" />
                          {professional.location.split(',')[0]}
                        </div>
                      </div>

                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm text-gray-600">{professional.experience} experience</span>
                        <span className="font-medium text-primary-600">{professional.price}</span>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {professional.skills.slice(0, 2).map((skill, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                        {professional.skills.length > 2 && (
                          <Badge variant="secondary" className="text-xs">
                            +{professional.skills.length - 2} more
                          </Badge>
                        )}
                      </div>
                      
                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1 bg-primary-500 hover:bg-primary-600">
                          Book Now
                        </Button>
                        <Button size="sm" variant="outline" className="px-3">
                          <Phone className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {filteredProfessionals.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No professionals found matching your criteria.</p>
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
