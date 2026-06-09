import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link?: string;
}

export function ProjectCard({ title, description, technologies, image, link }: ProjectCardProps) {
  return (
    <div className="group flex flex-col rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden hover:border-orange-500/20 hover:bg-white/[0.035] transition-all duration-300">
      <div className="aspect-video w-full overflow-hidden bg-white/5 relative">
        <Image
          src={image}
          alt={`Project ${title}`}
          width={600}
          height={400}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-[1.04]"
          unoptimized={image.endsWith(".gif")}
        />
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-base font-bold mb-1.5 text-white">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{description}</p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {technologies.map(tech => (
            <span
              key={tech}
              className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-medium text-gray-400 tracking-wide"
            >
              {tech}
            </span>
          ))}
        </div>
        {link && (
          <Link
            href={link}
            target="_blank"
            className="inline-flex items-center gap-1.5 text-xs text-gray-600 hover:text-orange-400 transition-colors group/link"
          >
            View project
            <ExternalLink className="h-3 w-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
          </Link>
        )}
      </div>
    </div>
  );
}
