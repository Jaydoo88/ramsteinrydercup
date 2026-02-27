import { ShieldCheck } from "lucide-react";
import { useEffect } from "react";

export default function Rsvp() {
  useEffect(() => {
    // Add the JotForm script dynamically when the component mounts
    const script = document.createElement("script");
    script.src = "https://form.jotform.com/jsform/260567703433053";
    script.type = "text/javascript";
    script.async = true;
    
    const formContainer = document.getElementById("jotform-container");
    if (formContainer) {
      formContainer.appendChild(script);
    }
    
    return () => {
      // Cleanup script if component unmounts
      if (formContainer && formContainer.contains(script)) {
        formContainer.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl relative z-10">
      <div className="text-center mb-10 relative z-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary-foreground text-sm font-bold tracking-widest uppercase mb-6">
          <ShieldCheck className="w-4 h-4" />
          Invite Only
        </div>
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6">Founding Group RSVP</h1>
        <p className="text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          Spots are being built around our core group responses. Please let us know your intent so we can finalize the house and golf contracts.
        </p>
      </div>

      <div className="commitment-form-wrapper bg-white shadow-2xl rounded-[2rem] overflow-hidden border border-border/50">
        <div className="h-3 bg-secondary w-full"></div>
        <div className="p-4 md:p-8 bg-muted/10">
          {/* JotForm will inject its iframe here */}
          <div id="jotform-container" className="w-full min-h-[600px]"></div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .commitment-form-wrapper {
          max-width: 900px;
          margin: 0 auto;
        }
        
        /* Ensures the iframe is responsive */
        #jotform-container iframe {
          width: 100% !important;
          border: none !important;
          border-radius: 12px;
        }
      `}} />
    </div>
  );
}