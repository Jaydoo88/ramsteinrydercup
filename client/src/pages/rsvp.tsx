import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ShieldCheck, Send } from "lucide-react";

export default function Rsvp() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-3xl">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary-foreground text-sm font-bold tracking-widest uppercase mb-6">
          <ShieldCheck className="w-4 h-4" />
          Invite Only
        </div>
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6">Founding Group RSVP</h1>
        <p className="text-2xl text-muted-foreground leading-relaxed">
          Spots are being built around our core group responses. Please let us know your intent so we can finalize the house and golf contracts.
        </p>
      </div>

      <Card className="border-none shadow-2xl bg-white overflow-hidden rounded-[2rem]">
        <div className="h-3 bg-secondary w-full"></div>
        <CardHeader className="bg-muted/20 border-b border-border p-10">
          <CardTitle className="text-3xl font-serif text-primary mb-3">Commitment Form</CardTitle>
          <CardDescription className="text-lg font-medium text-foreground/70">
            This helps us lock in numbers. Official deposits will be collected after the final headcount.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-10">
          <form action="mailto:jasondousharm@gmail.com?subject=Ramstein Ryder Cup RSVP" method="post" encType="text/plain" className="space-y-8">
            <div className="space-y-3">
              <label className="text-sm font-bold text-primary uppercase tracking-widest">Full Name</label>
              <input name="Name" required type="text" className="w-full p-4 text-lg rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-secondary transition-all" placeholder="John Doe" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-sm font-bold text-primary uppercase tracking-widest">Are you golfing?</label>
                <select name="Golfing" className="w-full p-4 text-lg rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-secondary transition-all">
                  <option>Yes, I'm playing</option>
                  <option>No, just hanging out</option>
                </select>
              </div>
              <div className="space-y-3">
                <label className="text-sm font-bold text-primary uppercase tracking-widest">Bringing an S.O.?</label>
                <select name="Bringing_SO" className="w-full p-4 text-lg rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-secondary transition-all">
                  <option>Yes (Definite)</option>
                  <option>Maybe (Need to check)</option>
                  <option>No (Flying solo)</option>
                </select>
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-sm font-bold text-primary uppercase tracking-widest">Significant Other's Name (if applicable)</label>
              <input name="SO_Name" type="text" className="w-full p-4 text-lg rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-secondary transition-all" placeholder="Jane Doe" />
            </div>

            <div className="space-y-3">
              <label className="text-sm font-bold text-primary uppercase tracking-widest">Likelihood of Attending</label>
              <select name="Likelihood" className="w-full p-4 text-lg rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-secondary transition-all">
                <option>100% Definite - I'm in.</option>
                <option>Likely - Checking dates/PTO.</option>
                <option>Maybe - Need more info.</option>
              </select>
            </div>

            <div className="space-y-3">
              <label className="text-sm font-bold text-primary uppercase tracking-widest">Any notes for the Commissioner?</label>
              <textarea name="Notes" className="w-full p-4 text-lg rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-secondary transition-all h-32 resize-none" placeholder="Flight preferences, dietary restrictions, etc." />
            </div>

            <Button type="submit" className="w-full h-16 text-xl font-bold bg-primary hover:bg-primary/90 text-primary-foreground uppercase tracking-widest mt-4 rounded-xl shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3">
              Submit RSVP <Send className="w-5 h-5" />
            </Button>
            <p className="text-center text-sm text-muted-foreground mt-6 font-medium">
              Your response is not a binding financial contract yet, but please answer as accurately as possible.
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}