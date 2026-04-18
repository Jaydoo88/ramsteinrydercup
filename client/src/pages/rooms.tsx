import { Link } from "wouter";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import roomImage1 from "@assets/6e9ba67f_1776118723679.avif";
import roomImage2 from "@assets/4951e4bc_1776118843654.avif";
import roomImage3 from "@assets/Picture1_1776118874266.png";
import roomImage4 from "@assets/Picture3_1776118874266.png";

const ROOM_PREVIEWS = [
  {
    image: roomImage1,
    label: "Preview 1",
    title: "Private sleeping setup",
    description: "A polished bedroom layout within the confirmed house, now viewable ahead of the trip.",
  },
  {
    image: roomImage2,
    label: "Preview 2",
    title: "Additional guest suite",
    description: "Another private room option showing the style, comfort, and spacing available on-site.",
  },
  {
    image: roomImage3,
    label: "Preview 3",
    title: "Expanded room layout",
    description: "A broader look at one of the sleeping configurations available for guests at the house.",
  },
  {
    image: roomImage4,
    label: "Preview 4",
    title: "Common-area adjacency",
    description: "A preview of how the house flows between shared spaces and nearby sleeping areas.",
  },
];

export default function Rooms() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8">
          <Button asChild variant="ghost" className="group h-12 rounded-xl px-0 text-sm font-bold uppercase tracking-[0.2em] text-primary hover:bg-transparent hover:text-secondary" data-testid="button-back-house-rooming">
            <Link href="/house">
              <span className="flex items-center gap-3">
                <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
                Back to House & Rooming
              </span>
            </Link>
          </Button>
        </div>

        <div className="mb-12 rounded-[2.5rem] border border-secondary/20 bg-[linear-gradient(135deg,rgba(13,61,110,0.98),rgba(13,61,110,0.84),rgba(199,30,58,0.18))] p-10 text-white shadow-2xl md:p-14">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-secondary/90">Room Gallery</p>
          <div className="mt-5 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div>
              <h1 className="max-w-3xl font-serif text-5xl font-bold leading-tight md:text-6xl" data-testid="text-room-gallery-heading">
                View the room setups before the trip.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/80" data-testid="text-room-gallery-intro">
                The house is officially booked, and room layouts are now available to preview. Final room assignments will be handled on-site at the event based on arrival flow, attendance, and overall group logistics.
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-white/15 bg-white/10 p-6 backdrop-blur-md">
              <div className="flex items-start gap-4">
                <ShieldCheck className="mt-1 h-7 w-7 shrink-0 text-secondary" />
                <div>
                  <p className="text-lg font-bold text-white" data-testid="text-room-gallery-status-title">Assignments handled on-site</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/75" data-testid="text-room-gallery-status-note">
                    Rooms can now be previewed, but final placement will be determined upon arrival based on group logistics and attendance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="mb-14">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-secondary">Confirmed House Layouts</p>
              <h2 className="mt-2 font-serif text-3xl font-bold text-primary md:text-4xl">Room previews for the Scottsdale / Cave Creek house</h2>
            </div>
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground" data-testid="text-room-gallery-summary">
              These previews show the look and feel of the sleeping setups now available to the group. Assignments will be finalized at check-in.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {ROOM_PREVIEWS.map((room, index) => (
              <Card key={room.image} className="overflow-hidden rounded-[1.75rem] border border-border/60 bg-white shadow-lg" data-testid={`card-room-preview-${index + 1}`}>
                <img src={room.image} alt={room.title} className="h-80 w-full object-cover" />
                <CardContent className="p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-secondary">{room.label}</p>
                  <h3 className="mt-3 text-2xl font-semibold text-primary" data-testid={`text-room-title-${index + 1}`}>{room.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-foreground/70" data-testid={`text-room-description-${index + 1}`}>{room.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
