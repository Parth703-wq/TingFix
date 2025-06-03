
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircle, CreditCard, Wallet, Clock, MapPin, Calendar, User, Download, Edit3 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { professionals } from '@/data/professionals';

const Booking = () => {
  const [searchParams] = useSearchParams();
  const professionalId = searchParams.get('professional');
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState('card');
  const [promoCode, setPromoCode] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [showInvoice, setShowInvoice] = useState(false);
  
  // Booking form state
  const [bookingData, setBookingData] = useState({
    date: '',
    time: '',
    address: '',
    phone: '',
    specialInstructions: '',
    serviceType: 'standard'
  });

  // Find the professional
  const professional = professionals.find(p => p.id === parseInt(professionalId || '1')) || professionals[0];

  // Mock booking calculation
  const basePrice = parseInt(professional.price.replace('₹', '').replace('/visit', ''));
  const serviceMultiplier = bookingData.serviceType === 'express' ? 1.5 : 1;
  const serviceCost = basePrice * serviceMultiplier;
  const discount = promoCode === 'SAVE20' ? serviceCost * 0.2 : 0;
  const taxes = Math.round((serviceCost - discount) * 0.18); // 18% GST
  const total = serviceCost - discount + taxes;

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  const handleInputChange = (field: string, value: string) => {
    setBookingData(prev => ({ ...prev, [field]: value }));
  };

  const handlePromoCode = () => {
    if (promoCode === 'SAVE20') {
      alert('Promo code applied! 20% discount added.');
    } else if (promoCode) {
      alert('Invalid promo code.');
    }
  };

  const handlePayment = async () => {
    if (!bookingData.date || !bookingData.time || !bookingData.address || !bookingData.phone) {
      alert('Please fill in all required fields.');
      return;
    }

    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setShowInvoice(true);
    }, 3000);
  };

  const downloadInvoice = () => {
    // Create invoice content
    const invoiceContent = `
TING FIX SERVICE INVOICE
========================

Invoice #: TF${Date.now()}
Date: ${new Date().toLocaleDateString()}

SERVICE DETAILS:
- Service: ${professional.profession}
- Professional: ${professional.name}
- Date: ${bookingData.date}
- Time: ${bookingData.time}
- Type: ${bookingData.serviceType === 'express' ? 'Express Service' : 'Standard Service'}

BILLING DETAILS:
- Service Cost: ₹${serviceCost}
- Discount: -₹${discount}
- GST (18%): ₹${taxes}
- Total Amount: ₹${total}

PAYMENT METHOD: ${paymentMethod === 'card' ? 'Credit/Debit Card' : paymentMethod === 'wallet' ? 'Digital Wallet' : 'Cash on Service'}

ADDRESS:
${bookingData.address}

CONTACT: ${bookingData.phone}

Thank you for choosing Ting Fix!
    `.trim();

    // Create and download file
    const blob = new Blob([invoiceContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `TingFix_Invoice_${Date.now()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  if (showInvoice) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader className="bg-green-50 text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-green-700">Booking Confirmed!</CardTitle>
                <p className="text-green-600">Your service has been successfully booked</p>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Service Details */}
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Service Details</h3>
                    <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                      <p><strong>Service:</strong> {professional.profession}</p>
                      <p><strong>Professional:</strong> {professional.name}</p>
                      <p><strong>Date:</strong> {new Date(bookingData.date).toLocaleDateString()}</p>
                      <p><strong>Time:</strong> {bookingData.time}</p>
                      <p><strong>Type:</strong> {bookingData.serviceType === 'express' ? 'Express Service' : 'Standard Service'}</p>
                    </div>
                  </div>

                  {/* Billing Summary */}
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Billing Summary</h3>
                    <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                      <div className="flex justify-between">
                        <span>Service Cost</span>
                        <span>₹{serviceCost}</span>
                      </div>
                      {discount > 0 && (
                        <div className="flex justify-between text-green-600">
                          <span>Discount</span>
                          <span>-₹{discount}</span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span>GST (18%)</span>
                        <span>₹{taxes}</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between font-bold text-lg">
                        <span>Total Paid</span>
                        <span>₹{total}</span>
                      </div>
                    </div>
                  </div>

                  {/* Address */}
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Service Address</h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p>{bookingData.address}</p>
                      <p className="text-sm text-gray-600 mt-2">Contact: {bookingData.phone}</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button onClick={downloadInvoice} className="flex-1" variant="outline">
                      <Download className="w-4 h-4 mr-2" />
                      Download Invoice
                    </Button>
                    <Button onClick={() => navigate('/dashboard')} className="flex-1">
                      View All Bookings
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Book Your Service</h1>
            <p className="text-gray-600">Fill in the details to confirm your booking</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Booking Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Professional Details */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <User className="w-5 h-5 text-primary-500" />
                    <span>Selected Professional</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center">
                      <User className="w-8 h-8 text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg">{professional.name}</h3>
                      <p className="text-primary-600 font-medium">{professional.profession}</p>
                      <div className="flex items-center mt-2">
                        <span className="text-yellow-400">★</span>
                        <span className="ml-1 text-sm text-gray-600">{professional.rating} ({professional.reviews} reviews)</span>
                        <Badge className="ml-2 bg-green-100 text-green-800 text-xs">Verified</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Service Type */}
              <Card>
                <CardHeader>
                  <CardTitle>Service Type</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div 
                      className={`p-4 border rounded-lg cursor-pointer transition-all ${
                        bookingData.serviceType === 'standard' ? 'border-primary-500 bg-primary-50' : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => handleInputChange('serviceType', 'standard')}
                    >
                      <h4 className="font-medium">Standard Service</h4>
                      <p className="text-sm text-gray-600">Regular service timing</p>
                      <p className="text-lg font-bold text-primary-600 mt-2">₹{basePrice}</p>
                    </div>
                    <div 
                      className={`p-4 border rounded-lg cursor-pointer transition-all ${
                        bookingData.serviceType === 'express' ? 'border-primary-500 bg-primary-50' : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => handleInputChange('serviceType', 'express')}
                    >
                      <h4 className="font-medium">Express Service</h4>
                      <p className="text-sm text-gray-600">Priority booking (+50%)</p>
                      <p className="text-lg font-bold text-primary-600 mt-2">₹{Math.round(basePrice * 1.5)}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Date & Time */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5" />
                    <span>Date & Time</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="date">Select Date *</Label>
                      <Input
                        id="date"
                        type="date"
                        value={bookingData.date}
                        onChange={(e) => handleInputChange('date', e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label>Select Time *</Label>
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            onClick={() => handleInputChange('time', time)}
                            className={`p-2 text-sm border rounded-lg transition-all ${
                              bookingData.time === time
                                ? 'bg-primary-500 text-white border-primary-500'
                                : 'bg-white text-gray-700 border-gray-300 hover:border-primary-300'
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact & Address */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5" />
                    <span>Contact & Address</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      value={bookingData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="address">Service Address *</Label>
                    <Textarea
                      id="address"
                      placeholder="Enter your complete address..."
                      value={bookingData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      rows={3}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="instructions">Special Instructions</Label>
                    <Textarea
                      id="instructions"
                      placeholder="Any special instructions or requirements..."
                      value={bookingData.specialInstructions}
                      onChange={(e) => handleInputChange('specialInstructions', e.target.value)}
                      rows={2}
                      className="mt-2"
                    />
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
                      className={`p-4 border rounded-lg cursor-pointer transition-all ${
                        paymentMethod === 'card' ? 'border-primary-500 bg-primary-50' : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setPaymentMethod('card')}
                    >
                      <div className="flex items-center space-x-3">
                        <CreditCard className="w-5 h-5" />
                        <div>
                          <span className="font-medium">Credit/Debit Card</span>
                          <p className="text-sm text-gray-600">Pay securely with your card</p>
                        </div>
                      </div>
                    </div>
                    <div 
                      className={`p-4 border rounded-lg cursor-pointer transition-all ${
                        paymentMethod === 'wallet' ? 'border-primary-500 bg-primary-50' : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setPaymentMethod('wallet')}
                    >
                      <div className="flex items-center space-x-3">
                        <Wallet className="w-5 h-5" />
                        <div>
                          <span className="font-medium">Digital Wallet</span>
                          <p className="text-sm text-gray-600">UPI, Paytm, GPay, PhonePe</p>
                        </div>
                      </div>
                    </div>
                    <div 
                      className={`p-4 border rounded-lg cursor-pointer transition-all ${
                        paymentMethod === 'cash' ? 'border-primary-500 bg-primary-50' : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setPaymentMethod('cash')}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="w-5 h-5 text-center">💵</span>
                        <div>
                          <span className="font-medium">Cash on Service</span>
                          <p className="text-sm text-gray-600">Pay when service is completed</p>
                        </div>
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
                <CardContent className="space-y-6">
                  {/* Promo Code */}
                  <div>
                    <Label className="block text-sm font-medium mb-2">Promo Code</Label>
                    <div className="flex space-x-2">
                      <Input
                        placeholder="SAVE20"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        className="flex-1"
                      />
                      <Button size="sm" variant="outline" onClick={handlePromoCode}>
                        Apply
                      </Button>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Try "SAVE20" for 20% off</p>
                  </div>

                  <Separator />

                  {/* Price Breakdown */}
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Service Cost</span>
                      <span>₹{serviceCost}</span>
                    </div>
                    {discount > 0 && (
                      <div className="flex justify-between text-green-600">
                        <span>Discount (20%)</span>
                        <span>-₹{discount}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span>GST (18%)</span>
                      <span>₹{taxes}</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total Amount</span>
                    <span>₹{total}</span>
                  </div>

                  <Button 
                    className="w-full bg-primary-500 hover:bg-primary-600 text-white py-3 mt-6"
                    onClick={handlePayment}
                    disabled={isProcessing || !bookingData.date || !bookingData.time || !bookingData.address || !bookingData.phone}
                  >
                    {isProcessing ? 'Processing...' : `Confirm & Pay ₹${total}`}
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
