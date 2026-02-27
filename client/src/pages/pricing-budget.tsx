import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, AlertCircle, PieChart, Users, UserIcon } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function PricingBudget() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-6xl">
      <div className="mb-16 text-center max-w-3xl mx-auto">
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-8">Pricing & Budget</h1>
        <p className="text-2xl text-muted-foreground leading-relaxed">
          Transparent costs to build trust. Because our final numbers depend on how many significant others attend, we've broken down two possible scenarios.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 p-8 bg-secondary/10 rounded-[2rem] border border-secondary/30 mb-16 shadow-lg">
        <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center shrink-0">
          <Users className="w-8 h-8 text-secondary" />
        </div>
        <div>
          <h4 className="font-bold text-xl mb-2 text-primary uppercase tracking-widest">Headcount Impact</h4>
          <p className="text-lg text-foreground/80 leading-relaxed">
            We will always have 12 golfers, but some golfers may come solo and some may bring a significant other. Total headcount changes the shared cost per person. <strong>More SOs attending = lower cost per golfer. Fewer SOs (more solo golfers) = higher cost per golfer.</strong> Final pricing will be confirmed once headcount is locked.
          </p>
        </div>
      </div>

      <Tabs defaultValue="scenario-a" className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 h-14 bg-muted/50 rounded-full p-1">
          <TabsTrigger value="scenario-a" className="rounded-full text-base font-bold data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-md">
            Scenario A: 24 People
          </TabsTrigger>
          <TabsTrigger value="scenario-b" className="rounded-full text-base font-bold data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-md">
            Scenario B: 12 People
          </TabsTrigger>
        </TabsList>

        <TabsContent value="scenario-a" className="mt-0">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl font-bold text-primary mb-3">24-Person Model</h2>
            <p className="text-muted-foreground text-lg uppercase tracking-widest font-medium">12 Golfers + Up to 12 Significant Others</p>
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
                <div className="text-6xl font-bold text-secondary mb-10">$1,100</div>
                <ul className="space-y-4 font-medium text-lg">
                  <li className="flex justify-between border-b border-primary-foreground/20 pb-4">
                    <span className="text-white/80">Shared Costs</span> <span className="font-bold">$663.94</span>
                  </li>
                  <li className="flex justify-between border-b border-primary-foreground/20 pb-4">
                    <span className="text-white/80">Estimated Golf</span> <span className="font-bold">$400.00</span>
                  </li>
                  <li className="flex justify-between text-secondary pt-2 font-bold text-xl">
                    <span>Cushion</span> <span>$36.06</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-2xl bg-white overflow-hidden relative rounded-3xl transform hover:-translate-y-2 transition-transform duration-300">
              <CardContent className="p-12">
                <div className="inline-block px-4 py-2 bg-muted text-muted-foreground font-bold uppercase tracking-widest rounded-full text-xs mb-6">
                  The Gallery
                </div>
                <h3 className="font-serif text-4xl font-bold text-primary mb-4">Non-Golfer Tier</h3>
                <div className="text-6xl font-bold text-primary mb-10">$675</div>
                <ul className="space-y-4 font-medium text-lg text-foreground/80">
                  <li className="flex justify-between border-b border-border pb-4">
                    <span>Shared Costs</span> <span className="text-primary font-bold">$663.94</span>
                  </li>
                  <li className="flex justify-between text-secondary pt-2 font-bold text-xl">
                    <span>Cushion</span> <span>$11.06</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-muted/30 rounded-[2.5rem] p-10 md:p-16 border border-border/50 shadow-inner">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <PieChart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-3xl font-bold text-primary">Shared Cost Breakdown</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-t-primary">
                <div className="text-4xl font-bold text-primary mb-2">$11,561</div>
                <div className="text-sm font-bold text-secondary uppercase tracking-widest mb-4">House Quote</div>
                <p className="text-base text-foreground/70 leading-relaxed">Based on 24 guests. Primary Ryder Cup HQ luxury rental.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-t-primary">
                <div className="text-4xl font-bold text-primary mb-2">$1,974</div>
                <div className="text-sm font-bold text-secondary uppercase tracking-widest mb-4">Transportation</div>
                <p className="text-base text-foreground/70 leading-relaxed">2 passenger vans ($1,740) + Gas Estimate ($233).</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-t-primary">
                <div className="text-4xl font-bold text-primary mb-2">$2,400</div>
                <div className="text-sm font-bold text-secondary uppercase tracking-widest mb-4">Stock-up Fund</div>
                <p className="text-base text-foreground/70 leading-relaxed">$100/person for Costco groceries, drinks, and essentials.</p>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="scenario-b" className="mt-0">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl font-bold text-primary mb-3">Golfers Only Model</h2>
            <p className="text-muted-foreground text-lg uppercase tracking-widest font-medium">12 Golfers / No Significant Others</p>
          </div>

          <Card className="border-4 border-primary bg-primary text-primary-foreground shadow-2xl overflow-hidden relative rounded-3xl mb-12">
            <div className="absolute top-0 right-0 p-6 opacity-10">
              <UserIcon className="w-48 h-48" />
            </div>
            <CardContent className="p-10 md:p-16 relative z-10 flex flex-col md:flex-row items-center md:items-start gap-12">
              <div className="w-full md:w-1/3 text-center md:text-left border-b md:border-b-0 md:border-r border-primary-foreground/20 pb-10 md:pb-0 md:pr-12">
                <h3 className="font-serif text-3xl font-bold mb-4">Target Collection</h3>
                <div className="text-5xl md:text-6xl font-bold text-secondary mb-4">$1,475–<br/>$1,500</div>
                <p className="text-white/80 font-medium uppercase tracking-widest text-sm">Per Golfer (with cushion)</p>
              </div>
              
              <div className="w-full md:w-2/3">
                <h4 className="font-bold text-xl mb-6 text-white uppercase tracking-widest">Estimated Breakdown Per Golfer</h4>
                <ul className="space-y-4 font-medium text-lg">
                  <li className="flex justify-between border-b border-primary-foreground/20 pb-4">
                    <span className="text-white/80">Shared Cost Portion</span> <span className="font-bold">$1,032.38</span>
                  </li>
                  <li className="flex justify-between border-b border-primary-foreground/20 pb-4">
                    <span className="text-white/80">Estimated Golf</span> <span className="font-bold">$400.00</span>
                  </li>
                  <li className="flex justify-between text-secondary pt-2 font-bold text-xl">
                    <span>Total (before cushion)</span> <span>$1,432.38</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <div className="bg-white rounded-[2.5rem] p-10 md:p-16 border border-border/50 shadow-xl">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <PieChart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-3xl font-bold text-primary">Shared Cost Summary</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              <div className="p-6 bg-muted/40 rounded-2xl border border-border">
                <div className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-2">House Quote</div>
                <div className="text-2xl font-bold text-primary">$9,215</div>
                <p className="text-sm text-muted-foreground mt-1">Based on 12 guests</p>
              </div>
              <div className="p-6 bg-muted/40 rounded-2xl border border-border">
                <div className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-2">Transportation</div>
                <div className="text-2xl font-bold text-primary">$1,974</div>
                <p className="text-sm text-muted-foreground mt-1">Vans + Gas</p>
              </div>
              <div className="p-6 bg-muted/40 rounded-2xl border border-border">
                <div className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-2">Stock-up Fund</div>
                <div className="text-2xl font-bold text-primary">$1,200</div>
                <p className="text-sm text-muted-foreground mt-1">$100 per golfer</p>
              </div>
              <div className="p-6 bg-secondary/10 rounded-2xl border border-secondary/30">
                <div className="text-sm font-bold text-secondary uppercase tracking-widest mb-2">Shared Total</div>
                <div className="text-2xl font-bold text-primary">$12,389</div>
                <p className="text-sm text-primary/70 mt-1 font-bold">Divided by 12</p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="mt-16 flex flex-col md:flex-row items-start md:items-center gap-8 p-10 bg-white rounded-[2.5rem] shadow-xl border border-secondary/20 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-4 bg-secondary"></div>
        <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center shrink-0 ml-4">
          <AlertCircle className="w-10 h-10 text-secondary" />
        </div>
        <div>
          <h4 className="font-serif font-bold text-3xl mb-4 text-primary">Why build a cushion?</h4>
          <p className="text-xl text-foreground/80 leading-relaxed max-w-3xl">
            The small cushion provides flexibility for unexpected costs like minor rate increases, parking, or last-minute supplies, ensuring we don't have to nickel-and-dime everyone during the trip.
          </p>
        </div>
      </div>
    </div>
  );
}