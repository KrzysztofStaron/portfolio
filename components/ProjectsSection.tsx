import { ProjectCard } from "./ProjectCard";

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link?: string;
}

const projects: Project[] = [
  {
    title: "graphai.one",
    description: "Alternative UX for LLMs, where chat isn't linear.",
    technologies: ["LLM", "Canvas UI", "Tool Calls"],
    image: "/images/graphai.jpg",
    link: "https://graphai.one",
  },
  {
    title: "PromptCoT",
    description: "Two LoRA-finetuned Qwen-7B models in an EM loop generating synthetic reasoning data via vLLM.",
    technologies: ["LoRA", "Qwen-7B", "vLLM", "Synthetic Data"],
    image: "/images/promptCOT.png",
    link: "https://github.com/KrzysztofStaron/PromptCoT-implementation",
  },
  {
    title: "Elon Musk AI Companion",
    description: "Conversational AI companion with real-time voice synthesis and AI-generated visuals.",
    technologies: ["GPT-4.1", "Fish Audio TTS", "Replicate Imagen"],
    image: "/images/elon.png",
    link: "https://github.com/KrzysztofStaron/companions",
  },
  {
    title: "Focus Loop",
    description: "Environment for self-improvement. Curated videos based on your personality. My first SaaS, and honestly the only reason it's here.",
    technologies: ["Recommendation System", "Model Finetuning", "Vector Database"],
    image: "/images/focus_loop.jpg",
    link: "https://www.producthunt.com/products/focus-loop",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 w-full border-t border-white/[0.05]">
      <div className="w-full max-w-6xl mx-auto px-6 md:px-16">
        <div className="mb-16">
          <p className="text-xs text-orange-400 font-medium tracking-widest uppercase mb-3">Work</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">More Projects</h2>
          <p className="text-gray-500 mt-3 whitespace-nowrap">Voice AI · Recommendation Systems · LLM UX · Model Training</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
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
