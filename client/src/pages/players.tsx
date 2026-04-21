import { Card, CardContent } from "@/components/ui/card";
import { Flame, Shield, Swords, Trophy } from "lucide-react";
import jasonDousharmImage from "@assets/1665088037422_1776551209099.jpg";
import mikeParsonsImage from "@assets/image_1776551520237.png";
import mikeGibbonsImage from "@assets/image_1776551618225.png";
import robbyFullerImage from "@assets/654214334_10242588166511341_589448361213285726_n_1776624936484.jpg";
import darrelJohnsonImage from "@assets/image_1776790509801.png";
import darrenJohnsonImage from "@assets/image_1776551781812.png";
import allenParsonsImage from "@assets/image_1776551567816.png";
import johnGreggImage from "@assets/image_1776551593611.png";
import playersHeroGolfImage from "@/assets/images/players-hero-golf.png";

const PLAYER_TIERS = [
  {
    tier: "A",
    heading: "Alpha Flight",
    description: "Sets the tone for pairings.",
    details: "This group is built to handle the early pressure, anchor team strategy, and give the lineup a strong start in the opening sessions.",
    scouting: [
      "Off the tee: built for confident opening drives.",
      "Approach play: expected to attack flags and create birdie looks.",
      "On the greens: trusted to steady momentum with clean putts.",
    ],
    accent: "from-amber-400 via-yellow-300 to-amber-500",
    glow: "shadow-[0_24px_80px_-30px_rgba(245,158,11,0.5)]",
    surface: "border-amber-200/60 bg-[linear-gradient(180deg,rgba(255,251,235,0.95),rgba(255,255,255,0.9))]",
    badge: "bg-amber-500/12 text-amber-700 ring-1 ring-amber-400/30",
    icon: Trophy,
    caption: "Pairing anchors for opening matches",
    players: [
      {
        name: "Jason Dousharm",
        image: jasonDousharmImage,
      },
      {
        name: "Mike Parsons",
        image: mikeParsonsImage,
        imageClassName: "object-[center_22%]",
      },
    ],
  },
  {
    tier: "B",
    heading: "Pressure Line",
    description: "Applies pressure across key matches.",
    details: "This flight is expected to keep matches tight, force mistakes, and deliver points in the sessions where momentum can swing the whole Ryder Cup.",
    scouting: [
      "Off the tee: likely to lean on controlled, in-play drives.",
      "Approach play: built to apply heat with makeable birdie chances.",
      "On the greens: the putter can turn halves into points.",
    ],
    accent: "from-sky-400 via-cyan-300 to-blue-500",
    glow: "shadow-[0_24px_80px_-30px_rgba(14,165,233,0.45)]",
    surface: "border-sky-200/60 bg-[linear-gradient(180deg,rgba(240,249,255,0.95),rgba(255,255,255,0.9))]",
    badge: "bg-sky-500/12 text-sky-700 ring-1 ring-sky-400/30",
    icon: Swords,
    caption: "Pressure pairings for swing matches",
    players: [
      {
        name: "Mike Gibbons",
        image: mikeGibbonsImage,
      },
      {
        name: "Robby Fuller",
        image: robbyFullerImage,
      },
    ],
  },
  {
    tier: "C",
    heading: "Steady Core",
    description: "Brings stability to every session.",
    details: "This group gives the field reliable depth, dependable pairings, and steady play that helps hold the board together from round to round.",
    scouting: [
      "Off the tee: likely to favor fairways over hero shots.",
      "Approach play: dependable swings that keep pressure on opponents.",
      "On the greens: steady putts that keep matches moving forward.",
    ],
    accent: "from-emerald-400 via-teal-300 to-emerald-500",
    glow: "shadow-[0_24px_80px_-30px_rgba(16,185,129,0.4)]",
    surface: "border-emerald-200/60 bg-[linear-gradient(180deg,rgba(236,253,245,0.95),rgba(255,255,255,0.92))]",
    badge: "bg-emerald-500/12 text-emerald-700 ring-1 ring-emerald-400/30",
    icon: Shield,
    caption: "Steady depth for every format",
    players: [
      {
        name: "Darrel Johnson",
        image: darrelJohnsonImage,
      },
      {
        name: "Darren Johnson",
        image: darrenJohnsonImage,
        imageClassName: "object-[center_18%]",
      },
    ],
  },
  {
    tier: "D",
    heading: "Wild Cards",
    description: "Capable of stealing big points.",
    details: "This flight brings upset potential, loose pressure, and the kind of unexpected point swings that can flip a Ryder Cup session fast.",
    scouting: [
      "Off the tee: aggressive swings can open or close a hole fast.",
      "Approach play: high-risk looks can create surprise momentum.",
      "On the greens: one hot putter can flip the entire match.",
    ],
    accent: "from-violet-500 via-purple-400 to-fuchsia-500",
    glow: "shadow-[0_24px_80px_-30px_rgba(139,92,246,0.4)]",
    surface: "border-violet-200/60 bg-[linear-gradient(180deg,rgba(245,243,255,0.95),rgba(255,255,255,0.92))]",
    badge: "bg-violet-500/12 text-violet-700 ring-1 ring-violet-400/30",
    icon: Flame,
    caption: "Point swingers with upset potential",
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
      <section className="border-b border-primary/10 bg-white">
        <div className="container mx-auto max-w-5xl px-4 py-16 text-center md:py-20 lg:py-24">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-secondary" data-testid="text-players-kicker">
            2026 Player Field
          </p>
          <h1 className="mx-auto mt-5 max-w-4xl font-serif text-5xl font-bold leading-[0.95] text-primary md:text-6xl lg:text-7xl" data-testid="text-players-title">
            Ramstein Ryder Cup Players
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-foreground/68 md:text-xl" data-testid="text-players-intro">
            Meet the confirmed player field for the 1st Annual Ramstein Ryder Cup 2026. The roster is organized into competitive tiers to help shape pairings, matchups, and team strategy for the event weekend.
          </p>

          <div className="mx-auto mt-10 max-w-4xl">
            <div className="overflow-hidden rounded-[2rem] border border-border/60 bg-white shadow-[0_30px_80px_-35px_rgba(15,23,42,0.22)]">
              <img
                src={playersHeroGolfImage}
                alt="Realistic golf scene for the Ramstein Ryder Cup players page"
                className="mx-auto h-[300px] w-full object-cover object-center md:h-[420px]"
                data-testid="img-players-hero-golf"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-4 py-16 md:py-20 lg:py-24">
        <div className="mb-10">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-secondary">Player Tiers</p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-primary md:text-5xl md:whitespace-nowrap" data-testid="text-players-section-heading">
            Confirmed flights for the 2026 field.
          </h2>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-foreground/65" data-testid="text-players-section-copy">
            The Ramstein Ryder Cup roster is split into A, B, C, and D tiers to balance pairings and shape the competition across the weekend.
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

                <div className="relative grid items-start gap-5 p-5 md:p-7 lg:grid-cols-[minmax(290px,0.68fr)_1.32fr] lg:gap-6 lg:p-8">
                  <div className="self-start rounded-[1.6rem] border border-white/55 bg-white/72 p-4 backdrop-blur-sm md:p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-serif text-3xl font-bold text-primary md:text-[2.05rem]" data-testid={`text-tier-heading-${group.tier.toLowerCase()}`}>
                          {group.heading}
                        </h3>
                      </div>
                      <div className="text-5xl font-semibold leading-none text-primary/10 md:text-[3.35rem]">{group.tier}</div>
                    </div>

                    <div className="mt-3 max-w-md space-y-3.5">
                      <p className="text-[0.95rem] leading-6 text-foreground/68" data-testid={`text-tier-description-${group.tier.toLowerCase()}`}>
                        {group.description}
                      </p>
                      <p className="text-[0.95rem] leading-6 text-foreground/64">
                        {group.details}
                      </p>
                      <div className="space-y-2.5 border-t border-primary/8 pt-4">
                        {group.scouting.map((note) => {
                          const [label, ...rest] = note.split(": ");

                          return (
                            <div key={note} className="grid grid-cols-[86px_1fr] gap-2 text-[0.92rem] leading-6 text-foreground/66">
                              <p className="font-semibold text-primary/78">{label}</p>
                              <p>{rest.join(": ")}</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="mt-5 border-t border-primary/8 pt-4 text-center">
                      <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-secondary">Role</p>
                      <p className="mt-2 text-sm font-semibold text-primary md:text-base">{group.caption}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {group.players.map((player) => {
                      const playerSlug = getPlayerSlug(player.name);

                      return (
                        <Card
                          key={player.name}
                          className="overflow-hidden rounded-[1.5rem] border border-white/65 bg-white/90 shadow-[0_20px_50px_-35px_rgba(15,23,42,0.45)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-[0_28px_70px_-35px_rgba(13,61,110,0.35)]"
                          data-testid={`card-player-${playerSlug}`}
                        >
                          <CardContent className="relative p-0">
                            <div className={`h-1.5 w-full bg-gradient-to-r ${group.accent}`} />

                            <div className="relative aspect-square overflow-hidden bg-[linear-gradient(135deg,#0c2340,#174a7a)]">
                              {player.image ? (
                                <img
                                  src={player.image}
                                  alt={player.name}
                                  className={`h-full w-full object-cover ${player.imageClassName ?? "object-center"}`}
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
                            </div>

                            <div className="flex min-h-[118px] flex-col justify-start p-4 md:min-h-[126px] md:p-5">
                              <div className="flex items-start justify-between gap-3">
                                <div>
                                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] leading-[1.55] text-secondary">
                                    <span className="block">Ramstein Ryder Cup •</span>
                                    <span className="block">{group.heading}</span>
                                  </p>
                                  <h4 className="mt-2 whitespace-nowrap font-serif text-[1.55rem] font-bold leading-none tracking-tight text-primary md:text-[1.72rem]">
                                    {player.name}
                                  </h4>
                                </div>
                                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${group.accent} text-sm font-bold text-primary shadow-sm`}>
                                  {group.tier}
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
