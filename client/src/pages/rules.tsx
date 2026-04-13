import { ShieldCheck, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const principles = [
  {
    title: "House Respect",
    body: "Casa Luna is a premium rental. Treat it better than your own place and leave common spaces better than you found them.",
  },
  {
    title: "Neighborhood Awareness",
    body: "Be smart outdoors late at night. Noise complaints, parking issues, and sloppy behavior put the whole trip at risk.",
  },
  {
    title: "Founding Group Standard",
    body: "This is Year 1. The expectation is simple: be easy to travel with, easy to room with, and easy to trust.",
  },
];

const houseRules = [
  "Only registered guests are allowed at the house. No extra visitors or open-party energy.",
  "Respect quiet hours and keep outdoor noise under control, especially late at night.",
  "No glass around the pool or hot tub area.",
  "Clean up common areas daily, including kitchen surfaces, food, and trash.",
  "Report damage immediately instead of hoping nobody notices.",
  "Leave the house in reset mode before checkout on Sunday.",
];

const commitments = [
  "Deposits lock spots. If your money is not in, your spot is not fully confirmed.",
  "Current cancellation windows are: full refund before Aug 17, 50% refund before Sep 2 minus fees, and no refund after Sep 2.",
  "Per-person cost depends on final adult headcount. The founding group is 8 golfers, with optional significant others tied to golfer RSVPs.",
  "No room assignments or names are published until deposits are collected.",
  "Golf costs are golfer-only. Optional side activities are handled separately from the official competition budget.",
];

export default function Rules() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-5xl">
      <div className="text-center mb-16">
        <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-8">
          <ShieldCheck className="w-10 h-10 text-secondary" />
        </div>
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6">Rules & Expectations</h1>
        <p className="text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          This page is about house and trip standards — not the golf rules packet. Keep it respectful, clean, and easy on the group.
        </p>
      </div>

      <div className="space-y-12 pb-20">
        <Card className="border-none bg-white shadow-xl max-w-4xl mx-auto text-left border-l-8 border-secondary">
          <CardContent className="p-12">
            <h2 className="font-serif text-3xl font-bold text-primary mb-8">The Core Principles</h2>
            <ul className="space-y-6 text-lg text-foreground/80">
              {principles.map((item) => (
                <li key={item.title} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span>
                    <strong>{item.title}:</strong> {item.body}
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="border-none bg-white shadow-xl max-w-4xl mx-auto text-left border-l-8 border-primary">
          <CardContent className="p-12">
            <h2 className="font-serif text-3xl font-bold text-primary mb-8">House Standards</h2>
            <ul className="space-y-6 text-lg text-foreground/80">
              {houseRules.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="border-none bg-white shadow-xl max-w-4xl mx-auto text-left border-l-8 border-secondary">
          <CardContent className="p-12">
            <h2 className="font-serif text-3xl font-bold text-primary mb-8">Trip Commitments & Money</h2>
            <ul className="space-y-6 text-lg text-foreground/80">
              {commitments.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
