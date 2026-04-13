import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays, MapPin, Users, ChevronRight, ShieldCheck, Home as HomeIcon, Wallet, Trophy, ScrollText } from "lucide-react";
import heroImage from "@/assets/images/hero-desert.png";

const highlights = [
  {
    title: "Trip Overview",
    description: "Confirmed dates, high-level trip plan, and founding-year snapshot.",
    href: "/overview",
    icon: MapPin,
    cta: "View Overview",
  },
  {
    title: "House & Rooming",
    description: "Casa Luna details, suite setup, and the post-deposit rooming policy.",
    href: "/house",
    icon: HomeIcon,
    cta: "See the House",
  },
  {
    title: "Pricing",
    description: "Shared-cost logic, payment schedule, and cancellation windows.",
    href: "/pricing",
    icon: Wallet,
    cta: "View Pricing",
  },
  {
    title: "Golf Format",
    description: "Official competition structure, scoring, and match-play rules.",
    href: "/golf",
    icon: Trophy,
    cta: "See Format",
  },
  {
    title: "Schedule",
    description: "Daily flow for arrival, competition days, optional events, and departure.",
    href: "/schedule",
    icon: CalendarDays,
    cta: "Open Schedule",
  },
  {
    title: "Rules",
    description: "House and trip expectations for the founding group weekend.",
    href: "/rules",
    icon: ScrollText,
    cta: "Read Rules",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Scottsdale Desert Golf Course"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/50 to-background mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white mt-12 md:pb-16 pb-24">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-bold tracking-widest uppercase mb-8 shadow-xl">
            <ShieldCheck className="w-4 h-4" />
            Founding Year • 2026
          </div>

          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold mb-6 text-white drop-shadow-2xl">
            Ramstein <br className="md:hidden" />
            <span className="text-secondary italic">Ryder Cup</span>
          </h1>

          <p className="text-xl md:text-3xl text-white/90 max-w-4xl mx-auto mb-12 font-medium drop-shadow-lg">
            September 16–20, 2026 in Scottsdale. Eight founding golfers, three competition days,
            and one official front door for the entire trip.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto h-16 px-10 text-xl font-bold shadow-2xl uppercase tracking-widest" data-testid="button-home-rsvp">
              <Link href="/rsvp">Join the Founding Group</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto h-16 px-10 text-xl font-bold bg-black/30 text-white border-white/30 hover:bg-black/50 hover:text-white backdrop-blur-md uppercase tracking-widest" data-testid="button-home-overview">
              <Link href="/overview">View Trip Details</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto md:-mt-32 -mt-16">
            <Card className="bg-white/95 backdrop-blur-xl border-t-4 border-t-secondary shadow-2xl">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/5 text-primary rounded-full flex items-center justify-center mb-6">
                  <CalendarDays className="w-8 h-8" />
                </div>
                <h3 className="font-serif font-bold text-2xl mb-2 text-primary">September 16–20, 2026</h3>
                <p className="text-muted-foreground font-medium uppercase tracking-wider text-sm">
                  Confirmed Event Dates <br /> Competition Days: September 17–19
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/95 backdrop-blur-xl border-t-4 border-t-secondary shadow-2xl">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/5 text-primary rounded-full flex items-center justify-center mb-6">
                  <HomeIcon className="w-8 h-8" />
                </div>
                <h3 className="font-serif font-bold text-2xl mb-2 text-primary">Casa Luna</h3>
                <p className="text-muted-foreground font-medium uppercase tracking-wider text-sm">
                  8 Bedrooms / 9 Bathrooms <br /> 8 Ensuite Guest Suites
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/95 backdrop-blur-xl border-t-4 border-t-secondary shadow-2xl">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/5 text-primary rounded-full flex items-center justify-center mb-6">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="font-serif font-bold text-2xl mb-2 text-primary">The Field</h3>
                <p className="text-muted-foreground font-medium uppercase tracking-wider text-sm">
                  8 Golfers <br /> Founding Group
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      <section className="py-24 bg-muted/40 border-t border-border">
        <div className="container px-4 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="font-serif text-5xl font-bold text-primary mb-4">Explore the Weekend</h2>
              <p className="text-muted-foreground text-xl max-w-3xl">
                Each page stays focused, so the trip is easy to scan without dumping every detail onto the homepage.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <Link key={item.href} href={item.href} className="group block h-full" data-testid={`link-home-${item.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                  <Card className="h-full hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-none bg-white">
                    <CardContent className="p-10 flex flex-col h-full">
                      <Icon className="w-12 h-12 text-secondary mb-8 group-hover:scale-110 transition-transform" />
                      <h3 className="font-serif font-bold text-2xl mb-4 text-primary">{item.title}</h3>
                      <p className="text-muted-foreground text-base mb-8 flex-grow">{item.description}</p>
                      <div className="flex items-center text-sm font-bold text-secondary uppercase tracking-wider">
                        {item.cta} <ChevronRight className="w-5 h-5 ml-2" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>

          <Card className="mt-10 border-none bg-primary text-primary-foreground shadow-xl">
            <CardContent className="p-10 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
              <div>
                <h3 className="font-serif text-3xl font-bold mb-3">Ready to lock your spot?</h3>
                <p className="text-primary-foreground/80 text-lg">
                  RSVP collects founding-group responses and optional significant-other info in one place.
                </p>
              </div>
              <Button asChild variant="secondary" className="h-14 px-8 text-lg font-bold uppercase tracking-widest" data-testid="button-home-rsvp-footer">
                <Link href="/rsvp">RSVP Now</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
