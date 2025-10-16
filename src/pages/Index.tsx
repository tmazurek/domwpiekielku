import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Home, 
  Bath, 
  Bed, 
  Square, 
  MapPin, 
  Phone, 
  Mail,
  Car,
  Trees,
  Sofa,
  Sparkles
} from "lucide-react";

import heroImage from "@/assets/hero-house.jpg";
import livingRoomImage from "@/assets/living-room.jpg";
import kitchenImage from "@/assets/kitchen.jpg";
import bedroomImage from "@/assets/bedroom.jpg";
import bathroomImage from "@/assets/bathroom.jpg";
import backyardImage from "@/assets/backyard.jpg";

const Index = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const propertyImages = [
    { src: livingRoomImage, alt: "Spacious Living Room" },
    { src: kitchenImage, alt: "Modern Kitchen" },
    { src: bedroomImage, alt: "Master Bedroom" },
    { src: bathroomImage, alt: "Luxury Bathroom" },
    { src: backyardImage, alt: "Beautiful Backyard" },
  ];

  const features = [
    { icon: Sparkles, title: "Newly Renovated", description: "Completely updated with modern finishes" },
    { icon: Sofa, title: "Open Floor Plan", description: "Spacious and bright living areas" },
    { icon: Trees, title: "Landscaped Yard", description: "Professionally maintained outdoor space" },
    { icon: Car, title: "2-Car Garage", description: "Attached garage with storage" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        </div>
        
        <div className="relative h-full flex items-end">
          <div className="container mx-auto px-4 pb-12 md:pb-16">
            <div className="max-w-3xl text-white">
              <div className="inline-block px-4 py-2 bg-accent rounded-full mb-4">
                <span className="text-primary font-semibold">For Sale</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Stunning Modern Home
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-2 flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                123 Maple Street, Beautiful Suburb, ST 12345
              </p>
              <div className="text-3xl md:text-5xl font-bold text-accent mb-6">
                $850,000
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Details */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Bed className="w-8 h-8 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold text-foreground">4</div>
                <div className="text-sm text-muted-foreground">Bedrooms</div>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <Bath className="w-8 h-8 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold text-foreground">3</div>
                <div className="text-sm text-muted-foreground">Bathrooms</div>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <Square className="w-8 h-8 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold text-foreground">2,850</div>
                <div className="text-sm text-muted-foreground">Sq Ft</div>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <Home className="w-8 h-8 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold text-foreground">2018</div>
                <div className="text-sm text-muted-foreground">Built</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              About This Property
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-4">
                Welcome to this stunning modern home that perfectly blends luxury and comfort. 
                This meticulously maintained property features an open floor plan, high-end finishes, 
                and an abundance of natural light throughout.
              </p>
              <p className="mb-4">
                The gourmet kitchen boasts custom cabinetry, premium appliances, and a large island 
                perfect for entertaining. The spacious master suite includes a luxurious en-suite 
                bathroom and generous walk-in closet.
              </p>
              <p>
                Step outside to your private backyard oasis, complete with a covered patio and 
                beautifully landscaped grounds. This home is located in a desirable neighborhood 
                with excellent schools and convenient access to shopping and dining.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
            Photo Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {propertyImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer group"
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary/80">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Interested in This Property?
            </h2>
            <p className="text-lg mb-8 text-primary-foreground/90">
              Contact us today to schedule a viewing or learn more about this exceptional home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                variant="cta"
                className="w-full sm:w-auto"
              >
                <Phone className="w-5 h-5" />
                Call (555) 123-4567
              </Button>
              <Button 
                size="lg" 
                variant="secondary"
                className="w-full sm:w-auto"
              >
                <Mail className="w-5 h-5" />
                Send Email
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-muted/30">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 Property Listing. All rights reserved.</p>
        </div>
      </footer>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Property"
            className="max-w-full max-h-full object-contain"
          />
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-accent transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
};

export default Index;
