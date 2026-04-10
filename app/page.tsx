'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Copy, Check, Twitter, Send, ArrowRight, Wallet, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const CONTRACT_ADDRESS = "0x000000000000000000000000000000000000ECEK";

const phases = [
  { id: "Phase 1", title: "The Bark", items: ["Website & Socials Launch", "Smart Contract Deployment", "Telegram & X Community", "DexScreener Trending"] },
  { id: "Phase 2", title: "The Bite", items: ["Aggressive Marketing", "CG & CMC Listings", "5,000+ Holders", "Community Raids"] },
  { id: "Phase 3", title: "The Empire", items: ["Tier 2 CEX Listings", "Exclusive Merch", "Treasury Expansion", "20,000+ Holders"] },
  { id: "Phase 4", title: "World Domination", items: ["Tier 1 CEX Listings", "Flipping Legacy Dogs", "Supreme Breed Recognition", "To the Moon!"] }
];

// Reusable component for the Pekingese image placeholder
const PekingeseVisual = ({
  className = "",
  src = "/assets/illustration-1.png",
  alt = "ECEK Pekingese"
}: {
  className?: string,
  src?: string,
  alt?: string
}) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-tr from-gold/30 to-pink/20 blur-[80px] rounded-full pointer-events-none animate-pulse" />
    <motion.div
      animate={{ y: [0, -15, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="relative w-full aspect-square max-w-[500px] rounded-full p-[2px] bg-gradient-to-br from-gold via-pink to-bronze shadow-[0_0_60px_rgba(212,175,55,0.25)] flex items-center justify-center overflow-hidden group"
    >
      <div className="absolute inset-0 bg-black-bg rounded-full" />
      <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent rounded-full" />

      <div className="relative w-full h-full z-10">
        <Image src={src} alt={alt} fill className="object-contain relative z-10" />
      </div>
    </motion.div>
  </div>
);

export default function Page() {
  const [copied, setCopied] = useState(false);
  const [activePhase, setActivePhase] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const [waitlistStatus, setWaitlistStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleWaitlistSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setWaitlistStatus('loading');
    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://formspree.io/f/xqegvlzy", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setWaitlistStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setWaitlistStatus('error');
      }
    } catch (error) {
      setWaitlistStatus('error');
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const slideUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="min-h-screen bg-black-bg text-tan selection:bg-pink selection:text-white overflow-hidden font-sans relative">

      {/* Preloader */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[100] bg-black-bg flex flex-col items-center justify-center"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="text-7xl mb-6 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-gold to-pink blur-2xl opacity-50 rounded-full animate-pulse" />
              <div className="relative z-10 w-24 h-24">
                <Image src="/assets/ecek-logo.png" alt="ECEK Logo" fill className="object-contain" />
              </div>
            </motion.div>
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-pink font-bold text-2xl tracking-widest uppercase"
            >
              Please wait, still scratching my ear...
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global Aurora Mesh Gradients */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-gold/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute top-[40%] right-[-10%] w-[30%] h-[50%] bg-pink/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[-20%] left-[20%] w-[50%] h-[40%] bg-bronze-light/20 rounded-full blur-[150px] mix-blend-screen" />
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 w-full z-50 bg-black-bg/80 backdrop-blur-xl border-b border-gold/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-pink p-[1px] overflow-hidden">
              <div className="w-full h-full bg-black-bg rounded-full flex items-center justify-center overflow-hidden">
                <Image src="/assets/ecek-logo.png" alt="ECEK Logo" width={48} height={48} className="object-cover" />
              </div>
            </div>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-tan font-bold text-xl tracking-wider">$ECEK</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#about" className="text-tan/70 hover:text-gold transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-gold to-pink"></span> About Us</a>
            <a href="#how-to-buy" className="text-tan/70 hover:text-gold transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-gold to-pink"></span> How to Buy</a>
            <a href="#tokenomics" className="text-tan/70 hover:text-gold transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-gold to-pink"></span> Tokenomics</a>
            <a href="#roadmap" className="text-tan/70 hover:text-gold transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-gold to-pink"></span> Roadmap</a>
          </div>
          <a href="#waitlist" className="hidden md:flex items-center justify-center px-6 py-2 rounded-full bg-gradient-to-br from-gold/20 to-pink/20 border border-gold/30 text-gold hover:from-gold hover:to-pink hover:text-white hover:border-transparent transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.2)] font-bold text-xs uppercase tracking-widest">
            Join now
          </a>
        </div>
      </motion.nav>

      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 min-h-screen flex items-center z-10">
        {/* Decorative landscape lines at bottom */}
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-gold/5 to-transparent pointer-events-none border-b border-gold/20" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 80%, 75% 60%, 50% 90%, 25% 70%, 0 85%)' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.0, duration: 0.8, ease: "easeOut" }}
                className="text-5xl md:text-7xl font-extrabold text-white mb-4 tracking-tight uppercase leading-tight"
              >
                The Bossiest <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-pink to-gold animate-gradient">Pekingese</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.2, duration: 0.8, ease: "easeOut" }}
                className="text-xl text-tan/80 mb-8 max-w-lg leading-relaxed"
              >
                Move over, doges. ECEK is here. Small, sassy, and ready to send your portfolio to the moon. Pure meme power, pure royal bloodline.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.4, duration: 0.8, ease: "easeOut" }}
                className="flex flex-wrap gap-4"
              >
                <a href="#about" className="px-8 py-4 bg-gradient-to-r from-gold to-[#B8860B] text-black-bg font-bold rounded-xl hover:from-pink hover:to-[#FF1493] hover:text-white transition-all duration-500 uppercase tracking-wider flex items-center gap-2 group shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(255,20,147,0.5)]">
                  Learn more <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#waitlist" className="px-8 py-4 bg-black-bg/50 backdrop-blur-md border border-gold/30 text-gold font-bold rounded-xl hover:border-pink hover:text-pink transition-all duration-300 uppercase tracking-wider">
                  Join the waitlist
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 2.2, duration: 1, type: "spring", bounce: 0.4 }}
              className="relative"
            >
              <PekingeseVisual src="/assets/illustration-1.png" alt="ECEK Hero" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. About Section */}
      <section id="about" className="py-32 relative z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bronze/10 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={slideInLeft} className="order-2 lg:order-1">
              <PekingeseVisual className="scale-90 opacity-80" src="/assets/illustration-2.png" alt="ECEK About" />
            </motion.div>

            <motion.div variants={slideInRight} className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-tan mb-8 uppercase tracking-wider">Who is ECEK?</h2>

              <motion.div
                whileHover={{ scale: 1.02, rotateY: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative p-[1px] rounded-3xl bg-gradient-to-br from-gold/30 via-transparent to-pink/20 group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-pink/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-black-bg/80 backdrop-blur-xl p-8 md:p-10 rounded-3xl space-y-6 text-lg text-tan/70 leading-relaxed">
                  <p>
                    Born from the Pekingese breed—once the exclusive lapdogs of ancient emperors—ECEK has stepped down from the throne to become the undisputed king of meme coins.
                  </p>
                  <p>
                    No complex utilities, no false promises. Just a grumpy-faced royalty ready to dominate the Ethereum blockchain.
                  </p>
                  <p className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-pink font-semibold">
                    Tired of the same old dog coins? It's time to run with the most savage pack. Bow to the new king!
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. Tokenomics Section */}
      <section id="tokenomics" className="py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={slideUp} className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-tan uppercase tracking-wider mb-4">Royal Tokenomics</h2>
            <p className="text-tan/60">No bullshit. Built by the community, for the community.</p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="grid lg:grid-cols-3 gap-8 items-center mb-16"
          >
            {/* Left Stats */}
            <div className="space-y-6">
              <motion.div variants={slideInLeft} whileHover={{ scale: 1.05, x: 10 }} className="relative p-[1px] rounded-2xl bg-gradient-to-br from-gold/40 via-transparent to-pink/20 group cursor-default">
                <div className="relative h-full bg-black-bg/80 backdrop-blur-xl p-6 rounded-2xl group-hover:bg-black-bg/60 transition-colors">
                  <div className="text-sm text-tan/50 uppercase tracking-widest mb-2">Total Supply</div>
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold to-[#FFF8DC]">500,000</div>
                </div>
              </motion.div>
              <motion.div variants={slideInLeft} whileHover={{ scale: 1.05, x: 10 }} className="relative p-[1px] rounded-2xl bg-gradient-to-br from-gold/40 via-transparent to-pink/20 group cursor-default">
                <div className="relative h-full bg-black-bg/80 backdrop-blur-xl p-6 rounded-2xl group-hover:bg-black-bg/60 transition-colors">
                  <div className="text-sm text-tan/50 uppercase tracking-widest mb-2">Taxes</div>
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold to-[#FFF8DC]">0% Buy / 0% Sell</div>
                </div>
              </motion.div>
            </div>

            {/* Center Visual */}
            <motion.div variants={slideUp} whileHover={{ scale: 1.1, rotate: 5 }} transition={{ type: "spring" }} className="flex justify-center relative z-10">
              <div className="absolute inset-0 bg-gold/20 blur-[100px] rounded-full opacity-50" />
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <Image src="/assets/ecek-logo.png" alt="ECEK Logo" fill className="object-contain drop-shadow-[0_0_50px_rgba(212,175,55,0.5)]" />
              </div>
            </motion.div>

            {/* Right Stats */}
            <div className="space-y-6">
              <motion.div variants={slideInRight} whileHover={{ scale: 1.05, x: -10 }} className="relative p-[1px] rounded-2xl bg-gradient-to-br from-gold/40 via-transparent to-pink/20 group cursor-default">
                <div className="relative h-full bg-black-bg/80 backdrop-blur-xl p-6 rounded-2xl group-hover:bg-black-bg/60 transition-colors">
                  <div className="text-sm text-tan/50 uppercase tracking-widest mb-2">Liquidity</div>
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold to-[#FFF8DC]">100% Burned</div>
                </div>
              </motion.div>
              <motion.div variants={slideInRight} whileHover={{ scale: 1.05, x: -10 }} className="relative p-[1px] rounded-2xl bg-gradient-to-br from-gold/40 via-transparent to-pink/20 group cursor-default">
                <div className="relative h-full bg-black-bg/80 backdrop-blur-xl p-6 rounded-2xl group-hover:bg-black-bg/60 transition-colors">
                  <div className="text-sm text-tan/50 uppercase tracking-widest mb-2">Contract</div>
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold to-[#FFF8DC]">Renounced</div>
                </div>
              </motion.div>
            </div>
          </motion.div>


        </div>
      </section>

      {/* 4. How to Buy Section */}
      <section id="how-to-buy" className="py-32 relative z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={slideInLeft} className="flex justify-center">
              {/* Wallet/Fox Illustration Placeholder */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-64 h-64 md:w-96 md:h-96"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-gold/20 to-pink/20 blur-[100px] rounded-full animate-pulse" />
                <div className="relative w-full h-full p-[2px] rounded-3xl bg-gradient-to-br from-gold via-pink to-bronze shadow-2xl overflow-hidden">
                  <div className="w-full h-full bg-black-bg/40 backdrop-blur-xl flex items-center justify-center relative overflow-hidden">
                    <Image src="/assets/illustration-3.png" alt="Buy $ECEK" fill className="object-contain" />
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div variants={staggerContainer}>
              <motion.h2 variants={slideUp} className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-tan mb-6 uppercase tracking-wider">How to Buy (Pre-Launch Prep)</motion.h2>
              <motion.p variants={slideUp} className="text-xl text-tan/70 mb-12 max-w-xl leading-relaxed font-medium">
                $ECEK is currently preparing for its grand entrance. The smart contract is <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-pink font-bold border-b border-pink/30 pb-1">NOT live yet</span>. Follow these steps so you are ready the second the gates open.
              </motion.p>
              <div className="space-y-8">
                {[
                  { step: "01", title: "Get a Wallet", desc: "Download and install MetaMask or Trust Wallet. Create your wallet and lock away your seed phrase. A true king protects their treasury." },
                  { step: "02", title: "Load up on ETH", desc: "The empire runs on Ethereum. Buy ETH from a centralized exchange (Binance, Coinbase, etc.) and transfer it to your new wallet address so you have gas ready." },
                  { step: "03", title: "Join the Vanguard", desc: "Turn on notifications! Join our official Telegram and follow us on X. This is where the exact launch time and official updates will drop first." },
                  { step: "04", title: "Await the Royal Decree", desc: "On launch day, we will post the ONLY official Contract Address (CA) in our official channels. Paste that CA into Uniswap, swap your ETH, and claim your $ECEK." }
                ].map((item, i) => (
                  <motion.div variants={slideInRight} key={i} className="flex gap-6 group">
                    <div className="flex flex-col items-center">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="w-12 h-12 rounded-full p-[1px] bg-gradient-to-b from-gold to-pink"
                      >
                        <div className="w-full h-full bg-black-bg rounded-full flex items-center justify-center text-gold font-bold group-hover:bg-gradient-to-br group-hover:from-gold group-hover:to-pink group-hover:text-black-bg transition-all duration-300">
                          {item.step}
                        </div>
                      </motion.div>
                      {i !== 3 && (
                        <motion.div
                          initial={{ height: 0 }}
                          whileInView={{ height: "100%" }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className="w-px bg-gradient-to-b from-gold/50 to-transparent my-2 group-hover:from-pink/50 transition-colors"
                        />
                      )}
                    </div>
                    <div className="pb-8">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gold group-hover:to-pink transition-all">{item.title}</h3>
                      <p className="text-tan/60 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <a href="#waitlist" className="inline-block mt-4 px-8 py-4 bg-gradient-to-r from-gold to-[#B8860B] text-black-bg font-bold rounded-xl hover:from-pink hover:to-[#FF1493] hover:text-white transition-all duration-500 uppercase tracking-wider shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(255,20,147,0.5)]">
                Join the waitlist
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 5. Roadmap Section */}
      <section id="roadmap" className="py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={slideUp} className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-tan uppercase tracking-wider mb-4">The Royal Roadmap</h2>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="grid lg:grid-cols-12 gap-12"
          >
            {/* Left Tabs */}
            <motion.div variants={slideInLeft} className="lg:col-span-4 flex flex-col gap-4">
              {phases.map((phase, idx) => (
                <motion.button
                  whileHover={{ scale: 1.02, x: 10 }}
                  whileTap={{ scale: 0.98 }}
                  key={idx}
                  onClick={() => setActivePhase(idx)}
                  className={`px-6 py-5 rounded-xl text-left font-bold uppercase tracking-wider transition-all duration-300 flex justify-between items-center relative overflow-hidden group ${activePhase === idx
                    ? 'text-black-bg shadow-[0_0_20px_rgba(212,175,55,0.3)]'
                    : 'bg-black-bg/50 border border-gold/20 text-tan/50 hover:border-gold/50 hover:text-tan'
                    }`}
                >
                  {activePhase === idx && (
                    <motion.div layoutId="activeTab" className="absolute inset-0 bg-gradient-to-r from-gold to-pink" />
                  )}
                  <span className="relative z-10">{phase.id}</span>
                  <ArrowUpRight className={`relative z-10 w-5 h-5 transition-transform ${activePhase === idx ? 'rotate-45' : 'opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0'}`} />
                </motion.button>
              ))}
            </motion.div>

            {/* Right Content */}
            <motion.div variants={slideInRight} className="lg:col-span-8">
              <div className="relative p-[1px] rounded-3xl bg-gradient-to-br from-gold/40 via-transparent to-pink/30 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-pink/10 opacity-50 rounded-3xl" />
                <div className="relative h-full bg-black-bg/90 backdrop-blur-xl p-8 md:p-12 rounded-3xl overflow-hidden">
                  {/* Decorative background element */}
                  <div className="absolute -right-20 -bottom-20 opacity-5 pointer-events-none">
                    <PekingeseVisual className="scale-150" src="/assets/illustration-1.png" alt="ECEK Roadmap" />
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activePhase}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="relative z-10"
                    >
                      <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold to-pink mb-8 uppercase">{phases[activePhase].title}</h3>
                      <ul className="space-y-6">
                        {phases[activePhase].items.map((item, i) => (
                          <li key={i} className="flex items-start gap-4 text-lg text-tan/80">
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-gold to-pink mt-2.5 shrink-0 shadow-[0_0_10px_rgba(255,20,147,0.5)]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 6. Waitlist Section */}
      <section id="waitlist" className="py-32 relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-gold/10 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={slideUp}>
            <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold via-pink to-gold animate-gradient mb-6 uppercase tracking-wider">Join the Royal Vanguard</h2>
            <p className="text-xl text-tan/80 mb-10 leading-relaxed font-medium">
              Be the first to know when the ECEK gates open. Exclusive drops, early announcements, and pure imperial glory await.
            </p>

            <form onSubmit={handleWaitlistSubmit} className="relative z-20 flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
                disabled={waitlistStatus === 'loading' || waitlistStatus === 'success'}
                className="flex-1 px-8 py-5 bg-black-bg/80 backdrop-blur-xl border border-gold/40 rounded-2xl text-lg text-tan placeholder-tan/40 focus:outline-none focus:border-pink focus:shadow-[0_0_20px_rgba(255,20,147,0.3)] transition-all disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={waitlistStatus === 'loading' || waitlistStatus === 'success'}
                className="px-8 py-5 bg-gradient-to-r from-gold to-[#B8860B] text-black-bg font-bold rounded-2xl hover:from-pink hover:to-[#FF1493] hover:text-white transition-all duration-500 uppercase tracking-wider shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(255,20,147,0.6)] shrink-0 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[180px]"
              >
                {waitlistStatus === 'loading' ? 'Joining...' : waitlistStatus === 'success' ? 'Joined!' : 'Join Waitlist'}
              </button>
            </form>

            <AnimatePresence>
              {waitlistStatus === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 text-pink font-bold tracking-wide"
                >
                  Welcome to the Vanguard! Keep an eye on your inbox.
                </motion.p>
              )}
              {waitlistStatus === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 text-red-500 font-bold tracking-wide"
                >
                  Something went wrong. Please try again!
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* 7. Footer */}
      <footer className="relative py-12 px-4 bg-black-bg overflow-hidden z-10">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-6 relative z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-pink p-[1px] overflow-hidden">
              <div className="w-full h-full bg-black-bg rounded-full flex items-center justify-center overflow-hidden">
                <Image src="/assets/ecek-logo.png" alt="ECEK Logo" width={32} height={32} className="object-cover" />
              </div>
            </div>
            <span className="text-tan/50 text-sm">© 2026 $ECEK Coin. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
