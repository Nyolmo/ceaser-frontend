
export default function ActivityCard({ activity, onSelect }) {
  if (!activity) return null;

  const handleKey = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onSelect?.(activity);
    }
  };

  return (
    <article
      role="button"
      tabIndex={0}
      onClick={() => onSelect?.(activity)}
      onKeyDown={handleKey}
      className="rounded-2xl overflow-hidden shadow-lg bg-white cursor-pointer hover:shadow-2xl transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0E7490]"
      aria-label={`Open details for ${activity.title}`}
    >
      <img
        src={activity.image}
        alt={activity.title}
        className="w-full h-48 object-cover"
        loading="lazy"
        width="640"
        height="288"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-[#0E7490]">{activity.title}</h3>
        <p className="text-gray-600 mt-2 line-clamp-2">{activity.summary ?? activity.description}</p>
        {activity.price && <p className="text-[#FBBF24] font-bold mt-2">{activity.price}</p>}
      </div>
    </article>
  );
}