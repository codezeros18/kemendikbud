// import React from "react";
import { motion } from "framer-motion";
import { Gamepad2, Store, Users, Sparkles } from "lucide-react";

const features = [
  {
    icon: <Gamepad2 size={28} />,
    title: "Explore the World",
    description:
      "Step into the interactive universe of Jejak Sangkuriang. Discover legendary places and uncover cultural stories with every journey.",
  },
  {
    icon: <Store size={28} />,
    title: "Cultural Marketplace",
    description:
      "Buy, sell, and collect authentic digital cultural items — from traditional artifacts to modern creations from local artists.",
  },
  {
    icon: <Users size={28} />,
    title: "Community of Explorers",
    description:
      "Connect with fellow adventurers, build your network, and join exclusive cultural events and collaborations.",
  },
  {
    icon: <Sparkles size={28} />,
    title: "Interactive Quests",
    description:
      "Complete missions inspired by Indonesian legends, earn rewards, and level up your journey through time and culture.",
  },
];

const Features = () => {
  return (
    <section className="relative w-full min-h-screen bg-zinc-950 text-white py-24 px-6 overflow-hidden">
      {/* Background linear subtle */}
      <div className="absolute inset-0 bg-linear-to-br from-amber-900/10 via-purple-900/10 to-transparent pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-semibold bg-linear-to-r from-amber-400 via-pink-500 to-purple-400 bg-clip-text text-transparent">
          Our Core Features
        </h2>
        <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">
          We designed this platform to revive Indonesia’s cultural legacy
          through immersive and meaningful digital experiences that connect
          people, stories, and innovation.
        </p>
      </motion.div>

      {/* Feature Cards */}
      <div className="max-w-5xl mx-auto grid text-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="relative bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 hover:bg-zinc-900/90 hover:border-zinc-700 transition-all group shadow-lg shadow-black/20"
          >
            <div className="flex items-center justify-center mb-5 text-amber-400 group-hover:scale-110 transition-transform">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              {feature.description}
            </p>

            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 rounded-2xl bg-linear-to-br from-amber-500/10 via-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity"
              layoutId={`glow-${i}`}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
