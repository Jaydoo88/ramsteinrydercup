import { Button } from "@/components/ui/button";
import { CalendarDays, CarFront, Clock3, DollarSign, ExternalLink, MapPinned, Trophy, Waves, ShieldCheck } from "lucide-react";

const COURSES = [
  {
    name: "Dove Valley Ranch Golf Club",
    slug: "dove-valley-ranch",
    label: "Course One",
    dates: ["Thursday, September 17, 2026", "Friday, September 18, 2026"],
    description:
      "Dove Valley Ranch Golf Club will host the opening two rounds of the 2026 Ramstein Ryder Cup. Located only two miles away, it is the closest and most affordable full-size golf course for the group. Its convenient location allows the players to spend less time traveling and more time enjoying the tournament.",
    details: [
      { label: "Distance", value: "2 miles" },
      { label: "Estimated drive time", value: "Approximately 5 minutes" },
      { label: "Course type", value: "18-hole golf course" },
      { label: "Green fee", value: "$115 plus tax per golfer, per day" },
      { label: "Daylene cart", value: "One golf cart will be provided for Daylene at no additional charge on both days." },
    ],
    teeTimes: ["11:06 AM", "11:15 AM", "11:24 AM"],
    websiteLabel: "Visit Dove Valley Ranch Website",
    websiteHref: "https://www.dovevalleyranch.com/",
    transportationNotice: null,
    accent: "border-sky-200/80",
    glow: "from-sky-500/12 via-white to-white",
    badge: "bg-sky-50 text-[#123f7d]",
    priceTone: "text-[#123f7d]",
    icon: Trophy,
  },
  {
    name: "Bellair Golf Park",
    slug: "bellair-golf-park",
    label: "Course Two",
    dates: ["Saturday, September 19, 2026"],
    description:
      "The final round of the 2026 Ramstein Ryder Cup will be played at Bellair Golf Park. Bellair is an executive golf course that should provide a fun and competitive setting for the final matches of the weekend.",
    details: [
      { label: "Distance", value: "17.5 miles" },
      { label: "Course type", value: "Executive golf course" },
      { label: "Green fee", value: "$44 plus tax per golfer" },
      { label: "Daylene cart fee", value: "$15 plus tax" },
    ],
    teeTimes: ["11:00 AM", "11:09 AM", "11:18 AM"],
    websiteLabel: "Visit Bellair Golf Park Website",
    websiteHref: "https://www.bellairgolfpark.com/",
    transportationNotice:
      "Because Bellair Golf Park is approximately 17.5 miles away, the group plans to use Lyft or Uber instead of driving individual vehicles to the course.",
    accent: "border-amber-200/90",
    glow: "from-amber-500/12 via-white to-white",
    badge: "bg-amber-50 text-[#9a5b00]",
    priceTone: "text-[#9a5b00]",
    icon: Waves,
  },
] as const;

const WEEKEND_COSTS = [
  {
    date: "Thursday, September 17",
    course: "Dove Valley Ranch Golf Club",
    price: "$115 plus tax",
  },
  {
    date: "Friday, September 18",
    course: "Dove Valley Ranch Golf Club",
    price: "$115 plus tax",
  },
  {
    date: "Saturday, September 19",
    course: "Bellair Golf Park",
    price: "$44 plus tax",
  },
] as const;

