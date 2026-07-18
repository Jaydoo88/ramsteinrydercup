import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertCircle, ArrowRight, CheckCircle2 } from "lucide-react";

const tripSummary = [
  {
    label: "Confirmed Attendees",
    value: "15",
    detail: "8 golfers plus spouses and significant others",
    testId: "summary-confirmed-attendees",
  },
  {
    label: "Stay Length",
    value: "4-Night Stay",
    detail: "Shared vacation home",
    testId: "summary-stay-length",
  },
  {
    label: "Shared Cost per Person",
    value: "$430",
    detail: "House + stock-up fund",
    testId: "summary-shared-cost",
  },
  {
    label: "Estimated Golf Total",
    value: "$274 plus tax",
    detail: "Paid individually at the courses",
    testId: "summary-golf-total",
  },
] as const;

const housePerPerson = [
  { payment: "Initial House Payment", amount: "$175", status: "Collected" },
  { payment: "Remaining House Balance", amount: "$155", status: "Due August 15" },
  { payment: "Total House Cost per Person", amount: "$330", status: "" },
] as const;

const housePerCouple = [
  { payment: "Initial House Payment", amount: "$350", status: "Collected" },
  { payment: "Remaining House Balance", amount: "$310", status: "Due August 15" },
  { payment: "Total House Cost per Couple", amount: "$660", status: "" },
] as const;

const stockUpRows = [
  { participantType: "Per Person", amount: "$100", dueDate: "August 1" },
  { participantType: "Per Couple", amount: "$200", dueDate: "August 1" },
] as const;

const timelineSteps = [
  {
    date: "Collected",
    title: "House Payment",
    amount: "$175",
    complete: true,
    testId: "timeline-house-payment",
  },
  {
    date: "August 1",
    title: "Stock-Up Fund",
    amount: "$100",
    complete: false,
    testId: "timeline-stock-up-payment",
  },
  {
    date: "August 15",
    title: "Remaining House Balance",
    amount: "$155",
    complete: false,
    testId: "timeline-house-balance-payment",
  },
] as const;

const golfFeeRows = [
  {
    date: "September 17",
    course: "Dove Valley Ranch Golf Club",
    teeTimes: "11:06 AM, 11:15 AM, 11:24 AM",
    fee: "$115 plus tax",
  },
  {
    date: "September 18",
    course: "Dove Valley Ranch Golf Club",
    teeTimes: "11:06 AM, 11:15 AM, 11:24 AM",
    fee: "$115 plus tax",
  },
  {
    date: "September 19",
    course: "Bellair Golf Park",
    teeTimes: "11:00 AM, 11:09 AM, 11:18 AM",
    fee: "$44 plus tax",
  },
] as const;

const optionalActivities = [
  "Optional golf for spouses or significant others outside the Ryder Cup competition",
  "Non-golf activities for guests",
  "Guided horseback trail rides in Cave Creek",
  "Other activities selected by individual participants",
] as const;

const commitmentPolicy = [
  "The vacation home has been booked based on the confirmed group size.",
  "A participant’s spot is confirmed once the initial house payment has been received.",
  "House payments and shared trip payments are non-refundable because the rental and group expenses have already been committed.",
  "The stock-up payment is due August 1.",
  "The remaining house balance is due August 15.",
  "Golf fees are paid individually at the golf courses.",
  "Golf cancellations require at least 48 hours’ notice.",
  "Late golf cancellations may still result in a charge because the tee times are secured with a personal credit card.",
] as const;

function SectionDivider() {
  return <div className="h-px w-full bg-border/70" aria-hidden="true" />;
}

function TableHeader({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <th className={`px-0 py-3 text-left text-[11px] font-bold uppercase tracking-[0.22em] text-foreground/45 ${className}`}>
      {children}
    </th>
  );
}

