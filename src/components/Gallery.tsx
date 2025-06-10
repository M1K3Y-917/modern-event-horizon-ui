
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'weddings', name: 'Weddings' },
    { id: 'corporate', name: 'Corporate' },
    { id: 'celebrations', name: 'Celebrations' },
    { id: 'venues', name: 'Venues' }
  ];

  const galleryItems = [
    {
      id: 1,
      category: 'weddings',
      title: 'Elegant Garden Wedding',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop&crop=center'
    },
    {
      id: 2,
      category: 'corporate',
      title: 'Executive Conference',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop&crop=center'
    },
    {
      id: 3,
      category: 'celebrations',
      title: 'Milestone Anniversary',
      image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=400&fit=crop&crop=center'
    },
    {
      id: 4,
      category: 'venues',
      title: 'Grand Ballroom',
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=400&fit=crop&crop=center'
    },
    {
      id: 5,
      category: 'weddings',
      title: 'Romantic Ceremony',
      image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=600&h=400&fit=crop&crop=center'
    },
    {
      id: 6,
      category: 'corporate',
      title: 'Gala Dinner',
      image: 'https://images.unsplash.com/photo-1414016642754-59fa7a13c424?w=600&h=400&fit=crop&crop=center'
    },
    {
      id: 7,
      category: 'celebrations',
      title: 'Birthday Celebration',
      image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&h=400&fit=crop&crop=center'
    },
    {
      id: 8,
      category: 'venues',
      title: 'Outdoor Pavilion',
      image: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=600&h=400&fit=crop&crop=center'
    },
    {
      id: 9,
      category: 'weddings',
      title: 'Beach Wedding',
      image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=600&h=400&fit=crop&crop=center'
    },
    {
      id: 10,
      category: 'corporate',
      title: 'Product Launch',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop&crop=center'
    },
    {
      id: 11,
      category: 'celebrations',
      title: 'Graduation Party',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop&crop=center'
    },
    {
      id: 12,
      category: 'venues',
      title: 'Historic Manor',
      image: 'https://images.unsplash.com/photo-1527576539890-dfa815648363?w=600&h=400&fit=crop&crop=center'
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-light text-foreground mb-4 sm:mb-6">
            Event <span className="text-accent italic">Portfolio</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4">
            A curated collection of our most memorable events, showcasing the artistry 
            and attention to detail that defines our approach.
          </p>
          
          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 mb-12 sm:mb-16 px-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={`${
                  activeCategory === category.id 
                    ? 'bg-foreground text-background hover:bg-accent' 
                    : 'border-border text-foreground hover:bg-foreground hover:text-background'
                } font-medium tracking-wide px-4 sm:px-6 lg:px-8 py-2 sm:py-3 text-xs sm:text-sm`}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredItems.map((item, index) => (
            <Card 
              key={item.id} 
              className="group overflow-hidden border-0 elegant-shadow hover:elegant-shadow-lg transition-all duration-500 hover-scale animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 sm:h-72 lg:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                    <h3 className="text-white font-playfair font-light text-lg sm:text-xl">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <Button size="lg" className="bg-foreground text-background hover:bg-accent hover:text-foreground px-8 sm:px-12 py-4 sm:py-6 font-medium tracking-wide text-sm sm:text-base">
            View Complete Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
