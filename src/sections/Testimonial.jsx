import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Testimonial() {
  const [openItem, setOpenItem] = useState(null);

  const handleOpen = (item) => setOpenItem(item);
  const handleClose = () => setOpenItem(null);

  return (
    <div className="items-start mt-24 md:mt-36 c-space relative">
      <h2 className="text-heading mb-10">My Resume & Certifications</h2>

      {/* Buttons Section */}
      <div className="flex flex-wrap justify-center gap-8">
        {/* Resume Card */}
        <motion.div
          onClick={() => handleOpen("resume")}
          whileHover={{ scale: 1.05 }}
          className="w-64 h-40 flex items-center justify-center rounded-2xl border border-gray-50/[.1] bg-gradient-to-br from-indigo-700 to-storm cursor-pointer hover:shadow-lg transition"
        >
          <h3 className="text-lg font-semibold text-white">📄 View Resume</h3>
        </motion.div>

        {/* Certifications Card */}
        <motion.div
          onClick={() => handleOpen("certifications")}
          whileHover={{ scale: 1.05 }}
          className="w-64 h-40 flex items-center justify-center rounded-2xl border border-gray-50/[.1] bg-gradient-to-br from-royal to-indigo-800 cursor-pointer hover:shadow-lg transition"
        >
          <h3 className="text-lg font-semibold text-white">🏆 View Certifications</h3>
        </motion.div>
      </div>

      {/* Popup Modal */}
      <AnimatePresence>
        {openItem && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()} // Prevent accidental close
              className="relative bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl shadow-2xl w-[90%] max-w-2xl text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-white/70 hover:text-white text-2xl font-bold"
              >
                ✕
              </button>

              {openItem === "resume" ? (
                <>
                  <h3 className="text-2xl font-semibold text-white mb-4">My Resume</h3>

                  {/* ✅ Resume PDF View */}
                  <iframe
                    src="/assets/socials/resume.pdf"
                    title="Resume"
                    className="w-full h-[70vh] rounded-xl border border-white/10"
                  />

                  {/* ✅ Resume Download Button */}
                  <a
                    href="/assets/socials/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block px-4 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700"
                  >
                    Open / Download Resume
                  </a>
                </>
              ) : (
                <>
                  <h3 className="text-2xl font-semibold text-white mb-4">My Certifications</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[70vh] overflow-y-auto p-2">
                    <img
                      src="/assets/certificates/cert1.png"
                      alt="Certificate 1"
                      className="rounded-lg border border-white/10"
                    />
                    <img
                      src="/assets/certificates/cert2.png"
                      alt="Certificate 2"
                      className="rounded-lg border border-white/10"
                    />
                   
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
