
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-accent text-black">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-playfair font-bold text-black mb-4">
                The Godwin Palladium
              </h3>
              <p className="text-black/70 leading-relaxed">
                Creating unforgettable moments and extraordinary experiences. Your premier destination for luxury events and celebrations.
              </p>
            </div>
            
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg font-semibold text-black mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '#home' },
                { name: 'Services', href: '#services' },
                { name: 'Gallery', href: '#gallery' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-black/70 hover:text-black transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-black mb-6">Our Services</h4>
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
                  <span className="text-black/70">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-lg font-semibold text-black mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-black mt-1 flex-shrink-0" />
                <a
                  href="https://www.google.com/maps/place/Godwin+Palladium,+Genesis+Estate+Main+Gate+,+Olaide,+Ijaiye+Bus-Stop,+Aboru+St,+Oke+Odo,+Lagos+102213,+Lagos/@6.628387,3.2869573,16z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black/70 hover:text-black transition-colors duration-300"
                >
                  Genesis Estate Main Gate, Olaide,<br />
                  Ijaiye Bus-Stop, Aboru St, Oke Odo,<br />
                  Lagos 102213, Lagos
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-black flex-shrink-0" />
                <div className="text-black/70">
                  <a href="tel:08053781165" className="hover:text-black transition-colors duration-300 block">
                    0805 378 1165
                  </a>
                  <a href="tel:07062897093" className="hover:text-black transition-colors duration-300 block">
                    0706 289 7093
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-black flex-shrink-0" />
                <a
                  href="mailto:info@godwinpalladium.com"
                  className="text-black/70 hover:text-black transition-colors duration-300"
                >
                  info@godwinpalladium.com
                </a>
              </div>
            </div>

            <div className="mt-6 p-4 bg-black/5 rounded-lg">
              <h5 className="font-semibold text-black mb-2">Business Hours</h5>
              <div className="text-sm text-black/70 space-y-1">
                <p>Mon - Fri: 9:00 AM - 8:00 PM</p>
                <p>Sat: 10:00 AM - 6:00 PM</p>
                <p>Sun: 12:00 PM - 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-black/20" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-black/70 text-sm">
            © {new Date().getFullYear()} The Godwin Palladium. All rights reserved.
          </div>
          <div className="text-black/70 text-sm">
            Designed with ❤️ for extraordinary events
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
