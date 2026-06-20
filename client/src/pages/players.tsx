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

const PLAYER_CLASS_YEARS: Record<string, string> = {
  "Jason Dousharm": "Class of 1988",
  "Mike Parsons": "Class of 1987",
  "Mike Gibbons": "Class of 1987",
  "Robby Fuller": "Class of 1988",
  "Darren Johnson": "Class of 1987",
  "Darrel Johnson": "Class of 1990",
  "John Gregg": "Class of 1988",
  "Allen Parsons": "Class of 1985",
};

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
      "Jason Dousharm steps into the Ramstein Ryder Cup as the Blue Team Captain and Alpha Flight lead. An Air Force veteran, Jason brings a competitive spirit and leadership mentality to everything he does. A die-hard Chargers fan with Celtics, Angels, and Penguins loyalty mixed in, he carries a true sports fan’s energy into every weekend — competitive, focused, and always ready for the next challenge. An avid bowler with 27 perfect 300 games, he knows a thing or two about performing under pressure.",
      "Off the course, Jason enjoys poker, golf, and counting down the final 3½ years until retirement. Whether leading the Blue Team, chasing another perfect game, or enjoying time with friends and family, he believes experience still matters when the pressure is on. This Ryder Cup weekend, he’ll be looking to lead from the front, keep the Blue Team focused, and prove that preparation and teamwork are still a winning combination.",
    ],
    facts: ["Class of 1988", "Chargers", "Celtics", "Angels", "Penguins", "Poker", "3½ years to retirement"],
  },
  "Mike Gibbons": {
    bio: [
      "Mike Gibbons brings a strategist’s mindset to the Ramstein Ryder Cup. An Air Force veteran and loyal fan of the Dallas Cowboys, Lakers, and Guardians, Mike never misses an opportunity to talk sports, analyze a matchup, or place a well-thought-out wager. His competitive nature extends beyond the game itself, as he has built a career and a reputation around investing and helping others plan for their financial future.",
      "Off the course, Mike enjoys spending time with his family, especially his grandchildren, who are at the center of everything he does. Whether he’s discussing markets, breaking down sports predictions, or sharing stories with family, Mike always brings a calm confidence and steady presence. This Ryder Cup weekend, he’ll be looking to combine preparation, experience, and a little sports-betting magic to help lead his team to victory.",
    ],
    facts: [],
  },
  "Mike Parsons": {
    bio: [
      "Mike Parsons steps into the Ramstein Ryder Cup as the Red Team Captain, bringing a relaxed confidence and competitive spirit to the weekend. An Air Force veteran who continued serving as a government contractor after retirement, Mike is a loyal Celtics and Patriots fan who enjoys staying active and finding every opportunity to get onto a golf course. Known by many as “UTZ,” he has earned a reputation as a deadly three-point shooter and can often be found putting on a show long before the competition officially begins.",
      "Off the course, Mike enjoys traveling and making time to visit his two daughters whenever possible. An avid golfer, he’s especially dangerous on the driving range, where his smooth swing has become part of his reputation. Whether he’s planning his next adventure, talking sports, or spending time with family, Mike brings a laid-back attitude and steady leadership wherever he goes. This Ryder Cup weekend, he’ll be looking to guide the Red Team, keep everyone loose, and prove that great captains know when to lead and when to let their game do the talking.",
    ],
    facts: [],
  },
  "Robby Fuller": {
    bio: [
      "Robby Fuller brings an entrepreneurial spirit and quick wit to the Ramstein Ryder Cup. Having spent most of his life building businesses and working for himself, Robby now enjoys full-time retirement after an accident at work changed the course of his life. A talented athlete since his younger days, he was a standout high school baseball player whose pitching made life difficult for opposing hitters. Today, he’s known for having one of the best short games around the greens and never misses an opportunity to keep his fellow golfers on their toes.",
      "Off the course, Robby enjoys riding his motorcycle, spending time with family, and golfing two to three times a week whenever he can. He recently moved back to Las Vegas to be closer to his parents and is enjoying life at a slower pace. Having also just purchased his dream car, Robby is making the most of retirement and the freedom that comes with it. This Ryder Cup weekend, he’ll be bringing his sharp sense of humor, competitive edge, and steady short game to help his team find success.",
    ],
    facts: [],
  },
  "Darren Johnson": {
    bio: [
      "Darren Johnson arrives at the Ramstein Ryder Cup with decades of experience and plenty of stories to share. An Air Force veteran and recently retired after an incredible 37-year federal career, Darren is a loyal Buffalo Bills and Guardians fan who never misses an opportunity to catch a game. A NASCAR enthusiast at heart, he has transformed his garage into the ultimate man cave — a place where sports, laughter, and good company are always welcome.",
      "Off the course, Darren is looking forward to the next chapter of life, spending more time traveling in his new travel trailer and making memories with his family, especially his children. Known to many as a true K9 Extraordinaire, Darren built a remarkable career around service, dedication, and leadership. This Ryder Cup weekend, he’ll be bringing that same steady presence, competitive spirit, and veteran experience to every match he plays.",
    ],
    facts: [],
  },
  "Darrel Johnson": {
    bio: [
      "Darrel Johnson brings a laid-back country spirit to the Ramstein Ryder Cup. A retired Air Force officer and loyal Buffalo Bills fan, he proudly cheers on Josh Allen every chance he gets and never misses an opportunity to support his beloved Penguins. A country boy at heart, Darrel enjoys simple pleasures, great company, and making memories wherever life takes him. He’s also a proud member of 7220sports.com and has recently added baseball umpiring to his growing list of hobbies.",
      "Off the course, Darrel and his wife have fully embraced the travel lifestyle, even selling their home to live and explore the country in their fifth wheel. Whether it’s attending Frontier Days, traveling around the world, or spending time with family, Darrel makes the most of every adventure. He’s especially proud of his two successful children, including his son Andrew, a graduate of the University of Wyoming who earned his pilot’s license and is on his way to becoming a fighter pilot. This Ryder Cup weekend, Darrel will be bringing his positive attitude, life experience, and adventurous spirit to every match he plays.",
    ],
    facts: [],
  },
  "John Gregg": {
    bio: [
      "John Gregg brings determination and resilience to the Ramstein Ryder Cup. An Air Force veteran, retired law enforcement officer, and devoted Pittsburgh Steelers fan, John spent many years serving with the Lubbock and Henderson Police Departments, including time as a motorcycle officer. His career was built on discipline, service, and staying calm under pressure — qualities that still show up every time he steps onto the golf course.",
      "Off the course, John enjoys spending time with his five beautiful children and his beloved dogs. Although he recently underwent back surgery, there was never any doubt he would be ready for Ryder Cup weekend, because sitting on the sidelines simply isn’t his style. Looking ahead, he plans to spend more time traveling throughout Asia and enjoying retirement to the fullest. This Ryder Cup weekend, John will be bringing his toughness, sense of humor, and unwavering commitment to his team, proving that a little back surgery isn't going to slow him down.",
    ],
    facts: [],
  },
  "Allen Parsons": {
    bio: [
      "Allen Parsons brings experience, competitiveness, and plenty of stories to the Ramstein Ryder Cup. As the oldest player in the field, Allen proves that age is just another number when it comes to competition. A die-hard Patriots and Celtics fan, he loves spending time with family, friends, and his children, who remain at the center of his world. When he's not on the golf course, Allen can often be found competing in dart leagues, where his superb accuracy and competitive nature have made him a formidable opponent.",
      "Off the course, Allen enjoys spending time at the lake and never misses an opportunity to watch his boys play hockey. Whether he's cheering from the stands, relaxing on the water, or sharing laughs with friends and family, he brings a positive energy wherever he goes. This Ryder Cup weekend, Allen will be bringing veteran experience, steady nerves, and a competitive edge that reminds everyone why he's still one of the toughest competitors around.",
    ],
    facts: [],
  },
};

