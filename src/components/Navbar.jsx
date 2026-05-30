import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const openTimer = useRef(null);
  const closeTimer = useRef(null);

  const OPEN_SHORT_DELAY = 150; // ms for mouse hover
  const VISIBLE_AFTER_LEAVE = 500; // ms menu stays visible after leaving
  const TOUCH_LONG_PRESS = 1000; // ms to long-press to open on touch

  const clearTimers = () => {
    if (openTimer.current) {
      clearTimeout(openTimer.current);
      openTimer.current = null;
    }
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  useEffect(() => {
    return () => clearTimers();
  }, []);

  const handleMouseEnter = () => {
    // cancel any pending close, open quickly
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    if (openTimer.current) clearTimeout(openTimer.current);
    openTimer.current = setTimeout(() => setOpen(true), OPEN_SHORT_DELAY);
  };

  const handleMouseLeave = () => {
    if (openTimer.current) {
      clearTimeout(openTimer.current);
      openTimer.current = null;
    }
    // keep it visible for a short while so user can move to the menu
    closeTimer.current = setTimeout(() => setOpen(false), VISIBLE_AFTER_LEAVE);
  };

  const handleTouchStart = () => {
    // start long-press to open
    clearTimers();
    openTimer.current = setTimeout(() => setOpen(true), TOUCH_LONG_PRESS);
  };

  const handleTouchEnd = () => {
    // if it never opened (quick tap), cancel opening. If already open, keep it visible for a bit.
    if (openTimer.current) {
      clearTimeout(openTimer.current);
      openTimer.current = null;
    }
    if (open) {
      // keep open a little longer so user can tap an item
      closeTimer.current = setTimeout(
        () => setOpen(false),
        VISIBLE_AFTER_LEAVE
      );
    }
  };

  const toggleOpen = () => {
    clearTimers();
    setOpen((s) => !s);
  };

  return (
    <div className="w-[calc(100%-2rem)] max-w-7xl mx-auto fixed top-5 left-0 right-0 flex items-center justify-between px-4 py-3 z-50 rounded-2xl border border-white/10 bg-[#242424]/85 shadow-lg shadow-black/20 backdrop-blur-md">
      {/* Left: Logo / Name */}
      <div className="flex items-start flex-col shrink-0">
        <Link
          to="/"
          className="font-semibold md:text-md text-xl cursor"
          onClick={() => setOpen(false)}
        >
          Krish Kumar
        </Link>
        <p className="text-sm text-gray-200 font-semibold opacity-50">
          Software Engineer
        </p>
      </div>

      {/* Center: Nav links for large screens */}
      <div className="hidden md:flex items-center justify-center gap-12 w-[24rem] mx-auto h-11 rounded-4xl transition-shadow duration-200 shadow-xs shadow-teal-100 hover:shadow-xs hover:shadow-blue-400">
        <Link
          to="/projects"
          className="font-medium text-md hover:text-teal-100"
        >
          Projects
        </Link>
        <Link to="/about" className="font-medium text-md hover:text-teal-100">
          About
        </Link>
        <a
          href="/assets/Resume_Krish_Kumar.pdf"
          className="font-medium text-sm hover:text-teal-100"
          target="_blank"
        >
          Resume
        </a>
      </div>

      {/* Social icons - show as is on large, show in dropdown for mobile */}
      <div className="hidden md:flex items-center gap-10">
        <a
          href="https://github.com/krishkumar0204"
          target="_blank"
          className="flex items-center gap-2"
        >
          <GitHubIcon fontSize="small" />
          <p className="hover:text-teal-100">Github</p>
        </a>
        <a
          href="https://www.linkedin.com/in/krishkumar0204/"
          target="_blank"
          className="flex items-center gap-2 "
        >
          <LinkedInIcon fontSize="small" />
          <p className="hover:text-teal-100">Linkedin</p>
        </a>
      </div>

      {/* Mobile menu: hover/touch to reveal nav + socials with delayed-close so user can navigate */}
      <div
        className="relative lg:hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
      >
        <div
          onClick={toggleOpen}
          className="cursor-pointer inline-flex items-center"
        >
          <MenuIcon fontSize="small" />
        </div>

        <div
          className={`absolute right-0 mt-3 w-44 bg-gray-900/95 text-white rounded-lg shadow-lg transition-opacity z-50 ${
            open
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col py-2">
            <Link
              to="/projects"
              className="px-5 py-2 hover:bg-gray-800 rounded text-md font-medium"
              onClick={() => setOpen(false)}
            >
              Projects
            </Link>
            <Link
              to="/about"
              className="px-5 py-2 hover:bg-gray-800 rounded text-md font-medium"
              onClick={() => setOpen(false)}
            >
              About
            </Link>
            <a
              href="/assets/Resume_Krish_Kumar.pdf"
              className="px-5 py-2 hover:bg-gray-800 rounded text-sm font-medium"
              onClick={() => setOpen(false)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
            <div className="border-t border-gray-700 my-2" />
            <a
              href="https://github.com/krishkumar0204"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 hover:bg-gray-800 rounded"
              onClick={() => setOpen(false)}
            >
              <GitHubIcon fontSize="small" />
              <span>Github</span>
            </a>
            <a
              href="https://www.linkedin.com/in/krishkumar0204/"
              target="_blank"
              className="flex items-center gap-2 px-5 py-2 hover:bg-gray-800 rounded "
              onClick={() => setOpen(false)}
            >
              <LinkedInIcon fontSize="small" />
              <span>Linkedin</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
