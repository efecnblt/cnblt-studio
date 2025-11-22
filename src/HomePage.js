import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageLoader from './components/PageLoader';
import {
  Layers,
  ChevronDown,
  Mail,
  Shield,
  Apple,
  Cpu,
  Code2,
  Menu,
  X,
  ArrowRight
} from 'lucide-react';
import './index.css';

// --- CUSTOM HOOKS & UTILS ---

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const updateMousePosition = (ev) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);
  return mousePosition;
};

// --- COMPONENTS ---

const SpotlightOverlay = () => {
  const { x, y } = useMousePosition();
  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{
        background: `radial-gradient(600px circle at ${x}px ${y}px, rgba(245, 139, 48, 0.15), transparent 80%)`
      }}
    />
  );
};

const GridBackground = () => (
  <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
    {/* Base Grid */}
    <div className="absolute inset-0 bg-zinc-950" />
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: `linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }}
    />
    {/* Floating Particles */}
    <div className="absolute inset-0">
       {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-orange-500/20 blur-xl animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 300 + 50}px`,
              height: `${Math.random() * 300 + 50}px`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              animationDelay: `-${Math.random() * 5}s`
            }}
          />
       ))}
    </div>
  </div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'PROJECTS', href: '#projects' },
    { name: 'STUDIO', href: '#studio' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-zinc-950/80 backdrop-blur-lg border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="/" className="text-2xl font-orbitron font-black tracking-wider text-white flex items-center gap-3 group cursor-pointer">
          <img src="/logo.svg" alt="CNBLT Studio" className="w-10 h-10 group-hover:scale-110 transition-transform duration-300 group-hover:drop-shadow-[0_0_10px_rgba(245,139,48,0.5)]" />
          <span className="group-hover:text-orange-500 transition-colors">CNBLT</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-bold tracking-widest text-zinc-400 hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-px bg-orange-500 transition-all group-hover:w-full" />
            </a>
          ))}
          <a href="#projects" className="px-5 py-2 bg-white text-black text-xs font-bold tracking-wider rounded hover:bg-orange-500 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(245,139,48,0.4)]">
            START GAME
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-zinc-900 border-b border-zinc-800 p-6 flex flex-col gap-4 md:hidden animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-bold text-white py-2 border-b border-zinc-800"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 overflow-hidden">
      <div className="relative z-10 text-center max-w-5xl">

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-[10px] font-bold tracking-widest mb-8 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
          ONLINE & READY
        </div>

        <h1 className="font-orbitron text-7xl md:text-9xl font-black text-white leading-tight tracking-tighter mb-6 relative group cursor-default select-none">
          <span className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-amber-600 opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500"></span>
          <span className="relative inline-block transition-transform duration-300 group-hover:-translate-y-2">HEXA</span>
          <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500 transition-transform duration-300 group-hover:translate-y-2">MERGE</span>
        </h1>

        <p className="font-inter text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up delay-100">
          Crafting experiences that matter. Minimalist design, maximum impact.
          Built by CNBLT Studio.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-200">
          <a
            href="https://apps.apple.com/tr/app/hexamerge-color-merge-puzzle/id6755496409?l=tr"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-white text-black rounded-lg font-bold overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] animate-pulse-slow"
          >
            <div className="relative z-10 flex items-center gap-3">
              <Apple className="w-5 h-5" />
              <div className="text-left">
                <div className="text-[10px] opacity-60 leading-none mb-1">APP STORE</div>
                <div className="leading-none">DOWNLOAD</div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-200 to-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>

          <button className="group px-8 py-4 bg-zinc-900 border border-zinc-800 text-white rounded-lg font-bold flex items-center gap-3 hover:border-orange-500/50 hover:bg-zinc-800 transition-all duration-300 transform hover:scale-105 opacity-50 cursor-not-allowed">
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Android_robot.svg" alt="Android" className="w-5 h-5 invert brightness-200" />
             <div className="text-left">
                <div className="text-[10px] text-zinc-500 leading-none mb-1">GOOGLE PLAY</div>
                <div className="leading-none">COMING SOON</div>
              </div>
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-zinc-600">
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
};

