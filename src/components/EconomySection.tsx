import React from "react";
import { motion } from "framer-motion";
import { Coins, Gem, Shield } from "lucide-react";

const EconomySection = () => {
  return (
    <section className="relative w-full bg-linear-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-white py-28 px-6 overflow-hidden">
      {/* Soft glowing backdrop */}
      <div className="absolute inset-0 bg-linear-to-tr from-amber-900/10 via-fuchsia-900/10 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-semibold bg-linear-to-r leading-tight from-amber-400 via-pink-500 to-purple-400 bg-clip-text text-transparent">
            Dual-Currency & Digital Economy
          </h2>
          <p className="text-zinc-400 mt-6 leading-relaxed text-lg">
            The Jejak Sangkuriang world introduces a sustainable economic
            ecosystem powered by a <span className="text-white">dual-currency model</span> 
            and <span className="text-white">NFT-based artifacts</span>.
            Players can earn, trade, and collect cultural items that carry both
            digital and storytelling value.
          </p>

          {/* Currency Description */}
          <div className="mt-10 space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-amber-500/10 p-3 rounded-xl border border-amber-500/20">
                <Coins size={28} className="text-amber-400" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">SundaCoin</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  The main in-game currency used for trading resources, crafting
                  artifacts, and upgrading tools across the Sangkuriang universe.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-purple-500/10 p-3 rounded-xl border border-purple-500/20">
                <Gem size={28} className="text-purple-400" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">Mythic Shard</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  A premium crystal used for acquiring limited edition NFTs, 
                  unlocking hidden storylines, and supporting cultural creators.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Illustration / Accent */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="relative flex justify-center md:justify-end"
        >
          <div className="relative bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/60 rounded-3xl p-10 w-[90%] md:w-[85%] shadow-xl hover:border-amber-400/20 transition-all duration-700">
            <div className="absolute inset-0 bg-linear-to-br from-amber-500/10 via-pink-500/10 to-purple-500/10 rounded-3xl blur-3xl opacity-40" />
            <div className="relative z-10 text-center md:text-left">
              <Shield className="w-16 h-16 mx-auto md:mx-0 text-amber-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-2">
                Secure & Transparent Economy
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Built with blockchain-backed transparency, ensuring every trade,
                craft, and collectible remains authentic and verifiable — 
                preserving the cultural integrity of each item.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EconomySection;
