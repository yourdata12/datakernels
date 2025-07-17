"use client";

import type React from "react";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  Globe,
  ReceiptIndianRupee,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log("Form submitted:", formData);
  //   setFormData({ name: "", email: "", subject: "", message: "" });
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("Your message has been sent successfully! 🚀");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        const data = await res.json();
        toast.error(data.error || "Something went wrong.");
        console.error("Error:", data.error);
      }
    } catch (error) {
      console.error("Failed to send:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20" data-aos="fade-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Contact Us
          </h2>
          <div className="accent-line mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Ready to transform your business with AI and cutting-edge
            technology? Get in touch with us today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-12 lg:h-[600px]">
          <div
            className="lg:col-span-3 h-full flex flex-col justify-between"
            data-aos="fade-right"
          >
            <div className="bg-background rounded-2xl p-8 shadow-xl border border-gray-100 h-full flex flex-col">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Send us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your Name"
                      className="rounded-xl border-gray-200 focus:border-core-blue"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="rounded-xl border-gray-200 focus:border-core-blue"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="How can we help you?"
                    className="rounded-xl border-gray-200 focus:border-core-blue"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Enter your message..."
                    className="rounded-xl border-gray-200 focus:border-core-blue"
                  />
                </div>

                <Button
                  type="submit"
                  className="btn-primary w-full py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 bg-core-blue hover:bg-core-blue/90 text-white"
                  disabled={loading}
                >
                  <Send className="h-5 w-5 mr-2" />
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            {/* <div className="grid grid-cols-1 sm:grid-cols-1 gap-4"> */}
            {/* <a
                href="tel:+917719432365"
                className="bg-background rounded-xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <Phone className="h-8 w-8 text-core-blue mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Call Us</h4>
                <p className="text-muted-foreground text-sm">+91 77194 32365</p>
              </a> */}
            {/* <a
                href="mailto:admin@datakernels.in"
                className="bg-background rounded-xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <Mail className="h-8 w-8 text-core-blue mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Email Us</h4>
                <p className="text-muted-foreground text-sm">
                  admin@datakernels.in
                </p>
              </a> */}
            {/* <div
                className="bg-background rounded-xl p-6 shadow-lg border border-gray-100 text-center"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <ReceiptIndianRupee className="h-8 w-8 text-core-blue mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-2">
                  GST Number
                </h4>
                <p className="text-muted-foreground text-sm">03AATFD8458L1ZR</p>
              </div> */}
            {/* </div> */}
          </div>

          <div
            className="lg:col-span-2 h-full"
            data-aos="zoom-in-up"
            data-aos-delay="200"
          >
            <div className="relative h-full w-full">
              <Image
                src="https://images.pexels.com/photos/7504858/pexels-photo-7504858.jpeg"
                alt="Contact Us"
                width={400}
                height={600}
                className="rounded-2xl shadow-xl w-full h-full object-cover border border-gray-100"
              />
              <div className="absolute inset-0 bg-foreground/10 rounded-2xl"></div>
            </div>
          </div>
        </div>

        <div
          className="w-full bg-background rounded-2xl shadow-xl border border-gray-100 overflow-hidden  mt-[120px]"
          data-aos="zoom-in"
        >
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center space-x-3">
              <MapPin className="h-6 w-6 text-core-blue" />
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  Visit Our Office
                </h3>
                <p className="text-muted-foreground">
                  North Avenue, Patiala - 147004, Punjab, India
                </p>
              </div>
            </div>
          </div>

          <div className="h-80">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3828.1235894843617!2d76.36604667596526!3d30.36169997476535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39102601854ca5fd%3A0xa0b3354e644b8a78!2sNorth%20Ave%2C%20Prem%20Nagar%2C%20Patiala%2C%20Jassowal%2C%20Punjab%20147004!5e1!3m2!1sen!2sin!4v1751889910570!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="DataKernels Office Location"
            ></iframe>
          </div>

          <div className="p-4">
            <Button
              variant="outline"
              className="w-full border-core-blue text-core-blue hover:bg-core-blue hover:text-white bg-transparent"
              onClick={() =>
                window.open(
                  "https://maps.google.com/?q=123+Tech+Street,+Innovation+City,+IC+12345",
                  "_blank"
                )
              }
            >
              <Globe className="h-4 w-4 mr-2" />
              View on Google Maps
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
