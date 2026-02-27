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
      
      <div className="bg-white p-12 rounded-[2rem] shadow-xl border-t-8 border-primary max-w-3xl mx-auto text-left mb-20">
        <h2 className="font-serif text-3xl font-bold text-primary mb-6">Format Overview</h2>
        <ul className="space-y-6 text-lg text-foreground/80">
          <li className="flex items-start gap-4">
            <Users className="w-6 h-6 text-secondary shrink-0 mt-1" />
            <span>Two teams of 6 golfers (Team A vs Team B), drafted on Welcome Day.</span>
          </li>
          <li className="flex items-start gap-4">
            <ShieldAlert className="w-6 h-6 text-secondary shrink-0 mt-1" />
            <span>Three competition days (Sept 17–19 tentative) with 3 matches per day.</span>
          </li>
          <li className="flex items-start gap-4">
            <Trophy className="w-6 h-6 text-secondary shrink-0 mt-1" />
            <span>Match play scoring: 18 points per match (1 point per hole) &rarr; 54 points/day &rarr; 162 total points.</span>
          </li>
        </ul>
      </div>

      <div className="max-w-3xl mx-auto text-left">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-8 text-center">Official Competition Rules (2026 Founding Year)</h2>
        
        <div className="bg-white rounded-[2rem] shadow-xl p-6 md:p-10 border border-border/50">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left font-bold text-lg text-primary">1) Teams, Tiers & Draft</AccordionTrigger>
              <AccordionContent className="text-base text-foreground/80 leading-relaxed pt-2 pb-6">
                <ul className="list-disc pl-6 space-y-2">
                  <li>2A / 2B / 2C tier structure per team.</li>
                  <li>Commissioner assigns tiers prior to the event.</li>
                  <li>Draft takes place on Welcome Day.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left font-bold text-lg text-primary">2) Match Formats by Day</AccordionTrigger>
              <AccordionContent className="text-base text-foreground/80 leading-relaxed pt-2 pb-6">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Day 1: Scramble.</li>
                  <li>Day 2: Alternate Shot (with odd/even tee rule).</li>
                  <li>Day 3: Best Ball.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left font-bold text-lg text-primary">3) Points System</AccordionTrigger>
              <AccordionContent className="text-base text-foreground/80 leading-relaxed pt-2 pb-6">
                <ul className="list-disc pl-6 space-y-2">
                  <li>18 points available per match.</li>
                  <li>54 points available per day.</li>
                  <li>162 total points for the tournament.</li>
                  <li>Hole scoring: 1 point for a win, 0.5 points for a tie, 0 points for a loss.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left font-bold text-lg text-primary">4) Pairings & Fairness Rules</AccordionTrigger>
              <AccordionContent className="text-base text-foreground/80 leading-relaxed pt-2 pb-6">
                <ul className="list-disc pl-6 space-y-2">
                  <li>No repeat partners throughout the event.</li>
                  <li>Tier Pairing Day forces AA / BB / CC pairings.</li>
                  <li>Like-for-like matchups are prioritized.</li>
                  <li>Any exceptions require approval from both captains and the Commissioner.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left font-bold text-lg text-primary">5) Scorekeeping & Match Cards</AccordionTrigger>
              <AccordionContent className="text-base text-foreground/80 leading-relaxed pt-2 pb-6">
                <ul className="list-disc pl-6 space-y-2">
                  <li>The opposing team keeps your score.</li>
                  <li>Scores must be tracked hole-by-hole.</li>
                  <li>Both teams must verify the final match card at the end of the round.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left font-bold text-lg text-primary">6) Relief & OB Event Rules</AccordionTrigger>
              <AccordionContent className="text-base text-foreground/80 leading-relaxed pt-2 pb-6">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Relief rules are controlled by the captains.</li>
                  <li>Default rule (if active): B-tier plays as 3, C-tier plays as 5.</li>
                  <li>OB is treated as a lateral hazard (pace procedure) unless changed by captains.</li>
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