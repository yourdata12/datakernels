"use client";

import { Mail, Phone, MapPin, ArrowUp, ReceiptIndianRupee } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Our Story", href: "#our-story" },
  { name: "Services", href: "#services" },
  { name: "Industries", href: "#industries" },
  // { name: "Contact", href: "#contact" },
];

const services = [
  "Web Development",
  "App Development",
  "Data Analytics",
  "AI Applications",
  "CRM Automation",
  "Agentic AI Flows",
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="#">
              <Image
                src="/logo.jpeg"
                alt="DataKernels"
                width={240}
                height={80}
                className="h-16 w-auto invert"
              />
            </Link>
            <p className="text-gray-300 leading-relaxed">
              Transforming businesses with AI and cutting-edge technology
              solutions. We specialize in creating intelligent applications that
              drive growth and innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-background">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-core-blue transition-colors cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
              <li className="text-gray-300 hover:text-core-blue transition-colors cursor-pointer">
                {" "}
                <Link href="/careers">Careers</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-background">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-gray-300">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-background">Contact Us</h4>
            <div className="space-y-4">
              {/* <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-core-blue" />
                <a
                  href="tel:+917719432365"
                  className="text-gray-300 hover:text-core-blue transition-colors"
                >
                  +91 77194 32365
                </a>
              </div> */}
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-core-blue" />
                <a
                  href="mailto:admin@datakernels.in"
                  className="text-gray-300 hover:text-core-blue transition-colors"
                >
                  admin@datakernels.in
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-core-blue mt-1" />
                <span className="text-gray-300">
                  North Avenue, Patiala - 147004
                  <br />
                  Punjab, India
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <ReceiptIndianRupee className="h-5 w-5 text-core-blue mt-1" />
                <span className="text-gray-300">
                  GST Number:
                  <br />
                  03AATFD8458L1ZR
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400">
                © {new Date().getFullYear()} DATAKERNELS ANALYTICS AND
                CONSULTING LLP — All rights reserved.
              </p>
              {/* <p className="text-gray-500 text-sm mt-1">Built with Next.js, TypeScript & Tailwind CSS</p> */}
            </div>

            <div className="flex items-center space-x-6">
              <Link href="/privacy">
                <button className="text-gray-400 hover:text-core-blue transition-colors text-sm">
                  Privacy Policy
                </button>
              </Link>
              {/* <button className="text-gray-400 hover:text-core-blue transition-colors text-sm">
                Terms of Service
              </button> */}
              <Button
                variant="outline"
                size="icon"
                onClick={scrollToTop}
                className="rounded-full border-gray-600 text-gray-300 hover:bg-background hover:text-core-blue bg-transparent"
              >
                <ArrowUp className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
