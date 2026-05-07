"use client";

import React, { useState, useEffect } from 'react';
import { ShoppingCart, ChevronLeft, ChevronRight, Zap, Star } from 'lucide-react';

export default function App() {
  // আপনার বাকি সব কোড ঠিক আগের মতোই হুবহু থাকবে...
  const heroSlides = [
    {
      id: 1,
      title: "প্রিমিয়াম ওভারসাইজড শার্ট",
      category: "ফ্যাশন",
      image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800&q=80",
    },
    {
      id: 2,
      title: "স্মার্ট ওয়াচ আল্ট্রা",
      category: "টেকনোলজি",
      image: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?w=800&q=80",
    },
    {
      id: 3,
      title: "ক্লাসিক ডেনিম জ্যাকেট",
      category: "ফ্যাশন",
      image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&q=80",
    },
    {
      id: 4,
      title: "নয়েজ ক্যানসেলিং হেডফোন",
      category: "টেকনোলজি",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
    },
    {
      id: 5,
      title: "আরবান স্ট্রিটওয়্যার হুডি",
      category: "ফ্যাশন",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80",
    }
  ];

  const hotDrops = [
    { id: 1, title: "স্নিকার্স ভি১", price: "$120", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80" },
    { id: 2, title: "মেকানিক্যাল কীবোর্ড", price: "$85", image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=500&q=80" },
    { id: 3, title: "ভিন্টেজ সানগ্লাস", price: "$45", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&q=80" },
    { id: 4, title: "ওয়্যারলেস ইয়ারবাড", price: "$99", image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80" },
    { id: 5, title: "লেদার বুট", price: "$150", image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=500&q=80" },
  ];

  const gridItems = Array.from({ length: 20 }).map((_, i) => ({
    id: i + 1,
    title: i % 2 === 0 ? `ডিজাইনার শার্ট ভলিউম ${i + 1}` : `স্মার্ট গ্যাজেট প্রো ${i + 1}`,
    price: i % 2 === 0 ? `$${Math.floor(Math.random() * 50 + 20)}.00` : `$${Math.floor(Math.random() * 200 + 50)}.00`,
    category: i % 2 === 0 ? "ফ্যাশন" : "টেক",
    image: i % 2 === 0 
      ? `https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80&sig=${i}` 
      : `https://images.unsplash.com/photo-1498049794561-7780e7231661?w=500&q=80&sig=${i}`
  }));

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000); 
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const handleNext = () => setActiveSlide((prev) => (prev + 1) % heroSlides.length);
  const handlePrev = () => setActiveSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  const getSlideClasses = (index) => {
    if (index === activeSlide) return "translate-x-0 scale-100 z-30 opacity-100 shadow-[0_20px_50px_rgba(0,0,0,0.8)]";
    if (index === (activeSlide + 1) % heroSlides.length) return "translate-x-[45%] md:translate-x-[65%] scale-90 z-20 opacity-60 blur-[1px]";
    if (index === (activeSlide - 1 + heroSlides.length) % heroSlides.length) return "-translate-x-[45%] md:-translate-x-[65%] scale-90 z-20 opacity-60 blur-[1px]";
    return "opacity-0 scale-75 z-0 hidden";
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans overflow-x-hidden selection:bg-[#ff6b6b] selection:text-white">
      
      {/* Cloud Animation Keyframes (Tailwind Arbitrary Variants don't support full keyframes easily, so adding simple style tag) */}
      <style>{`
        @keyframes drift {
          0% { transform: translateX(0%); }
          50% { transform: translateX(-5%); }
          100% { transform: translateX(0%); }
        }
        .animate-drift {
          animation: drift 20s ease-in-out infinite;
        }
        @keyframes drift-slow {
          0% { transform: translateX(-5%); }
          50% { transform: translateX(0%); }
          100% { transform: translateX(-5%); }
        }
        .animate-drift-slow {
          animation: drift-slow 25s ease-in-out infinite;
        }
      `}</style>

      {/* নেভিগেশন বার */}
      <nav className="fixed top-0 w-full z-50 bg-[#050505]/60 backdrop-blur-md border-b border-white/5 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-black tracking-wider uppercase">
            Danzzo<span className="text-[#ff6b6b]">.xyz</span>
          </h1>
          <button className="relative p-2">
            <ShoppingCart className="w-6 h-6" />
            <span className="absolute top-0 right-0 bg-[#ff6b6b] text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center">3</span>
          </button>
        </div>
      </nav>

      {/* =========================================
          ১. হিরো সেকশন (Video Style with Cloud/Mist)
          ========================================= */}
      <section className="relative w-full h-[100vh] flex flex-col justify-center items-center overflow-hidden bg-[#050505]">
        
        {/* Background Ambient Color */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1515] to-[#050505] opacity-50"></div>

        <div className="text-center z-40 mb-4 mt-16">
          <h2 className="text-xs md:text-sm text-gray-400 tracking-[0.4em] uppercase mb-3">Explore The Unknown</h2>
          <p className="text-3xl md:text-6xl font-black uppercase tracking-widest text-white drop-shadow-lg">
            Fashion <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">&</span> Tech
          </p>
        </div>

        {/* 3D স্লাইডার কন্টেইনার */}
        <div className="relative w-full max-w-6xl h-[500px] md:h-[600px] flex justify-center items-center perspective-1000 mt-4">
          
          <button onClick={handlePrev} className="absolute left-4 md:left-10 z-50 p-3 text-white/50 hover:text-white transition">
            <ChevronLeft className="w-8 h-8" />
          </button>

          {heroSlides.map((slide, index) => (
            <div 
              key={slide.id}
              className={`absolute w-[260px] md:w-[320px] h-[380px] md:h-[480px] rounded-sm overflow-hidden transition-all duration-700 ease-out ${getSlideClasses(index)}`}
            >
              <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6 text-center">
                <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-wider mb-1">{slide.title}</h3>
                <p className="text-xs text-gray-400 uppercase tracking-widest">{slide.category} Collection</p>
              </div>
            </div>
          ))}

          <button onClick={handleNext} className="absolute right-4 md:right-10 z-50 p-3 text-white/50 hover:text-white transition">
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>

        {/* =========================================
            মেঘ/ধোঁয়া (Cloud/Mist) ইফেক্ট - আপনার ভিডিওর মতো
            ========================================= */}
        <div className="absolute bottom-0 left-0 w-full h-[40vh] md:h-[50vh] z-40 pointer-events-none overflow-hidden">
          {/* Cloud Layer 1 */}
          <div 
            className="absolute -bottom-20 left-0 w-[200%] h-full opacity-60 animate-drift bg-repeat-x"
            style={{ 
              backgroundImage: "url('https://cdn.pixabay.com/photo/2022/07/20/19/31/smoke-7334863_1280.png')",
              backgroundSize: "contain",
              backgroundPosition: "bottom"
            }}
          ></div>
          {/* Cloud Layer 2 (Slightly darker and slower) */}
          <div 
            className="absolute -bottom-10 -left-[50%] w-[200%] h-[80%] opacity-40 animate-drift-slow bg-repeat-x mix-blend-screen"
            style={{ 
              backgroundImage: "url('https://cdn.pixabay.com/photo/2022/07/20/19/31/smoke-7334863_1280.png')",
              backgroundSize: "contain",
              backgroundPosition: "bottom"
            }}
          ></div>
          {/* Bottom Gradient Fade to merge with next section */}
          <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#050505] to-transparent"></div>
        </div>

        {/* ডটস ইন্ডিকেটর */}
        <div className="absolute bottom-10 flex gap-3 z-50">
          {heroSlides.map((_, i) => (
            <button 
              key={i} 
              onClick={() => setActiveSlide(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${i === activeSlide ? 'w-8 bg-white' : 'w-2 bg-white/30'}`}
            />
          ))}
        </div>
      </section>

      {/* =========================================
          ২. আকর্ষণীয় সেকশন (Hot Drops)
          ========================================= */}
      <section className="py-16 px-4 md:px-12 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wider text-white border-l-4 border-[#ff6b6b] pl-4">Hot Drops</h2>
            <button className="text-xs tracking-widest text-gray-500 hover:text-white transition uppercase">View All</button>
          </div>

          <div className="flex overflow-x-auto gap-4 md:gap-6 pb-6 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
            {hotDrops.map((item) => (
              <div key={item.id} className="min-w-[200px] md:min-w-[280px] snap-start bg-[#0f0f0f] rounded-md overflow-hidden group cursor-pointer border border-white/5 hover:border-white/20 transition-all duration-300">
                <div className="h-[250px] md:h-[350px] overflow-hidden relative">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
                  <div className="absolute top-4 right-4 bg-white text-black text-[10px] font-black px-3 py-1 uppercase tracking-widest">New</div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-sm md:text-base text-gray-300 group-hover:text-white transition-colors">{item.title}</h3>
                  <p className="text-white mt-1 font-mono">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          ৩. ২০টি আইটেমের মিক্সড গ্রিড
          ========================================= */}
      <section className="py-20 px-4 md:px-12 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-widest mb-2">
              Curated For You
            </h2>
            <p className="text-gray-500 text-sm tracking-widest uppercase">Select your vibe</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
            {gridItems.map((item) => (
              <div key={item.id} className="bg-[#050505] overflow-hidden border border-white/5 hover:border-white/30 transition-all duration-300 group">
                <div className="aspect-[3/4] overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-2 left-2 bg-black/80 text-[10px] uppercase tracking-widest px-2 py-1 text-gray-300">
                    {item.category}
                  </div>
                  
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                     <button className="w-full bg-white text-black text-xs font-bold py-3 uppercase tracking-wider hover:bg-[#ff6b6b] hover:text-white transition">
                      Add to Cart
                    </button>
                  </div>
                </div>
                
                <div className="p-4 bg-[#0f0f0f]">
                  <h3 className="text-xs md:text-sm font-medium text-gray-400 line-clamp-1">{item.title}</h3>
                  <p className="font-mono text-white mt-2 text-sm">{item.price}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 flex justify-center">
            <button className="px-10 py-4 bg-transparent border border-white text-white font-bold text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-300">
              Load More
            </button>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#050505] py-12 text-center">
        <h2 className="text-2xl font-black tracking-widest uppercase text-white">Danzzo.xyz</h2>
        <p className="text-gray-600 text-xs mt-3 tracking-widest uppercase">© 2026 Danzzo. Global Edition.</p>
      </footer>
    </div>
  );
}
