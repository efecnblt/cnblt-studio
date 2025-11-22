import React, { useState, useEffect } from 'react';

const PageLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-zinc-950 flex items-center justify-center transition-opacity duration-500">
      <div className="relative">
        {/* Logo spinner */}
        <div className="w-20 h-20 rounded-full border-4 border-zinc-800 border-t-orange-500 animate-spin"></div>

        {/* Pulsing center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-orange-500/20 rounded-full animate-pulse"></div>
      </div>

      <div className="absolute bottom-20 left-1/2 -translate-x-1/2">
        <p className="text-zinc-600 font-orbitron text-sm tracking-widest">LOADING...</p>
      </div>
    </div>
  );
};

export default PageLoader;
