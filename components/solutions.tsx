import React from "react";

import { Bot, CheckCircle, Database, Workflow } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

function Solutions() {
  const services = [
    {
      icon: Bot,
      title: "Agentic AI Solutions",
      description:
        "Custom AI agents for healthcare automation, including Life Care Plan generation and medical workflow optimization.",
      features: [
        "Healthcare AI",
        "Document Automation",
        "Intelligent Processing",
      ],
    },
    {
      icon: Workflow,
      title: "Workflow Automation",
      description:
        "End-to-end process automation that transforms manual operations into efficient, scalable systems.",
      features: [
        "Process Optimization",
        "System Integration",
        "Custom Workflows",
      ],
    },
    {
      icon: Database,
      title: "Data Strategy & Pipelines",
      description:
        "Comprehensive data solutions including custom CRM systems, analytics platforms, and data architecture.",
      features: ["Custom CRM", "Data Architecture", "Analytics Platforms"],
    },
  ];
  return (
    <section id="services" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16" data-aos="fade-up">
          <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-100">
            <Bot className="w-4 h-4 mr-2" />
            Our Solutions
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            AI Solutions That{" "}
            <span className="text-blue-600">Drive Results</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From healthcare automation to data strategy, we deliver cutting-edge
            AI solutions tailored to your industry needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              data-aos={index % 2 === 0 ? "zoom-in" : "fade-up"}
              data-aos-delay={index * 100}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-gray-50"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
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
          ))}
        </div>
      </div>
    </section>
  );
}

export default Solutions;
