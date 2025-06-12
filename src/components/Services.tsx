
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Building2, Users, Music } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: 'Wedding Events',
      description: 'From intimate ceremonies to grand celebrations, we create magical wedding experiences that reflect your unique love story.'
    },
    {
      icon: Building2,
      title: 'Corporate Events',
      description: 'Professional conferences, product launches, and corporate galas designed to elevate your brand and engage your audience.'
    },
    {
      icon: Users,
      title: 'Private Celebrations',
      description: 'Birthdays, anniversaries, and milestone celebrations crafted with personal touches and unforgettable moments.'
    },
    {
      icon: Music,
      title: 'Cultural & Social Events',
      description: 'Festivals, concerts, and community gatherings that bring people together through shared experiences and traditions.'
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-light text-foreground mb-4 sm:mb-6">
            Our <span className="text-accent italic">Services</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Comprehensive event planning and management services tailored to create 
            exceptional experiences for every occasion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group hover:elegant-shadow-lg transition-all duration-500 border-border/50 hover:border-accent/30 hover-scale animate-fade-in bg-background"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-8 sm:p-10 lg:p-12">
                <div className="flex items-start space-x-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors duration-300 flex-shrink-0">
                    <service.icon className="w-8 h-8 text-accent" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl sm:text-3xl font-playfair font-light text-foreground mb-4">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed text-base sm:text-lg">
                      {service.description}
                    </p>
                    
                    <div className="flex justify-end">
                      <Button 
                        variant="outline" 
                        className="border-foreground text-foreground hover:bg-foreground hover:text-background"
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                      >
                        Get Quote
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16 sm:mt-20">
          <p className="text-muted-foreground mb-6 text-lg">
            Need something custom? We create bespoke events for any occasion.
          </p>
          <Button 
            size="lg" 
            className="bg-foreground text-background hover:bg-accent hover:text-foreground px-12 py-6 font-medium tracking-wide"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Discuss Your Event
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