function getRosterBadgeClass(slot: keyof typeof SLOT_STYLES) {
  switch (slot) {
    case "A":
      return "bg-[#F5A800]";
    case "B":
      return "bg-[#0B84FF]";
    case "C":
      return "bg-[#18A957]";
    default:
      return "bg-[#EF123E]";
  }
}

function getSelectedPlayerDetails(name: string): Omit<SelectedPlayer, "name"> | null {
  for (const flight of FLIGHT_MATCHUPS) {
    if (flight.bluePlayer.name === name) {
      return {
        image: flight.bluePlayer.image,
        imageClassName: flight.bluePlayer.imageClassName,
        slot: flight.slot,
        team: "blue",
        flightTitle: flight.title,
      };
    }

    if (flight.redPlayer.name === name) {
      return {
        image: flight.redPlayer.image,
        imageClassName: flight.redPlayer.imageClassName,
        slot: flight.slot,
        team: "red",
        flightTitle: flight.title,
      };
    }
  }

  return null;
}

export default function Players() {
  const [selectedPlayer, setSelectedPlayer] = useState<SelectedPlayer | null>(null);
  const selectedPlayerProfile = selectedPlayer ? PLAYER_MODAL_PROFILES[selectedPlayer.name] : null;
  const selectedPlayerClassFact = selectedPlayer
    ? PLAYER_CLASS_YEARS[selectedPlayer.name] ?? selectedPlayerProfile?.facts.find((fact) => fact.toLowerCase().startsWith("class of"))
    : null;

  const openPlayerFromRoster = (playerName: string) => {
    const playerDetails = getSelectedPlayerDetails(playerName);

    if (!playerDetails) {
      return;
    }

    setSelectedPlayer({
      name: playerName,
      ...playerDetails,
    });
  };

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

          <div className="mx-auto mt-8 hidden w-full max-w-[1160px] items-center gap-6 min-[769px]:grid lg:grid-cols-[1fr_72px_1fr]">
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
                            const badgeClass = getRosterBadgeClass(player.slot);

                            return (
                              <button
                                key={player.name}
                                type="button"
                                className="grid h-[38px] w-full grid-cols-[40px_1fr] items-center border-b border-[#DDE5EF] bg-transparent p-0 text-left text-[#071F4F] last:border-b-0"
                                style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', fontSize: '15px', fontWeight: 700 }}
                                data-testid={`row-team-roster-${playerSlug}`}
                                onClick={() => openPlayerFromRoster(player.name)}
                              >
                                <div className={`flex h-8 w-8 items-center justify-center rounded-[9px] text-[15px] text-white shadow-[0_6px_12px_rgba(0,0,0,0.16)] ${badgeClass}`}>
                                  {player.slot}
                                </div>
                                <p className="whitespace-nowrap" data-testid={`text-roster-player-${playerSlug}`}>
                                  {player.name}
                                </p>
                              </button>
                            );
                          })}
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="min-w-0 border-r border-[#DDE5EF] pr-4">
                          {team.players.map((player) => {
                            const playerSlug = getPlayerSlug(player.name);
                            const badgeClass = getRosterBadgeClass(player.slot);

                            return (
                              <button
                                key={player.name}
                                type="button"
                                className="grid h-[38px] w-full grid-cols-[40px_1fr] items-center border-b border-[#DDE5EF] bg-transparent p-0 text-left text-[#071F4F] last:border-b-0"
                                style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', fontSize: '15px', fontWeight: 700 }}
                                data-testid={`row-team-roster-${playerSlug}`}
                                onClick={() => openPlayerFromRoster(player.name)}
                              >
                                <div className={`flex h-8 w-8 items-center justify-center rounded-[9px] text-[15px] text-white shadow-[0_6px_12px_rgba(0,0,0,0.16)] ${badgeClass}`}>
                                  {player.slot}
                                </div>
                                <p className="whitespace-nowrap" data-testid={`text-roster-player-${playerSlug}`}>
                                  {player.name}
                                </p>
                              </button>
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

          <div className="mx-auto mt-8 grid w-full max-w-[640px] gap-5 min-[769px]:hidden">
            {TEAM_ROSTERS.map((team, index) => {
              const isBlueTeam = team.name === "Blue Team";
              const logoImage = isBlueTeam ? blueTeamLogoImage : redTeamLogoImage;
              const cardSurface = isBlueTeam ? "border-[#0B3D91] bg-[#F5FAFF]" : "border-[#E00022] bg-[#FFF5F5]";
              const headingText = isBlueTeam ? "text-[#0A3A78]" : "text-[#C9001F]";

              return (
                <div key={team.name} className="contents">
                  <div
                    className={`relative overflow-hidden rounded-[1.75rem] border-[1.5px] ${cardSurface} px-5 py-5 shadow-[0_24px_50px_-34px_rgba(15,23,42,0.24)] max-[480px]:rounded-[1.5rem] max-[480px]:px-4 max-[480px]:py-4`}
                    data-testid={`card-team-roster-mobile-${getPlayerSlug(team.name)}`}
                  >
                    <div className={`absolute inset-x-0 top-0 h-1.5 ${isBlueTeam ? "bg-[linear-gradient(90deg,#0B84FF,#0B3D91)]" : "bg-[linear-gradient(90deg,#FF5A76,#E00022)]"}`} />
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <p className={`text-[0.7rem] font-bold uppercase tracking-[0.32em] ${headingText} opacity-70 max-[480px]:text-[0.64rem]`}>
                          Team Roster
                        </p>
                        <h3
                          className={`mt-2 font-serif text-[1.95rem] font-bold leading-none ${headingText} max-[480px]:text-[1.7rem]`}
                          data-testid={`text-roster-team-name-mobile-${getPlayerSlug(team.name)}`}
                        >
                          {team.name}
                        </h3>
                        <p className={`mt-4 text-[0.68rem] font-bold uppercase tracking-[0.3em] ${headingText} opacity-70 max-[480px]:mt-3 max-[480px]:text-[0.62rem]`}>
                          Captain
                        </p>
                        <p
                          className={`mt-1 font-serif text-[1.14rem] font-bold leading-tight ${headingText} max-[480px]:text-[1.02rem]`}
                          data-testid={`text-roster-captain-mobile-${getPlayerSlug(team.name)}`}
                        >
                          {team.captain}
                        </p>
                      </div>

                      <div className={`flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-[1.2rem] ${isBlueTeam ? "bg-[linear-gradient(135deg,#0d3f82,#1256a9)]" : "bg-[linear-gradient(135deg,#bb0f27,#e01032)]"} shadow-[0_20px_32px_-22px_rgba(15,23,42,0.45)] max-[480px]:h-[60px] max-[480px]:w-[60px] max-[480px]:rounded-[1rem]`}>
                        <img
                          src={logoImage}
                          alt={`${team.name} logo`}
                          className="h-[42px] w-[42px] object-contain drop-shadow-[0_10px_18px_rgba(0,0,0,0.22)] max-[480px]:h-[36px] max-[480px]:w-[36px]"
                          data-testid={`img-team-logo-mobile-${getPlayerSlug(team.name)}`}
                        />
                      </div>
                    </div>

                    <div className="mt-5 space-y-2.5 max-[480px]:mt-4 max-[480px]:space-y-2">
                      {team.players.map((player) => {
                        const playerSlug = getPlayerSlug(player.name);
                        const badgeClass = getRosterBadgeClass(player.slot);

                        return (
                          <button
                            key={player.name}
                            type="button"
                            className="flex w-full items-center gap-3 rounded-[1.1rem] border border-white/70 bg-white/88 px-3 py-2.5 text-left shadow-[0_16px_32px_-28px_rgba(15,23,42,0.38)] transition-all duration-200 active:scale-[0.99] max-[480px]:gap-2.5 max-[480px]:rounded-[1rem] max-[480px]:px-2.5 max-[480px]:py-2"
                            data-testid={`row-team-roster-mobile-${playerSlug}`}
                            onClick={() => openPlayerFromRoster(player.name)}
                          >
                            <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-[0.95rem] text-[1.05rem] font-bold text-white shadow-[0_10px_20px_rgba(0,0,0,0.16)] ${badgeClass} max-[480px]:h-11 max-[480px]:w-11 max-[480px]:text-[0.98rem]`}>
                              {player.slot}
                            </div>
                            <p
                              className="min-w-0 truncate text-[1.03rem] font-bold leading-tight text-[#071F4F] max-[480px]:text-[0.94rem]"
                              data-testid={`text-roster-player-mobile-${playerSlug}`}
                            >
                              {player.name}
                            </p>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {index === 0 ? (
                    <div className="flex items-center justify-center">
                      <div className="flex h-[70px] w-[70px] items-center justify-center rounded-full border border-[#DDE5EF] bg-white shadow-[0_16px_34px_rgba(15,23,42,0.12)] max-[480px]:h-[62px] max-[480px]:w-[62px]">
                        <span
                          className="text-[#0A3A78]"
                          style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: '24px', fontWeight: 700 }}
                          data-testid="text-team-rosters-vs-mobile"
                        >
                          VS
                        </span>
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>

          <div className="mt-5 hidden space-y-4 min-[769px]:block">
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
                          className="pointer-events-none absolute left-1/2 top-1/2 z-[1] h-[150px] w-[150px] -translate-x-1/2 -translate-y-1/2 object-contain opacity-[0.08]"
                          data-testid={`img-veteran-watermark-${bluePlayerSlug}`}
                        />
                      ) : null}
                      <div className="relative z-[2]">
                        <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-secondary">Ramstein Ryder Cup</p>
                        <p className="mt-3 whitespace-nowrap font-serif text-[1.9rem] font-bold leading-none text-primary md:text-[2.15rem]" data-testid={`text-flight-player-${bluePlayerSlug}`}>
                          {flight.bluePlayer.name}
                        </p>
                        {PLAYER_CLASS_YEARS[flight.bluePlayer.name] ? (
                          <p
                            className="mt-2 text-[0.72rem] font-bold uppercase tracking-[0.28em] text-foreground/55"
                            data-testid={`text-flight-player-class-${bluePlayerSlug}`}
                          >
                            {PLAYER_CLASS_YEARS[flight.bluePlayer.name]}
                          </p>
                        ) : null}
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
                          className="pointer-events-none absolute left-1/2 top-1/2 z-[1] h-[150px] w-[150px] -translate-x-1/2 -translate-y-1/2 object-contain opacity-[0.08]"
                          data-testid={`img-veteran-watermark-${redPlayerSlug}`}
                        />
                      ) : null}
                      <div className="relative z-[2]">
                        <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-secondary">Ramstein Ryder Cup</p>
                        <p className="mt-3 whitespace-nowrap font-serif text-[1.9rem] font-bold leading-none text-primary md:text-[2.15rem]" data-testid={`text-flight-player-${redPlayerSlug}`}>
                          {flight.redPlayer.name}
                        </p>
                        {PLAYER_CLASS_YEARS[flight.redPlayer.name] ? (
                          <p
                            className="mt-2 text-[0.72rem] font-bold uppercase tracking-[0.28em] text-foreground/55"
                            data-testid={`text-flight-player-class-${redPlayerSlug}`}
                          >
                            {PLAYER_CLASS_YEARS[flight.redPlayer.name]}
                          </p>
                        ) : null}
                      </div>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>

          <div className="mt-4 space-y-3 min-[769px]:hidden">
            {FLIGHT_MATCHUPS.map((flight) => {
              const bluePlayerSlug = getPlayerSlug(flight.bluePlayer.name);
              const redPlayerSlug = getPlayerSlug(flight.redPlayer.name);

              return (
                <div
                  key={flight.key}
                  className="mx-auto grid w-full max-w-[640px] grid-cols-[minmax(0,1fr)_60px_minmax(0,1fr)] items-center gap-2.5 max-[480px]:grid-cols-[minmax(0,1fr)_54px_minmax(0,1fr)] max-[480px]:gap-2"
                >
                  <button
                    type="button"
                    className="flex min-h-[118px] min-w-0 flex-col items-center justify-center gap-2 rounded-[1.6rem] border border-sky-200/90 bg-white px-2 py-3 text-center shadow-[0_20px_44px_-34px_rgba(15,23,42,0.32)] transition-transform duration-200 active:scale-[0.99] max-[480px]:min-h-[108px] max-[480px]:rounded-[1.35rem] max-[480px]:py-2.5"
                    data-testid={`card-flight-player-blue-mobile-${flight.key}`}
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
                    <div className="h-[85px] w-[85px] overflow-hidden rounded-full border-[4px] border-sky-100 bg-[linear-gradient(135deg,#0c2340,#174a7a)] shadow-[0_18px_30px_-24px_rgba(15,23,42,0.45)] max-[480px]:h-[76px] max-[480px]:w-[76px]">
                      <img
                        src={flight.bluePlayer.image}
                        alt={flight.bluePlayer.name}
                        className={`h-full w-full object-cover ${flight.bluePlayer.imageClassName ?? "object-center"}`}
                        data-testid={`img-flight-player-mobile-${bluePlayerSlug}`}
                      />
                    </div>
                    <p
                      className="line-clamp-2 min-h-[2.2rem] px-1 font-serif text-[1rem] font-bold leading-[1.1] text-primary max-[480px]:min-h-[2rem] max-[480px]:text-[0.9rem]"
                      data-testid={`text-flight-player-mobile-${bluePlayerSlug}`}
                    >
                      {flight.bluePlayer.name}
                    </p>
                  </button>

                  <div className="flex items-center justify-center">
                    <div
                      className="flex h-[60px] w-[60px] items-center justify-center rounded-full border border-[#DDE5EF] bg-white shadow-[0_14px_24px_rgba(15,23,42,0.10)] max-[480px]:h-[54px] max-[480px]:w-[54px]"
                      data-testid={`badge-flight-letter-mobile-${flight.key}`}
                    >
                      <span
                        className="leading-none"
                        style={{
                          fontFamily: 'Georgia, "Times New Roman", serif',
                          fontSize: '28px',
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
                    className="flex min-h-[118px] min-w-0 flex-col items-center justify-center gap-2 rounded-[1.6rem] border border-rose-200/90 bg-white px-2 py-3 text-center shadow-[0_20px_44px_-34px_rgba(15,23,42,0.32)] transition-transform duration-200 active:scale-[0.99] max-[480px]:min-h-[108px] max-[480px]:rounded-[1.35rem] max-[480px]:py-2.5"
                    data-testid={`card-flight-player-red-mobile-${flight.key}`}
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
                    <div className="h-[85px] w-[85px] overflow-hidden rounded-full border-[4px] border-rose-100 bg-[linear-gradient(135deg,#2f0d12,#8d1c2b)] shadow-[0_18px_30px_-24px_rgba(15,23,42,0.45)] max-[480px]:h-[76px] max-[480px]:w-[76px]">
                      <img
                        src={flight.redPlayer.image}
                        alt={flight.redPlayer.name}
                        className={`h-full w-full object-cover ${flight.redPlayer.imageClassName ?? "object-center"}`}
                        data-testid={`img-flight-player-mobile-${redPlayerSlug}`}
                      />
                    </div>
                    <p
                      className="line-clamp-2 min-h-[2.2rem] px-1 font-serif text-[1rem] font-bold leading-[1.1] text-primary max-[480px]:min-h-[2rem] max-[480px]:text-[0.9rem]"
                      data-testid={`text-flight-player-mobile-${redPlayerSlug}`}
                    >
                      {flight.redPlayer.name}
                    </p>
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
                  <div className="relative z-[2] mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-center">
                    <p
                      className="text-[0.78rem] font-bold uppercase tracking-[0.42em] text-[#294c7b]"
                      data-testid="text-selected-player-team"
                    >
                      {selectedPlayer.team === "blue" ? "Blue Team" : "Red Team"}
                    </p>
                    <span className="hidden h-4 w-px bg-[#d7ddea] md:block" aria-hidden="true" />
                    <p className="font-serif text-[1.45rem] font-bold text-[#c73b58]" data-testid="text-selected-player-flight">
                      {selectedPlayer.flightTitle}
                    </p>
                    {selectedPlayerClassFact ? (
                      <>
                        <span className="hidden h-4 w-px bg-[#d7ddea] md:block" aria-hidden="true" />
                        <p className="text-[0.78rem] font-bold uppercase tracking-[0.42em] text-[#294c7b]" data-testid="text-selected-player-class">
                          {selectedPlayerClassFact}
                        </p>
                      </>
                    ) : null}
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
