"use client";
import React, { useState } from 'react';
import { Phone, ShieldCheck } from 'lucide-react';

export default function PartnerPortal() {
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState('');

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="text-center mb-10 z-10">
        <h1 className="text-3xl font-black uppercase tracking-[0.2em] mb-2">
          Danzzo <span className="text-blue-500">Partner</span>
        </h1>
        <p className="text-gray-400 text-sm tracking-widest uppercase">Wholesale Supplier Login</p>
      </div>

      <div className="w-full max-w-md bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-8 z-10 shadow-2xl">
        {step === 1 ? (
          <form onSubmit={(e) => { e.preventDefault(); setStep(2); }} className="flex flex-col gap-5">
            <div>
              <label className="text-xs text-gray-400 uppercase tracking-widest mb-2 block">Verified Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-500" />
                <input 
                  type="tel" required placeholder="+880 1XXX-XXXXXX"
                  className="w-full bg-black/50 border border-white/10 rounded-lg py-3 pl-12 pr-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
            </div>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-lg tracking-widest uppercase">
              Send OTP
            </button>
          </form>
        ) : (
          <form className="flex flex-col gap-5">
            <div>
              <label className="text-xs text-gray-400 uppercase tracking-widest mb-2 block">Enter OTP</label>
              <div className="relative">
                <ShieldCheck className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#ffb703]" />
                <input 
                  type="text" required placeholder="4-digit code"
                  className="w-full bg-black/50 border border-white/10 rounded-lg py-3 pl-12 pr-4 text-white focus:outline-none focus:border-[#ffb703] transition-colors tracking-widest"
                />
              </div>
            </div>
            <button type="button" className="w-full bg-[#ffb703] hover:bg-[#ffb703]/80 text-black font-black py-3 rounded-lg tracking-widest uppercase">
              Verify & Enter
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
