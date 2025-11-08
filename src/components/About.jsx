import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative w-full bg-black py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="mb-4 text-2xl font-bold md:text-3xl">About Casual_Cultureee</h3>
            <p className="text-gray-300">
              Casual_Cultureee berdiri di Makassar dengan semangat berbagi barang branded second original yang masih
              berkualitas tinggi. Semua produk 100% original dan dicek detail sebelum dikirim.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-gray-300">
              <div className="rounded-xl border border-white/10 p-4">
                Lokasi: TNF Hitam Makassar 354
              </div>
              <div className="rounded-xl border border-white/10 p-4">
                Motto: “‼️ TELITI SEBELUM MEMBELI ‼️”
              </div>
              <div className="rounded-xl border border-white/10 p-4">Owner: @rifqisulthonx_</div>
              <div className="rounded-xl border border-white/10 p-4">Kirim: J&T / JNE</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl ring-1 ring-white/10">
              <img
                src="https://images.unsplash.com/photo-1548883354-1a3429df472f?q=80&w=2069&auto=format&fit=crop"
                alt="Behind the scenes sorting clothes"
                className="h-full w-full object-cover"
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="pointer-events-none absolute -bottom-6 -left-6 h-32 w-32 rounded-xl bg-red-600/20 blur-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
