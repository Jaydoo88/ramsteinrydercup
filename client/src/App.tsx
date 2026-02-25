import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

import Home from "@/pages/home";
import TripOverview from "@/pages/trip-overview";
import HouseRooming from "@/pages/house-rooming";
import PricingBudget from "@/pages/pricing-budget";
import GolfFormat from "@/pages/golf-format";
import Schedule from "@/pages/schedule";
import Rules from "@/pages/rules";
import Rsvp from "@/pages/rsvp";

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/overview" component={TripOverview} />
          <Route path="/house" component={HouseRooming} />
          <Route path="/pricing" component={PricingBudget} />
          <Route path="/golf" component={GolfFormat} />
          <Route path="/schedule" component={Schedule} />
          <Route path="/rules" component={Rules} />
          <Route path="/rsvp" component={Rsvp} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;