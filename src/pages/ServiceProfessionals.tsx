
import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Star, Phone, MapPin, Shield, User, Clock, DollarSign, Search, ArrowLeft, CheckCircle, AlertTriangle, Info, Users, Award, HeadphonesIcon } from 'lucide-react';
import { professionals } from '@/data/professionals';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const ServiceProfessionals = () => {
  const { category } = useParams();
  const [searchParams] = useSearchParams();
  const [rating, setRating] = useState('all');
  const [location, setLocation] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = {
    'cleaning': { 
      name: 'Cleaning Services',
      images: [
        'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400&h=300&fit=crop'
      ],
      description: 'Professional home cleaning services'
    },
    'beauty': { 
      name: 'Beauty & Wellness',
      images: [
        'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1559599101-f09722fb4948?w=400&h=300&fit=crop'
      ],
      description: 'Beauty treatments at your doorstep'
    },
    'electrical': { 
      name: 'Electrical Services',
      images: [
        'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop'
      ],
      description: 'Licensed electrical services'
    },
    'plumbing': { 
      name: 'Plumbing Services',
      images: [
        'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop'
      ],
      description: 'Expert plumbing solutions'
    },
    'appliances': { 
      name: 'AC Repair Services',
      images: [
        'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop'
      ],
      description: 'AC installation and repair'
    }
  };

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

  const filteredProfessionals = professionals.filter(professional => {
    if (category && professional.category !== category) return false;
    if (rating !== 'all') {
      if (rating === '4+' && professional.rating < 4) return false;
      if (rating === '4.5+' && professional.rating < 4.5) return false;
    }
    if (location && !professional.location.toLowerCase().includes(location.toLowerCase())) return false;
    return true;
  });

  const selectedCategoryData = categories[category as keyof typeof categories];

  const safetyFeatures = [
    {
      icon: Shield,
      title: "Background Verification",
      description: "Every professional undergoes thorough background checks including criminal record verification, address verification, and reference checks before joining our platform."
    },
    {
      icon: Users,
      title: "ID & Document Verification",
      description: "All professionals provide valid government ID, professional certificates, and undergo document authentication to ensure legitimacy and expertise."
    },
    {
      icon: Award,
      title: "Skill Assessment & Training",
      description: "Our professionals pass rigorous skill assessments and receive ongoing training to maintain service quality and stay updated with industry standards."
    },
    {
      icon: Star,
      title: "Customer Review System",
      description: "Transparent rating and review system where customers can share their experience, helping maintain service quality and accountability."
    },
    {
      icon: Shield,
      title: "Insurance Coverage",
      description: "Comprehensive insurance coverage protects against any damages during service delivery, ensuring complete peace of mind for customers."
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Customer Support",
      description: "Round-the-clock customer support team available to address queries, concerns, and provide assistance throughout your service experience."
    }
  ];

  const safetyGuidelines = [
    {
      icon: AlertTriangle,
      title: "Before Service",
      tips: [
        "Verify professional's identity using the app",
        "Ensure professional arrives within scheduled time",
        "Check for proper tools and equipment",
        "Communicate service requirements clearly"
      ]
    },
    {
      icon: Info,
      title: "During Service",
      tips: [
        "Stay present during the service",
        "Ask questions about the process",
        "Report any concerns immediately",
        "Take photos if necessary for documentation"
      ]
    },
    {
      icon: CheckCircle,
      title: "After Service",
      tips: [
        "Inspect the completed work thoroughly",
        "Rate and review the professional",
        "Contact support for any issues",
        "Keep service receipt for warranty claims"
      ]
    }
  ];

  if (!selectedCategoryData) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <Link to="/services" className="text-primary-600 hover:text-primary-700">
            Back to Services
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link 
            to="/services" 
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Services
          </Link>
        </div>

        {/* Service Header */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 mb-8 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{selectedCategoryData.name}</h1>
            <p className="text-xl mb-8 opacity-90">{selectedCategoryData.description}</p>
            
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

        {/* Enhanced Safety Section */}
        <div className="mb-8">
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-green-800 mb-2">Your Safety is Our Top Priority</h2>
                <p className="text-green-700 text-lg">We ensure complete safety and security through our comprehensive verification process</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {safetyFeatures.map((feature, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="flex items-center mb-3">
                      <feature.icon className="w-6 h-6 text-green-600 mr-3" />
                      <h3 className="font-bold text-green-800">{feature.title}</h3>
                    </div>
                    <p className="text-green-700 text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-green-200 pt-8">
                <h3 className="text-2xl font-bold text-green-800 mb-6 text-center">Safety Guidelines</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {safetyGuidelines.map((guideline, index) => (
                    <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="flex items-center mb-4">
                        <guideline.icon className="w-6 h-6 text-green-600 mr-3" />
                        <h4 className="font-bold text-green-800">{guideline.title}</h4>
                      </div>
                      <ul className="space-y-2">
                        {guideline.tips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="flex items-start text-green-700 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-wrap gap-4 items-center">
                <div>
                  <h4 className="font-medium mb-2 text-gray-800">Filter by Rating:</h4>
                  <div className="flex gap-2">
                    {[
                      { id: 'all', name: 'All Ratings' },
                      { id: '4+', name: '4+ Stars' },
                      { id: '4.5+', name: '4.5+ Stars' }
                    ].map(ratingOption => (
                      <button
                        key={ratingOption.id}
                        onClick={() => setRating(ratingOption.id)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
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
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Service Images Carousel */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Our {selectedCategoryData.name}</h3>
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {selectedCategoryData.images.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card>
                    <CardContent className="p-0">
                      <img 
                        src={image} 
                        alt={`${selectedCategoryData.name} ${index + 1}`}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Professionals Grid */}
        <div>
          <div className="mb-6 flex justify-between items-center">
            <h3 className="text-2xl font-bold text-gray-900">
              Available Professionals ({filteredProfessionals.length})
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProfessionals.map(professional => (
              <Card key={professional.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
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
                      <h3 className="font-bold text-lg text-gray-900">{professional.name}</h3>
                      <p className="text-primary-600 font-semibold text-sm">{professional.profession}</p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="font-semibold text-sm">{professional.rating}</span>
                        <span className="text-gray-500 text-xs">({professional.reviews} reviews)</span>
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

                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-gray-600 text-sm">
                          <MapPin className="w-4 h-4 mr-2 text-primary-500" />
                          <span className="font-medium">Location:</span>
                        </div>
                        <span className="text-xs text-gray-600">{professional.location.split(',')[0]}</span>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-gray-100">
                      <div className="flex gap-2">
                        <Button 
                          size="sm" 
                          className="flex-1 bg-primary-500 hover:bg-primary-600 text-white"
                          onClick={() => window.location.href = `/booking?professional=${professional.id}`}
                        >
                          Book Now
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="px-3 hover:bg-green-50 hover:text-green-600 hover:border-green-300"
                          onClick={() => window.open(`tel:${professional.phone}`, '_self')}
                        >
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
      
      <Footer />
    </div>
  );
};

export default ServiceProfessionals;
