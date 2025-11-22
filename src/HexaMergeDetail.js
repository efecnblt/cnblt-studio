import React from 'react';
import { ArrowLeft, Apple, Star, Shield, Zap, Target, Trophy, Download } from 'lucide-react';
import PageLoader from './components/PageLoader';

const HexaMergeDetail = () => {
  const features = [
    {
      icon: Target,
      title: 'Strategic Gameplay',
      description: 'Plan your moves carefully. Every placement matters in this minimalist puzzle experience.'
    },
    {
      icon: Zap,
      title: 'Smooth Performance',
      description: 'Optimized for 60FPS gameplay. Responsive controls that feel natural and intuitive.'
    },
    {
      icon: Shield,
      title: 'No Ads, No Tracking',
      description: 'Your privacy matters. Play without interruptions or data collection.'
    },
    {
      icon: Trophy,
      title: 'Endless Challenge',
      description: 'Compete with yourself. Track your progress and beat your high scores.'
    }
  ];

  const stats = [
    { label: 'Rating', value: '5.0', icon: Star },
    { label: 'Downloads', value: '7', icon: Download },
    { label: 'Version', value: '1.2.0', icon: Zap }
  ];

  return (
    <>
      <PageLoader />
      <div className="min-h-screen bg-zinc-950 text-zinc-100">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 mb-8 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </a>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left: Info */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-green-500/10 text-green-400 text-xs font-bold rounded border border-green-500/20">
                    AVAILABLE NOW
                  </span>
                  <span className="px-3 py-1 bg-zinc-800 text-zinc-400 text-xs font-bold rounded border border-zinc-700">
                    PUZZLE
                  </span>
                </div>

                <h1 className="font-orbitron text-5xl md:text-7xl font-black text-white leading-tight">
                  Hexa<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">Merge</span>
                </h1>

                <p className="text-zinc-400 text-lg leading-relaxed">
                  A minimalist number puzzle that challenges your spatial thinking. Merge hexagonal tiles,
                  plan your moves strategically, and chase high scores. Clean design. No ads. Pure focus.
                </p>

                {/* Stats */}
                <div className="flex flex-wrap gap-6 pt-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                        <stat.icon className="w-5 h-5 text-orange-400" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white font-orbitron">{stat.value}</div>
                        <div className="text-xs text-zinc-500 uppercase">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Download Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <button className="group relative px-8 py-4 bg-white text-black rounded-lg font-bold overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                    <div className="relative z-10 flex items-center gap-3">
                      <Apple className="w-5 h-5" />
                      <div className="text-left">
                        <div className="text-xs opacity-60 leading-none mb-1">Download on</div>
                        <div className="leading-none">App Store</div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-200 to-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  </button>

                  <button className="group px-8 py-4 bg-zinc-900 border border-zinc-800 text-white rounded-lg font-bold flex items-center gap-3 hover:border-orange-500/50 hover:bg-zinc-800 transition-all duration-300">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Android_robot.svg" alt="Android" className="w-5 h-5 invert brightness-200" />
                    <div className="text-left">
                      <div className="text-xs text-zinc-500 leading-none mb-1">Get it on</div>
                      <div className="leading-none">Google Play</div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Right: Visual */}
              <div className="relative flex justify-center">
                <div className="relative w-full max-w-md transform hover:scale-105 transition-all duration-500">
                  {/* Phone Mockup Frame */}
                  <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-zinc-900 bg-zinc-900">
                    {/* Screenshot */}
                    <img
                      src="/gamess.jpg"
                      alt="HexaMerge Gameplay"
                      className="w-full h-auto object-cover"
                    />
                    {/* Shine effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-500/20 backdrop-blur-md rounded-full animate-pulse-slow" />
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-amber-500/20 backdrop-blur-md rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-zinc-900/20 border-y border-white/5">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-white mb-4">
                Why HexaMerge?
              </h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">
                Designed with simplicity and user experience at its core. Every feature serves a purpose.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 bg-zinc-900/30 border border-white/5 rounded-xl hover:bg-zinc-900/60 transition-all duration-300 group transform hover:scale-105"
                >
                  <div className="w-12 h-12 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-orange-400" />
                  </div>
                  <h3 className="font-orbitron text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Screenshot Gallery Section */}
        <section className="py-20 bg-zinc-950">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-white mb-4">
                See It In Action
              </h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">
                Experience the clean, intuitive interface designed for focused gameplay.
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              {/* Main Featured Screenshot */}
              <div className="mb-12 flex justify-center">
                <div className="relative max-w-sm">
                  <div className="rounded-2xl overflow-hidden border-4 border-zinc-800 shadow-2xl transform hover:scale-105 transition-all duration-300">
                    <img
                      src="/gamess.jpg"
                      alt="HexaMerge Gameplay"
                      className="w-full h-auto"
                    />
                  </div>
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 via-transparent to-transparent rounded-2xl pointer-events-none" />
                </div>
              </div>

              {/* Screenshot Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { src: '/gamess2.jpg', alt: 'HexaMerge Screenshot 2' },
                  { src: '/gamess3.jpg', alt: 'HexaMerge Screenshot 3' },
                  { src: '/gamess4.jpg', alt: 'HexaMerge Screenshot 4' },
                  { src: '/gamess5.jpg', alt: 'HexaMerge Screenshot 5' }
                ].map((screenshot, index) => (
                  <div
                    key={index}
                    className="relative rounded-xl overflow-hidden border-2 border-zinc-800 shadow-lg transform hover:scale-105 hover:border-orange-500/50 transition-all duration-300 cursor-pointer group"
                  >
                    <img
                      src={screenshot.src}
                      alt={screenshot.alt}
                      className="w-full h-auto"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-orange-500/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How to Play Section */}
        <section className="py-20 bg-zinc-900/20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                How to Play
              </h2>

              <div className="space-y-6">
                <div className="p-6 bg-zinc-900/40 border border-white/5 rounded-xl">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500 text-white font-bold flex items-center justify-center">
                      1
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-2">Place Tiles</h3>
                      <p className="text-zinc-400 text-sm">
                        Drag and drop numbered hexagonal tiles onto the game board. Plan your placement carefully.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-zinc-900/40 border border-white/5 rounded-xl">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500 text-white font-bold flex items-center justify-center">
                      2
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-2">Merge Numbers</h3>
                      <p className="text-zinc-400 text-sm">
                        When three or more identical numbers touch, they merge into the next number. Create chains for higher scores.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-zinc-900/40 border border-white/5 rounded-xl">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500 text-white font-bold flex items-center justify-center">
                      3
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-2">Manage Space</h3>
                      <p className="text-zinc-400 text-sm">
                        The board fills up quickly. Think ahead and manage your space wisely. Game ends when no more moves are possible.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-zinc-900/20 to-black">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-orbitron text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Play?
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto mb-12">
              Join thousands of players enjoying HexaMerge. Free to download, no ads, no tracking.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="group relative px-10 py-5 bg-white text-black rounded-lg font-bold overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                <div className="relative z-10 flex items-center gap-3">
                  <Apple className="w-6 h-6" />
                  <span>Download for iOS</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-200 to-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>

              <button className="group px-10 py-5 bg-zinc-900 border-2 border-zinc-800 text-white rounded-lg font-bold flex items-center gap-3 hover:border-orange-500/50 hover:bg-zinc-800 transition-all duration-300">
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Android_robot.svg" alt="Android" className="w-6 h-6 invert brightness-200" />
                <span>Download for Android</span>
              </button>
            </div>

            <p className="mt-8 text-zinc-600 text-sm">
              Questions? Contact us at{' '}
              <a href="mailto:support@cnblt.studio" className="text-orange-400 hover:text-orange-300">
                support@cnblt.studio
              </a>
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default HexaMergeDetail;
