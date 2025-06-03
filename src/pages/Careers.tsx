import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Users, Briefcase, Heart, TrendingUp } from 'lucide-react';

const Careers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const jobOpenings = [
    {
      id: 1,
      title: "Senior Software Engineer",
      department: "Engineering",
      location: "Mumbai, India",
      type: "Full-time",
      experience: "3-5 years",
      description: "Join our engineering team to build scalable solutions for our platform.",
      requirements: ["React, Node.js experience", "5+ years software development", "Experience with cloud platforms"]
    },
    {
      id: 2,
      title: "Product Manager",
      department: "Product",
      location: "Bangalore, India",
      type: "Full-time",
      experience: "4-6 years",
      description: "Lead product strategy and work with cross-functional teams.",
      requirements: ["Product management experience", "Data-driven mindset", "B2C platform experience"]
    },
    {
      id: 3,
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Delhi, India",
      type: "Full-time",
      experience: "2-4 years",
      description: "Ensure customer satisfaction and drive retention.",
      requirements: ["Customer success experience", "Excellent communication", "SaaS platform experience"]
    },
    {
      id: 4,
      title: "Service Quality Specialist",
      department: "Operations",
      location: "Pune, India",
      type: "Full-time",
      experience: "1-3 years",
      description: "Monitor and improve service quality across all categories.",
      requirements: ["Quality assurance experience", "Operations background", "Attention to detail"]
    }
  ];

  const benefits = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Career Growth",
      description: "Learning opportunities and clear career progression paths"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Work-Life Balance",
      description: "Flexible working hours and remote work options"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Great Team",
      description: "Work with passionate and talented individuals"
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
              Join Our <span className="text-primary-600">Team</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Be part of a mission to transform how people access professional services. 
              Build your career while making a real impact on millions of lives.
            </p>
            <Button size="lg" className="bg-primary-600 hover:bg-primary-700">
              View Open Positions
            </Button>
          </div>

          {/* Why Join Us */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose Ting Fix?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4 text-primary-600">
                      {benefit.icon}
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Open Positions */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Open Positions</h2>
            <div className="space-y-6">
              {jobOpenings.map((job) => (
                <Card key={job.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                        <CardDescription className="text-base">{job.description}</CardDescription>
                      </div>
                      <Button className="bg-primary-600 hover:bg-primary-700">
                        Apply Now
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-4 mb-4">
                      <Badge variant="secondary" className="flex items-center">
                        <Briefcase className="w-3 h-3 mr-1" />
                        {job.department}
                      </Badge>
                      <Badge variant="outline" className="flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {job.location}
                      </Badge>
                      <Badge variant="outline" className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {job.type}
                      </Badge>
                      <Badge variant="outline">
                        {job.experience}
                      </Badge>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Requirements:</h4>
                      <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                        {job.requirements.map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <Card className="bg-gradient-to-r from-primary-600 to-primary-700 text-white text-center">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-4">Don't See Your Role?</h2>
              <p className="text-xl mb-8 opacity-90">
                We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg">
                  Send Resume
                </Button>
                <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary-700">
                  Contact HR
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Careers;
