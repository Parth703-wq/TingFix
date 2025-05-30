
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, DollarSign, Clock, Star, Award, Headphones } from 'lucide-react';

const WhyChooseSection = () => {
  const features = [
    {
      icon: Shield,
      title: 'Verified Professionals',
      description: 'Background-checked and certified technicians you can trust',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: DollarSign,
      title: 'Transparent Pricing',
      description: 'Upfront costs with no hidden fees or surprises',
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: Clock,
      title: 'On-Time Service',
      description: 'Punctual arrivals with real-time tracking updates',
      color: 'from-amber-500 to-amber-600'
    },
    {
      icon: Star,
      title: 'Quality Guarantee',
      description: '100% satisfaction with our service quality promise',
      color: 'from-rose-500 to-rose-600'
    },
    {
      icon: Award,
      title: 'Expert Technicians',
      description: 'Skilled professionals with years of experience',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock customer service and emergency help',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold mb-6">
            Why Choose <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Ting Fix?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Experience the difference with our commitment to excellence and customer satisfaction
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="service-card text-center border-0 h-full animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-8">
                  <div className="flex justify-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
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
