// import React from "react";
import { motion } from "framer-motion";
import { Instagram, Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative w-full bg-zinc-950 border-t border-zinc-800 text-zinc-400 py-12 px-6">
      {/* Background glow */}
      <div className="absolute inset-0 bg-linear-to-t from-purple-900/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
        {/* Logo + Tagline */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center space-x-2 mb-2">
            <div className="bg-white rounded-full w-5 h-5 flex items-center justify-center">
              <div className="w-3 h-3 border-2 border-zinc-900 rotate-45" />
            </div>
            <span className="text-white font-medium text-lg">
              Jejak Sangkuriang
            </span>
          </div>
          <p className="text-sm text-zinc-500">
            Reviving Indonesian culture through immersive digital experience.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex gap-6 text-sm">
          {["Home", "Game", "Catalog","About"].map((item, i) => (
            <motion.a
              key={i}
              href="#"
              whileHover={{ y: -2, color: "#fff" }}
              transition={{ duration: 0.2 }}
              className="transition-colors"
            >
              {item}
            </motion.a>
          ))}
        </div>

        {/* Socials */}
        <div className="flex gap-5">
          <motion.a
            href="https://instagram.com/"
            target="_blank"
            whileHover={{ scale: 1.1, color: "#fff" }}
            className="hover:text-white"
          >
            <Instagram size={18} />
          </motion.a>
          <motion.a
            href="https://github.com/"
            target="_blank"
            whileHover={{ scale: 1.1, color: "#fff" }}
            className="hover:text-white"
          >
            <Github size={18} />
          </motion.a>
          <motion.a
            href="mailto:team@jejak-sangkuriang.id"
            whileHover={{ scale: 1.1, color: "#fff" }}
            className="hover:text-white"
          >
            <Mail size={18} />
          </motion.a>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-zinc-800 mt-10 pt-6 text-center text-sm text-zinc-600 relative z-10">
        © {new Date().getFullYear()} Jejak Sangkuriang — Crafted with passion for Indonesia’s cultural future.
      </div>
    </footer>
  );
};

export default Footer;
