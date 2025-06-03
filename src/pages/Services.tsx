
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useSearchParams } from 'react-router-dom';
import { Star, Phone, MapPin, Shield, User, Clock, DollarSign } from 'lucide-react';
import { professionals } from '@/data/professionals';

const Services = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || 'all');
  const [rating, setRating] = useState('all');

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'cleaning', name: 'Cleaning' },
    { id: 'beauty', name: 'Beauty & Wellness' },
    { id: 'electrical', name: 'Electrical' },
    { id: 'plumbing', name: 'Plumbing' },
    { id: 'appliances', name: 'AC Repair' }
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
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Our Professional Services</h1>
          <p className="text-gray-600 text-lg">Connect with verified professionals for your home service needs</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <h3 className="font-semibold text-xl mb-6 text-gray-900">Filters</h3>
                
                <div className="mb-6">
                  <h4 className="font-medium mb-4 text-gray-800">Service Category</h4>
                  <div className="space-y-3">
                    {categories.map(category => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                          selectedCategory === category.id 
                            ? 'bg-primary-500 text-white shadow-md' 
                            : 'hover:bg-gray-100 text-gray-700 border border-gray-200'
                        }`}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-4 text-gray-800">Rating Filter</h4>
                  <div className="space-y-3">
                    {[
                      { id: 'all', name: 'All Ratings' },
                      { id: '4+', name: '4+ Stars' },
                      { id: '4.5+', name: '4.5+ Stars' }
                    ].map(ratingOption => (
                      <button
                        key={ratingOption.id}
                        onClick={() => setRating(ratingOption.id)}
                        className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                          rating === ratingOption.id 
                            ? 'bg-primary-500 text-white shadow-md' 
                            : 'hover:bg-gray-100 text-gray-700 border border-gray-200'
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
            <div className="mb-4 flex justify-between items-center">
              <p className="text-gray-600">
                {filteredProfessionals.length} professionals available
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProfessionals.map(professional => (
                <Card key={professional.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary-500">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center">
                          <User className="w-6 h-6 text-primary-600" />
                        </div>
                        {professional.verified && (
                          <Badge className="bg-green-100 text-green-800 text-xs">
                            <Shield className="w-3 h-3 mr-1" />
                            Verified
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <h3 className="font-bold text-lg text-gray-900 group-hover:text-primary-600 transition-colors">
                          {professional.name}
                        </h3>
                        <p className="text-primary-600 font-semibold text-sm">
                          {professional.profession}
                        </p>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="font-semibold text-sm">{professional.rating}</span>
                          <span className="text-gray-500 text-xs">({professional.reviews} reviews)</span>
                        </div>
                        <div className="flex items-center text-gray-500 text-xs">
                          <MapPin className="w-3 h-3 mr-1" />
                          {professional.location.split(',')[0]}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-gray-600 text-sm">
                            <Clock className="w-4 h-4 mr-2 text-primary-500" />
                            <span className="font-medium">Experience:</span>
                          </div>
                          <span className="text-sm font-semibold text-gray-800">{professional.experience}</span>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-gray-600 text-sm">
                            <DollarSign className="w-4 h-4 mr-2 text-primary-500" />
                            <span className="font-medium">Charge:</span>
                          </div>
                          <span className="text-sm font-bold text-primary-600">{professional.price}</span>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-gray-100">
                        <div className="flex gap-2">
                          <Button size="sm" className="flex-1 bg-primary-500 hover:bg-primary-600 text-white">
                            Book Now
                          </Button>
                          <Button size="sm" variant="outline" className="px-3 hover:bg-green-50 hover:text-green-600 hover:border-green-300">
                            <Phone className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {filteredProfessionals.length === 0 && (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No Professionals Found</h3>
                <p className="text-gray-500 text-lg">No professionals found matching your criteria. Please try different filters.</p>
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
