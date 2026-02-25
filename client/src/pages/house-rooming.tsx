import { Card, CardContent } from "@/components/ui/card";
import houseImage from "@/assets/images/house-scottsdale.png";
import { BedDouble, Waves, ThermometerSun, ShieldAlert, Check } from "lucide-react";

export default function HouseRooming() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-6xl">
      <div className="mb-16 text-center max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-8">House & Rooming</h1>
        <p className="text-2xl text-muted-foreground leading-relaxed">
          Our Ryder Cup HQ. A massive 12-bedroom house that gives us better flexibility than a typical golf trip rental, supporting couples and private-room planning where possible.
        </p>
      </div>

      <div className="rounded-[2.5rem] overflow-hidden mb-20 shadow-2xl relative border-[6px] border-white">
        <img src={houseImage} alt="Luxury 12 Bedroom House" className="w-full h-[65vh] object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-10 md:p-16">
          <div className="inline-block px-4 py-2 bg-secondary text-secondary-foreground font-bold uppercase tracking-widest rounded-full text-sm mb-4">
            Primary Option A
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 drop-shadow-lg">Scottsdale, AZ HQ</h2>
          <p className="text-white/90 text-xl font-medium flex items-center gap-3">
            <span>$11,561 Quoted Baseline</span>
            <span className="w-2 h-2 rounded-full bg-secondary"></span>
            <span>24 Guest Model</span>
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
                  <h4 className="font-bold text-xl mb-1 text-primary">12 Bedrooms</h4>
                  <p className="text-muted-foreground font-medium uppercase tracking-wider text-xs">Maximum flexibility</p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-8 flex items-center gap-6">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Waves className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1 text-primary">Pool & Patio</h4>
                  <p className="text-muted-foreground font-medium uppercase tracking-wider text-xs">Post-round recovery</p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-8 flex items-center gap-6">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <ThermometerSun className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1 text-primary">Outdoor Grill</h4>
                  <p className="text-muted-foreground font-medium uppercase tracking-wider text-xs">Team dinners</p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-8 flex items-center gap-6">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Check className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1 text-primary">Common Space</h4>
                  <p className="text-muted-foreground font-medium uppercase tracking-wider text-xs">War room & hangouts</p>
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