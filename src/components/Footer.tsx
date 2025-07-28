
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-luxe-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-playfair font-bold text-gradient bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent mb-4">
                The Blue Ribbon Events
              </h3>
              <p className="text-luxe-200 leading-relaxed">
                Creating unforgettable moments and extraordinary experiences. Your premier destination for luxury events and celebrations.
              </p>
            </div>
            
            <div className="flex space-x-4">
              <a
                href="https://m.facebook.com/TheBlueRibbonEventCentre/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-gold-500 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/theblueribboneventsandhall/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-gold-500 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/blueribbon_ng"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-gold-500 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '#home' },
                { name: 'Services', href: '#services' },
                { name: 'Gallery', href: '#gallery' },
                { name: 'About Us', href: '#about' },
                { name: 'Contact', href: '#contact' },
                { name: 'Blog', href: '#' },
                { name: 'FAQ', href: '#' }
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-luxe-200 hover:text-gold-300 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Our Services</h4>
            <ul className="space-y-3">
              {[
                'Wedding Planning',
                'Corporate Events',
                'Birthday Parties',
                'Anniversary Celebrations',
                'Venue Rental',
                'Catering Services',
                'Event Coordination'
              ].map((service) => (
                <li key={service}>
                  <span className="text-luxe-200">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold-400 mt-1 flex-shrink-0" />
                <a
                  href="https://www.google.com/maps/place/15+Olayiwola+St,+Abule+Egba,+Lagos+100001,+Nigeria/@6.6552855,3.2952147,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-luxe-200 hover:text-gold-300 transition-colors duration-300"
                >
                  15 Olayiwola Street, Abule Egba<br />
                  Lagos, Nigeria 100001
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gold-400 flex-shrink-0" />
                <a
                  href="tel:08027249042"
                  className="text-luxe-200 hover:text-gold-300 transition-colors duration-300"
                >
                  0802 724 9042
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gold-400 flex-shrink-0" />
                <a
                  href="mailto:info@theblueribbonevents.com"
                  className="text-luxe-200 hover:text-gold-300 transition-colors duration-300"
                >
                  info@theblueribbonevents.com
                </a>
              </div>
            </div>

            <div className="mt-6 p-4 bg-white/5 rounded-lg">
              <h5 className="font-semibold text-white mb-2">Business Hours</h5>
              <div className="text-sm text-luxe-200 space-y-1">
                <p>Mon - Fri: 9:00 AM - 8:00 PM</p>
                <p>Sat: 10:00 AM - 6:00 PM</p>
                <p>Sun: 12:00 PM - 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-luxe-200 text-sm">
            © {new Date().getFullYear()} The Blue Ribbon Events. All rights reserved. | Privacy Policy | Terms of Service
          </div>
          <div className="text-luxe-200 text-sm">
            Designed with ❤️ for extraordinary events
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
