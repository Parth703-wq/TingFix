
export interface Professional {
  id: string;
  name: string;
  profession: string;
  category: string;
  rating: number;
  reviews: number;
  experience: string;
  price: string;
  image: string;
  location: string;
  verified: boolean;
  skills: string[];
  description: string;
  availability: string;
  phone: string;
  email: string;
}

export const professionals: Professional[] = [
  {
    id: "1",
    name: "Rajesh Kumar",
    profession: "Senior Plumber",
    category: "plumbing",
    rating: 4.8,
    reviews: 245,
    experience: "8 years",
    price: "₹500-800/hour",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    location: "Mumbai, Maharashtra",
    verified: true,
    skills: ["Pipe Installation", "Leak Repair", "Bathroom Fitting", "Emergency Repairs"],
    description: "Experienced plumber specializing in residential and commercial plumbing solutions.",
    availability: "Mon-Sat, 9 AM - 6 PM",
    phone: "+91 98765 43210",
    email: "rajesh.plumber@tingfix.com"
  },
  {
    id: "2",
    name: "Priya Sharma",
    profession: "Electrical Technician",
    category: "electrical",
    rating: 4.9,
    reviews: 189,
    experience: "6 years",
    price: "₹600-900/hour",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b586?w=150&h=150&fit=crop&crop=face",
    location: "Delhi, NCR",
    verified: true,
    skills: ["Wiring", "Circuit Repair", "LED Installation", "Safety Inspection"],
    description: "Certified electrical technician with expertise in modern electrical systems.",
    availability: "Daily, 8 AM - 8 PM",
    phone: "+91 98765 43211",
    email: "priya.electrical@tingfix.com"
  },
  {
    id: "3",
    name: "Mohammed Ali",
    profession: "AC Service Expert",
    category: "appliances",
    rating: 4.7,
    reviews: 312,
    experience: "10 years",
    price: "₹400-700/visit",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    location: "Bangalore, Karnataka",
    verified: true,
    skills: ["AC Repair", "Gas Refilling", "Installation", "Maintenance"],
    description: "Expert in all types of air conditioning systems with 10+ years experience.",
    availability: "Mon-Sun, 9 AM - 7 PM",
    phone: "+91 98765 43212",
    email: "mohammed.ac@tingfix.com"
  },
  {
    id: "4",
    name: "Anita Patel",
    profession: "Home Cleaning Specialist",
    category: "cleaning",
    rating: 4.8,
    reviews: 156,
    experience: "5 years",
    price: "₹1200-2000/session",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
    location: "Pune, Maharashtra",
    verified: true,
    skills: ["Deep Cleaning", "Kitchen Cleaning", "Bathroom Sanitization", "Organization"],
    description: "Professional cleaning specialist with eco-friendly cleaning solutions.",
    availability: "Tue-Sun, 10 AM - 5 PM",
    phone: "+91 98765 43213",
    email: "anita.cleaning@tingfix.com"
  },
  {
    id: "5",
    name: "Vikram Singh",
    profession: "Interior Painter",
    category: "painting",
    rating: 4.6,
    reviews: 98,
    experience: "7 years",
    price: "₹25-40/sq ft",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    location: "Hyderabad, Telangana",
    verified: true,
    skills: ["Interior Painting", "Texture Work", "Wall Design", "Color Consultation"],
    description: "Creative painter specializing in modern interior designs and textures.",
    availability: "Mon-Fri, 9 AM - 6 PM",
    phone: "+91 98765 43214",
    email: "vikram.painting@tingfix.com"
  },
  {
    id: "6",
    name: "Sunita Devi",
    profession: "Beauty Therapist",
    category: "beauty",
    rating: 4.9,
    reviews: 234,
    experience: "9 years",
    price: "₹1500-3000/session",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    location: "Chennai, Tamil Nadu",
    verified: true,
    skills: ["Facial Treatment", "Hair Styling", "Bridal Makeup", "Skin Care"],
    description: "Certified beauty professional offering premium salon services at home.",
    availability: "Tue-Sun, 11 AM - 7 PM",
    phone: "+91 98765 43215",
    email: "sunita.beauty@tingfix.com"
  }
];

// Demo credentials
export const demoCredentials = {
  user: {
    email: "demo.user@tingfix.com",
    password: "user123",
    name: "Demo User",
    phone: "+91 98765 00001"
  },
  professional: {
    email: "demo.pro@tingfix.com", 
    password: "pro123",
    name: "Demo Professional",
    profession: "Multi-Service Expert",
    phone: "+91 98765 00002"
  }
};
