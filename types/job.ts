export interface JobRole {
  title: string;
  shortDesc: string;
  location: string;
  employmentType: string;
  description: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  remoteNote: string;
}

export interface ApplicationFormData {
  fullName: string;
  email: string;
  phone: string;
  graduationYear: string;
  university: string;
  highestDegree: string;
  majors: string;
  employmentType: string;
  resumeFile: File | null;
  whyGoodFit: string;
}
