import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Users, ShieldCheck, Clock, CheckCircle2 } from "lucide-react";

export default function TripOverview() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-5xl">
      <div className="mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary-foreground text-sm font-bold tracking-widest uppercase mb-6">
          <ShieldCheck className="w-4 h-4" />
          The Plan
        </div>
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-8">Trip Overview</h1>
        <p className="text-2xl text-muted-foreground leading-relaxed max-w-3xl">
          Welcome to the official planning summary for the inaugural Ramstein Ryder Cup. 
          This is the foundation for an event that blends competitive golf with an unforgettable desert retreat.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <Card className="border-none shadow-xl bg-white hover:shadow-2xl transition-shadow">
          <CardContent className="p-8 flex items-start gap-6">
            <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center shrink-0">
              <Calendar className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-2xl mb-2 text-primary">Dates</h3>
              <p className="text-muted-foreground text-lg mb-2">Sept 16–20, 2026 (Tentative)</p>
              <p className="text-sm text-secondary font-bold uppercase tracking-wider">4 Nights / 5 Days</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-xl bg-white hover:shadow-2xl transition-shadow">
          <CardContent className="p-8 flex items-start gap-6">
            <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center shrink-0">
              <MapPin className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-2xl mb-2 text-primary">Location</h3>
              <p className="text-muted-foreground text-lg mb-2">Scottsdale, Arizona</p>
              <p className="text-sm text-secondary font-bold uppercase tracking-wider">Ryder Cup HQ Mansion</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-xl bg-white hover:shadow-2xl transition-shadow">
          <CardContent className="p-8 flex items-start gap-6">
            <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center shrink-0">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-2xl mb-2 text-primary">Event Format</h3>
              <p className="text-muted-foreground text-lg mb-2">12 Golfers (Core Group)</p>
              <p className="text-sm text-secondary font-bold uppercase tracking-wider">+ Optional Significant Others</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-xl bg-white hover:shadow-2xl transition-shadow">
          <CardContent className="p-8 flex items-start gap-6">
            <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center shrink-0">
              <Clock className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-2xl mb-2 text-primary">Planning Status</h3>
              <p className="text-muted-foreground text-lg mb-2">Inviting Core Group</p>
              <p className="text-sm text-secondary font-bold uppercase tracking-wider">Locking headcount TBD</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="bg-primary text-primary-foreground rounded-3xl p-10 md:p-16 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <ShieldCheck className="w-64 h-64" />
        </div>
        <div className="relative z-10">
          <h2 className="font-serif text-4xl font-bold mb-10 text-white">What's Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "4 nights in a luxury 12-bedroom house",
              "2 passenger vans + estimated gas",
              "House stock-up fund (Costco food/drinks)",
              "3 days of golf (estimated budget)",
              "Official Ryder Cup competition format",
              "Couples/private-room priority where possible"
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <CheckCircle2 className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                <span className="text-white/90 text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}