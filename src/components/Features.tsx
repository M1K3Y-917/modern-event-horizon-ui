
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Car, Shield, Users, Award, AirVent, Zap, Cctv, Headphones, Building2 } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Car,
      title: 'Ample Parking Space',
      description: 'Extremely spacious parking area that accommodates hundreds of vehicles with ease and convenience.'
    },
    {
      icon: Shield,
      title: '24/7 Security',
      description: 'Top-notch standby security team featuring both professional police and in-house security personnel.'
    },
    {
      icon: Users,
      title: 'Banquet Setup',
      description: 'Complete banquet tables and chairs arrangement to accommodate your guests comfortably.'
    },
    {
      icon: AirVent,
      title: 'Climate Control',
      description: 'Advanced air conditioning system ensuring optimal comfort for all your guests throughout the event.'
    },
    {
      icon: Award,
      title: 'Professional Lighting',
      description: 'State-of-the-art lighting system to create the perfect ambiance for your special occasion.'
    },
    {
      icon: Headphones,
      title: 'Premium Sound System',
      description: 'High-quality sound equipment ensuring crystal clear audio for speeches, music, and entertainment.'
    },
    {
      icon: Zap,
      title: 'Uninterrupted Power Supply',
      description: '24-hour power supply with backup generators ensuring your event runs smoothly without interruptions.'
    },
    {
      icon: Building2,
      title: 'Complete Facilities',
      description: 'Modern restroom facilities, CCTV surveillance, professional stage, and much more for your convenience.'
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 elegant-gradient">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-light text-foreground mb-4 sm:mb-6">
            Why Choose <span className="text-accent italic">The Godwin Palladium</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Experience world-class facilities and exceptional service that make every event 
            memorable and extraordinary.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="group border-border/50 hover:border-accent/30 transition-all duration-300 hover-scale animate-fade-in bg-background/50 backdrop-blur-sm"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-accent/10 rounded-full mb-6 mx-auto group-hover:bg-accent/20 transition-colors duration-300">
                  <feature.icon className="w-7 h-7 sm:w-8 sm:h-8 text-accent" />
                </div>
                
                <h3 className="text-lg sm:text-xl font-playfair font-light text-foreground mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
