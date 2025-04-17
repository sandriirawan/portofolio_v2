"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 
      transition-colors duration-300 
      ${isScrolled ? "bg-ghibliLeaf/80 backdrop-blur-sm" : "bg-ghibliLeaf"} 
      text-white shadow-md`}>
      {/* Logo / Nama di Kiri */}
      <Link href="#home" rel="noopener noreferrer">
        <div className="flex items-center space-x-2">
          <Image
            src="/sandri-work.png"
            alt="Avatar"
            className="w-12 h-12 rounded-full"
            width={80}
            height={80}
          />
          <h1 className="text-2xl font-bold text-ghibliBrown">Sandri Irawan</h1>
        </div>
      </Link>

      {/* Burger Menu for Mobile */}
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-2xl">
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Navbar Links */}
      <ul
        className={`${
          isOpen ? "flex-col w-full bg-ghibliLeaf" : "lg:flex hidden"
        } flex gap-6 text-lg lg:flex-row lg:gap-8 absolute lg:static top-16 left-0 px-6 py-4 lgw-full`}>
        <li>
          <Link
            href="#home"
            className=" text-ghibliBrown font-bold "
            onClick={() => setIsOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link
            href="#projects"
            className=" text-ghibliBrown font-bold"
            onClick={() => setIsOpen(false)}>
            Projects
          </Link>
        </li>
        <li>
          <Link
            href="#experience"
            className=" text-ghibliBrown font-bold"
            onClick={() => setIsOpen(false)}>
            Experience
          </Link>
        </li>
        <li>
          <Link
            href="#contact"
            className=" text-ghibliBrown font-bold"
            onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
