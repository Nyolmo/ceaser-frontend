import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Facebook, MessageCircle, ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gray-950 text-gray-300 pt-14 pb-8 mt-24 border-t border-gray-800">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">


        <div>
          <h2 className="text-xl font-semibold text-white mb-3">
            Caesar’s Waterfront Resort
          </h2>
          <p className="text-gray-400 leading-relaxed text-sm max-w-sm mx-auto md:mx-0">
            A tranquil retreat offering lakeside serenity, luxury comfort, and
            unforgettable hospitality experiences in the heart of nature.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-medium text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {[
              { label: "Home", path: "/" },
              { label: "About", path: "/about" },
              { label: "Activities", path: "/activities" },
              { label: "Events", path: "/events" },
              { label: "Gallery", path: "/gallery" },
              { label: "Contact", path: "/contact" },
            ].map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="hover:text-teal-400 transition-colors duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>


        <div className="flex flex-col items-center md:items-end">
          <h3 className="text-lg font-medium text-white mb-4">Connect With Us</h3>
          <div className="flex gap-4">
            <a
              href="https://wa.me/254712345678"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-800 hover:bg-teal-500 transition duration-300"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a
              href="https://facebook.com/caesarsresort"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition duration-300"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>


      <div className="border-t border-gray-800 mt-12 pt-5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Caesar’s Waterfront Resort — All rights reserved.
      </div>


      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 p-3 rounded-full bg-gray-800 text-gray-200 shadow-md hover:bg-teal-500 hover:text-white transition"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
