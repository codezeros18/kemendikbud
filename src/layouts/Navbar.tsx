import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

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
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
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

        {/* Desktop Nav */}
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

        {/* Auth + Hamburger */}
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

          {/* Hamburger (Mobile only) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobileMenu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 right-0 w-3/4 h-full bg-zinc-950/95 backdrop-blur-xl border-l border-zinc-800 z-40 p-6 flex flex-col space-y-6"
          >
            <div className="flex justify-between items-center mb-8">
              <span className="text-lg font-medium text-white">Menu</span>
              <button onClick={() => setIsOpen(false)}>
                <X className="text-white" size={24} />
              </button>
            </div>

            <div className="space-y-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className="block text-lg text-zinc-300 hover:text-white"
                  whileHover={{ x: 6 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>

            <div className="mt-auto space-y-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="w-full text-zinc-300 border border-zinc-700 rounded-md py-2 hover:bg-zinc-800 transition"
              >
                Log in
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="w-full bg-white text-zinc-900 font-medium rounded-md py-2 hover:bg-zinc-200 transition"
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
