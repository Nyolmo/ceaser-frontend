import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/254700000000?text=Hello%20Caesar’s%20Resort!%20I’d%20like%20to%20make%20an%20inquiry."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-xl z-50"
    >
      <MessageCircle size={26} />
    </a>
  );
}
