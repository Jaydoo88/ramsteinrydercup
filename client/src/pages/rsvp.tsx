import { useState, useEffect, useRef } from "react";
import { supabase } from "@/lib/supabase";
import { CheckCircle2, AlertCircle, Loader2, Send } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Rsvp() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const formContainerRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (status === "success") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [status]);

  // Form State
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isGolfer, setIsGolfer] = useState<boolean | null>(null);
  const [bringingSo, setBringingSo] = useState<"no" | "likely" | "definite" | null>(null);
  const [soName, setSoName] = useState("");
  const [soLadiesGolfInterest, setSoLadiesGolfInterest] = useState<"yes" | "maybe" | "no" | null>(null);
  const [likelihood, setLikelihood] = useState<"definite" | "likely" | "fifty_fifty" | "not_sure" | null>(null);
  const [notes, setNotes] = useState("");
  const [honeypot, setHoneypot] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    
    // Honeypot check for spam prevention
    if (honeypot) {
      // Silently succeed for bots
      setStatus("success");
      return;
    }

    if (isGolfer === null || bringingSo === null || likelihood === null) {
      setErrorMessage("Please complete all multiple-choice questions.");
      setStatus("error");
      return;
    }

    if (bringingSo !== "no") {
      if (!soName.trim()) {
        setErrorMessage("Please provide your significant other's name.");
        setStatus("error");
        return;
      }
      if (!soLadiesGolfInterest) {
        setErrorMessage("Please indicate your significant other's interest in the optional ladies golf round.");
        setStatus("error");
        return;
      }
    }

    setStatus("submitting");
    
    const data = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone: phone || null,
      is_golfer: isGolfer,
      bringing_so: bringingSo,
      so_name: bringingSo !== "no" ? soName : null,
      so_ladies_golf_interest: bringingSo !== "no" ? soLadiesGolfInterest : null,
      attendance_likelihood: likelihood,
      notes: notes || null,
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
        // Clear form
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setIsGolfer(null);
        setBringingSo(null);
        setSoName("");
        setSoLadiesGolfInterest(null);
        setLikelihood(null);
        setNotes("");
      }
    } catch (err: any) {
      console.error("Unexpected error submitting RSVP:", err);
      setErrorMessage(err.message || "An unexpected error occurred.");
      setStatus("error");
    }
  }

  // Helper component for segmented toggles
  const SegmentedControl = ({ 
    options, 
    value, 
    onChange 
  }: { 
    options: { label: string; value: any }[], 
    value: any, 
    onChange: (val: any) => void 
  }) => (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          onClick={() => onChange(opt.value)}
          className={`px-4 py-3 rounded-xl border font-medium transition-all flex-1 text-center min-w-[120px] ${
            value === opt.value
              ? "bg-secondary text-secondary-foreground border-secondary shadow-md"
              : "bg-background border-input hover:border-secondary/50 text-foreground/80 hover:bg-secondary/5"
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-20 relative z-10 max-w-4xl" ref={formContainerRef}>
      <div className="text-center mb-10 relative z-20">
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6">Founding Group RSVP</h1>
        <p className="text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          Spots are being built around our core group responses. Please let us know your intent so we can finalize the house and golf contracts.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Card className="border-none shadow-2xl bg-white overflow-hidden rounded-[2rem] relative z-30 pointer-events-auto border border-border/50">
          <div className="h-3 bg-secondary w-full"></div>
          
          <CardHeader className="bg-[#FAF9F6] border-b border-border p-8 md:p-12">
            <CardTitle className="text-3xl font-serif text-primary mb-3">Commitment Form</CardTitle>
            <CardDescription className="text-lg font-medium text-foreground/70">
              This helps us lock in numbers. No payment is required today.
            </CardDescription>
          </CardHeader>
          
          <CardContent className="p-8 md:p-12 bg-white">
            {status === "success" ? (
              <div ref={successRef} className="flex flex-col items-center justify-center py-16 text-center animate-in fade-in zoom-in duration-500">
                <div className="w-24 h-24 bg-secondary/10 rounded-full flex items-center justify-center mb-8">
                  <CheckCircle2 className="w-12 h-12 text-secondary" />
                </div>
                <h3 className="font-serif text-4xl font-bold text-primary mb-4">You're on the list!</h3>
                <p className="text-xl text-muted-foreground max-w-md mb-10">
                  Thanks for submitting your RSVP. The Commissioner will be in touch soon with the next steps and deposit details.
                </p>
                <Button 
                  onClick={() => setStatus("idle")} 
                  variant="outline" 
                  className="h-14 px-8 rounded-xl uppercase tracking-widest font-bold border-secondary/20 hover:bg-secondary/10 hover:text-secondary transition-colors"
                >
                  Submit another response
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                {/* Honeypot field - hidden from real users */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    tabIndex={-1}
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    autoComplete="off"
                  />
                </div>

                {status === "error" && (
                  <div className="p-5 bg-destructive/10 text-destructive border border-destructive/20 rounded-xl flex items-start gap-4 animate-in fade-in slide-in-from-top-4">
                    <AlertCircle className="w-6 h-6 shrink-0 mt-0.5" />
                    <p className="font-medium text-lg">{errorMessage}</p>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-primary uppercase tracking-widest flex items-center gap-1">
                      First Name <span className="text-destructive">*</span>
                    </label>
                    <input 
                      required 
                      type="text" 
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full p-4 text-lg rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all" 
                      placeholder="John" 
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-primary uppercase tracking-widest flex items-center gap-1">
                      Last Name <span className="text-destructive">*</span>
                    </label>
                    <input 
                      required 
                      type="text" 
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full p-4 text-lg rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all" 
                      placeholder="Doe" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-primary uppercase tracking-widest flex items-center gap-1">
                      Email Address <span className="text-destructive">*</span>
                    </label>
                    <input 
                      required 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-4 text-lg rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all" 
                      placeholder="john@example.com" 
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-primary uppercase tracking-widest">
                      Phone Number <span className="text-muted-foreground font-normal lowercase tracking-normal">(optional)</span>
                    </label>
                    <input 
                      type="tel" 
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full p-4 text-lg rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all" 
                      placeholder="(555) 123-4567" 
                    />
                  </div>
                </div>
                
                <div className="space-y-4 pt-4 border-t border-border/50">
                  <label className="text-base font-bold text-primary uppercase tracking-widest flex items-center gap-1">
                    Are you golfing? <span className="text-destructive">*</span>
                  </label>
                  <SegmentedControl 
                    value={isGolfer} 
                    onChange={setIsGolfer}
                    options={[
                      { label: "Yes, I'm playing", value: true },
                      { label: "No, just hanging out", value: false }
                    ]}
                  />
                </div>

                <div className="space-y-4 pt-4 border-t border-border/50">
                  <label className="text-base font-bold text-primary uppercase tracking-widest flex items-center gap-1">
                    Bringing a significant other? <span className="text-destructive">*</span>
                  </label>
                  <SegmentedControl 
                    value={bringingSo} 
                    onChange={setBringingSo}
                    options={[
                      { label: "No (Flying solo)", value: "no" },
                      { label: "Yes (Likely)", value: "likely" },
                      { label: "Yes (Definite)", value: "definite" }
                    ]}
                  />
                </div>

                {bringingSo && bringingSo !== "no" && (
                  <div className="space-y-6 animate-in fade-in slide-in-from-top-2">
                    <div className="space-y-3 p-6 bg-[#FAF9F6] rounded-2xl border border-border">
                      <label className="text-sm font-bold text-primary uppercase tracking-widest flex items-center gap-1">
                        Significant Other's Name <span className="text-destructive">*</span>
                      </label>
                      <input 
                        type="text" 
                        value={soName}
                        onChange={(e) => setSoName(e.target.value)}
                        className="w-full p-4 text-lg rounded-xl border border-input bg-white focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all shadow-sm" 
                        placeholder="Jane Doe" 
                        required={true}
                      />
                    </div>
                    
                    <div className="space-y-4 p-6 bg-[#FAF9F6] rounded-2xl border border-border">
                      <label className="text-sm font-bold text-primary uppercase tracking-widest flex items-center gap-1">
                        Is your significant other interested in the optional ladies golf round?
                      </label>
                      <SegmentedControl 
                        value={soLadiesGolfInterest} 
                        onChange={setSoLadiesGolfInterest}
                        options={[
                          { label: "Yes", value: "yes" },
                          { label: "Maybe", value: "maybe" },
                          { label: "No", value: "no" }
                        ]}
                      />
                    </div>
                  </div>
                )}

                <div className="space-y-4 pt-4 border-t border-border/50">
                  <label className="text-base font-bold text-primary uppercase tracking-widest flex items-center gap-1">
                    Likelihood of Attending <span className="text-destructive">*</span>
                  </label>
                  <SegmentedControl 
                    value={likelihood} 
                    onChange={setLikelihood}
                    options={[
                      { label: "100% In", value: "definite" },
                      { label: "75% Likely", value: "likely" },
                      { label: "50/50", value: "fifty_fifty" },
                      { label: "Not sure yet", value: "not_sure" }
                    ]}
                  />
                </div>

                <div className="space-y-3 pt-4 border-t border-border/50">
                  <label className="text-base font-bold text-primary uppercase tracking-widest">
                    Any notes for the Commissioner?
                  </label>
                  <p className="text-sm text-muted-foreground mb-2">Flight preferences, dietary restrictions, questions about the optional ladies round, etc.</p>
                  <textarea 
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full p-4 text-lg rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all h-32 resize-none" 
                    placeholder="Drop any details here..." 
                  />
                </div>

                <div className="flex justify-center pt-8 border-t border-border/50">
                  <Button 
                    type="submit"
                    disabled={status === "submitting"}
                    className="h-16 px-12 text-xl font-bold bg-primary hover:bg-primary/90 text-primary-foreground uppercase tracking-widest rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  >
                    {status === "submitting" ? (
                      <>Submitting... <Loader2 className="w-6 h-6 animate-spin" /></>
                    ) : (
                      <>Submit RSVP <Send className="w-6 h-6" /></>
                    )}
                  </Button>
                </div>
                
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
