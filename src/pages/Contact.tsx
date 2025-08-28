import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  MessageCircle,
  Calendar,
  Globe
} from "lucide-react";
import GetStartedModal from "@/components/GetStartedModal";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [isGetStartedOpen, setIsGetStartedOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    propertyType: "",
    budget: "",
    message: ""
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      location: "",
      propertyType: "",
      budget: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+971 4 123 4567"],
      description: "Available 24/7 for urgent inquiries"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@luxuryresidence.com", "sales@luxuryresidence.com"],
      description: "Response within 2 hours"
    },
    {
      icon: MapPin,
      title: "Locations",
      details: ["Dubai Marina, UAE", "Miami Beach, FL"],
      description: "Visit our luxury offices"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon-Fri: 9:00 AM - 8:00 PM", "Sat-Sun: 10:00 AM - 6:00 PM"],
      description: "GMT+4 (Dubai) / EST (Miami)"
    }
  ];

  const quickActions = [
    {
      icon: Calendar,
      title: "Schedule Consultation",
      description: "Book a 1-on-1 consultation with our experts",
      action: "Schedule Now"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with our agents in real-time",
      action: "Start Chat"
    },
    {
      icon: Globe,
      title: "Virtual Tour",
      description: "Take a virtual tour of our featured properties",
      action: "Start Tour"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation onGetStarted={() => setIsGetStartedOpen(true)} />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-luxury-navy to-luxury-navy-light text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-light mb-6">
              Get In <span className="text-luxury-gold">Touch</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Ready to find your dream luxury property? Our expert team is here to guide you every step of the way
            </p>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickActions.map((action, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-elegant hover:shadow-luxury transition-all duration-300 cursor-pointer group"
                onClick={() => setIsGetStartedOpen(true)}
              >
                <CardContent className="p-6 text-center">
                  <action.icon className="h-12 w-12 text-luxury-gold mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-luxury-navy mb-2 group-hover:text-luxury-gold transition-colors">
                    {action.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{action.description}</p>
                  <Button variant="outline" size="sm" className="group-hover:bg-luxury-gold group-hover:text-luxury-gold-foreground transition-all">
                    {action.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-light text-luxury-navy mb-6">
                Send Us A <span className="text-luxury-gold">Message</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you with personalized recommendations
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-12"
                  />
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="h-12"
                  />
                  <Select onValueChange={(value) => setFormData({ ...formData, location: value })}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Preferred Location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dubai">Dubai, UAE</SelectItem>
                      <SelectItem value="miami">Miami, FL</SelectItem>
                      <SelectItem value="nyc">New York, NY</SelectItem>
                      <SelectItem value="la">Los Angeles, CA</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Select onValueChange={(value) => setFormData({ ...formData, propertyType: value })}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Property Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="penthouse">Penthouse</SelectItem>
                      <SelectItem value="villa">Villa</SelectItem>
                      <SelectItem value="apartment">Luxury Apartment</SelectItem>
                      <SelectItem value="mansion">Mansion</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select onValueChange={(value) => setFormData({ ...formData, budget: value })}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Budget Range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-2m">$1M - $2M</SelectItem>
                      <SelectItem value="2-5m">$2M - $5M</SelectItem>
                      <SelectItem value="5-10m">$5M - $10M</SelectItem>
                      <SelectItem value="10m+">$10M+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Textarea
                  placeholder="Tell us about your requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="resize-none"
                />
                
                <Button type="submit" variant="luxury" size="lg" className="w-full">
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div>
              <h2 className="text-4xl font-light text-luxury-navy mb-6">
                Contact <span className="text-luxury-gold">Information</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Connect with our luxury real estate experts through multiple channels
              </p>
              
              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-0 shadow-elegant p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-luxury-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-6 w-6 text-luxury-gold" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-luxury-navy mb-2">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-muted-foreground mb-1">{detail}</p>
                        ))}
                        <p className="text-sm text-muted-foreground/80 mt-2">{info.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
              
              {/* Map Placeholder */}
              <Card className="border-0 shadow-elegant overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-luxury-navy/10 to-luxury-gold/10 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-luxury-gold mx-auto mb-4" />
                    <p className="text-luxury-navy font-medium">Interactive Map</p>
                    <p className="text-muted-foreground text-sm">Find our offices worldwide</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-luxury-navy mb-6">
              Frequently Asked <span className="text-luxury-gold">Questions</span>
            </h2>
          </div>
          
          <div className="space-y-6">
            {[
              {
                q: "How long does the property search process typically take?",
                a: "The timeline varies based on your specific requirements, but typically ranges from 2-8 weeks for our curated selection process."
              },
              {
                q: "Do you provide financing assistance?",
                a: "Yes, we work with premium financial institutions to provide tailored financing solutions for luxury properties."
              },
              {
                q: "What markets do you specialize in?",
                a: "We specialize in luxury markets in Dubai, Miami, New York, Los Angeles, and other prestigious global locations."
              },
              {
                q: "Is there a fee for your consultation services?",
                a: "Initial consultations are complimentary. We're compensated by the property developers and sellers upon successful transactions."
              }
            ].map((faq, index) => (
              <Card key={index} className="border-0 shadow-elegant">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-luxury-navy mb-3">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      
      <GetStartedModal 
        isOpen={isGetStartedOpen} 
        onClose={() => setIsGetStartedOpen(false)} 
      />
    </div>
  );
};

export default Contact;