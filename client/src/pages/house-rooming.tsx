import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import houseImage1 from "@assets/image_1772127839974.png";
import houseImage2 from "@assets/image_1773444293109.png";
import houseImage3 from "@assets/image_1773444423038.png";
import houseImage4 from "@assets/image_1773444429502.png";
import houseImage5 from "@assets/image_1773444439722.png";
import houseImage6 from "@assets/image_1773444448880.png";
import houseImage7 from "@assets/image_1773444467138.png";
import houseImage8 from "@assets/image_1773444477203.png";
import houseImage9 from "@assets/image_1773444489286.png";
import houseImage10 from "@assets/image_1773444497574.png";
import houseImage11 from "@assets/image_1773444506695.png";
import houseImage12 from "@assets/image_1773444518322.png";
import houseImage13 from "@assets/image_1773444538733.png";
import houseImage14 from "@assets/image_1773444548507.png";
import houseImage15 from "@assets/image_1773444558382.png";
import houseImage16 from "@assets/image_1773444577807.png";
import houseImage17 from "@assets/image_1773444594241.png";
import houseImage18 from "@assets/image_1773444605631.png";
import houseImage19 from "@assets/image_1773444626158.png";
import houseImage20 from "@assets/image_1773444645489.png";
import { BedDouble, Waves, ThermometerSun, ShieldAlert, Check } from "lucide-react";

const IMAGES = [
  houseImage1, houseImage2, houseImage3, houseImage4, houseImage5, 
  houseImage6, houseImage7, houseImage8, houseImage9, houseImage10,
  houseImage11, houseImage12, houseImage13, houseImage14, houseImage15,
  houseImage16, houseImage17, houseImage18, houseImage19, houseImage20
];

export default function HouseRooming() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Preload images
    IMAGES.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % IMAGES.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto px-4 py-20 max-w-6xl">
      <div className="mb-16 text-center max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-8">House & Rooming</h1>
        <p className="text-2xl text-muted-foreground leading-relaxed">
          Our Ryder Cup HQ. An 8-bedroom, 9-bath luxury rental designed for comfort, privacy, and a true golf-trip basecamp feel. Each guest suite has an ensuite bathroom, with one additional full bath in the home. Room assignments will be finalized after deposits are collected and headcount is locked.
        </p>
      </div>

      <div className="rounded-[2.5rem] overflow-hidden mb-20 shadow-2xl relative border-[6px] border-white h-[65vh]">
        {IMAGES.map((src, index) => (
          <img
            key={src}
            src={src}
            alt={`Luxury 12 Bedroom House - View ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent z-20"></div>
        <div className="absolute bottom-0 left-0 right-0 p-10 md:p-16 z-30">
          <div className="inline-block px-4 py-2 bg-secondary text-secondary-foreground font-bold uppercase tracking-widest rounded-full text-sm mb-4">
            Confirmed HQ • 2026
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 drop-shadow-lg">Scottsdale / Cave Creek HQ</h2>
          <p className="text-white/90 text-xl font-medium flex items-center gap-3">
            <span>$5,349.18 total (4 nights, all-in)</span>
            <span className="w-2 h-2 rounded-full bg-secondary"></span>
            <span>17 Guest Model</span>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2">
          <h3 className="font-serif text-4xl font-bold mb-8 text-primary flex items-center gap-4">
            Rooming Philosophy
          </h3>
          <div className="bg-white rounded-3xl p-10 md:p-12 shadow-xl border-t-4 border-t-secondary mb-12">
            <p className="text-xl leading-relaxed text-foreground/80 mb-10">
              Comfort and fairness are the top priorities. With 12 bedrooms, we have a major advantage over standard rentals. 
              We aim to accommodate significant others with private rooms while ensuring every golfer has a comfortable stay.
            </p>
            <div className="flex items-center gap-5 p-6 bg-secondary/10 rounded-2xl border border-secondary/20">
              <ShieldAlert className="w-8 h-8 text-secondary shrink-0" />
              <span className="font-bold text-primary text-lg">Final room assignments will be made after deposits and headcount are locked.</span>
            </div>
          </div>

          <h3 className="font-serif text-3xl font-bold mb-8 text-primary">Amenities Breakdown</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-8 flex items-center gap-6">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <BedDouble className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1 text-primary">12 Bedrooms / 8 Bathrooms</h4>
                  <p className="text-muted-foreground font-medium uppercase tracking-wider text-xs">Space + comfort for large groups</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-8 flex items-center gap-6">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Waves className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1 text-primary">Resort Pool + Spa</h4>
                  <p className="text-muted-foreground font-medium uppercase tracking-wider text-xs">All-day recovery and hangouts</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-8 flex items-center gap-6">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Check className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1 text-primary">Outdoor Cabana + TV</h4>
                  <p className="text-muted-foreground font-medium uppercase tracking-wider text-xs">Shade, lounging, and watch parties</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-8 flex items-center gap-6">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Check className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1 text-primary">Pickleball + Basketball Courts</h4>
                  <p className="text-muted-foreground font-medium uppercase tracking-wider text-xs">On-site games all weekend</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-8 flex items-center gap-6">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Check className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1 text-primary">Sand Volleyball + Huge Yard</h4>
                  <p className="text-muted-foreground font-medium uppercase tracking-wider text-xs">Space for the whole group</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-8 flex items-center gap-6">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Check className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1 text-primary">Game Room (Billiards + Poker)</h4>
                  <p className="text-muted-foreground font-medium uppercase tracking-wider text-xs">War room vibes after the round</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-8 flex items-center gap-6">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Check className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1 text-primary">Mini Golf + Lawn Games</h4>
                  <p className="text-muted-foreground font-medium uppercase tracking-wider text-xs">Bocce, cornhole, horseshoes</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-8 flex items-center gap-6">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Check className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1 text-primary">19 TVs (Indoor + Outdoor)</h4>
                  <p className="text-muted-foreground font-medium uppercase tracking-wider text-xs">Viewing everywhere on the property</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-primary text-primary-foreground rounded-3xl p-10 sticky top-32 shadow-2xl">
            <h3 className="font-serif text-3xl font-bold mb-8">Status Board</h3>
            <ul className="space-y-8">
              <li className="flex flex-col border-b border-primary-foreground/10 pb-6">
                <span className="text-sm text-primary-foreground/60 mb-2 font-bold uppercase tracking-widest">House Selection</span>
                <span className="font-bold text-2xl text-secondary">Tentative (Option A)</span>
              </li>
              <li className="flex flex-col border-b border-primary-foreground/10 pb-6">
                <span className="text-sm text-primary-foreground/60 mb-2 font-bold uppercase tracking-widest">Pricing Model</span>
                <span className="font-bold text-2xl text-white">24 Guests ($11,561)</span>
              </li>
              <li className="flex flex-col border-b border-primary-foreground/10 pb-6">
                <span className="text-sm text-primary-foreground/60 mb-2 font-bold uppercase tracking-widest">Room Assignments</span>
                <span className="font-bold text-2xl text-white opacity-80">Pending Headcount</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}