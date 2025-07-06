"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Our Story", href: "#our-story" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = [...navItems.map((item) => item.href.substring(1)), "contact"]
      const scrollPosition = window.scrollY + 100
      setScrolled(window.scrollY > 50)

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-lg shadow-sm border-b border-gray-200"
          : "bg-background/95 backdrop-blur-lg shadow-sm border-b border-gray-200"
      }`}
    >
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0" data-aos="fade-right">
            <a href='#'>
            <Image
              src="/dk-logo.png"
              alt="DataKernels"
              width={250}
              height={80}
              className="h-16 w-auto"
            />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4" data-aos="fade-down">
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`relative px-2 py-2 text-md font-medium transition-all duration-200 ${
                  activeSection === item.href.substring(1)
                    ? "text-[hsl(var(--core-blue))]"
                    : "text-gray-700 hover:text-[hsl(var(--core-blue))]"
                }`}
              >
                {item.name}
                {activeSection === item.href.substring(1) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[hsl(var(--core-blue))] rounded-full"></div>
                )}
              </button>
            ))}

            <Button
              onClick={() => scrollToSection("#contact")}
              className="bg-[hsl(var(--core-blue))] hover:bg-[hsl(var(--core-blue))] text-white px-6 py-2 font-medium"
              data-aos="fade-left"
            >
              Contact
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden" data-aos="fade-down">
          <div className="px-4 pt-2 pb-4 space-y-2 bg-background border-t border-gray-200">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full text-left px-4 py-3 text-base font-medium transition-colors ${
                  activeSection === item.href.substring(1)
                    ? "text-[hsl(var(--core-blue))] bg-[hsl(var(--core-blue)/0.1)]"
                    : "text-gray-700 hover:text-[hsl(var(--core-blue))] hover:bg-gray-50"
                }`}
              >
                {item.name}
              </button>
            ))}

            <Button
              onClick={() => scrollToSection("#contact")}
              className="bg-[hsl(var(--core-blue))] hover:bg-[hsl(var(--core-blue))] text-white w-full mt-4 font-medium"
              data-aos="fade-up"
            >
              Contact
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
