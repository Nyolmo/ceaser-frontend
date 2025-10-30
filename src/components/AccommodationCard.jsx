import { waLink } from "../utils/whatsapp";

export default function AccommodationCard({ room, action = "wa" }) {
  return (
    <article className="rounded-2xl overflow-hidden shadow-lg bg-white">
      <div className="h-56 w-full overflow-hidden">
        <img
          src={room.image}
          alt={room.title}
          className="w-full h-full object-cover"
          loading="lazy"
          width="640"
          height="384"
        />
      </div>

      <div className="p-5">
        <h3 className="text-xl font-semibold">{room.title}</h3>
        <p className="text-sm text-gray-600 mt-2">{room.summary}</p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm font-medium text-[#0E7490]">{room.price}</span>

          {action === "book" && (
            <a
              className="text-sm bg-[#0E7490] hover:bg-[#0b727f] text-white px-3 py-1.5 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0E7490]"
              href={`/contact?inquiry=book-${room.id}`}
              aria-label={`Book ${room.title}`}
            >
              Book
            </a>
          )}

          {action === "wa" && (
            <a
              className="text-sm bg-[#FBBF24] hover:bg-[#e6b21c] text-[#062c33] px-3 py-1.5 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FBBF24]"
              href={waLink(`Hello! I'd like to inquire about the ${room.title} at Caesar's Waterfront Resort.`)}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`Inquire about ${room.title} on WhatsApp`}
            >
              Inquire
            </a>
          )}
        </div>
      </div>
    </article>
  );
}