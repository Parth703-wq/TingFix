import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, HelpCircle, MessageCircle, Phone, Mail } from 'lucide-react';

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqCategories = [
    {
      title: "Getting Started",
      questions: [
        { q: "How do I book a service?", a: "You can book a service by browsing our services page, selecting your desired service, and following the booking process." },
        { q: "How do I create an account?", a: "Click the 'Sign In' button and select 'Create Account' to register as a new user." },
        { q: "What areas do you serve?", a: "We currently serve 20+ major cities across India. Check our service areas during booking." }
      ]
    },
    {
      title: "Booking & Payments",
      questions: [
        { q: "What payment methods do you accept?", a: "We accept all major credit cards, debit cards, UPI, and digital wallets." },
        { q: "Can I reschedule my booking?", a: "Yes, you can reschedule your booking up to 2 hours before the scheduled time." },
        { q: "What if I'm not satisfied with the service?", a: "We offer a satisfaction guarantee. Contact our support team for resolution." }
      ]
    },
    {
      title: "For Professionals",
      questions: [
        { q: "How do I join as a professional?", a: "Register as a professional through our platform and complete the verification process." },
        { q: "How do I get paid?", a: "Payments are processed weekly to your registered bank account." },
        { q: "What are the requirements to join?", a: "You need relevant skills, valid ID, and must pass our background verification." }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How Can We <span className="text-primary-600">Help You?</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Find answers to common questions or get in touch with our support team.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for help..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Contact Options */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Phone className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <CardTitle>Call Us</CardTitle>
                <CardDescription>Speak with our support team</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold mb-2">+91 1800-123-4567</p>
                <p className="text-sm text-gray-600">Mon-Sat: 9 AM - 9 PM</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <MessageCircle className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <CardTitle>Live Chat</CardTitle>
                <CardDescription>Get instant help online</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">Start Chat</Button>
                <p className="text-sm text-gray-600 mt-2">Average response: 2 mins</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Mail className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <CardTitle>Email Us</CardTitle>
                <CardDescription>Send us your questions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold mb-2">support@tingfix.com</p>
                <p className="text-sm text-gray-600">Response within 24 hours</p>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Sections */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Frequently Asked Questions</h2>
            
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{category.title}</h3>
                <div className="space-y-4">
                  {category.questions.map((faq, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="text-lg flex items-start">
                          <HelpCircle className="w-5 h-5 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                          {faq.q}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 pl-8">{faq.a}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HelpCenter;
