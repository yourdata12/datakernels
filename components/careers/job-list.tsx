"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin } from "lucide-react"
import type { JobRole } from "../../types/job"

interface JobListProps {
  jobRoles: Record<string, JobRole>
  selectedRole: string | null
  onRoleSelect: (roleKey: string | null) => void
}

export function JobList({ jobRoles, selectedRole, onRoleSelect }: JobListProps) {
  return (
    <div className="space-y-3">
      {Object.entries(jobRoles).map(([key, role]) => (
        <Card
          key={key}
          className={`cursor-pointer transition-all hover:shadow-md ${
            selectedRole === key ? "ring-2 ring-blue-500 bg-blue-50" : ""
          }`}
          onClick={() => onRoleSelect(selectedRole === key ? null : key)}
        >
          <CardContent className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold text-gray-900">{role.title}</h4>
                <p className="text-sm text-gray-600 flex items-center mt-1">
                  <MapPin className="w-3 h-3 mr-1" />
                  {role.shortDesc}
                </p>
              </div>
              <Badge variant="outline" className="text-xs">
                {role.employmentType}
              </Badge>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
