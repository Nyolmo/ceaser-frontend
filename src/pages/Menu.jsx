import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import menu from "../data/menu";

export default function MenuPage() {
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();

  const handleInquiry = (itemName) => {
    navigate(`/inquiries?item=${encodeURIComponent(itemName)}`);
  };

  return (
    <div className="container mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-[#0E7490] mb-6 text-center">
        Our Menu & Packages
      </h2>
      <p className="text-gray-700 mb-8 text-center max-w-2xl mx-auto">
        Fresh local ingredients, signature dishes, and curated packages for stays & events.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(menu).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-2xl font-semibold text-[#FBBF24] mb-4 text-center">
              {category.replace(/_/g, " ").toUpperCase()}
            </h3>

            <div className="space-y-6">
              {items.map((it) => (
                <motion.div
                  key={it.name}
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  onClick={() => setSelectedItem(it)}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl cursor-pointer"
                >
                  <img
                    src={it.image}
                    alt={it.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 flex justify-between items-start">
                    <div>
                      <div className="font-semibold text-lg text-gray-800">{it.name}</div>
                      {it.desc && (
                        <div className="text-sm text-gray-600 mt-1 line-clamp-2">
                          {it.desc}
                        </div>
                      )}
                    </div>
                    <div className="text-[#0E7490] font-bold whitespace-nowrap ml-4">
                      {it.price}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

  
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.name}
                  className="w-full h-72 object-cover"
                />
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black transition"
                >
                  ✕
                </button>
              </div>

              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-[#0E7490] mb-3">
                  {selectedItem.name}
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {selectedItem.desc}
                </p>
                <p className="text-[#FBBF24] font-semibold text-xl mb-6">
                  {selectedItem.price}
                </p>

                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleInquiry(selectedItem.name)}
                  className="bg-[#0E7490] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#0C6178] transition"
                >
                  Inquire Now
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
