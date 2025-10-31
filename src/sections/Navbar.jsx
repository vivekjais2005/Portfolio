import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

function Navigation() {
  return (
    <ul className="nav-ul flex gap-8">
      <li><a className="nav-link hover:text-white text-neutral-400" href="#home">Home</a></li>
      <li><a className="nav-link hover:text-white text-neutral-400" href="#about">About</a></li>
      <li><a className="nav-link hover:text-white text-neutral-400" href="#work">Work</a></li>
      <li><a className="nav-link hover:text-white text-neutral-400" href="#contact">Contact</a></li>
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showImage, setShowImage] = useState(false);

  // Reference to detect outside click
  const cardRef = useRef(null);

  // Close popup if clicked outside postcard
  const handleOutsideClick = (e) => {
    if (cardRef.current && !cardRef.current.contains(e.target)) {
      setShowImage(false);
    }
  };

  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40 shadow-md">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-5 sm:py-6">
          {/* Left Side: Profile + Name */}
          <div className="flex items-center gap-4">
            <motion.img
              src="/assets/socials/vivek.jpg"
              alt="Profile"
              className="w-14 h-14 rounded-full object-cover cursor-pointer border-2 border-white shadow-md"
              whileHover={{ scale: 1.05 }}
              onClick={() => setShowImage(true)}
            />

            <a
              href="/"
              className="text-2xl font-semibold transition-colors text-neutral-300 hover:text-white"
            >
              Vivek Jaiswal
            </a>
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-7 h-7"
              alt="toggle"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <nav className="pb-5">
            <Navigation />
          </nav>
        </motion.div>
      )}

      {/* 🪪 Postcard Modal */}
      <AnimatePresence>
        {showImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleOutsideClick} // only close if outside
          >
            <motion.div
              ref={cardRef}
              className="relative bg-white/10 p-3 rounded-2xl shadow-2xl backdrop-blur-md"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src="/assets/socials/vivek.jpg"
                alt="Profile Postcard"
                className="rounded-xl object-cover w-[300px] h-[400px] border border-white/30"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
