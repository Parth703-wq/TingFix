
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Clock, Users, Briefcase } from 'lucide-react';

const Careers = () => {
  const jobOpenings = [
    {
      title: "Senior Software Engineer",
      department: "Engineering",
      location: "Mumbai, India",
      type: "Full-time",
      description: "Join our engineering team to build scalable solutions for our growing platform."
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Bangalore, India",
      type: "Full-time",
      description: "Lead product strategy and development for our core service marketplace."
    },
    {
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Delhi, India",
      type: "Full-time",
      description: "Help our customers achieve success with our platform and services."
    },
    {
      title: "Marketing Specialist",
      department: "Marketing",
      location: "Chennai, India",
      type: "Full-time",
      description: "Drive growth through digital marketing campaigns and brand initiatives."
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
              Join Our <span className="text-primary-600">Amazing Team</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're building the future of professional services. Join us in our mission to connect skilled professionals with customers who need their expertise.
            </p>
          </div>

          {/* Company Culture */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center">
              <CardHeader>
                <Users className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <CardTitle>Collaborative Culture</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Work with passionate professionals who support each other's growth and success.</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Briefcase className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <CardTitle>Growth Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Advance your career with continuous learning and leadership development programs.</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Clock className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <CardTitle>Work-Life Balance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Enjoy flexible working arrangements and comprehensive benefits for a balanced life.</p>
              </CardContent>
            </Card>
          </div>

          {/* Job Openings */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Current Openings</h2>
            <div className="space-y-6">
              {jobOpenings.map((job, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                        <CardDescription>{job.description}</CardDescription>
                      </div>
                      <Button className="mt-4 md:mt-0">Apply Now</Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Briefcase className="w-4 h-4 mr-2" />
                        {job.department}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {job.type}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-primary-600 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Don't see a perfect fit?</h3>
            <p className="text-lg mb-6 opacity-90">
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <Button variant="secondary" size="lg">
              Send Your Resume
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Careers;
