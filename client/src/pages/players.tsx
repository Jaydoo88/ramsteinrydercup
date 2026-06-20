import { Card, CardContent } from "@/components/ui/card";
import { Shield, Trophy, UserRound } from "lucide-react";
import jasonDousharmImage from "@assets/1665088037422_1776551209099.jpg";
import mikeParsonsImage from "@assets/image_1776551520237.png";
import mikeGibbonsImage from "@assets/image_1776551618225.png";
import robbyFullerImage from "@assets/654214334_10242588166511341_589448361213285726_n_1776624936484.jpg";
import darrelJohnsonImage from "@assets/image_1776790509801.png";
import darrenJohnsonImage from "@assets/d6ad562a-1a0e-4821-9432-33da97d8ba88_1781903108064.png";
import allenParsonsImage from "@assets/image_1776551567816.png";
import johnGreggImage from "@assets/image_1776551593611.png";
import erinBergerImage from "@assets/d2774c1a-31e8-455c-be3a-c16e38940ff0_1781902944119.png";
import gretchenGambillImage from "@assets/709d2ac4-81da-4517-9986-0721a61ff40b_1781903635578.png";
import hayleyPedersenImage from "@assets/516680189_30778336861751597_10175905133059248_n_1781902787067.jpg";
import izzyHochnerImage from "@assets/35742230_1732422556834572_369511528421916672_n_1781903286258.jpg";
import jennyMasonImage from "@assets/7161c949-8120-4da9-9bde-d68477dc6329_1781902673901.png";
import melissaParsonsImage from "@assets/dbfc5745-7e00-493c-a83d-da3172e7e7e2_1781903347166.png";
import playersHeroGolfImage from "@/assets/images/players-hero-golf.png";

const SLOT_STYLES = {
  A: "from-amber-400 to-yellow-500 text-white",
  B: "from-sky-500 to-blue-600 text-white",
  C: "from-emerald-500 to-green-600 text-white",
  D: "from-rose-500 to-red-600 text-white",
} as const;

const TEAM_ROSTERS = [
  {
    name: "Blue Team",
    captain: "Jason Dousharm",
    border: "border-sky-300/90",
    accentText: "text-[#123f7d]",
    accentLine: "from-sky-500 via-blue-500 to-indigo-500",
    crest: "from-[#0d3f82] via-[#1256a9] to-[#0d3f82]",
    layout: "left",
    players: [
      { slot: "A", name: "Jason Dousharm" },
      { slot: "B", name: "Mike Gibbons" },
      { slot: "C", name: "Darren Johnson" },
      { slot: "D", name: "John Gregg" },
    ],
  },
  {
    name: "Red Team",
    captain: "Mike Parsons",
    border: "border-rose-300/90",
    accentText: "text-[#b2142a]",
    accentLine: "from-rose-500 via-red-500 to-rose-500",
    crest: "from-[#bb0f27] via-[#e01032] to-[#bb0f27]",
    layout: "right",
    players: [
      { slot: "A", name: "Mike Parsons" },
      { slot: "B", name: "Robby Fuller" },
      { slot: "C", name: "Darrel Johnson" },
      { slot: "D", name: "Allen Parsons" },
    ],
  },
] as const;

