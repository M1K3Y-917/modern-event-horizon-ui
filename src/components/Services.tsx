
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Building2, Cake, Users, Music, Camera } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: 'Weddings',
      description: 'Create the wedding of your dreams with our elegant venues and comprehensive planning services.',
      features: ['Bridal suites', 'Garden ceremonies', 'Reception halls', 'Catering services']
    },
    {
      icon: Building2,
      title: 'Corporate Events',
      description: 'Professional venues equipped with modern technology for conferences, meetings, and corporate celebrations.',
      features: ['AV equipment', 'Business catering', 'Meeting rooms', 'Networking spaces']
    },
    {
      icon: Cake,
      title: 'Birthday Parties',
      description: 'Celebrate special birthdays with customized decorations and entertainment for all ages.',
      features: ['Custom themes', 'Entertainment', 'Party planning', 'Photography']
    },
    {
      icon: Users,
      title: 'Social Gatherings',
      description: 'Host memorable reunions, anniversaries, and social events in our versatile spaces.',
      features: ['Flexible layouts', 'Catering options', 'Event coordination', 'Decoration services']
    },
    {
      icon: Music,
      title: 'Concerts & Shows',
      description: 'State-of-the-art sound systems and staging for unforgettable musical performances.',
      features: ['Professional sound', 'Stage lighting', 'Seating arrangements', 'Technical support']
    },
    {
      icon: Camera,
      title: 'Photo Shoots',
      description: 'Stunning backdrops and professional lighting for fashion, portrait, and commercial photography.',
      features: ['Studio lighting', 'Backdrop options', 'Equipment rental', 'Location variety']
    }
  ];

  return (
    <section id="services" className="py-20 luxury-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From intimate gatherings to grand celebrations, we offer comprehensive event services tailored to your vision
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group hover:shadow-2xl transition-all duration-300 border-luxe-200 hover:border-gold-300 hover-scale animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-16 h-16 gold-gradient rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-playfair font-semibold text-foreground mb-4">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 gold-gradient rounded-full mr-3"></div>
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
