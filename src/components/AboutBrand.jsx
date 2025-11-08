import React from 'react';

const AboutBrand = () => {
  return (
    <section className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div data-aos="fade-right">
            <h3 className="text-3xl font-bold sm:text-4xl">Tentang Casual_Cultureee</h3>
            <p className="mt-4 text-white/80">
              Kami mengkurasi barang second original 100% dengan standar tinggi. Setiap item melewati
              proses pengecekan detail. Motto kami: ‼️ TELITI SEBELUM MEMBELI ‼️
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4">
              {[{
                k: 'Lokasi', v: 'TNF Hitam Makassar 354'
              },{ k:'Owner', v: '@rifqisulthonx_' },{ k: 'Shipping', v: 'J&T / JNE' },{ k: 'Payment', v: 'SeaBank / Dana / BCA' }].map((it) => (
                <div key={it.k} className="rounded-xl border border-white/10 bg-white/5 p-4" data-aos="zoom-in">
                  <div className="text-xs uppercase tracking-wider text-white/60">{it.k}</div>
                  <div className="mt-1 text-sm font-medium">{it.v}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-72 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-tr from-purple-600/40 via-blue-500/30 to-orange-400/30 p-1 sm:h-96" data-aos="fade-left">
            <div className="h-full w-full rounded-xl bg-[radial-gradient(circle_at_30%_30%,rgba(168,85,247,0.35),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(59,130,246,0.25),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(251,146,60,0.25),transparent_40%)]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBrand;
