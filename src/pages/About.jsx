import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-white flex flex-col items-center py-16 px-6 sm:px-12"
    >
      {/* Header */}
      <div className="max-w-4xl text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-bold text-emerald-700 mb-4">
          About Caesar’s Waterfront Resort
        </h1>
        <p className="text-gray-600 text-lg">
          Nestled along the scenic Sergoit River, Caesar’s Waterfront Resort offers a luxurious escape
          for travelers seeking relaxation, adventure, and breathtaking views. We blend comfort,
          culture, and connection into every stay.
        </p>
      </div>

      {/* Mission Section */}
      <ScrollReveal>
        <div className="max-w-6xl grid md:grid-cols-2 gap-10 mb-16">
          <img
            src="/images/horse4.jpg"
            alt="Caesar's Waterfront Resort"
            className="rounded-2xl shadow-lg object-cover w-full h-[400px]"
          />
          <div className="flex flex-col justify-center space-y-4">
            <h2 className="text-3xl font-semibold text-emerald-600">Our Story</h2>
            <p className="text-gray-700 leading-relaxed">
              Founded with a vision to redefine the holiday experience in the North Rift, Caesar’s Waterfront
              combines modern hospitality with the serenity of nature. From our lakeside restaurant
              to our exclusive events, every moment is crafted to create lifelong memories.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Whether you’re here for a weekend getaway, a corporate retreat, or an intimate celebration,
              our team ensures you enjoy the perfect blend of tranquility and entertainment.
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* Values Section */}
      <ScrollReveal>
        <div className="max-w-6xl grid md:grid-cols-3 gap-10 text-center">
          <div className="bg-emerald-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="text-2xl font-semibold text-emerald-700 mb-3">Hospitality</h3>
            <p className="text-gray-600">
              We believe in genuine warmth — our guests are family. Expect personal service and lasting impressions.
            </p>
          </div>
          <div className="bg-emerald-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="text-2xl font-semibold text-emerald-700 mb-3">Adventure</h3>
            <p className="text-gray-600">
              From lakeside kayaking to bonfire nights, our resort brings outdoor experiences to life for all ages.
            </p>
          </div>
          <div className="bg-emerald-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="text-2xl font-semibold text-emerald-700 mb-3">Sustainability</h3>
            <p className="text-gray-600">
              We’re committed to protecting nature and empowering the local community through eco-conscious tourism.
            </p>
          </div>
        </div>
      </ScrollReveal>
    </motion.section>
  );
}
