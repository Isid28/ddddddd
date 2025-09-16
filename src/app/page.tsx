'use client';

import React, { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setIsSubmitted(true);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <header className="relative z-10 px-6 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {/* Energy Orb Logo - Matching App Design */}
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/25">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                  <path 
                    d="M13 2L4.09 12.97C3.49 13.8 4.11 15 5.16 15H8.5L7.5 22L16.41 11.03C17.01 10.2 16.39 9 15.34 9H12L13 2Z" 
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="absolute inset-0 w-12 h-12 rounded-full border border-cyan-400/30 animate-spin"></div>
              <div className="absolute inset-0 w-12 h-12 rounded-full border border-cyan-300/20 animate-ping"></div>
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                ENERGYPAL
              </span>
              <div className="text-xs text-gray-400 -mt-1">Energy Marketplace</div>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#app-preview" className="text-gray-300 hover:text-white transition-colors">App Preview</a>
            <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">How It Works</a>
            <a href="#waitlist" className="text-gray-300 hover:text-white transition-colors">Join Waitlist</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative px-6 py-16 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              Coming Soon - Global Renewable Energy Marketplace
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Hedge Your Energy Bills with{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Renewable Power
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Buy clean energy directly from producers. 
            <br />
            <span className="text-cyan-400 font-semibold">No grid fees. No markups. Just savings.</span>
          </p>

          {/* Key Benefits - Clean Design */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                  <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Direct Trading</h3>
              <p className="text-gray-400 text-sm">Buy renewable energy directly from verified producers</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                  <path d="M13 2L4.09 12.97C3.49 13.8 4.11 15 5.16 15H8.5L7.5 22L16.41 11.03C17.01 10.2 16.39 9 15.34 9H12L13 2Z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Live Pricing</h3>
              <p className="text-gray-400 text-sm">Real-time energy prices and market tracking</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Zero Grid Fees</h3>
              <p className="text-gray-400 text-sm">Skip expensive transportation costs</p>
            </div>
          </div>
        </div>
      </section>

      {/* App Preview Section */}
      <section id="app-preview" className="px-6 py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Experience the Future of <span className="text-cyan-400">Energy Trading</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Our mobile app brings renewable energy trading to your fingertips with live pricing, 
              smart search, and verified producers.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
            {/* Dashboard Screenshot - Real iPhone Simulator */}
            <div className="text-center">
              <div className="relative mx-auto mb-8">
                <img 
                  src="/dashboard-screenshot.png" 
                  alt="EnergyPal Dashboard - Real App Screenshot"
                  className="w-80 h-auto rounded-[3rem] shadow-2xl shadow-cyan-500/20"
                />
              </div>
              <h4 className="text-2xl font-semibold text-white mb-3">Live Energy Dashboard</h4>
              <p className="text-gray-400 text-lg">Track your renewable energy purchases and savings in real-time</p>
            </div>

            {/* Second Screenshot - Real iPhone Simulator */}
            <div className="text-center">
              <div className="relative mx-auto mb-8">
                <img 
                  src="/marketplace-screenshot.png" 
                  alt="EnergyPal App - Real App Screenshot"
                  className="w-80 h-auto rounded-[3rem] shadow-2xl shadow-green-500/20"
                />
              </div>
              <h4 className="text-2xl font-semibold text-white mb-3">Your Energy App</h4>
              <p className="text-gray-400 text-lg">Experience the future of renewable energy trading</p>
            </div>
          </div>
          
          {/* App Store Badges Section */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-white mb-8">Soon Available On</h3>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              {/* Apple App Store Badge */}
              <div className="bg-gradient-to-b from-gray-900 to-black rounded-2xl p-4 hover:from-gray-800 hover:to-gray-900 transition-all duration-300 cursor-pointer shadow-lg border border-gray-700">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                      <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-gray-300 text-xs font-medium">Download on the</div>
                    <div className="text-white text-xl font-semibold -mt-1">App Store</div>
                  </div>
                </div>
              </div>
              
              {/* Google Play Store Badge */}
              <div className="bg-gradient-to-b from-gray-900 to-black rounded-2xl p-4 hover:from-gray-800 hover:to-gray-900 transition-all duration-300 cursor-pointer shadow-lg border border-gray-700">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5Z" fill="#EA4335"/>
                      <path d="M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12Z" fill="#FBBC04"/>
                      <path d="M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81Z" fill="#EA4335"/>
                      <path d="M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" fill="#34A853"/>
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-gray-300 text-xs font-medium">Get it on</div>
                    <div className="text-white text-xl font-semibold -mt-1">Google Play</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            Why Choose <span className="text-cyan-400">EnergyPal</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center group hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                  <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Lower Energy Bills</h3>
              <p className="text-gray-400">Save money by buying direct from renewable producers</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center group hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">No Grid Fees</h3>
              <p className="text-gray-400">Skip expensive transportation costs and utility markups</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center group hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                  <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Mobile Trading</h3>
              <p className="text-gray-400">Buy and sell renewable energy from your smartphone</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center group hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                  <path d="M13 2L4.09 12.97C3.49 13.8 4.11 15 5.16 15H8.5L7.5 22L16.41 11.03C17.01 10.2 16.39 9 15.34 9H12L13 2Z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Real-Time Market</h3>
              <p className="text-gray-400">Access live pricing from solar and wind producers</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="px-6 py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            How It <span className="text-green-400">Works</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* For Energy Buyers */}
            <div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-8 text-center">For Energy Buyers</h3>
              <div className="space-y-6">
                {[
                  { step: 1, title: "Browse renewable energy offers", desc: "Find solar and wind energy from local producers" },
                  { step: 2, title: "Buy directly from producers", desc: "Skip the middleman and utility markups" },
                  { step: 3, title: "Use energy without grid fees", desc: "Enjoy clean energy without transportation costs" },
                  { step: 4, title: "Save on your energy bills", desc: "See immediate savings on your monthly costs" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">{item.title}</h4>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* For Energy Producers */}
            <div>
              <h3 className="text-2xl font-bold text-green-400 mb-8 text-center">For Energy Producers</h3>
              <div className="space-y-6">
                {[
                  { step: 1, title: "List your renewable energy", desc: "Upload your solar or wind energy availability" },
                  { step: 2, title: "Set your own prices", desc: "Control your pricing and maximize your profits" },
                  { step: 3, title: "Sell directly to consumers", desc: "Connect with buyers without intermediaries" },
                  { step: 4, title: "Earn more from your clean energy", desc: "Get better returns on your renewable investment" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">{item.title}</h4>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Early Access Section */}
      <section id="waitlist" className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Be the First to Trade <span className="text-cyan-400">Renewable Energy</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join our waitlist and get early access to the future of energy trading. 
            Start saving on your energy bills before everyone else.
          </p>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent backdrop-blur-sm"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
                >
                  Join Waitlist
                </button>
              </div>
            </form>
          ) : (
            <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6 max-w-md mx-auto">
              <div className="text-green-400 text-xl font-semibold mb-2">✅ Thank you!</div>
              <p className="text-gray-300">You&apos;re on the waitlist. We&apos;ll notify you when EnergyPal launches!</p>
            </div>
          )}

            <p className="text-gray-400 text-sm mt-6">
              Join thousands of others already waiting for the future of energy trading
            </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-white/5 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
                    <path 
                      d="M13 2L4.09 12.97C3.49 13.8 4.11 15 5.16 15H8.5L7.5 22L16.41 11.03C17.01 10.2 16.39 9 15.34 9H12L13 2Z" 
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <span className="text-xl font-bold text-white">ENERGYPAL</span>
              </div>
              <p className="text-gray-400 mb-4">
                The future of renewable energy trading. Save money, support clean energy, and hedge against rising energy costs.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Features</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Direct Energy Trading</li>
                <li>Mobile App</li>
                <li>Real-time Pricing</li>
                <li>Smart Notifications</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Coming Soon</h4>
              <ul className="space-y-2 text-gray-400">
                <li>iOS App</li>
                <li>Android App</li>
                <li>Energy Storage</li>
                <li>Carbon Credits</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 EnergyPal. All rights reserved. The future of renewable energy trading.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
