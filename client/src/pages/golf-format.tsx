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
        <Button variant="outline" className="gap-2 font-bold uppercase tracking-widest bg-white border-primary/20 hover:bg-primary/5">
          <Download className="w-4 h-4" />
          Download Full Rules
        </Button>
      </div>
      
      <div className="bg-white p-12 rounded-[2rem] shadow-xl border-t-8 border-primary max-w-3xl mx-auto text-left mb-20">
        <h2 className="font-serif text-3xl font-bold text-primary mb-6">Format Overview</h2>
        <ul className="space-y-6 text-lg text-foreground/80 mb-10">
          <li className="flex items-start gap-4">
            <Users className="w-6 h-6 text-secondary shrink-0 mt-1" />
            <span>Two teams of 6 golfers battling over 3 days of Ryder Cup style match play.</span>
          </li>
          <li className="flex items-start gap-4">
            <ShieldAlert className="w-6 h-6 text-secondary shrink-0 mt-1" />
            <span>Courses and tee times are currently TBD based on final budget and availability.</span>
          </li>
          <li className="flex items-start gap-4">
            <Trophy className="w-6 h-6 text-secondary shrink-0 mt-1" />
            <span>Daily recaps, awards, and evening ceremonies at the HQ.</span>
          </li>
        </ul>
        <div className="p-6 bg-muted/30 rounded-xl text-center border border-border">
          <p className="font-bold text-primary uppercase tracking-widest">More details coming soon</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto text-left">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-8 text-center">Official Rules & Procedures (2026 Founding Year)</h2>
        
        <div className="bg-white rounded-[2rem] shadow-xl p-6 md:p-10 border border-border/50">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left font-bold text-lg text-primary">1) Purpose & Spirit</AccordionTrigger>
              <AccordionContent className="text-base text-foreground/80 leading-relaxed pt-2 pb-6">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Establish a competitive but deeply enjoyable annual tradition.</li>
                  <li>Balance intense golf with camaraderie and respect.</li>
                  <li>"The spirit of the game" dictates all actions on and off the course.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left font-bold text-lg text-primary">2) Leadership & Authority</AccordionTrigger>
              <AccordionContent className="text-base text-foreground/80 leading-relaxed pt-2 pb-6">
                <ul className="list-disc pl-6 space-y-2">
                  <li>The Commissioner oversees scheduling, finances, and overarching structure.</li>
                  <li>Captains manage their respective teams, pairings, and on-course disputes.</li>
                  <li>The Commissioner's ruling is final on all matters not resolved by Captains.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left font-bold text-lg text-primary">3) Schedule Overview (Tentative)</AccordionTrigger>
              <AccordionContent className="text-base text-foreground/80 leading-relaxed pt-2 pb-6">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Day 1: Arrival, Practice Round / Scramble, Draft Night.</li>
                  <li>Day 2: Morning Matches (Format TBD), Afternoon Matches (Format TBD).</li>
                  <li>Day 3: Morning Matches (Format TBD), Afternoon Matches (Format TBD).</li>
                  <li>Day 4: Singles Matches, Closing Ceremonies, Trophy Presentation.</li>
                  <li>Day 5: Departure.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left font-bold text-lg text-primary">4) Teams & Player Tiers</AccordionTrigger>
              <AccordionContent className="text-base text-foreground/80 leading-relaxed pt-2 pb-6">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Two teams of 6 players each (Team A vs. Team B).</li>
                  <li>Players are categorized into tiers based on verifiable handicaps or estimated skill levels.</li>
                  <li>Tiers ensure competitive balance during the Draft and Match Play.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left font-bold text-lg text-primary">5) Draft Procedure</AccordionTrigger>
              <AccordionContent className="text-base text-foreground/80 leading-relaxed pt-2 pb-6">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Captains will be selected prior to the event.</li>
                  <li>A snake draft format will be utilized to select teams from the established Player Tiers.</li>
                  <li>Draft order is determined by a coin flip or similar random method.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left font-bold text-lg text-primary">6) Competition Format & Points</AccordionTrigger>
              <AccordionContent className="text-base text-foreground/80 leading-relaxed pt-2 pb-6">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Points are awarded for each match: 1 point for a win, 0.5 points for a tie, 0 points for a loss.</li>
                  <li>The first team to reach the designated point threshold wins the Cup.</li>
                  <li>In the event of a tie at the end of all matches, a sudden-death playoff or tiebreaker method will determine the winner.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger className="text-left font-bold text-lg text-primary">7) Daily Match Formats</AccordionTrigger>
              <AccordionContent className="text-base text-foreground/80 leading-relaxed pt-2 pb-6">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Formats may include: Four-Ball (Best Ball), Foursomes (Alternate Shot), Scramble, and Singles.</li>
                  <li>Specific formats for each session will be finalized and announced prior to the event.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger className="text-left font-bold text-lg text-primary">8) Pairings Rules (Critical)</AccordionTrigger>
              <AccordionContent className="text-base text-foreground/80 leading-relaxed pt-2 pb-6">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Captains must submit their pairings blindly before each session.</li>
                  <li>No player can play with the same partner more than twice (unless required by team size/format).</li>
                  <li>All players must participate in every session unless sidelined by injury or approved absence.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9">
              <AccordionTrigger className="text-left font-bold text-lg text-primary">9) Scoring & Scorekeeping</AccordionTrigger>
              <AccordionContent className="text-base text-foreground/80 leading-relaxed pt-2 pb-6">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Match Play scoring applies (up/down/halved holes).</li>
                  <li>One player from each group is designated as the official scorekeeper for the match.</li>
                  <li>Scores must be verified and agreed upon by both teams after each hole and at the conclusion of the match.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10">
              <AccordionTrigger className="text-left font-bold text-lg text-primary">10) Relief & OB Event Rules (Captain-Controlled)</AccordionTrigger>
              <AccordionContent className="text-base text-foreground/80 leading-relaxed pt-2 pb-6">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Standard USGA rules apply for relief and Out of Bounds unless modified by local rules.</li>
                  <li>Specific "Event Rules" (e.g., gallery drops, specific hazard relief) must be agreed upon by Captains prior to the round.</li>
                  <li>Any disputes regarding relief or OB must be handled by the Captains or Commissioner.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-11">
              <AccordionTrigger className="text-left font-bold text-lg text-primary">11) Tees, Mulligans, Gimmies</AccordionTrigger>
              <AccordionContent className="text-base text-foreground/80 leading-relaxed pt-2 pb-6">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Tee boxes are assigned based on Player Tiers or handicap to ensure fair play.</li>
                  <li>NO mulligans are allowed in official matches.</li>
                  <li>"Gimmies" (conceded putts) are at the strict discretion of the opposing team. Do not assume a putt is conceded.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-12">
              <AccordionTrigger className="text-left font-bold text-lg text-primary">12) Pace of Play</AccordionTrigger>
              <AccordionContent className="text-base text-foreground/80 leading-relaxed pt-2 pb-6">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Maintain pace with the group ahead.</li>
                  <li>Ready golf is highly encouraged where it does not interfere with the format.</li>
                  <li>Maximum time per shot (e.g., 3 minutes for lost ball search) should be strictly observed.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-13">
              <AccordionTrigger className="text-left font-bold text-lg text-primary">13) Disputes & Rules Hierarchy</AccordionTrigger>
              <AccordionContent className="text-base text-foreground/80 leading-relaxed pt-2 pb-6">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Players involved attempt to resolve first.</li>
                  <li>If unresolved, consult the respective Captains.</li>
                  <li>If Captains cannot agree, the Commissioner makes the final ruling.</li>
                  <li>Play two balls if unsure (stroke play only) or note the dispute and continue play in match play until a ruling can be made.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-14">
              <AccordionTrigger className="text-left font-bold text-lg text-primary">14) Sportsmanship & Conduct</AccordionTrigger>
              <AccordionContent className="text-base text-foreground/80 leading-relaxed pt-2 pb-6">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Trash talk is expected and encouraged; personal attacks are not.</li>
                  <li>Respect the course, the staff, and the local patrons.</li>
                  <li>Unsportsmanlike conduct may result in point deductions or disqualification at the Commissioner's discretion.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-15">
              <AccordionTrigger className="text-left font-bold text-lg text-primary">15) Tiebreakers</AccordionTrigger>
              <AccordionContent className="text-base text-foreground/80 leading-relaxed pt-2 pb-6">
                <ul className="list-disc pl-6 space-y-2">
                  <li>If the overall score is tied after all matches, the Cup is retained by the defending champions (for future years) or determined by a sudden-death playoff (Year 1).</li>
                  <li>Playoff format: TBD (e.g., Captains pick one player for a sudden-death hole).</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-16">
              <AccordionTrigger className="text-left font-bold text-lg text-primary">16) Weather / Absences / Substitutions</AccordionTrigger>
              <AccordionContent className="text-base text-foreground/80 leading-relaxed pt-2 pb-6">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Play continues in inclement weather unless the course closes or the Commissioner deems it unsafe.</li>
                  <li>If a player is injured or absent, their matches may be forfeited, or a pre-approved substitute may be utilized.</li>
                  <li>Captains and Commissioner will manage substitutions to maintain competitive balance.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-17">
              <AccordionTrigger className="text-left font-bold text-lg text-primary">17) Awards & Trophy</AccordionTrigger>
              <AccordionContent className="text-base text-foreground/80 leading-relaxed pt-2 pb-6">
                <ul className="list-disc pl-6 space-y-2">
                  <li>The winning team receives the Cup and eternal bragging rights.</li>
                  <li>Individual awards (e.g., MVP, Best Shot, Most Improved) may be presented at the closing ceremonies.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}