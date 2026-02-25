import { ShieldCheck, CheckCircle2 } from "lucide-react";

export default function Rules() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-5xl text-center">
      <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-8">
        <ShieldCheck className="w-10 h-10 text-secondary" />
      </div>
      <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6">Rules & Expectations</h1>
      <p className="text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-16">
        Setting the standard for the founding year. Have fun, respect the house, don't be the problem.
      </p>
      
      <div className="bg-white p-12 rounded-[2rem] shadow-xl max-w-3xl mx-auto text-left border-l-8 border-secondary">
        <h2 className="font-serif text-3xl font-bold text-primary mb-8">The Core Principles</h2>
        <ul className="space-y-6 text-lg text-foreground/80">
          <li className="flex items-start gap-4">
            <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
            <span><strong>House Respect:</strong> This is a premium luxury rental. Treat it better than your own home. Clean up after yourself in common areas.</span>
          </li>
          <li className="flex items-start gap-4">
            <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
            <span><strong>Neighborhood:</strong> Be mindful of noise outdoors after hours. We don't want to lose the deposit or deal with police.</span>
          </li>
          <li className="flex items-start gap-4">
            <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
            <span><strong>Commitment:</strong> Payment deadlines are firm. The commissioner is not a bank.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}