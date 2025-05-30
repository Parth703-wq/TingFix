
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Wrench, Zap, Brush, Settings, Hammer, Cpu } from 'lucide-react';

const CategoriesSection = () => {
  const categories = [
    {
      id: 'repairs',
      title: 'Home Repairs & Maintenance',
      description: 'Plumbing, electrical, carpentry, and general maintenance services',
      icon: Wrench,
      color: 'from-blue-600 to-blue-700',
      link: '/services?category=repairs'
    },
    {
      id: 'appliances',
      title: 'Appliance Services',
      description: 'Installation, repair, and maintenance of home appliances',
      icon: Zap,
      color: 'from-green-600 to-green-700',
      link: '/services?category=appliances'
    },
    {
      id: 'cleaning',
      title: 'Professional Cleaning',
      description: 'Deep cleaning, regular maintenance, and specialized cleaning services',
      icon: Brush,
      color: 'from-purple-600 to-purple-700',
      link: '/services?category=cleaning'
    },
    {
      id: 'installation',
      title: 'Installation Services',
      description: 'Professional installation of fixtures, appliances, and equipment',
      icon: Settings,
      color: 'from-orange-600 to-orange-700',
      link: '/services?category=installation'
    },
    {
      id: 'renovation',
      title: 'Renovation & Remodeling',
      description: 'Home improvement, renovation, and remodeling projects',
      icon: Hammer,
      color: 'from-red-600 to-red-700',
      link: '/services?category=renovation'
    },
    {
      id: 'tech',
      title: 'Tech Support & Setup',
      description: 'Technology installation, setup, and troubleshooting services',
      icon: Cpu,
      color: 'from-indigo-600 to-indigo-700',
      link: '/services?category=tech'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Professional Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Expert technicians delivering quality service for all your home needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Link key={category.id} to={category.link} className="group">
                <Card className="professional-card group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 border-0 overflow-hidden h-full">
                  <CardContent className="p-0">
                    <div className={`h-32 bg-gradient-to-r ${category.color} flex items-center justify-center relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/10"></div>
                      <IconComponent className="w-12 h-12 text-white relative z-10" />
                    </div>
                    <div className="p-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {category.description}
                      </p>
                      <div className="mt-4 text-primary-600 font-medium">
                        Learn More →
                      </div>
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
