import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import logoImage from "@assets/image0_1774735378309.png";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16 mt-20 border-t-4 border-secondary shadow-inner">
      <div className="container mx-auto px-4 text-center">
        <Dialog>
          <DialogTrigger asChild>
            <button className="mx-auto mb-6 block cursor-pointer hover:scale-105 transition-transform focus:outline-none">
              <img src={logoImage} alt="Ramstein Ryder Cup Logo" className="h-24 w-24 object-contain" />
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
        <h3 className="font-serif text-3xl font-bold mb-2 text-white">Ramstein Ryder Cup</h3>
        <p className="text-primary-foreground/80 mb-10 max-w-md mx-auto text-lg">
          The official hub for the founding year. Scottsdale, AZ &mdash; September 2026.
        </p>
        <div className="border-t border-primary-foreground/20 pt-8 text-sm text-primary-foreground/60 flex flex-col md:flex-row justify-center items-center gap-4 font-medium uppercase tracking-wider">
          <span>&copy; 2026 Ramstein Ryder Cup</span>
          <span className="hidden md:inline text-secondary">&bull;</span>
          <span>Commissioner: Jason Dousharm</span>
        </div>
      </div>
    </footer>
  );
}