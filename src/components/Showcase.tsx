// src/components/Showcase.tsx
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import img from "../assets/valorant.webp";

export default function Showcase() {
  return (
    <section className="relative w-full py-20 overflow-hidden bg-linear-to-b from-zinc-950 via-zinc-900 to-zinc-950">
      <div className="max-w-5xl mx-auto px-6 text-center md:text-left flex flex-col md:flex-row items-center gap-12">
        
        {/* Text Section */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
        <h2 className="text-4xl md:text-5xl font-semibold leading-tight bg-linear-to-r from-amber-400 via-pink-500 to-purple-400 bg-clip-text text-transparent">
          Game Showcase: Jejak Sangkuriang
        </h2>

          <p className="text-zinc-400 mt-4 max-w-xl">
            Experience the legendary Indonesian folklore through an interactive adventure. 
            “Jejak Sangkuriang” combines art, myth, and modern gameplay to revive the 
            timeless spirit of local stories.
          </p>

          <div className="mt-6">
            <button className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-zinc-800 hover:bg-zinc-700 text-white font-medium transition-all">
              <Play className="w-5 h-5 text-amber-400" />
              Watch Trailer
            </button>
          </div>
        </motion.div>

        {/* Media Preview */}
        <motion.div
          className="flex-1 relative rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Ganti gambar/video di bawah ini sesuai kebutuhan */}
          <img
            src= {img}
            alt="Game Preview"
            className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>
        </motion.div>

      </div>
    </section>
  );
}
