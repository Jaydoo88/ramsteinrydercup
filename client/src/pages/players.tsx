import { Card, CardContent } from "@/components/ui/card";
import { Flame, Shield, Swords, Trophy } from "lucide-react";

const PLAYER_TIERS = [
  {
    tier: "A",
    heading: "Alpha Flight",
    description: "Top-line anchors expected to shape pairings and establish the tone for the weekend.",
    players: ["Jason Dousharm", "Mike Parsons"],
    accent: "from-amber-400 via-yellow-300 to-amber-500",
    glow: "shadow-[0_24px_80px_-30px_rgba(245,158,11,0.5)]",
    surface: "border-amber-200/60 bg-[linear-gradient(180deg,rgba(255,251,235,0.95),rgba(255,255,255,0.9))]",
    badge: "bg-amber-500/12 text-amber-700 ring-1 ring-amber-400/30",
    icon: Trophy,
    caption: "Match-setters",
  },
  {
    tier: "B",
    heading: "Pressure Line",
    description: "Balanced competitors with enough shot-making to swing a session and punish weak pairings.",
    players: ["Mike Gibbons", "Robby Fuller"],
    accent: "from-sky-400 via-cyan-300 to-blue-500",
    glow: "shadow-[0_24px_80px_-30px_rgba(14,165,233,0.45)]",
    surface: "border-sky-200/60 bg-[linear-gradient(180deg,rgba(240,249,255,0.95),rgba(255,255,255,0.9))]",
    badge: "bg-sky-500/12 text-sky-700 ring-1 ring-sky-400/30",
    icon: Swords,
    caption: "Pressure makers",
  },
  {
    tier: "C",
    heading: "Steady Core",
    description: "Reliable middle-line players who give the roster depth, consistency, and pairing flexibility.",
    players: ["Darrel Johnson", "Darren Johnson"],
    accent: "from-emerald-400 via-teal-300 to-emerald-500",
    glow: "shadow-[0_24px_80px_-30px_rgba(16,185,129,0.4)]",
    surface: "border-emerald-200/60 bg-[linear-gradient(180deg,rgba(236,253,245,0.95),rgba(255,255,255,0.92))]",
    badge: "bg-emerald-500/12 text-emerald-700 ring-1 ring-emerald-400/30",
    icon: Shield,
    caption: "Reliable depth",
  },
  {
    tier: "D",
    heading: "Wild Cards",
    description: "Underdog energy with upset potential and the ability to change a match with momentum swings.",
    players: ["John Gregg", "Alan Parsons"],
    accent: "from-rose-400 via-fuchsia-300 to-pink-500",
    glow: "shadow-[0_24px_80px_-30px_rgba(244,63,94,0.42)]",
    surface: "border-rose-200/60 bg-[linear-gradient(180deg,rgba(255,241,242,0.95),rgba(255,255,255,0.92))]",
    badge: "bg-rose-500/12 text-rose-700 ring-1 ring-rose-400/30",
    icon: Flame,
    caption: "Momentum swingers",
  },
];

const FIELD_FACTS = [
  {
    value: "8",
    label: "Confirmed golfers",
  },
  {
    value: "4",
    label: "Competitive tiers",
  },
  {
    value: "2",
    label: "Players per tier",
  },
];

