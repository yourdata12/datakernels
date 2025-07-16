"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import type { ApplicationFormData } from "../../types/job";

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  roleTitle: string;
}

export function ApplicationModal({
  isOpen,
  onClose,
  roleTitle,
}: ApplicationModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ApplicationFormData>({
    fullName: "",
    email: "",
    phone: "",
    graduationYear: "",
    university: "",
    highestDegree: "",
    majors: "",
    employmentType: "",
    resumeFile: null,
    whyGoodFit: "",
  });

  const handleInputChange = (
    field: keyof ApplicationFormData,
    value: string | File | null
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.resumeFile) {
      toast.error("Resume is required.");
      setIsSubmitting(false);
      return;
    }

    if (formData.resumeFile.size > 5 * 1024 * 1024) {
      toast.error("File too large Resume must be less than 5MB");
      setIsSubmitting(false);
      return;
    }

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Application submitted:", {
      role: roleTitle,
      ...formData,
    });

    toast.success("Application Submitted Successfully!");

    setIsSubmitting(false);
    onClose();
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      graduationYear: "",
      university: "",
      highestDegree: "",
      majors: "",
      employmentType: "",
      resumeFile: null,
      whyGoodFit: "",
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl">Apply for {roleTitle}</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="fullName">Full Name *</Label>
              <Input
                id="fullName"
                value={formData.fullName}
                onChange={(e) => handleInputChange("fullName", e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="graduationYear">Graduation Year *</Label>
              <Input
                id="graduationYear"
                value={formData.graduationYear}
                onChange={(e) =>
                  handleInputChange("graduationYear", e.target.value)
                }
                placeholder="e.g., 2024"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="university">University *</Label>
              <Input
                id="university"
                value={formData.university}
                onChange={(e) =>
                  handleInputChange("university", e.target.value)
                }
                required
              />
            </div>
            <div>
              <Label htmlFor="highestDegree">
                Highest Educational Qualification *
              </Label>
              <Select
                value={formData.highestDegree}
                onValueChange={(value) =>
                  handleInputChange("highestDegree", value)
                }
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select your highest degree" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                  <SelectItem value="masters">Master's Degree</SelectItem>
                  <SelectItem value="phd">PhD</SelectItem>
                  <SelectItem value="diploma">Diploma</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="majors">Field of Study/Major *</Label>
              <Input
                id="majors"
                value={formData.majors}
                onChange={(e) => handleInputChange("majors", e.target.value)}
                placeholder="e.g., Computer Science"
                required
              />
            </div>
            <div>
              <Label htmlFor="employmentType">Employment Type *</Label>
              <Select
                value={formData.employmentType}
                onValueChange={(value) =>
                  handleInputChange("employmentType", value)
                }
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="full-time">Full Time</SelectItem>
                  <SelectItem value="internship">Internship</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="resumeFile">Upload Resume (PDF, max 5MB) *</Label>
            <Input
              id="resumeFile"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) =>
                handleInputChange("resumeFile", e.target.files?.[0] || null)
              }
              required
            />
          </div>

          <div>
            <Label htmlFor="whyGoodFit">
              Why are you a good fit for this role? *
            </Label>
            <Textarea
              id="whyGoodFit"
              value={formData.whyGoodFit}
              onChange={(e) => handleInputChange("whyGoodFit", e.target.value)}
              placeholder="Tell us about your relevant experience, skills, and what makes you perfect for this position..."
              rows={4}
              required
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 bg-transparent"
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
