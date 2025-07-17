"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const heroTexts = [
  {
    title: "AI for Smarter Business",
    subtitle: "Advanced technology solutions for enterprise growth",
  },
  {
    title: "Data-Driven Innovation",
    subtitle: "Intelligent automation and analytics for competitive advantage",
  },
  {
    title: "Future-Ready Applications",
    subtitle: "Scalable solutions built with cutting-edge technology",
  },
];

export default function Hero() {
  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-background pt-[60px]"
    >
      {/* Background Image with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat relative"
          style={{
            backgroundImage: `url('/ai-bg.avif')`,
          }}
        >
          {/* Black gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="mb-12">
          <div className="transition-all duration-1000 ease-in-out">
            <h1
              className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              data-aos="fade-up"
            >
              {heroTexts[currentText].title}
            </h1>
            <p
              className="text-xl sm:text-2xl text-gray-200 mb-8 leading-relaxed max-w-4xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {heroTexts[currentText].subtitle}
            </p>
          </div>
        </div>

        <div
          className="flex justify-center space-x-3 mb-12"
          data-aos="fade"
          data-aos-delay="400"
        >
          {heroTexts.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentText(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentText
                  ? "bg-[hsl(var(--core-blue))]"
                  : "bg-gray-300 hover:bg-[hsl(var(--core-blue))]"
              }`}
              aria-label={`Hero slide ${index + 1}`}
            />
          ))}
        </div>

        <div
          className="flex flex-col sm:flex-row gap-6 justify-center"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <Button
            size="lg"
            className="px-8 py-4 text-lg font-medium bg-[hsl(var(--core-blue))] hover:bg-[hsl(var(--core-blue))] text-white"
            onClick={() =>
              document
                .getElementById("services")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Explore Our Services
          </Button>

          <Link href={"/careers"}>
            <Button
              variant="outline"
              size="lg"
              className="btn-secondary px-8 py-4 text-lg font-medium bg-transparent text-white"
            >
              Join Our Team
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