export default function GolfGuide() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f6f2ec_0%,#fbfaf8_22%,#ffffff_100%)]">
      <section className="border-b border-primary/10 bg-white">
        <div className="container mx-auto max-w-5xl px-4 py-16 text-center md:py-20 lg:py-24">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-secondary/10 text-secondary shadow-[0_18px_36px_-24px_rgba(15,23,42,0.32)]">
            <Trophy className="h-10 w-10" />
          </div>
          <p className="mt-8 text-sm font-bold uppercase tracking-[0.28em] text-secondary" data-testid="text-golf-guide-kicker">
            Weekend Course Planning
          </p>
          <h1 className="mx-auto mt-5 max-w-4xl font-serif text-5xl font-bold leading-[0.95] text-primary md:text-6xl lg:text-7xl" data-testid="text-golf-guide-title">
            2026 Ramstein Ryder Cup Golf Guide
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-foreground/68 md:text-xl" data-testid="text-golf-guide-subtitle">
            Course information, tee times, green fees, and transportation details for the 2026 Ramstein Ryder Cup.
          </p>
          <div className="mx-auto mt-10 max-w-4xl rounded-[2rem] border border-primary/10 bg-[linear-gradient(135deg,rgba(11,61,145,0.06),rgba(255,255,255,0.95),rgba(199,30,58,0.06))] p-6 shadow-[0_28px_70px_-50px_rgba(15,23,42,0.35)] md:p-8">
            <p className="text-base leading-relaxed text-foreground/74 md:text-lg" data-testid="text-golf-guide-introduction">
              The 2026 Ramstein Ryder Cup will be played at two Arizona golf courses. The Thursday and Friday rounds will be held at Dove Valley Ranch Golf Club, located only two miles from the host location. The Saturday finale will be played at Bellair Golf Park.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="grid gap-8">
          {COURSES.map((course) => {
            const CourseIcon = course.icon;

            return (
              <article
                key={course.slug}
                className={`overflow-hidden rounded-[2.2rem] border ${course.accent} bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(250,248,244,0.98))] shadow-[0_30px_80px_-50px_rgba(15,23,42,0.32)]`}
                data-testid={`card-course-${course.slug}`}
              >
                <div className={`bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(255,255,255,0.94))] px-6 py-6 md:px-8 md:py-8`}>
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                    <div className="max-w-3xl">
                      <div className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] ${course.badge}`} data-testid={`text-course-label-${course.slug}`}>
                        <CourseIcon className="h-4 w-4" />
                        {course.label}
                      </div>
                      <h2 className="mt-5 font-serif text-4xl font-bold text-primary md:text-5xl" data-testid={`text-course-name-${course.slug}`}>
                        {course.name}
                      </h2>
                      <p className="mt-5 text-lg leading-relaxed text-foreground/72" data-testid={`text-course-description-${course.slug}`}>
                        {course.description}
                      </p>
                    </div>

                    <div className="min-w-0 rounded-[1.6rem] border border-primary/10 bg-white/85 p-5 shadow-[0_22px_44px_-34px_rgba(15,23,42,0.26)] lg:w-[320px]">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/5 text-primary">
                          <CalendarDays className="h-6 w-6" />
                        </div>
                        <div>
                          <p className="text-[0.7rem] font-bold uppercase tracking-[0.28em] text-secondary">Dates</p>
                          <p className="mt-1 text-sm text-foreground/60">Official competition rounds</p>
                        </div>
                      </div>
                      <div className="mt-4 space-y-2">
                        {course.dates.map((date, index) => (
                          <div key={date} className="rounded-2xl border border-primary/8 bg-muted/20 px-4 py-3" data-testid={`text-course-date-${course.slug}-${index + 1}`}>
                            <p className="text-sm font-semibold text-primary">{date}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`grid gap-6 border-t border-primary/8 bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(247,244,239,0.96))] px-6 py-6 md:px-8 md:py-8 lg:grid-cols-[1.25fr_0.95fr]`}>
                  <div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {course.details.map((detail) => (
                        <div key={detail.label} className="rounded-[1.4rem] border border-primary/8 bg-white p-5 shadow-[0_18px_38px_-30px_rgba(15,23,42,0.2)]">
                          <div className="flex items-start gap-3">
                            {detail.label.toLowerCase().includes("distance") ? (
                              <MapPinned className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                            ) : detail.label.toLowerCase().includes("drive") || detail.label.toLowerCase().includes("transport") ? (
                              <CarFront className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                            ) : detail.label.toLowerCase().includes("fee") || detail.label.toLowerCase().includes("cart") ? (
                              <DollarSign className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                            ) : (
                              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                            )}
                            <div>
                              <p className="text-[0.68rem] font-bold uppercase tracking-[0.26em] text-foreground/48">{detail.label}</p>
                              <p className={`mt-2 text-base leading-relaxed ${detail.label.toLowerCase().includes("green fee") ? course.priceTone + " font-semibold" : "text-foreground/72"}`} data-testid={`text-course-detail-${course.slug}-${detail.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                                {detail.value}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {course.transportationNotice ? (
                      <div className="mt-6 rounded-[1.55rem] border border-amber-200 bg-[linear-gradient(135deg,rgba(255,248,230,0.95),rgba(255,255,255,0.96))] p-5 shadow-[0_18px_38px_-32px_rgba(15,23,42,0.24)]" data-testid="notice-bellair-transportation">
                        <div className="flex items-start gap-4">
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                            <CarFront className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="text-[0.72rem] font-bold uppercase tracking-[0.28em] text-[#9a5b00]">Transportation</p>
                            <p className="mt-2 text-base leading-relaxed text-foreground/75" data-testid="text-bellair-transportation-notice">
                              {course.transportationNotice}
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </div>

                  <div className="rounded-[1.7rem] border border-primary/10 bg-white p-6 shadow-[0_22px_48px_-34px_rgba(15,23,42,0.28)]">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                        <Clock3 className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-[0.72rem] font-bold uppercase tracking-[0.28em] text-secondary">Tee Times</p>
                        <p className="mt-1 text-sm text-foreground/60">Easy-scan weekend schedule</p>
                      </div>
                    </div>
                    <div className="mt-5 grid gap-3">
                      {course.teeTimes.map((time, index) => (
                        <div key={time} className="flex items-center justify-between rounded-[1.2rem] border border-primary/8 bg-[linear-gradient(135deg,rgba(247,244,239,0.82),rgba(255,255,255,0.98))] px-4 py-3" data-testid={`text-tee-time-${course.slug}-${index + 1}`}>
                          <span className="text-[0.72rem] font-bold uppercase tracking-[0.24em] text-foreground/45">Tee Time {index + 1}</span>
                          <span className="font-serif text-2xl font-bold text-primary">{time}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6">
                      <Button asChild variant="outline" className="h-12 w-full gap-2 rounded-xl border-primary/20 bg-white font-bold uppercase tracking-[0.18em] text-primary hover:bg-primary/5" data-testid={`link-course-website-${course.slug}`}>
                        <a href={course.websiteHref} target="_blank" rel="noopener noreferrer">
                          {course.websiteLabel}
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-4 pb-20">
        <div className="overflow-hidden rounded-[2.2rem] border border-primary/10 bg-white shadow-[0_30px_80px_-50px_rgba(15,23,42,0.32)]" data-testid="section-weekend-cost-summary">
          <div className="border-b border-primary/8 bg-[linear-gradient(135deg,rgba(11,61,145,0.95),rgba(8,31,79,0.98))] px-6 py-8 text-white md:px-8">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-secondary/90">Weekend Cost Summary</p>
            <h2 className="mt-3 font-serif text-4xl font-bold md:text-5xl" data-testid="text-weekend-cost-title">
              Tournament golf costs at a glance
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/78" data-testid="text-weekend-cost-subtitle">
              A clean breakdown of each competition day plus the full weekend total for standard golfers and Daylene.
            </p>
          </div>

          <div className="px-6 py-6 md:px-8 md:py-8">
            <div className="grid gap-4 lg:grid-cols-3">
              {WEEKEND_COSTS.map((item, index) => (
                <div key={item.date} className="rounded-[1.5rem] border border-primary/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(247,244,239,0.96))] p-5 shadow-[0_18px_38px_-30px_rgba(15,23,42,0.22)]" data-testid={`card-weekend-cost-${index + 1}`}>
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.26em] text-secondary">{item.date}</p>
                  <h3 className="mt-3 font-serif text-2xl font-bold text-primary" data-testid={`text-weekend-course-${index + 1}`}>
                    {item.course}
                  </h3>
                  <p className="mt-5 text-[0.68rem] font-bold uppercase tracking-[0.26em] text-foreground/45">Green Fee</p>
                  <p className="mt-2 text-xl font-semibold text-foreground/76" data-testid={`text-weekend-price-${index + 1}`}>
                    {item.price}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-4 lg:grid-cols-2">
              <div className="rounded-[1.7rem] border border-primary/8 bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(244,248,255,0.96))] p-6 shadow-[0_18px_38px_-30px_rgba(15,23,42,0.22)]" data-testid="card-standard-golfer-total">
                <p className="text-[0.72rem] font-bold uppercase tracking-[0.28em] text-secondary">Standard Golfer Weekend Total</p>
                <p className="mt-4 font-serif text-4xl font-bold text-primary" data-testid="text-standard-golfer-total">
                  $274
                </p>
                <p className="mt-2 text-base text-foreground/65">plus applicable taxes</p>
              </div>

              <div className="rounded-[1.7rem] border border-secondary/18 bg-[linear-gradient(135deg,rgba(255,247,249,0.98),rgba(255,255,255,0.96))] p-6 shadow-[0_18px_38px_-30px_rgba(15,23,42,0.22)]" data-testid="card-daylene-total">
                <p className="text-[0.72rem] font-bold uppercase tracking-[0.28em] text-secondary">Daylene Weekend Total</p>
                <p className="mt-4 font-serif text-4xl font-bold text-primary" data-testid="text-daylene-total">
                  $289
                </p>
                <p className="mt-2 text-base text-foreground/65">plus applicable taxes</p>
                <p className="mt-4 text-sm leading-relaxed text-foreground/68" data-testid="text-daylene-total-note">
                  Daylene’s total includes the $15 Bellair cart fee. Her Dove Valley Ranch cart is complimentary on both Thursday and Friday.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
