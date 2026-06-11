import { getSportCards } from "@/lib/sport";
import { SportCard } from "./SportCard";

export function SportSection() {
  const sportCards = getSportCards();

  return (
    <section className="py-24 w-full">
      <div className="w-full max-w-6xl mx-auto px-6 md:px-16">
        <div className="mb-16">
          <p className="text-xs text-orange-400 font-medium tracking-widest uppercase mb-3">Lifestyle</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">SPORT</h2>
          <p className="text-gray-500 italic mt-3">I love progress</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-16">
          {sportCards.map((card) => (
            <SportCard key={card.id} {...card} />
          ))}
        </div>

        <div className="max-w-sm space-y-5">
          <p className="text-gray-600 text-sm">Beyond coding, I'm committed to fitness and self-improvement.</p>
          {[
            { label: "Bench", current: 100, goal: 100 },
            { label: "Squat", current: 120, goal: 140 },
            { label: "Deadlift", current: 150, goal: 200 },
          ].map(({ label, current, goal }) => (
            <div key={label} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">
                  {label} <span className="text-orange-400 font-semibold">{current}kg</span>
                </span>
                <span className="text-gray-600">
                  Goal <span className="text-gray-400 font-medium">{goal}kg</span>
                </span>
              </div>
              <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-orange-600 to-orange-400 rounded-full transition-all"
                  style={{ width: `${Math.min((current / goal) * 100, 100)}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
