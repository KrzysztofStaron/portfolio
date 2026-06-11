import { getProjectsBySection } from "@/lib/projects";
import { ProjectCard } from "./ProjectCard";

export function ProjectsSection() {
  const projects = getProjectsBySection("featured");

  return (
    <section id="projects" className="py-24 w-full border-t border-white/[0.05]">
      <div className="w-full max-w-6xl mx-auto px-6 md:px-16">
        <div className="mb-16">
          <p className="text-xs text-orange-400 font-medium tracking-widest uppercase mb-3">Work</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">More Projects</h2>
          <p className="text-gray-500 mt-3 whitespace-nowrap">Voice AI · Recommendation Systems · LLM UX · Model Training</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

        <div className="mt-12">
          <a
            href="https://github.com/krzysztofstaron"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-orange-400 transition-colors group"
          >
            View all projects
            <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
