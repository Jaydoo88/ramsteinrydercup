import { Link, useLocation } from "wouter";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Menu } from "lucide-react";
import { useState } from "react";
import logoImage from "@assets/image0_1774735378309.png";

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
    <nav className="bg-white text-primary sticky top-0 z-50 border-b border-border shadow-md">
      <div className="container mx-auto px-4 h-24 flex items-center justify-between">
        <div className="flex items-center gap-3 group">
          <Dialog>
            <DialogTrigger asChild>
              <button className="bg-white rounded-full p-1 cursor-pointer hover:scale-105 transition-transform focus:outline-none">
                <img src={logoImage} alt="Ramstein Ryder Cup Logo" className="h-16 w-16 object-contain" />
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md bg-white">
              <DialogHeader>
                <DialogTitle className="font-serif text-2xl text-primary text-center">Design Credit</DialogTitle>
              </DialogHeader>
              <div className="flex flex-col items-center justify-center p-6 text-center space-y-6">
                <img src={logoImage} alt="Ramstein Ryder Cup Logo" className="h-32 w-32 object-contain" />
                <DialogDescription className="text-lg text-foreground/80 leading-relaxed">
                  A special shoutout to <strong className="text-primary font-bold">Darrel Johnson</strong> for creating the official Ramstein Ryder Cup logo.
                </DialogDescription>
              </div>
            </DialogContent>
          </Dialog>
          
          <Link href="/" className="flex flex-col">
            <span className="font-serif font-bold text-lg leading-tight tracking-wide text-primary">Ramstein Ryder Cup</span>
            <span className="text-[10px] uppercase tracking-widest text-secondary font-bold">Founding Year 2026</span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {routes.slice(1).map((route) => (
            <Link key={route.path} href={route.path} className={`text-sm font-bold uppercase tracking-wider transition-colors hover:text-secondary ${location === route.path ? "text-secondary" : "text-primary/80"}`}>
              {route.name}
            </Link>
          ))}
          <Button asChild className="ml-4 font-bold tracking-widest uppercase bg-secondary text-white hover:bg-secondary/90">
            <Link href="/rsvp">RSVP</Link>
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-primary hover:bg-primary/10 hover:text-secondary">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white border-l-border text-primary p-0">
              <div className="p-6 flex flex-col gap-6 h-full">
                <div className="flex items-center gap-3 border-b border-border/50 pb-6">
                  <div className="bg-white rounded-full p-1 shrink-0">
                    <img src={logoImage} alt="Ramstein Ryder Cup Logo" className="h-12 w-12 object-contain" />
                  </div>
                  <div>
                    <div className="font-serif font-bold text-xl text-primary">Ryder Cup</div>
                    <div className="text-xs text-secondary uppercase tracking-wider font-bold">Scottsdale '26</div>
                  </div>
                </div>
                <div className="flex flex-col gap-4 overflow-y-auto">
                  {routes.map((route) => (
                    <Link 
                      key={route.path} 
                      href={route.path}
                      onClick={() => setOpen(false)}
                      className={`text-lg font-bold uppercase tracking-wide py-3 border-b border-border/30 transition-colors ${location === route.path ? "text-secondary" : "text-primary/80 hover:text-primary"}`}
                    >
                      {route.name}
                    </Link>
                  ))}
                </div>
                <div className="mt-auto pt-6 border-t border-border/50">
                  <Button asChild className="w-full font-bold text-lg h-14 uppercase tracking-widest bg-secondary text-white hover:bg-secondary/90">
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