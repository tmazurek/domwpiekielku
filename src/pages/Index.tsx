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
  Mountain,
  Flame,
  DoorOpen,
  Layers,
  TreePine
} from "lucide-react";

import heroImage from "@/assets/hero-house.jpg";


// Load all images from the "Dom Piekiełko" folder to expand the gallery
const domPiekielkoImages = Object.values(
  import.meta.glob("@/assets/Dom Piekiełko/*.{jpg,JPG,jpeg,png,webp}", {
    eager: true,
    as: "url",
  })
).map((src) => ({
  src: src as string,
  alt: "Dom Piekiełko",
}));



const Index = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const propertyImages = [

    ...domPiekielkoImages,
  ];

  const features = [
    { icon: Mountain, title: "Baza wypadowa w góry", description: "Mogielica 20 min, Turbacz 30 min" },
    { icon: Layers, title: "Trzy kondygnacje", description: "Idealne dla dużej rodziny lub dwóch pokoleń" },
    { icon: Flame, title: "Nowy piec gazowy", description: "Ekonomiczne ogrzewanie gazowe" },
    { icon: TreePine, title: "Działka 15 arów", description: "Ogrodzona z drzewami owocowymi" },
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
                <span className="text-primary font-semibold">Na Sprzedaż</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Dom z potencjałem w sercu Beskidu Wyspowego
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-2 flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Piekiełko , k. Limanowej
              </p>
              <div className="text-2xl md:text-3xl font-bold text-accent mb-2">
                590 000 zł
              </div>
              <p className="text-lg text-white/90">
                Idealne dla dużej rodziny, dwóch pokoleń lub na agroturystykę
              </p>
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
                <div className="text-2xl font-bold text-foreground">6+</div>
                <div className="text-sm text-muted-foreground">Pokoi</div>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <Bath className="w-8 h-8 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold text-foreground">3</div>
                <div className="text-sm text-muted-foreground">Łazienki</div>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <Square className="w-8 h-8 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold text-foreground">15</div>
                <div className="text-sm text-muted-foreground">Arów działki</div>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <Home className="w-8 h-8 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold text-foreground">Lata 90</div>
                <div className="text-sm text-muted-foreground">Rok budowy</div>
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
              O nieruchomości
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-4">
                Marzysz o domu w otoczeniu gór, z dala od miejskiego zgiełku, a jednocześnie z doskonałym dojazdem 
                do Krakowa, Nowego Sącza i Limanowej? Ta nieruchomość to idealna propozycja dla dużej rodziny, 
                dwóch pokoleń lub osoby szukającej miejsca z potencjałem na agroturystykę. Poczuj spokój i ciesz 
                się pięknymi widokami każdego dnia!
              </p>
              <p className="mb-4">
                <strong>Wyjątkowa lokalizacja – baza wypadowa w góry:</strong> Idealne miejsce dla miłośników 
                aktywnego wypoczynku. W zasięgu krótkiej przejażdżki znajdują się najpiękniejsze pasma górskie 
                Małopolski – Mogielica (20 min), Turbacz (30 min), Jaworzyna (40 min). Jednocześnie świetna 
                komunikacja: Limanowa 5 min, Nowy Sącz 30 min, Kraków 60 min.
              </p>
              <p>
                <strong>Przestronny dom po remontach:</strong> Solidny dom z lat 90-tych z nowym piecem gazowym, 
                nowymi oknami 3-szybowymi na parterze, nowym tarasem wybrukowanym i nowymi stalowymi drzwiami 
                wejściowymi. Przemyślany układ pomieszczeń na trzech kondygnacjach plus strych (~50 m²) z 
                możliwością adaptacji.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Layout Details */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Układ pomieszczeń
            </h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <DoorOpen className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        Przyziemie (Poziom 0)
                      </h3>
                      <p className="text-muted-foreground">
                        Wyremontowana kuchnia i pokój, garaż oraz kotłownia z łazienką (do własnej aranżacji). 
                        Idealne na mieszkanie dla seniora, biuro lub wynajem.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Home className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        Piętro 1
                      </h3>
                      <p className="text-muted-foreground">
                        Dwa ustawne pokoje z balkonem, kuchnia i łazienka. Pomieszczenia odświeżone, 
                        gotowe do zamieszkania.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Layers className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        Piętro 2
                      </h3>
                      <p className="text-muted-foreground">
                        Trzy pokoje oraz nowa, w pełni wyremontowana łazienka.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mountain className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        Poddasze (Strych)
                      </h3>
                      <p className="text-muted-foreground">
                        Ok. 50 m² dodatkowej przestrzeni do adaptacji z ocieplonym dachem i stropem.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
            Galeria zdjęć
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
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Największe atuty
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

      {/* Technical Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Dane techniczne
            </h2>
            <Card>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Materiały i wykończenie:</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Pustak, ocieplony wełną mineralną</li>
                      <li>• Dach: blacha, ocieplony</li>
                      <li>• Nowy piec gazowy</li>
                      <li>• Nowe okna 3-szybowe (parter)</li>
                      <li>• Nowe drzwi stalowe (podwójne)</li>
                      <li>• Nowy wybrukowany taras</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Media i działka:</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Prąd (w tym siła)</li>
                      <li>• Gaz</li>
                      <li>• Wodociąg miejski</li>
                      <li>• Szambo</li>
                      <li>• Działka 15 arów</li>
                      <li>• Dojazd asfaltowy + 50m utwardzony</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary/80">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Zainteresowany tą nieruchomością?
            </h2>
            <p className="text-lg mb-8 text-primary-foreground/90">
              Skontaktuj się z nami, aby umówić się na oglądanie lub dowiedzieć się więcej.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                variant="cta"
                className="w-full sm:w-auto"
              >
                <Phone className="w-5 h-5" />
                Zadzwoń
              </Button>
              <Button 
                size="lg" 
                variant="secondary"
                className="w-full sm:w-auto"
              >
                <Mail className="w-5 h-5" />
                Wyślij e-mail
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-muted/30">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 Ogłoszenie nieruchomości. Wszelkie prawa zastrzeżone.</p>
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
