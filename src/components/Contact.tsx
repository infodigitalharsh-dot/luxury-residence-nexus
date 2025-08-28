import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+971 4 123 4567"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@luxuryresidence.com", "sales@luxuryresidence.com"]
    },
    {
      icon: MapPin,
      title: "Offices",
      details: ["Dubai Marina, UAE", "Manhattan, New York"]
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Fri: 9AM-7PM", "Sat-Sun: 10AM-5PM"]
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-light text-luxury-navy mb-6">
            Get in <span className="text-luxury-gold font-normal">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to find your dream property? Our expert team is here to guide you 
            through every step of your luxury real estate journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="bg-gradient-luxury border-0 shadow-luxury">
            <CardContent className="p-8">
              <h3 className="text-2xl font-medium text-luxury-navy mb-6">
                Schedule Your Consultation
              </h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input 
                    placeholder="First Name" 
                    className="bg-white/70 border-white/30 focus:bg-white transition-colors duration-300"
                  />
                  <Input 
                    placeholder="Last Name" 
                    className="bg-white/70 border-white/30 focus:bg-white transition-colors duration-300"
                  />
                </div>
                
                <Input 
                  type="email" 
                  placeholder="Email Address" 
                  className="bg-white/70 border-white/30 focus:bg-white transition-colors duration-300"
                />
                
                <Input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="bg-white/70 border-white/30 focus:bg-white transition-colors duration-300"
                />
                
                <Input 
                  placeholder="Budget Range" 
                  className="bg-white/70 border-white/30 focus:bg-white transition-colors duration-300"
                />
                
                <Textarea 
                  placeholder="Tell us about your property requirements..."
                  className="bg-white/70 border-white/30 focus:bg-white transition-colors duration-300 min-h-32"
                />
                
                <Button variant="luxury" size="lg" className="w-full">
                  Schedule Consultation
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <div 
                key={info.title}
                className="flex items-start space-x-4 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center">
                  <info.icon className="h-6 w-6 text-luxury-gold-foreground" />
                </div>
                <div>
                  <h4 className="text-xl font-medium text-luxury-navy mb-2">
                    {info.title}
                  </h4>
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
            
            {/* Call to Action */}
            <div className="bg-luxury-navy rounded-2xl p-8 text-white animate-fade-in">
              <h4 className="text-2xl font-medium mb-4">
                Exclusive Property Alert
              </h4>
              <p className="text-white/80 mb-6 leading-relaxed">
                Be the first to know about new luxury listings and exclusive 
                off-market opportunities.
              </p>
              <Button variant="hero" size="lg" className="w-full">
                Subscribe to Alerts
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;