"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Typography } from "./typography";

export default function ServiceModal({ open, onClose, children, title }) {
  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[999] flex items-center justify-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        {/* Modal Box */}
        <motion.div
          className="bg-white w-full max-w-3xl rounded-2xl shadow-xl p-6 max-h-[90vh] overflow-hidden"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <Typography variant="h1" className="text-lg text-center font-bold">
              {title}
            </Typography>

            <button
              onClick={onClose}
              className="text-gray-600 hover:text-black text-xl cursor-pointer"
            >
              ✖
            </button>
          </div>

          {/* Modal Content */}
          <div className="mt-4">{children}</div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
