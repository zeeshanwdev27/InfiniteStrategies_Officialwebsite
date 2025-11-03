import React, { useState } from "react";
import { Grip } from "lucide-react";
import Overlay from "./Overlay";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full flex items-center justify-between px-4 sm:px-6 md:px-12 py-3 sm:py-4 text-white z-30">
      <img
        src="./logo/infinitestrategiesLogo.png"
        alt="Infinite Strategies"
        className="w-28 sm:w-32 md:w-40"
      />
      <button
        onClick={() => setIsOpen(true)}
        className="group cursor-pointer p-2 sm:p-3 bg-black border-2  border-amber-400 rounded-lg  transition-all duration-300 hover:bg-amber-950/30 hover:shadow-2xl hover:shadow-amber-600/10 backdrop-blur-sm"
      >
        <Grip
          size={20}
          className="sm:w-6 sm:h-6 text-amber-300  duration-300 group-hover:scale-110 group-hover:rotate-90 transition-all"
        />
      </button>
      <Overlay isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  );
}

export default Navbar;
