import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import houseImage1 from "@assets/0d840a77_1776118623827.avif";
import houseImage2 from "@assets/1fa768ff_1776118689597.avif";
import houseImage3 from "@assets/3bedd450_1776118707307.avif";
import houseImage4 from "@assets/6e9ba67f_1776118723679.avif";
import houseImage5 from "@assets/9d7409e0_1776118741103.avif";
import houseImage6 from "@assets/52f99337_1776118802900.avif";
import houseImage7 from "@assets/85becd66_1776118802900.avif";
import houseImage8 from "@assets/95fd9dbe_1776118802901.avif";
import houseImage9 from "@assets/180f38df_1776118802901.avif";
import houseImage10 from "@assets/489b1967_1776118802901.avif";
import houseImage11 from "@assets/4951e4bc_1776118843654.avif";
import houseImage12 from "@assets/09009404_1776118843654.avif";
import houseImage13 from "@assets/a91f1597_1776118843655.avif";
import houseImage14 from "@assets/b4b41fe4_1776118843655.avif";
import houseImage15 from "@assets/b73806f1_1776118843655.avif";
import houseImage16 from "@assets/c06de946_1776118874264.avif";
import houseImage17 from "@assets/dea01227_1776118874265.avif";
import houseImage18 from "@assets/e43707e8_1776118874265.avif";
import houseImage19 from "@assets/Picture1_1776118874266.png";
import houseImage20 from "@assets/Picture2_1776118874266.png";
import houseImage21 from "@assets/Picture3_1776118874266.png";
import { BedDouble, Waves, Check, ShieldCheck } from "lucide-react";

const IMAGES = [
  houseImage1,
  houseImage2,
  houseImage3,
  houseImage4,
  houseImage5,
  houseImage6,
  houseImage7,
  houseImage8,
  houseImage9,
  houseImage10,
  houseImage11,
  houseImage12,
  houseImage13,
  houseImage14,
  houseImage15,
  houseImage16,
  houseImage17,
  houseImage18,
  houseImage19,
  houseImage20,
  houseImage21,
];

