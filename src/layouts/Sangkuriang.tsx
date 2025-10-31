import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Send, X } from "lucide-react";

const Sangkuriang = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { from: "bot", text: "Halo! 👋 Aku Sangkuriang, penjelajah budaya digital. Ada yang bisa kubantu?" },
  ]);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { from: "user", text: input }]);
    setInput("");
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "Menarik! Akan ku bantu sebisaku 🌄" },
      ]);
    }, 700);
  };

  return (
    <>
      {/* Tombol Sangkuriang (kanan bawah) */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 bg-linear-to-r from-[#ffb84c] to-[#ff6ec7] p-4 rounded-full shadow-lg z-50"
      >
        <MessageCircle className="text-white" size={26} />
      </motion.button>

      {/* Kotak Chatbot */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed bottom-24 right-6 w-80 bg-linear-to-b from-[#1b1426] to-[#24182f] border border-[#3a2750] rounded-2xl shadow-2xl overflow-hidden z-50"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-linear-to-r from-[#291c3c] to-[#20142b] border-b border-[#3a2750]">
              <h3 className="font-semibold text-[#ff6ec7] text-sm tracking-wide">
                Sangkuriang AI
              </h3>
              <button onClick={() => setIsOpen(false)}>
                <X className="text-zinc-400 hover:text-white" size={18} />
              </button>
            </div>

            {/* Body Chat */}
            <div className="p-4 h-60 overflow-y-auto space-y-3 text-sm scrollbar-thin scrollbar-thumb-[#3a2750] scrollbar-track-transparent">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${
                    msg.from === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`px-3 py-2 rounded-lg max-w-[80%] ${
                      msg.from === "user"
                        ? "bg-linear-to-r from-[#ff6ec7]/80 to-[#ffb84c]/80 text-white"
                        : "bg-[#2d1f3d]/70 text-zinc-300"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-3 border-t border-[#3a2750] bg-[#1a1325] flex items-center space-x-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                className="flex-1 bg-[#2d1f3d]/70 text-sm text-zinc-100 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#ff6ec7] placeholder:text-zinc-500"
                placeholder="Tulis sesuatu..."
              />
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={handleSend}
                className="p-2 rounded-md bg-linear-to-r from-[#ffb84c] to-[#ff6ec7] text-white shadow-md"
              >
                <Send size={16} />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sangkuriang;
