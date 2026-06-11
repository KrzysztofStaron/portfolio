import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Github, X, Mail, Linkedin } from "lucide-react";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ProjectCard } from "@/components/ProjectCard";
import { HandwritingProjectCard } from "@/components/HandwritingProjectCard";
import { getProjectsBySection } from "@/lib/projects";
import { SportSection } from "@/components/SportSection";

export default function Portfolio() {
  const newestProjects = getProjectsBySection("newest");

  return (
    <div className="flex flex-col min-h-screen bg-[#07070f] text-gray-100 overflow-x-hidden">
      {/* Ambient glow blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-[20%] w-[600px] h-[600px] bg-orange-600/[0.04] rounded-full blur-[120px]" />
        <div className="absolute top-[40%] right-[10%] w-[500px] h-[500px] bg-orange-500/[0.03] rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] left-[30%] w-[400px] h-[400px] bg-orange-700/[0.04] rounded-full blur-[100px]" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 h-16 flex items-center justify-between px-6 md:px-16 border-b border-white/[0.06] bg-[#07070f]/70 backdrop-blur-xl">
        <Link href="/" className="text-sm font-bold tracking-[0.2em] text-white uppercase">
          STARON
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {["About", "Projects", "Contact"].map(item => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs tracking-wider uppercase font-medium text-gray-500 hover:text-orange-400 transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-1">
          <Link href="https://github.com/krzysztofstaron" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="rounded-full text-gray-500 hover:text-orange-400 hover:bg-white/5 h-9 w-9">
              <Github className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="https://x.com/KrzysztofStaron" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="rounded-full text-gray-500 hover:text-orange-400 hover:bg-white/5 h-9 w-9">
              <X className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="https://linkedin.com/in/krzysztof-staroń" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="rounded-full text-gray-500 hover:text-orange-400 hover:bg-white/5 h-9 w-9">
              <Linkedin className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section id="about" className="min-h-[calc(100vh-4rem)] flex items-center py-20">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="space-y-10 order-2 md:order-1">
                <div className="space-y-6">
                  <h1 className="text-5xl md:text-[4.5rem] font-black tracking-tight text-white leading-[1.05]">
                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-orange-600">
                      Progress
                    </span>{" "}
                    is my hobby.
                  </h1>
                  <p className="text-base text-gray-500 font-medium tracking-wide">
                    TS · Rust · Python · Kubernetes · ML · React · Svelte 
                  </p>
                </div>

                <div className="space-y-4 text-base text-gray-400 leading-relaxed max-w-md">
                  <p>
                    I got my first professional project at 16. Since then I've shipped over a hundred apps and ML projects.
                    Fine-tuned LLMs with LoRA, built graph-based chat interfaces, written a filesystem in Rust, used Meta's
                    brain-encoding model to score social media posts by predicted fMRI activation.
                  </p>
                  <p>
                    I do the weird stuff because the weird stuff is where the interesting problems are.
                  </p>
                  <p>
                    I'm 18. I just finished high school in Poland. I don't have a CS degree and I'm not planning to get one just yet.
                    What I have instead: five years of building things that work, maniacal sense of urgency, and almost infinite drive for work.
                  </p>
                </div>

                <blockquote className="relative pl-5 border-l-2 border-orange-500/50">
                  <p className="text-gray-400 text-sm leading-relaxed italic">
                    Looking for the right problem to obsess over.
                  </p>
                </blockquote>
              </div>

              <div className="flex justify-center md:justify-end order-1 md:order-2">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-600/25 to-transparent blur-3xl scale-110" />
                  <div className="relative w-60 h-60 md:w-[360px] md:h-[360px] rounded-full overflow-hidden border border-white/10 ring-4 ring-offset-4 ring-offset-[#07070f] ring-orange-500/15">
                    <Image src="/images/me-cropped.jpg" alt="Krzysztof" fill className="object-cover" priority />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newest Project */}
        <section className="py-24 w-full border-t border-white/[0.05]">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-16">
            <div className="mb-12">
              <p className="text-xs text-orange-400 font-medium tracking-widest uppercase mb-3">Latest</p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">Newest projects</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {newestProjects.map((project) =>
                project.variant === "handwriting" ? (
                  <HandwritingProjectCard key={project.id} project={project} />
                ) : (
                  <div key={project.id} className="max-w-full">
                    <ProjectCard {...project} />
                  </div>
                ),
              )}
            </div>
          </div>
        </section>


        <ProjectsSection />


        <SportSection />

        {/* Contact */}
        <section id="contact" className="py-24 w-full">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-16">
            <div className="relative max-w-xl mx-auto text-center rounded-3xl border border-white/[0.06] bg-white/[0.015] p-12 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600/[0.06] via-transparent to-transparent pointer-events-none" />
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="relative">
                <p className="text-xs text-orange-400 font-medium tracking-widest uppercase mb-4">Contact</p>
                <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-white">Get In Touch</h2>
                <p className="text-gray-500 mb-10">Just say "hello" — I'll be happy. I love you all.</p>
                <div className="flex flex-col items-center gap-3">
                  <a
                    href="mailto:krzysztof@staron.dev"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 hover:bg-orange-500/20 hover:border-orange-500/30 transition-all text-sm font-medium"
                  >
                    <Mail className="h-3.5 w-3.5" />
                    krzysztof@staron.dev
                  </a>
                  <a
                    href="https://x.com/KrzysztofStaron"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-500 hover:text-orange-400 transition-colors text-sm"
                  >
                    <X className="h-3.5 w-3.5" />
                    @KrzysztofStaron
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/[0.05] py-8 px-6 md:px-16">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span className="text-xs text-gray-600 tracking-widest uppercase">Krzysztof Staroń</span>
          <div className="flex items-center gap-1">
            <Link href="https://github.com/krzysztofstaron" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full text-gray-600 hover:text-orange-400 hover:bg-white/5 h-8 w-8">
                <Github className="h-3.5 w-3.5" />
              </Button>
            </Link>
            <Link href="https://x.com/KrzysztofStaron" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full text-gray-600 hover:text-orange-400 hover:bg-white/5 h-8 w-8">
                <X className="h-3.5 w-3.5" />
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
