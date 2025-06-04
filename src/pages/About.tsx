
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Users, Clock, Award, Target, Heart, Code, Wrench, Lightbulb, Settings } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Trust & Safety",
      description: "All our professionals are background verified and trained to provide safe, reliable services."
    },
    {
      icon: Users,
      title: "Customer First",
      description: "We prioritize customer satisfaction above all else, ensuring every service exceeds expectations."
    },
    {
      icon: Clock,
      title: "Reliability",
      description: "On-time service delivery with transparent pricing and no hidden charges."
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Every service comes with our quality guarantee and comprehensive insurance coverage."
    },
    {
      icon: Target,
      title: "Innovation",
      description: "We continuously improve our platform to make home services more accessible and efficient."
    },
    {
      icon: Heart,
      title: "Community Impact",
      description: "Supporting local professionals and creating employment opportunities in every city we serve."
    }
  ];

  const team = [
    {
      name: "Hindiya Parth",
      icon: Code,
      color: "bg-blue-500"
    },
    {
      name: "Dhruv Joshi",
      icon: Wrench,
      color: "bg-green-500"
    },
    {
      name: "Uvaish Shaikh",
      icon: Lightbulb,
      color: "bg-purple-500"
    },
    {
      name: "Rahul Vasava",
      icon: Settings,
      color: "bg-orange-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Ting Fix
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're on a mission to make professional home services accessible, reliable, and 
              affordable for everyone. Founded in 2020, Ting Fix has revolutionized how people 
              connect with trusted service professionals.
            </p>
          </div>

          {/* Story Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Ting Fix was born from a simple frustration: finding reliable home service 
                  professionals shouldn't be so difficult. Our founders experienced the common 
                  struggles of homeowners - unreliable service providers, unclear pricing, 
                  and lack of quality assurance.
                </p>
                <p>
                  Today, we've created a platform that connects over 50,000 customers with 
                  1,000+ verified professionals across 20+ cities in India. Every professional 
                  on our platform is background-checked, trained, and committed to delivering 
                  exceptional service.
                </p>
                <p>
                  We believe that quality home services should be accessible to everyone, 
                  and we're proud to be making that vision a reality, one service at a time.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop"
                alt="Our team"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Our Values
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-8 h-8 text-primary-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className={`w-20 h-20 ${member.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <member.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {member.name}
                    </h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">50,000+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">1,000+</div>
                <div className="text-gray-600">Verified Professionals</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">20+</div>
                <div className="text-gray-600">Cities Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">4.8★</div>
                <div className="text-gray-600">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
