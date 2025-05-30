
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      service: 'AC Installation & Repair',
      rating: 5,
      comment: 'Excellent service! The technician was professional, punctual, and completed the AC installation perfectly. Highly recommend Ting Fix for any home appliance needs.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      location: 'Mumbai'
    },
    {
      name: 'Priya Sharma',
      service: 'Electrical Repairs',
      rating: 5,
      comment: 'Quick response time and expert service. The electrician identified and fixed multiple issues efficiently. Great experience with transparent pricing.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      location: 'Delhi'
    },
    {
      name: 'Amit Patel',
      service: 'Plumbing Services',
      rating: 5,
      comment: 'Professional and reliable service. Fixed our kitchen plumbing issues quickly and provided helpful maintenance tips. Will definitely use Ting Fix again.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      location: 'Bangalore'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600">Real reviews from satisfied customers across India</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="professional-card border-0 shadow-2xl overflow-hidden">
            <CardContent className="p-12">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <Quote className="w-12 h-12 text-primary-300" />
                </div>
                
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-24 h-24 rounded-full mx-auto mb-6 object-cover border-4 border-primary-100"
                />
                
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-xl text-gray-700 mb-8 italic leading-relaxed max-w-2xl mx-auto">
                  "{testimonials[currentTestimonial].comment}"
                </blockquote>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-primary-600 font-medium">{testimonials[currentTestimonial].service}</p>
                  <p className="text-gray-500 text-sm">{testimonials[currentTestimonial].location}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-xl hover:shadow-2xl border-0 w-12 h-12"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-xl hover:shadow-2xl border-0 w-12 h-12"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-primary-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
