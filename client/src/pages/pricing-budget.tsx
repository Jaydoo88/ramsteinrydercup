import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, AlertCircle, PieChart, Users } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function PricingBudget() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-6xl">
      <div className="mb-16 text-center max-w-3xl mx-auto">
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-8">Pricing & Budget</h1>
        <p className="text-2xl text-muted-foreground leading-relaxed">
          Transparent costs, a simple payment rhythm, and clear deadlines so everyone knows what to expect before final bookings are locked.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 p-8 bg-secondary/10 rounded-[2rem] border border-secondary/30 mb-8 shadow-lg">
        <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center shrink-0">
          <Users className="w-8 h-8 text-secondary" />
        </div>
        <div>
          <h4 className="font-bold text-xl mb-2 text-primary uppercase tracking-widest">Headcount Impact</h4>
          <p className="text-lg text-foreground/80 leading-relaxed">
            We will have 8 committed golfers, and some golfers may bring a spouse/girlfriend. Total headcount changes the shared cost per person. More spouses/gf attending = lower shared cost per person. Fewer spouses/gf = higher shared cost per person. Final pricing will be confirmed once deposits are collected and headcount is locked.
          </p>
        </div>
      </div>

      <div className="bg-white p-8 rounded-[2rem] border border-border/50 mb-16 shadow-md relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-2 bg-secondary"></div>
        <div className="pl-4">
          <h4 className="font-bold text-lg mb-4 text-primary uppercase tracking-widest">Optional Add-Ons (Not Included)</h4>
          <h5 className="font-serif text-2xl font-bold mb-4">Optional Activities (Significant Others) — <span className="text-secondary">Cost Varies</span></h5>
          <ul className="space-y-3 text-lg text-foreground/80">
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5 shrink-0" /> 
              <span>Optional tee time for spouses/significant others who want to golf (separate from Ryder Cup competition)</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5 shrink-0" /> 
              <span>Optional non-golf activities available for those who prefer a different experience</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5 shrink-0" /> 
              <span>Not included in shared trip costs (activities booked and paid individually)</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5 shrink-0" /> 
              <span>Final cost depends on selected activity and participation</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5 shrink-0" /> 
              <span>Indicate interest on the RSVP form and details will be coordinated</span>
            </li>
          </ul>
          <p className="mt-4 text-sm text-muted-foreground">Example option: Guided horseback trail rides in Cave Creek (scenic Sonoran Desert experience)</p>
        </div>
      </div>

      <Tabs defaultValue="scenario-a" className="w-full">
        <TabsList className="grid w-full max-w-xs mx-auto grid-cols-1 mb-12 h-14 bg-muted/50 rounded-full p-1">
          <TabsTrigger value="scenario-a" className="rounded-full text-base font-bold data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-md">
            Scenario A: 17 People
          </TabsTrigger>
        </TabsList>

        <TabsContent value="scenario-a" className="mt-0">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl font-bold text-primary mb-3">17-Person Model</h2>
            <p className="text-muted-foreground text-lg uppercase tracking-widest font-medium">8 Golfers + Spouses/GF</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            <Card className="border-4 border-primary bg-primary text-primary-foreground shadow-2xl overflow-hidden relative rounded-3xl transform hover:-translate-y-2 transition-transform duration-300">
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <DollarSign className="w-48 h-48" />
              </div>
              <CardContent className="p-12 relative z-10">
                <div className="inline-block px-4 py-2 bg-secondary text-secondary-foreground font-bold uppercase tracking-widest rounded-full text-xs mb-6">
                  The Competitors
                </div>
                <h3 className="font-serif text-4xl font-bold mb-4">Golfer Tier</h3>
                <div className="text-6xl font-bold text-secondary mb-10">$814.66</div>
                <ul className="space-y-4 font-medium text-lg">
                  <li className="flex justify-between border-b border-primary-foreground/20 pb-4">
                    <span className="text-white/80">Shared Costs</span> <span className="font-bold">$414.66</span>
                  </li>
                  <li className="flex justify-between border-b border-primary-foreground/20 pb-4">
                    <span className="text-white/80">Estimated Golf (Separate)</span> <span className="font-bold">$400.00</span>
                  </li>
                  <li className="flex justify-between text-secondary pt-2 font-bold text-xl">
                    <span>Total Estimate</span> <span>$814.66</span>
                  </li>
                </ul>
                <div className="mt-6 space-y-2 text-sm font-medium text-white/75">
                  <p>Est. Shared: ~$104 per person / night (4 nights)</p>
                  <p className="text-xs text-white/60">Includes house + stock-up fund</p>
                  <p className="text-xs text-white/60">Golf estimate reflects 3 days of golf</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-2xl bg-white overflow-hidden relative rounded-3xl transform hover:-translate-y-2 transition-transform duration-300">
              <CardContent className="p-12">
                <div className="inline-block px-4 py-2 bg-muted text-muted-foreground font-bold uppercase tracking-widest rounded-full text-xs mb-6">
                  The Gallery
                </div>
                <h3 className="font-serif text-4xl font-bold text-primary mb-4">Guest Tier</h3>
                <div className="text-6xl font-bold text-primary mb-10">$414.66</div>
                <ul className="space-y-4 font-medium text-lg text-foreground/80">
                  <li className="flex justify-between border-b border-border pb-4">
                    <span>Shared Costs</span> <span className="text-primary font-bold">$414.66</span>
                  </li>
                  <li className="flex justify-between text-secondary pt-2 font-bold text-xl">
                    <span>Golf</span> <span>Not Included</span>
                  </li>
                </ul>
                <div className="mt-6 space-y-2 text-sm font-medium text-foreground/60">
                  <p>Est. Shared: ~$104 per person / night (4 nights)</p>
                  <p className="text-xs text-foreground/50">Includes house + stock-up fund only</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-muted/30 rounded-[2.5rem] p-10 md:p-16 border border-border/50 shadow-inner">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <PieChart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-3xl font-bold text-primary">Shared Cost Breakdown</h3>
            </div>
            <p className="mb-10 text-lg text-foreground/70">Shared total: $7,049.18 • $414.66 per person • ~$104 per person / night</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-t-primary">
                <div className="text-4xl font-bold text-primary mb-2">$5,349.18</div>
                <div className="text-sm font-bold text-secondary uppercase tracking-widest mb-4">House Total (All-In)</div>
                <p className="text-base text-foreground/70 leading-relaxed">4 nights. Taxes and fees included. Shared across all attendees.</p>
                <p className="text-sm text-secondary font-bold mt-3">Per person: $175 due now • $140 due Aug 15</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-t-primary">
                <div className="text-3xl font-bold text-primary mb-2">Transportation</div>
                <div className="text-sm font-bold text-secondary uppercase tracking-widest mb-4">Planning Note</div>
                <p className="text-base text-foreground/70 leading-relaxed">Transportation is not included in shared trip costs. Everyone will arrange their own rides. For planning, PHX to the rental is about 32 miles, and rideshare pricing varies by time/vehicle size. We also expect several vehicles on-site, which helps reduce rideshare needs.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-t-primary">
                <div className="text-4xl font-bold text-primary mb-2">$1,700</div>
                <div className="text-sm font-bold text-secondary uppercase tracking-widest mb-4">Stock-up Fund</div>
                <p className="text-base text-foreground/70 leading-relaxed">$100/person for food, drinks, and shared house essentials (17 people).</p>
                <p className="text-sm text-secondary font-bold mt-3">Due July 17 for alignment</p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="mt-16 p-10 md:p-12 bg-white rounded-[2.5rem] shadow-xl border border-secondary/20 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-4 bg-secondary"></div>
        <div className="pl-4">
          <div className="flex items-center gap-5 mb-8">
            <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center shrink-0">
              <AlertCircle className="w-10 h-10 text-secondary" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-3xl text-primary">Payment Plan & Deadlines</h4>
              <p className="text-lg text-foreground/70 mt-2">Nothing heavy upfront — $175 locks your spot, and everything else is spread out monthly leading up to the trip.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="rounded-2xl border border-border bg-[#FAF9F6] p-6">
              <p className="text-sm font-bold text-secondary uppercase tracking-widest mb-3">House (All Attendees)</p>
              <div className="space-y-3 text-foreground/80">
                <p className="text-lg font-semibold text-primary">Per person: $175 due now — secures your spot</p>
                <p className="text-lg font-semibold text-primary">Per person: $140 due August 15 — remaining house balance</p>
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-[#FAF9F6] p-6">
              <p className="text-sm font-bold text-secondary uppercase tracking-widest mb-3">Golf (Golfers Only — Estimated)</p>
              <div className="space-y-3 text-foreground/80">
                <p className="text-lg font-semibold text-primary">Per golfer: $100 due June 17</p>
                <p className="text-lg font-semibold text-primary">Per golfer: $100 due July 17</p>
                <p className="text-lg font-semibold text-primary">Per golfer: Remaining balance due August 17</p>
                <p className="text-sm text-muted-foreground">Final pricing may adjust slightly based on course rates.</p>
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-[#FAF9F6] p-6">
              <p className="text-sm font-bold text-secondary uppercase tracking-widest mb-3">House Stock-up (All Attendees)</p>
              <div className="space-y-3 text-foreground/80">
                <p className="text-lg font-semibold text-primary">$100 per person</p>
                <p>Covers food, drinks, and shared house essentials.</p>
                <p className="text-lg font-semibold text-primary">Due July 17 for alignment</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-secondary/20 bg-secondary/5 p-6 mb-8">
            <p className="text-sm font-bold text-secondary uppercase tracking-widest mb-3">Commitment Policy</p>
            <ul className="space-y-3 text-lg text-foreground/80">
              <li>Your spot is not confirmed until your first payment is received.</li>
              <li>Payments are non-refundable due to upfront booking commitments.</li>
              <li>Once committed, you are responsible for your share unless a replacement is found.</li>
              <li>Final costs may adjust slightly based on headcount and final bookings.</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-white p-6">
            <p className="text-sm font-bold text-secondary uppercase tracking-widest mb-3">Simple Payment Rhythm</p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
              <div className="rounded-xl bg-muted/40 p-4">
                <p className="text-sm text-muted-foreground">June 17</p>
                <p className="mt-2 font-semibold text-primary">Golf $100</p>
              </div>
              <div className="rounded-xl bg-muted/40 p-4">
                <p className="text-sm text-muted-foreground">July 17</p>
                <p className="mt-2 font-semibold text-primary">Golf $100 + Stock-up $100</p>
              </div>
              <div className="rounded-xl bg-muted/40 p-4">
                <p className="text-sm text-muted-foreground">Aug 15</p>
                <p className="mt-2 font-semibold text-primary">House $140</p>
              </div>
              <div className="rounded-xl bg-muted/40 p-4">
                <p className="text-sm text-muted-foreground">Aug 17</p>
                <p className="mt-2 font-semibold text-primary">Final Golf Balance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}