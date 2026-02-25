import { CalendarDays, Plane, Car } from "lucide-react";

export default function Schedule() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-5xl text-center">
      <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-8">
        <CalendarDays className="w-10 h-10 text-secondary" />
      </div>
      <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6">Schedule & Logistics</h1>
      <p className="text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-16">
        Arrival windows, van assignments, and daily flow. 
      </p>
      
      <div className="bg-white p-12 rounded-[2rem] shadow-xl max-w-3xl mx-auto">
        <div className="flex flex-col items-center justify-center py-12 opacity-50">
          <Plane className="w-16 h-16 text-primary mb-4" />
          <h2 className="font-serif text-3xl font-bold text-primary mb-2">Itinerary Pending</h2>
          <p className="text-lg">Detailed schedule will be released once flights are booked and headcount is final.</p>
        </div>
      </div>
    </div>
  );
}