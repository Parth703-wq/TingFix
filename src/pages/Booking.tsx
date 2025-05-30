
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { CheckCircle, CreditCard, Wallet, Clock, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Booking = () => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [promoCode, setPromoCode] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();

  // Mock booking data
  const booking = {
    service: 'Deep Home Cleaning',
    date: '2024-01-15',
    time: '10:00 AM',
    duration: '3-4 hours',
    address: '123 Main Street, Apartment 4B, Mumbai, Maharashtra 400001',
    professional: 'Sarah Johnson',
    rating: 4.8,
    price: 1500,
    discount: 500,
    taxes: 150
  };

  const handlePayment = async () => {
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      navigate('/dashboard?tab=bookings&success=true');
    }, 3000);
  };

  const total = booking.price - booking.discount + booking.taxes;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Confirm Your Booking</h1>
            <p className="text-gray-600">Review your booking details and complete payment</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Booking Details */}
            <div className="lg:col-span-2 space-y-6">
              {/* Service Details */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Service Details</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start space-x-4">
                    <img
                      src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=100&h=100&fit=crop"
                      alt={booking.service}
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{booking.service}</h3>
                      <div className="flex items-center space-x-4 mt-2 text-gray-600">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          <span>{booking.duration}</span>
                        </div>
                        <Badge className="bg-primary-100 text-primary-700">Professional</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Date & Time */}
              <Card>
                <CardHeader>
                  <CardTitle>Date & Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-gray-600">Date</label>
                      <p className="font-medium">{new Date(booking.date).toLocaleDateString('en-IN', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</p>
                    </div>
                    <div>
                      <label className="text-sm text-gray-600">Time</label>
                      <p className="font-medium">{booking.time}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Address */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5" />
                    <span>Service Address</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{booking.address}</p>
                </CardContent>
              </Card>

              {/* Professional */}
              <Card>
                <CardHeader>
                  <CardTitle>Assigned Professional</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4">
                    <img
                      src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face"
                      alt={booking.professional}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium">{booking.professional}</p>
                      <div className="flex items-center">
                        <span className="text-yellow-400">★</span>
                        <span className="ml-1 text-sm text-gray-600">{booking.rating} (500+ reviews)</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Method */}
              <Card>
                <CardHeader>
                  <CardTitle>Payment Method</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div 
                      className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                        paymentMethod === 'card' ? 'border-primary-500 bg-primary-50' : 'border-gray-200'
                      }`}
                      onClick={() => setPaymentMethod('card')}
                    >
                      <div className="flex items-center space-x-3">
                        <CreditCard className="w-5 h-5" />
                        <span className="font-medium">Credit/Debit Card</span>
                      </div>
                    </div>
                    <div 
                      className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                        paymentMethod === 'wallet' ? 'border-primary-500 bg-primary-50' : 'border-gray-200'
                      }`}
                      onClick={() => setPaymentMethod('wallet')}
                    >
                      <div className="flex items-center space-x-3">
                        <Wallet className="w-5 h-5" />
                        <span className="font-medium">Digital Wallet</span>
                      </div>
                    </div>
                    <div 
                      className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                        paymentMethod === 'cash' ? 'border-primary-500 bg-primary-50' : 'border-gray-200'
                      }`}
                      onClick={() => setPaymentMethod('cash')}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="w-5 h-5 text-center">💵</span>
                        <span className="font-medium">Cash on Service</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Booking Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Booking Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Promo Code */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Promo Code</label>
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        placeholder="Enter code"
                        className="flex-1 p-2 border border-gray-300 rounded-lg text-sm"
                      />
                      <Button size="sm" variant="outline">Apply</Button>
                    </div>
                  </div>

                  <Separator />

                  {/* Price Breakdown */}
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Service Cost</span>
                      <span>₹{booking.price}</span>
                    </div>
                    <div className="flex justify-between text-green-600">
                      <span>Discount</span>
                      <span>-₹{booking.discount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Taxes & Fees</span>
                      <span>₹{booking.taxes}</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span>₹{total}</span>
                  </div>

                  <Button 
                    className="w-full bg-primary-500 hover:bg-primary-600 text-white py-3 mt-6"
                    onClick={handlePayment}
                    disabled={isProcessing}
                  >
                    {isProcessing ? 'Processing...' : `Pay ₹${total}`}
                  </Button>

                  <p className="text-xs text-gray-500 text-center mt-3">
                    By confirming, you agree to our Terms of Service and Privacy Policy
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Booking;
