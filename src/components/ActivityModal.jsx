// src/components/ActivityModal.jsx
import { useEffect, useRef } from "react";
import { waLink } from "../utils/whatsapp";

export default function ActivityModal({ activity, open, onClose }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Focus first focusable in modal
    const focusable = containerRef.current?.querySelectorAll(
      'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );
    focusable?.[0]?.focus();

    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
      if (e.key === "Tab") {
        // basic focus trap
        const nodes = focusable;
        if (!nodes || nodes.length === 0) return;
        const first = nodes[0];
        const last = nodes[nodes.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  if (!open || !activity) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
      onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div ref={containerRef} className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden">
        <div className="w-full h-56 overflow-hidden">
          <img src={activity.image} alt={activity.title} className="w-full h-full object-cover" loading="lazy" />
        </div>

        <div className="p-6">
          <h2 className="text-2xl font-bold text-[#0E7490]">{activity.title}</h2>
          <p className="text-gray-700 mt-3">{activity.description ?? activity.summary}</p>

          {activity.details?.length > 0 && (
            <ul className="mt-4 list-disc ml-6 text-gray-700">
              {activity.details.map((d, i) => <li key={i}>{d}</li>)}
            </ul>
          )}

          {activity.menu?.length > 0 && (
            <div className="mt-4">
              <h4 className="font-semibold text-gray-800">Menu / Add-ons</h4>
              <ul className="mt-2 list-disc ml-6 text-gray-700">
                {activity.menu.map((m, i) => <li key={i}>{m}</li>)}
              </ul>
            </div>
          )}

          <div className="mt-6 flex flex-col md:flex-row gap-3">
            <a
              href={`/contact?inquiry=book-${activity.id}`}
              className="bg-[#0E7490] text-white px-5 py-3 rounded-full text-center flex-1"
              onClick={onClose}
            >
              Book / Request
            </a>

            <a
              href={waLink(`Hello! I'd like to inquire about the ${activity.title} at Caesar's Waterfront Resort. Dates:`)}
              target="_blank"
              rel="noreferrer noopener"
              className="bg-[#FBBF24] text-[#062c33] px-5 py-3 rounded-full font-semibold text-center flex-1"
            >
              Inquire on WhatsApp
            </a>
          </div>

          <button
            onClick={onClose}
            className="mt-4 text-[#0E7490] underline w-full"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}