export default function Players() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f6f2ec_0%,#fbfaf8_22%,#ffffff_100%)]">
      <section className="relative overflow-hidden border-b border-primary/10 bg-[radial-gradient(circle_at_top_left,rgba(199,30,58,0.16),transparent_30%),radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_24%),linear-gradient(135deg,#07172d_0%,#0d3d6e_52%,#12345a_100%)] text-white">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0))]" />
        <div className="absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-white/6 blur-3xl" />

        <div className="container relative mx-auto max-w-6xl px-4 py-20 md:py-24 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-white/70" data-testid="text-players-kicker">
                Tournament Field
              </p>
              <h1 className="mt-5 max-w-4xl font-serif text-5xl font-bold leading-[0.95] text-white md:text-6xl lg:text-7xl" data-testid="text-players-title">
                A sharper look at the roster.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/78 md:text-xl" data-testid="text-players-intro">
                The inaugural Ramstein Ryder Cup field deserves something more elevated than a basic roster. This lineup now reads like a real event board — premium, competitive, and built to feel worthy of the weekend.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <div className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-white/80 backdrop-blur-sm" data-testid="status-player-format">
                  Tiered competition
                </div>
                <div className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-white/80 backdrop-blur-sm" data-testid="status-player-location">
                  Scottsdale / Cave Creek
                </div>
                <div className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-white/80 backdrop-blur-sm" data-testid="status-player-edition">
                  1st annual event
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {FIELD_FACTS.map((fact, index) => (
                <div
                  key={fact.label}
                  className="rounded-[1.75rem] border border-white/12 bg-white/10 p-5 shadow-[0_24px_70px_-40px_rgba(0,0,0,0.55)] backdrop-blur-md"
                  data-testid={`card-player-stat-${index + 1}`}
                >
                  <p className="text-3xl font-bold text-white md:text-4xl">{fact.value}</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.18em] text-white/65">{fact.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-4 py-16 md:py-20 lg:py-24">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-secondary">Player Tiers</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-primary md:text-5xl" data-testid="text-players-section-heading">
              Premium presentation. Serious match energy.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-relaxed text-foreground/65" data-testid="text-players-section-copy">
            Each tier now has its own identity, atmosphere, and visual weight so the field feels curated instead of cartoonish.
          </p>
        </div>

        <div className="space-y-8 md:space-y-10">
          {PLAYER_TIERS.map((group) => {
            const Icon = group.icon;

            return (
              <div
                key={group.tier}
                className={`group relative overflow-hidden rounded-[2rem] border ${group.surface} ${group.glow}`}
                data-testid={`tier-section-${group.tier.toLowerCase()}`}
              >
                <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${group.accent}`} />
                <div className="absolute right-0 top-0 hidden h-48 w-48 translate-x-10 -translate-y-10 rounded-full bg-white/45 blur-3xl md:block" />

                <div className="relative grid gap-6 p-6 md:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8 lg:p-10">
                  <div className="flex h-full flex-col justify-between rounded-[1.75rem] border border-white/55 bg-white/70 p-6 backdrop-blur-sm">
                    <div>
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div
                            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] ${group.badge}`}
                            data-testid={`text-tier-label-${group.tier.toLowerCase()}`}
                          >
                            <Icon className="h-4 w-4" />
                            Tier {group.tier}
                          </div>
                          <h3 className="mt-5 font-serif text-3xl font-bold text-primary md:text-4xl" data-testid={`text-tier-heading-${group.tier.toLowerCase()}`}>
                            {group.heading}
                          </h3>
                        </div>
                        <div className="text-6xl font-semibold leading-none text-primary/10 md:text-7xl">{group.tier}</div>
                      </div>

                      <p className="mt-5 max-w-xl text-base leading-relaxed text-foreground/68" data-testid={`text-tier-description-${group.tier.toLowerCase()}`}>
                        {group.description}
                      </p>
                    </div>

                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                      <div className="rounded-[1.4rem] border border-primary/8 bg-primary/[0.03] px-4 py-4">
                        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-secondary">Role</p>
                        <p className="mt-2 text-lg font-semibold text-primary">{group.caption}</p>
                      </div>
                      <div className="rounded-[1.4rem] border border-primary/8 bg-primary/[0.03] px-4 py-4">
                        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-secondary">Tier makeup</p>
                        <p className="mt-2 text-lg font-semibold text-primary">2-player unit</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {group.players.map((player, playerIndex) => (
                      <Card
                        key={player}
                        className="overflow-hidden rounded-[1.75rem] border border-white/65 bg-white/85 shadow-[0_20px_50px_-35px_rgba(15,23,42,0.45)] transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/20 hover:shadow-[0_28px_70px_-35px_rgba(13,61,110,0.35)]"
                        data-testid={`card-player-${player.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                      >
                        <CardContent className="relative p-0">
                          <div className={`h-1.5 w-full bg-gradient-to-r ${group.accent}`} />
                          <div className="flex min-h-[220px] flex-col justify-between p-6">
                            <div className="flex items-start justify-between gap-4">
                              <div>
                                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-secondary">
                                  Tier {group.tier} · Player {playerIndex + 1}
                                </p>
                                <h4 className="mt-4 font-serif text-3xl font-bold leading-tight text-primary" data-testid={`text-player-name-${player.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                                  {player}
                                </h4>
                              </div>
                              <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${group.accent} text-sm font-bold text-primary shadow-sm`}>
                                {group.tier}
                              </div>
                            </div>

                            <div className="mt-8 flex items-end justify-between gap-4 border-t border-border/60 pt-5">
                              <div>
                                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Field status</p>
                                <p className="mt-2 text-base font-medium text-foreground/75">Confirmed competitor</p>
                              </div>
                              <div className="text-right">
                                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Flight</p>
                                <p className="mt-2 text-base font-semibold text-primary">{group.heading}</p>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
