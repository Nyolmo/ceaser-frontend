import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import activitiesData from "../data/activities";
import eventsData from "../data/event";
import menuData from "../data/menu";

import ActivityCard from "../components/ActivityCard";
import EventCard from "../components/EventCard";

export default function Home() {
  const [selectedDish, setSelectedDish] = useState(null);


  const activities = Array.isArray(activitiesData) ? activitiesData : [];
  const events = Array.isArray(eventsData) ? eventsData : [];
  const mains = menuData && Array.isArray(menuData.mains) ? menuData.mains : [];

  const featuredActivities = activities.slice(0, 3);
  const featuredEvents = events.slice(0, 3);
  const menuHighlights = mains.slice(0, 3);

  const tasteItems = [
    {
      title: "Farm-to-Table Freshness",
      desc: "We use locally sourced ingredients for authentic, flavorful dishes straight from farm to your plate. Our chefs handpick vegetables, herbs, and meats from trusted farmers every morning.",
      image: "/images/menu/nyama-choma.jpg",
    },
    {
      title: "Signature Cuisine",
      desc: "Chef-curated meals that blend continental sophistication with local flair. From spiced tilapia to slow-cooked ribs, each dish celebrates Kenya’s culinary identity.",
      image: "/images/menu/tilapia.jpg",
    },
    {
      title: "Unforgettable Dining",
      desc: "Enjoy lakeside dinners under the stars, casual brunches by the pool, or intimate indoor dining with panoramic views — every setting tells a story of taste and tranquility.",
      image: "/images/valentineboat.jpg",
    },
  ];

  return (
    <main className="bg-[#fdfaf6] text-[#0f1724]">
 
      <section className="relative h-[78vh] md:h-[86vh] overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover brightness-[0.65]"
            poster="/images/hero-fallback.jpg"
          >
            <source src="/video/resort-hero.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="absolute inset-0 bg-linear-to-b from-black/10 via-transparent to-black/40" />

        <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-3xl text-white"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#FBBF24]">
              Caesar’s Waterfront Resort
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-6">
              Serene lakeside escapes, immersive outdoor experiences and tailored events — where nature and refinement meet.
            </p>

            <div className="flex gap-3">
              <a
                href="#experiences"
                className="bg-[#FBBF24] text-[#062c33] px-5 py-3 rounded-full font-semibold"
              >
                Explore Experiences
              </a>
              <Link
                to="/accommodations"
                className="bg-white/20 hover:bg-[#FBBF24] text-white px-5 py-3 rounded-full font-medium border border-white/25"
              >
                View Rooms
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

     
      <section className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#0E7490]">A place to breathe</h2>
            <p className="mt-4 text-gray-700">
              Caesar’s Waterfront Resort sits by the shimmering Sergoit waters surrounded by rolling hills. Expect warm hospitality, locally-sourced cuisine, and carefully crafted experiences — from tranquil boat rides at sunrise to evenings by the bonfire.
            </p>

            <ul className="mt-4 list-disc ml-6 text-gray-700">
              <li>Boat rides & kayaking</li>
              <li>Lakeside dining & fresh local produce</li>
              <li>Private events, weddings & corporate retreats</li>
            </ul>

            <div className="mt-6">
              <a
                href="/contact"
                className="inline-block bg-[#0E7490] text-white px-4 py-2 rounded-full"
              >
                Plan Your Visit
              </a>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src="/images/hero.jpg"
              alt="About Caesar's"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>
      </section>

   
      <section id="experiences" className="container mx-auto px-6 py-12 bg-[#E0F2FE]/60 rounded-xl">
        <h3 className="text-2xl font-semibold text-[#0E7490] mb-6">Featured Experiences</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {featuredActivities.map((a) => <ActivityCard key={a.id} activity={a} />)}
        </div>
        <div className="mt-6 text-center">
          <Link to="/activities" className="text-[#0E7490] underline">View all activities</Link>
        </div>
      </section>


      <section className="container mx-auto px-6 py-12">
        <h3 className="text-2xl font-semibold text-[#0E7490] mb-6">Upcoming Events</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {featuredEvents.map((e) => <EventCard key={e.id} event={e} />)}
        </div>
        <div className="mt-6 text-center">
          <Link to="/events" className="text-[#0E7490] underline">See all events</Link>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#0E7490] mb-10">
            A Taste of Caesar Resort
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {tasteItems.map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ scale: 1.03 }}
                onClick={() => setSelectedDish(item)}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl cursor-pointer transition"
              >
                <img src={item.image} alt={item.title} className="w-full h-56 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-[#FBBF24]">{item.title}</h3>
                  <p className="text-gray-600 mt-2 line-clamp-2">{item.desc}</p>
                  <p className="mt-3 text-[#0E7490] font-medium">Learn More →</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link to="/menu" className="text-[#0E7490] underline font-medium text-lg">
              View Available Menu
            </Link>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedDish && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <img src={selectedDish.image} alt={selectedDish.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#0E7490]">{selectedDish.title}</h3>
                <p className="text-gray-700 mt-3">{selectedDish.desc}</p>

                <div className="flex flex-col md:flex-row gap-4 mt-6">
                  <Link
                    to="/menu"
                    className="bg-[#0E7490] text-white px-4 py-2 rounded-full text-center flex-1"
                    onClick={() => setSelectedDish(null)}
                  >
                    View Full Menu
                  </Link>
                  <a
                    href={`https://wa.me/254748639537?text=${encodeURIComponent(
                      `Hello! I'd like to inquire about the ${selectedDish.title} at Caesar's Waterfront Resort.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-[#FBBF24] text-[#062c33] px-4 py-2 rounded-full font-semibold text-center flex-1"
                  >
                    Inquire on WhatsApp
                  </a>
                </div>

                <button
                  onClick={() => setSelectedDish(null)}
                  className="mt-6 text-[#0E7490] underline w-full"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

  
      <section className="container mx-auto px-6 py-12">
        <div className="rounded-2xl bg-[#0E7490] text-white p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-xl font-semibold">Ready to book or plan an event?</h4>
            <p className="text-white/90 mt-1">
              We respond quickly on WhatsApp — tell us your dates and guest count.
            </p>
          </div>
          <div>
            <a
              href={`https://wa.me/254748639537?text=${encodeURIComponent(
                "Hello! I'd like to inquire about Caesar's Waterfront Resort."
              )}`}
              target="_blank"
              rel="noreferrer"
              className="bg-[#FBBF24] text-[#062c33] px-5 py-3 rounded-full font-semibold"
            >
              Message Us on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
