import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaDownload, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";

export default function Profile() {
  return (
    <section
      id="home"
      className="min-h-screen pt-24 px-6 flex flex-col justify-center items-center text-center relative z-10 bg-gradient-to-b from-ghibliCream via-white to-ghibliLeaf animate-fadeIn">
      {/* Avatar */}
      <div className="relative group">
        <Image
          src="/sandri-avatar.jpg"
          alt="Avatar"
          className="w-40 h-40 rounded-full border-4 border-ghibliAccent shadow-lg transition-transform duration-500 group-hover:scale-105 animate-floatUp"
          width={160}
          height={160}
        />
        <div className="absolute bottom-0 right-0 bg-ghibliAccent p-1 rounded-full shadow-md animate-pulse">
          🧑‍💻
        </div>
      </div>

      {/* Name */}
      <h1 className="text-4xl md:text-5xl font-serif font-bold mt-6 bg-gradient-to-r from-ghibliBrown to-ghibliNight text-transparent bg-clip-text">
        Hi! I&#39;m Sandri Irawan
      </h1>

      {/* Description */}
      <p className="mt-3 max-w-xl text-base text-ghibliNight leading-relaxed">
        A{" "}
        <span className="font-semibold text-ghibliAccent">
          Full Stack Developer
        </span>{" "}
        with a love for clean code, modern tech, and elegant UI/UX. Experienced
        in building digital solutions using{" "}
        <span className="font-semibold">React Native, NextJS, NodeJS</span>, and
        more.
      </p>

      {/* CV Download */}
      <Link
        href="/CV-Sandri-irawan-2025.pdf"
        download
        className="mt-6 inline-flex items-center gap-3 bg-ghibliAccent text-white px-6 py-2 rounded-full shadow-md hover:scale-105 hover:bg-orange-500 transition-all duration-300">
        <FaDownload className="animate-bounce-slow" />
        Download CV
      </Link>

      {/* Social Links */}
      {/* <div className="flex gap-5 mt-6">
        <SocialIcon
          href="https://github.com/sandriirawan"
          icon={<FaGithub />}
        />
        <SocialIcon
          href="https://www.linkedin.com/in/sandriirawann/"
          icon={<FaLinkedin />}
        />
        <SocialIcon
          href="mailto:sandriirawan01@gmail.com"
          icon={<SiMinutemailer />}
        />
      </div> */}
    </section>
  );
}

function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 bg-ghibliLeaf hover:bg-ghibliForest rounded-xl transition-all duration-300 shadow-md hover:scale-110">
      <span className="w-6 h-6 text-ghibliNight">{icon}</span>
    </Link>
  );
}
