import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-[90vh] bg-[url('/images/hero.jpg')] bg-cover bg-center flex flex-col justify-center items-center text-center text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/40" />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="z-10 px-6"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
          Escape. Relax. Experience Caesar’s Waterfront.
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-lg md:text-xl max-w-2xl mx-auto"
        >
          Discover tranquility, adventure, and unforgettable memories by the lakeside.
        </motion.p>
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="inline-block mt-8 px-8 py-3 bg-emerald-500 hover:bg-emerald-600 rounded-full font-semibold"
        >
          Book Your Stay
        </motion.a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.5, duration: 1.5 }}
        className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-black/60"
      />
    </section>
  );
}
