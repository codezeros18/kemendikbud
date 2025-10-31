import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center bg-zinc-950 text-zinc-100 px-8 py-24">
      {/* === BACKGROUND GRADIENT === */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 bg-linear-to-br from-orange-700/40 via-purple-800/40 to-indigo-950/60"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 65%, 0 85%)",
            filter: "blur(50px)",
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 0.7, y: 0 }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.2 }}
          className="absolute inset-0 bg-linear-to-tr from-red-900/50 via-indigo-900/40 to-purple-800/30"
          style={{
            clipPath: "polygon(0 45%, 100% 70%, 100% 100%, 0 100%)",
            filter: "blur(60px)",
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-16 -right-16 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl"
        />
      </div>

      {/* === CONTENT === */}
      <div className="relative z-10 max-w-5xl mx-auto px-1 sm:px-2 md:px-4 grid md:grid-cols-2 gap-0 md:gap-16">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex flex-col justify-center space-y-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-300 via-red-400 to-purple-400">
              Jejak Sangkuriang
            </span>
            <br />
            Reviving Culture Through Tech
          </h1>

          <p className="text-zinc-400 max-w-lg text-lg leading-relaxed">
            Explore Indonesia’s legends reimagined through interactive digital
            experiences.
          </p>

          <div className="flex space-x-2 md:space-x-4 pt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-linear-to-r from-orange-400 to-red-500 text-zinc-900 font-semibold px-7 py-3 rounded-md shadow-md hover:from-orange-300 hover:to-red-400 transition"
            >
              Start Exploring
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="border border-zinc-700 px-7 py-3 rounded-md hover:bg-zinc-800 transition text-zinc-300"
            >
              View Creations
            </motion.button>
          </div>
        </motion.div>

        {/* Right Section — Mobile + Desktop Preview */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="relative hidden md:flex justify-center items-center space-x-6"
        >
          {/* Mobile Preview */}
          <div className="bg-zinc-900/60 border border-zinc-800 backdrop-blur-md rounded-3xl shadow-2xl p-5 w-[280px] md:w-[320px] h-[560px] flex flex-col justify-between">
            <div className="space-y-3">
              <div className="h-3 w-2/3 bg-zinc-700 rounded" />
              <div className="h-3 w-3/4 bg-zinc-800 rounded" />
              <div className="h-80 bg-linear-to-tr from-orange-500/30 to-purple-500/30 rounded-xl" />
            </div>
            <div className="h-3 w-1/2 bg-zinc-700 rounded" />
          </div>

          {/* Desktop Preview (slightly behind) */}
          <div className="hidden md:block absolute -right-20 top-12 scale-90 opacity-70">
            <div className="bg-zinc-900/50 border border-zinc-800 backdrop-blur-md rounded-3xl shadow-2xl p-6 w-[520px] h-[340px]">
              <div className="space-y-3">
                <div className="h-3 w-1/2 bg-zinc-700 rounded" />
                <div className="h-3 w-3/4 bg-zinc-800 rounded" />
                <div className="h-96 bg-linear-to-tr from-purple-500/30 to-orange-500/30 rounded-xl" />
                <div className="h-3 w-2/3 bg-zinc-700 rounded" />
              </div>
            </div>
          </div>

          {/* Floating Glow */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-12 -right-12 w-72 h-72 bg-purple-700/30 rounded-full blur-3xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
