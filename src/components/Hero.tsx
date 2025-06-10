
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Users, Calendar } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Elegant badge */}
          <div className="inline-flex items-center space-x-3 bg-secondary/50 backdrop-blur-sm rounded-full px-8 py-4 mb-12 animate-fade-in">
            <Star className="w-5 h-5 text-accent fill-current" />
            <span className="text-muted-foreground font-medium tracking-wide">Premier Event Experiences</span>
          </div>

          {/* Main heading */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-playfair font-light mb-8 animate-fade-in leading-tight">
            Extraordinary
            <span className="block font-light text-accent italic">
              Events
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-in delay-300 leading-relaxed">
            Where elegance meets perfection. Create unforgettable moments in our sophisticated venues, 
            tailored to your vision with impeccable attention to detail.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-16 animate-fade-in delay-500">
            <Button size="lg" className="bg-foreground text-background hover:bg-accent hover:text-foreground px-12 py-6 text-lg font-medium tracking-wide hover-scale group">
              Plan Your Event
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-foreground text-foreground hover:bg-foreground hover:text-background px-12 py-6 text-lg font-medium tracking-wide"
            >
              View Portfolio
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-3xl mx-auto animate-fade-in delay-700">
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Users className="w-6 h-6 text-accent mr-3" />
                <span className="text-4xl font-playfair font-light text-foreground">500+</span>
              </div>
              <p className="text-muted-foreground tracking-wide">Events Curated</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Star className="w-6 h-6 text-accent mr-3 fill-current" />
                <span className="text-4xl font-playfair font-light text-foreground">4.9</span>
              </div>
              <p className="text-muted-foreground tracking-wide">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Calendar className="w-6 h-6 text-accent mr-3" />
                <span className="text-4xl font-playfair font-light text-foreground">15+</span>
              </div>
              <p className="text-muted-foreground tracking-wide">Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-px h-12 bg-muted-foreground/30 animate-pulse"></div>
      </div>
    </section>
  );
};

export default Hero;
