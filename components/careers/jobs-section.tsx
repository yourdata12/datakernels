import { JobList } from "./job-list";
import { JobDescription } from "./job-description";
import type { JobRole } from "../../types/job";

interface JobsSectionProps {
  jobRoles: Record<string, JobRole>;
  selectedRole: string | null;
  onRoleSelect: (roleKey: string | null) => void;
  onApplyClick: () => void;
}

export function JobsSection({
  jobRoles,
  selectedRole,
  onRoleSelect,
  onApplyClick,
}: JobsSectionProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-gray-900">Open Positions</h3>

      {/* Job List with Inline Descriptions */}
      <div className="space-y-3">
        {Object.entries(jobRoles).map(([key, role], index) => (
          <div key={key}>
            <JobList
              jobRoles={{ [key]: role }}
              selectedRole={selectedRole}
              onRoleSelect={onRoleSelect}
            />

            {/* Inline Job Description */}
            {selectedRole === key && (
              <div>
                <JobDescription role={role} onApplyClick={onApplyClick} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
