
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Users, Calendar } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background px-4 sm:px-6 animate-fade-in">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-96 h-48 sm:h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-48 sm:w-96 h-48 sm:h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto text-center">
        <div className="max-w-5xl mx-auto">
          {/* Elegant badge */}
          <div className="inline-flex items-center space-x-2 sm:space-x-3 bg-secondary/50 backdrop-blur-sm rounded-full px-4 sm:px-8 py-3 sm:py-4 mb-8 sm:mb-12 animate-fade-in">
            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-accent fill-current" />
            <span className="text-muted-foreground font-medium tracking-wide text-xs sm:text-sm">Premier Event Venue</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-playfair font-light mb-6 sm:mb-8 animate-fade-in leading-tight animate-[scale-in_1s_ease-out_0.2s_both]">
            The Blue Ribbon
            <span className="block font-light text-accent italic animate-[slide-in-right_1s_ease-out_0.5s_both]">
              Events
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 sm:mb-12 max-w-3xl mx-auto animate-fade-in delay-300 leading-relaxed px-4">
            Where elegance meets perfection. Create unforgettable moments in our sophisticated venue, 
            tailored to your vision with impeccable attention to detail.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 lg:space-x-8 mb-12 sm:mb-16 animate-fade-in delay-500 px-4">
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-foreground text-background hover:bg-accent hover:text-foreground px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-lg font-medium tracking-wide hover-scale group"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book Your Event
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto border-foreground text-foreground hover:bg-foreground hover:text-background px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-lg font-medium tracking-wide"
              onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Portfolio
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 max-w-3xl mx-auto animate-fade-in delay-700 px-4">
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-accent mr-2 sm:mr-3" />
                <span className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-light text-foreground">500+</span>
              </div>
              <p className="text-muted-foreground tracking-wide text-sm sm:text-base">Events Hosted</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Star className="w-5 h-5 sm:w-6 sm:h-6 text-accent mr-2 sm:mr-3 fill-current" />
                <span className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-light text-foreground">4.9</span>
              </div>
              <p className="text-muted-foreground tracking-wide text-sm sm:text-base">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-accent mr-2 sm:mr-3" />
                <span className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-light text-foreground">15+</span>
              </div>
              <p className="text-muted-foreground tracking-wide text-sm sm:text-base">Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-px h-8 sm:h-12 bg-muted-foreground/30 animate-pulse"></div>
      </div>
    </section>
  );
};

export default Hero;
