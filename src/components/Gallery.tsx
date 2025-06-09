
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Events' },
    { id: 'weddings', name: 'Weddings' },
    { id: 'corporate', name: 'Corporate' },
    { id: 'parties', name: 'Parties' },
    { id: 'venues', name: 'Venues' }
  ];

  const galleryItems = [
    {
      id: 1,
      category: 'weddings',
      title: 'Elegant Wedding Ceremony',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop&crop=center'
    },
    {
      id: 2,
      category: 'corporate',
      title: 'Corporate Conference',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop&crop=center'
    },
    {
      id: 3,
      category: 'parties',
      title: 'Birthday Celebration',
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
      title: 'Garden Wedding',
      image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=600&h=400&fit=crop&crop=center'
    },
    {
      id: 6,
      category: 'corporate',
      title: 'Business Dinner',
      image: 'https://images.unsplash.com/photo-1414016642754-59fa7a13c424?w=600&h=400&fit=crop&crop=center'
    },
    {
      id: 7,
      category: 'parties',
      title: 'Milestone Anniversary',
      image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&h=400&fit=crop&crop=center'
    },
    {
      id: 8,
      category: 'venues',
      title: 'Outdoor Pavilion',
      image: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=600&h=400&fit=crop&crop=center'
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            Event <span className="text-gradient">Gallery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Take a look at some of our recent events and beautiful venues
          </p>
          
          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={`${
                  activeCategory === category.id 
                    ? 'gold-gradient text-white' 
                    : 'border-gold-300 text-gold-600 hover:bg-gold-50'
                }`}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <Card 
              key={item.id} 
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover-scale animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-playfair font-semibold text-lg">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="gold-gradient text-white hover:opacity-90">
            View Full Gallery
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
