import { motion } from "framer-motion";
import img1 from "../assets/frame1.webp";
import img2 from "../assets/frame2.webp";

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
          {/* Right Section — Dual Image (Desktop + Mobile) */}
<motion.div
  initial={{ opacity: 0, x: 60 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1, ease: "easeInOut" }}
  className="relative hidden md:flex justify-center items-center mt-8 md:mt-0"
>
  {/* Background Glow (optional) */}
  <motion.div
    animate={{
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.45, 0.3],
      rotate: [0, 10, 0],
    }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    className="absolute -bottom-20 -right-24 w-[500px] h-[500px] bg-gradient-to-tr from-orange-500/20 via-purple-600/20 to-pink-500/10 rounded-full blur-3xl"
  />

  {/* 💻 Desktop Image — behind (for larger screens) */}
  <motion.img
    src={img1}
    alt="Desktop view"
    initial={{ opacity: 0, x: 80, rotate: 3, scale: 0.95 }}
    animate={{ opacity: 0.65, x: 0, rotate: 0, scale: 1 }}
    transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
    className="hidden md:block absolute -right-72 top-0 w-full h-full object-cover rounded-2xl "
  />

  {/* 📱 Mobile Image — front layer */}
  <motion.img
    src={img2}
    alt="Mobile view"
    initial={{ opacity: 0, y: 30, scale: 0.9 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 1.1, delay: 0.35 }}
    whileHover={{ scale: 1.03 }}
    className="relative z-10 w-full h-full object-cover rounded-3xl"
  />

  {/* Accent light (optional aesthetic) */}
  <motion.div
    animate={{
      opacity: [0.25, 0.4, 0.25],
      scale: [1, 1.15, 1],
    }}
    transition={{ duration: 4.5, repeat: Infinity }}
    className="absolute -top-16 -left-16 w-64 h-64 bg-gradient-to-br from-purple-500/30 to-orange-400/30 rounded-full blur-3xl"
  />
</motion.div>


      </div>
    </section>
  );
};

export default Hero;
