import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Events' },
    { id: 'weddings', name: 'Weddings' },
    { id: 'corporate', name: 'Corporate' },
    { id: 'celebrations', name: 'Celebrations' }
  ];

  const galleryItems = [
    {
      id: 1,
      category: 'weddings',
      title: 'Elegant Wedding Reception',
      description: 'Romantic ceremony with 150 guests',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop&crop=center'
    },
    {
      id: 2,
      category: 'corporate',
      title: 'Corporate Conference',
      description: 'Annual summit for 300 industry leaders',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop&crop=center'
    },
    {
      id: 3,
      category: 'celebrations',
      title: 'Anniversary Celebration',
      description: '50th wedding anniversary celebration',
      image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=400&fit=crop&crop=center'
    },
    {
      id: 4,
      category: 'corporate',
      title: 'Annual Gala Dinner',
      description: 'Charity fundraising event for 200 guests',
      image: 'https://images.unsplash.com/photo-1414016642754-59fa7a13c424?w=600&h=400&fit=crop&crop=center'
    },
    {
      id: 5,
      category: 'weddings',
      title: 'Traditional Wedding',
      description: 'Cultural wedding ceremony for 200 guests',
      image: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=600&h=400&fit=crop&crop=center'
    },
    {
      id: 6,
      category: 'corporate',
      title: 'Product Launch Event',
      description: 'International brand reveal ceremony',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop&crop=center'
    },
    {
      id: 7,
      category: 'celebrations',
      title: 'Milestone Birthday Party',
      description: '60th birthday celebration extravaganza',
      image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&h=400&fit=crop&crop=center'
    },
    {
      id: 8,
      category: 'weddings',
      title: 'Garden Wedding',
      description: 'Outdoor ceremony in elegant setting',
      image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=600&h=400&fit=crop&crop=center'
    },
    {
      id: 9,
      category: 'corporate',
      title: 'Executive Retreat',
      description: 'Leadership development workshop',
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=400&fit=crop&crop=center'
    },
    {
      id: 10,
      category: 'celebrations',
      title: 'Graduation Celebration',
      description: 'University graduation party for 120 guests',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop&crop=center'
    },
    {
      id: 11,
      category: 'weddings',
      title: 'Grand Wedding Reception',
      description: 'Luxury celebration with 300 guests',
      image: 'https://images.unsplash.com/photo-1527576539890-dfa815648363?w=600&h=400&fit=crop&crop=center'
    },
    {
      id: 12,
      category: 'celebrations',
      title: 'Cultural Festival',
      description: 'Traditional celebration with 400 attendees',
      image: 'https://images.unsplash.com/photo-1549451371-64aa98a6f632?w=600&h=400&fit=crop&crop=center'
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
            Discover our most memorable events, each crafted with precision and brought to life 
            with exceptional attention to detail.
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
                  className="w-full h-72 sm:h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-110"
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
