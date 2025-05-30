
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Sparkles, Brush, Wrench, Activity, Zap, Palette } from 'lucide-react';

const CategoriesSection = () => {
  const categories = [
    {
      id: 'beauty',
      title: 'Beauty & Wellness',
      description: 'Salon services, spa treatments, and wellness therapy at your home',
      icon: Sparkles,
      color: 'from-pink-500 to-rose-500',
      link: '/services?category=beauty'
    },
    {
      id: 'cleaning',
      title: 'Cleaning & Pest Control',
      description: 'Deep cleaning, regular maintenance, and pest control services',
      icon: Brush,
      color: 'from-blue-500 to-cyan-500',
      link: '/services?category=cleaning'
    },
    {
      id: 'repairs',
      title: 'Home Repairs',
      description: 'Plumbing, electrical, carpentry, and appliance repairs',
      icon: Wrench,
      color: 'from-orange-500 to-red-500',
      link: '/services?category=repairs'
    },
    {
      id: 'fitness',
      title: 'Fitness & Yoga',
      description: 'Personal trainers, yoga instructors, and fitness coaches',
      icon: Activity,
      color: 'from-green-500 to-emerald-500',
      link: '/services?category=fitness'
    },
    {
      id: 'appliances',
      title: 'Appliance Services',
      description: 'Installation, repair, and maintenance of home appliances',
      icon: Zap,
      color: 'from-purple-500 to-violet-500',
      link: '/services?category=appliances'
    },
    {
      id: 'painting',
      title: 'Painting & Renovation',
      description: 'Interior painting, wall treatments, and home renovation',
      icon: Palette,
      color: 'from-yellow-500 to-amber-500',
      link: '/services?category=painting'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">Professional services delivered to your doorstep</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Link key={category.id} to={category.link}>
                <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 overflow-hidden">
                  <CardContent className="p-0">
                    <div className={`h-24 bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
