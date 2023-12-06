import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#APropos" className="ml-3 text-xl">
            Clément Cardon
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#Projets" className="mr-5 hover:text-white">
            Projets
          </a>
          <a href="#TechnologiesEtOutils" className="mr-5 hover:text-white">
            Technologies et outils
          </a>
          <a href="./ALT_BUT2_Cardon_Clement.pdf" target="_blank" className="mr-5 hover:text-white">
          CV
          </a>
          <a href="./CV_CARDON_Clement_Developer_ENGLISH.pdf" target="_blank" className="mr-5 hover:text-white">
          CV (English)
          </a>
          <a href="./Portfolio_Clement_CARDON.pdf" target="_blank" className="mr-5 hover:text-white">
          Compétences (BUT)
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          Me contacter
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}
