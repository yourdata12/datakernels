"use client";

import { useEffect, useState } from "react";

const stats = [
  { number: 4, label: "Happy Clients", suffix: "+" },
  // { number: 5, label: "Award Winner", suffix: "+" },
  { number: 10, label: "Completed Projects", suffix: "+" },
  { number: 15, label: "Team Members", suffix: "+" },
];

export default function Stats() {
  const [counters, setCounters] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          stats.forEach((stat, index) => {
            let current = 0;
            const increment = stat.number / 50;
            const timer = setInterval(() => {
              current += increment;
              if (current >= stat.number) {
                current = stat.number;
                clearInterval(timer);
              }
              setCounters((prev) => {
                const newCounters = [...prev];
                newCounters[index] = Math.floor(current);
                return newCounters;
              });
            }, 30);
          });
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById("stats");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section id="stats" className="py-20 bg-core-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                {counters[index]}
                {stat.suffix}
              </div>
              <div className="text-white/90 text-sm sm:text-base font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
