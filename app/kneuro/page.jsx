"use client";
import React from 'react';
import { Cpu, Zap, Shield, Rocket } from 'lucide-react';

export default function KneuroPage() {
  return (
    <div className="min-h-screen bg-[#020202] text-white font-sans overflow-hidden">
      <section className="relative w-full h-screen flex flex-col justify-center items-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-blue-600/20 rounded-full blur-[150px] pointer-events-none"></div>
        
        <div className="z-10 text-center px-4">
          <h2 className="text-blue-500 font-mono tracking-[0.5em] text-sm md:text-base uppercase mb-4">Future is Here</h2>
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-600 mb-6">
            KNEURO <span className="text-blue-500">TECH</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto md:text-lg tracking-widest">
            নেক্সট জেনারেশন গ্যাজেট এবং এআই টেকনোলজি। আপনার দৈনন্দিন জীবনকে আরও স্মার্ট করতে ডিজাইন করা হয়েছে।
          </p>
          <button className="mt-10 px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold tracking-widest uppercase transition-all shadow-[0_0_20px_rgba(37,99,235,0.5)]">
            Explore Gadgets
          </button>
        </div>
      </section>

      <section className="py-20 px-6 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { icon: <Cpu className="w-8 h-8 text-blue-500"/>, title: "Advanced Chips", desc: "Superfast processing power." },
            { icon: <Zap className="w-8 h-8 text-blue-500"/>, title: "Hyper Charge", desc: "100% battery in 15 minutes." },
            { icon: <Shield className="w-8 h-8 text-blue-500"/>, title: "Quantum Security", desc: "Military grade data protection." },
            { icon: <Rocket className="w-8 h-8 text-blue-500"/>, title: "Aero Design", desc: "Ultra lightweight materials." }
          ].map((feature, i) => (
            <div key={i} className="bg-[#0a0a0a] p-8 border border-white/5 hover:border-blue-500/50 transition-colors group">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{feature.title}</h3>
              <p className="text-gray-500 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