export default function HouseRooming() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    IMAGES.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % IMAGES.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto max-w-6xl px-4 py-20">
      <div className="mx-auto mb-16 max-w-4xl text-center">
        <div className="mb-6 inline-flex items-center rounded-full bg-secondary/10 px-5 py-2 text-sm font-bold uppercase tracking-[0.24em] text-secondary" data-testid="status-house-booked-top">
          House Booked & Confirmed
        </div>
        <h1 className="mb-8 font-serif text-5xl font-bold text-primary md:text-6xl">House & Rooming</h1>
        <p className="text-2xl leading-relaxed text-muted-foreground" data-testid="text-house-rooming-intro">
          The trip house is officially booked and confirmed. Guests can now preview the available rooms and sleeping arrangements, but final room assignments will not be made until arrival at the event. This approach allows for flexibility based on attendance, arrival times, and overall trip logistics while still giving everyone a clear look at the house setup in advance.
        </p>
      </div>

      <div className="relative mb-20 h-[65vh] overflow-hidden rounded-[2.5rem] border-[6px] border-white shadow-2xl">
        {IMAGES.map((src, index) => (
          <img
            key={src}
            src={src}
            alt={`Ramstein Ryder Cup house view ${index + 1}`}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? "z-10 opacity-100" : "z-0 opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-primary/90 via-primary/35 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 z-30 p-10 md:p-16">
          <div className="mb-4 inline-block rounded-full bg-secondary px-4 py-2 text-sm font-bold uppercase tracking-widest text-secondary-foreground">
            House Booked & Confirmed
          </div>
          <h2 className="mb-4 font-serif text-4xl font-bold text-white drop-shadow-lg md:text-5xl">Scottsdale / Cave Creek HQ</h2>
          <p className="flex flex-wrap items-center gap-3 text-xl font-medium text-white/90">
            <span>$5,349.18 total (4 nights, all-in)</span>
            <span className="h-2 w-2 rounded-full bg-secondary"></span>
            <span>17 Guest Model</span>
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button asChild className="h-14 rounded-xl bg-secondary px-8 text-base font-bold uppercase tracking-widest text-secondary-foreground hover:bg-secondary/90" data-testid="button-view-rooms-hero">
              <Link href="/rooms">View Rooms</Link>
            </Button>
            <div className="inline-flex items-center rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-medium text-white/85 backdrop-blur-sm" data-testid="text-room-assignment-note-hero">
              Rooms are viewable now. Final assignments happen on-site at the event.
            </div>
          </div>
        </div>
      </div>

      <div className="mb-14 rounded-[2rem] border border-secondary/20 bg-[linear-gradient(135deg,rgba(199,30,58,0.06),rgba(13,61,110,0.04))] p-8 shadow-lg md:p-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-secondary">Room Preview</p>
            <h3 className="mt-3 font-serif text-3xl font-bold text-primary">Our house is locked in.</h3>
            <p className="mt-4 text-lg leading-relaxed text-foreground/75" data-testid="text-room-preview-callout">
              Take a look at the available rooms and sleeping arrangements on the dedicated room gallery page. Room layouts are now viewable, while final placement will be determined at check-in.
            </p>
          </div>
          <Button asChild variant="outline" className="h-14 rounded-xl border-primary/15 px-8 text-base font-bold uppercase tracking-widest text-primary hover:bg-primary/5" data-testid="button-view-rooms-callout">
            <Link href="/rooms">View Rooms</Link>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h3 className="mb-8 flex items-center gap-4 font-serif text-4xl font-bold text-primary">Rooming Philosophy</h3>
          <div className="mb-12 rounded-3xl border-t-4 border-t-secondary bg-white p-10 shadow-xl md:p-12">
            <p className="mb-10 text-xl leading-relaxed text-foreground/80">
              Comfort and privacy remain the priorities. With 8 private guest suites and ensuite bathrooms for every bedroom, the house is set up for a polished golf-trip HQ experience. Room layouts can now be viewed, and final assignments will be handled on-site at the event.
            </p>
            <div className="rounded-2xl border border-secondary/20 bg-secondary/10 p-6">
              <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                <div className="flex items-start gap-4">
                  <ShieldCheck className="h-8 w-8 shrink-0 text-secondary" />
                  <div>
                    <p className="text-lg font-bold text-primary" data-testid="text-room-assignment-note-main">The house is officially booked. Room layouts can now be viewed, but final room assignments will be made on-site at the event.</p>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/65">Rooms can now be previewed, but final placement will be determined upon arrival based on group logistics and attendance.</p>
                  </div>
                </div>
                <Button asChild variant="outline" className="h-12 rounded-xl border-primary/15 px-6 text-sm font-bold uppercase tracking-widest text-primary hover:bg-primary/5" data-testid="button-view-rooms-rooming-note">
                  <Link href="/rooms">View Rooms</Link>
                </Button>
              </div>
            </div>
          </div>


          <h3 className="mb-8 mt-14 font-serif text-3xl font-bold text-primary">Amenities Breakdown</h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <Card className="border-none bg-white shadow-lg">
              <CardContent className="flex items-center gap-6 p-8">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <BedDouble className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h4 className="mb-1 text-xl font-bold text-primary">8 Bedrooms / 9 Bathrooms</h4>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Private Suites + Ensuite Baths</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none bg-white shadow-lg">
              <CardContent className="flex items-center gap-6 p-8">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Waves className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h4 className="mb-1 text-xl font-bold text-primary">Private Pool + Hot Tub</h4>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Post-Round Recovery & Hangouts</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none bg-white shadow-lg">
              <CardContent className="flex items-center gap-6 p-8">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h4 className="mb-1 text-xl font-bold text-primary">Outdoor Grill + Patio</h4>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Team Dinners at HQ</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none bg-white shadow-lg">
              <CardContent className="flex items-center gap-6 p-8">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h4 className="mb-1 text-xl font-bold text-primary">Game Room</h4>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Nightly Competition Zone</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none bg-white shadow-lg">
              <CardContent className="flex items-center gap-6 p-8">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h4 className="mb-1 text-xl font-bold text-primary">Kitchen + Full Appliances</h4>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Group Meals Made Easy</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none bg-white shadow-lg">
              <CardContent className="flex items-center gap-6 p-8">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h4 className="mb-1 text-xl font-bold text-primary">Free Wi-Fi</h4>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Streaming + Planning</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none bg-white shadow-lg">
              <CardContent className="flex items-center gap-6 p-8">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h4 className="mb-1 text-xl font-bold text-primary">Washer + Dryer</h4>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">4-Night Trip Friendly</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none bg-white shadow-lg">
              <CardContent className="flex items-center gap-6 p-8">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h4 className="mb-1 text-xl font-bold text-primary">On-Site Parking</h4>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Easy Arrivals & Movement</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-32 rounded-3xl bg-primary p-10 text-primary-foreground shadow-2xl">
            <h3 className="mb-8 font-serif text-3xl font-bold">Status Board</h3>
            <ul className="space-y-8">
              <li className="flex flex-col border-b border-primary-foreground/10 pb-6">
                <span className="mb-2 text-sm font-bold uppercase tracking-widest text-primary-foreground/60">House Status</span>
                <span className="text-2xl font-bold text-secondary">Booked & Confirmed</span>
              </li>
              <li className="flex flex-col border-b border-primary-foreground/10 pb-6">
                <span className="mb-2 text-sm font-bold uppercase tracking-widest text-primary-foreground/60">Pricing Model</span>
                <span className="text-2xl font-bold text-white">17 Guests ($5,349.18)</span>
              </li>
              <li className="flex flex-col border-b border-primary-foreground/10 pb-6">
                <span className="mb-2 text-sm font-bold uppercase tracking-widest text-primary-foreground/60">Room Assignments</span>
                <span className="text-2xl font-bold text-white">Assigned On-Site</span>
              </li>
              <li className="flex flex-col">
                <span className="mb-2 text-sm font-bold uppercase tracking-widest text-primary-foreground/60">Room Viewing</span>
                <span className="text-2xl font-bold text-white">Available Now</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
