
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
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to plan your perfect event? Contact us today for a personalized consultation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact form */}
          <Card className="border-luxe-200 shadow-lg animate-fade-in">
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
                      className="border-luxe-300 focus:border-gold-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <Input 
                      placeholder="Doe" 
                      className="border-luxe-300 focus:border-gold-400"
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
                    className="border-luxe-300 focus:border-gold-400"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone
                  </label>
                  <Input 
                    placeholder="0817 155 5777" 
                    className="border-luxe-300 focus:border-gold-400"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Event Type
                  </label>
                  <select className="w-full px-3 py-2 border border-luxe-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-gold-400">
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
                    className="border-luxe-300 focus:border-gold-400"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full gold-gradient text-white hover:opacity-90 py-6 text-lg font-semibold"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact information */}
          <div className="space-y-8 animate-fade-in delay-300">
            <Card className="border-luxe-200 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-playfair font-semibold text-foreground mb-6">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 gold-gradient rounded-full flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Address</h4>
                      <a
                        href="https://www.google.com/maps/place/Iceland+Civic+Centre/@6.6028139,3.1481564,12z/data=!4m10!1m2!2m1!1siceland+civic+center!3m6!1s0x103b91a62db163b7:0x46887f7328dff9c9!8m2!3d6.6028139!4d3.292352!15sChRpY2VsYW5kIGNpdmljIGNlbnRlcloWIhRpY2VsYW5kIGNpdmljIGNlbnRlcpIBC2V2ZW50X3ZlbnVlqgE9EAEyHxABIhtFDI5hfzSRhK-6OSIROabia0KET6Fm3NyEFRoyGBACIhRpY2VsYW5kIGNpdmljIGNlbnRlcuABAA!16s%2Fg%2F11h9mlr86n?entry=ttu&g_ep=EgoyMDI1MDYwOS4xIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-accent transition-colors duration-300"
                      >
                        Iceland Civic Centre<br />
                        Lagos, Nigeria
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 gold-gradient rounded-full flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                      <a
                        href="tel:08171555777"
                        className="text-muted-foreground hover:text-accent transition-colors duration-300"
                      >
                        0817 155 5777
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 gold-gradient rounded-full flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Email</h4>
                      <a
                        href="mailto:info@icelandciviccentre.com"
                        className="text-muted-foreground hover:text-accent transition-colors duration-300"
                      >
                        info@icelandciviccentre.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 gold-gradient rounded-full flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
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

            {/* Map placeholder */}
            <Card className="border-luxe-200 shadow-lg">
              <CardContent className="p-0">
                <a
                  href="https://www.google.com/maps/place/Iceland+Civic+Centre/@6.6028139,3.1481564,12z/data=!4m10!1m2!2m1!1siceland+civic+center!3m6!1s0x103b91a62db163b7:0x46887f7328dff9c9!8m2!3d6.6028139!4d3.292352!15sChRpY2VsYW5kIGNpdmljIGNlbnRlcloWIhRpY2VsYW5kIGNpdmljIGNlbnRlcpIBC2V2ZW50X3ZlbnVlqgE9EAEyHxABIhtFDI5hfzSRhK-6OSIROabia0KET6Fm3NyEFRoyGBACIhRpY2VsYW5kIGNpdmljIGNlbnRlcuABAA!16s%2Fg%2F11h9mlr86n?entry=ttu&g_ep=EgoyMDI1MDYwOS4xIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="h-64 bg-gradient-to-br from-luxe-100 to-gold-100 rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity duration-300">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-gold-600 mx-auto mb-4" />
                      <p className="text-muted-foreground">View on Google Maps</p>
                      <p className="text-sm text-muted-foreground">Click to get directions</p>
                    </div>
                  </div>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
