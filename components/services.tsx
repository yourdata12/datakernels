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
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import Image from "next/image"

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom web applications built with modern frameworks",
    image: "https://img.freepik.com/free-vector/tiny-developers-programming-website-internet-platform-flat-vector-illustration-cartoon-programmers-near-screen-with-open-code-script-software-development-digital-technology-concept_74855-10168.jpg?t=st=1751745842~exp=1751749442~hmac=5e4f5823c9beab863376b84af6050ef8b2ec761db616cdba2ce49f45110ad1da&w=1800",
    fullDescription:
      "We create responsive, scalable web applications using the latest technologies like React, Next.js, and Node.js. Our web solutions are designed to provide exceptional user experiences while maintaining high performance and security standards.",
    features: ["Responsive Design", "SEO Optimization", "Performance Optimization", "Security Best Practices"],
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Native and cross-platform mobile applications",
    image: "https://img.freepik.com/free-vector/flat-design-ui-ux-background_23-2149093995.jpg?t=st=1751745942~exp=1751749542~hmac=eb84192853b79aff121f96e8da8b1846c616bf30790511c4e94404480879b441&w=1800",
    fullDescription:
      "Our mobile development team creates intuitive, feature-rich applications for iOS and Android platforms. We use React Native and Flutter to build cross-platform solutions that provide native performance.",
    features: ["Cross-platform Development", "Native Performance", "App Store Optimization", "Push Notifications"],
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Transform your data into actionable insights",
    image: "https://img.freepik.com/free-vector/stock-market-analysis-with-chart_23-2148584739.jpg?t=st=1751745995~exp=1751749595~hmac=be015ce177196894e9d0ceaf2fbe9dd769b3dcfdd27160c454143ac70c884a56&w=1800",
    fullDescription:
      "Unlock the power of your data with our comprehensive analytics solutions. We help businesses collect, process, and analyze data to make informed decisions with real-time dashboards and predictive modeling.",
    features: ["Real-time Dashboards", "Predictive Analytics", "Data Visualization", "Custom Reports"],
  },
  {
    icon: Brain,
    title: "AI App Creation",
    description: "Intelligent applications powered by machine learning",
    image: "https://img.freepik.com/free-vector/brain-with-digital-circuit-programmer-with-laptop-machine-learning-artificial-intelligence-digital-brain-artificial-thinking-process-concept-vector-isolated-illustration_335657-2246.jpg?t=st=1751746057~exp=1751749657~hmac=7cb98350d639c82576b807af68d8d15e7e25942287285cd8f97222444dedddf2&w=1800",
    fullDescription:
      "We develop AI-powered applications that learn and adapt to user behavior. From chatbots and recommendation systems to computer vision and natural language processing.",
    features: ["Machine Learning Models", "Natural Language Processing", "Computer Vision", "Predictive AI"],
  },
  {
    icon: Settings,
    title: "CRM Automations",
    description: "Streamline your customer relationship management",
    image: "https://img.freepik.com/free-vector/isometric-crm-illustration_52683-83950.jpg?t=st=1751746097~exp=1751749697~hmac=08c310b6a9683396224a8fd3a9f4a61c0ff1965dae7ec128e52ec245589686f9&w=1800",
    fullDescription:
      "Our CRM automation solutions help businesses manage customer relationships more effectively. We integrate various tools and platforms to create seamless workflows.",
    features: ["Lead Management", "Sales Pipeline Automation", "Customer Segmentation", "Integration APIs"],
  },
  {
    icon: Workflow,
    title: "N8N Workflows",
    description: "Advanced workflow automation with n8n",
    image: "https://img.freepik.com/free-vector/data-extraction-concept-illustration_114360-4906.jpg?t=st=1751746148~exp=1751749748~hmac=e6293346043649bd08becbff99ad4100d57ea36c9650b320a69aa4a39444e6ef&w=1800",
    fullDescription:
      "We specialize in creating complex automation workflows using n8n, a powerful workflow automation tool. Our implementations connect various services and applications seamlessly.",
    features: ["Custom Workflow Design", "API Integrations", "Trigger-based Automation", "Data Transformation"],
  },
]

export default function Services() {
  const [currentService, setCurrentService] = useState(0)
  const [selectedService, setSelectedService] = useState<(typeof services)[0] | null>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const nextService = () => setCurrentService((prev) => (prev + 1) % services.length)
  const prevService = () => setCurrentService((prev) => (prev - 1 + services.length) % services.length)

  const getVisibleServices = () => {
    const visible = []
    for (let i = 0; i < 3; i++) {
      visible.push(services[(currentService + i) % services.length])
    }
    return visible
  }

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="w-full px-6">
        <div className="text-center mb-20" data-aos="fade-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">Our Services</h2>
          <div className="w-24 h-1 bg-core-blue mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Comprehensive technology solutions that leverage AI and modern frameworks to drive business growth.
          </p>
        </div>

        {/* Services Carousel */}
        <div className="relative">
          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              size="icon"
              onClick={prevService}
              className="btn-secondary rounded-full bg-transparent"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <div className="flex-1 mx-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {getVisibleServices().map((service, index) => {
                  const Icon = service.icon
                  return (
                    <div
                      key={`${currentService}-${index}`}
                      className="group bg-background border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2"
                      onClick={() => setSelectedService(service)}
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                    >
                      <div className="relative overflow-hidden">
                        <Image
                          src={service.image}
                          alt={service.title}
                          width={300}
                          height={200}
                          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute top-4 left-4 flex items-center justify-center w-12 h-12 bg-core-blue rounded-xl shadow-lg">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                      </div>

                      <div className="p-6">
                        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-core-blue transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground mb-6 leading-relaxed text-sm">{service.description}</p>

                        <div className="flex items-center justify-between">
                          <span className="text-core-blue font-semibold text-sm">Learn More</span>
                          <ArrowRight className="h-4 w-4 text-core-blue transform group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>

                      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-core-blue to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </div>
                  )
                })}
              </div>
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextService}
              className="btn-secondary rounded-full bg-transparent"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Service Modal */}
        <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle className="flex items-center space-x-4 text-2xl">
                {selectedService && (
                  <>
                    <div className="flex items-center justify-center w-12 h-12 bg-core-blue rounded-lg">
                      <selectedService.icon className="h-6 w-6 text-white" />
                    </div>
                    <span>{selectedService.title}</span>
                  </>
                )}
              </DialogTitle>
            </DialogHeader>
            {selectedService && (
              <div className="space-y-6">
                <Image
                  src={selectedService.image}
                  alt={selectedService.title}
                  width={600}
                  height={300}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {selectedService.fullDescription}
                </p>
                <div>
                  <h4 className="font-bold text-foreground mb-4 text-xl">Key Features:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedService.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-core-blue rounded-full"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
