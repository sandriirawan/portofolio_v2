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
      transition-all duration-300 
      ${
        isScrolled
          ? "bg-ghibliLeaf/70 backdrop-blur-lg shadow-lg"
          : "bg-ghibliLeaf"
      } 
      text-white`}>
      {/* Logo */}
      <Link href="#home" rel="noopener noreferrer">
        <div className="flex items-center space-x-3 hover:scale-105 transition-transform duration-200">
          <Image
            src="/sandri-work.png"
            alt="Avatar"
            className="w-10 h-10 rounded-full"
            width={80}
            height={80}
          />
          <h1 className="text-2xl font-bold text-ghibliBrown font-serif">
            Sandri Irawan
          </h1>
        </div>
      </Link>

      {/* Burger Menu */}
      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          className="text-3xl text-ghibliBrown transition-transform duration-300 hover:scale-110">
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Navigation Links */}
      <ul
        className={`${
          isOpen
            ? "flex flex-col absolute top-[100%] left-0 w-full bg-ghibliLeaf text-center shadow-md animate-slideDown"
            : "hidden lg:flex"
        } lg:static lg:flex-row gap-6 text-lg font-medium text-ghibliBrown transition-all duration-300`}>
        {["home", "projects", "experience", "contact"].map((item) => (
          <li key={item}>
            <Link
              href={`#${item}`}
              onClick={() => setIsOpen(false)}
              className="block py-2 lg:py-0 hover:text-yellow-900 transition-colors duration-200">
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
