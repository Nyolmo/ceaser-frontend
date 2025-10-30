import { motion } from "framer-motion";

export default function PopUp({ open, onClose, title, children }) {
  if (!open) return null;
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white rounded-2xl max-w-3xl w-full shadow-2xl overflow-auto"
        initial={{ scale: 0.96, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.96, y: 20 }}
        transition={{ duration: 0.22 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex justify-between items-start">
            <h3 className="text-2xl font-semibold text-[#0E7490]">{title}</h3>
            <button className="text-gray-500" onClick={onClose}>Close</button>
          </div>
          <div className="mt-4">{children}</div>
        </div>
      </motion.div>
    </motion.div>
  );
}
