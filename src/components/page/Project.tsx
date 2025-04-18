import ProjectCard from "../ProjectCard";
interface Project {
  title: string;
  description: string;
  image: string;
  link?: string;
}

interface ProjectProps {
  projects: Project[];
}

export default function Project({ projects }: ProjectProps) {
  return (
    <section
      id="projects"
      className="min-h-screen px-4 py-10 bg-ghibliLeaf relative z-10">
      <h2 className="text-4xl font-extrabold mb-10 text-center text-ghibliBrown">
        Projects
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}
