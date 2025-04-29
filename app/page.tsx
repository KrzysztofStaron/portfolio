import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Github, Download, ExternalLink, X } from "lucide-react";
import { ProjectsSection } from "@/components/ProjectsSection";

export default function Portfolio() {
  return (
    <div className="flex flex-col bg-gray-950 text-gray-100">
      <header className="sticky h-16 top-0 flex justify-between z-40 w-screen border-b border-gray-800 bg-gray-950/95 backdrop-blur supports-[backdrop-filter]:bg-gray-950/60">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl tracking-tight text-white pl-4">KRZYSZTOF</span>
        </Link>
        <div className="flex items-center gap-4 mr-5">
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="#about" className="text-gray-300 transition-colors hover:text-orange-500">
              About
            </Link>
            <Link href="#projects" className="text-gray-300 transition-colors hover:text-orange-500">
              Projects
            </Link>
            <Link href="#contact" className="text-gray-300 transition-colors hover:text-orange-500">
              Contact
            </Link>
          </nav>
          <a href="/resume.pdf" download="Krzysztof_Staron_Resume.pdf" target="_blank" rel="noopener noreferrer">
            <Button size="sm" className="gap-2 bg-orange-600 hover:bg-orange-700 text-white">
              <Download className="h-4 w-4" />
              Resume
            </Button>
          </a>
        </div>
      </header>

      <main className="flex-1">
        <section id="about" className="py-5 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 order-2 md:order-1">
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
                    Hello, I'm <span className="text-orange-500">Krzysztof</span> 👋
                  </h1>
                  <div className="flex space-x-4 mt-4">
                    <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full text-gray-300 hover:text-orange-500 hover:bg-gray-800"
                      >
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                      </Button>
                    </Link>
                    <Link href="https://x.com/PanzerBread" target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full text-gray-300 hover:text-orange-500 hover:bg-gray-800"
                      >
                        <X className="h-5 w-5" />
                        <span className="sr-only">X</span>
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                  <p>
                    I'm a builder - I get depressed when I don't move forward. I don't believe I'm the best developer in
                    the world, but I believe in <span className="text-orange-500 font-medium">relentless progress</span>
                    .
                  </p>

                  <p>
                    I wrote my first lines of code in <span className="text-orange-500 font-medium">2018</span>, when I
                    was 11 years old. Before that, I was always searching for a medium to solve problems, first it was
                    math, and then coding became exactly that. Since then, I've been learning, building, and most of the
                    time failing.
                  </p>

                  <p>Along the way, mentors helped me to find the direction that I'm passionate about.</p>
                </div>

                <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                  <p>
                    I build SaaS, muscles and strength, optimize my body and mind, and document the process in public.
                  </p>

                  <p>
                    I'm especially interested in biohacking, sports, and frontier of technology, and I dream of pushing
                    humanity forward.
                  </p>
                </div>

                <p className="text-lg font-medium border-l-4 border-orange-500 pl-4 py-2 bg-orange-950/30 rounded-r text-gray-100">
                  Every project I ship is another step toward a larger goal: making research and opportunities
                  accessible to everyone, supporting breakthrough technologies, and helping bring humanity closer to the
                  stars. I put everything I have into my work - because without the mission, I am nothing.
                </p>
              </div>

              <div className="flex justify-center md:justify-end order-1 md:order-2">
                <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-4 border-orange-500/20 shadow-xl shadow-orange-900/20 transition-transform hover:scale-[1.02] duration-300">
                  <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/20 to-transparent z-10"></div>
                  <Image src="/images/me-cropped.jpg" alt="Krzysztof" fill className="object-cover" priority />
                </div>
              </div>
            </div>
          </div>
        </section>

        <ProjectsSection />

        <section className="py-20 bg-gray-950 w-screen flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">Proof I train</h2>
              <p className="text-gray-300 max-w-[600px] text-lg italic">"Maybe thirst-traps bring job offers"</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {["back.jpg", "front.jpg", "back_right.jpg"].map(photo => (
                <div
                  key={photo}
                  className="group relative aspect-square overflow-hidden rounded-lg border border-gray-800 bg-gray-900 shadow-md transition-all hover:shadow-lg hover:shadow-orange-900/10"
                >
                  <Image
                    src={`/images/${photo}`}
                    alt={`Fitness photo ${photo}`}
                    fill
                    className="object-cover transition-transform group-hover:scale-105 duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-medium">I lift weights</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-300 mb-6 max-w-[600px] mx-auto">
                Beyond coding, I'm committed to fitness and self-improvement.
              </p>
              <div className="mb-4 flex items-center justify-between">
                <p className="text-gray-300">
                  Bench: <strong className="text-orange-500">85kg</strong>
                </p>
                <div className="relative w-1/2 h-2 bg-gray-700 rounded">
                  <div className="absolute h-full bg-orange-500 rounded" style={{ width: "85%" }}></div>
                </div>
                <p className="text-gray-300 text-sm">
                  Goal: <strong className="text-orange-500">100kg</strong>
                </p>
              </div>
              <div className="mb-4 flex items-center justify-between">
                <p className="text-gray-300">
                  Squat: <strong className="text-orange-500">110kg</strong>
                </p>
                <div className="relative w-1/2 h-2 bg-gray-700 rounded">
                  <div className="absolute h-full bg-orange-500 rounded" style={{ width: "78.57%" }}></div>
                </div>
                <p className="text-gray-300 text-sm">
                  Goal: <strong className="text-orange-500">140kg</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-gray-950 w-screen flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="max-w-[800px] mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">Get In Touch</h2>
              <p className="text-gray-300 mb-8">Just say something like "hello", I'll be happy, I love you all.</p>

              <p className="text-gray-300 mb-8">k.staron314@gmail.com</p>
              <p className="text-gray-300 mb-8">
                <a href="https://x.com/PanzerBread" target="_blank" rel="noopener noreferrer">
                  @PanzerBread
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

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
