import { Plane, PlaneLanding, PlaneTakeoff, CalendarDays } from "lucide-react";

type Traveler = {
  name: string;
  arrival: { date: string; time: string; details: string };
  departure: { date: string; time: string; details: string };
};

const TRAVELERS: Traveler[] = [
  {
    name: "Darren Johnson & Gretchen Gambill",
    arrival: {
      date: "Wednesday, September 16",
      time: "11:00 AM",
      details: "Arriving at Phoenix Sky Harbor International Airport (PHX)",
    },
    departure: {
      date: "Monday, September 21",
      time: "9:30 AM",
      details: "Departing from Phoenix Sky Harbor International Airport (PHX)",
    },
  },
];

export default function Schedule() {
  const confirmed = TRAVELERS;
  const pending = 0; // placeholder for future pending count

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f6f2ec_0%,#fbfaf8_22%,#ffffff_100%)]">

      {/* Hero */}
      <section className="border-b border-primary/10 bg-white">
        <div className="container mx-auto max-w-5xl px-4 py-16 text-center md:py-20 lg:py-24">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-secondary/10 text-secondary shadow-[0_18px_36px_-24px_rgba(15,23,42,0.32)]">
            <Plane className="h-10 w-10" />
          </div>
          <p className="mt-8 text-sm font-bold uppercase tracking-[0.28em] text-secondary">
            Getting There &amp; Back
          </p>
          <h1 className="mx-auto mt-5 max-w-4xl font-serif text-5xl font-bold leading-[0.95] text-primary md:text-6xl lg:text-7xl">
            Travel Schedule
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-foreground/68 md:text-xl">
            Arrival and departure details for everyone flying into Phoenix for the 2026 Ramstein Ryder Cup.
            More entries will be added as travel is confirmed.
          </p>
        </div>
      </section>

      {/* Travel cards */}
      <section className="container mx-auto max-w-5xl px-4 py-16">

        {confirmed.length > 0 && (
          <>
            <div className="mb-8 flex items-center gap-4">
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.3em] text-secondary">
                Confirmed Travel
              </p>
              <span className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-bold text-secondary">
                {confirmed.length} {confirmed.length === 1 ? "party" : "parties"}
              </span>
            </div>

            <div className="grid gap-6">
              {confirmed.map((traveler) => (
                <article
                  key={traveler.name}
                  className="overflow-hidden rounded-[2rem] border border-primary/10 bg-white shadow-[0_28px_70px_-50px_rgba(15,23,42,0.28)]"
                >
                  {/* Name header */}
                  <div className="border-b border-primary/8 bg-[linear-gradient(135deg,rgba(11,61,145,0.95),rgba(8,31,79,0.98))] px-6 py-5 text-white md:px-8">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15">
                        <CalendarDays className="h-5 w-5" />
                      </div>
                      <p className="font-serif text-2xl font-bold md:text-3xl">{traveler.name}</p>
                    </div>
                  </div>

                  {/* Arrival / Departure grid */}
                  <div className="grid gap-0 divide-y divide-primary/8 md:grid-cols-2 md:divide-x md:divide-y-0">

                    {/* Arrival */}
                    <div className="flex items-start gap-4 px-6 py-6 md:px-8">
                      <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                        <PlaneLanding className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-[0.68rem] font-bold uppercase tracking-[0.28em] text-emerald-600">
                          Arrival
                        </p>
                        <p className="mt-1.5 font-serif text-xl font-bold text-primary">
                          {traveler.arrival.time}
                        </p>
                        <p className="mt-0.5 text-sm font-semibold text-primary/70">
                          {traveler.arrival.date}
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-foreground/65">
                          {traveler.arrival.details}
                        </p>
                      </div>
                    </div>

                    {/* Departure */}
                    <div className="flex items-start gap-4 px-6 py-6 md:px-8">
                      <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sky-50 text-sky-600">
                        <PlaneTakeoff className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-[0.68rem] font-bold uppercase tracking-[0.28em] text-sky-600">
                          Departure
                        </p>
                        <p className="mt-1.5 font-serif text-xl font-bold text-primary">
                          {traveler.departure.time}
                        </p>
                        <p className="mt-0.5 text-sm font-semibold text-primary/70">
                          {traveler.departure.date}
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-foreground/65">
                          {traveler.departure.details}
                        </p>
                      </div>
                    </div>

                  </div>
                </article>
              ))}
            </div>
          </>
        )}

        {/* Pending placeholder */}
        <div className="mt-10 rounded-[1.8rem] border border-dashed border-primary/20 bg-white/60 px-6 py-10 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/5 text-primary/40">
            <Plane className="h-7 w-7" />
          </div>
          <p className="mt-4 text-sm font-bold uppercase tracking-[0.28em] text-foreground/40">
            More Travel Pending
          </p>
          <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-foreground/50">
            Additional arrival and departure details will be added here as the rest of the group confirms their flights.
          </p>
        </div>

      </section>
    </div>
  );
}
