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
          <h2 className="font-serif text-3xl font-bold text-primary mb-8">House Rules (Strictly Enforced)</h2>
          <ul className="space-y-6 text-lg text-foreground/80">
            <li className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
              <span><strong>Guest Limit:</strong> Only confirmed attendees are allowed on the property. No outside visitors.</span>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
              <span><strong>Quiet Hours:</strong> Outdoor noise must be kept under control after 10 PM (Sun–Thurs) and 11 PM (Fri–Sat).</span>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
              <span><strong>No Smoking Indoors:</strong> Smoking inside the home will result in a $500 fine.</span>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
              <span><strong>Parking:</strong> All vehicles must be parked in designated areas. No street parking.</span>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
              <span><strong>Damage Responsibility:</strong> Guests are financially responsible for any damage to the property. Charges will be passed to the responsible party.</span>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
              <span><strong>No Parties or Events:</strong> No unauthorized gatherings or events are permitted.</span>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
              <span><strong>Pets:</strong> Approved pets only. Owners are responsible for cleanup and any damages.</span>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
              <span><strong>Check-In / Check-Out:</strong> Check-in: 4 PM. Check-out: 10 AM. Late departures may result in additional fees.</span>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
              <span><strong>Cleanliness:</strong> Maintain shared spaces and avoid excessive mess. Additional cleaning fees may apply if standards are not met.</span>
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
