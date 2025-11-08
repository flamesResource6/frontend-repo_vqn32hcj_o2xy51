import React from 'react';
import Spline from '@splinetool/react-spline';
import { ShoppingBag, MessageCircle, Instagram } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      {/* Navbar */}
      <div className="relative z-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-purple-500 via-blue-400 to-orange-300" />
            <span className="font-semibold tracking-wide">Casual_Cultureee</span>
          </div>
          <div className="hidden items-center gap-3 sm:flex">
            <a
              href="https://wa.me/62089529855060"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm transition-all hover:bg-white/10 hover:shadow-[0_0_20px_rgba(168,85,247,0.35)]"
            >
              <MessageCircle className="h-4 w-4" /> Chat to Buy
            </a>
            <a
              href="https://instagram.com/casual_cultureee"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm transition-all hover:bg-white/10"
            >
              <Instagram className="h-4 w-4" /> Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Spline Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlays (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/90" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black" />

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-20 text-center sm:pt-28">
        <h1
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-6xl"
        >
          Second Original 100% — Thrift Smart, Dress Sharp
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="mt-4 max-w-2xl text-balance text-base text-white/80 sm:text-lg"
        >
          Koleksi streetwear curated dengan harga ramah. ‼️ TELITI SEBELUM MEMBELI ‼️
        </p>
        <div
          data-aos="zoom-in"
          data-aos-delay="300"
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#gallery"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition-all hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(255,255,255,0.25)]"
          >
            <ShoppingBag className="h-4 w-4" /> Lihat Koleksi
          </a>
          <a
            href="https://wa.me/62089529855060"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10"
          >
            <MessageCircle className="h-4 w-4" /> Chat WhatsApp
          </a>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="mt-10 grid w-full max-w-3xl grid-cols-2 gap-4 text-left sm:grid-cols-4"
        >
          {[
            { k: 'Lokasi', v: 'TNF Hitam Makassar 354' },
            { k: 'Owner', v: '@rifqisulthonx_' },
            { k: 'Shipping', v: 'J&T / JNE' },
            { k: 'Payment', v: 'SeaBank / Dana / BCA' },
          ].map((item) => (
            <div key={item.k} className="rounded-xl border border-white/10 bg-white/5 p-3">
              <div className="text-xs uppercase tracking-wider text-white/60">{item.k}</div>
              <div className="mt-1 text-sm font-medium">{item.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
