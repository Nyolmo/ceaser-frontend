// src/pages/Activities.jsx
import { useState } from "react";
import activities from "../data/activities.js";
import ActivityCard from "../components/ActivityCard";
import ActivityModal from "../components/ActivityModal";

export default function Activities() {
  const [selected, setSelected] = useState(null);

  return (
    <main className="container mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-[#0E7490] mb-6">Activities & Adventures</h2>
      <p className="text-gray-700 mb-8">From serene boat rides to lakeside camping — choose an experience and tap to view more details.</p>

      <div className="grid md:grid-cols-3 gap-6">
        {activities.map((a) => (
          <ActivityCard key={a.id} activity={a} onSelect={(act) => setSelected(act)} />
        ))}
      </div>

      <ActivityModal
        activity={selected}
        open={!!selected}
        onClose={() => setSelected(null)}
      />
    </main>
  );
}