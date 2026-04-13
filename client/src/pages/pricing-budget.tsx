import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, CalendarClock, Users, AlertCircle, Wallet } from "lucide-react";

const payments = [
  {
    label: "Pay Today",
    amount: "$2,955.09",
    detail: "First payment to secure the Casa Luna reservation.",
  },
  {
    label: "Due September 2",
    amount: "$2,394.09",
    detail: "Final payment on the house reservation.",
  },
  {
    label: "House Total",
    amount: "$5,349.18",
    detail: "Confirmed total for 4 nights at the HQ house.",
  },
];

const cancellationWindows = [
  "Full refund before August 17, 2026.",
  "50% refund before September 2, 2026, minus any applicable fees.",
  "No refund after September 2, 2026.",
];

export default function PricingBudget() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-6xl">
      <div className="mb-16 text-center max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-8">Pricing & Budget</h1>
        <p className="text-2xl text-muted-foreground leading-relaxed">
          This page is focused on shared-cost logic, the house payment schedule, and the headcount notes that affect
          the final per-person number.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {payments.map((item) => (
          <Card key={item.label} className="border-none bg-white shadow-xl overflow-hidden">
            <CardContent className="p-8">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-secondary mb-4">{item.label}</p>
              <div className="font-serif text-4xl font-bold text-primary mb-4">{item.amount}</div>
              <p className="text-foreground/70 leading-relaxed">{item.detail}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16">
        <Card className="lg:col-span-3 border-none bg-white shadow-xl">
          <CardContent className="p-10 md:p-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h2 className="font-serif text-3xl font-bold text-primary">How Shared Cost Works</h2>
                <p className="text-muted-foreground text-base mt-1">Keep the math clean, then confirm the split after deposits.</p>
              </div>
            </div>

            <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
              <p>
                The confirmed lodging reservation for Casa Luna is <strong className="text-primary">$5,349.18</strong>.
                That number is fixed at the house level.
              </p>
              <p>
                Per-person cost depends on final adult headcount. The founding group is 8 golfers, and any significant
                others are optional and only counted through a golfer&apos;s RSVP.
              </p>
              <p>
                Final per-person numbers are confirmed after deposits are collected and headcount is locked. No rooming
                assignments or name-based pricing are posted before then.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2 border-none bg-primary text-primary-foreground shadow-xl">
          <CardContent className="p-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center">
                <CalendarClock className="w-7 h-7 text-secondary" />
              </div>
              <h2 className="font-serif text-3xl font-bold">Payment Schedule</h2>
            </div>

            <div className="space-y-6 text-lg">
              <div className="border-b border-primary-foreground/10 pb-5">
                <p className="text-primary-foreground/60 text-sm font-bold uppercase tracking-widest mb-2">Step 1</p>
                <p className="font-bold text-2xl text-secondary">$2,955.09 due now</p>
              </div>
              <div className="pb-5">
                <p className="text-primary-foreground/60 text-sm font-bold uppercase tracking-widest mb-2">Step 2</p>
                <p className="font-bold text-2xl text-white">$2,394.09 due Sep 2</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <Card className="border-none bg-white shadow-xl">
          <CardContent className="p-10 md:p-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center">
                <AlertCircle className="w-7 h-7 text-secondary" />
              </div>
              <h2 className="font-serif text-3xl font-bold text-primary">Cancellation Windows</h2>
            </div>

            <ul className="space-y-5 text-lg text-foreground/80">
              {cancellationWindows.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-secondary mt-3 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="border-none bg-white shadow-xl">
          <CardContent className="p-10 md:p-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                <Wallet className="w-7 h-7 text-primary" />
              </div>
              <h2 className="font-serif text-3xl font-bold text-primary">Headcount Notes</h2>
            </div>

            <ul className="space-y-5 text-lg text-foreground/80 leading-relaxed">
              <li className="flex items-start gap-4">
                <div className="w-2.5 h-2.5 rounded-full bg-secondary mt-3 shrink-0" />
                <span>The founding group is built around <strong className="text-primary">8 golfers</strong>.</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-2.5 h-2.5 rounded-full bg-secondary mt-3 shrink-0" />
                <span>Significant others are optional and only counted when tied to a golfer RSVP.</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-2.5 h-2.5 rounded-full bg-secondary mt-3 shrink-0" />
                <span>Lower or higher total headcount changes the per-person split, not the house total itself.</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-2.5 h-2.5 rounded-full bg-secondary mt-3 shrink-0" />
                <span>Golf spend and other trip incidentals stay separate from the confirmed house reservation total.</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card className="border-none bg-muted/30 shadow-inner">
        <CardContent className="p-10 md:p-12 flex items-start gap-6">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
            <DollarSign className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h2 className="font-serif text-3xl font-bold text-primary mb-4">Bottom Line</h2>
            <p className="text-xl text-foreground/80 leading-relaxed max-w-4xl">
              Casa Luna is confirmed. The house total and payment schedule are now locked. Final per-person pricing gets
              published once deposits are in and the adult headcount is final.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
