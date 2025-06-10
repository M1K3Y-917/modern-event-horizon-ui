
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-md elegant-shadow' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6">
        {/* Top bar with contact info - hidden on mobile */}
        <div className={`border-b border-border/20 py-2 sm:py-3 transition-all duration-300 ${
          isScrolled ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'
        } hidden sm:block`}>
          <div className="flex justify-between items-center text-xs sm:text-sm text-muted-foreground">
            <div className="flex items-center space-x-4 sm:space-x-8">
              <div className="flex items-center space-x-2">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>info@luxeevents.com</span>
              </div>
            </div>
            <div className="hidden md:block font-medium text-foreground text-xs sm:text-sm">
              Creating Extraordinary Moments
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between py-4 sm:py-6">
          <div className="flex items-center">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-playfair font-light tracking-wide text-foreground">
              Luxe Events
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-12">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-accent transition-colors duration-300 font-medium tracking-wide relative group text-sm uppercase"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
            <Button variant="outline" className="border-foreground text-foreground hover:bg-foreground hover:text-background font-medium tracking-wide text-xs sm:text-sm px-3 sm:px-4 py-2">
              Get Quote
            </Button>
            <Button className="bg-foreground text-background hover:bg-accent hover:text-foreground font-medium tracking-wide text-xs sm:text-sm px-3 sm:px-4 py-2">
              Book Event
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 sm:py-6 border-t border-border/20 animate-fade-in bg-background/95 backdrop-blur-md rounded-b-lg">
            <nav className="flex flex-col space-y-4 sm:space-y-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-accent transition-colors py-2 text-sm uppercase tracking-wide"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col space-y-3 pt-4 sm:pt-6">
                <Button variant="outline" className="border-foreground text-foreground text-sm">
                  Get Quote
                </Button>
                <Button className="bg-foreground text-background text-sm">
                  Book Event
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
