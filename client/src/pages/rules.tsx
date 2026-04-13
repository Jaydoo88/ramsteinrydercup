import { ShieldCheck, CheckCircle2 } from "lucide-react";

export default function Rules() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-5xl text-center">
      <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-8">
        <ShieldCheck className="w-10 h-10 text-secondary" />
      </div>
      <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6">Rules & Expectations</h1>
      <p className="text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-16">
        Setting the tone for our inaugural trip — have a great time, respect the space, and don&apos;t be the problem.
      </p>

      <div className="space-y-12 pb-20">
        <div className="bg-white p-12 rounded-[2rem] shadow-xl max-w-3xl mx-auto text-left border-l-8 border-secondary">
          <h2 className="font-serif text-3xl font-bold text-primary mb-8">Core Principles</h2>
          <ul className="space-y-6 text-lg text-foreground/80">
            <li className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
              <span><strong>Respect the House:</strong> We&apos;re staying in a premium property — treat it better than your own. Clean up after yourself and keep shared spaces presentable.</span>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
              <span><strong>Respect the Neighborhood:</strong> Be mindful of noise, especially outdoors at night. We want zero issues with neighbors or local authorities.</span>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
              <span><strong>Respect the Commitment:</strong> Payment timelines are firm. The commissioner is coordinating large upfront costs — not financing the trip.</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-12 rounded-[2rem] shadow-xl max-w-3xl mx-auto text-left border-l-8 border-primary">
          <h2 className="font-serif text-3xl font-bold text-primary mb-8">House Rules (Non-Negotiable)</h2>
          <ul className="space-y-6 text-lg text-foreground/80">
            <li className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
              <span><strong>Quiet Hours & Noise:</strong> Keep outdoor noise under control late at night. Complaints put our deposit at risk.</span>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
              <span><strong>No Unauthorized Guests:</strong> Only confirmed attendees are allowed on the property. No outside visitors or parties.</span>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
              <span><strong>Parking & Ride Coordination:</strong> Follow all parking guidelines and use designated areas for vehicles and pickups.</span>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
              <span><strong>Shared Space Responsibility:</strong> Clean up nightly. No personal items or mess left in common areas.</span>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
              <span><strong>Trash Management:</strong> Take out trash regularly to keep the house clean and organized.</span>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
              <span><strong>Damage Reporting:</strong> If anything breaks, report it immediately. Respect the property at all times.</span>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
              <span><strong>Pool & Outdoor Rules:</strong> No glass near the pool or spa — use plastic cups or cans only.</span>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
              <span><strong>Checkout Expectations:</strong> Leave the house in good condition — trash removed, dishes handled, and spaces reset.</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-12 rounded-[2rem] shadow-xl max-w-3xl mx-auto text-left border-l-8 border-secondary">
          <h2 className="font-serif text-3xl font-bold text-primary mb-8">Trip Commitments & Financials</h2>
          <ul className="space-y-6 text-lg text-foreground/80">
            <li className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
              <span><strong>Non-Refundable Deposit:</strong> All deposits are non-refundable. This secures your spot and covers upfront costs already committed.</span>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
              <span><strong>Payment Deadlines:</strong> All deadlines are firm. The commissioner is fronting significant expenses and cannot chase payments.</span>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
              <span><strong>Spot Confirmation:</strong> Your spot is only confirmed once your deposit is received.</span>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
              <span><strong>Cancellation Policy:</strong> If you back out, you are still responsible for your spot unless a replacement is found. If a replacement takes your place, reimbursement may be arranged.</span>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
              <span><strong>Shared Expenses:</strong> Housing and group stock-up costs are split evenly among all attendees. Transportation is handled individually, with estimated ride costs provided.</span>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
              <span><strong>Golf Costs:</strong> Golf expenses apply only to those participating in the rounds.</span>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
              <span><strong>Headcount Impact:</strong> Final cost per person adjusts based on attendance: more golfers means a higher per-person golf cost, while more non-golfers or significant others lowers the shared cost per person.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
