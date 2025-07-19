import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Star, Clock, MapPin, Shield, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceDetails = () => {
  const { id } = useParams();
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  // Mock service data - in real app, fetch based on id
  const service = {
    id: 1,
    title: 'Deep Home Cleaning',
    category: 'cleaning',
    images: [
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&h=600&fit=crop'
    ],
    price: 1500,
    originalPrice: 2000,
    duration: '3-4 hours',
    rating: 4.8,
    reviews: 2847,
    description: 'Our comprehensive deep cleaning service covers every corner of your home, leaving it spotless and fresh. Perfect for move-ins, post-party cleanup, or seasonal deep cleaning.',
    included: [
      'Kitchen deep cleaning (appliances, cabinets, countertops)',
      'Bathroom sanitization and scrubbing',
      'Living room and bedroom thorough cleaning',
      'Floor mopping and vacuuming',
      'Window and mirror cleaning',
      'Dusting of all surfaces and furniture'
    ],
    faqs: [
      {
        question: 'How long does the service take?',
        answer: 'Typically 3-4 hours depending on the size of your home and level of cleaning required.'
      },
      {
        question: 'Do I need to provide cleaning supplies?',
        answer: 'No, our professionals bring all necessary cleaning supplies and equipment.'
      },
      {
        question: 'Is the service available on weekends?',
        answer: 'Yes, we offer services 7 days a week including weekends and holidays.'
      }
    ]
  };

  const reviews = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      date: '2 days ago',
      comment: 'Excellent service! The team was professional and thorough. My house has never been cleaner.'
    },
    {
      name: 'Michael Chen',
      rating: 5,
      date: '1 week ago',
      comment: 'Very impressed with the quality of work. Will definitely book again.'
    },
    {
      name: 'Priya Sharma',
      rating: 4,
      date: '2 weeks ago',
      comment: 'Good service overall. The team was punctual and did a great job.'
    }
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="mb-8">
              <img
                src={service.images[0]}
                alt={service.title}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Service Info */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <Badge className="bg-primary-100 text-primary-700">{service.category}</Badge>
                <div className="flex items-center space-x-1">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="font-medium">{service.rating}</span>
                  <span className="text-gray-500">({service.reviews} reviews)</span>
                </div>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h1>
              
              <div className="flex items-center space-x-6 text-gray-600 mb-6">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>{service.duration}</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-5 h-5 mr-2" />
                  <span>Verified Professionals</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>At Your Location</span>
                </div>
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-bold text-primary-600">₹{service.price}</span>
                <span className="text-xl text-gray-500 line-through">₹{service.originalPrice}</span>
                <Badge className="bg-green-100 text-green-700">25% OFF</Badge>
              </div>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="overview" className="mb-8">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="included">What's Included</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                <TabsTrigger value="faqs">FAQs</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <p className="text-gray-700 leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="included" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <ul className="space-y-3">
                      {service.included.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary-500 mr-3">✓</span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="reviews" className="mt-6">
                <div className="space-y-4">
                  {reviews.map((review, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-medium">{review.name}</h4>
                          <span className="text-gray-500 text-sm">{review.date}</span>
                        </div>
                        <div className="flex items-center mb-3">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <p className="text-gray-700">{review.comment}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="faqs" className="mt-6">
                <div className="space-y-4">
                  {service.faqs.map((faq, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <h4 className="font-medium mb-2">{faq.question}</h4>
                        <p className="text-gray-700">{faq.answer}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Book This Service</h3>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Select Date</label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium mb-3">Select Time</label>
                  <div className="grid grid-cols-2 gap-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`p-2 text-sm border rounded-lg transition-colors ${
                          selectedTime === time
                            ? 'bg-primary-500 text-white border-primary-500'
                            : 'bg-white text-gray-700 border-gray-300 hover:border-primary-300'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Your Address</label>
                  <textarea
                    placeholder="Enter your complete address..."
                    rows={3}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div className="border-t pt-4 mb-6">
                  <div className="flex justify-between mb-2">
                    <span>Service Cost</span>
                    <span>₹{service.price}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Discount</span>
                    <span className="text-green-600">-₹{service.originalPrice - service.price}</span>
                  </div>
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span>₹{service.price}</span>
                  </div>
                </div>

                <Link to="/booking">
                  <Button 
                    className="w-full bg-primary-500 hover:bg-primary-600 text-white py-3"
                    disabled={!selectedDate || !selectedTime}
                  >
                    Confirm Booking
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ServiceDetails;