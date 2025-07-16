"use client";

import React, { useState } from "react";
import {
  ArrowLeft,
  Briefcase,
  MapPin,
  Clock,
  Users,
  Rocket,
  Brain,
  BarChart3,
  Settings,
  Database,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

interface JobRole {
  id: string;
  title: string;
  icon: React.ComponentType<any>;
  description: string;
  requirements: string[];
  perks: string[];
}

const jobRoles: JobRole[] = [
  {
    id: "ai-ml",
    title: "AI/ML Engineer",
    icon: Brain,
    description:
      "Work on cutting-edge AI problems using LangChain, LangGraph, Langflow, Gemini Pro, and automation tools like n8n. Build intelligent solutions that create real-world impact.",
    requirements: [
      "Strong Python and ML experience (PyTorch, TensorFlow, etc.)",
      "Familiarity with LLM tools like LangChain, LangGraph, Gemini Pro",
      "Experience with automation tools (e.g., n8n)",
      "Knowledge of model deployment and cloud APIs",
      "Willing to learn and create an impact",
    ],
    perks: [
      "Access to latest AI tools and GPU clusters",
      "Conference sponsorships",
      "Solve real-world AI problems",
    ],
  },
  {
    id: "business-analyst",
    title: "Business Analyst",
    icon: BarChart3,
    description:
      "Convert data into strategic insights. Work closely with teams to define data needs, analyze trends, and influence product and business decisions.",
    requirements: [
      "Strong analytical and problem-solving mindset",
      "Good with SQL, Excel, and BI tools",
      "Experience with Tableau, Power BI, or similar tools",
      "Excellent communication and collaboration skills",
      "Willing to learn and create an impact",
    ],
    perks: [
      "Cross-functional exposure",
      "Strategic planning involvement",
      "Mentorship from leadership",
    ],
  },
  {
    id: "project-manager",
    title: "Project Manager",
    icon: Users,
    description:
      "Manage projects across AI, ZOHO, and more. Ensure timely delivery, remove blockers, and align teams toward shared goals.",
    requirements: [
      "Experience managing diverse technical projects",
      "Familiar with Agile or similar methodologies",
      "Strong leadership and stakeholder communication",
      "Understanding of task allocation and team workflows",
      "Willing to learn and create an impact",
    ],
    perks: [
      "Ownership of multiple high-impact projects",
      "Agile training and leadership development",
      "Flexible working culture",
    ],
  },
  {
    id: "data-scientist",
    title: "Data Scientist",
    icon: Database,
    description:
      "Extract insights from large datasets using statistical and machine learning techniques. Help drive data-informed decisions across the company.",
    requirements: [
      "Strong Python/R skills and statistical modeling",
      "Experience with data wrangling and hypothesis testing",
      "Familiarity with tools like Spark or Pandas",
      "Data storytelling and visualization (Matplotlib, Seaborn, etc.)",
      "Willing to learn and create an impact",
    ],
    perks: [
      "Access to real-world data at scale",
      "Research collaboration opportunities",
      "Support for conference presentations",
    ],
  },
  {
    id: "zoho-developer",
    title: "ZOHO Developer",
    icon: Settings,
    description:
      "Customize and optimize the ZOHO One suite – including CRM, Creator, Books, and Workflows – using Deluge and APIs to automate and streamline business operations.",
    requirements: [
      "Hands-on experience with ZOHO One (CRM, Creator, Books)",
      "Proficiency in Deluge scripting and custom workflows",
      "Understanding of APIs and third-party integrations",
      "Basic knowledge of HTML/CSS/JS (good to have)",
      "Willing to learn and create an impact",
    ],
    perks: [
      "ZOHO certification support",
      "Process ownership and automation projects",
      "Work directly with operations and leadership",
    ],
  },
];

const CareersPage = () => {
  const [selectedRole, setSelectedRole] = useState("ai-ml");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: "",
    remarks: "",
    graduationYear: "",
    university: "",
    employmentType: "",
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const requiredFields = Object.entries(formData);
    const emptyFields = requiredFields.filter(([_, value]) => !value.trim());
    if (emptyFields.length > 0) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          role: jobRoles.find((r) => r.id === selectedRole)?.title || "Unknown",
        }),
      });

      if (res.ok) {
        toast({
          title: "Application Submitted! ✅",
          description:
            "Thanks for applying. We’ll review your application and get back to you soon.",
        });

        setFormData({
          name: "",
          email: "",
          phone: "",
          resume: "",
          remarks: "",
          graduationYear: "",
          university: "",
          employmentType: "",
        });
        setSelectedRole("ai-ml");
      } else {
        const data = await res.json();
        toast({
          title: "Submission Failed ❌",
          description: data.error || "Something went wrong.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Network Error",
        description: "Could not connect to the server. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const currentRole = jobRoles.find((role) => role.id === selectedRole);

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-6">
        <Button
          variant="ghost"
          onClick={() => (window.location.href = "/")}
          className="text-core-blue mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>
      </div>

      <div className="container mx-auto px-4 pb-12 text-center space-y-6">
        <div className="inline-flex items-center space-x-2 bg-core-blue/10 rounded-full px-4 py-2">
          <Rocket className="h-5 w-5 text-core-blue" />
          <span className="text-core-blue font-medium">
            Join the AI Revolution
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-gray-900">
          Careers at DataKernels
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Shape the future of artificial intelligence and data science. Join our
          team of innovators who are transforming industries through
          cutting-edge AI solutions.
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Badge className="bg-blue-100 text-blue-700">
            <MapPin className="mr-1 h-3 w-3" />
            Remote First
          </Badge>
          <Badge className="bg-green-100 text-green-700">
            <Briefcase className="mr-1 h-3 w-3" />
            Competitive Package
          </Badge>
          <Badge className="bg-yellow-100 text-yellow-700">
            <Clock className="mr-1 h-3 w-3" />
            Flexible Hours
          </Badge>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-16 grid lg:grid-cols-2 gap-12">
        {/* Left: Role Cards */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Open Positions
          </h2>
          <Select value={selectedRole} onValueChange={setSelectedRole}>
            <SelectTrigger className="bg-gray-100 border-gray-300 text-gray-700">
              <SelectValue placeholder="Select a role" />
            </SelectTrigger>
            <SelectContent className="bg-white border-gray-300 text-gray-700">
              {jobRoles.map((role) => (
                <SelectItem key={role.id} value={role.id}>
                  {role.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {currentRole && (
            <Card className="bg-white border border-gray-200 shadow-sm">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <currentRole.icon className="h-8 w-8 text-core-blue" />
                  <div>
                    <CardTitle className="text-xl text-gray-900">
                      {currentRole.title}
                    </CardTitle>
                    <CardDescription className="text-gray-500">
                      Join our innovative team
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-700">{currentRole.description}</p>

                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    Requirements:
                  </h4>
                  <ul className="list-disc pl-6 text-gray-600 space-y-1">
                    {currentRole.requirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    What You'll Love:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {currentRole.perks.map((perk, i) => (
                      <Badge key={i} className="bg-blue-100 text-blue-700">
                        {perk}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Right: Form */}
        <Card className="bg-white border border-gray-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-900">Apply Now</CardTitle>
            <CardDescription className="text-gray-500">
              Ready to make an impact? Submit your application below.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div col-span-2>
                <Label htmlFor="job-role" className="text-gray-900">
                  Applying For *
                </Label>
                <Select
                  value={selectedRole}
                  onValueChange={(value) => setSelectedRole(value)}
                >
                  <SelectTrigger className="bg-white border-gray-200 text-gray-900 w-full">
                    <SelectValue placeholder="Select a role" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-gray-200 text-gray-900">
                    {jobRoles.map((role) => (
                      <SelectItem
                        key={role.id}
                        value={role.id}
                        className="hover:bg-white"
                      >
                        {role.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-gray-900">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="bg-white border-gray-200 text-gray-900 placeholder:text-gray-400"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-gray-900">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="bg-white border-gray-200 text-gray-900 placeholder:text-gray-400"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone" className="text-gray-900">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="bg-white border-gray-200 text-gray-900 placeholder:text-gray-400"
                    placeholder="+1 (555) 123-4567"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="resume" className="text-gray-900">
                    Resume URL *
                  </Label>
                  <Input
                    id="resume"
                    value={formData.resume}
                    onChange={(e) =>
                      handleInputChange("resume", e.target.value)
                    }
                    className="bg-white border-gray-200 text-gray-900 placeholder:text-gray-400"
                    placeholder="https://drive.google.com/..."
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="university" className="text-gray-900">
                    University *
                  </Label>
                  <Input
                    id="university"
                    value={formData.university}
                    onChange={(e) =>
                      handleInputChange("university", e.target.value)
                    }
                    className="bg-white border-gray-200 text-gray-900 placeholder:text-gray-400"
                    placeholder="Stanford University"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="graduationYear" className="text-gray-900">
                    Graduation Year *
                  </Label>
                  <Input
                    id="graduationYear"
                    value={formData.graduationYear}
                    onChange={(e) =>
                      handleInputChange("graduationYear", e.target.value)
                    }
                    className="bg-white border-gray-200 text-gray-900 placeholder:text-gray-400"
                    placeholder="2024"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="employmentType" className="text-gray-900">
                  Employment Type *
                </Label>
                <Select
                  value={formData.employmentType}
                  onValueChange={(value) =>
                    handleInputChange("employmentType", value)
                  }
                >
                  <SelectTrigger className="bg-white border-gray-200 text-gray-900">
                    <SelectValue placeholder="Select employment type" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-gray-200">
                    <SelectItem
                      value="internship"
                      className="text-gray-900 hover:bg-white"
                    >
                      Internship
                    </SelectItem>
                    <SelectItem
                      value="full-time"
                      className="text-gray-900 hover:bg-white"
                    >
                      Full Time
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="remarks" className="text-gray-900">
                  Why are you a good fit? *
                </Label>
                <Textarea
                  id="remarks"
                  value={formData.remarks}
                  onChange={(e) => handleInputChange("remarks", e.target.value)}
                  className="bg-white border-gray-200 text-gray-900 placeholder:text-gray-400 min-h-[120px]"
                  placeholder="Tell us about your passion for AI, relevant experience, and what makes you unique..."
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-gray-900 font-semibold py-3 transition-all duration-300 transform hover:scale-105 text-white"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit Application"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CareersPage;
