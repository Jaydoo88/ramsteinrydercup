export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16 mt-20 border-t-4 border-secondary">
      <div className="container mx-auto px-4 text-center">
        <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-serif font-bold text-3xl mx-auto mb-6">
          RR
        </div>
        <h3 className="font-serif text-3xl font-bold mb-2 text-white">Ramstein Ryder Cup</h3>
        <p className="text-primary-foreground/70 mb-10 max-w-md mx-auto text-lg">
          The official hub for the founding year. Scottsdale, AZ &mdash; September 2026.
        </p>
        <div className="border-t border-primary-foreground/10 pt-8 text-sm text-primary-foreground/50 flex flex-col md:flex-row justify-center items-center gap-4 font-medium uppercase tracking-wider">
          <span>&copy; 2026 Ramstein Ryder Cup</span>
          <span className="hidden md:inline text-secondary">&bull;</span>
          <span>Commissioner: Jason Dousharm</span>
        </div>
      </div>
    </footer>
  );
}