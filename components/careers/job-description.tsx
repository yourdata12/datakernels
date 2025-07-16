"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MapPin, Clock, Briefcase } from "lucide-react";
import type { JobRole } from "../../types/job";

interface JobDescriptionProps {
  role: JobRole;
  onApplyClick: () => void;
}

export function JobDescription({ role, onApplyClick }: JobDescriptionProps) {
  return (
    <Card className="mt-3 border-l-4 border-l-blue-500">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">{role.title}</CardTitle>
            <CardDescription className="flex items-center mt-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 mr-1" />
              {role.location} •
              <Clock className="w-4 h-4 ml-2 mr-1" />
              {role.employmentType}
            </CardDescription>
          </div>
          <Button
            onClick={onApplyClick}
            className="shrink-0 bg-blue-600 hover:bg-blue-700 text-white"
          >
            Apply Now
          </Button>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        <section>
          <h4 className="font-semibold text-gray-900 mb-2">About Us:</h4>
          <p className="text-gray-600 text-sm leading-relaxed">
            {role.description}
          </p>
        </section>

        <section>
          <h4 className="font-semibold text-gray-900 mb-2">Role Summary:</h4>
          <p className="text-gray-600 text-sm leading-relaxed">
            {role.summary}
          </p>
        </section>

        <section>
          <h4 className="font-semibold text-gray-900 mb-2">
            Key Responsibilities:
          </h4>
          <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm">
            {role.responsibilities.map((resp, index) => (
              <li key={index}>{resp}</li>
            ))}
          </ul>
        </section>

        <section>
          <h4 className="font-semibold text-gray-900 mb-2">
            What You'll Bring:
          </h4>
          <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm">
            {role.requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </section>

        <section className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-semibold text-blue-900 mb-2 flex items-center">
            <Briefcase className="w-4 h-4 mr-2" />
            Remote Work Benefits:
          </h4>
          <p className="text-blue-800 text-sm">{role.remoteNote}</p>
        </section>

        <div className="pt-4 border-t">
          <Button
            onClick={onApplyClick}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            size="lg"
          >
            Apply for this Position
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
