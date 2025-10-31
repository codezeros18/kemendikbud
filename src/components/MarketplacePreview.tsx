import { motion } from "framer-motion";
import { ShoppingBag, Sparkles } from "lucide-react";
import React from "react";
import img1 from "../assets/market.webp"

const products = [
  {
    id: 1,
    name: "Dayang Sumbi's Weaving Cloth",
    image: img1,
    price: "Rp 250.000",
    origin: "Bandung, West Java",
    desc: `According to the legend of Dayang Sumbi, weaving was more than just a craft—it was an act of patience, devotion, and artistry. 
    The patterns symbolize the harmony between human perseverance and nature’s rhythm. 
    Each thread of this Sundanese cloth is handwoven using traditional looms, echoing the same techniques that have been passed down since ancient Parahyangan times.`,
  },
  {
    id: 2,
    name: "Carved Wooden Boat Replica",
    image: img1,
    price: "Rp 480.000",
    origin: "Tasikmalaya, West Java",
    desc: `This carved wooden boat represents the legendary vessel of Sangkuriang, a myth deeply rooted in West Javanese folklore. 
    Craftsmen from Tasikmalaya recreate this miniature using teak and mahogany wood, known for their strength and warm texture. 
    Every curve and engraving reflects the Sundanese belief that art should always carry a moral story—of effort, destiny, and love.`,
  },
  {
    id: 3,
    name: "Traditional Bamboo Flute",
    image: img1,
    price: "Rp 150.000",
    origin: "Garut, West Java",
    desc: `The *Suling Sunda* is an instrument of soul and wind—literally. 
    Originating from Garut’s highlands, it has accompanied countless traditional performances and folk tales. 
    The flute’s mellow tones mirror the calmness of the mountains and rivers. 
    In ancient Sundanese culture, it was said that the sound of the suling could bridge emotions between humans and the natural spirits around them.`,
  },
  {
    id: 4,
    name: "Cultural Pattern Tote Bag",
    image: img1,
    price: "Rp 220.000",
    origin: "Cirebon, West Java",
    desc: `Inspired by Cirebon’s legendary *Mega Mendung* batik motif, this tote bag brings cultural heritage into daily life. 
    The pattern symbolizes patience and serenity—values embodied in the slow, meditative process of batik-making. 
    Each design is manually printed and stitched by local artisans, combining fashion with deep-rooted tradition.`,
  },
];


export default function EncyclopediaMarketplace() {
  const [selected, setSelected] = React.useState(products[0]);

  return (
    <section className="relative py-20 bg-linear-to-b from-zinc-950 to-zinc-900 text-white">
      {/* Title */}
      <div className="text-center mb-14 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-semibold bg-linear-to-r from-amber-400 via-pink-500 to-purple-400 bg-clip-text text-transparent"
        >
          Encyclopedia × Marketplace
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-zinc-400 mt-3 text-lg max-w-2xl mx-auto"
        >
          Explore the stories behind each craft — then support the artisans who keep tradition alive.
        </motion.p>
      </div>

      {/* Content Grid (flipped layout) */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-[4fr_3fr] gap-8 px-6">
        {/* Left - Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-5 md:gap-7">
          {products.map((item, index) => (
            <motion.div
              key={index}
              onClick={() => setSelected(item)}
              whileHover={{ scale: 1.05, y: -4 }}
              transition={{ duration: 0.3 }}
              className={`group cursor-pointer bg-zinc-900/50 backdrop-blur-md border rounded-xl overflow-hidden transition-all duration-500 shadow-md ${
                selected.id === item.id
                  ? "border-amber-500/50"
                  : "border-zinc-800 hover:border-amber-400/30"
              }`}
            >
              {/* Image */}
              <div className="relative w-full aspect-square overflow-hidden md:h-40">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-zinc-950/70 group-hover:bg-transparent transition-all duration-500" />
              </div>

              {/* Info */}
              <div className="p-4 flex flex-col gap-1">
                <div className="flex items-center gap-2 text-amber-400 text-xs">
                  <Sparkles size={14} />
                  <span>{item.origin}</span>
                </div>
                <h3 className="text-sm font-medium text-white line-clamp-1">
                  {item.name}
                </h3>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-amber-400 font-semibold text-sm">
                    {item.price}
                  </span>
                  <ShoppingBag
                    size={16}
                    className="text-zinc-400 group-hover:text-amber-400 transition"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right - Article / Prompt Style */}
        <motion.div
          key={selected.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-8 shadow-xl backdrop-blur-md"
        >
          <h2 className="text-2xl font-semibold text-amber-400 mb-4">
            {selected.name}
          </h2>
          <p className="text-zinc-300 leading-relaxed">{selected.desc}</p>
        </motion.div>
      </div>
    </section>
  );
}
