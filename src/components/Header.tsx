
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Search, User, MapPin, Wrench } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur-lg shadow-lg border-b border-purple-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center shadow-lg">
              <Wrench className="w-7 h-7 text-white" />
            </div>
            <div>
              <span className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Ting Fix
              </span>
              <p className="text-xs text-gray-500 -mt-1 font-medium">Professional Services</p>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-4 flex-1 max-w-2xl mx-8">
            <div className="flex items-center space-x-2 glass-card rounded-xl px-4 py-3 flex-1">
              <MapPin className="w-5 h-5 text-primary-500" />
              <select className="bg-transparent border-none outline-none text-sm flex-1 text-gray-700">
                <option>Select Location</option>
                <option>Mumbai</option>
                <option>Delhi</option>
                <option>Bangalore</option>
                <option>Chennai</option>
                <option>Hyderabad</option>
              </select>
            </div>
            <div className="flex items-center space-x-2 glass-card rounded-xl px-4 py-3 flex-1">
              <Search className="w-5 h-5 text-primary-500" />
              <input 
                type="text" 
                placeholder="Search for services..." 
                className="bg-transparent border-none outline-none text-sm flex-1 text-gray-700 placeholder-gray-500"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/dashboard">
              <Button variant="ghost" size="sm" className="hidden md:flex text-gray-700 hover:text-primary-600 hover:bg-primary-50">
                <User className="w-4 h-4 mr-2" />
                Profile
              </Button>
            </Link>
            <Button size="sm" className="bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white px-6 shadow-lg hover:shadow-xl transition-all duration-300">
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
