import { useState } from "react";
import { ArrowRight } from "lucide-react";
import PopUp from "./PopUp";

export default function EventCard({ event }) {
  const [open, setOpen] = useState(false);
  const whatsapp = "254748639537";

  return (
    <>
      <article className="rounded-2xl overflow-hidden shadow-lg bg-white">
        <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold text-[#0E7490]">{event.title}</h3>
              <p className="text-xs text-gray-500">{event.date}</p>
            </div>
            <div className="text-sm font-semibold text-[#FBBF24]">{event.price || "Varies"}</div>
          </div>

          <p className="text-gray-600 mt-3 line-clamp-3">{event.summary}</p>

          <div className="mt-4 flex items-center gap-3">
            <button onClick={() => setOpen(true)} className="text-sm inline-flex items-center gap-2 text-[#0E7490] hover:text-[#074f57] transition">
              Tap to view more <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={event.ticketLink || `https://wa.me/${whatsapp}?text=${encodeURIComponent("Ticket Inquiry: " + event.title)}`}
              target="_blank"
              rel="noreferrer"
              className="ml-auto bg-[#FBBF24] px-3 py-1.5 rounded-full text-sm font-semibold text-[#062c33]"
            >
              Get Ticket
            </a>
          </div>
        </div>
      </article>

      <PopUp open={open} onClose={() => setOpen(false)} title={event.title}>
        <img src={event.image} alt={event.title} className="w-full h-56 object-cover rounded-lg" />
        <p className="mt-4 text-gray-700">{event.description}</p>

        {event.program && (
          <div className="mt-4">
            <h4 className="font-semibold">Program</h4>
            <ul className="list-disc ml-5 mt-2 text-gray-700">
              {event.program.map((p, i) => <li key={i}>{p}</li>)}
            </ul>
          </div>
        )}

        <div className="mt-6 flex gap-3">
          <a
            href={event.ticketLink || `https://wa.me/${whatsapp}?text=${encodeURIComponent("I'd like to book ticket(s) for: " + event.title)}`}
            className="px-4 py-2 rounded-full bg-[#FBBF24] text-[#062c33] font-semibold"
            target="_blank" rel="noreferrer"
          >
            Purchase / Inquire
          </a>
          <button onClick={() => setOpen(false)} className="px-4 py-2 border rounded-full">Close</button>
        </div>
      </PopUp>
    </>
  );
}
