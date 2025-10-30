import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Accommodation", path: "/accommodations" },
    { name: "Activities", path: "/activities" },
    { name: "Menu", path: "/menu" },
    { name: "Events", path: "/events" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="bg-[#0a2540] text-white shadow-lg sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo + Site Name */}
        <Link to="/" className="flex items-center space-x-3">
          <img
            src="/images/logo.jpg" // <-- your logo path
            alt="Caesar’s Resort Logo"
            className={`object-contain transition-all duration-300 ${
              scrolled ? "w-8 h-8" : "w-10 h-10"
            }`}
          />
          <span
            className={`text-2xl font-bold transition-all duration-300 ${
              scrolled ? "text-xl" : "text-2xl"
            } text-[#FBBF24]`}
          >
            Caesar’s Resort
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `hover:text-[#FBBF24] ${
                  isActive ? "text-[#FBBF24] font-medium" : ""
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white hover:text-[#FBBF24]"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#0a2540] border-t border-gray-700">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 hover:bg-gray-800"
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
