import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "Home", href: "#" },
  { label: "Catalog", href: "#" },
  { label: "Games", href: "#" },
  { label: "About", href: "#" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full bg-transparent border-b border-zinc-800 z-50 backdrop-blur-sm"
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between px-8 md:px-4 py-6 md:py-3">
        {/* === Logo === */}
        <div className="flex items-center space-x-2">
          <motion.div
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="bg-white rounded-full w-5 h-5 flex items-center justify-center cursor-pointer"
          >
            <div className="w-3 h-3 border-2 border-zinc-900 rotate-45" />
          </motion.div>
          <span className="text-white font-medium text-lg">
            Jejak Sangkuriang
          </span>
        </div>

        {/* === Desktop Nav === */}
        <div className="hidden md:flex items-center space-x-8 text-sm">
          {navItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              className="relative text-zinc-300 hover:text-white transition"
              whileHover="hover"
              variants={{
                hover: { scale: 1.05 },
              }}
            >
              {item.label}
              <motion.span
                className="absolute left-0 -bottom-1 h-[1.5px] w-0 bg-white"
                variants={{
                  hover: { width: "100%" },
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </motion.a>
          ))}
        </div>

        {/* === Auth + Animated Hamburger === */}
        <div className="flex items-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="hidden md:block text-zinc-300 hover:text-white text-sm"
          >
            Log in
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className="hidden md:block bg-white text-zinc-900 text-sm font-medium rounded-md px-4 py-1.5 hover:bg-zinc-200 transition"
          >
            Sign up
          </motion.button>

          {/* === Animated Hamburger (Mobile Only) === */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center space-y-1 focus:outline-none"
          >
            {/* Top bar */}
            <motion.span
              animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="block w-6 h-0.5 bg-white"
            />
            {/* Middle bar */}
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="block w-6 h-0.5 bg-white"
            />
            {/* Bottom bar */}
            <motion.span
              animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="block w-6 h-0.5 bg-white"
            />
          </button>
        </div>
      </div>

      {/* === Mobile Menu (below navbar) === */}
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="mobileMenu"
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "100%", opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          className="fixed top-[68px] right-0 w-full h-[calc(100vh-68px)] 
                    bg-linear-to-b from-[#1b1324]/95 via-[#24182f]/95 to-[#0f0a14]/95 
                    backdrop-blur-2xl border-l border-[#3a2750]/50 
                    z-40 p-8 flex flex-col justify-between"
        >
          {/* Menu Items */}
          <div className="space-y-5 pt-2">
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className="block text-lg font-semibold bg-clip-text text-transparent 
                          bg-linear-to-r from-[#ffb84c] via-[#ff6ec7] to-[#ffb84c] 
                          hover:opacity-90 transition-all"
                whileHover={{ x: 8 }}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="space-y-3 pb-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="w-full text-[#ffb84c] border border-[#ffb84c]/60 rounded-lg py-2 
                        hover:bg-[#ffb84c]/10 transition-all duration-200"
            >
              Log in
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="w-full bg-linear-to-r from-[#ffb84c] to-[#ff6ec7] 
                        text-white font-medium rounded-lg py-2 shadow-lg shadow-[#ff6ec7]/30 
                        hover:shadow-[#ffb84c]/40 transition-all duration-300"
            >
              Sign up
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>


    </motion.nav>
  );
};

export default Navbar;
