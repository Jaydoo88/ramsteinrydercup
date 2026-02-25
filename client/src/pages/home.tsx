import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays, MapPin, Users, ChevronRight, ShieldCheck, Home as HomeIcon, Wallet, Trophy } from "lucide-react";
import heroImage from "@/assets/images/hero-desert.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Scottsdale Desert Golf Course" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/50 to-background mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        <div className="relative z-10 container px-4 text-center text-white mt-12">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-bold tracking-widest uppercase mb-8 shadow-xl">
            <ShieldCheck className="w-4 h-4" />
            Founding Year &bull; 2026
          </div>
          
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold mb-6 text-white drop-shadow-2xl">
            Ramstein <br className="md:hidden" />
            <span className="text-secondary italic">Ryder Cup</span>
          </h1>
          
          <p className="text-xl md:text-3xl text-white/90 max-w-3xl mx-auto mb-12 font-medium drop-shadow-lg">
            The official launch of a tradition. 12 golfers. 4 nights. 
            One unforgettable desert classic.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto h-16 px-10 text-xl font-bold shadow-2xl uppercase tracking-widest">
              <Link href="/rsvp">Join the Founding Group</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto h-16 px-10 text-xl font-bold bg-black/30 text-white border-white/30 hover:bg-black/50 hover:text-white backdrop-blur-md uppercase tracking-widest">
              <Link href="/overview">View Trip Details</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-12 relative z-20">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto -mt-32">
            <Card className="bg-white/95 backdrop-blur-xl border-t-4 border-t-secondary shadow-2xl">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/5 text-primary rounded-full flex items-center justify-center mb-6">
                  <CalendarDays className="w-8 h-8" />
                </div>
                <h3 className="font-serif font-bold text-2xl mb-2 text-primary">Sept 16–20, 2026</h3>
                <p className="text-muted-foreground font-medium uppercase tracking-wider text-sm">Tentative Dates <br/> (4 Nights / 5 Days)</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/95 backdrop-blur-xl border-t-4 border-t-secondary shadow-2xl">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/5 text-primary rounded-full flex items-center justify-center mb-6">
                  <MapPin className="w-8 h-8" />
                </div>
                <h3 className="font-serif font-bold text-2xl mb-2 text-primary">Scottsdale, AZ</h3>
                <p className="text-muted-foreground font-medium uppercase tracking-wider text-sm">Desert Major Meets <br/> Private Club</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/95 backdrop-blur-xl border-t-4 border-t-secondary shadow-2xl">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/5 text-primary rounded-full flex items-center justify-center mb-6">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="font-serif font-bold text-2xl mb-2 text-primary">The Field</h3>
                <p className="text-muted-foreground font-medium uppercase tracking-wider text-sm">12 Golfers + <br/> Significant Others</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Commissioner's Note */}
      <section className="py-24 bg-background">
        <div className="container px-4 max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-10 text-primary">A Note from the Commissioner</h2>
          <div className="relative py-8">
            <span className="absolute top-0 left-0 md:-left-12 text-9xl text-secondary/30 font-serif leading-none">"</span>
            <p className="text-2xl md:text-3xl leading-relaxed text-foreground/90 font-serif italic relative z-10 px-6">
              This isn't just a one-time trip. This is Year 1 of a long-running tradition. 
              We're building an event that blends competitive golf trip swagger with the 
              inclusive comfort of a reunion. We want the core group locked in to set the 
              standard.
            </p>
            <span className="absolute bottom-0 right-0 md:-right-12 text-9xl text-secondary/30 font-serif leading-none rotate-180">"</span>
          </div>
          <div className="mt-12 inline-block border-b-2 border-secondary pb-1">
            <p className="font-bold text-primary uppercase tracking-widest text-lg">— Jason Dousharm</p>
          </div>
        </div>
      </section>

      {/* Feature Navigation Grid */}
      <section className="py-24 bg-muted/40 border-t border-border">
        <div className="container px-4 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="font-serif text-5xl font-bold text-primary mb-4">Planning Headquarters</h2>
              <p className="text-muted-foreground text-xl max-w-2xl">Everything you need to know about the founding year trip, from rooming to the Ryder Cup format.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link href="/house">
              <a className="group block h-full">
                <Card className="h-full hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-none bg-white">
                  <CardContent className="p-10 flex flex-col h-full">
                    <HomeIcon className="w-12 h-12 text-secondary mb-8 group-hover:scale-110 transition-transform" />
                    <h3 className="font-serif font-bold text-2xl mb-4 text-primary">House & Rooming</h3>
                    <p className="text-muted-foreground text-base mb-8 flex-grow">12-bedroom luxury HQ. Designed for comfort and fairness.</p>
                    <div className="flex items-center text-sm font-bold text-secondary uppercase tracking-wider">
                      Explore House <ChevronRight className="w-5 h-5 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </a>
            </Link>

            <Link href="/pricing">
              <a className="group block h-full">
                <Card className="h-full hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-none bg-white">
                  <CardContent className="p-10 flex flex-col h-full">
                    <Wallet className="w-12 h-12 text-secondary mb-8 group-hover:scale-110 transition-transform" />
                    <h3 className="font-serif font-bold text-2xl mb-4 text-primary">Budget & Pricing</h3>
                    <p className="text-muted-foreground text-base mb-8 flex-grow">Transparent costs, shared expenses, and the cushion explained.</p>
                    <div className="flex items-center text-sm font-bold text-secondary uppercase tracking-wider">
                      View Estimates <ChevronRight className="w-5 h-5 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </a>
            </Link>

            <Link href="/golf">
              <a className="group block h-full">
                <Card className="h-full hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-none bg-white">
                  <CardContent className="p-10 flex flex-col h-full">
                    <Trophy className="w-12 h-12 text-secondary mb-8 group-hover:scale-110 transition-transform" />
                    <h3 className="font-serif font-bold text-2xl mb-4 text-primary">Competition</h3>
                    <p className="text-muted-foreground text-base mb-8 flex-grow">Team A vs Team B. Format, etiquette, and the quest for glory.</p>
                    <div className="flex items-center text-sm font-bold text-secondary uppercase tracking-wider">
                      See Format <ChevronRight className="w-5 h-5 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </a>
            </Link>

            <Card className="h-full border-none bg-primary text-primary-foreground shadow-xl">
              <CardContent className="p-10 flex flex-col justify-center items-center text-center h-full">
                <h3 className="font-serif text-3xl font-bold mb-4">Ready to commit?</h3>
                <p className="text-primary-foreground/80 text-base mb-10">Secure your spot in the founding group.</p>
                <Button asChild variant="secondary" className="w-full h-14 text-lg font-bold uppercase tracking-widest">
                  <Link href="/rsvp">RSVP Now</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}