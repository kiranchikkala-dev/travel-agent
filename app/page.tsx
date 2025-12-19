import { ModeToggle } from '@/components/theme/theme-toggle';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { PlaneTakeoff, Sparkles } from 'lucide-react';

export default function TravelHero() {
  return (
    <div className="min-h-screen  dark:bg-background">
      {/* Header */}

      {/* Hero */}
      <main className="flex flex-col items-center justify-center px-4 pt-24">
        <h1 className="text-4xl md:text-5xl font-bold text-center">
          Plan your perfect trip with AI.
        </h1>

        <p className="mt-4 max-w-xl text-center  text-muted-foreground">
          Tell us where you are and where you want to go. We'll handle the rest.
        </p>

        {/* Card */}
        <Card className="mt-12 w-full max-w-xl rounded-2xl dark:!bg-background  dashadow-lg p-6">
          {/* Origin */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm  dark:text-white font-medium text-gray-700">
              <PlaneTakeoff className="h-4 w-4 text-blue-600" />
              ORIGIN
            </label>
            <Input
              placeholder="e.g., New York, JFK"
              className="h-12 text-base"
            />
          </div>

          {/* Destination */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <PlaneTakeoff className="h-4 w-4 text-blue-600 dark:text-white rotate-90" />
              DESTINATION
            </label>

            <div className="relative">
              <Input
                placeholder="e.g., Tokyo, Japan"
                className="h-12 text-base pr-10"
              />
              <Sparkles className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-blue-600" />
            </div>
          </div>

          {/* CTA */}
          <Button className="mt-8 h-12 w-full text-base dark:text-white font-semibold bg-blue-600 hover:bg-blue-700">
            Start Planning →
          </Button>
        </Card>

        {/* Footer links */}
        <div className="mt-10 flex gap-6 text-sm text-gray-600">
          <button className="hover:text-gray-900">How it works</button>
          <button className="hover:text-gray-900">Popular Destinations</button>
        </div>
      </main>
    </div>
  );
}
