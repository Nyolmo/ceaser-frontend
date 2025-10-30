import events from "../data/event";
import EventCard from "../components/EventCard";

export default function Events() {
  return (
    <div className="container mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-[#0E7490] mb-6">Events</h2>
      <p className="text-gray-700 mb-8">Upcoming and signature events — tap to view full program and get tickets.</p>

      <div className="grid md:grid-cols-3 gap-6">
        {events.map((e) => <EventCard key={e.id} event={e} />)}
      </div>
    </div>
  );
}
