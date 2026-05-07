"use client";
import React from 'react';
import { TrendingUp, Users, Globe, ArrowRight } from 'lucide-react';

export default function InvestorPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans">
      <nav className="p-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-black tracking-wider uppercase">Danzzo<span className="text-[#ff6b6b]">.xyz</span></h1>
          <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">Investor Relations</span>
        </div>
      </nav>

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 leading-tight">
          Shaping The <br/> <span className="text-gray-500">Future of Retail.</span>
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl mb-10">
          Danzzo.xyz শুধুমাত্র একটি ই-কমার্স নয়, এটি ফ্যাশন এবং টেকনোলজির একটি গ্লোবাল ইকোসিস্টেম।
        </p>
        <button className="flex items-center gap-3 px-8 py-4 bg-white text-black font-bold hover:bg-gray-200 transition-colors uppercase tracking-widest">
          Download Q4 Report <ArrowRight className="w-5 h-5" />
        </button>
      </section>

      <section className="bg-black py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="border-l-2 border-[#ff6b6b] pl-6">
            <TrendingUp className="w-8 h-8 mb-4 text-[#ff6b6b]" />
            <h3 className="text-5xl font-black mb-2">150%</h3>
            <p className="text-gray-400 uppercase tracking-widest text-sm">YoY Revenue Growth</p>
          </div>
          <div className="border-l-2 border-blue-500 pl-6">
            <Users className="w-8 h-8 mb-4 text-blue-500" />
            <h3 className="text-5xl font-black mb-2">2.5M+</h3>
            <p className="text-gray-400 uppercase tracking-widest text-sm">Active Customers</p>
          </div>
          <div className="border-l-2 border-green-500 pl-6">
            <Globe className="w-8 h-8 mb-4 text-green-500" />
            <h3 className="text-5xl font-black mb-2">12</h3>
            <p className="text-gray-400 uppercase tracking-widest text-sm">Countries Operated</p>
          </div>
        </div>
      </section>
    </div>
  );
}
