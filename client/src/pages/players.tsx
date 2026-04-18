import { Card, CardContent } from "@/components/ui/card";

const PLAYER_TIERS = [
  {
    tier: "A",
    heading: "A Players",
    description: "Top-line anchors expected to shape pairings and set the competitive tone.",
    players: ["Jason Dousharm", "Mike Parsons"],
  },
  {
    tier: "B",
    heading: "B Players",
    description: "Strong second-wave players who add balance, pressure, and matchup flexibility.",
    players: ["Mike Gibbons", "Robby Fuller"],
  },
  {
    tier: "C",
    heading: "C Players",
    description: "Reliable middle-tier players who bring depth to the field and key pairing value.",
    players: ["Darrel Johnson", "Darren Johnson"],
  },
  {
    tier: "D",
    heading: "D Players",
    description: "Depth pieces with upset potential and an important role in the overall tournament mix.",
    players: ["John Gregg", "Alan Parsons"],
  },
];

export default function Players() {
  return (
    <div className="min-h-screen bg-background">
      <section className="border-b border-border/60 bg-[linear-gradient(180deg,rgba(255,255,255,1),rgba(250,249,246,0.92))]">
        <div className="container mx-auto max-w-6xl px-4 py-20 md:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-secondary" data-testid="text-players-kicker">
              Tournament Field
            </p>
            <h1 className="mt-5 font-serif text-5xl font-bold text-primary md:text-6xl" data-testid="text-players-title">
              Players
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-foreground/70" data-testid="text-players-intro">
              Meet the field for the inaugural Ramstein Ryder Cup. Player tiers help shape the competition and pairings for the event.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="space-y-10 md:space-y-12">
          {PLAYER_TIERS.map((group) => (
            <div
              key={group.tier}
              className="rounded-[2rem] border border-border/70 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.06)] overflow-hidden"
              data-testid={`tier-section-${group.tier.toLowerCase()}`}
            >
              <div className="border-b border-border/60 bg-[linear-gradient(180deg,rgba(13,61,110,0.03),rgba(255,255,255,1))] px-6 py-6 md:px-8">
                <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                  <div>
                    <div className="inline-flex items-center rounded-full bg-secondary/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-secondary" data-testid={`text-tier-label-${group.tier.toLowerCase()}`}>
                      Tier {group.tier}
                    </div>
                    <h2 className="mt-4 font-serif text-3xl font-bold text-primary md:text-4xl" data-testid={`text-tier-heading-${group.tier.toLowerCase()}`}>
                      {group.heading}
                    </h2>
                  </div>
                  <p className="max-w-2xl text-base leading-relaxed text-foreground/60 md:text-right" data-testid={`text-tier-description-${group.tier.toLowerCase()}`}>
                    {group.description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 p-6 md:grid-cols-2 md:p-8">
                {group.players.map((player) => (
                  <Card
                    key={player}
                    className="border border-border/70 bg-[#FCFCFB] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    data-testid={`card-player-${player.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                  >
                    <CardContent className="flex items-center justify-between gap-4 p-6">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">Tier {group.tier}</p>
                        <h3 className="mt-3 font-serif text-2xl font-bold text-primary">{player}</h3>
                      </div>
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-lg font-bold text-white">
                        {group.tier}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
