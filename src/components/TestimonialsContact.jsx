import { motion } from 'framer-motion';
import { Instagram, MessageCircle, MapPin, CreditCard } from 'lucide-react';

const WHATSAPP_LINK = 'https://wa.me/62089529855060';
const IG_LINK = 'https://instagram.com/casual_cultureee';

const testi = [
  {
    img: 'https://images.unsplash.com/photo-1553532435-93d529f93d59?q=80&w=1887&auto=format&fit=crop',
    text: 'Barang mulus, packing rapi. Recommended!'
  },
  {
    img: 'https://images.unsplash.com/photo-1553531888-a69ef7a2a0f2?q=80&w=1887&auto=format&fit=crop',
    text: 'Original sesuai deskripsi, mantap bang.'
  },
  {
    img: 'https://images.unsplash.com/photo-1520975965032-5ce4f77f2c9f?q=80&w=1974&auto=format&fit=crop',
    text: 'Pengiriman cepat via J&T, aman sampai!'
  }
];

export default function TestimonialsContact() {
  return (
    <section id="contact" className="w-full bg-neutral-950 py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h3 className="text-2xl font-bold md:text-3xl">Testimonials</h3>
          <p className="text-sm text-gray-400">Sedikit bukti dari pelanggan setia kami.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testi.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="overflow-hidden rounded-2xl border border-white/10 bg-black"
            >
              <img src={t.img} alt="Testimonial" className="h-48 w-full object-cover" />
              <div className="p-4 text-sm text-gray-300">“{t.text}”</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h4 className="text-xl font-semibold">Pembayaran & Pengiriman</h4>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="flex items-center gap-2 rounded-xl border border-white/10 p-3 text-sm text-gray-300">
                <CreditCard size={16} /> SeaBank / Dana / BCA
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-white/10 p-3 text-sm text-gray-300">
                <MapPin size={16} /> Makassar (utama), kirim J&T / JNE
              </div>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-green-500 px-5 py-2 text-sm font-semibold text-black hover:bg-green-400"
              >
                <MessageCircle size={16} /> Langsung Hubungi Penjual
              </a>
              <a
                href={IG_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-sm text-white hover:border-white hover:bg-white/10"
              >
                <Instagram size={16} /> Instagram
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="overflow-hidden rounded-2xl border border-white/10"
          >
            <iframe
              title="Makassar Map"
              src="https://www.google.com/maps?q=Makassar&output=embed"
              className="h-72 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-6 text-sm text-gray-400">
          <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
            <p>© 2025 Casual_Cultureee | Powered by Flames.Blue</p>
            <div className="flex items-center gap-4">
              <a href={IG_LINK} target="_blank" rel="noreferrer" className="hover:text-white">Instagram</a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="hover:text-white">WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
