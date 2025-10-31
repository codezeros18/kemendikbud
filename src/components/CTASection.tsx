// import React from "react";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="relative w-full bg-linear-to-b from-zinc-950 via-zinc-900 to-black text-white py-32 px-6 overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-linear-to-tr from-amber-900/10 via-purple-900/10 to-transparent opacity-60 pointer-events-none" />

      {/* Floating linear orb accent */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-linear-to-br from-amber-500/20 via-pink-500/10 to-purple-500/20 rounded-full blur-3xl"
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 text-center max-w-3xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-semibold bg-linear-to-r from-amber-400 via-pink-500 to-purple-400 bg-clip-text text-transparent">
          Join the Journey of Cultural Revival
        </h2>
        <p className="text-zinc-400 mt-5 text-lg leading-relaxed">
          Be part of the <span className="text-white">Jejak Sangkuriang</span> movement — 
          where technology, art, and culture unite to tell Indonesia’s timeless stories.  
          Play, collect, and support our local creators.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-linear-to-r from-amber-500 via-pink-500 to-purple-500 text-white font-medium rounded-lg px-8 py-3 text-sm md:text-base shadow-lg hover:shadow-amber-500/20 transition-all duration-300"
          >
            Play Now
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 rounded-lg px-8 py-3 text-sm md:text-base transition-all duration-300"
          >
            Support Culture
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default CTASection;
