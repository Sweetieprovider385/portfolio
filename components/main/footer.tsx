'use client';

import Link from "next/link";
import { FaGithub, FaFileAlt, FaUser } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="w-full px-2 py-6 bg-gradient-to-t from-[#181a23] via-[#23233b] to-transparent border-t-2 border-cyan-400/20 shadow-[0_-2px_32px_0_rgba(0,212,255,0.10)] flex flex-col items-center">
      <div className="flex flex-row flex-wrap items-center justify-center gap-8 mb-2">
        <Link
          href="mailto:sweetieprovider@gmail.com"
          className="group flex items-center gap-2 text-cyan-300 hover:text-white transition-all duration-300 text-lg font-semibold drop-shadow-glow"
        >
          {/* No icon, just the link */}
        </Link>
        <Link
          href="https://github.com/sweetieprovider385"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 text-cyan-300 hover:text-white transition-all duration-300 text-lg font-semibold drop-shadow-glow"
        >
          <FaGithub className="text-2xl group-hover:animate-pulse" />
          <span className="hidden sm:inline">GitHub</span>
        </Link>
        <Link
          href="/resume"
          className="group flex items-center gap-2 text-cyan-300 hover:text-white transition-all duration-300 text-lg font-semibold drop-shadow-glow"
        >
          <FaFileAlt className="text-2xl group-hover:animate-bounce" />
          <span className="hidden sm:inline">View CV</span>
        </Link>
        <Link
          href="/contact"
          className="group flex items-center gap-2 text-cyan-300 hover:text-white transition-all duration-300 text-lg font-semibold drop-shadow-glow"
        >
          <FaUser className="text-2xl group-hover:animate-bounce" />
          <span className="hidden sm:inline">Contact</span>
        </Link>
      </div>
      <div className="w-full flex justify-center">
        <div className="h-1 w-2/3 bg-gradient-to-r from-cyan-400/30 via-blue-400/10 to-purple-500/30 rounded-full blur-sm mb-2" />
      </div>
      <div className="text-center text-gray-400 text-sm tracking-wide mt-2">
        &copy; Morimura Din {new Date().getFullYear()} Inc. All rights reserved.
      </div>
    </footer>
  );
};
