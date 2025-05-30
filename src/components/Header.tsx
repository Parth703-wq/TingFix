
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Search, User, MapPin, Settings } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center">
              <Settings className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-2xl font-bold text-gray-900">Ting Fix</span>
              <p className="text-xs text-gray-500 -mt-1">Professional Services</p>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-4 flex-1 max-w-2xl mx-8">
            <div className="flex items-center space-x-2 bg-gray-50 rounded-lg px-4 py-3 flex-1 border">
              <MapPin className="w-5 h-5 text-gray-500" />
              <select className="bg-transparent border-none outline-none text-sm flex-1">
                <option>Select Location</option>
                <option>Mumbai</option>
                <option>Delhi</option>
                <option>Bangalore</option>
                <option>Chennai</option>
                <option>Hyderabad</option>
              </select>
            </div>
            <div className="flex items-center space-x-2 bg-gray-50 rounded-lg px-4 py-3 flex-1 border">
              <Search className="w-5 h-5 text-gray-500" />
              <input 
                type="text" 
                placeholder="Search for services..." 
                className="bg-transparent border-none outline-none text-sm flex-1"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/dashboard">
              <Button variant="ghost" size="sm" className="hidden md:flex">
                <User className="w-4 h-4 mr-2" />
                Profile
              </Button>
            </Link>
            <Button size="sm" className="bg-primary-600 hover:bg-primary-700 text-white px-6">
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
