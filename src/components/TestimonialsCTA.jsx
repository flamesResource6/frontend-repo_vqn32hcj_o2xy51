import React from 'react';
import { Star, Instagram, MapPin } from 'lucide-react';

const testimonials = [
  {
    name: 'Raka',
    text: 'Barang original, kondisi mulus. Pengiriman cepat!'
  },
  {
    name: 'Sinta',
    text: 'Harga ramah di kantong, pilihan variatif. Recommended!'
  },
  {
    name: 'Dimas',
    text: 'Admin responsif, proses transaksi aman dan nyaman.'
  },
];

const TestimonialsCTA = () => {
  return (
    <section className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10" data-aos="fade-up">
          <h3 className="text-3xl font-bold sm:text-4xl">Apa kata mereka?</h3>
          <p className="mt-2 text-white/70">Kepercayaan adalah prioritas kami.</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-3">
          {testimonials.map((t, i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-5" data-aos="zoom-in" data-aos-delay={i * 100}>
              <div className="flex items-center gap-2 text-yellow-300">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-3 text-white/80">“{t.text}”</p>
              <div className="mt-3 text-sm font-semibold">— {t.name}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid items-center gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 sm:grid-cols-2" data-aos="fade-up">
          <div>
            <h4 className="text-xl font-semibold">Ikuti update drop di Instagram</h4>
            <p className="mt-1 text-white/70">Drop terbaru, preview stok, dan info promo setiap minggu.</p>
            <a
              href="https://instagram.com/casual_cultureee"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-black"
            >
              <Instagram className="h-4 w-4" /> Follow Instagram
            </a>
          </div>
          <div className="flex items-center gap-3 text-white/80">
            <MapPin className="h-5 w-5" /> TNF Hitam Makassar 354
          </div>
        </div>

        <footer className="mt-16 border-t border-white/10 pt-6 text-center text-sm text-white/60">
          © {new Date().getFullYear()} Casual_Cultureee — All rights reserved.
        </footer>
      </div>
    </section>
  );
};

export default TestimonialsCTA;
