"use client";
import React, { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 786) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const actionButtons = [
    { 
      color: "", 
      hover: "hover:bg-purple-600", 
      active: "active:bg-purple-700", 
      icon: "/images/icon/Find a Store.png", 
      label: "" 
    },
    { 
      color: "", 
      hover: "hover:bg-purple-600", 
      active: "active:bg-purple-700", 
      icon: "/images/icon/profile.png", 
      label: "" 
    },
    { 
      color: "", 
      hover: "hover:bg-purple-600", 
      active: "active:bg-purple-700", 
      icon: "/images/icon/cart.png", 
      label: "" 
    },
   
  ];

  return (
    <nav className="container relative flex items-center justify-between text-white p-4">
      {/* Logo */}
      <img src="/images/icon/vector.png" alt="Logo" className="h-10 w-auto rounded-lg" />

      {/* Navigation Links */}
      <ul
        className={`${
          isOpen ? "flex" : "hidden"
        } flex-col space-y-2 lg:flex lg:flex-row md:space-y-0 md:gap-6 bg-purple-500 md:bg-transparent p-4 md:p-0 rounded md:rounded-none absolute md:static top-16 left-0 right-0 md:top-auto md:left-auto md:right-auto transition-all duration-300 ease-in-out`}
      >
        {["BIKES", "TREADS", "STRENGTH", "ROW", "APP" , 
          "ACCESSORIES " ,"APPAREL" 
        ].map((item, index) => (
          <li
            key={index}
            className="px-4 py-2 hover:bg-purple-600 cursor-pointer rounded md:px-0 md:py-0"
            onClick={() => {
              const section = document.getElementById(item.toLowerCase());
              section?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {item}
          </li>
        ))}
      </ul>

      {/* Action Buttons */}
      <div className="flex  justify-center items-center  md:flex">
        {actionButtons.map(({ color, hover, active, icon, label }, index) => (
          <button
            key={index}
            className={`${color} ${hover} ${active} text-white px-6 py-3 rounded-lg flex items-center gap-2`}
          >
            <img src={icon} alt={label} className="h-7 w-7" />
            <span>{label}</span>
          </button>
        ))}
      </div>

      {/* Hamburger Menu */}
      <button
        onClick={toggle}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        className="px-4 cursor-pointer md:hidden focus:outline-none"
      >
        {!isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        )}
      </button>

      {/* Background Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 md:hidden"
          onClick={toggle}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
