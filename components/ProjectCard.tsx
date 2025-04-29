import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link?: string;
}

export function ProjectCard({ id, title, description, technologies, image, link }: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-gray-800 bg-gray-950 shadow-md transition-all hover:shadow-lg hover:shadow-orange-900/10 hover:border-gray-700">
      <div className="aspect-video w-full overflow-hidden bg-gray-800">
        <Image
          src={`${image}`}
          alt={`Project ${id}`}
          width={600}
          height={400}
          className={`object-cover transition-transform group-hover:scale-105 duration-300`}
        />
      </div>
      <div className="p-6 flex flex-col">
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map(tech => (
            <span
              key={tech}
              className="inline-flex items-center rounded-full border border-gray-700 bg-gray-800 px-2.5 py-0.5 text-xs font-semibold text-gray-200"
            >
              {tech}
            </span>
          ))}
        </div>
        {link && (
          <Link
            href={link}
            target="_blank"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-300"
          >
            View Project <ExternalLink className="h-4 w-4" />
          </Link>
        )}
      </div>
    </div>
  );
}
