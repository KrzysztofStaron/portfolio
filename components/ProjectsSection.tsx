import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { ProjectCard } from "./ProjectCard";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  projectUrl: string;
  githubUrl: string;
  image: string;
  headline: string;
  y_offset?: number;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Focus Loop",
    description: "Environment for self-improvement - curated videos based on your personality",
    technologies: ["Recomendation System", "Model finetuning", "Vector Database"],
    projectUrl: "#",
    githubUrl: "https://github.com",
    image: "/images/focus_loop.jpg",
    headline: "SaaS",
  },
  {
    id: 2,
    title: "Plants And Meteorites",
    description: "A stardew valley inspired game I was developing years ago.",
    technologies: ["Godot", "Game Development", "Team Management"],
    projectUrl: "#",
    githubUrl: "https://github.com",
    image: "/images/PlantsAndMeteorites.jpg",
    headline: "Game Development",
  },
  {
    id: 3,
    title: "Gaming Calculator",
    description: "Arduino based game console with custom operating system.",
    technologies: ["Arduino", "C++", "Operating System"],
    projectUrl: "#",
    githubUrl: "https://github.com",
    image: "/images/calc.jpg",
    headline: "Electronics",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-gray-900 w-screen flex justify-center">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">Featured Types of Projects</h2>
          <p className="text-gray-300 max-w-[600px]">SaaS, Games, Embeded Systems</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(project => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button variant="outline" className="gap-2 border-gray-700 text-gray-200 hover:bg-gray-800 hover:text-white">
            <a href="/more" className="flex items-center gap-2">
              View All Projects <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
