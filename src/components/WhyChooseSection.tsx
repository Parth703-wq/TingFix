
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, DollarSign, Clock, Star, Award, Headphones } from 'lucide-react';

const WhyChooseSection = () => {
  const features = [
    {
      icon: Shield,
      title: 'Verified Professionals',
      description: 'All technicians are background-checked, certified, and insured for your safety and peace of mind'
    },
    {
      icon: DollarSign,
      title: 'Transparent Pricing',
      description: 'Upfront pricing with no hidden charges. Get detailed quotes before any work begins'
    },
    {
      icon: Clock,
      title: 'On-Time Service',
      description: 'Punctual service delivery with real-time tracking and updates on technician arrival'
    },
    {
      icon: Star,
      title: 'Quality Guarantee',
      description: '100% satisfaction guarantee with free follow-up service if you\'re not completely satisfied'
    },
    {
      icon: Award,
      title: 'Expert Technicians',
      description: 'Highly skilled professionals with years of experience and ongoing training in latest techniques'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock customer support to assist you with bookings, queries, and emergency services'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Ting Fix?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Trusted by thousands of customers for reliable, professional home services</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="professional-card text-center border-0 h-full">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-primary-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
