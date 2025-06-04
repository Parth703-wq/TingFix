
import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const handleLinkClick = () => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  };

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center shadow-lg">
                <Wrench className="w-7 h-7 text-white" />
              </div>
              <div>
                <span className="text-3xl font-bold bg-gradient-to-r from-purple-300 to-teal-300 bg-clip-text text-transparent">Ting Fix</span>
                <p className="text-xs text-gray-400 -mt-1 font-medium">Professional Services</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Your trusted partner for professional home services. We deliver quality, reliability, and excellence in every service we provide.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-300">+91 1800-123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-300">support@tingfix.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-300">Available in 25+ cities across India</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-6 text-lg text-purple-300">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" onClick={handleLinkClick} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-300 transition-colors">About Us</Link></li>
              <li><Link to="/careers" onClick={handleLinkClick} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-300 transition-colors">Careers</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-300 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-300 transition-colors">Press</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-300 transition-colors">Partner with Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-6 text-lg text-teal-300">Support</h3>
            <ul className="space-y-3">
              <li><Link to="/help" onClick={handleLinkClick} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-300 transition-colors">Help Center</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-teal-300 transition-colors">Safety Guidelines</a></li>
              <li><Link to="/terms" onClick={handleLinkClick} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-300 transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" onClick={handleLinkClick} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-300 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/contact" onClick={handleLinkClick} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-300 transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">© 2024 Ting Fix. All rights reserved.</p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                <span className="text-sm font-bold text-white">f</span>
              </div>
              <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                <span className="text-sm font-bold text-white">@</span>
              </div>
              <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                <span className="text-sm font-bold text-white">in</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
