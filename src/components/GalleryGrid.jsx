import React from 'react';
import { MessageCircle } from 'lucide-react';

const images = [
  'https://images.unsplash.com/photo-1540331547168-8b63109225b7?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1560243563-062bfc001d68?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1592878904946-b3cd5b69f283?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1475180098004-ca77a66827be?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1200&auto=format&fit=crop',
];

const GalleryGrid = () => {
  return (
    <section id="gallery" className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10" data-aos="fade-up">
          <h2 className="text-3xl font-bold sm:text-4xl">Koleksi Pilihan</h2>
          <p className="mt-2 text-white/70">Drop curated dengan kondisi mulus — siap jadi outfit harianmu.</p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5">
          {images.map((src, i) => (
            <div
              key={i}
              className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-white/10 bg-white/5"
              data-aos="zoom-in-up"
              data-aos-delay={(i % 3) * 100}
            >
              <img
                src={src}
                alt={`item-${i}`}
                className="h-full w-full scale-105 object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center" data-aos="fade-up" data-aos-delay="150">
          <a
            href="https://wa.me/62089529855060"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold transition-all hover:bg-white/10"
          >
            <MessageCircle className="h-4 w-4" /> Chat untuk cek stok & harga
          </a>
        </div>
      </div>
    </section>
  );
};

export default GalleryGrid;
