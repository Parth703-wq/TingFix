
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, MapPin, User, CreditCard, Clock, Star } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Dashboard = () => {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState('bookings');

  useEffect(() => {
    const tab = searchParams.get('tab');
    const success = searchParams.get('success');
    
    if (tab) setActiveTab(tab);
    if (success === 'true') {
      toast({
        title: "Booking Confirmed!",
        description: "Your service has been successfully booked. You'll receive a confirmation email shortly.",
      });
    }
  }, [searchParams]);

  const bookings = [
    {
      id: 1,
      service: 'Deep Home Cleaning',
      date: '2024-01-15',
      time: '10:00 AM',
      status: 'upcoming',
      professional: 'Sarah Johnson',
      price: 1500,
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=80&h=80&fit=crop'
    },
    {
      id: 2,
      service: 'AC Service & Repair',
      date: '2024-01-10',
      time: '2:00 PM',
      status: 'completed',
      professional: 'Mike Chen',
      price: 800,
      image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=80&h=80&fit=crop'
    },
    {
      id: 3,
      service: 'Salon at Home',
      date: '2024-01-05',
      time: '11:00 AM',
      status: 'completed',
      professional: 'Priya Sharma',
      price: 2000,
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=80&h=80&fit=crop'
    }
  ];

  const savedServices = [
    {
      id: 1,
      title: 'Interior Painting',
      category: 'painting',
      price: 5000,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=80&h=80&fit=crop'
    },
    {
      id: 2,
      title: 'Personal Fitness Trainer',
      category: 'fitness',
      price: 1200,
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=80&h=80&fit=crop'
    }
  ];

  const addresses = [
    {
      id: 1,
      label: 'Home',
      address: '123 Main Street, Apartment 4B, Mumbai, Maharashtra 400001',
      isDefault: true
    },
    {
      id: 2,
      label: 'Office',
      address: '456 Business Park, Floor 3, Mumbai, Maharashtra 400002',
      isDefault: false
    }
  ];

  const paymentMethods = [
    {
      id: 1,
      type: 'card',
      last4: '4242',
      brand: 'Visa',
      isDefault: true
    },
    {
      id: 2,
      type: 'card',
      last4: '8888',
      brand: 'Mastercard',
      isDefault: false
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming': return 'bg-blue-100 text-blue-700';
      case 'completed': return 'bg-green-100 text-green-700';
      case 'cancelled': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Dashboard</h1>
          <p className="text-gray-600">Manage your bookings and account settings</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="bookings">My Bookings</TabsTrigger>
            <TabsTrigger value="saved">Saved Services</TabsTrigger>
            <TabsTrigger value="addresses">Address Book</TabsTrigger>
            <TabsTrigger value="payments">Payment Methods</TabsTrigger>
            <TabsTrigger value="support">Support</TabsTrigger>
          </TabsList>

          <TabsContent value="bookings" className="mt-6">
            <div className="space-y-4">
              {bookings.map((booking) => (
                <Card key={booking.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <img
                          src={booking.image}
                          alt={booking.service}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div>
                          <h3 className="font-semibold text-lg">{booking.service}</h3>
                          <div className="flex items-center space-x-4 text-gray-600 mt-1">
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              <span>{new Date(booking.date).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              <span>{booking.time}</span>
                            </div>
                            <div className="flex items-center">
                              <User className="w-4 h-4 mr-1" />
                              <span>{booking.professional}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge className={getStatusColor(booking.status)}>
                          {booking.status}
                        </Badge>
                        <p className="text-lg font-semibold mt-2">₹{booking.price}</p>
                        {booking.status === 'completed' && (
                          <Button size="sm" variant="outline" className="mt-2">
                            Rate Service
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="saved" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {savedServices.map((service) => (
                <Card key={service.id}>
                  <CardContent className="p-4">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-32 object-cover rounded-lg mb-4"
                    />
                    <h3 className="font-semibold mb-2">{service.title}</h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                        <span className="text-sm">{service.rating}</span>
                      </div>
                      <span className="font-semibold">₹{service.price}</span>
                    </div>
                    <Button className="w-full mt-4 bg-primary-500 hover:bg-primary-600">
                      Book Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="addresses" className="mt-6">
            <div className="space-y-4">
              {addresses.map((address) => (
                <Card key={address.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-start space-x-4">
                        <MapPin className="w-5 h-5 text-gray-500 mt-1" />
                        <div>
                          <div className="flex items-center space-x-2">
                            <h3 className="font-semibold">{address.label}</h3>
                            {address.isDefault && (
                              <Badge className="bg-primary-100 text-primary-700">Default</Badge>
                            )}
                          </div>
                          <p className="text-gray-600 mt-1">{address.address}</p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">Edit</Button>
                        {!address.isDefault && (
                          <Button size="sm" variant="outline">Delete</Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              <Card className="border-dashed">
                <CardContent className="p-6 text-center">
                  <Button className="bg-primary-500 hover:bg-primary-600">
                    Add New Address
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="payments" className="mt-6">
            <div className="space-y-4">
              {paymentMethods.map((method) => (
                <Card key={method.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <CreditCard className="w-8 h-8 text-gray-500" />
                        <div>
                          <div className="flex items-center space-x-2">
                            <h3 className="font-semibold">{method.brand} ending in {method.last4}</h3>
                            {method.isDefault && (
                              <Badge className="bg-primary-100 text-primary-700">Default</Badge>
                            )}
                          </div>
                          <p className="text-gray-600 text-sm">Expires 12/25</p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">Edit</Button>
                        {!method.isDefault && (
                          <Button size="sm" variant="outline">Remove</Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              <Card className="border-dashed">
                <CardContent className="p-6 text-center">
                  <Button className="bg-primary-500 hover:bg-primary-600">
                    Add Payment Method
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="support" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Need Help?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Get instant answers to common questions or contact our support team.
                  </p>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      📞 Call Support
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      💬 Live Chat
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      📧 Email Support
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Links</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Button variant="ghost" className="w-full justify-start">
                      📋 Service Guidelines
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      🔒 Safety & Security
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      📝 Terms & Conditions
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      🔄 Cancellation Policy
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