const ProjectCard = () => {
  return (
    <div className="group relative w-full bg-zinc-900/40 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all duration-500 hover:transform hover:scale-[1.02]">
      {/* Scanline Effect on Hover */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/10 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000 ease-in-out z-10 pointer-events-none" />

      <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12 items-center">
        <div className="order-2 md:order-1 space-y-6">
          <div className="flex items-center gap-3">
            <span className="px-2 py-1 bg-green-500/10 text-green-400 text-[10px] font-bold rounded border border-green-500/20 animate-pulse">V1.2.0 LIVE</span>
            <span className="px-2 py-1 bg-zinc-800 text-zinc-400 text-[10px] font-bold rounded border border-zinc-700">PUZZLE</span>
          </div>

          <h3 className="text-4xl font-orbitron font-bold text-white">HexaMerge</h3>
          <p className="text-zinc-400 leading-relaxed">
            A minimalist number puzzle that challenges your spatial thinking.
            Merge hexagonal tiles, plan your moves, and chase high scores.
            Clean design. No ads. Pure focus.
          </p>

          <div className="flex gap-6 pt-4">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">5.0</span>
              <span className="text-xs text-zinc-500 uppercase tracking-wider">App Store</span>
            </div>
            <div className="w-px h-10 bg-zinc-800" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">7</span>
              <span className="text-xs text-zinc-500 uppercase tracking-wider">Downloads</span>
            </div>
          </div>

          <Link to="/projects/hexamerge" className="inline-flex items-center gap-2 text-orange-400 font-bold hover:gap-4 transition-all group-hover/link">
            View Details <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="order-1 md:order-2 relative flex justify-center">
           {/* Screenshot Preview */}
           <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-[2rem] shadow-2xl shadow-orange-900/50 overflow-hidden transform group-hover:scale-105 group-hover:rotate-3 transition-all duration-500">
              {/* Screenshot with gradient overlay */}
              <img
                src="/gamess.jpg"
                alt="HexaMerge Preview"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              {/* Gradient Overlay for better contrast */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/30 via-transparent to-amber-700/30" />

              {/* Decor */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-500/30 backdrop-blur-md rounded-full animate-pulse-slow" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-amber-500/30 backdrop-blur-md rounded-full" />
           </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ icon: Icon, label, value }) => (
  <div className="p-6 bg-zinc-900/30 border border-white/5 rounded-xl hover:bg-zinc-900/60 transition-all duration-300 group transform hover:scale-105 hover:shadow-[0_0_30px_rgba(245,139,48,0.2)]">
    <Icon className="w-8 h-8 text-zinc-600 mb-4 group-hover:text-orange-400 transition-all duration-300 transform group-hover:scale-110" />
    <div className="text-3xl font-bold text-white mb-1 font-orbitron">{value}</div>
    <div className="text-xs text-zinc-500 uppercase tracking-widest">{label}</div>
  </div>
);

const Footer = () => (
  <footer id="contact" className="relative pt-32 pb-12 bg-black overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

    <div className="container mx-auto px-6 text-center">
      <h2 className="font-orbitron text-3xl md:text-5xl font-bold text-white mb-8">
        THE NEXT <span className="text-zinc-600">STORY</span>?
      </h2>
      <p className="text-zinc-400 max-w-xl mx-auto mb-12">
        Your feedback is CNBLT Studio's fuel. Found a bug or just want to say hello?
      </p>

      <a
        href="mailto:support@cnblt.studio"
        className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-zinc-800 bg-zinc-900/50 text-white hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 group"
      >
        <Mail className="w-5 h-5" />
        <span className="font-bold">support@cnblt.studio</span>
      </a>

      <div className="mt-24 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
        <div className="flex items-center gap-6">
          <a href="/privacy-policy" className="hover:text-zinc-400 transition-colors">Privacy Policy</a>
          <a href="/terms" className="hover:text-zinc-400 transition-colors">Terms</a>
        </div>
        <div>
          &copy; {new Date().getFullYear()} CNBLT Studio. All systems operational.
        </div>
      </div>
    </div>
  </footer>
);

export default function HomePage() {
  return (
    <>
      <PageLoader />
      <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-orange-500/30 selection:text-orange-100 cursor-default">
        <GridBackground />
        <SpotlightOverlay />

        <Navbar />

      <main>
        <Hero />

        <section id="projects" className="py-32 relative z-10">
          <div className="container mx-auto px-6">
            <div className="mb-16 flex items-end gap-4">
              <div className="w-12 h-1 bg-orange-500 rounded-full mb-2" />
              <h2 className="font-orbitron text-3xl font-bold text-white">FEATURED PROJECTS</h2>
            </div>
            <ProjectCard />
          </div>
        </section>

        <section id="studio" className="py-32 bg-zinc-900/20 border-y border-white/5 relative z-10 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-orbitron text-3xl font-bold text-white mb-6">
                  <span className="text-orange-500">CODE</span> IS POETRY
                </h2>
                <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                  CNBLT Studio was born from one person's vision but serves a universal purpose:
                  Creating thoughtful applications that blend simplicity with purpose.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                   <StatCard icon={Cpu} label="Performance" value="60FPS" />
                   <StatCard icon={Code2} label="Technology" value="React" />
                   <StatCard icon={Shield} label="Security" value="100%" />
                </div>
              </div>

              <div className="relative p-8 bg-black/50 border border-zinc-800 rounded-xl font-mono text-sm text-zinc-400 overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <div className="absolute top-0 left-0 w-full h-8 bg-zinc-900 border-b border-zinc-800 flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                  <span className="ml-2 text-xs opacity-50">mission_statement.js</span>
                </div>
                <div className="mt-6 space-y-2">
                  <p><span className="text-orange-400">const</span> studio = <span className="text-yellow-400">new</span> Studio();</p>
                  <p>studio.vision = <span className="text-green-400">"Minimalism"</span>;</p>
                  <p>studio.mission = <span className="text-green-400">"Create timeless apps"</span>;</p>
                  <p><span className="text-purple-400">while</span> (alive) {'{'}</p>
                  <p className="pl-4">studio.code();</p>
                  <p className="pl-4">studio.design();</p>
                  <p className="pl-4">studio.inspire();</p>
                  <p>{'}'}</p>
                  <p className="animate-pulse text-orange-500">_</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      </div>
    </>
  );
}
