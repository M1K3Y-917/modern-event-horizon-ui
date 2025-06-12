
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Clock, Users, Award, Palette, Headphones } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: 'Trusted Excellence',
      description: 'Over 500 successful events with 99% client satisfaction rate and industry-leading safety protocols.'
    },
    {
      icon: Clock,
      title: 'Timely Execution',
      description: 'Precise timeline management ensuring every moment unfolds perfectly according to your vision.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Professional coordinators, designers, and vendors working seamlessly to bring your vision to life.'
    },
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Recognized industry leader with multiple awards for outstanding event design and execution.'
    },
    {
      icon: Palette,
      title: 'Custom Design',
      description: 'Bespoke styling and décor tailored to your unique aesthetic preferences and brand identity.'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Dedicated support throughout your planning journey with immediate response to all inquiries.'
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 elegant-gradient">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-light text-foreground mb-4 sm:mb-6">
            Why Choose <span className="text-accent italic">Luxe Events</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Experience the difference that comes with working alongside industry professionals 
            who are passionate about creating extraordinary moments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
