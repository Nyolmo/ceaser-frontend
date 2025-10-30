import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-emerald-50 to-white text-center px-6"
    >
      {/* 404 Header */}
      <h1 className="text-[8rem] font-extrabold text-emerald-600 leading-none mb-2">
        404
      </h1>
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">
        Oops! Page Not Found
      </h2>

      {/* Description */}
      <p className="text-gray-600 max-w-md mb-8">
        The page you’re looking for doesn’t exist or has been moved.  
        Let’s get you back to paradise at Caesar’s Waterfront Resort 🌿
      </p>

      {/* Go Home Button */}
      <Link
        to="/"
        className="px-6 py-3 bg-emerald-600 text-white rounded-full shadow-md hover:bg-emerald-700 transition duration-300"
      >
        Back to Home
      </Link>
    </motion.section>
  );
}
