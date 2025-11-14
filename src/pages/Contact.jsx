import { useState } from "react";
import MapPreview from "../components/MapPreview";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [saved, setSaved] = useState(false);
  const phone = "254748639537";

  function handleSubmit(e) {
    e.preventDefault();
   
    const store = JSON.parse(localStorage.getItem("inquiries") || "[]");
    store.unshift({ ...form, createdAt: new Date().toISOString() });
    localStorage.setItem("inquiries", JSON.stringify(store));
    setSaved(true);

    const text = encodeURIComponent(`Inquiry from ${form.name} (${form.phone})\n${form.message}`);
    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
  }

  return (
    <div className="container mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-[#0E7490] mb-4">Contact & Inquiries</h2>
      <p className="text-gray-700 mb-6">Fill the form and hit Send — we’ll open WhatsApp and save a local copy for your admin.</p>

      <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow p-6 grid gap-4 max-w-3xl">
        <div className="grid md:grid-cols-2 gap-4">
          <input required placeholder="Full name" value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} className="border p-3 rounded" />
          <input required placeholder="Phone (WhatsApp)" value={form.phone} onChange={(e)=>setForm({...form,phone:e.target.value})} className="border p-3 rounded" />
        </div>
        <input placeholder="Email (optional)" value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} className="border p-3 rounded" />
        <textarea required placeholder="Your message / requirements" value={form.message} onChange={(e)=>setForm({...form,message:e.target.value})} rows={6} className="border p-3 rounded" />
        <div className="flex items-center gap-4">
          <button type="submit" className="bg-[#0E7490] text-white px-5 py-2 rounded-full">Send Message</button>
          {saved && <div className="text-sm text-green-600">Saved locally. We opened WhatsApp for your message.</div>}
        </div>
      </form>

      <MapPreview />
    </div>
  );
}
