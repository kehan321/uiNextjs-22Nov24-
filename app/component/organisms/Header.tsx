"use client";
import React, { useState, useEffect } from "react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  // Reset the menu state when switching to larger screen sizes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 786) {
        setIsOpen(false); // Close menu on large screens
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className=" container relative flex items-center justify-between  text-white p-4">
      {/* Logo */}
      <img src="/images/icon/vector.png"alt="Logo" className="h-10 w-auto rounded-lg "  />

    
      {/* Navigation Links with Redirects */}
      <ul
        className={`${
          isOpen ? "flex" : "hidden"
        } flex-col gap-2 md:flex md:flex-row md:gap-6 bg-purple-500 md:bg-transparent  p-4 md:p-0 rounded md:rounded-none absolute md:static top-16 left-0 right-0 md:top-auto md:left-auto md:right-auto transition-all duration-300 ease-in-out`}
      >
        {["Home", "About", "Services", "Contact"].map((item, index) => (
          <li
        key={index}
        className="px-4 py-2 hover:bg-purple-600 cursor-pointer rounded md:px-0 md:py-0"
        onClick={() => {
          const section = document.getElementById(item.toLowerCase());
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
          }
        }}
          >
        {item}
          </li>
        ))}
      </ul>

      {/* Toggle Button */}
      <button
        onClick={toggle}
        className="px-4 cursor-pointer md:hidden focus:outline-none"
        aria-label="Toggle menu"
      >
        {!isOpen ? (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
      </button>

      {/* Background Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 h-[30%] md:hidden"
          onClick={toggle}
        ></div>
      )}
    </nav>
  );
};

export default Header;
