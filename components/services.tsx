"use client"

import { useState, useEffect } from "react"
import {
  ChevronLeft,
  ChevronRight,
  Code,
  Smartphone,
  BarChart3,
  Brain,
  Settings,
  Workflow,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import Image from "next/image"

type ServiceType = {
  icon: React.ElementType
  title: string
  description: string
  image: string
  fullDescription: string
  features: string[]
}

const services: ServiceType[] = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom web applications built with modern frameworks",
    image:
      "https://img.freepik.com/free-vector/tiny-developers-programming-website-internet-platform-flat-vector-illustration-cartoon-programmers-near-screen-with-open-code-script-software-development-digital-technology-concept_74855-10168.jpg",
    fullDescription:
      "We create responsive, scalable web applications using the latest technologies like React, Next.js, and Node.js...",
    features: ["Responsive Design", "SEO Optimization", "Performance Optimization", "Security Best Practices"],
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Native and cross-platform mobile applications",
    image:
      "https://img.freepik.com/free-vector/flat-design-ui-ux-background_23-2149093995.jpg",
    fullDescription:
      "Our mobile development team creates intuitive, feature-rich applications for iOS and Android platforms...",
    features: ["Cross-platform Development", "Native Performance", "App Store Optimization", "Push Notifications"],
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Transform your data into actionable insights",
    image:
      "https://img.freepik.com/free-vector/stock-market-analysis-with-chart_23-2148584739.jpg",
    fullDescription:
      "Unlock the power of your data with our comprehensive analytics solutions...",
    features: ["Real-time Dashboards", "Predictive Analytics", "Data Visualization", "Custom Reports"],
  },
  {
    icon: Brain,
    title: "AI App Creation",
    description: "Intelligent applications powered by machine learning",
    image:
      "https://img.freepik.com/free-vector/brain-with-digital-circuit-programmer-with-laptop-machine-learning-artificial-intelligence-digital-brain-artificial-thinking-process-concept-vector-isolated-illustration_335657-2246.jpg",
    fullDescription:
      "We develop AI-powered applications that learn and adapt to user behavior...",
    features: ["Machine Learning Models", "Natural Language Processing", "Computer Vision", "Predictive AI"],
  },
  {
    icon: Settings,
    title: "CRM Automations",
    description: "Streamline your customer relationship management",
    image:
      "https://img.freepik.com/free-vector/isometric-crm-illustration_52683-83950.jpg",
    fullDescription:
      "Our CRM automation solutions help businesses manage customer relationships more effectively...",
    features: ["Lead Management", "Sales Pipeline Automation", "Customer Segmentation", "Integration APIs"],
  },
  {
    icon: Workflow,
    title: "N8N Workflows",
    description: "Advanced workflow automation with n8n",
    image:
      "https://img.freepik.com/free-vector/data-extraction-concept-illustration_114360-4906.jpg",
    fullDescription:
      "We specialize in creating complex automation workflows using n8n...",
    features: ["Custom Workflow Design", "API Integrations", "Trigger-based Automation", "Data Transformation"],
  },
]

export default function Services() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedService, setSelectedService] = useState<ServiceType | null>(null)
  const [cardsToShow, setCardsToShow] = useState(3)

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 6000)
    return () => clearInterval(interval)
  }, [cardsToShow])

  // Responsive cardsToShow
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setCardsToShow(1)
      else if (window.innerWidth < 1024) setCardsToShow(2)
      else setCardsToShow(3)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + cardsToShow) % services.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - cardsToShow + services.length) % services.length)
  }

  const getVisibleServices = () => {
    const visible: ServiceType[] = []
    for (let i = 0; i < cardsToShow; i++) {
      visible.push(services[(currentIndex + i) % services.length])
    }
    return visible
  }

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Our Services</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions that leverage AI and modern frameworks to drive business growth.
          </p>
        </div>

        <div className="relative flex items-center justify-between">
          <Button variant="outline" size="icon" onClick={prevSlide} className="rounded-full">
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <div className="flex-1 mx-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {getVisibleServices().map((service, idx) => {
              const Icon = service.icon
              return (
                <div
                  key={idx}
                  onClick={() => setSelectedService(service)}
                  className="group bg-white rounded-2xl border hover:shadow-xl cursor-pointer transition-transform duration-300"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={500}
                      height={250}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 p-2 bg-blue-600 rounded-lg shadow">
                      <Icon className="text-white w-5 h-5" />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-lg text-gray-900 mb-2 group-hover:text-blue-600 transition">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-blue-600 font-medium">Learn More</span>
                      <ArrowRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <Button variant="outline" size="icon" onClick={nextSlide} className="rounded-full">
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Modal */}
        <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-4 text-2xl">
                {selectedService && (
                  <>
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <selectedService.icon className="text-white w-6 h-6" />
                    </div>
                    {selectedService.title}
                  </>
                )}
              </DialogTitle>
            </DialogHeader>
            {selectedService && (
              <div className="space-y-6">
                <Image
                  src={selectedService.image}
                  alt={selectedService.title}
                  width={800}
                  height={400}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <p className="text-gray-700 text-lg">{selectedService.fullDescription}</p>
                <div>
                  <h4 className="text-xl font-semibold mb-3">Key Features</h4>
                  <ul className="grid sm:grid-cols-2 gap-2 text-gray-600">
                    {selectedService.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
