import Image from "next/image";
import React from "react";

export default function Experience({ experiences }: any) {
  return (
    <section
      id="experience"
      className="min-h-screen pt-20 px-10 py-10 flex flex-col justify-center items-center text-center relative ">
      <h2 className="text-4xl font-extrabold mb-10 text-ghibliBrown">
        Experience
      </h2>

      <div className="max-w-3xl w-full space-y-6 px-4">
        {experiences.map((exp: any, i: number) => (
          <div
            key={i}
            className="bg-white/70 backdrop-blur-md rounded-xl shadow-lg p-6 border border-ghibliForest/20 text-left transition hover:scale-[1.01]">
            <h3 className="text-2xl font-bold text-ghibliForest mb-1">
              {exp.title}
            </h3>
            <p className="italic text-sm text-ghibliForest/80 mb-3">
              {exp.role} &nbsp;|&nbsp; {exp.period}
            </p>
            <ul className="list-disc list-inside text-base text-ghibliForest space-y-1">
              {exp.tasks.map((task: string, idx: number) => (
                <li key={idx}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* <Image
        src="/experience.png"
        alt="Totoro"
        width={140}
        height={140}
        className="absolute -bottom-4 right-4 z-10 animate-floatUp"
      /> */}
    </section>
  );
}
