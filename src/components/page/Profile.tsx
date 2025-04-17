import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaDownload, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import Marquee from "../Marquee";

export default function Profile() {
  return (
    <section
      id="home"
      className="min-h-screen pt-24 px-6 flex flex-col justify-center items-center text-center relative z-10 bg-gradient-to-b from-ghibliCream via-white to-ghibliLeaf">
      <div className="relative">
        <Image
          src="/sandri-avatar.jpg"
          alt="Avatar"
          className="w-40 h-40 rounded-full border-4 border-ghibliAccent shadow-md animate-floatUp"
          width={160}
          height={160}
        />
      </div>
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-ghibliBrown mt-6">
        Hi! I&#39;m Sandri Irawan
      </h1>
      <p className="mt-2 text-lg md:text-xl text-ghibliNight">
        Full Stack Developer 🍃
      </p>
      {/* About Section
      <p className="mt-4 text-lg md:text-xl text-ghibliNight">
        I am a Full Stack Developer with expertise in JavaScript and
        technologies like React Native, ReactJS, NextJS, and NodeJS. I have
        experience in creating innovative and effective digital solutions for
        both web and mobile applications.
      </p> */}
      <p className="mt-3 max-w-xl text-base text-ghibliNight">
        I am a Full Stack Developer with expertise in JavaScript and
        technologies like React Native, ReactJS, NextJS, and NodeJS. I have
        experience in creating innovative and effective digital solutions for
        both web and mobile applications.
      </p>
      <Link
        href="/cv-sandri.pdf"
        download
        className="mt-6 inline-flex items-center gap-3 bg-ghibliAccent text-white px-6 py-2 rounded-full shadow-md hover:scale-105 hover:bg-orange-500 transition-all duration-200">
        <FaDownload className="animate-bounce-slow" />
        Download CV
      </Link>
      <div className="flex gap-5 mt-6">
        <Link
          href="https://github.com/sandriirawan"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-ghibliLeaf hover:bg-ghibliForest rounded-xl transition shadow-md hover:scale-110">
          <FaGithub className="w-6 h-6 text-ghibliNight" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/sandriirawann/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-ghibliLeaf hover:bg-ghibliForest rounded-xl transition shadow-md hover:scale-110">
          <FaLinkedin className="w-6 h-6 text-ghibliNight" />
        </Link>
        <Link
          href="mailto:sandriirawan01@gmail.com"
          className="p-3 bg-ghibliLeaf hover:bg-ghibliForest rounded-xl transition shadow-md hover:scale-110">
          <SiMinutemailer className="w-6 h-6 text-ghibliNight" />
        </Link>
        <Link
          href="https://wa.me/6282310185744"
          target="_blank"
          className="p-3 bg-ghibliLeaf hover:bg-ghibliForest rounded-xl transition shadow-md hover:scale-110">
          <FaWhatsapp className="w-6 h-6 text-ghibliNight" />
        </Link>
      </div>
    </section>
  );
}
