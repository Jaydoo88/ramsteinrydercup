import { Card, CardContent } from "@/components/ui/card";
import { Flame, Shield, Swords, Trophy } from "lucide-react";
import jasonDousharmImage from "@assets/1665088037422_1776551209099.jpg";
import mikeParsonsImage from "@assets/image_1776551520237.png";
import allenParsonsImage from "@assets/image_1776551567816.png";
import johnGreggImage from "@assets/image_1776551593611.png";
import playersHeroGolfImage from "@/assets/images/players-hero-golf.png";

const PLAYER_TIERS = [
  {
    tier: "A",
    heading: "Alpha Flight",
    description: "Top-line anchors expected to shape pairings and establish the tone for the weekend.",
    accent: "from-amber-400 via-yellow-300 to-amber-500",
    glow: "shadow-[0_24px_80px_-30px_rgba(245,158,11,0.5)]",
    surface: "border-amber-200/60 bg-[linear-gradient(180deg,rgba(255,251,235,0.95),rgba(255,255,255,0.9))]",
    badge: "bg-amber-500/12 text-amber-700 ring-1 ring-amber-400/30",
    icon: Trophy,
    caption: "Match-setters",
    players: [
      {
        name: "Jason Dousharm",
        image: jasonDousharmImage,
      },
      {
        name: "Mike Parsons",
        image: mikeParsonsImage,
      },
    ],
  },
  {
    tier: "B",
    heading: "Pressure Line",
    description: "Balanced competitors with enough shot-making to swing a session and punish weak pairings.",
    accent: "from-sky-400 via-cyan-300 to-blue-500",
    glow: "shadow-[0_24px_80px_-30px_rgba(14,165,233,0.45)]",
    surface: "border-sky-200/60 bg-[linear-gradient(180deg,rgba(240,249,255,0.95),rgba(255,255,255,0.9))]",
    badge: "bg-sky-500/12 text-sky-700 ring-1 ring-sky-400/30",
    icon: Swords,
    caption: "Pressure makers",
    players: [
      {
        name: "Mike Gibbons",
      },
      {
        name: "Robby Fuller",
      },
    ],
  },
  {
    tier: "C",
    heading: "Steady Core",
    description: "Reliable middle-line players who give the roster depth, consistency, and pairing flexibility.",
    accent: "from-emerald-400 via-teal-300 to-emerald-500",
    glow: "shadow-[0_24px_80px_-30px_rgba(16,185,129,0.4)]",
    surface: "border-emerald-200/60 bg-[linear-gradient(180deg,rgba(236,253,245,0.95),rgba(255,255,255,0.92))]",
    badge: "bg-emerald-500/12 text-emerald-700 ring-1 ring-emerald-400/30",
    icon: Shield,
    caption: "Reliable depth",
    players: [
      {
        name: "Darrel Johnson",
      },
      {
        name: "Darren Johnson",
      },
    ],
  },
  {
    tier: "D",
    heading: "Wild Cards",
    description: "Underdog energy with upset potential and the ability to change a match with momentum swings.",
    accent: "from-rose-400 via-fuchsia-300 to-pink-500",
    glow: "shadow-[0_24px_80px_-30px_rgba(244,63,94,0.42)]",
    surface: "border-rose-200/60 bg-[linear-gradient(180deg,rgba(255,241,242,0.95),rgba(255,255,255,0.92))]",
    badge: "bg-rose-500/12 text-rose-700 ring-1 ring-rose-400/30",
    icon: Flame,
    caption: "Momentum swingers",
    players: [
      {
        name: "John Gregg",
        image: johnGreggImage,
      },
      {
        name: "Allen Parsons",
        image: allenParsonsImage,
      },
    ],
  },
];

function getPlayerSlug(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

function getPlayerInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);
}

