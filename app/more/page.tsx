import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, X, Download } from "lucide-react";
import { Project } from "@/components/ProjectsSection";
import { ProjectCard } from "@/components/ProjectCard";

const projects: Project[] = [
  {
    title: "Beekeeper",
    description: "Cheating tool for Wocabee",
    technologies: ["Puppeteer", "Google Cloud Run", "SEO"],
    image: "/placeholder.svg?height=400&width=600",
    link: "https://wocabee-bot-beta.vercel.app/",
  },
];

export default function More() {
  return (
    <div className="flex flex-col bg-gray-950 text-gray-100">
      <header className="sticky h-16 top-0 flex justify-between z-40 w-screen border-b border-gray-800 bg-gray-950/95 backdrop-blur supports-[backdrop-filter]:bg-gray-950/60">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl tracking-tight text-white pl-4">KRZYSZTOF</span>
        </Link>
        <div className="flex items-center gap-4 mr-5">
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="/" className="text-gray-300 transition-colors hover:text-orange-500">
              Home
            </Link>
            <a
              href="/resume.pdf"
              download="Krzysztof_Staron_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 transition-colors hover:text-orange-500"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="py-5 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="max-w-[800px] mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-8">
                More <span className="text-orange-500">Projects</span>
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                I've got 70+ repositories it'll take a while to load them all. This page is under construction and will
                be updated soon with more of my work.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/*
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
      */}

      <footer className="border-t border-gray-800 py-2 bg-gray-950 w-screen flex justify-center">
        <div className="grid grid-cols-2 gap-10 w-min">
          <Link href="https://github.com/krzysztofstaron" target="_blank" rel="noopener noreferrer">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full text-gray-400 hover:text-orange-500 hover:bg-gray-800"
            >
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          <Link href="https://x.com/PanzerBread" target="_blank" rel="noopener noreferrer">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full text-gray-400 hover:text-orange-500 hover:bg-gray-800"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">X</span>
            </Button>
          </Link>
        </div>
      </footer>
    </div>
  );
}
