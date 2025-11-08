import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

const WHATSAPP_LINK = 'https://wa.me/62089529855060';

const images = [
  'https://images.unsplash.com/photo-1516116216624-53e697fedbe9?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1548883354-1a3429df472f?q=80&w=2069&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1520975965032-5ce4f77f2c9f?q=80&w=1974&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2080&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1503342452485-86ff0a8bccc8?q=80&w=2069&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1520975693412-35a7dc5522fd?q=80&w=1976&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1508780709619-79562169bc64?q=80&w=2069&auto=format&fit=crop',
];

export default function Gallery() {
  const [active, setActive] = useState(null);

  return (
    <section id="gallery" className="relative w-full bg-neutral-950 py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Latest Drops</h2>
            <p className="text-sm text-gray-400">Jakets, tees, hoodies — curated thrifts ready to wear.</p>
          </div>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full border border-white/20 px-4 py-2 text-sm text-white hover:border-white hover:bg-white/10 md:inline-block"
          >
            Chat to Buy
          </a>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {images.map((src, idx) => (
            <motion.button
              key={idx}
              onClick={() => setActive(src)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group relative aspect-square overflow-hidden rounded-xl ring-1 ring-white/10"
            >
              <img src={src} alt={`Gallery ${idx + 1}`} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 transition group-hover:opacity-100" />
              <span className="pointer-events-none absolute bottom-2 left-2 inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-1 text-[10px] backdrop-blur">
                Tap to preview
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          >
            <motion.div
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              className="relative w-full max-w-3xl"
            >
              <button
                onClick={() => setActive(null)}
                className="absolute right-3 top-3 rounded-full bg-white/10 p-2 text-white backdrop-blur hover:bg-white/20"
                aria-label="Close"
              >
                <X size={18} />
              </button>
              <img src={active} alt="Preview" className="h-auto w-full rounded-2xl object-cover" />
              <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                <p className="text-sm text-gray-300">Suka item ini? Tanyakan ketersediaan langsung.</p>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-green-500 px-4 py-2 text-sm font-semibold text-black hover:bg-green-400"
                >
                  <MessageCircle size={16} /> Chat to Buy
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
