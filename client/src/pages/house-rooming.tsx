import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import houseImage1 from "@assets/image_1772127839974.png";
import houseImage2 from "@assets/image_1773444293109.png";
import houseImage3 from "@assets/image_1773444423038.png";
import houseImage4 from "@assets/image_1773444429502.png";
import houseImage5 from "@assets/image_1773444439722.png";
import houseImage6 from "@assets/image_1773444448880.png";
import houseImage7 from "@assets/image_1773444467138.png";
import houseImage8 from "@assets/image_1773444477203.png";
import houseImage9 from "@assets/image_1773444489286.png";
import houseImage10 from "@assets/image_1773444497574.png";
import houseImage11 from "@assets/image_1773444506695.png";
import houseImage12 from "@assets/image_1773444518322.png";
import houseImage13 from "@assets/image_1773444538733.png";
import houseImage14 from "@assets/image_1773444548507.png";
import houseImage15 from "@assets/image_1773444558382.png";
import houseImage16 from "@assets/image_1773444577807.png";
import houseImage17 from "@assets/image_1773444594241.png";
import houseImage18 from "@assets/image_1773444605631.png";
import houseImage19 from "@assets/image_1773444626158.png";
import houseImage20 from "@assets/image_1773444645489.png";
import { BedDouble, Waves, ShieldAlert, Check, Bath } from "lucide-react";

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
];

const amenities = [
  {
    title: "8 Private Guest Suites",
    description: "Every suite has its own ensuite bathroom for a cleaner rooming setup.",
    icon: BedDouble,
  },
  {
    title: "Extra Full Bath",
    description: "Casa Luna also includes one additional full bathroom beyond the ensuite suites.",
    icon: Bath,
  },
  {
    title: "Pool + Hot Tub",
    description: "Built-in recovery zone for the afternoons, evenings, and off-course hang time.",
    icon: Waves,
  },
  {
    title: "Putting Green",
    description: "Perfect for side games, warmups, and low-stakes chirping before the round.",
    icon: Check,
  },
  {
    title: "Game Room",
    description: "A natural post-round hangout for score recaps, cards, and late-night stories.",
    icon: Check,
  },
  {
    title: "Group Kitchen + Hang Space",
    description: "Designed for shared meals, house stock-up runs, and the full-group reset each night.",
    icon: Check,
  },
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
    <div className="container mx-auto px-4 py-20 max-w-6xl">
      <div className="mb-16 text-center max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-8">House & Rooming</h1>
        <p className="text-2xl text-muted-foreground leading-relaxed">
          Casa Luna is the confirmed HQ house for the founding year — an 8 bedroom, 9 bathroom setup with
          8 private guest suites, each paired with its own ensuite bathroom, plus one extra full bath.
        </p>
      </div>

      <div className="rounded-[2.5rem] overflow-hidden mb-20 shadow-2xl relative border-[6px] border-white h-[65vh]">
        {IMAGES.map((src, index) => (
          <img
            key={src}
            src={src}
            alt={`Casa Luna - View ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent z-20"></div>
        <div className="absolute bottom-0 left-0 right-0 p-10 md:p-16 z-30">
          <div className="inline-block px-4 py-2 bg-secondary text-secondary-foreground font-bold uppercase tracking-widest rounded-full text-sm mb-4">
            Confirmed HQ House
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 drop-shadow-lg">Casa Luna</h2>
          <p className="text-white/90 text-xl font-medium flex flex-wrap items-center gap-3">
            <span>$5,349.18 total</span>
            <span className="w-2 h-2 rounded-full bg-secondary"></span>
            <span>$2,955.09 due now</span>
            <span className="w-2 h-2 rounded-full bg-secondary"></span>
            <span>$2,394.09 due Sep 2</span>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 space-y-12">
          <div className="bg-white rounded-3xl p-10 md:p-12 shadow-xl border-t-4 border-t-secondary">
            <h3 className="font-serif text-4xl font-bold mb-8 text-primary">Rooming Policy</h3>
            <p className="text-xl leading-relaxed text-foreground/80 mb-8">
              The rooming plan stays simple: no names are posted yet, and no assignments are locked until deposits are
              collected. The big win with Casa Luna is that every guest suite already has its own ensuite bathroom,
              which gives the group a cleaner and more flexible setup from the start.
            </p>
            <div className="flex items-center gap-5 p-6 bg-secondary/10 rounded-2xl border border-secondary/20">
              <ShieldAlert className="w-8 h-8 text-secondary shrink-0" />
              <span className="font-bold text-primary text-lg">
                Final room assignments will be made only after deposits are in. No room names or pairings are posted yet.
              </span>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-10 md:p-12 shadow-xl border border-border/50">
            <h3 className="font-serif text-3xl font-bold mb-8 text-primary">Amenities</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {amenities.map((item) => {
                const Icon = item.icon;

                return (
                  <Card key={item.title} className="border-none shadow-lg bg-muted/20">
                    <CardContent className="p-8 flex items-start gap-6">
                      <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-xl mb-2 text-primary">{item.title}</h4>
                        <p className="text-foreground/70 leading-relaxed">{item.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-primary text-primary-foreground rounded-3xl p-10 sticky top-32 shadow-2xl">
            <h3 className="font-serif text-3xl font-bold mb-8">Status Board</h3>
            <ul className="space-y-8">
              <li className="flex flex-col border-b border-primary-foreground/10 pb-6">
                <span className="text-sm text-primary-foreground/60 mb-2 font-bold uppercase tracking-widest">House Status</span>
                <span className="font-bold text-2xl text-secondary">Confirmed</span>
              </li>
              <li className="flex flex-col border-b border-primary-foreground/10 pb-6">
                <span className="text-sm text-primary-foreground/60 mb-2 font-bold uppercase tracking-widest">Rooming</span>
                <span className="font-bold text-2xl text-white">After Deposits</span>
              </li>
              <li className="flex flex-col border-b border-primary-foreground/10 pb-6">
                <span className="text-sm text-primary-foreground/60 mb-2 font-bold uppercase tracking-widest">Payment Schedule</span>
                <span className="font-bold text-xl text-white">$2,955.09 now / $2,394.09 Sep 2</span>
              </li>
              <li className="flex flex-col gap-3">
                <span className="text-sm text-primary-foreground/60 font-bold uppercase tracking-widest">Cancellation Windows</span>
                <span className="text-white/90">Full refund before Aug 17</span>
                <span className="text-white/90">50% refund before Sep 2 minus fees</span>
                <span className="text-white/90">No refund after Sep 2</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
