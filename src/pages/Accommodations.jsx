// src/pages/Accommodations.jsx
import { useState } from "react";
import accommodations from "../data/accommodations";
import { ArrowRight } from "lucide-react";

export default function Accommodations() {
  const [selected, setSelected] = useState(null);
  const whatsapp = "254748639537";

  return (
    <main className="container mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-[#0E7490] mb-6">Our Accommodations</h2>
      <p className="text-gray-700 mb-8">
        Stay in style and comfort at Caesar’s Waterfront Resort. Click on each accommodation to learn more and inquire.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {accommodations.map((acc) => (
          <article
            key={acc.id}
            onClick={() => setSelected(acc)}
            className="rounded-2xl overflow-hidden shadow-lg bg-white cursor-pointer hover:shadow-2xl transition"
          >
            {acc.image && (
              <img
                src={acc.image}
                alt={acc.title}
                className="w-full h-56 object-cover"
              />
            )}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-[#0E7490]">{acc.title}</h3>
              <p className="text-gray-600 mt-2 line-clamp-2">{acc.summary}</p>
              <p className="text-[#FBBF24] font-bold mt-2">{acc.price}</p>
            </div>
          </article>
        ))}
      </div>

      {/* --- Popup Modal --- */}
      {selected && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden animate-fadeIn">
            {selected.image && (
              <img
                src={selected.image}
                alt={selected.title}
                className="w-full h-64 object-cover"
              />
            )}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-[#0E7490] mb-2">{selected.title}</h3>
              <p className="text-gray-700 mb-2">{selected.description}</p>
              <p className="text-gray-700 mb-2"><strong>Price:</strong> {selected.price}</p>
              <p className="text-gray-700 mb-4"><strong>Duration:</strong> {selected.duration}</p>

              <div className="flex gap-3">
                <a
                  href={`https://wa.me/${whatsapp}?text=${encodeURIComponent(
                    "Inquiry: " + selected.title
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-full bg-[#FBBF24] text-[#0E2540] font-semibold hover:bg-yellow-500 transition"
                >
                  Inquire on WhatsApp
                </a>
                <button
                  onClick={() => setSelected(null)}
                  className="px-4 py-2 border rounded-full hover:bg-gray-100 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
