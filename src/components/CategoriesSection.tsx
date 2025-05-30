
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Wrench, Zap, Brush, Settings, Hammer, Cpu } from 'lucide-react';

const CategoriesSection = () => {
  const categories = [
    {
      id: 'repairs',
      title: 'Home Repairs',
      description: 'Expert plumbing, electrical, and carpentry services',
      icon: Wrench,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      link: '/services?category=repairs'
    },
    {
      id: 'appliances',
      title: 'Appliance Services',
      description: 'Installation and repair of home appliances',
      icon: Zap,
      color: 'from-teal-500 to-teal-600',
      bgColor: 'bg-teal-50',
      link: '/services?category=appliances'
    },
    {
      id: 'cleaning',
      title: 'Professional Cleaning',
      description: 'Deep cleaning and maintenance services',
      icon: Brush,
      color: 'from-amber-500 to-amber-600',
      bgColor: 'bg-amber-50',
      link: '/services?category=cleaning'
    },
    {
      id: 'installation',
      title: 'Installation Services',
      description: 'Professional installation of fixtures and equipment',
      icon: Settings,
      color: 'from-rose-500 to-rose-600',
      bgColor: 'bg-rose-50',
      link: '/services?category=installation'
    },
    {
      id: 'renovation',
      title: 'Renovation',
      description: 'Home improvement and remodeling projects',
      icon: Hammer,
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'bg-emerald-50',
      link: '/services?category=renovation'
    },
    {
      id: 'tech',
      title: 'Tech Support',
      description: 'Technology installation and troubleshooting',
      icon: Cpu,
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50',
      link: '/services?category=tech'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Professional solutions for every home need, delivered by certified experts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Link key={category.id} to={category.link} className="group">
                <Card className="service-card h-full border-0 overflow-hidden animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardContent className="p-0">
                    <div className={`h-24 bg-gradient-to-r ${category.color} flex items-center justify-center relative`}>
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    <div className="p-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {category.description}
                      </p>
                      <div className="flex items-center text-primary-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                        Explore Service →
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
