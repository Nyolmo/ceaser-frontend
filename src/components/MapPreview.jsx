// src/components/MapPreview.jsx
export default function MapPreview({ address = "Caesar's Waterfront, Sergoit" }) {

  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.3456!2d35.289!3d0.520!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1781a3df!2sCaesar%E2%80%99s%20Waterfront!5e0!3m2!1sen!2ske!4v1690000000000";
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-8 my-10">
      <h4 className="text-lg font-semibold text-resort-700 mb-3">Find us</h4>
      <div className="rounded-xl overflow-hidden shadow-md border border-gray-200">
        <iframe
          title="Caesars Waterfront map"
          src={mapSrc}
          className="w-full h-64 md:h-80"
          loading="lazy"
        />
        <div className="p-4 bg-white flex items-center justify-between">
          <div>
            <div className="font-semibold">Caesar’s Waterfront Resort</div>
            <div className="text-sm text-gray-600">Sergoit, Moiben, Uasin Gishu County</div>
          </div>
          <a
            className="px-4 py-2 rounded-full bg-resort-500 text-white text-sm hover:bg-resort-600 transition"
            href="https://www.google.com/maps/dir/?api=1&destination=Caesar's+Waterfront"
            target="_blank"
            rel="noreferrer"
          >
            Directions
          </a>
        </div>
      </div>
    </div>
  );
}