export default function Players() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f6f2ec_0%,#fbfaf8_22%,#ffffff_100%)]">
      <section className="relative overflow-hidden border-b border-primary/10 bg-[radial-gradient(circle_at_top_left,rgba(199,30,58,0.16),transparent_30%),radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_24%),linear-gradient(135deg,#07172d_0%,#0d3d6e_52%,#12345a_100%)] text-white">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0))]" />
        <div className="absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-white/6 blur-3xl" />

        <div className="container relative mx-auto max-w-6xl px-4 py-20 md:py-24 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
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

            <div className="relative">
              <div className="absolute -left-8 top-10 hidden h-28 w-28 rounded-full bg-secondary/20 blur-3xl md:block" />
              <div className="absolute -right-6 bottom-6 hidden h-32 w-32 rounded-full bg-white/10 blur-3xl md:block" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-white/10 shadow-[0_32px_100px_-45px_rgba(0,0,0,0.7)] backdrop-blur-sm">
                <img
                  src={playersHeroGolfImage}
                  alt="Realistic golf scene for the Ramstein Ryder Cup players page"
                  className="h-[320px] w-full object-cover md:h-[420px]"
                  data-testid="img-players-hero-golf"
                />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(7,23,45,0.08),rgba(7,23,45,0.14),rgba(7,23,45,0.72))]" />

                <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-6 md:p-7">
                  <div className="w-fit rounded-full border border-white/18 bg-black/20 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.24em] text-white/85 backdrop-blur-sm" data-testid="text-players-hero-image-badge">
                    Desert golf atmosphere
                  </div>
                  <div className="max-w-xl">
                    <p className="text-2xl font-semibold text-white md:text-3xl" data-testid="text-players-hero-image-title">
                      Real course energy instead of filler graphics.
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-white/78 md:text-base" data-testid="text-players-hero-image-copy">
                      A more cinematic, realistic visual direction that fits the tone of the event and gives the page more presence immediately.
                    </p>
                  </div>
                </div>
              </div>
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
            Every player card now has a dedicated portrait slot, so we can drop in cropped photos as you send them and build out the full field.
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
                    {group.players.map((player, playerIndex) => {
                      const playerSlug = getPlayerSlug(player.name);

                      return (
                        <Card
                          key={player.name}
                          className="overflow-hidden rounded-[1.75rem] border border-white/65 bg-white/90 shadow-[0_20px_50px_-35px_rgba(15,23,42,0.45)] transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/20 hover:shadow-[0_28px_70px_-35px_rgba(13,61,110,0.35)]"
                          data-testid={`card-player-${playerSlug}`}
                        >
                          <CardContent className="relative p-0">
                            <div className={`h-1.5 w-full bg-gradient-to-r ${group.accent}`} />

                            <div className="relative h-72 overflow-hidden bg-[linear-gradient(135deg,#0c2340,#174a7a)]">
                              {player.image ? (
                                <img
                                  src={player.image}
                                  alt={player.name}
                                  className="h-full w-full object-cover object-center"
                                  data-testid={`img-player-${playerSlug}`}
                                />
                              ) : (
                                <div
                                  className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${group.accent}`}
                                  data-testid={`img-player-placeholder-${playerSlug}`}
                                >
                                  <div className="rounded-full border border-white/35 bg-white/18 px-8 py-6 text-5xl font-bold tracking-[0.16em] text-white shadow-[0_20px_50px_-25px_rgba(15,23,42,0.55)] backdrop-blur-sm">
                                    {getPlayerInitials(player.name)}
                                  </div>
                                </div>
                              )}

                              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#081423]/90 via-[#081423]/35 to-transparent" />
                              <div className="absolute left-5 top-5 rounded-full border border-white/18 bg-black/20 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-white/82 backdrop-blur-sm">
                                Tier {group.tier}
                              </div>
                            </div>

                            <div className="flex min-h-[180px] flex-col justify-between p-6">
                              <div className="flex items-start justify-between gap-4">
                                <div>
                                  <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-secondary">
                                    {group.heading} · Player {playerIndex + 1}
                                  </p>
                                  <h4 className="mt-4 font-serif text-3xl font-bold leading-tight text-primary" data-testid={`text-player-name-${playerSlug}`}>
                                    {player.name}
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
                      );
                    })}
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
