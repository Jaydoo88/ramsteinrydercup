import { Trophy, Users, ShieldAlert, Download } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export default function GolfFormat() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-5xl text-center">
      <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-8">
        <Trophy className="w-10 h-10 text-secondary" />
      </div>
      <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6">Golf Format & Competition</h1>
      <p className="text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-10">
        Team A vs Team B. Captains to be determined. The ultimate desert battle for the inaugural cup.
      </p>

      <div className="flex justify-center mb-16">
        <Button asChild variant="outline" className="gap-2 font-bold uppercase tracking-widest bg-white border-primary/20 hover:bg-primary/5">
          <a href="/docs/Ramstein-Ryder-Cup-Rules-2026.pdf" target="_blank" rel="noopener noreferrer">
            <Download className="w-4 h-4" />
            Download Full Rules
          </a>
        </Button>
      </div>
      
      <div className="bg-white p-12 rounded-[2rem] shadow-xl border-t-8 border-primary max-w-3xl mx-auto text-left mb-12">
        <h2 className="font-serif text-3xl font-bold text-primary mb-6">Format Overview</h2>
        <ul className="space-y-6 text-lg text-foreground/80">
          <li className="flex items-start gap-4">
            <Users className="w-6 h-6 text-secondary shrink-0 mt-1" />
            <span>Two teams of 4 golfers (Team A vs Team B), drafted on Welcome Day.</span>
          </li>
          <li className="flex items-start gap-4">
            <ShieldAlert className="w-6 h-6 text-secondary shrink-0 mt-1" />
            <span>Three competition days (Sept 17–19) with 2 matches per day.</span>
          </li>
          <li className="flex items-start gap-4">
            <Trophy className="w-6 h-6 text-secondary shrink-0 mt-1" />
            <span>Match play scoring: 18 points per match (1 point per hole) &rarr; 36 points/day &rarr; 108 total points.</span>
          </li>
        </ul>
      </div>

      <div className="bg-white p-12 rounded-[2rem] shadow-xl border-t-8 border-secondary max-w-3xl mx-auto text-left mb-20">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center shrink-0">
            <span className="text-2xl" role="img" aria-label="Female Golfer">🏌️‍♀️</span>
          </div>
          <h2 className="font-serif text-3xl font-bold text-primary">Ladies Event (Significant Others) — Optional Activities</h2>
        </div>
        <p className="text-lg text-foreground/80 mb-6">
          An optional experience for significant others who want to participate during the trip — whether that means golfing or enjoying a non-golf activity. This is completely separate from the main Ryder Cup competition rounds.
        </p>
        <ul className="space-y-4 text-lg text-foreground/80">
          <li className="flex items-start gap-4">
            <div className="w-2 h-2 rounded-full bg-secondary mt-2.5 shrink-0" />
            <span>Casual golf round or scramble option depending on interest</span>
          </li>
          <li className="flex items-start gap-4">
            <div className="w-2 h-2 rounded-full bg-secondary mt-2.5 shrink-0" />
            <span>Choice of 9 or 18 holes based on preference</span>
          </li>
          <li className="flex items-start gap-4">
            <div className="w-2 h-2 rounded-full bg-secondary mt-2.5 shrink-0" />
            <span>Cost is separate from the Ryder Cup golfer budget</span>
          </li>
          <li className="flex items-start gap-4">
            <div className="w-2 h-2 rounded-full bg-secondary mt-2.5 shrink-0" />
            <span>Sign-up by indicating interest on the RSVP form</span>
          </li>
        </ul>

        <div className="my-8 h-px bg-border/80" />

        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center shrink-0">
              <span className="text-xl" role="img" aria-label="Horseback riding">🐎</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-primary">Not golfing? No problem.</h3>
          </div>
          <p className="text-lg text-foreground/80 leading-relaxed">
            For those who prefer a break from golf, Friday is a great opportunity to enjoy something different. One recommended option is a guided horseback trail ride in Cave Creek, offering a scenic Sonoran Desert experience and a fun alternative to the course.
          </p>
          <ul className="space-y-3 text-base text-foreground/65">
            <li className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-primary/50 mt-2 shrink-0" />
              <span>Multiple ride options available (1 hour, 1.5 hour, sunset, and longer scenic rides)</span>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-primary/50 mt-2 shrink-0" />
              <span>Beginner-friendly with guided, walking trail rides through the Sonoran Desert</span>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-primary/50 mt-2 shrink-0" />
              <span>Pricing typically ranges from ~$79 to $179+ per person depending on ride length</span>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-primary/50 mt-2 shrink-0" />
              <span>1.5-hour ride is one of the most popular and best overall experiences</span>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-primary/50 mt-2 shrink-0" />
              <span>Arrival required 30 minutes before scheduled ride time</span>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-primary/50 mt-2 shrink-0" />
              <span>Located inside Cave Creek Regional Park (small vehicle entry fee applies)</span>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-primary/50 mt-2 shrink-0" />
              <span>Rider weight limit: 230 lbs for safety reasons</span>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-primary/50 mt-2 shrink-0" />
              <span>Reservations are strongly recommended to secure spots</span>
            </li>
          </ul>
          <div className="pt-3">
            <Button asChild variant="outline" className="gap-2 font-bold uppercase tracking-widest bg-white border-primary/20 hover:bg-primary/5">
              <a href="https://www.cavecreektrailrides.com/" target="_blank" rel="noopener noreferrer">
                View Trail Ride Option
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto text-left">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-8 text-center">Official Competition Rules (2026 Founding Year)</h2>
        
        <div className="bg-white rounded-[2rem] shadow-xl p-6 md:p-10 border border-border/50">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left font-bold text-lg text-primary">1) Teams, Tiers & Draft</AccordionTrigger>
              <AccordionContent className="text-base text-foreground/80 leading-relaxed pt-2 pb-6">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Two teams of 4 golfers, with a 1A, 1B, 1C, and 1D player on each team.</li>
                  <li>Two women’s teams of 3 golfers, (Team A and Team B) will also be drafted for the event.</li>
                  <li>Commissioner assigns 1A / 1B / 1C / 1D tiers prior to the event.</li>
                  <li>Draft takes place on Welcome Day.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left font-bold text-lg text-primary">2) Match Formats by Day</AccordionTrigger>
              <AccordionContent className="text-base text-foreground/80 leading-relaxed pt-2 pb-6">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Day 1: 2-Man Scramble (Team Matches).</li>
                  <li>Day 2: 2-Man Scramble (Team Matches).</li>
                  <li>Day 3: Couples Scramble (Final Day Format).</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left font-bold text-lg text-primary">3) Points System</AccordionTrigger>
              <AccordionContent className="text-base text-foreground/80 leading-relaxed pt-2 pb-6">
                <ul className="list-disc pl-6 space-y-2">
                  <li>18 points available per match.</li>
                  <li>Day 1: 2 matches, 36 points total.</li>
                  <li>Day 2: 2 matches, 36 points total.</li>
                  <li>Day 3: 3 matches, 54 points total.</li>
                  <li>126 total competition points for the tournament.</li>
                  <li>Hole scoring: 1 point for a win, 0.5 points for a tie, 0 points for a loss.</li>
                  <li>Women’s matches: 5 bonus points available per day on Day 1 and Day 2, awarded to the men’s team aligned with the winning women’s team.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left font-bold text-lg text-primary">4) Pairings & Fairness Rules</AccordionTrigger>
              <AccordionContent className="text-base text-foreground/80 leading-relaxed pt-2 pb-6">
                <ul className="list-disc pl-6 space-y-2">
                  <li>No repeat partners throughout the event.</li>
                  <li>Pairings follow a tier-based rotation system: AB / CD (Day 1), AD / BC (Day 2), AC / BD (Day 3).</li>
                  <li>Each team consists of one A, B, C, and D player to ensure balanced competition.</li>
                  <li>Like-for-like matchups are maintained across opposing teams.</li>
                  <li>Any exceptions require approval from both captains and the Commissioner.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left font-bold text-lg text-primary">5) Scorekeeping & Match Cards</AccordionTrigger>
              <AccordionContent className="text-base text-foreground/80 leading-relaxed pt-2 pb-6">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Men’s matches: The opposing team keeps your score.</li>
                  <li>Women’s matches (Day 1 & Day 2): Each women’s team will keep their own score.</li>
                  <li>Scores must be tracked hole-by-hole.</li>
                  <li>All match cards must be verified at the end of the round.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left font-bold text-lg text-primary">6) Relief & OB Event Rules</AccordionTrigger>
              <AccordionContent className="text-base text-foreground/80 leading-relaxed pt-2 pb-6">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Relief rules are controlled by the captains.</li>
                  <li>No special relief rules for OB beyond pace-of-play procedures.</li>
                  <li>Players may take relief within one club length (left, right, or back), no closer to the hole.</li>
                  <li>OB is treated as a lateral drop for pace of play with a 2-stroke penalty.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger className="text-left font-bold text-lg text-primary">7) Tees, Mulligans, Concessions</AccordionTrigger>
              <AccordionContent className="text-base text-foreground/80 leading-relaxed pt-2 pb-6">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Players must play from their designated tees.</li>
                  <li>Zero mulligans allowed.</li>
                  <li>Putts can only be conceded by the opposing team.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger className="text-left font-bold text-lg text-primary">8) Pace, Disputes & Conduct</AccordionTrigger>
              <AccordionContent className="text-base text-foreground/80 leading-relaxed pt-2 pb-6">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Strict 3-minute limit for lost ball searches.</li>
                  <li>Disputes must result in quick rulings; note the dispute and move on if unresolved.</li>
                  <li>Maintain sportsmanship at all times.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9">
              <AccordionTrigger className="text-left font-bold text-lg text-primary">9) Tiebreaker</AccordionTrigger>
              <AccordionContent className="text-base text-foreground/80 leading-relaxed pt-2 pb-6">
                <ul className="list-disc pl-6 space-y-2">
                  <li>First tiebreaker: Total points won on Day 3.</li>
                  <li>Second tiebreaker: Card-off procedure.</li>
                  <li>If still tied: Teams are declared co-champs, or captains may agree to a sudden-death contest.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}