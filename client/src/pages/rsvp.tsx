import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, MessageSquare, Phone } from "lucide-react";

const RSVP_PHONE_DISPLAY = "760-559-6108";
const RSVP_PHONE_LINK = "7605596108";

const RSVP_DETAILS = [
  "Your full name",
  "Whether you're committing as a golfer",
  "Whether you're bringing a significant other",
  "Your current likelihood of attending",
  "Any notes or questions for the Commissioner",
];

export default function Rsvp() {
  return (
    <div className="container mx-auto px-4 py-20 relative z-10 max-w-4xl">
      <div className="text-center mb-10 relative z-20">
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6">Founding Group RSVP</h1>
        <p className="text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          We&apos;re using direct contact for RSVPs right now while the online submission is temporarily offline.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Card className="border-none shadow-2xl bg-white overflow-hidden rounded-[2rem] relative z-30 border border-border/50">
          <div className="h-3 bg-secondary w-full"></div>

          <CardHeader className="bg-[#FAF9F6] border-b border-border p-8 md:p-12 text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-secondary/10">
              <CheckCircle2 className="h-10 w-10 text-secondary" />
            </div>
            <CardTitle className="text-3xl md:text-4xl font-serif text-primary mb-3">RSVP by Text or Call</CardTitle>
            <CardDescription className="text-lg font-medium text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              To reserve your place in the founding group, contact Jason directly and send the quick details below.
            </CardDescription>
          </CardHeader>

          <CardContent className="p-8 md:p-12 bg-white space-y-8">
            <div className="rounded-[1.75rem] border border-secondary/15 bg-secondary/[0.05] p-6 md:p-8 text-center">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-secondary">Direct RSVP Contact</p>
              <p className="mt-3 text-3xl md:text-4xl font-serif font-bold text-primary" data-testid="text-rsvp-phone">{RSVP_PHONE_DISPLAY}</p>
              <p className="mt-3 text-base text-foreground/65">
                Text is probably easiest, but a call works too.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild className="h-14 px-8 text-base font-bold uppercase tracking-widest rounded-xl bg-primary hover:bg-primary/90" data-testid="button-text-jason">
                  <a href={`sms:${RSVP_PHONE_LINK}`}>
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Text Jason
                  </a>
                </Button>
                <Button asChild variant="outline" className="h-14 px-8 text-base font-bold uppercase tracking-widest rounded-xl border-primary/20 text-primary hover:bg-primary/5" data-testid="button-call-jason">
                  <a href={`tel:${RSVP_PHONE_LINK}`}>
                    <Phone className="w-5 h-5 mr-2" />
                    Call Jason
                  </a>
                </Button>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-border/70 bg-[#FCFCFB] p-6 md:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-secondary">What to Send</p>
              <div className="mt-5 space-y-4">
                {RSVP_DETAILS.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-start gap-4 rounded-2xl bg-white px-4 py-4 ring-1 ring-border/60"
                    data-testid={`text-rsvp-detail-${index + 1}`}
                  >
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-bold">
                      {index + 1}
                    </div>
                    <p className="text-base text-foreground/75">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-border/70 bg-white p-6 md:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-secondary">Quick Note</p>
              <p className="mt-3 text-lg leading-relaxed text-foreground/75" data-testid="text-rsvp-note">
                Once the database side is sorted out, we can bring the full online RSVP form back. For now, direct contact is the cleanest way to make sure nobody gets missed.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
