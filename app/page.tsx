import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react";

import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/project-card";
import TraitCard from "@/components/trait-card";

export default function Portfolio() {
  return (
    <div className="flex min-h-screen flex-col bg-bl">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <span className="inline-block font-bold">PORTFOLIO</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-1">
              <Link href="#projects" className="px-4 py-2 text-sm font-medium">
                Projects
              </Link>
              <Link href="#about" className="px-4 py-2 text-sm font-medium">
                About
              </Link>
              <Link href="#contact" className="px-4 py-2 text-sm font-medium">
                Contact
              </Link>
              <Button size="sm">Resume</Button>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32 ">
          <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
              Building the <span className="text-primary">future</span>, one project at a time
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              I'm a developer who pushes boundaries and turns visions into reality. Relentless in pursuit, resilient
              under pressure.
            </p>
            <div className="space-x-4">
              <Button className="px-8" asChild>
                <Link href="#projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" className="px-8" asChild>
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>
          </div>
        </section>
        <section id="traits" className="container space-y-6 py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">What Drives Me</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              These core traits define my approach to work and life
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-4">
            <TraitCard
              title="Relentless"
              description="I push forward no matter what, even when facing challenges."
              icon="ArrowRight"
            />
            <TraitCard
              title="Visionary"
              description="Always thinking ahead, building things that shape the future."
              icon="Lightbulb"
            />
            <TraitCard
              title="Charismatic"
              description="People are drawn to my ideas and believe in my vision."
              icon="Users"
            />
            <TraitCard
              title="Resilient"
              description="No matter the pressure or setbacks, I keep going."
              icon="Shield"
            />
          </div>
        </section>
        <section id="projects" className="container space-y-6 py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Featured Projects</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              A showcase of my recent work and ongoing projects
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              title="Project Alpha"
              description="A cutting-edge platform that revolutionizes how users interact with data."
              tags={["React", "Node.js", "MongoDB"]}
              image="/placeholder.svg?height=400&width=600"
            />
          </div>
          <div className="flex justify-center">
            <Button variant="outline" size="lg">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>
        <section id="about" className="container space-y-6 bg-slate-50 py-8 dark:bg-slate-900 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 space-y-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">About Me</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              I'm a passionate developer and innovator with a drive to create meaningful technology
            </p>
            <div className="mx-auto max-w-3xl space-y-4 text-left">
              <p>
                My journey in technology began with a simple curiosity that evolved into an unrelenting passion. As
                someone who embodies relentlessness, I push forward through challenges, viewing obstacles as
                opportunities for growth rather than roadblocks.
              </p>
              <p>
                Being visionary means I'm constantly looking ahead, anticipating trends and building solutions that
                address not just current needs, but future ones as well. I believe technology should be forward-thinking
                and purposeful.
              </p>
              <p>
                My charismatic approach to collaboration has allowed me to build strong relationships with clients and
                teammates. I believe that the best projects come from passionate teams who believe in what they're
                creating.
              </p>
              <p>
                Resilience defines my work ethic. In the ever-changing landscape of technology, being able to adapt,
                learn, and persevere through challenges is essential. No matter the pressure or setbacks, I remain
                committed to delivering excellence.
              </p>
            </div>
          </div>
        </section>
        <section id="contact" className="container space-y-6 py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Let's Connect</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Have a project in mind or want to discuss opportunities? Reach out!
            </p>
          </div>
          <div className="mx-auto grid max-w-3xl gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Get in Touch</h3>
              <p className="text-muted-foreground">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  <span>hello@example.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Twitter className="h-5 w-5" />
                  <span>@username</span>
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin className="h-5 w-5" />
                  <span>linkedin.com/in/username</span>
                </div>
                <div className="flex items-center gap-2">
                  <Github className="h-5 w-5" />
                  <span>github.com/username</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <form className="space-y-4">
                <div className="grid gap-2">
                  <label htmlFor="name" className="text-sm font-medium leading-none">
                    Name
                  </label>
                  <input
                    id="name"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your name"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="email" className="text-sm font-medium leading-none">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your email"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="message" className="text-sm font-medium leading-none">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your message"
                  />
                </div>
                <Button className="w-full">Send Message</Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
