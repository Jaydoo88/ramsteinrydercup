import { Link } from "wouter";
import { ArrowLeft, BedDouble, ShieldCheck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import bedroom1Image from "@assets/image_1776549967055.png";
import bedroom2Image from "@assets/image_1776550007242.png";
import bedroom3Image from "@assets/image_1776550029475.png";
import bedroom4Image from "@assets/image_1776550049382.png";
import bedroom5Image from "@assets/image_1776550074988.png";
import bedroom6Image from "@assets/image_1776550106544.png";
import bedroom7Image from "@assets/image_1776550136402.png";

const ROOM_PREVIEWS = [
  {
    image: bedroom1Image,
    label: "Bedroom #1",
    title: "Two-bed bedroom setup",
    description: "Bedroom #1 features a spacious two-bed layout with clean finishes, warm lighting, and a comfortable shared setup for the trip.",
  },
  {
    image: bedroom2Image,
    label: "Bedroom #2",
    title: "King bedroom setup",
    description: "Bedroom #2 features a king bed, a more private single-room layout, and a clean upscale finish that fits the house perfectly.",
  },
  {
    image: bedroom3Image,
    label: "Bedroom #3",
    title: "King bedroom setup",
    description: "Bedroom #3 features a king bed, relaxed seating, and a clean private-room layout with the same polished finish as the rest of the house.",
  },
  {
    image: bedroom4Image,
    label: "Bedroom #4",
    title: "King bedroom setup",
    description: "Bedroom #4 features a king bed, a cozy lounge chair, and a polished private-room layout that matches the rest of the house.",
  },
  {
    image: bedroom5Image,
    label: "Casita Bedroom #5",
    title: "King casita bedroom setup",
    description: "Casita Bedroom #5 features a king bed, a quieter detached feel, and a clean, comfortable setup for added privacy during the trip.",
  },
  {
    image: bedroom6Image,
    label: "Casita Bedroom #6",
    title: "King casita bedroom setup",
    description: "Casita Bedroom #6 features a king bed, natural light, and a comfortable detached-room setup that gives guests additional privacy on-site.",
  },
  {
    image: bedroom7Image,
    label: "Casita Bedroom #7",
    title: "King casita bedroom setup",
    description: "Casita Bedroom #7 features a king bed, a clean symmetrical setup, and the same private detached feel as the other casita rooms.",
  },
];

const ROOM_FACTS = [
  {
    icon: BedDouble,
    title: "8 private suites",
    description: "Comfortable room layouts are now viewable.",
  },
  {
    icon: ShieldCheck,
    title: "Assignments on-site",
    description: "Final room placement happens at check-in.",
  },
  {
    icon: Users,
    title: "Built for the full group",
    description: "Placement will flex around attendance and logistics.",
  },
];

export default function Rooms() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-16 md:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8">
          <Button
            asChild
            variant="ghost"
            className="group h-11 rounded-xl px-0 text-sm font-bold uppercase tracking-[0.18em] text-primary/70 hover:bg-transparent hover:text-primary"
            data-testid="button-back-house-rooming"
          >
            <Link href="/house">
              <span className="flex items-center gap-3">
                <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
                Back to House & Rooming
              </span>
            </Link>
          </Button>
        </div>

        <section className="overflow-hidden rounded-[2rem] border border-primary/10 bg-white shadow-[0_30px_90px_-40px_rgba(13,61,110,0.45)]">
          <div className="border-b border-border/60 bg-[radial-gradient(circle_at_top_right,rgba(199,30,58,0.14),transparent_32%),linear-gradient(180deg,rgba(13,61,110,0.04),rgba(13,61,110,0))] px-8 py-10 md:px-12 md:py-12">
            <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-secondary">Room Gallery</p>
                <h1
                  className="mt-4 max-w-3xl font-serif text-4xl font-bold leading-tight text-primary md:text-5xl"
                  data-testid="text-room-gallery-heading"
                >
                  Room layouts for the confirmed house.
                </h1>
                <p
                  className="mt-5 max-w-3xl text-lg leading-relaxed text-foreground/75"
                  data-testid="text-room-gallery-intro"
                >
                  The house is officially booked, and the room setups are now available to preview. Final room assignments will be handled on-site at the event based on arrival flow, attendance, and overall group logistics.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-primary/10 bg-white/90 p-6 shadow-sm backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary/10">
                    <ShieldCheck className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-secondary/90">Room Assignments</p>
                    <p className="mt-2 text-2xl font-semibold text-primary" data-testid="text-room-gallery-status-title">
                      Assigned On-Site
                    </p>
                    <p
                      className="mt-3 text-sm leading-relaxed text-foreground/65"
                      data-testid="text-room-gallery-status-note"
                    >
                      Rooms can now be previewed, but final placement will be determined upon arrival based on group logistics and attendance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 px-8 py-6 md:grid-cols-3 md:px-12">
            {ROOM_FACTS.map((fact) => {
              const Icon = fact.icon;

              return (
                <div
                  key={fact.title}
                  className="rounded-[1.35rem] border border-border/70 bg-muted/30 p-5"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/6">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <p className="mt-4 text-lg font-semibold text-primary">{fact.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/65">{fact.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mt-14 mb-14">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-secondary">Confirmed House Layouts</p>
              <h2 className="mt-2 max-w-2xl font-serif text-3xl font-bold text-primary md:text-4xl">
                Preview the rooms before arrival
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground" data-testid="text-room-gallery-summary">
              These previews show the look and feel of the sleeping setups now available to the group. Final assignments will be finalized at check-in.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {ROOM_PREVIEWS.map((room, index) => (
              <Card
                key={room.image}
                className="group overflow-hidden rounded-[1.75rem] border border-border/70 bg-white shadow-[0_20px_45px_-30px_rgba(15,23,42,0.35)] transition-transform duration-300 hover:-translate-y-1"
                data-testid={`card-room-preview-${index + 1}`}
              >
                <div className="overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.title}
                    className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <CardContent className="p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-secondary">{room.label}</p>
                  <h3 className="mt-3 text-2xl font-semibold text-primary" data-testid={`text-room-title-${index + 1}`}>
                    {room.title}
                  </h3>
                  <p
                    className="mt-3 text-base leading-relaxed text-foreground/70"
                    data-testid={`text-room-description-${index + 1}`}
                  >
                    {room.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
