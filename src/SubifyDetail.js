import React from 'react';
import { ArrowLeft, Apple, Star, Bell, TrendingUp, Calendar, Zap, Download, DollarSign } from 'lucide-react';
import PageLoader from './components/PageLoader';

const SubifyDetail = () => {
  const features = [
    {
      icon: Bell,
      title: 'Smart Notifications',
      description: 'Get notified before trial ends and one day before payment is due. Never miss a deadline.'
    },
    {
      icon: Calendar,
      title: 'Payment Tracking',
      description: 'Track all your subscription payment dates and amounts in one place. Stay organized.'
    },
    {
      icon: TrendingUp,
      title: 'Monthly & Yearly Stats',
      description: 'Visualize your spending with detailed monthly and yearly statistics. Make informed decisions.'
    },
    {
      icon: DollarSign,
      title: 'Budget Management',
      description: 'Monitor your total subscription costs and manage your budget effectively.'
    }
  ];

  const stats = [
    { label: 'Rating', value: '5.0', icon: Star },
    { label: 'Downloads', value: 'New', icon: Download },
    { label: 'Version', value: '1.0.0', icon: Zap }
  ];

  return (
    <>
      <PageLoader />
      <div className="min-h-screen bg-zinc-950 text-zinc-100">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-8 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </a>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left: Info */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs font-bold rounded border border-cyan-500/20 animate-pulse">
                    NEW RELEASE
                  </span>
                  <span className="px-3 py-1 bg-zinc-800 text-zinc-400 text-xs font-bold rounded border border-zinc-700">
                    PRODUCTIVITY
                  </span>
                </div>

                <h1 className="font-orbitron text-5xl md:text-7xl font-black text-white leading-tight">
                  Sub<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">ify</span>
                </h1>

                <p className="text-zinc-400 text-lg leading-relaxed">
                  Take control of your subscriptions. Track Netflix, Spotify, and all your favorite services.
                  Get smart reminders before trials end and payments are due. Stay organized, save money.
                </p>

                {/* Stats */}
                <div className="flex flex-wrap gap-6 pt-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                        <stat.icon className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white font-orbitron">{stat.value}</div>
                        <div className="text-xs text-zinc-500 uppercase">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Download Button */}
                <div className="pt-6">
                  <a
                    href="https://apps.apple.com/us/app/subify-subscription-tracker/id6756390234"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-bold overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                  >
                    <div className="relative z-10 flex items-center gap-3">
                      <Apple className="w-5 h-5" />
                      <div className="text-left">
                        <div className="text-xs opacity-80 leading-none mb-1">Download on</div>
                        <div className="leading-none">App Store</div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  </a>
                </div>
              </div>

              {/* Right: Visual */}
              <div className="relative flex justify-center">
                <div className="relative w-full max-w-md transform hover:scale-105 transition-all duration-500">
                  {/* Phone Mockup Frame */}
                  <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-zinc-900 bg-zinc-900">
                    {/* Screenshot */}
                    <img
                      src="/subify/subify1.jpg"
                      alt="Subify App"
                      className="w-full h-auto object-cover"
                    />
                    {/* Shine effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-500/20 backdrop-blur-md rounded-full animate-pulse-slow" />
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500/20 backdrop-blur-md rounded-full" />
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
                Why Subify?
              </h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">
                Everything you need to manage your subscriptions in one beautiful app.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 bg-zinc-900/30 border border-white/5 rounded-xl hover:bg-zinc-900/60 transition-all duration-300 group transform hover:scale-105"
                >
                  <div className="w-12 h-12 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-cyan-400" />
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
                A clean, intuitive interface designed to make subscription management effortless.
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              {/* Main Featured Screenshot */}
              <div className="mb-12 flex justify-center">
                <div className="relative max-w-sm">
                  <div className="rounded-2xl overflow-hidden border-4 border-zinc-800 shadow-2xl transform hover:scale-105 transition-all duration-300">
                    <img
                      src="/subify/subify1.jpg"
                      alt="Subify Popular Services"
                      className="w-full h-auto"
                    />
                  </div>
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 via-transparent to-transparent rounded-2xl pointer-events-none" />
                </div>
              </div>

              {/* Screenshot Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { src: '/subify/subify2.jpg', alt: 'Subify Screenshot 2' },
                  { src: '/subify/subify3.jpg', alt: 'Subify Screenshot 3' },
                  { src: '/subify/subify4.jpg', alt: 'Subify Screenshot 4' }
                ].map((screenshot, index) => (
                  <div
                    key={index}
                    className="relative rounded-xl overflow-hidden border-2 border-zinc-800 shadow-lg transform hover:scale-105 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer group"
                  >
                    <img
                      src={screenshot.src}
                      alt={screenshot.alt}
                      className="w-full h-auto"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section className="py-20 bg-zinc-900/20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                How It Works
              </h2>

              <div className="space-y-6">
                <div className="p-6 bg-zinc-900/40 border border-white/5 rounded-xl">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500 text-white font-bold flex items-center justify-center">
                      1
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-2">Add Your Subscriptions</h3>
                      <p className="text-zinc-400 text-sm">
                        Choose from popular services or add custom subscriptions. Set payment dates, trial periods, and costs.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-zinc-900/40 border border-white/5 rounded-xl">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500 text-white font-bold flex items-center justify-center">
                      2
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-2">Get Smart Reminders</h3>
                      <p className="text-zinc-400 text-sm">
                        Receive notifications before your trial ends and one day before payment is due. Never get surprised by charges.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-zinc-900/40 border border-white/5 rounded-xl">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500 text-white font-bold flex items-center justify-center">
                      3
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-2">Track Your Spending</h3>
                      <p className="text-zinc-400 text-sm">
                        View monthly and yearly statistics. Understand where your money goes and make better decisions.
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
              Ready to Take Control?
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto mb-12">
              Start managing your subscriptions smarter. Free to download, no hidden fees.
            </p>

            <a
              href="https://apps.apple.com/us/app/subify-subscription-tracker/id6756390234"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-bold overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(6,182,212,0.4)]"
            >
              <div className="relative z-10 flex items-center gap-3">
                <Apple className="w-6 h-6" />
                <span>Download for iOS</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>

            <p className="mt-8 text-zinc-600 text-sm">
              Questions? Contact us at{' '}
              <a href="mailto:support@cnblt.studio" className="text-cyan-400 hover:text-cyan-300">
                support@cnblt.studio
              </a>
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default SubifyDetail;