const FLIGHT_MATCHUPS: Array<{
  key: string;
  title: string;
  slot: keyof typeof SLOT_STYLES;
  accentText: string;
  letterText: string;
  description: string[];
  bluePlayer: { name: string; image: string; imageClassName?: string };
  redPlayer: { name: string; image: string; imageClassName?: string };
}> = [
  {
    key: "alpha",
    title: "Alpha Flight",
    slot: "A",
    accentText: "text-amber-500",
    letterText: "text-amber-300/70",
    description: ["Top-tier players.", "Set the tone."],
    bluePlayer: {
      name: "Jason Dousharm",
      image: jasonDousharmImage,
    },
    redPlayer: {
      name: "Mike Parsons",
      image: mikeParsonsImage,
      imageClassName: "object-[center_22%]",
    },
  },
  {
    key: "pressure",
    title: "Pressure Line",
    slot: "B",
    accentText: "text-sky-500",
    letterText: "text-sky-300/70",
    description: ["Bring the pressure.", "Create opportunities."],
    bluePlayer: {
      name: "Mike Gibbons",
      image: mikeGibbonsImage,
    },
    redPlayer: {
      name: "Robby Fuller",
      image: robbyFullerImage,
    },
  },
  {
    key: "steady",
    title: "Steady Core",
    slot: "C",
    accentText: "text-emerald-600",
    letterText: "text-emerald-300/70",
    description: ["Reliable and consistent.", "Keep the momentum."],
    bluePlayer: {
      name: "Darren Johnson",
      image: darrenJohnsonImage,
      imageClassName: "object-[center_12%]",
    },
    redPlayer: {
      name: "Darrel Johnson",
      image: darrelJohnsonImage,
    },
  },
  {
    key: "wild",
    title: "Wild Cards",
    slot: "D",
    accentText: "text-rose-600",
    letterText: "text-rose-300/70",
    description: ["Upside and unpredictability.", "Game changers."],
    bluePlayer: {
      name: "John Gregg",
      image: johnGreggImage,
    },
    redPlayer: {
      name: "Allen Parsons",
      image: allenParsonsImage,
    },
  },
] as const;

const LADIES_TEAMS = [
  {
    name: "Team Pink",
    subtitle: "3 Golfers",
    label: "TEAM PINK",
    badge: "TP",
    accent: "from-rose-400 via-pink-300 to-fuchsia-400",
    surface: "border-rose-200/70 bg-[linear-gradient(180deg,rgba(255,241,242,0.96),rgba(255,255,255,0.92))]",
    glow: "shadow-[0_24px_80px_-30px_rgba(244,114,182,0.35)]",
    players: [
      { name: "Hayley Pedersen", image: hayleyPedersenImage, imageClassName: "object-[center_24%]" },
      { name: "Erin Berger", image: erinBergerImage, imageClassName: "object-[center_18%]" },
      { name: "Melissa Parsons", image: melissaParsonsImage, imageClassName: "object-[center_18%]" },
    ],
  },
  {
    name: "Team Purple",
    subtitle: "3 Golfers",
    label: "TEAM PURPLE",
    badge: "TP",
    accent: "from-violet-500 via-purple-400 to-fuchsia-500",
    surface: "border-violet-200/70 bg-[linear-gradient(180deg,rgba(245,243,255,0.96),rgba(255,255,255,0.92))]",
    glow: "shadow-[0_24px_80px_-30px_rgba(139,92,246,0.35)]",
    players: [
      { name: "Gretchen Gambill", image: gretchenGambillImage, imageClassName: "object-[center_18%]" },
      { name: "Jenny Mason", image: jennyMasonImage, imageClassName: "object-[center_20%]" },
      { name: "Izzy Hochner", image: izzyHochnerImage, imageClassName: "object-[center_16%]" },
    ],
  },
] as const;

