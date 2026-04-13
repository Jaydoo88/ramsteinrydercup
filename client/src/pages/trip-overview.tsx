import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Users, ShieldCheck, Home as HomeIcon, CheckCircle2 } from "lucide-react";

const snapshots = [
  {
    title: "Dates",
    value: "September 16–20, 2026",
    detail: "Competition days are September 17–19.",
    icon: Calendar,
  },
  {
    title: "Location",
    value: "Scottsdale, Arizona",
    detail: "Desert golf trip setting for the founding year.",
    icon: MapPin,
  },
  {
    title: "Founding Group",
    value: "8 golfers",
    detail: "Significant others are optional and tied to a golfer RSVP.",
    icon: Users,
  },
  {
    title: "HQ House",
    value: "Casa Luna",
    detail: "8 bedrooms, 9 bathrooms, and 8 ensuite guest suites.",
    icon: HomeIcon,
  },
];

const included = [
  "4 nights at the confirmed HQ house, Casa Luna",
  "3 official competition days from September 17–19",
  "Founding-group structure built around 8 golfers",
  "Optional significant others collected through RSVP only",
  "Room assignments finalized after deposits are collected",
  "Central planning hub for schedule, rules, house info, and pricing",
];

export default function TripOverview() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-6xl">
      <div className="mb-16 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary-foreground text-sm font-bold tracking-widest uppercase mb-6">
          <ShieldCheck className="w-4 h-4" />
          The Plan
        </div>
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-8">Trip Overview</h1>
        <p className="text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          This page stays high-level. It gives the founding group the big picture without turning the home page
          into the entire event packet.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {snapshots.map((item) => {
          const Icon = item.icon;

          return (
            <Card key={item.title} className="border-none shadow-xl bg-white hover:shadow-2xl transition-shadow">
              <CardContent className="p-8 flex items-start gap-6">
                <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center shrink-0">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-2xl mb-2 text-primary">{item.title}</h3>
                  <p className="text-primary text-xl font-bold mb-2">{item.value}</p>
                  <p className="text-muted-foreground text-base leading-relaxed">{item.detail}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="bg-primary text-primary-foreground rounded-3xl p-10 md:p-16 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <ShieldCheck className="w-64 h-64" />
        </div>
        <div className="relative z-10">
          <h2 className="font-serif text-4xl font-bold mb-10 text-white">Founding Year Snapshot</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {included.map((item) => (
              <div key={item} className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <CheckCircle2 className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                <span className="text-white/90 text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
