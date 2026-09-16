export interface ExperienceItem {
  date: string;
  role: string;
  organization: string;
  description: string;
  featured: boolean;
}

export const experiences: ExperienceItem[] = [
  {
    date: "Feb — Jun 2026",
    role: "Data Structures TA",
    organization: "Institut Teknologi Kalimantan",
    description: "Institut Teknologi Kalimantan. Supporting practical sessions, coding work, and student projects while helping students reason about data structures.",
    featured: true,
  },
  {
    date: "Jan — Feb 2026",
    role: "Software Engineering Intern",
    organization: "PT Bahana Cipta Internusa",
    description: "PT Bahana Cipta Internusa. Built AMMASYS and a custom TCP layer around biometric attendance data for HR and downstream ERP workflows.",
    featured: true,
  },
  {
    date: "Feb — Jun 2025",
    role: "Programmer",
    organization: "TK Permata Bunda",
    description: "TK Permata Bunda. Designed and developed PermataKiddo, covering school administration, student records, roles, and tuition workflows.",
    featured: true,
  },
  {
    date: "Nov 2024 — Sep 2025",
    role: "Media Division Senior Staff",
    organization: "INSPACE 2025",
    description: "INSPACE 2025. Worked on visual communication using Figma, Adobe Illustrator, and Photoshop.",
    featured: true,
  },
];