function getPlayerSlug(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
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
            The official team rosters for the 1st Annual Ramstein Ryder Cup 2026, followed by the full Ladies Teams lineup for the event weekend.
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

      <section className="container mx-auto max-w-7xl px-4 py-16 md:py-20 lg:py-24">
        <div className="rounded-[2.5rem] border border-primary/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(249,248,246,0.96))] p-4 shadow-[0_38px_120px_-55px_rgba(15,23,42,0.28)] md:p-6 lg:p-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-50 text-amber-500 shadow-[0_16px_40px_-28px_rgba(15,23,42,0.35)]">
                <Trophy className="h-7 w-7" />
              </div>
              <div className="text-left">
                <h2 className="font-serif text-[2.1rem] font-bold leading-none text-primary md:text-[3rem]" data-testid="text-team-rosters-heading">
                  TEAM ROSTERS
                </h2>
                <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.34em] text-secondary" data-testid="text-team-rosters-subtitle">
                  RAMSTEIN RYDER CUP
                </p>
              </div>
            </div>
          </div>

          <div className="relative mt-8 grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-stretch lg:gap-4">
            {TEAM_ROSTERS.map((team, index) => (
              <div key={team.name} className={index === 0 ? "order-1 h-full" : "order-3 h-full"}>
                <div
                  className={`relative h-full min-h-[332px] overflow-hidden rounded-[1.9rem] border bg-white ${team.border} shadow-[0_26px_60px_-42px_rgba(15,23,42,0.3)]`}
                  data-testid={`card-team-roster-${getPlayerSlug(team.name)}`}
                >
                  <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${team.accentLine}`} />

                  <div className={`grid gap-5 p-5 md:grid-cols-[116px_1fr] md:p-6 ${team.layout === "right" ? "md:grid-cols-[1fr_116px]" : ""}`}>
                    <div className={team.layout === "right" ? "md:order-2" : ""}>
                      <div className={`mx-auto flex h-[120px] w-[86px] items-center justify-center rounded-[1.7rem] bg-gradient-to-b ${team.crest} text-white shadow-[0_22px_50px_-26px_rgba(15,23,42,0.45)]`}>
                        <div className="relative flex h-full w-full items-center justify-center">
                          <Shield className="absolute inset-0 h-full w-full p-2 opacity-18" />
                          <Trophy className="relative h-9 w-9" />
                        </div>
                      </div>
                    </div>

                    <div className={team.layout === "right" ? "md:order-1 md:text-right" : ""}>
                      <h3 className={`whitespace-nowrap font-serif text-[2rem] font-bold leading-none md:text-[2.2rem] ${team.accentText}`} data-testid={`text-roster-team-name-${getPlayerSlug(team.name)}`}>
                        {team.name}
                      </h3>
                      <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.24em] text-secondary">Captain</p>
                      <p className="mt-1 whitespace-nowrap font-serif text-[1.45rem] font-bold leading-none text-primary md:text-[1.65rem]" data-testid={`text-roster-captain-${getPlayerSlug(team.name)}`}>
                        {team.captain}
                      </p>

                      <div className="mt-5 space-y-2.5">
                        {team.players.map((player) => {
                          const playerSlug = getPlayerSlug(player.name);
                          const slotClasses = SLOT_STYLES[player.slot as keyof typeof SLOT_STYLES];

                          return (
                            <div
                              key={player.name}
                              className={`grid grid-cols-[auto_1fr] items-center gap-3 border-b border-primary/8 pb-2.5 last:border-b-0 last:pb-0 ${team.layout === "right" ? "md:grid-cols-[1fr_auto]" : ""}`}
                              data-testid={`row-team-roster-${playerSlug}`}
                            >
                              <div className={`flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br text-sm font-bold shadow-sm ${slotClasses} ${team.layout === "right" ? "md:order-2" : ""}`}>
                                {player.slot}
                              </div>
                              <p className={`whitespace-nowrap font-sans text-[1.05rem] font-semibold leading-none text-primary md:text-[1.18rem] ${team.layout === "right" ? "md:order-1" : ""}`} data-testid={`text-roster-player-${playerSlug}`}>
                                {player.name}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="order-2 flex items-center justify-center lg:px-1">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-primary/10 bg-white text-center shadow-[0_20px_50px_-35px_rgba(15,23,42,0.35)]">
                <span className="font-serif text-3xl font-bold tracking-tight text-primary" data-testid="text-team-rosters-vs">
                  VS
                </span>
              </div>
            </div>
          </div>

          <div className="mt-5 space-y-4">
            {FLIGHT_MATCHUPS.map((flight) => {
              const bluePlayerSlug = getPlayerSlug(flight.bluePlayer.name);
              const redPlayerSlug = getPlayerSlug(flight.redPlayer.name);
              const slotClasses = SLOT_STYLES[flight.slot as keyof typeof SLOT_STYLES];

              return (
                <div key={flight.key} className="grid gap-4 lg:grid-cols-[170px_minmax(0,1fr)_minmax(0,1fr)] lg:items-stretch">
                  <div className="relative overflow-hidden rounded-[1.7rem] border border-primary/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(247,245,241,0.96))] px-5 py-5 shadow-[0_22px_45px_-38px_rgba(15,23,42,0.25)]">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className={`font-serif text-[1.7rem] font-bold leading-none ${flight.accentText}`} data-testid={`text-flight-title-${flight.key}`}>
                          {flight.title}
                        </h3>
                        <div className="mt-4 space-y-1.5 text-[0.98rem] leading-6 text-foreground/72">
                          {flight.description.map((line) => (
                            <p key={line}>{line}</p>
                          ))}
                        </div>
                      </div>
                      <div className={`font-serif text-[3.1rem] font-bold leading-none ${flight.letterText}`}>{flight.slot}</div>
                    </div>
                  </div>

                  <div
                    className="grid min-h-[140px] overflow-hidden rounded-[1.7rem] border border-sky-200/90 bg-white shadow-[0_24px_50px_-38px_rgba(15,23,42,0.28)] md:grid-cols-[144px_1fr]"
                    data-testid={`card-flight-player-blue-${flight.key}`}
                  >
                    <div className="h-full overflow-hidden bg-[linear-gradient(135deg,#0c2340,#174a7a)]">
                      <img
                        src={flight.bluePlayer.image}
                        alt={flight.bluePlayer.name}
                        className={`h-full w-full object-cover ${flight.bluePlayer.imageClassName ?? "object-center"}`}
                        data-testid={`img-flight-player-${bluePlayerSlug}`}
                      />
                    </div>
                    <div className="flex items-center justify-between gap-4 p-5">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-secondary">Ramstein Ryder Cup</p>
                        <p className="mt-3 font-serif text-[1.9rem] font-bold leading-none text-primary md:text-[2.15rem]" data-testid={`text-flight-player-${bluePlayerSlug}`}>
                          {flight.bluePlayer.name}
                        </p>
                      </div>
                      <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-base font-bold shadow-sm ${slotClasses}`}>
                        {flight.slot}
                      </div>
                    </div>
                  </div>

                  <div
                    className="grid min-h-[140px] overflow-hidden rounded-[1.7rem] border border-rose-200/90 bg-white shadow-[0_24px_50px_-38px_rgba(15,23,42,0.28)] md:grid-cols-[144px_1fr]"
                    data-testid={`card-flight-player-red-${flight.key}`}
                  >
                    <div className="h-full overflow-hidden bg-[linear-gradient(135deg,#2f0d12,#8d1c2b)]">
                      <img
                        src={flight.redPlayer.image}
                        alt={flight.redPlayer.name}
                        className={`h-full w-full object-cover ${flight.redPlayer.imageClassName ?? "object-center"}`}
                        data-testid={`img-flight-player-${redPlayerSlug}`}
                      />
                    </div>
                    <div className="flex items-center justify-between gap-4 p-5">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-secondary">Ramstein Ryder Cup</p>
                        <p className="mt-3 font-serif text-[1.9rem] font-bold leading-none text-primary md:text-[2.15rem]" data-testid={`text-flight-player-${redPlayerSlug}`}>
                          {flight.redPlayer.name}
                        </p>
                      </div>
                      <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-base font-bold shadow-sm ${slotClasses}`}>
                        {flight.slot}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 border-t border-primary/10 pt-16 md:pt-20">
          <div className="mb-10">
            <h2 className="font-serif text-3xl font-bold text-primary md:text-5xl" data-testid="text-ladies-teams-heading">
              Ladies Teams
            </h2>
          </div>

          <div className="space-y-8 md:space-y-10">
            {LADIES_TEAMS.map((team) => (
              <div
                key={team.name}
                className={`group relative overflow-hidden rounded-[2rem] border ${team.surface} ${team.glow}`}
                data-testid={`section-ladies-team-${getPlayerSlug(team.name)}`}
              >
                <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${team.accent}`} />
                <div className="absolute right-0 top-0 hidden h-48 w-48 translate-x-10 -translate-y-10 rounded-full bg-white/45 blur-3xl md:block" />

                <div className="relative p-5 md:p-7 lg:p-8">
                  <div className="mb-5 rounded-[1.6rem] border border-white/55 bg-white/72 px-5 py-4 backdrop-blur-sm md:px-6 md:py-5">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <h3 className="font-serif text-3xl font-bold text-primary md:text-[2.05rem]" data-testid={`text-ladies-team-name-${getPlayerSlug(team.name)}`}>
                          {team.name}
                        </h3>
                        <p className="mt-2 text-sm font-semibold uppercase tracking-[0.22em] text-secondary" data-testid={`text-ladies-team-subtitle-${getPlayerSlug(team.name)}`}>
                          {team.subtitle}
                        </p>
                      </div>
                      <div className={`hidden rounded-2xl bg-gradient-to-br ${team.accent} px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] text-white shadow-sm md:block`}>
                        {team.badge}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {team.players.map((player) => {
                      const playerSlug = getPlayerSlug(player.name);

                      return (
                        <Card
                          key={player.name}
                          className="overflow-hidden rounded-[1.5rem] border border-white/65 bg-white/90 shadow-[0_20px_50px_-35px_rgba(15,23,42,0.45)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-[0_28px_70px_-35px_rgba(13,61,110,0.35)]"
                          data-testid={`card-ladies-player-${playerSlug}`}
                        >
                          <CardContent className="relative p-0">
                            <div className={`h-1.5 w-full bg-gradient-to-r ${team.accent}`} />

                            <div className={`relative aspect-square overflow-hidden bg-gradient-to-br ${team.accent}`}>
                              {player.image ? (
                                <img
                                  src={player.image}
                                  alt={player.name}
                                  className={`h-full w-full object-cover ${player.imageClassName ?? "object-center"}`}
                                  data-testid={`img-ladies-player-${playerSlug}`}
                                />
                              ) : (
                                <div
                                  className={`relative h-full w-full bg-gradient-to-br ${team.accent}`}
                                  data-testid={`img-ladies-player-placeholder-${playerSlug}`}
                                >
                                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.34),transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.12),rgba(8,20,35,0.18))]" />
                                  <div className="relative flex h-full items-center justify-center">
                                    <div className="flex h-28 w-28 items-center justify-center rounded-full border border-white/40 bg-white/16 shadow-[0_20px_50px_-25px_rgba(15,23,42,0.55)] backdrop-blur-sm md:h-32 md:w-32">
                                      <UserRound className="h-14 w-14 text-white/92 md:h-16 md:w-16" />
                                    </div>
                                  </div>
                                </div>
                              )}
                              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#081423]/88 via-[#081423]/28 to-transparent" />
                            </div>

                            <div className="flex min-h-[118px] flex-col justify-start p-4 md:min-h-[126px] md:p-5">
                              <div className="flex items-start justify-between gap-3">
                                <div>
                                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] leading-[1.55] text-secondary">
                                    <span className="block">Ramstein Ryder Cup •</span>
                                    <span className="block">{team.label}</span>
                                  </p>
                                  <h4 className="mt-2 font-serif text-[1.5rem] font-bold leading-none tracking-tight text-primary md:text-[1.68rem]" data-testid={`text-ladies-player-${playerSlug}`}>
                                    {player.name}
                                  </h4>
                                </div>
                                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${team.accent} text-sm font-bold text-white shadow-sm`}>
                                  {team.badge}
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
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
