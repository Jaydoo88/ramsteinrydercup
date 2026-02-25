import { Link, useLocation } from "wouter";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const routes = [
  { name: "Home", path: "/" },
  { name: "Trip Overview", path: "/overview" },
  { name: "House & Rooming", path: "/house" },
  { name: "Pricing", path: "/pricing" },
  { name: "Golf Format", path: "/golf" },
  { name: "Schedule", path: "/schedule" },
  { name: "Rules", path: "/rules" },
];

export function Navbar() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-primary text-primary-foreground sticky top-0 z-50 border-b border-primary/20 shadow-md">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-serif font-bold text-xl group-hover:bg-secondary/90 transition-colors">
              RR
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg leading-tight tracking-wide text-white">Ramstein Ryder Cup</span>
              <span className="text-[10px] uppercase tracking-widest text-secondary font-bold">Founding Year 2026</span>
            </div>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {routes.slice(1).map((route) => (
            <Link key={route.path} href={route.path}>
              <a className={`text-sm font-bold uppercase tracking-wider transition-colors hover:text-secondary ${location === route.path ? "text-secondary" : "text-primary-foreground/80"}`}>
                {route.name}
              </a>
            </Link>
          ))}
          <Button asChild variant="secondary" className="ml-4 font-bold tracking-widest uppercase">
            <Link href="/rsvp">RSVP</Link>
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary/50 hover:text-secondary">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-primary border-l-primary/20 text-primary-foreground p-0">
              <div className="p-6 flex flex-col gap-6 h-full">
                <div className="flex items-center gap-3 border-b border-primary-foreground/10 pb-6">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-serif font-bold text-2xl">
                    RR
                  </div>
                  <div>
                    <div className="font-serif font-bold text-xl">Ryder Cup</div>
                    <div className="text-xs text-secondary uppercase tracking-wider font-bold">Scottsdale '26</div>
                  </div>
                </div>
                <div className="flex flex-col gap-4 overflow-y-auto">
                  {routes.map((route) => (
                    <Link key={route.path} href={route.path}>
                      <a 
                        onClick={() => setOpen(false)}
                        className={`text-lg font-bold uppercase tracking-wide py-3 border-b border-primary-foreground/5 transition-colors ${location === route.path ? "text-secondary" : "text-primary-foreground/80 hover:text-white"}`}
                      >
                        {route.name}
                      </a>
                    </Link>
                  ))}
                </div>
                <div className="mt-auto pt-6 border-t border-primary-foreground/10">
                  <Button asChild variant="secondary" className="w-full font-bold text-lg h-14 uppercase tracking-widest">
                    <Link onClick={() => setOpen(false)} href="/rsvp">RSVP Now</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}