
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg"></div>
              <span className="text-xl font-bold">ServiceHub</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted partner for professional home services. Quality guaranteed.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <div className="w-6 h-6 bg-blue-600 rounded"></div>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <div className="w-6 h-6 bg-pink-600 rounded"></div>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <div className="w-6 h-6 bg-blue-400 rounded"></div>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/press" className="text-gray-400 hover:text-white transition-colors">Press</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/help" className="text-gray-400 hover:text-white transition-colors">Help Center</Link></li>
              <li><Link to="/safety" className="text-gray-400 hover:text-white transition-colors">Safety</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Get the App</h3>
            <div className="space-y-3">
              <a href="#" className="block">
                <div className="bg-white text-black px-4 py-2 rounded-lg flex items-center space-x-2">
                  <div className="w-6 h-6 bg-green-500 rounded"></div>
                  <div>
                    <div className="text-xs">Get it on</div>
                    <div className="font-semibold">Google Play</div>
                  </div>
                </div>
              </a>
              <a href="#" className="block">
                <div className="bg-white text-black px-4 py-2 rounded-lg flex items-center space-x-2">
                  <div className="w-6 h-6 bg-black rounded"></div>
                  <div>
                    <div className="text-xs">Download on the</div>
                    <div className="font-semibold">App Store</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2024 ServiceHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
