import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, Calendar, DollarSign } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GetStartedModal = ({ isOpen, onClose }: GetStartedModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    propertyType: "",
    location: "",
    message: ""
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Consultation Requested!",
      description: "We'll contact you within 24 hours to schedule your consultation.",
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-light text-luxury-navy mb-2">
            Schedule Your <span className="text-luxury-gold">Consultation</span>
          </DialogTitle>
          <p className="text-muted-foreground">
            Let our luxury property experts help you find your dream home
          </p>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Input
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="h-12"
              />
            </div>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="h-12 pl-10"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="h-12 pl-10"
              />
            </div>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Select onValueChange={(value) => setFormData({ ...formData, budget: value })}>
                <SelectTrigger className="h-12 pl-10">
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
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
          
          <Textarea
            placeholder="Tell us about your requirements..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows={3}
            className="resize-none"
          />
          
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="luxury"
              className="flex-1"
            >
              <Calendar className="h-4 w-4 mr-2" />
              Schedule Consultation
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default GetStartedModal;