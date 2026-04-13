import { CalendarDays, Plane, Trophy, Sparkles, Home, PlaneTakeoff } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const days = [
  {
    date: "Wednesday • September 16",
    title: "Arrival + House Setup",
    description:
      "Travel day into Scottsdale, check-in at Casa Luna, grocery/house stock-up, and opening-night settling in.",
    icon: Plane,
  },
  {
    date: "Thursday • September 17",
    title: "Competition Day 1",
    description:
      "First official match day, followed by pool time, dinner, and the first full standings reset back at HQ.",
    icon: Trophy,
  },
  {
    date: "Friday • September 18",
    title: "Competition Day 2 + Optional Event Window",
    description:
      "Second match day with room for optional off-course plans, free time, or significant-other activities around the main golf schedule.",
    icon: Sparkles,
  },
  {
    date: "Saturday • September 19",
    title: "Competition Day 3 + Closing Night",
    description:
      "Final match day, cup-deciding points, and a full-group closeout night back at the house.",
    icon: Home,
  },
  {
    date: "Sunday • September 20",
    title: "Checkout + Departures",
    description:
      "House reset, airport runs, and travel home after the founding-year weekend wraps.",
    icon: PlaneTakeoff,
  },
];

export default function Schedule() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-5xl">
      <div className="text-center mb-16">
        <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-8">
          <CalendarDays className="w-10 h-10 text-secondary" />
        </div>
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6">Schedule & Logistics</h1>
        <p className="text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          The trip timeline at a glance — confirmed dates, competition flow, and where optional events can fit around the main weekend.
        </p>
      </div>

      <div className="space-y-8 mb-16">
        {days.map((day) => {
          const Icon = day.icon;

          return (
            <Card key={day.date} className="border-none bg-white shadow-xl overflow-hidden">
              <CardContent className="p-8 md:p-10 flex flex-col md:flex-row items-start gap-6 md:gap-8">
                <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center shrink-0">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-secondary mb-3">{day.date}</p>
                  <h2 className="font-serif text-3xl font-bold text-primary mb-3">{day.title}</h2>
                  <p className="text-lg text-foreground/80 leading-relaxed">{day.description}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card className="border-none bg-primary text-primary-foreground shadow-xl">
        <CardContent className="p-10 md:p-12">
          <h2 className="font-serif text-3xl font-bold mb-4">Optional Events</h2>
          <p className="text-xl text-primary-foreground/85 leading-relaxed max-w-4xl">
            Optional plans — including any significant-other activities or extra social pieces — will fit around the official golf competition.
            The core structure stays locked: arrive September 16, compete September 17–19, depart September 20.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
