import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-ghibliNight text-ghibliCream py-8 px-4 text-center border-t border-ghibliForest/30">
      <div className="mb-4 space-x-5 text-2xl flex justify-center">
        <a
          href="https://github.com/sandriirawan"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-ghibliLeaf transition">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/sandriirawann"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-ghibliLeaf transition">
          <FaLinkedin />
        </a>
        <a
          href="https://x.com/sandriirawann"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-ghibliLeaf transition">
          <FaTwitter />
        </a>
      </div>

      <p className="text-sm">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold">Sandri Irawan</span>. Made with ❤️ using{" "}
        <span className="font-semibold">Next.js</span>.
      </p>
    </footer>
  );
}
