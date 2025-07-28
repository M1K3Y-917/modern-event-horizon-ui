
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      title: 'Corporate Event Setup',
      description: 'Professional conference arrangement',
      image: '/images/FB_IMG_1749805723771.png'
    },
    {
      id: 2,
      title: 'Wedding Reception',
      description: 'Elegant wedding celebration setup',
      image: '/images/FB_IMG_1749805731930.png'
    },
    {
      id: 3,
      title: 'Grand Celebration',
      description: 'Luxury event arrangement',
      image: '/images/FB_IMG_1749805741475.png'
    },
    {
      id: 4,
      title: 'Birthday Party',
      description: 'Special birthday celebration',
      image: '/images/FB_IMG_1749805747648.png'
    },
    {
      id: 5,
      title: 'Anniversary Celebration',
      description: 'Memorable anniversary event',
      image: '/images/FB_IMG_1749805756593.png'
    },
    {
      id: 6,
      title: 'Corporate Gala',
      description: 'Professional networking event',
      image: '/images/FB_IMG_1749805773108.png'
    },
    {
      id: 7,
      title: 'Wedding Ceremony',
      description: 'Beautiful wedding setup',
      image: '/images/FB_IMG_1749805779314.png'
    }
  ];

  return (
    <section id="gallery" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-light text-foreground mb-4 sm:mb-6">
            Event <span className="text-accent italic">Portfolio</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4">
            Discover our most memorable events, each crafted with precision and brought to life 
            with exceptional attention to detail.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {galleryItems.map((item, index) => (
            <Card 
              key={item.id} 
              className="group overflow-hidden border-0 elegant-shadow hover:elegant-shadow-lg transition-all duration-500 hover-scale animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-72 sm:h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    console.log('Image failed to load:', item.image);
                    e.currentTarget.src = '/placeholder.svg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-white font-playfair font-light text-xl sm:text-2xl mb-2">
                      {item.title}
                    </h3>
                    <p className="text-white/80 text-sm sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <Button size="lg" className="bg-foreground text-background hover:bg-accent hover:text-foreground px-8 sm:px-12 py-4 sm:py-6 font-medium tracking-wide text-sm sm:text-base">
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
