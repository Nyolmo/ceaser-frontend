import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";

const galleryImages = [
  { src: "/images/boat.jpg", caption: "Boat Rides" },
  { src: "/images/camping.jpg", caption: "Camping Grounds" },
  { src: "/images/horse1.jpg", caption: "A girl enjoying a ride from a horse" },
  { src: "/images/lakeview.jpg", caption: "Lakeview with a group of Muslims" },
  { src: "/images/team1.jpg", caption: "Corporate Events" },
  { src: "/images/valentineboat.jpg", caption: "valentine date as you ride on a boat" },
  { src: "/images/lakeside.jpg", caption: "Lakeside view and dining" },
  { src: "/images/camping.jpg", caption: "Camping Grounds" },
  { src: "/images/horse4.jpg", caption: "our horse feeding in Sergoit grounds" },
  { src: "/images/horse2.jpg", caption: "Corporate Events" },
  { src: "/images/team-building.jpg", caption: "Team bulding, a group of kenyan Maasai with indians, enjoying there time" },
  { src: "/images/horse3.jpg", caption: "our horse feeding in Sergoit grounds" },
  { src: "/images/ferris-wheel.jpg", caption: "Corporate Events" },
  { src: "/images/boat-riding.jpg", caption: "Bonfire Nights" },
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="pt-24 pb-20 px-6 md:px-20 bg-gray-50 min-h-screen">
      <ScrollReveal>
        <h2 className="text-4xl font-bold text-center mb-10">Gallery</h2>
      </ScrollReveal>
      <ScrollReveal delay={0.3}>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="cursor-pointer overflow-hidden rounded-xl shadow-md"
              onClick={() => setSelected(img)}
            >
              <img src={img.src} alt={img.caption} className="w-full h-64 object-cover" />
            </motion.div>
          ))}
        </div>
      </ScrollReveal>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.img
              src={selected.src}
              alt={selected.caption}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="max-w-3xl rounded-lg"
            />
            <p className="absolute bottom-12 text-white text-lg font-medium">
              {selected.caption}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
