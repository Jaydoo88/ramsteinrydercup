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
      
      <div className="space-y-12 pb-20">
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

        <div className="bg-white p-12 rounded-[2rem] shadow-xl max-w-3xl mx-auto text-left border-l-8 border-primary">
          <h2 className="font-serif text-3xl font-bold text-primary mb-8">House Rules (Non-Negotiables)</h2>
          <ul className="space-y-6 text-lg text-foreground/80">
            <li className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
              <span><strong>Quiet Hours & Noise:</strong> Respect the neighborhood, especially outdoors late at night. Noise complaints put our deposit at risk.</span>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
              <span><strong>No Unauthorized Visitors:</strong> Only registered guests are allowed on the property. No open parties or external visitors.</span>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
              <span><strong>Parking Rules:</strong> Adhere strictly to the designated parking areas for our vans/vehicles.</span>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
              <span><strong>Common Area Cleanup:</strong> Do not leave a mess. Clear your stuff from common areas nightly.</span>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
              <span><strong>Trash Managed Daily:</strong> Take out the trash regularly so it doesn't pile up inside.</span>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
              <span><strong>Damage & Respect:</strong> If something breaks, report it immediately. Treat the property with maximum respect.</span>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
              <span><strong>Pool & Outdoor Etiquette:</strong> Absolutely NO GLASS near the pool or spa area. Use provided plastic cups/cans.</span>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
              <span><strong>Checkout Reset:</strong> Ensure the house is tidy, trash is taken out, and dishes are handled before departure.</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-12 rounded-[2rem] shadow-xl max-w-3xl mx-auto text-left border-l-8 border-secondary">
          <h2 className="font-serif text-3xl font-bold text-primary mb-8">Trip Commitments & Money</h2>
          <ul className="space-y-6 text-lg text-foreground/80">
            <li className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
              <span><strong>Payment Deadlines:</strong> Deadlines are firm. The commissioner is fronting massive deposits and cannot chase down payments.</span>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
              <span><strong>Deposits Lock Spots:</strong> Your spot is only confirmed once your deposit is received.</span>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
              <span><strong>Refund Policy:</strong> Refunds are replacement-based (details to be finalized). If you back out, you get refunded only if we find a replacement.</span>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
              <span><strong>Shared Costs:</strong> House, vans, and stock-up funds are split evenly across all adults attending.</span>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
              <span><strong>Golf Costs:</strong> Golf fees apply strictly to the 12 golfers only.</span>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
              <span><strong>Headcount Impact:</strong> Final pricing changes with headcount. More solo golfers = higher cost per person. More significant others = lower cost per person.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}