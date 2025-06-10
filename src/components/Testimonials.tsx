
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah & Michael Johnson',
      event: 'Wedding Reception',
      rating: 5,
      text: 'Luxe Events made our dream wedding come true! Every detail was perfect, from the elegant venue to the exceptional service. Our guests are still talking about how magical the evening was.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
    },
    {
      id: 2,
      name: 'David Chen',
      event: 'Corporate Conference',
      rating: 5,
      text: 'The professionalism and attention to detail at Luxe Events is unmatched. Our annual conference was a huge success thanks to their seamless coordination and state-of-the-art facilities.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
    },
    {
      id: 3,
      name: 'Maria Rodriguez',
      event: 'Birthday Celebration',
      rating: 5,
      text: 'They transformed my daughter\'s quinceañera into a fairy tale! The team went above and beyond to ensure every moment was special. I couldn\'t have asked for a better experience.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b8d5?w=100&h=100&fit=crop&crop=face'
    },
    {
      id: 4,
      name: 'Robert & Linda Thompson',
      event: '50th Anniversary',
      rating: 5,
      text: 'Celebrating our golden anniversary at Luxe Events was absolutely perfect. The staff made us feel like royalty, and the venue was breathtaking. An unforgettable milestone celebration!',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
    }
  ];

  return (
    <section className="py-16 sm:py-20 luxury-gradient">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-foreground mb-3 sm:mb-4">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Don't just take our word for it - hear from our satisfied clients about their exceptional experiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className="group hover:shadow-2xl transition-all duration-300 border-luxe-200 hover:border-gold-300 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-6 sm:p-8 relative">
                <Quote className="absolute top-3 sm:top-4 right-3 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 text-gold-300 opacity-50" />
                
                {/* Rating stars */}
                <div className="flex items-center mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-gold-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed italic text-base sm:text-lg">
                  "{testimonial.text}"
                </p>

                {/* Client info */}
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover mr-3 sm:mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground text-sm sm:text-base">{testimonial.name}</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.event}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-3xl mx-auto px-4">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-gradient mb-1 sm:mb-2">500+</div>
              <p className="text-muted-foreground text-xs sm:text-sm">Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-gradient mb-1 sm:mb-2">4.9/5</div>
              <p className="text-muted-foreground text-xs sm:text-sm">Average Rating</p>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-gradient mb-1 sm:mb-2">100%</div>
              <p className="text-muted-foreground text-xs sm:text-sm">Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-gradient mb-1 sm:mb-2">24/7</div>
              <p className="text-muted-foreground text-xs sm:text-sm">Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
