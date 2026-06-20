import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Trophy, UserRound } from "lucide-react";
import { useState } from "react";
import jasonDousharmImage from "@assets/1665088037422_1776551209099.jpg";
import mikeParsonsImage from "@assets/image_1776551520237.png";
import blueTeamLogoImage from "@assets/image_1781915164301.png";
import redTeamLogoImage from "@assets/image_1781915411373.png";
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
import veteranAirForceLogoImage from "@assets/image_1781918037931.png";

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

const VETERAN_BADGE_PLAYERS = new Set([
  "Jason Dousharm",
  "Mike Parsons",
  "Mike Gibbons",
  "Darren Johnson",
  "John Gregg",
  "Darrel Johnson",
]);

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

type SelectedPlayer = {
  name: string;
  image: string;
  imageClassName?: string;
  slot: keyof typeof SLOT_STYLES;
  team: "blue" | "red";
  flightTitle: string;
};

const PLAYER_MODAL_PROFILES: Record<string, { bio: string[]; facts: string[] }> = {
  "Jason Dousharm": {
    bio: [
      "Jason Dousharm, Ramstein Class of 1988, steps into the Ramstein Ryder Cup as the Blue Team Captain and Alpha Flight lead. A die-hard Chargers fan with Celtics, Angels, and Penguins loyalty mixed in, Jason brings a full sports fan’s energy to the weekend — competitive, loud when needed, and always ready for the next matchup.",
      "Off the course, Jason enjoys poker, golf, and counting down the final 3½ years until retirement. On the course, he’s looking to lead from the front, keep the Blue Team focused, and prove that experience still matters when the pressure is on.",
    ],
    facts: ["Class of 1988", "Chargers", "Celtics", "Angels", "Penguins", "Poker", "3½ years to retirement"],
  },
};

