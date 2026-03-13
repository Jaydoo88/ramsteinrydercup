import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { CheckCircle2, AlertCircle, Loader2, Send } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Rsvp() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Using standard snake_case column names that are typical for Supabase
    const data = {
      name: formData.get("Name"),
      golfing: formData.get("Golfing"),
      bringing_so: formData.get("Bringing_SO"),
      so_name: formData.get("SO_Name") || null,
      likelihood: formData.get("Likelihood"),
      notes: formData.get("Notes") || null,
      created_at: new Date().toISOString()
    };

    try {
      const { error, status: responseStatus } = await supabase
        .from('rsvp_submissions')
        .insert([data]);

      if (error) {
        console.error("Supabase insert error:", error, "Status:", responseStatus);
        setErrorMessage(error.message || "Failed to submit. Please try again.");
        setStatus("error");
      } else {
        setStatus("success");
        form.reset();
      }
    } catch (err: any) {
      console.error("Unexpected error submitting RSVP:", err);
      setErrorMessage(err.message || "An unexpected error occurred.");
      setStatus("error");
    }
  }

  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl relative z-10">
      <div className="text-center mb-10 relative z-20">
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6">Founding Group RSVP</h1>
        <p className="text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          Spots are being built around our core group responses. Please let us know your intent so we can finalize the house and golf contracts.
        </p>
      </div>

      <Card className="border-none shadow-2xl bg-white overflow-hidden rounded-[2rem] relative z-30 pointer-events-auto border border-border/50">
        <div className="h-3 bg-secondary w-full"></div>
        <CardHeader className="bg-muted/10 border-b border-border p-10">
          <CardTitle className="text-3xl font-serif text-primary mb-3">Commitment Form</CardTitle>
          <CardDescription className="text-lg font-medium text-foreground/70">
            This helps us lock in numbers. Official deposits will be collected after the final headcount.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-10 bg-white">
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
              {status === "error" && (
                <div className="p-4 bg-destructive/10 text-destructive border border-destructive/20 rounded-xl flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <p className="font-medium">{errorMessage}</p>
                </div>
              )}

              <div className="space-y-3">
                <label className="text-sm font-bold text-primary uppercase tracking-widest">Full Name</label>
                <input name="Name" required type="text" className="w-full p-4 text-lg rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-secondary transition-all" placeholder="John Doe" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-sm font-bold text-primary uppercase tracking-widest">Are you golfing?</label>
                  <select name="Golfing" required className="w-full p-4 text-lg rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-secondary transition-all appearance-none cursor-pointer">
                    <option value="" disabled selected>Select an option...</option>
                    <option value="Yes, I'm playing">Yes, I'm playing</option>
                    <option value="No, just hanging out">No, just hanging out</option>
                  </select>
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold text-primary uppercase tracking-widest">Bringing an S.O.?</label>
                  <select name="Bringing_SO" required className="w-full p-4 text-lg rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-secondary transition-all appearance-none cursor-pointer">
                    <option value="" disabled selected>Select an option...</option>
                    <option value="Yes (Definite)">Yes (Definite)</option>
                    <option value="Maybe (Need to check)">Maybe (Need to check)</option>
                    <option value="No (Flying solo)">No (Flying solo)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-bold text-primary uppercase tracking-widest">Significant Other's Name (if applicable)</label>
                <input name="SO_Name" type="text" className="w-full p-4 text-lg rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-secondary transition-all" placeholder="Jane Doe" />
              </div>

              <div className="space-y-3">
                <label className="text-sm font-bold text-primary uppercase tracking-widest">Likelihood of Attending</label>
                <select name="Likelihood" required className="w-full p-4 text-lg rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-secondary transition-all appearance-none cursor-pointer">
                  <option value="" disabled selected>Select an option...</option>
                  <option value="100% Definite - I'm in.">100% Definite - I'm in.</option>
                  <option value="Likely - Checking dates/PTO.">Likely - Checking dates/PTO.</option>
                  <option value="Maybe - Need more info.">Maybe - Need more info.</option>
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
