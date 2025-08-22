
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            Get In <span className="text-accent italic">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to plan your perfect event? Contact us today for a personalized consultation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact form */}
          <Card className="border-border/50 elegant-shadow animate-fade-in">
            <CardContent className="p-8">
              <h3 className="text-2xl font-playfair font-semibold text-foreground mb-6">
                Send us a Message
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <Input 
                      placeholder="John" 
                      className="border-border focus:border-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <Input 
                      placeholder="Doe" 
                      className="border-border focus:border-accent"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="border-border focus:border-accent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone
                  </label>
                   <Input 
                     placeholder="0805 378 1165" 
                     className="border-border focus:border-accent"
                   />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Event Type
                  </label>
                  <select className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent">
                    <option>Select an event type</option>
                    <option>Wedding</option>
                    <option>Corporate Event</option>
                    <option>Birthday Party</option>
                    <option>Anniversary</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell us about your event..." 
                    rows={4}
                    className="border-border focus:border-accent"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full py-6 text-lg font-semibold"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact information */}
          <div className="space-y-8 animate-fade-in delay-300">
            <Card className="border-border/50 elegant-shadow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-playfair font-semibold text-foreground mb-6">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-accent/20 text-accent rounded-full flex-shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Address</h4>
                    <a
                        href="https://www.google.com/maps/place/Godwin+Palladium,+Genesis+Estate+Main+Gate+,+Olaide,+Ijaiye+Bus-Stop,+Aboru+St,+Oke+Odo,+Lagos+102213,+Lagos/@6.628387,3.2869573,16z"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-accent transition-colors duration-300"
                      >
                         Genesis Estate Main Gate, Olaide,<br />
                         Ijaiye Bus-Stop, Aboru St, Oke Odo,<br />
                         Lagos 102213, Lagos
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-accent/20 text-accent rounded-full flex-shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                      <div className="text-muted-foreground">
                        <a href="tel:08053781165" className="hover:text-accent transition-colors duration-300 block">
                          0805 378 1165
                        </a>
                        <a href="tel:07062897093" className="hover:text-accent transition-colors duration-300 block">
                          0706 289 7093
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-accent/20 text-accent rounded-full flex-shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Email</h4>
                      <a
                        href="mailto:info@godwinpalladium.com"
                        className="text-muted-foreground hover:text-accent transition-colors duration-300"
                      >
                        info@godwinpalladium.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-accent/20 text-accent rounded-full flex-shrink-0">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Business Hours</h4>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 8:00 PM<br />
                        Saturday: 10:00 AM - 6:00 PM<br />
                        Sunday: 12:00 PM - 5:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Embedded Google Map */}
            <Card className="border-border/50 elegant-shadow">
              <CardContent className="p-0">
                <div className="h-64 rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.600542407226!2d3.284637375169449!3d6.628387093420782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b914ce39368d3:0xfc2d38240526dd32!2sGodwin%20Palladium%2C%20Genesis%20Estate%20Main%20Gate%20%2C%20Olaide%2C%20Ijaiye%20Bus-Stop%2C%20Aboru%20St%2C%20Oke%20Odo%2C%20Lagos%20102213%2C%20Lagos!5e0!3m2!1sen!2sng!4v1734185489"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="The Godwin Palladium Location"
                    />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
