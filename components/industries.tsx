import React from "react";

import {
  Building2,
  CheckCircle,
  Shield,
  ShoppingCart,
  Star,
  Users,
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
import { Badge } from "@/components/ui/badge";

function Industries() {
  const industries = [
    {
      icon: Shield,
      title: "Healthcare AI",
      description:
        "Specialized AI solutions for healthcare organizations, automating complex processes like Life Care Plan generation and medical workflow optimization.",
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
        "Transform retail operations with intelligent inventory management, customer behavior analysis, and personalized shopping experiences.",
      features: [
        "Inventory Optimization",
        "Customer Analytics",
        "Personalization",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Building2,
      title: "Enterprise AI",
      description:
        "Comprehensive AI solutions for large enterprises, focusing on process automation, data analytics, and operational efficiency.",
      features: [
        "Process Automation",
        "Data Analytics",
        "Operational Intelligence",
      ],
      color: "from-green-500 to-emerald-500",
    },
  ];
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Industries Carousel */}
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold mb-4">Industries We Serve</h3>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Delivering specialized AI solutions across diverse industries with
            tailored approaches for each sector's unique challenges.
          </p>
        </div>

        <div className="relative px-12">
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {industries.map((industry, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
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