export default function Players() {
  const [selectedPlayer, setSelectedPlayer] = useState<SelectedPlayer | null>(null);
  const selectedPlayerProfile = selectedPlayer ? PLAYER_MODAL_PROFILES[selectedPlayer.name] : null;

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
            <div className="inline-flex items-start gap-4 md:gap-5">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-50 text-amber-500 shadow-[0_16px_40px_-28px_rgba(15,23,42,0.28)] md:h-[4.5rem] md:w-[4.5rem]">
                <Trophy className="h-8 w-8 md:h-9 md:w-9" />
              </div>
              <div className="text-left">
                <h2 className="whitespace-nowrap font-serif text-[2.15rem] font-bold leading-none tracking-[0.02em] text-primary md:text-[3.15rem]" data-testid="text-team-rosters-heading">
                  TEAM ROSTERS
                </h2>
                <div className="mt-2 flex items-center gap-3 md:gap-4">
                  <div className="h-px w-9 bg-amber-300 md:w-14" />
                  <p className="whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.34em] text-secondary" data-testid="text-team-rosters-subtitle">
                    RAMSTEIN RYDER CUP
                  </p>
                  <div className="h-px w-9 bg-amber-300 md:w-14" />
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-8 grid w-full max-w-[1160px] items-center gap-6 lg:grid-cols-[1fr_72px_1fr]">
            {TEAM_ROSTERS.map((team, index) => {
              const isBlueTeam = team.name === "Blue Team";

              return (
                <div key={team.name} className={index === 0 ? "order-1 flex justify-center lg:justify-end" : "order-3 flex justify-center lg:justify-start"}>
                  <div
                    className={`grid h-[230px] w-full max-w-[520px] box-border items-center overflow-hidden rounded-[18px] border-2 px-4 py-5 shadow-[0_24px_45px_rgba(15,23,42,0.08)] ${
                      isBlueTeam ? "border-[#0B3D91] bg-[#F5FAFF] grid-cols-[70px_180px_220px]" : "border-[#E00022] bg-[#FFF5F5] grid-cols-[220px_180px_70px]"
                    }`}
                    data-testid={`card-team-roster-${getPlayerSlug(team.name)}`}
                  >
                    {isBlueTeam ? (
                      <>
                        <div className="flex items-center justify-center">
                          <img
                            src={blueTeamLogoImage}
                            alt="Blue Team logo"
                            className="h-[55px] w-auto object-contain drop-shadow-[0_18px_28px_rgba(0,0,0,0.18)]"
                            data-testid="img-blue-team-logo"
                          />
                        </div>

                        <div className="flex h-full min-w-0 flex-col justify-center pr-4">
                          <h3
                            className="whitespace-nowrap uppercase leading-none text-[#0A3A78]"
                            style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: '26px', fontWeight: 700, lineHeight: 1 }}
                            data-testid={`text-roster-team-name-${getPlayerSlug(team.name)}`}
                          >
                            {team.name}
                          </h3>
                          <p
                            className="mb-[6px] mt-3 whitespace-nowrap uppercase text-[#0A3A78]"
                            style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2.6px' }}
                          >
                            Captain
                          </p>
                          <p
                            className="whitespace-nowrap text-[#0A3A78]"
                            style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: '18px', fontWeight: 700 }}
                            data-testid={`text-roster-captain-${getPlayerSlug(team.name)}`}
                          >
                            {team.captain}
                          </p>
                        </div>

                        <div className="min-w-0 border-l border-[#DDE5EF] pl-4">
                          {team.players.map((player) => {
                            const playerSlug = getPlayerSlug(player.name);
                            const badgeClass =
                              player.slot === "A"
                                ? "bg-[#F5A800]"
                                : player.slot === "B"
                                  ? "bg-[#0B84FF]"
                                  : player.slot === "C"
                                    ? "bg-[#18A957]"
                                    : "bg-[#EF123E]";

                            return (
                              <div
                                key={player.name}
                                className="grid h-[38px] grid-cols-[40px_1fr] items-center border-b border-[#DDE5EF] text-[#071F4F] last:border-b-0"
                                style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', fontSize: '15px', fontWeight: 700 }}
                                data-testid={`row-team-roster-${playerSlug}`}
                              >
                                <div className={`flex h-8 w-8 items-center justify-center rounded-[9px] text-[15px] text-white shadow-[0_6px_12px_rgba(0,0,0,0.16)] ${badgeClass}`}>
                                  {player.slot}
                                </div>
                                <p className="whitespace-nowrap" data-testid={`text-roster-player-${playerSlug}`}>
                                  {player.name}
                                </p>
                              </div>
                            );
                          })}
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="min-w-0 border-r border-[#DDE5EF] pr-4">
                          {team.players.map((player) => {
                            const playerSlug = getPlayerSlug(player.name);
                            const badgeClass =
                              player.slot === "A"
                                ? "bg-[#F5A800]"
                                : player.slot === "B"
                                  ? "bg-[#0B84FF]"
                                  : player.slot === "C"
                                    ? "bg-[#18A957]"
                                    : "bg-[#EF123E]";

                            return (
                              <div
                                key={player.name}
                                className="grid h-[38px] grid-cols-[40px_1fr] items-center border-b border-[#DDE5EF] text-[#071F4F] last:border-b-0"
                                style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', fontSize: '15px', fontWeight: 700 }}
                                data-testid={`row-team-roster-${playerSlug}`}
                              >
                                <div className={`flex h-8 w-8 items-center justify-center rounded-[9px] text-[15px] text-white shadow-[0_6px_12px_rgba(0,0,0,0.16)] ${badgeClass}`}>
                                  {player.slot}
                                </div>
                                <p className="whitespace-nowrap" data-testid={`text-roster-player-${playerSlug}`}>
                                  {player.name}
                                </p>
                              </div>
                            );
                          })}
                        </div>

                        <div className="flex h-full min-w-0 flex-col justify-center px-4">
                          <h3
                            className="whitespace-nowrap uppercase leading-none text-[#C9001F]"
                            style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: '26px', fontWeight: 700, lineHeight: 1 }}
                            data-testid={`text-roster-team-name-${getPlayerSlug(team.name)}`}
                          >
                            {team.name}
                          </h3>
                          <p
                            className="mb-[6px] mt-3 whitespace-nowrap uppercase text-[#D4001A]"
                            style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2.6px' }}
                          >
                            Captain
                          </p>
                          <p
                            className="whitespace-nowrap text-[#C9001F]"
                            style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: '18px', fontWeight: 700 }}
                            data-testid={`text-roster-captain-${getPlayerSlug(team.name)}`}
                          >
                            {team.captain}
                          </p>
                        </div>

                        <div className="flex items-center justify-center">
                          <img
                            src={redTeamLogoImage}
                            alt="Red Team logo"
                            className="h-[55px] w-auto object-contain drop-shadow-[0_18px_28px_rgba(0,0,0,0.18)]"
                            data-testid="img-red-team-logo"
                          />
                        </div>
                      </>
                    )}
                  </div>
                </div>
              );
            })}

            <div className="order-2 flex items-center justify-center">
              <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full border border-[#DDE5EF] bg-white shadow-[0_14px_30px_rgba(15,23,42,0.12)]">
                <span
                  className="text-[#0A3A78]"
                  style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: '34px', fontWeight: 700 }}
                  data-testid="text-team-rosters-vs"
                >
                  VS
                </span>
              </div>
            </div>
          </div>

          <div className="mt-5 space-y-4">
            {FLIGHT_MATCHUPS.map((flight) => {
              const bluePlayerSlug = getPlayerSlug(flight.bluePlayer.name);
              const redPlayerSlug = getPlayerSlug(flight.redPlayer.name);

              return (
                <div key={flight.key} className="mx-auto grid w-full max-w-[1160px] grid-cols-[1fr_90px_1fr] items-center gap-[18px]">
                  <button
                    type="button"
                    className="relative grid h-[170px] overflow-hidden rounded-[1.7rem] border border-sky-200/90 bg-white text-left shadow-[0_24px_50px_-38px_rgba(15,23,42,0.28)] transition-transform duration-200 hover:-translate-y-0.5 grid-cols-[144px_minmax(0,1fr)]"
                    data-testid={`card-flight-player-blue-${flight.key}`}
                    onClick={() =>
                      setSelectedPlayer({
                        name: flight.bluePlayer.name,
                        image: flight.bluePlayer.image,
                        imageClassName: flight.bluePlayer.imageClassName,
                        slot: flight.slot,
                        team: "blue",
                        flightTitle: flight.title,
                      })
                    }
                  >
                    <div className="h-full overflow-hidden bg-[linear-gradient(135deg,#0c2340,#174a7a)]">
                      <img
                        src={flight.bluePlayer.image}
                        alt={flight.bluePlayer.name}
                        className={`h-full w-full object-cover ${flight.bluePlayer.imageClassName ?? "object-center"}`}
                        data-testid={`img-flight-player-${bluePlayerSlug}`}
                      />
                    </div>
                    <div className="relative flex h-full items-center overflow-hidden p-5">
                      {VETERAN_BADGE_PLAYERS.has(flight.bluePlayer.name) ? (
                        <img
                          src={veteranAirForceLogoImage}
                          alt="U.S. Air Force Veteran badge watermark"
                          className="pointer-events-none absolute right-7 top-1/2 z-[1] h-[150px] w-[150px] -translate-y-1/2 object-contain opacity-[0.08]"
                          data-testid={`img-veteran-watermark-${bluePlayerSlug}`}
                        />
                      ) : null}
                      <div className="relative z-[2]">
                        <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-secondary">Ramstein Ryder Cup</p>
                        <p className="mt-3 whitespace-nowrap font-serif text-[1.9rem] font-bold leading-none text-primary md:text-[2.15rem]" data-testid={`text-flight-player-${bluePlayerSlug}`}>
                          {flight.bluePlayer.name}
                        </p>
                      </div>
                    </div>
                  </button>

                  <div className="flex items-center justify-center">
                    <div
                      className="flex h-[74px] w-[74px] items-center justify-center rounded-full border border-[#DDE5EF] bg-white shadow-[0_14px_30px_rgba(15,23,42,0.10)]"
                      data-testid={`badge-flight-letter-${flight.key}`}
                    >
                      <span
                        className="leading-none"
                        style={{
                          fontFamily: 'Georgia, "Times New Roman", serif',
                          fontSize: '34px',
                          fontWeight: 700,
                          color: flight.slot === 'A' ? '#F5A800' : flight.slot === 'B' ? '#0B84FF' : flight.slot === 'C' ? '#18A957' : '#EF123E',
                        }}
                      >
                        {flight.slot}
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="relative grid h-[170px] overflow-hidden rounded-[1.7rem] border border-rose-200/90 bg-white text-left shadow-[0_24px_50px_-38px_rgba(15,23,42,0.28)] transition-transform duration-200 hover:-translate-y-0.5 grid-cols-[144px_minmax(0,1fr)]"
                    data-testid={`card-flight-player-red-${flight.key}`}
                    onClick={() =>
                      setSelectedPlayer({
                        name: flight.redPlayer.name,
                        image: flight.redPlayer.image,
                        imageClassName: flight.redPlayer.imageClassName,
                        slot: flight.slot,
                        team: "red",
                        flightTitle: flight.title,
                      })
                    }
                  >
                    <div className="h-full overflow-hidden bg-[linear-gradient(135deg,#2f0d12,#8d1c2b)]">
                      <img
                        src={flight.redPlayer.image}
                        alt={flight.redPlayer.name}
                        className={`h-full w-full object-cover ${flight.redPlayer.imageClassName ?? "object-center"}`}
                        data-testid={`img-flight-player-${redPlayerSlug}`}
                      />
                    </div>
                    <div className="relative flex h-full items-center overflow-hidden p-5">
                      {VETERAN_BADGE_PLAYERS.has(flight.redPlayer.name) ? (
                        <img
                          src={veteranAirForceLogoImage}
                          alt="U.S. Air Force Veteran badge watermark"
                          className="pointer-events-none absolute right-7 top-1/2 z-[1] h-[150px] w-[150px] -translate-y-1/2 object-contain opacity-[0.08]"
                          data-testid={`img-veteran-watermark-${redPlayerSlug}`}
                        />
                      ) : null}
                      <div className="relative z-[2]">
                        <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-secondary">Ramstein Ryder Cup</p>
                        <p className="mt-3 whitespace-nowrap font-serif text-[1.9rem] font-bold leading-none text-primary md:text-[2.15rem]" data-testid={`text-flight-player-${redPlayerSlug}`}>
                          {flight.redPlayer.name}
                        </p>
                      </div>
                    </div>
                  </button>
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

      <Dialog open={selectedPlayer !== null} onOpenChange={(open) => !open && setSelectedPlayer(null)}>
        <DialogContent className="max-w-[850px] border-none bg-transparent p-0 shadow-none">
          {selectedPlayer ? (
            <div
              className={`max-h-[80vh] overflow-hidden rounded-[22px] border bg-white shadow-[0_35px_100px_-40px_rgba(15,23,42,0.45)] ${
                selectedPlayer.team === "blue" ? "border-sky-200/90" : "border-rose-200/90"
              }`}
            >
              <div
                className={`h-1.5 w-full ${
                  selectedPlayer.team === "blue"
                    ? "bg-[linear-gradient(90deg,#0c2340,#174a7a)]"
                    : "bg-[linear-gradient(90deg,#2f0d12,#8d1c2b)]"
                }`}
              />
              <div className="grid max-h-[calc(80vh-6px)] md:grid-cols-[34fr_66fr]">
                <div className="relative overflow-hidden">
                  <img
                    src={selectedPlayer.image}
                    alt={selectedPlayer.name}
                    className={`h-[280px] w-full object-cover md:h-full ${selectedPlayer.imageClassName ?? "object-center"}`}
                    data-testid="img-selected-player-modal"
                  />
                </div>
                <div className="relative flex min-h-0 flex-col overflow-hidden p-6 md:p-8">
                  <div className="relative z-[2] pr-16 md:pr-20">
                    <div className="md:max-w-[460px]">
                      <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-secondary">Ramstein Ryder Cup</p>
                      <p
                        className="mt-3 font-serif text-[2.6rem] font-bold leading-[0.9] text-[#163d74] md:text-[3.35rem]"
                        data-testid="text-selected-player-name"
                      >
                        {selectedPlayer.name}
                      </p>
                      <p
                        className="mt-5 text-[0.82rem] font-bold uppercase tracking-[0.42em] text-[#5c7091]"
                        data-testid="text-selected-player-team"
                      >
                        {selectedPlayer.team === "blue" ? "Blue Team" : "Red Team"}
                      </p>
                      <p className="mt-3 font-serif text-[1.9rem] font-bold text-[#c73b58]" data-testid="text-selected-player-flight">
                        {selectedPlayer.flightTitle}
                      </p>
                    </div>
                    <div
                      className="absolute right-0 top-0 flex h-[76px] w-[76px] items-center justify-center rounded-full border border-[#efe9de] bg-white shadow-[0_18px_38px_rgba(15,23,42,0.12)] md:right-1 md:top-[-10px]"
                      data-testid="badge-selected-player-slot"
                    >
                      <span
                        style={{
                          fontFamily: 'Georgia, "Times New Roman", serif',
                          fontSize: '36px',
                          fontWeight: 700,
                          color:
                            selectedPlayer.slot === 'A'
                              ? '#D9A11F'
                              : selectedPlayer.slot === 'B'
                                ? '#0B84FF'
                                : selectedPlayer.slot === 'C'
                                  ? '#18A957'
                                  : '#EF123E',
                        }}
                      >
                        {selectedPlayer.slot}
                      </span>
                    </div>
                  </div>
                  <div className="relative z-[2] mt-6 rounded-[1.35rem] border border-primary/8 bg-[linear-gradient(180deg,rgba(247,244,239,0.78),rgba(255,255,255,0.96))] p-[22px]">
                    <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-secondary" data-testid="text-selected-player-bio-heading">
                      Bio
                    </p>
                    <div
                      className="mt-4 max-h-[260px] space-y-4 overflow-y-auto pr-2 text-[15px] leading-[1.6] text-foreground/78"
                      data-testid="text-selected-player-bio"
                    >
                      {selectedPlayerProfile?.bio?.length ? (
                        selectedPlayerProfile.bio.map((paragraph) => <p key={paragraph}>{paragraph}</p>)
                      ) : (
                        <p>Full player bio coming soon.</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </div>
  );
}
