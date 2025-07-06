"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const projects = [
  {
    title: "AI-Powered CRM System",
    description:
      "An intelligent CRM platform automating customer interactions, sales funnels, and analytics—designed to optimize business performance.",
    image:
      "https://img.freepik.com/free-vector/user-panel-template-infographic-dashboard_23-2148378206.jpg",
    tags: ["CRM", "Automation", "Analytics"],
    keywords: "crm dashboard, sales automation, business intelligence",
  },
  {
    title: "Stakeholder-Centric Web Platform",
    description:
      "Responsive web solutions with a user-first approach, featuring modern design systems and robust backend integration.",
    image:
      "https://img.freepik.com/free-vector/flat-design-responsive-website-design_23-2149483808.jpg",
    tags: ["Web Dev", "UI/UX", "Responsive"],
    keywords: "web app ui, responsive website design, stakeholder platform",
  },
  {
    title: "Document AI Intelligence",
    description:
      "AI platform leveraging NLP and computer vision to read, analyze, and extract structured insights from unstructured documents.",
    image:
      "https://img.freepik.com/free-vector/robot-doing-repeatable-tasks-with-lot-folders-magnifier-robotic-process-automation-service-robots-profit-automated-processing-concept_335657-2111.jpg",
    tags: ["AI", "Machine Learning", "Document Processing"],
    keywords: "document ai, nlp data extraction, machine learning papers",
  },
  {
    title: "Automated Business Reporting",
    description:
      "Data pipeline and reporting tool for generating automated reports, KPIs, and real-time dashboards.",
    image:
      "https://img.freepik.com/free-vector/data-analyst-oversees-governs-income-expenses-with-magnifier-financial-management-system-finance-software-it-management-tool-concept_335657-1891.jpg",
    tags: ["Automation", "Reporting", "Data Viz"],
    keywords: "data analytics dashboard, report automation, business insights",
  },
  {
    title: "Scalable Analytics Platform",
    description:
      "A high-performance platform for processing big data and delivering predictive analytics across enterprise workloads.",
    image:
      "https://img.freepik.com/free-vector/people-analyzing-growth-charts_23-2148866843.jpg",
    tags: ["Big Data", "Analytics", "Scalability"],
    keywords: "big data platform, scalable analytics, enterprise data solution",
  },
]

export default function Projects() {
  const [currentProject, setCurrentProject] = useState(0)

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length)
    }, 7000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="projects" className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20" data-aos="fade-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Our Projects
          </h2>
          <div className="w-24 h-1 bg-core-blue mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Explore how we’ve delivered cutting-edge AI and digital solutions that solve real-world business challenges.
          </p>
        </div>

        <div
          className="relative max-w-4xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              size="icon"
              onClick={prevProject}
              className="btn-secondary rounded-full bg-transparent"
              aria-label="Previous Project"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <div className="flex-1 mx-4 overflow-hidden">
              <div
                className="flex w-full transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentProject * 100}%)` }}
              >
                {projects.map((project, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-2">
                    <div
                      className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden shadow-lg"
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={1200}
                        height={400}
                        className="w-full h-64 object-cover"
                      />
                      <div className="p-6 sm:p-8">
                        <h3 className="text-2xl font-bold text-foreground mb-4">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground mb-6 leading-relaxed text-sm sm:text-base">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-3 py-1 bg-core-blue/10 text-core-blue text-sm font-medium rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextProject}
              className="btn-secondary rounded-full bg-transparent"
              aria-label="Next Project"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
