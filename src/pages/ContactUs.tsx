
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const officeLocations = [
    {
      city: "Mumbai",
      address: "123 Business District, Bandra Kurla Complex, Mumbai - 400051",
      phone: "+91 22 1234 5678",
      email: "mumbai@tingfix.com"
    },
    {
      city: "Bangalore",
      address: "456 Tech Park, Electronic City, Bangalore - 560100",
      phone: "+91 80 1234 5678",
      email: "bangalore@tingfix.com"
    },
    {
      city: "Delhi",
      address: "789 Connaught Place, New Delhi - 110001",
      phone: "+91 11 1234 5678",
      email: "delhi@tingfix.com"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get In <span className="text-primary-600">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're here to help! Reach out to us for any questions, support, or feedback. 
              Our team is ready to assist you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="support">Technical Support</option>
                        <option value="billing">Billing Question</option>
                        <option value="partnership">Partnership Opportunity</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                        placeholder="Tell us how we can help you..."
                      ></textarea>
                    </div>
                    
                    <Button type="submit" className="w-full" size="lg">
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Quick Contact */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Quick Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <p className="font-semibold">Customer Support</p>
                      <p className="text-gray-600">+91 1800-123-4567</p>
                      <p className="text-sm text-gray-500">Mon-Sat: 9 AM - 9 PM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <p className="font-semibold">Email Support</p>
                      <p className="text-gray-600">support@tingfix.com</p>
                      <p className="text-sm text-gray-500">Response within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <p className="font-semibold">Business Hours</p>
                      <p className="text-gray-600">Monday - Saturday</p>
                      <p className="text-sm text-gray-500">9:00 AM - 9:00 PM IST</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Office Locations */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Office Locations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {officeLocations.map((office, index) => (
                      <div key={index} className="border-l-4 border-primary-500 pl-4">
                        <h4 className="font-semibold text-lg text-gray-800">{office.city}</h4>
                        <div className="mt-2 space-y-1">
                          <div className="flex items-start space-x-2">
                            <MapPin className="w-4 h-4 text-gray-500 mt-1 flex-shrink-0" />
                            <p className="text-gray-600 text-sm">{office.address}</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Phone className="w-4 h-4 text-gray-500" />
                            <p className="text-gray-600 text-sm">{office.phone}</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Mail className="w-4 h-4 text-gray-500" />
                            <p className="text-gray-600 text-sm">{office.email}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactUs;
