'use client';

import { motion } from 'motion/react';
import { Send, Crown, Coins, ShieldCheck, PieChart, Activity, Layers, Flame, Droplets, Percent, Users, Twitter } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Whitepaper() {
  const slideUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <div className="min-h-screen bg-black-bg text-tan selection:bg-pink selection:text-white overflow-hidden font-sans relative">
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
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 w-full z-50 bg-black-bg/80 backdrop-blur-xl border-b border-gold/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-pink p-[1px] overflow-hidden">
              <div className="w-full h-full bg-black-bg rounded-full flex items-center justify-center overflow-hidden">
                <Image src="/assets/ecek-logo.png" alt="ECEK Logo" width={48} height={48} className="object-cover" />
              </div>
            </div>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-tan font-bold text-xl tracking-wider">$ECEK</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="/" className="text-tan/70 hover:text-gold transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-gold to-pink"></span> Home</Link>
            <Link href="/whitepaper" className="text-gold transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-gold to-pink shadow-[0_0_10px_rgba(255,20,147,0.8)]"></span> Whitepaper</Link>
          </div>
          <a href="/#waitlist" className="hidden md:flex items-center justify-center px-6 py-2 rounded-full bg-gradient-to-br from-gold/20 to-pink/20 border border-gold/30 text-gold hover:from-gold hover:to-pink hover:text-white hover:border-transparent transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.2)] font-bold text-xs uppercase tracking-widest">
            Join now
          </a>
        </div>
      </motion.nav>

      {/* Content */}
      <main className="relative z-10 pt-32 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden" animate="visible" variants={staggerContainer}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={slideUp} className="text-center space-y-6">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight uppercase leading-tight">
              ECEK Token <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-pink to-gold animate-gradient">Whitepaper</span>
            </h1>
            <p className="text-xl text-tan/80 max-w-2xl mx-auto">Building the Decentralized ECEK Empire</p>
          </motion.div>

          {/* Sections */}
          <motion.div variants={slideUp} className="relative p-[1px] rounded-3xl bg-gradient-to-br from-gold/30 via-transparent to-pink/20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-pink/5" />
            <div className="relative bg-black-bg/90 backdrop-blur-xl p-8 md:p-12 rounded-3xl space-y-12 text-lg text-tan/80 leading-relaxed">
              
              {/* 1. Introduction */}
              <section className="space-y-6">
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold to-pink uppercase tracking-wider border-b border-gold/20 pb-4">1. Introduction</h2>
                <p>The cryptocurrency market has witnessed the exponential growth of meme-based assets. However, this sector is often plagued by a lack of transparency, complex tax structures, and security vulnerabilities. <strong className="text-white">$ECEK</strong> is an ERC-20 token launched on the Ethereum blockchain, designed to solve these issues by combining the viral nature of a meme coin with institutional-grade tokenomic security.</p>
                <ul className="space-y-4 mt-4">
                  <li className="flex gap-4"><div className="w-2 h-2 rounded-full bg-gradient-to-r from-gold to-pink mt-2.5 shrink-0" /><div><strong className="text-white">What is $ECEK?</strong><br/>While many tokens rely on derivative or overused animal tropes (frogs, generic shibas, hats on various animals), $ECEK introduces a grander narrative. Built around the identity of the Pekingese—a breed historically revered as the sacred companions of Chinese Emperors—$ECEK aims to establish a sustainable, decentralized Intellectual Property (IP) and a digital empire within the Web3 ecosystem.</div></li>
                  <li className="flex gap-4"><div className="w-2 h-2 rounded-full bg-gradient-to-r from-gold to-pink mt-2.5 shrink-0" /><div><strong className="text-white">Vision</strong><br/>To forge the greatest decentralized empire in the crypto space, flipping the tired narratives of the meme coin market and bringing a prestigious, community-owned dynasty to the top of the charts. Pure royal bloodline. Pure community power.</div></li>
                  <li className="flex gap-4"><div className="w-2 h-2 rounded-full bg-gradient-to-r from-gold to-pink mt-2.5 shrink-0" /><div><strong className="text-white">Mission</strong><br/>To build "The Royal Vanguard," a resilient, decentralized civilization where every token holder is treated as nobility. We value strong holding culture ("diamond hands"), imperial brand positioning, and absolute tokenomic transparency.</div></li>
                </ul>
              </section>

              {/* 2. Ecosystem */}
              <section className="space-y-8">
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold to-pink uppercase tracking-wider border-b border-gold/20 pb-4">2. Ecosystem</h2>
                <p>The $ECEK ecosystem is fundamentally driven by its citizens (the holders) and its foundational security principles. We do not rely on complex, broken DeFi protocols; instead, we rely on absolute trust, frictionless trading, and imperial loyalty.</p>
                
                {/* Infographic */}
                <div className="relative py-8">
                  {/* Connecting Line (Desktop) */}
                  <div className="hidden md:block absolute top-1/2 left-[10%] w-[80%] h-[2px] bg-gradient-to-r from-gold/0 via-gold/50 to-pink/0 -translate-y-1/2 z-0" />
                  
                  <div className="grid md:grid-cols-3 gap-8 relative z-10">
                    {/* Node 1 */}
                    <div className="relative p-[1px] rounded-2xl bg-gradient-to-b from-gold/50 to-transparent group bg-black-bg/90">
                      <div className="absolute inset-0 bg-gradient-to-b from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                      <div className="relative h-full bg-black-bg/80 backdrop-blur-md p-6 rounded-2xl flex flex-col items-center text-center space-y-4 border border-gold/10 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold/20 to-pink/20 flex items-center justify-center border border-gold/30 shadow-[0_0_15px_rgba(212,175,55,0.2)] group-hover:scale-110 transition-transform duration-300">
                          <Crown className="w-8 h-8 text-gold" />
                        </div>
                        <h3 className="text-xl font-bold text-white">The Royal Vanguard</h3>
                        <p className="text-sm text-tan/70 leading-relaxed">
                          Every holder is a noble. The community is the primary driver of expansion, acting as architects of marketing, meme creation, and cultural dominance.
                        </p>
                      </div>
                    </div>

                    {/* Node 2 */}
                    <div className="relative p-[1px] rounded-2xl bg-gradient-to-b from-pink/50 to-transparent group bg-black-bg/90 md:-translate-y-6">
                      <div className="absolute inset-0 bg-gradient-to-b from-pink/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                      <div className="relative h-full bg-black-bg/80 backdrop-blur-md p-6 rounded-2xl flex flex-col items-center text-center space-y-4 border border-pink/10 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink/20 to-gold/20 flex items-center justify-center border border-pink/30 shadow-[0_0_15px_rgba(255,20,147,0.2)] group-hover:scale-110 transition-transform duration-300">
                          <Coins className="w-8 h-8 text-pink" />
                        </div>
                        <h3 className="text-xl font-bold text-white">Frictionless Economy</h3>
                        <p className="text-sm text-tan/70 leading-relaxed">
                          Zero taxes on buys and sells. Traders interact with the royal treasury without slippage limits or hidden developer fees. You keep what you trade.
                        </p>
                      </div>
                    </div>

                    {/* Node 3 */}
                    <div className="relative p-[1px] rounded-2xl bg-gradient-to-b from-gold/50 to-transparent group bg-black-bg/90">
                      <div className="absolute inset-0 bg-gradient-to-b from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                      <div className="relative h-full bg-black-bg/80 backdrop-blur-md p-6 rounded-2xl flex flex-col items-center text-center space-y-4 border border-gold/10 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold/20 to-pink/20 flex items-center justify-center border border-gold/30 shadow-[0_0_15px_rgba(212,175,55,0.2)] group-hover:scale-110 transition-transform duration-300">
                          <ShieldCheck className="w-8 h-8 text-gold" />
                        </div>
                        <h3 className="text-xl font-bold text-white">Decentralized Security</h3>
                        <p className="text-sm text-tan/70 leading-relaxed">
                          No hidden wallets, no pre-sale allocations, and no team tokens. A shift back to fair decentralized finance for all its people.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* 3. Utility Development Framework */}
              <section className="space-y-8">
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold to-pink uppercase tracking-wider border-b border-gold/20 pb-4">3. Utility Development Framework</h2>
                <p>While $ECEK originates as a community-driven meme token, its long-term framework focuses on expanding the $ECEK Intellectual Property (IP) and cementing the Empire's legacy across Web3.</p>
                
                {/* Timeline / Stepper */}
                <div className="relative pl-2 md:pl-4 py-4 space-y-12">
                  {/* Vertical Line */}
                  <div className="absolute left-[26px] md:left-[34px] top-8 bottom-8 w-[2px] bg-gradient-to-b from-gold via-pink to-transparent opacity-30" />

                  {[
                    {
                      phase: "Phase A",
                      title: "Imperial IP Establishment",
                      desc: "Focusing on establishing the majestic Pekingese aesthetic across the crypto space. This includes the creation of high-quality digital assets, majestic meme generators, and community toolkits to empower our citizens' user-generated content.",
                      color: "from-gold to-yellow-600"
                    },
                    {
                      phase: "Phase B",
                      title: "Tangible Dynasty Expansion",
                      desc: "Bridging the digital divide by launching exclusive $ECEK physical merchandise and digital collectibles accessible primarily to The Royal Vanguard (token holders).",
                      color: "from-pink to-rose-600"
                    },
                    {
                      phase: "Phase C",
                      title: "Strategic Integrations",
                      desc: "Partnering with established decentralized applications (dApps), Web3 social platforms, and NFT marketplaces to integrate $ECEK as the recognized currency of choice for our growing empire.",
                      color: "from-gold to-pink"
                    }
                  ].map((item, i) => (
                    <div key={i} className="relative flex items-start gap-6 md:gap-8 group">
                      {/* Node */}
                      <div className="relative z-10 flex flex-col items-center mt-1">
                        <div className={`w-12 h-12 rounded-full p-[1px] bg-gradient-to-br ${item.color} group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(212,175,55,0.3)]`}>
                          <div className="w-full h-full bg-black-bg rounded-full flex items-center justify-center text-sm font-bold text-white">
                            {item.phase.split(' ')[1]}
                          </div>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 relative p-[1px] rounded-2xl bg-gradient-to-br from-gold/20 via-transparent to-pink/10 group-hover:from-gold/40 group-hover:to-pink/30 transition-colors duration-500">
                        <div className="relative bg-black-bg/80 backdrop-blur-md p-6 md:p-8 rounded-2xl">
                          <div className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold to-pink mb-2 uppercase tracking-widest">{item.phase}</div>
                          <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{item.title}</h3>
                          <p className="text-tan/70 leading-relaxed text-base">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* 4. Token Economics */}
              <section className="space-y-8">
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold to-pink uppercase tracking-wider border-b border-gold/20 pb-4">4. TOKENOMICS</h2>
                <p>The tokenomics of $ECEK are engineered for maximum simplicity, fairness, and longevity. Our treasury is structured to protect the citizens and prevent market manipulation.</p>
                
                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  {/* Token Profile Infographic */}
                  <div className="relative p-[1px] rounded-3xl bg-gradient-to-br from-gold/40 via-transparent to-pink/20 group">
                    <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-pink/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
                    <div className="relative h-full bg-black-bg/80 backdrop-blur-xl p-8 rounded-3xl flex flex-col">
                      <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold/20 to-pink/20 flex items-center justify-center border border-gold/30 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                          <Coins className="w-6 h-6 text-gold" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">Token Profile</h3>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 flex-1">
                        {[
                          { label: "Token Name", value: "ECEK", icon: Coins },
                          { label: "Ticker", value: "$ECEK", icon: Activity },
                          { label: "Blockchain", value: "Ethereum", icon: Layers },
                          { label: "Total Supply", value: "500,000", icon: PieChart }
                        ].map((stat, i) => (
                          <div key={i} className="bg-black-bg/50 border border-gold/10 rounded-2xl p-4 flex flex-col items-center text-center justify-center group-hover:border-gold/30 transition-colors shadow-inner">
                            <stat.icon className="w-6 h-6 text-pink mb-3 opacity-80" />
                            <div className="text-xs text-tan/50 uppercase tracking-wider mb-1">{stat.label}</div>
                            <div className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold to-[#FFF8DC]">{stat.value}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Distribution & Trading Infographic */}
                  <div className="relative p-[1px] rounded-3xl bg-gradient-to-br from-pink/40 via-transparent to-gold/20 group">
                    <div className="absolute inset-0 bg-gradient-to-br from-pink/10 to-gold/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
                    <div className="relative h-full bg-black-bg/80 backdrop-blur-xl p-8 rounded-3xl flex flex-col">
                      <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink/20 to-gold/20 flex items-center justify-center border border-pink/30 shadow-[0_0_15px_rgba(255,20,147,0.2)]">
                          <PieChart className="w-6 h-6 text-pink" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">Distribution & Trading</h3>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 flex-1">
                        {[
                          { label: "Liquidity Pool", value: "100%", icon: Droplets },
                          { label: "Team/Presale", value: "0%", icon: Users },
                          { label: "Buy/Sell Tax", value: "0%", icon: Percent },
                          { label: "Liquidity", value: "Burned", icon: Flame }
                        ].map((stat, i) => (
                          <div key={i} className="bg-black-bg/50 border border-pink/10 rounded-2xl p-4 flex flex-col items-center text-center justify-center group-hover:border-pink/30 transition-colors shadow-inner">
                            <stat.icon className="w-6 h-6 text-gold mb-3 opacity-80" />
                            <div className="text-xs text-tan/50 uppercase tracking-wider mb-1">{stat.label}</div>
                            <div className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold to-[#FFF8DC]">{stat.value}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* 5. Operational Governance */}
              <section className="space-y-6">
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold to-pink uppercase tracking-wider border-b border-gold/20 pb-4">5. Operational Governance</h2>
                <p>The ECEK Empire operates on a model of absolute decentralized autonomy.</p>
                <p>Upon the successful deployment of the smart contract and the burning of the initial liquidity pool, <strong className="text-white">contract ownership will be strictly renounced</strong>.</p>
                <p>This means the founding team relinquishes the throne to the people. The code cannot be altered, trading cannot be paused, and taxes cannot be changed. The operational future and the direction of the $ECEK dynasty lie solely in the hands of community consensus and citizen-led initiatives.</p>
              </section>

              {/* 6. Disclaimers */}
              <section className="space-y-6">
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold to-pink uppercase tracking-wider border-b border-gold/20 pb-4">6. Disclaimers</h2>
                <div className="space-y-4 text-sm text-tan/60">
                  <p><strong className="text-tan/80">General Information:</strong> $ECEK is an experimental decentralized community token. This documentation is provided for informational purposes only and does not constitute financial, investment, or legal advice.</p>
                  <p><strong className="text-tan/80">Risk of Loss:</strong> The purchase of cryptocurrencies involves a high degree of risk, and the value of $ECEK can fluctuate significantly. You should carefully consider whether purchasing $ECEK is suitable for your financial situation.</p>
                  <p><strong className="text-tan/80">No Guarantees:</strong> The $ECEK team makes no guarantees regarding future performance, exchange listings, or the realization of the roadmap. Citizens should Do Your Own Research (DYOR) and comply with all local laws and regulations before interacting with the token.</p>
                </div>
              </section>
              
            </div>
          </motion.div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="relative py-12 px-4 bg-black-bg overflow-hidden z-10 mt-20">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-6 relative z-10">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold to-pink p-[1px] overflow-hidden">
                <div className="w-full h-full bg-black-bg rounded-full flex items-center justify-center overflow-hidden">
                  <Image src="/assets/ecek-logo.png" alt="ECEK Logo" width={24} height={24} className="object-cover" />
                </div>
              </div>
              <span className="text-tan/50 text-sm">© 2026 $ECEK Coin. All rights reserved.</span>
            </div>
            <div className="flex items-center gap-4 border-l border-gold/20 pl-6">
              <a href="https://x.com/EcekCoin" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-black-bg border border-gold/30 flex items-center justify-center text-gold hover:bg-gradient-to-br hover:from-gold hover:to-pink hover:text-black-bg hover:border-transparent transition-all duration-300">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://t.me/ecekcoin" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-black-bg border border-gold/30 flex items-center justify-center text-gold hover:bg-gradient-to-br hover:from-gold hover:to-pink hover:text-black-bg hover:border-transparent transition-all duration-300">
                <Send className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
