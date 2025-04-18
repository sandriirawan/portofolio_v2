import React from "react";

interface ExperienceProps {
  experiences: {
    title: string;
    role: string;
    period: string;
    tasks: string[];
  }[];
}

export default function Experience({ experiences }: ExperienceProps) {
  return (
    <section
      id="experience"
      className="min-h-screen px-6 py-14 flex flex-col justify-center items-center text-center relative">
      <h2 className="text-4xl font-extrabold mb-12 text-ghibliBrown">
        Experience
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
        {experiences.map((exp, i) => (
          <div
            key={i}
            className="relative bg-white/80 backdrop-blur-xl border border-ghibliNight/10 rounded-xl shadow-md p-6 text-left transition-transform duration-300 hover:scale-[1.015]">
            {/* Timeline vertical line (optional aesthetic) */}
            <div className="absolute left-[-2px] top-0 h-full w-1 bg-ghibliBrown/20 rounded-full hidden md:block"></div>

            <h3 className="text-2xl font-bold text-ghibliNight mb-1">
              {exp.title}
            </h3>
            <p className="italic text-sm text-ghibliNight/70 mb-3">
              {exp.role} &nbsp;|&nbsp; {exp.period}
            </p>
            <ul className="list-disc list-inside text-base text-ghibliNight space-y-1">
              {exp.tasks.map((task, idx) => (
                <li key={idx}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
