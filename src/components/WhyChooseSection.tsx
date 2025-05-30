
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, DollarSign, Home, Star } from 'lucide-react';

const WhyChooseSection = () => {
  const features = [
    {
      icon: Shield,
      title: 'Verified Professionals',
      description: 'All our service providers are background-checked and verified for your safety'
    },
    {
      icon: DollarSign,
      title: 'Transparent Pricing',
      description: 'No hidden charges. See upfront pricing before you book any service'
    },
    {
      icon: Home,
      title: 'At-Home Convenience',
      description: 'Enjoy professional services in the comfort and safety of your home'
    },
    {
      icon: Star,
      title: 'Customer Ratings',
      description: 'Choose from top-rated professionals based on genuine customer reviews'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose ServiceHub?</h2>
          <p className="text-xl text-gray-600">Trusted by thousands of customers across the city</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    <IconComponent className="w-12 h-12 text-primary-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
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
