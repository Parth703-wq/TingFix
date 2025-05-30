
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Search, User, MapPin } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg"></div>
            <span className="text-xl font-bold text-gray-900">ServiceHub</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-4 flex-1 max-w-xl mx-8">
            <div className="flex items-center space-x-2 bg-gray-50 rounded-full px-4 py-2 flex-1">
              <MapPin className="w-4 h-4 text-gray-500" />
              <select className="bg-transparent border-none outline-none text-sm">
                <option>Mumbai</option>
                <option>Delhi</option>
                <option>Bangalore</option>
              </select>
            </div>
            <div className="flex items-center space-x-2 bg-gray-50 rounded-full px-4 py-2 flex-1">
              <Search className="w-4 h-4 text-gray-500" />
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
            <Button size="sm" className="bg-primary-500 hover:bg-primary-600">
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
