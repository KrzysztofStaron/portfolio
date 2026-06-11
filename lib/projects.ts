import projectsData from "@/data/projects.json";

export type ProjectSection = "newest" | "featured" | "more";
export type ProjectVariant = "card" | "handwriting";

export interface Project {
  id: string;
  section: ProjectSection;
  variant: ProjectVariant;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link?: string;
  article?: string[];
  imageNatural?: { width: number; height: number };
}

const projects = projectsData as Project[];

export function getProjectsBySection(section: ProjectSection): Project[] {
  return projects.filter((project) => project.section === section);
}

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}
