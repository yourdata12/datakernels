import React from "react";

import {
  CheckCircle,
  Shield,
  ShoppingBag,
  ShoppingCart,
  Truck,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function Industries() {
  const industries = [
    {
      icon: Shield,
      title: "Healthcare AI",
      description:
        "AI tools for clinics and care providers to automate documents, summarize medical records, and manage patient data efficiently.",
      features: [
        "HIPAA Compliant",
        "Medical Automation",
        "Patient Data Management",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: ShoppingCart,
      title: "Retail AI",
      description:
        "Smart retail solutions for inventory tracking, analyzing customer behavior, and improving buying experiences.",
      features: [
        "Inventory Optimization",
        "Customer Analytics",
        "Personalization",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Truck,
      title: "Supply Chain AI",
      description:
        "AI-powered logistics to forecast demand, plan routes, and automate tracking across the supply chain.",
      features: [
        "Route Optimization",
        "Demand Forecasting",
        "Logistics Automation",
      ],
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: ShoppingBag,
      title: "E-commerce AI",
      description:
        "Boost online sales using AI for product suggestions, price adjustments, and user behavior tracking.",
      features: ["AI Recommendations", "Dynamic Pricing", "Churn Prediction"],
      color: "from-indigo-500 to-blue-700",
    },
  ];

  return (
    <section id="industries" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-8" data-aos="fade-up">
          <h3 className="text-3xl font-bold mb-4">Industries We Serve</h3>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Delivering specialized AI solutions across diverse industries with
            tailored approaches for each sector's unique challenges.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative px-6 lg:px-12" data-aos="zoom-in">
          <Carousel className="w-full max-w-5xl mx-auto " opts={{ loop: true }}>
            <CarouselContent>
              {industries.map((industry, index) => (
                <CarouselItem
                  key={index}
                  className="basis-full sm:basis-3/4 md:basis-1/2 lg:basis-1/3 mb-5"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                    <CardHeader className="text-center">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${industry.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                      >
                        <industry.icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-xl mb-3">
                        {industry.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 text-base leading-relaxed">
                        {industry.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {industry.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center text-sm text-gray-700"
                            data-aos="fade-up"
                            data-aos-delay={100 + idx * 50}
                          >
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default Industries;
