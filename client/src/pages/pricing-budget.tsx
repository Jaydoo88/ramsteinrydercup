import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, AlertCircle, PieChart } from "lucide-react";

export default function PricingBudget() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-6xl">
      <div className="mb-16 text-center max-w-3xl mx-auto">
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-8">Pricing & Budget</h1>
        <p className="text-2xl text-muted-foreground leading-relaxed">
          Transparent costs to build trust. Here is the estimated breakdown for the 2026 founding year based on our 24-person model.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
        <Card className="border-4 border-primary bg-primary text-primary-foreground shadow-2xl overflow-hidden relative rounded-3xl transform hover:-translate-y-2 transition-transform duration-300">
          <div className="absolute top-0 right-0 p-6 opacity-10">
            <DollarSign className="w-48 h-48" />
          </div>
          <CardContent className="p-12 relative z-10">
            <div className="inline-block px-4 py-2 bg-secondary text-secondary-foreground font-bold uppercase tracking-widest rounded-full text-xs mb-6">
              The Competitors
            </div>
            <h2 className="font-serif text-4xl font-bold mb-4">Golfer Tier</h2>
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
            <h2 className="font-serif text-4xl font-bold text-primary mb-4">Non-Golfer Tier</h2>
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

      <div className="bg-muted/30 rounded-[2.5rem] p-10 md:p-16 mb-16 border border-border/50 shadow-inner">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
            <PieChart className="w-8 h-8 text-primary" />
          </div>
          <h2 className="font-serif text-4xl font-bold text-primary">Shared Cost Breakdown</h2>
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
      
      <div className="flex flex-col md:flex-row items-start md:items-center gap-8 p-10 bg-white rounded-[2.5rem] shadow-xl border border-secondary/20 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-4 bg-secondary"></div>
        <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center shrink-0 ml-4">
          <AlertCircle className="w-10 h-10 text-secondary" />
        </div>
        <div>
          <h4 className="font-serif font-bold text-3xl mb-4 text-primary">Why build a cushion?</h4>
          <p className="text-xl text-foreground/80 leading-relaxed max-w-3xl">
            The small cushion ($36 for golfers, $11 for non-golfers) provides flexibility for unexpected costs like minor rate increases, parking, or last-minute supplies, ensuring we don't have to nickel-and-dime everyone during the trip.
          </p>
        </div>
      </div>
    </div>
  );
}