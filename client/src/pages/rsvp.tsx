import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ShieldCheck, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export default function Rsvp() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="container mx-auto px-4 py-20 max-w-3xl relative z-10">
      <div className="text-center mb-16 relative z-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary-foreground text-sm font-bold tracking-widest uppercase mb-6">
          <ShieldCheck className="w-4 h-4" />
          Invite Only
        </div>
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6">Founding Group RSVP</h1>
        <p className="text-2xl text-muted-foreground leading-relaxed">
          Spots are being built around our core group responses. Please let us know your intent so we can finalize the house and golf contracts.
        </p>
      </div>

      <Card className="border-none shadow-2xl bg-white overflow-hidden rounded-[2rem] relative z-30 pointer-events-auto">
        <div className="h-3 bg-secondary w-full"></div>
        <CardHeader className="bg-muted/20 border-b border-border p-10">
          <CardTitle className="text-3xl font-serif text-primary mb-3">Commitment Form</CardTitle>
          <CardDescription className="text-lg font-medium text-foreground/70">
            This helps us lock in numbers. Official deposits will be collected after the final headcount.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-10">
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <CheckCircle2 className="w-20 h-20 text-secondary mb-6" />
              <h3 className="font-serif text-3xl font-bold text-primary mb-4">Thanks, your RSVP was sent.</h3>
              <p className="text-lg text-muted-foreground">The Commissioner will be in touch with next steps.</p>
              <Button 
                onClick={() => setStatus("idle")} 
                variant="outline" 
                className="mt-8 uppercase tracking-widest font-bold"
              >
                Submit another response
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* === WEB3FORMS CONFIGURATION === */}
              {/* Paste your Web3Forms Access Key here in the value attribute */}
              <input type="hidden" name="access_key" value="38e4c9ca7e5ec0f2fe5807f17569def1" />
              <input type="hidden" name="subject" value="New Ramstein Ryder Cup RSVP" />
              <input type="hidden" name="from_name" value="Ramstein Ryder Cup Website" />
              {/* ================================= */}

              {status === "error" && (
                <div className="p-4 bg-destructive/10 text-destructive border border-destructive/20 rounded-xl flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <p className="font-medium">Something went wrong submitting your RSVP. Please try again or contact the Commissioner directly.</p>
                </div>
              )}

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

              <Button 
                type="submit" 
                disabled={status === "submitting"}
                className="w-full h-16 text-xl font-bold bg-primary hover:bg-primary/90 text-primary-foreground uppercase tracking-widest mt-4 rounded-xl shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? (
                  <>Sending... <Loader2 className="w-5 h-5 animate-spin" /></>
                ) : (
                  <>Submit RSVP <Send className="w-5 h-5" /></>
                )}
              </Button>
              <p className="text-center text-sm text-muted-foreground mt-6 font-medium">
                Your response is not a binding financial contract yet, but please answer as accurately as possible.
              </p>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}