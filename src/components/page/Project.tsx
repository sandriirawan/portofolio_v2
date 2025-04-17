import React from "react";
import ProjectCard from "../ProjectCard";
import Image from "next/image";

export default function Project({ projects }: any) {
  return (
    <section
      id="projects"
      className="min-h-screen  px-10 py-10 bg-ghibliLeaf relative z-10">
      <h2 className="text-4xl font-extrabold mb-10 text-center text-ghibliBrown">
        Projects
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p: any, i: any) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
      <Image
        src="/project.png"
        alt="Totoro"
        width={120}
        height={120}
        className="absolute -bottom-2 right-0 z-10 animate-floatUp"
      />
    </section>
  );
}
