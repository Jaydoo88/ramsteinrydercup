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
  { name: "Home", shortName: "Home", path: "/" },
  { name: "Trip Overview", shortName: "Overview", path: "/overview" },
  { name: "House & Rooming", shortName: "House", path: "/house" },
  { name: "Pricing", shortName: "Pricing", path: "/pricing" },
  { name: "Golf Format", shortName: "Golf", path: "/golf" },
  { name: "Schedule", shortName: "Schedule", path: "/schedule" },
  { name: "Rules", shortName: "Rules", path: "/rules" },
  { name: "Players", shortName: "Players", path: "/players" },
];

export function Navbar() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white text-primary sticky top-0 z-50 shadow-md border-b border-primary/20">
      <div className="container mx-auto flex h-24 items-center justify-between gap-4 px-4">
        <div className="flex min-w-0 items-center gap-3 group">
          <Dialog>
            <DialogTrigger asChild>
              <button className="cursor-pointer hover:scale-105 transition-transform focus:outline-none bg-primary/5 rounded-md p-1.5">
                <img src={logoImage} alt="Ramstein Ryder Cup Logo" className="h-16 w-16 object-contain" />
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md bg-white">
              <DialogHeader>
                <DialogTitle className="font-serif text-2xl text-primary text-center">Design Credit</DialogTitle>
              </DialogHeader>
              <div className="flex flex-col items-center justify-center p-6 text-center space-y-6">
                <img src={logoImage} alt="Ramstein Ryder Cup Logo" className="h-32 w-32 object-contain bg-primary/5 p-2 rounded-lg" />
                <DialogDescription className="text-lg text-foreground/80 leading-relaxed">
                  A special shoutout to <strong className="text-primary font-bold">Darrel Johnson</strong> for creating the official Ramstein Ryder Cup logo.
                </DialogDescription>
              </div>
            </DialogContent>
          </Dialog>
          
          <Link href="/" className="ml-1 flex min-w-0 flex-col max-[1120px]:max-w-[170px]">
            <span className="truncate font-serif text-sm font-bold leading-tight tracking-wide text-primary lg:text-[15px] xl:text-lg">Ramstein Ryder Cup</span>
            <span className="hidden text-[10px] font-bold uppercase tracking-widest text-secondary xl:block">Founding Year 2026</span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden shrink-0 lg:flex items-center gap-2 xl:gap-6">
          {routes.slice(1).map((route) => (
            <Link key={route.path} href={route.path} className={`text-[11px] font-bold uppercase tracking-[0.12em] transition-colors hover:text-secondary xl:text-sm xl:tracking-[0.14em] ${location === route.path ? "text-secondary" : "text-primary"}`}>
              <span className="xl:hidden">{route.shortName}</span>
              <span className="hidden xl:inline">{route.name}</span>
            </Link>
          ))}
          <Button asChild variant="secondary" className="ml-1 h-10 px-4 text-xs font-bold uppercase tracking-[0.14em] text-white bg-secondary hover:bg-secondary/90 xl:ml-4 xl:h-11 xl:px-5 xl:text-sm xl:tracking-[0.16em]">
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
            <SheetContent side="right" className="bg-white border-l-primary/20 text-primary p-0">
              <div className="p-6 flex flex-col gap-6 h-full">
                <div className="flex items-center gap-3 border-b border-primary/10 pb-6">
                  <div className="shrink-0 bg-primary/5 rounded-md p-1.5">
                    <img src={logoImage} alt="Ramstein Ryder Cup Logo" className="h-12 w-12 object-contain" />
                  </div>
                  <div className="ml-2">
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
                      className={`text-lg font-bold uppercase tracking-wide py-3 border-b border-primary/5 transition-colors ${location === route.path ? "text-secondary" : "text-primary hover:text-secondary"}`}
                    >
                      {route.name}
                    </Link>
                  ))}
                </div>
                <div className="mt-auto pt-6 border-t border-primary/10">
                  <Button asChild variant="secondary" className="w-full font-bold text-lg h-14 uppercase tracking-widest text-white bg-secondary hover:bg-secondary/90">
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