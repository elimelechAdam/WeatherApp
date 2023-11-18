import React from "react";
import { MdDarkMode } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";

export const Navbar = () => {
  function toggleDarkMode() {
    const html = document.documentElement;
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
    } else {
      html.classList.add("dark");
    }
  }
  return (
    <header className="w-full flex align-middle items-center justify-center">
      <nav className="p-6 w-[800px] flex justify-between items-center">
        <a
          href="/"
          className="text-2xl uppercase font-bold text-white dark:text-black"
        >
          Weather .
        </a>
        <div className="flex gap-1 text-white dark:text-black">
          <MdDarkMode onClick={toggleDarkMode} size={20} />
          <IoLogoGithub size={20} />
        </div>
      </nav>
    </header>
  );
};
