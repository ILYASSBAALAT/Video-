/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { ShoppingBag, Menu, ArrowRight, ShieldCheck, Droplets, Sparkles } from "lucide-react";
import { useRef } from "react";

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  return (
    <div ref={containerRef} className="relative min-h-[200vh] bg-[#050505] font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center mix-blend-difference">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-serif tracking-widest uppercase"
        >
          GIORGIO ARMANI
        </motion.div>
        
        <div className="hidden md:flex space-x-12 text-[10px] uppercase tracking-[0.3em] font-light">
          <a href="#" className="hover:text-white/60 transition-colors">Fragrances</a>
          <a href="#" className="hover:text-white/60 transition-colors">Collections</a>
          <a href="#" className="hover:text-white/60 transition-colors">Heritage</a>
          <a href="#" className="hover:text-white/60 transition-colors">Boutiques</a>
        </div>

        <div className="flex items-center space-x-6">
          <button className="p-2 hover:bg-white/5 rounded-full transition-colors">
            <ShoppingBag size={20} strokeWidth={1} />
          </button>
          <button className="p-2 hover:bg-white/5 rounded-full transition-colors">
            <Menu size={20} strokeWidth={1} />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Atmosphere */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.05)_0%,transparent_70%)]" />
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#050505] to-transparent" />
        </div>

        {/* Main Content */}
        <motion.div 
          style={{ opacity, scale, y }}
          className="relative z-10 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="text-[10px] uppercase tracking-[0.5em] text-white/40 mb-4 block">
              The Essence of Elegance
            </span>
            <h1 className="text-6xl md:text-8xl font-serif italic mb-8 tracking-tighter">
              Acqua di Gio
            </h1>
            <p className="text-xs uppercase tracking-[0.4em] font-light text-white/60 max-w-md mx-auto leading-relaxed">
              Extrait de Parfum
            </p>
          </motion.div>

          {/* Perfume Bottle Representation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
            className="mt-12 relative group"
          >
            {/* The "Bottle" - Using a stylized representation since we don't have the static asset URL */}
            <div className="relative w-64 h-80 mx-auto animate-float">
              {/* Reflection on Marble */}
              <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-48 h-48 bg-white/5 blur-3xl rounded-full" />
              
              {/* Bottle Body */}
              <div className="absolute inset-0 glass-morphism rounded-sm overflow-hidden flex items-center justify-center">
                {/* Liquid Effect */}
                <div className="absolute bottom-0 left-0 w-full h-3/4 bg-white/5" />
                
                {/* Label */}
                <div className="bg-[#D4C4A8] w-32 h-24 flex flex-col items-center justify-center p-4 shadow-2xl">
                  <div className="w-8 h-10 border border-black/20 flex items-center justify-center mb-2">
                    <span className="text-black text-[8px] font-serif font-bold">GA</span>
                  </div>
                  <div className="text-black text-[10px] font-serif font-bold tracking-tight text-center leading-none">
                    Acqua di gio
                  </div>
                  <div className="text-black text-[6px] uppercase tracking-widest mt-1 opacity-60">
                    Extrait de parfum
                  </div>
                </div>
              </div>

              {/* Cap */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-16 h-12 bg-gradient-to-b from-[#E5E7EB] to-[#9CA3AF] rounded-t-sm shadow-xl" />
              
              {/* Mist/Smoke Effect */}
              <div className="absolute -inset-20 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle,rgba(255,255,255,0.03)_0%,transparent_70%)] blur-2xl animate-pulse" />
              </div>
            </div>

            {/* Marble Surface */}
            <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[150%] h-32 bg-[#0a0a0a] border-t border-white/5 transform -skew-x-12 overflow-hidden">
              <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')]" />
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent" />
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
          <span className="text-[8px] uppercase tracking-[0.4em] text-white/40">Scroll</span>
        </motion.div>
      </section>

      {/* Details Section */}
      <section className="relative z-10 px-8 py-32 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
              A Symphony of <br />
              <span className="italic">Oceanic Depth</span>
            </h2>
            <p className="text-white/60 font-light leading-relaxed max-w-md">
              The new Extrait de Parfum intensity. A powerful, sophisticated fragrance that captures the raw energy of the sea meeting the volcanic rock.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <Droplets className="text-white/40" size={24} strokeWidth={1} />
              <h3 className="text-xs uppercase tracking-widest font-semibold">Top Notes</h3>
              <p className="text-[11px] text-white/40 leading-relaxed">Bergamot, Marine Accord, Spicy Ginger</p>
            </div>
            <div className="space-y-4">
              <Sparkles className="text-white/40" size={24} strokeWidth={1} />
              <h3 className="text-xs uppercase tracking-widest font-semibold">Base Notes</h3>
              <p className="text-[11px] text-white/40 leading-relaxed">Incense, Patchouli, Cedarwood</p>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-4 bg-white text-black px-8 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-bold group"
          >
            <span>Experience Now</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        <div className="relative aspect-[4/5] bg-[#0a0a0a] rounded-2xl overflow-hidden group">
          <img 
            src="https://picsum.photos/seed/perfume-luxury/800/1000" 
            alt="Luxury Fragrance" 
            className="w-full h-full object-cover opacity-60 grayscale group-hover:scale-110 transition-transform duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 p-8 glass-morphism rounded-xl">
            <ShieldCheck className="mb-4 text-white/60" size={20} strokeWidth={1} />
            <p className="text-[10px] uppercase tracking-widest leading-relaxed">
              Crafted in Italy. <br />
              Sustainable sourcing of ingredients.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-24 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start space-y-12 md:space-y-0">
          <div className="space-y-6">
            <div className="text-2xl font-serif tracking-widest uppercase">ARMANI</div>
            <p className="text-[10px] text-white/40 uppercase tracking-widest">© 2024 Giorgio Armani S.p.A.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24">
            <div className="space-y-4">
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold">Services</h4>
              <ul className="text-[10px] text-white/40 space-y-2 uppercase tracking-widest">
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shipping</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold">Legal</h4>
              <ul className="text-[10px] text-white/40 space-y-2 uppercase tracking-widest">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Use</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
