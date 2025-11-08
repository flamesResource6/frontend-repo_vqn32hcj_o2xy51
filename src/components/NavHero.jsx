import { motion } from 'framer-motion';
import { ShoppingBag, MessageCircle } from 'lucide-react';

const WHATSAPP_LINK = 'https://wa.me/62089529855060';

export default function NavHero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1537832816519-689ad163238b?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center opacity-40"
        aria-hidden
      />
      {/* Dark gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/70 to-black/90" aria-hidden />

      {/* Navbar */}
      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#home" className="font-extrabold tracking-wide text-white">
          <span className="text-xl md:text-2xl">Casual_</span>
          <span className="text-red-500 text-xl md:text-2xl">Cultureee</span>
        </a>
        <div className="hidden gap-8 md:flex">
          <a href="#home" className="text-sm text-gray-300 hover:text-white">Home</a>
          <a href="#gallery" className="text-sm text-gray-300 hover:text-white">Gallery</a>
          <a href="#about" className="text-sm text-gray-300 hover:text-white">About</a>
          <a href="#contact" className="text-sm text-gray-300 hover:text-white">Contact</a>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-green-500 px-4 py-2 text-sm font-semibold text-black transition hover:bg-green-400"
          >
            <MessageCircle size={16} /> Chat via WhatsApp
          </a>
        </div>
      </nav>

      {/* Hero */}
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-10 md:grid-cols-2 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h1 className="text-3xl font-bold leading-tight md:text-5xl">
            Second Original 100% —
            <span className="block text-gray-200">Thrift Smart, Dress Sharp.</span>
          </h1>
          <p className="max-w-prose text-gray-300">
            Brand pakaian second original 100%. Lokasi: TNF Hitam Makassar 354.
            Motto: “‼️ TELITI SEBELUM MEMBELI ‼️”. Owner: @rifqisulthonx_
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#gallery"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-gray-200"
            >
              <ShoppingBag size={16} /> Shop Now
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              <MessageCircle size={16} /> Chat via WhatsApp
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl ring-1 ring-white/10">
            <img
              src="https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?q=80&w=1987&auto=format&fit=crop"
              alt="Streetwear model in dark urban scene"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-red-600/20 blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
}