function TableCell({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <td className={`px-0 py-4 align-top text-sm leading-relaxed text-foreground/75 ${className}`}>{children}</td>;
}

export default function PricingBudget() {
  useEffect(() => {
    if (window.location.hash === "#payment-plan") {
      requestAnimationFrame(() => {
        document.getElementById("payment-plan")?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, []);

  return (
    <div className="bg-[linear-gradient(180deg,#f7f3ee_0%,#fbfaf8_18%,#ffffff_100%)]">
      <div className="container mx-auto max-w-6xl px-4 py-16 md:py-20">
        <header className="mx-auto max-w-4xl text-left">
          <p className="text-sm font-bold uppercase tracking-[0.26em] text-secondary" data-testid="text-pricing-kicker">
            Event Planning & Payment Information
          </p>
          <h1 className="mt-4 font-serif text-5xl font-bold tracking-tight text-primary md:text-6xl" data-testid="text-pricing-title">
            Pricing & Budget
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-foreground/68 md:text-xl" data-testid="text-pricing-introduction">
            With the house officially booked and the golf courses reserved, the trip costs and payment schedule are now confirmed.
          </p>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-foreground/62 md:text-lg" data-testid="text-pricing-introduction-detail">
            Advance payments are only being collected for the house and stock-up fund. Golf fees will be paid individually at the golf courses during the trip.
          </p>
        </header>

        <section className="mt-12 overflow-hidden rounded-[2rem] border border-primary/10 bg-white shadow-[0_24px_70px_-50px_rgba(15,23,42,0.35)]" data-testid="section-trip-overview">
          <div className="grid divide-y divide-border/60 md:grid-cols-4 md:divide-x md:divide-y-0">
            {tripSummary.map((item) => (
              <div key={item.label} className="px-6 py-6 md:px-7 md:py-7">
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-secondary">{item.label}</p>
                <p className="mt-3 font-serif text-3xl font-bold text-primary md:text-[2rem]" data-testid={`text-${item.testId}`}>
                  {item.value}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-foreground/60">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14" data-testid="section-shared-trip-costs">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-secondary">Shared Trip Costs</p>
              <h2 className="mt-3 font-serif text-3xl font-bold text-primary md:text-4xl" data-testid="text-shared-trip-costs-title">
                Confirmed shared expenses for the house and stock-up fund
              </h2>
            </div>
          </div>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_0.9fr]">
            <section className="rounded-[1.8rem] border border-primary/10 bg-white px-6 py-7 shadow-[0_18px_55px_-45px_rgba(15,23,42,0.35)] md:px-8 md:py-8" data-testid="section-house-rental">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.24em] text-secondary">House Rental</p>
                  <h3 className="mt-2 font-serif text-3xl font-bold text-primary" data-testid="text-house-rental-heading">
                    Total House Cost: $4,933.76
                  </h3>
                </div>
                <p className="text-sm text-foreground/58">Shared among all confirmed attendees</p>
              </div>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-foreground/68" data-testid="text-house-rental-description">
                Four-night rental including taxes, platform fees, and booking costs. The cost is shared among all confirmed attendees.
              </p>

              <div className="mt-6 space-y-7">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.22em] text-primary">Per Person</p>
                  <div className="mt-3 overflow-x-auto">
                    <table className="min-w-full border-collapse">
                      <thead>
                        <tr className="border-b border-border/70">
                          <TableHeader>Payment</TableHeader>
                          <TableHeader className="w-[130px]">Amount</TableHeader>
                          <TableHeader className="w-[150px]">Status</TableHeader>
                        </tr>
                      </thead>
                      <tbody>
                        {housePerPerson.map((row, index) => (
                          <tr key={row.payment} className={index !== housePerPerson.length - 1 ? "border-b border-border/60" : ""} data-testid={`row-house-person-${index + 1}`}>
                            <TableCell>{row.payment}</TableCell>
                            <TableCell className="font-semibold text-primary">{row.amount}</TableCell>
                            <TableCell>
                              {row.status ? (
                                <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] ${row.status === "Collected" ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200" : "bg-amber-50 text-amber-700 ring-1 ring-amber-200"}`}>
                                  {row.status}
                                </span>
                              ) : null}
                            </TableCell>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <SectionDivider />

                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.22em] text-primary">Per Couple</p>
                  <div className="mt-3 overflow-x-auto">
                    <table className="min-w-full border-collapse">
                      <thead>
                        <tr className="border-b border-border/70">
                          <TableHeader>Payment</TableHeader>
                          <TableHeader className="w-[130px]">Amount</TableHeader>
                          <TableHeader className="w-[150px]">Status</TableHeader>
                        </tr>
                      </thead>
                      <tbody>
                        {housePerCouple.map((row, index) => (
                          <tr key={row.payment} className={index !== housePerCouple.length - 1 ? "border-b border-border/60" : ""} data-testid={`row-house-couple-${index + 1}`}>
                            <TableCell>{row.payment}</TableCell>
                            <TableCell className="font-semibold text-primary">{row.amount}</TableCell>
                            <TableCell>
                              {row.status ? (
                                <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] ${row.status === "Collected" ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200" : "bg-amber-50 text-amber-700 ring-1 ring-amber-200"}`}>
                                  {row.status}
                                </span>
                              ) : null}
                            </TableCell>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>

            <section className="rounded-[1.8rem] border border-primary/10 bg-white px-6 py-7 shadow-[0_18px_55px_-45px_rgba(15,23,42,0.35)] md:px-8 md:py-8" data-testid="section-stock-up-fund">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-secondary">Stock-Up Fund</p>
              <h3 className="mt-2 font-serif text-3xl font-bold text-primary" data-testid="text-stock-up-heading">
                Total Stock-Up Fund: $1,500
              </h3>
              <p className="mt-4 text-base leading-relaxed text-foreground/68" data-testid="text-stock-up-description">
                The stock-up fund covers shared groceries, drinks, snacks, paper products, and other house essentials for all 15 attendees.
              </p>

              <div className="mt-6 overflow-x-auto">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr className="border-b border-border/70">
                      <TableHeader>Participant Type</TableHeader>
                      <TableHeader className="w-[120px]">Amount</TableHeader>
                      <TableHeader className="w-[120px]">Due Date</TableHeader>
                    </tr>
                  </thead>
                  <tbody>
                    {stockUpRows.map((row, index) => (
                      <tr key={row.participantType} className={index !== stockUpRows.length - 1 ? "border-b border-border/60" : ""} data-testid={`row-stock-up-${index + 1}`}>
                        <TableCell>{row.participantType}</TableCell>
                        <TableCell className="font-semibold text-primary">{row.amount}</TableCell>
                        <TableCell>{row.dueDate}</TableCell>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </section>

        <SectionDivider />

        <section id="payment-plan" className="scroll-mt-32 py-14" data-testid="section-payment-plan">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-secondary">Simple Payment Rhythm</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-primary md:text-4xl" data-testid="text-payment-rhythm-title">
              Three clear milestones for shared trip payments
            </h2>
          </div>

          <div className="mt-8 hidden items-center gap-4 lg:flex">
            {timelineSteps.map((step, index) => (
              <div key={step.title} className="contents">
                <div className={`min-h-[148px] flex-1 rounded-[1.7rem] border px-6 py-5 ${step.complete ? "border-emerald-200 bg-emerald-50/90" : "border-primary/10 bg-white"}`} data-testid={step.testId}>
                  <div className="flex items-center gap-2">
                    {step.complete ? <CheckCircle2 className="h-4 w-4 text-emerald-600" /> : <div className="h-2.5 w-2.5 rounded-full bg-secondary" />}
                    <p className={`text-[11px] font-bold uppercase tracking-[0.22em] ${step.complete ? "text-emerald-700" : "text-secondary"}`}>{step.date}</p>
                  </div>
                  <p className="mt-5 text-sm text-foreground/58">{step.title}</p>
                  <p className="mt-2 font-serif text-3xl font-bold text-primary">{step.amount}</p>
                </div>
                {index !== timelineSteps.length - 1 ? <ArrowRight className="h-5 w-5 shrink-0 text-primary/30" /> : null}
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-4 lg:hidden">
            {timelineSteps.map((step, index) => (
              <div key={step.title} className="relative pl-8" data-testid={`${step.testId}-mobile`}>
                {index !== timelineSteps.length - 1 ? <div className="absolute left-[11px] top-8 h-[calc(100%+0.75rem)] w-px bg-border/70" aria-hidden="true" /> : null}
                <div className={`absolute left-0 top-6 h-[22px] w-[22px] rounded-full border ${step.complete ? "border-emerald-300 bg-emerald-500" : "border-secondary/40 bg-white"}`} />
                <div className={`rounded-[1.5rem] border px-5 py-4 ${step.complete ? "border-emerald-200 bg-emerald-50/90" : "border-primary/10 bg-white"}`}>
                  <p className={`text-[11px] font-bold uppercase tracking-[0.22em] ${step.complete ? "text-emerald-700" : "text-secondary"}`}>{step.date}</p>
                  <p className="mt-3 text-sm text-foreground/58">{step.title}</p>
                  <p className="mt-1 font-serif text-2xl font-bold text-primary">{step.amount}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <SectionDivider />

        <section className="py-14" data-testid="section-golf-fees">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-secondary">Golf Fees — Paid at the Courses</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-primary md:text-4xl" data-testid="text-golf-fees-title">
              Individual golf payments are handled on-site
            </h2>
            <p className="mt-4 text-base leading-relaxed text-foreground/68 md:text-lg" data-testid="text-golf-fees-description">
              No advance golf payment is required. The tee times were secured using a personal credit card, but each golfer will pay their own fees at the golf courses.
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-[1.8rem] border border-primary/10 bg-white shadow-[0_18px_55px_-45px_rgba(15,23,42,0.35)]">
            <div className="overflow-x-auto px-6 py-6 md:px-8">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="border-b border-border/70">
                    <TableHeader>Date</TableHeader>
                    <TableHeader>Golf Course</TableHeader>
                    <TableHeader>Tee Times</TableHeader>
                    <TableHeader className="w-[150px]">Fee</TableHeader>
                  </tr>
                </thead>
                <tbody>
                  {golfFeeRows.map((row, index) => (
                    <tr key={`${row.date}-${row.course}`} className="border-b border-border/60 last:border-b-0" data-testid={`row-golf-fee-${index + 1}`}>
                      <TableCell>{row.date}</TableCell>
                      <TableCell className="font-medium text-primary">{row.course}</TableCell>
                      <TableCell>{row.teeTimes}</TableCell>
                      <TableCell className="font-semibold text-primary">{row.fee}</TableCell>
                    </tr>
                  ))}
                  <tr data-testid="row-golf-total">
                    <TableCell>&nbsp;</TableCell>
                    <TableCell className="font-serif text-xl font-bold text-primary">Weekend Golf Total</TableCell>
                    <TableCell>&nbsp;</TableCell>
                    <TableCell className="font-serif text-xl font-bold text-primary">$274 plus tax</TableCell>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 space-y-3 text-sm leading-relaxed text-foreground/72">
            <p data-testid="text-daylene-dove-note">Daylene will receive one complimentary cart at Dove Valley Ranch on Thursday and Friday.</p>
            <p data-testid="text-daylene-bellair-note">Daylene’s cart fee at Bellair Golf Park will be $15 plus tax.</p>
            <p data-testid="text-daylene-weekend-total-note">Daylene’s estimated weekend total is $289 plus applicable taxes.</p>
          </div>
        </section>

        <section className="pb-14" data-testid="section-cancellation-policy">
          <div className="overflow-hidden rounded-[1.9rem] border border-amber-200 bg-[linear-gradient(135deg,rgba(255,248,230,0.9),rgba(255,255,255,1))] shadow-[0_20px_60px_-48px_rgba(15,23,42,0.35)]">
            <div className="px-6 py-6 md:px-8 md:py-7">
              <div className="flex flex-col gap-4 md:flex-row md:items-start">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                  <AlertCircle className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#9a5b00]">Golf Cancellation Policy</p>
                  <h2 className="mt-2 font-serif text-3xl font-bold text-primary" data-testid="text-cancellation-title">
                    48 hours’ notice is required
                  </h2>
                  <p className="mt-4 max-w-4xl text-base leading-relaxed text-foreground/74" data-testid="text-cancellation-description">
                    Anyone who will not be golfing on a scheduled day must provide at least <strong className="font-semibold text-[#9a5b00]">48 hours’ notice</strong>.
                  </p>
                  <p className="mt-3 max-w-4xl text-base leading-relaxed text-foreground/74">
                    If less than 48 hours’ notice is provided, the golfer may still be responsible for the full green fee because the tee times are being held with a personal credit card.
                  </p>
                  <p className="mt-3 max-w-4xl text-base leading-relaxed text-foreground/74">
                    Please communicate any changes as early as possible so the course can be notified before the cancellation deadline.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider />

        <section className="py-14" data-testid="section-transportation">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-secondary">Transportation</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-primary md:text-4xl" data-testid="text-transportation-title">
              Rides are coordinated separately from shared trip costs
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-foreground/68 md:text-lg">
              <p data-testid="text-transportation-paragraph-1">
                Transportation is not included in the shared trip costs.
              </p>
              <p data-testid="text-transportation-paragraph-2">
                Most attendees will arrange their own transportation or coordinate rides with others in the group.
              </p>
              <p data-testid="text-transportation-paragraph-3">
                For the Saturday round at Bellair Golf Park, the group plans to use Lyft or Uber instead of driving individual vehicles because the course is approximately 17.5 miles away.
              </p>
            </div>
          </div>
        </section>

        <SectionDivider />

        <section className="py-14" data-testid="section-optional-activities">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-secondary">Optional Activities</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-primary md:text-4xl" data-testid="text-optional-activities-title">
              Additional plans will be booked individually
            </h2>
            <p className="mt-4 text-base leading-relaxed text-foreground/68 md:text-lg" data-testid="text-optional-activities-description">
              Optional activities are not included in the shared trip costs and will be booked and paid individually.
            </p>
            <ul className="mt-6 space-y-3 text-base leading-relaxed text-foreground/72">
              {optionalActivities.map((activity, index) => (
                <li key={activity} className="flex items-start gap-3" data-testid={`text-optional-activity-${index + 1}`}>
                  <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                  <span>{activity}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-base leading-relaxed text-foreground/68" data-testid="text-optional-activities-rsvp-note">
              Participants may indicate their interests through the RSVP form so plans can be coordinated.
            </p>
          </div>
        </section>

        <SectionDivider />

        <section className="py-14" data-testid="section-payment-information">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-secondary">Payment Information</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-primary md:text-4xl" data-testid="text-payment-information-title">
              Use Zelle or credit card for shared trip payments
            </h2>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <section className="rounded-[1.8rem] border border-primary/10 bg-white px-6 py-7 shadow-[0_18px_55px_-45px_rgba(15,23,42,0.35)] md:px-8" data-testid="section-zelle-payment">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-secondary">Zelle</p>
              <p className="mt-3 font-serif text-4xl font-bold text-primary" data-testid="text-zelle-number">760-559-6108</p>
              <div className="mt-6 space-y-3 text-base leading-relaxed text-foreground/72">
                <p className="font-semibold text-primary">Use Zelle for:</p>
                <ul className="space-y-2">
                  <li data-testid="text-zelle-stock-up">Stock-up payment</li>
                  <li data-testid="text-zelle-house-balance">Remaining house balance</li>
                </ul>
              </div>
              <div className="mt-6 rounded-[1.4rem] border border-border/70 bg-muted/20 px-5 py-5">
                <p className="text-sm font-semibold text-primary">Include your full name and payment purpose.</p>
                <div className="mt-4 space-y-2 text-sm leading-relaxed text-foreground/68">
                  <p data-testid="text-zelle-example-1">Jason Smith — Stock-Up</p>
                  <p data-testid="text-zelle-example-2">Jason Smith — House Balance</p>
                </div>
              </div>
            </section>

            <section className="rounded-[1.8rem] border border-primary/10 bg-white px-6 py-7 shadow-[0_18px_55px_-45px_rgba(15,23,42,0.35)] md:px-8" data-testid="section-credit-card-payment">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-secondary">Credit Card Payment</p>
              <p className="mt-4 text-base leading-relaxed text-foreground/68" data-testid="text-credit-card-description">
                Use the payment button to pay the remaining house balance or stock-up fund by credit card.
              </p>
              <p className="mt-3 text-base leading-relaxed text-foreground/68" data-testid="text-credit-card-description-detail">
                Enter the correct amount based on the payment schedule shown on this page. Use the same full name and email address for every payment, and clearly note what the payment is for.
              </p>
              <div className="mt-5 rounded-[1.4rem] border border-amber-200 bg-amber-50/70 px-5 py-4 text-sm font-semibold leading-relaxed text-[#9a5b00]" data-testid="text-no-golf-payment-note">
                Do not use the payment button for golf fees. Golfers will pay at the courses.
              </div>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <div className="inline-flex items-center rounded-full border border-primary/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary" data-testid="text-site-secure-note">
                  This site is secured with HTTPS
                </div>
                <div className="inline-flex items-center rounded-full border border-primary/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary" data-testid="text-stripe-secure-note">
                  Payments are processed securely through Stripe
                </div>
              </div>
              <div className="mt-6">
                <Button asChild className="h-14 w-full rounded-xl bg-primary text-base font-bold uppercase tracking-[0.18em] shadow-lg shadow-primary/15 hover:bg-primary/90 md:w-auto md:px-10" data-testid="button-make-payment">
                  <a href="https://buy.stripe.com/9B600l75zgXTdax9y12VG00" target="_blank" rel="noreferrer">
                    Make a Payment
                  </a>
                </Button>
              </div>
            </section>
          </div>
        </section>

        <SectionDivider />

        <section className="pt-14" data-testid="section-commitment-policy">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-secondary">Commitment Policy</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-primary md:text-4xl" data-testid="text-commitment-policy-title">
              Final planning expectations for the confirmed group
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground/72 md:text-lg">
              {commitmentPolicy.map((item, index) => (
                <p key={item} data-testid={`text-commitment-policy-${index + 1}`}>
                  {item}
                </p>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
