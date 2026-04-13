import { Trophy, Users, CalendarDays, ShieldAlert } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

const formatCards = [
  {
    title: "Field",
    value: "8 golfers",
    detail: "Two sides of four for the founding year competition.",
    icon: Users,
  },
  {
    title: "Competition Days",
    value: "September 17–19",
    detail: "Three official match days during the trip window.",
    icon: CalendarDays,
  },
  {
    title: "Scoring",
    value: "162 total points",
    detail: "18 points per match, 54 per day, 3 days total.",
    icon: Trophy,
  },
];

export default function GolfFormat() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-5xl">
      <div className="text-center mb-16">
        <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-8">
          <Trophy className="w-10 h-10 text-secondary" />
        </div>
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6">Golf Format & Competition</h1>
        <p className="text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          The official competition page for the founding year — focused on match structure, scoring, and the rules packet.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {formatCards.map((item) => {
          const Icon = item.icon;

          return (
            <Card key={item.title} className="border-none bg-white shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-secondary mb-3">{item.title}</p>
                <h2 className="font-serif text-3xl font-bold text-primary mb-3">{item.value}</h2>
                <p className="text-foreground/70 leading-relaxed">{item.detail}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="bg-white rounded-[2rem] shadow-xl p-6 md:p-10 border border-border/50">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center shrink-0">
            <ShieldAlert className="w-7 h-7 text-secondary" />
          </div>
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">Official Competition Rules</h2>
            <p className="text-muted-foreground mt-2">No placeholders — just the event structure and standards for play.</p>
          </div>
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left font-bold text-lg text-primary">1) Teams & Draft</AccordionTrigger>
            <AccordionContent className="text-base text-foreground/80 leading-relaxed pt-2 pb-6">
              The founding year field is 8 golfers total, split into two teams of 4. The Commissioner will set the player pool
              and run the opening-night team selection before official competition begins.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left font-bold text-lg text-primary">2) Competition Window</AccordionTrigger>
            <AccordionContent className="text-base text-foreground/80 leading-relaxed pt-2 pb-6">
              Official competition runs across three days: September 17, 18, and 19. Day-by-day formats, tee times, and course
              logistics are handled inside the event schedule and captain briefings.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left font-bold text-lg text-primary">3) Match Formats by Day</AccordionTrigger>
            <AccordionContent className="text-base text-foreground/80 leading-relaxed pt-2 pb-6">
              Day 1 is Scramble, Day 2 is Alternate Shot, and Day 3 is Best Ball. Any official format tweak must be communicated
              to both teams before the first tee shot of that day.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-left font-bold text-lg text-primary">4) Points System</AccordionTrigger>
            <AccordionContent className="text-base text-foreground/80 leading-relaxed pt-2 pb-6">
              Each match has 18 available points, scored hole by hole. A hole win is worth 1 point, a tie is worth 0.5 points,
              and a loss is worth 0. That creates 54 available points per day and 162 points across the full competition.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="text-left font-bold text-lg text-primary">5) Pairings & Fairness</AccordionTrigger>
            <AccordionContent className="text-base text-foreground/80 leading-relaxed pt-2 pb-6">
              Pairings should prioritize fairness, competitive balance, and variety across the weekend. Repeat partnerships should
              be avoided when possible, and any exception needs approval from both sides and the Commissioner.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger className="text-left font-bold text-lg text-primary">6) Scorekeeping & Verification</AccordionTrigger>
            <AccordionContent className="text-base text-foreground/80 leading-relaxed pt-2 pb-6">
              Scores must be kept hole by hole, reviewed at the end of the round, and verified by the opposing team before being
              submitted to the daily standings board.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7">
            <AccordionTrigger className="text-left font-bold text-lg text-primary">7) Event Rules on Tees, Relief & Mulligans</AccordionTrigger>
            <AccordionContent className="text-base text-foreground/80 leading-relaxed pt-2 pb-6">
              Tee assignments and any local event procedures for relief, OB, or pace-play adjustments must be made clear before play.
              No mulligans are allowed in official competition, and concessions can only be granted by the opposing side.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8">
            <AccordionTrigger className="text-left font-bold text-lg text-primary">8) Pace, Conduct & Disputes</AccordionTrigger>
            <AccordionContent className="text-base text-foreground/80 leading-relaxed pt-2 pb-6">
              Keep pace, keep it moving, and handle disagreements quickly. If a dispute cannot be solved on the spot, note it,
              finish the hole, and elevate it to the Commissioner immediately after the round.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-9">
            <AccordionTrigger className="text-left font-bold text-lg text-primary">9) Tiebreaker</AccordionTrigger>
            <AccordionContent className="text-base text-foreground/80 leading-relaxed pt-2 pb-6">
              If the overall competition ends tied, the first tiebreaker is points won on Day 3. If still tied, the event falls
              to the agreed card-off or a Commissioner-approved playoff format.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
