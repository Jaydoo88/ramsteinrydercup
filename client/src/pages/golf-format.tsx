import { Trophy, Users, ShieldAlert } from "lucide-react";

export default function GolfFormat() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-5xl text-center">
      <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-8">
        <Trophy className="w-10 h-10 text-secondary" />
      </div>
      <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6">Golf Format & Competition</h1>
      <p className="text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-16">
        Team A vs Team B. Captains to be determined. The ultimate desert battle for the inaugural cup.
      </p>
      
      <div className="bg-white p-12 rounded-[2rem] shadow-xl border-t-8 border-primary max-w-3xl mx-auto text-left">
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
    </div>
  );
}