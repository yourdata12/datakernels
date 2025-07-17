"use client";
import { useState, useEffect } from "react";
import { CareersHeader } from "@/components/careers/header";
import { CompanyInfo } from "@/components/careers/company-info";
import { JobsSection } from "@/components/careers/jobs-section";
import { ApplicationModal } from "@/components/careers/application-modal";
import { jobRoles } from "@/data/job-roles";
import CareersFooter from "@/components/careers/careers-footer";

export default function CareersPage() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRoleSelect = (roleKey: string | null) => {
    setSelectedRole(roleKey);
  };

  const openModal = () => {
    window.open("https://forms.gle/SiTPaaeYxwTQxcM86", "_blank");
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const selectedRoleTitle = selectedRole
    ? jobRoles[selectedRole].title
    : "Position";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <CareersHeader />

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Side - Company Info */}
          <CompanyInfo />

          {/* Right Side - Jobs Section */}
          <JobsSection
            jobRoles={jobRoles}
            selectedRole={selectedRole}
            onRoleSelect={handleRoleSelect}
            onApplyClick={openModal}
          />
        </div>
      </div>

      {/* Application Modal */}
      <ApplicationModal
        isOpen={isModalOpen}
        onClose={closeModal}
        roleTitle={selectedRoleTitle}
      />

      <CareersFooter />
    </div>
  );
}
