import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">🏛️</span>
              </div>
              <span className="font-bold text-xl text-heritage">
                Bharat Sanskriti
              </span>
            </div>
            <p className="text-sm opacity-90">
              Discover and preserve India's rich cultural heritage. Explore ancient monuments, 
              sacred traditions, and vibrant festivals that celebrate our diverse heritage.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 hover:text-heritage cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 hover:text-heritage cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 hover:text-heritage cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 hover:text-heritage cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-heritage">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/heritage" className="text-sm hover:text-heritage transition-colors">Heritage Sites</Link></li>
              <li><Link to="/traditions" className="text-sm hover:text-heritage transition-colors">Traditions</Link></li>
              <li><Link to="/festivals" className="text-sm hover:text-heritage transition-colors">Festivals</Link></li>
              <li><Link to="/states" className="text-sm hover:text-heritage transition-colors">States & UTs</Link></li>
              <li><Link to="/risk-radar" className="text-sm hover:text-heritage transition-colors">Risk Radar</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold text-heritage">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm hover:text-heritage transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-heritage transition-colors">Contact</Link></li>
              <li><a href="#" className="text-sm hover:text-heritage transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm hover:text-heritage transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-sm hover:text-heritage transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-heritage">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-heritage" />
                <span className="text-sm">info@bharatsanskriti.org</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-heritage" />
                <span className="text-sm">+91 11 2345 6789</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-heritage" />
                <span className="text-sm">New Delhi, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-heritage/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-80">
            © 2024 Bharat Sanskriti. All rights reserved. Preserving India's cultural heritage for future generations.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;