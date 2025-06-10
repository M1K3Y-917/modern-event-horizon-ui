
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Building2, Cake, Users, Music, Camera } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: 'Weddings',
      description: 'Transform your special day into an extraordinary celebration with our bespoke wedding planning and elegant venues.',
      features: ['Bridal coordination', 'Ceremony design', 'Reception planning', 'Floral arrangements']
    },
    {
      icon: Building2,
      title: 'Corporate Events',
      description: 'Professional venues and comprehensive event management for conferences, galas, and corporate celebrations.',
      features: ['Executive planning', 'Technical support', 'Catering coordination', 'Brand integration']
    },
    {
      icon: Cake,
      title: 'Private Celebrations',
      description: 'Intimate gatherings and milestone celebrations designed with personal touches and attention to detail.',
      features: ['Custom themes', 'Personal service', 'Curated experiences', 'Memory creation']
    },
    {
      icon: Users,
      title: 'Social Gatherings',
      description: 'Sophisticated venues for reunions, anniversaries, and social events that bring people together.',
      features: ['Flexible spaces', 'Social coordination', 'Entertainment curation', 'Guest experiences']
    },
    {
      icon: Music,
      title: 'Cultural Events',
      description: 'Premium venues with exceptional acoustics and staging for concerts, performances, and cultural celebrations.',
      features: ['Audio visual', 'Stage design', 'Artistic coordination', 'Cultural sensitivity']
    },
    {
      icon: Camera,
      title: 'Brand Experiences',
      description: 'Stunning locations and professional coordination for product launches, brand activations, and photography.',
      features: ['Brand alignment', 'Visual storytelling', 'Experience design', 'Media coordination']
    }
  ];

  return (
    <section id="services" className="py-24 elegant-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-playfair font-light text-foreground mb-6">
            Our <span className="text-accent italic">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From intimate celebrations to grand occasions, we curate exceptional experiences 
            that reflect your unique vision and exceed your expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group hover:elegant-shadow-lg transition-all duration-500 border-border/50 hover:border-accent/30 hover-scale animate-fade-in bg-background"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-10">
                <div className="flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-8 group-hover:bg-accent/20 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-accent" />
                </div>
                
                <h3 className="text-2xl font-playfair font-light text-foreground mb-6">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-4"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
