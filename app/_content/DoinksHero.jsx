'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const DoinksHero = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate particles data
    const particleData = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 6,
      duration: Math.random() * 4 + 4
    }));
    setParticles(particleData);
  }, []);

  const handleBuyNow = () => {
    alert('🚀 DOINKS trading will be available soon! Join our community for updates.');
  };

  const handleWhitepaper = () => {
    alert('📄 Whitepaper coming soon! Follow our social media for the latest updates.');
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0a0a23] via-[#1a1a3e] to-[#2d1b69]">
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full particle-float"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center mt-10">
        <div className="max-w-6xl mx-auto">
          {/* Logo Container */}
          <div className="mb-8 relative">
            <div className="justify-center items-center w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full bg-gradient-to-br from-orange-500 to-yellow-500 p-3 shadow-[0_0_50px_rgba(0,212,255,0.5)] animate-pulse">
              <Image
                className=' animate-float md:ml-4'
                src='/dogbg.png'
                width={200}
                height={200}
                alt='Doinks Logo'

              />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-orange-500 to-yellow-500 bg-clip-text text-transparent animate-pulse">
            DOINKS
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto leading-relaxed">
            The Next Generation Meme Token on Solana
          </p>

          {/* Description */}
          <p className="text-base md:text-lg mb-12 text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Meet DOINKS - the fierce, determined, and unstoppable token that&apos;s ready to revolutionize the Solana ecosystem.
            Born from the spirit of perseverance and community power, DOINKS represents more than just a token -
            it&apos;s a movement of passionate investors who believe in the future of decentralized finance.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button
              onClick={handleBuyNow}
              className="px-10 py-4 text-lg font-bold bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-full uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_40px_rgba(255,107,53,0.4)]"
            >
              Buy DOINKS Now
            </button>
            <button
              onClick={handleWhitepaper}
              className="px-10 py-4 text-lg font-bold bg-transparent text-cyan-400 border-2 border-cyan-400 rounded-full uppercase tracking-wider transition-all duration-300 hover:bg-cyan-400 hover:text-[#0a0a23] hover:scale-105 hover:shadow-[0_20px_40px_rgba(0,212,255,0.4)]"
            >
              Read Whitepaper
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row justify-center gap-8 sm:gap-16 mb-16">
            <div className="text-center">
              <span className="block text-4xl md:text-5xl font-bold text-orange-500">1B</span>
              <span className="text-gray-300 text-lg mt-2">Total Supply</span>
            </div>
            <div className="text-center">
              <span className="block text-4xl md:text-5xl font-bold text-orange-500">0%</span>
              <span className="text-gray-300 text-lg mt-2">Team Tokens</span>
            </div>
            <div className="text-center">
              <span className="block text-4xl md:text-5xl font-bold text-orange-500">100%</span>
              <span className="text-gray-300 text-lg mt-2">Community Owned</span>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 pb-16">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:shadow-[0_20px_40px_rgba(0,212,255,0.2)]">
          <div className="text-5xl mb-4">🚀</div>
          <h3 className="text-xl font-semibold text-cyan-400 mb-4">Lightning Fast</h3>
          <p className="text-gray-300 leading-relaxed">
            Built on Solana&apos;s high-performance blockchain for instant transactions and minimal fees
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:shadow-[0_20px_40px_rgba(0,212,255,0.2)]">
          <div className="text-5xl mb-4">🔥</div>
          <h3 className="text-xl font-semibold text-cyan-400 mb-4">Community Driven</h3>
          <p className="text-gray-300 leading-relaxed">
            100% community-owned with no team allocation. The power belongs to the holders
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:shadow-[0_20px_40px_rgba(0,212,255,0.2)]">
          <div className="text-5xl mb-4">💎</div>
          <h3 className="text-xl font-semibold text-cyan-400 mb-4">Diamond Hands</h3>
          <p className="text-gray-300 leading-relaxed">
            Built for long-term holders with deflationary mechanics and reward systems
          </p>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-orange-500 bg-clip-text text-transparent">
          DOINKS Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div className="group rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_40px_rgba(0,212,255,0.3)]">
            <Image
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              src="/dog1.png"
              width={300}
              height={300}
              alt="DOINKS Character 1"
            />
          </div>

          <div className="group rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_40px_rgba(247,147,30,0.3)]">
            <Image
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              src="/dog3.png"
              width={300}
              height={300}
              alt="DOINKS Character 3"
            />
          </div>

          <div className="group rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_40px_rgba(0,212,255,0.3)]">
            <Image
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              src="/dog4.png"
              width={300}
              height={300}
              alt="DOINKS Character 4"
            />
          </div>

          <div className="group rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_40px_rgba(255,107,53,0.3)]">
            <Image
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              src="/dog5.png"
              width={300}
              height={300}
              alt="DOINKS Character 5"
            />
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes floatUp {
            0% { transform: translateY(0px); opacity: 0.3; }
            50% { transform: translateY(-20px); opacity: 1; }
            100% { transform: translateY(-40px); opacity: 0; }
          }
          .particle-float {
            animation: floatUp 4s ease-in-out infinite;
          }
        `
      }} />
    </div>
  );
};

export default DoinksHero;