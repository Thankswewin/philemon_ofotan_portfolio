import React, { useEffect, useState } from 'react';
import { NeoButton } from './ui/NeoButton';

export const Navbar: React.FC = () => {
  const [time, setTime] = useState<string>('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime(now.toISOString().split('T')[1].split('.')[0]);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <nav className="sticky top-0 z-50 border-b-4 border-neo-black bg-neo-white relative">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-6">
          <div className="relative">
            <div className="w-12 h-12 bg-neo-black text-white flex items-center justify-center font-black text-2xl border-2 border-neo-yellow shadow-[4px_4px_0px_0px_#FFDE00] hover:rotate-6 transition-transform cursor-pointer">
              <img src="/profile.jpg" alt="P" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="hidden md:block">
            <h1 className="text-3xl font-black tracking-tighter uppercase leading-none">PORTFOLIO</h1>
            <p className="text-xs font-bold bg-neo-yellow inline-block px-1 border border-black">V.3.0.1</p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden lg:flex flex-col items-end font-mono text-xs font-bold border-r-4 border-neo-black pr-6">
            <span>LOCAL_TIME: {time || '00:00:00'}</span>
            <span className="text-neo-green">AVAILABILITY: OPEN</span>
          </div>

          <div className="hidden md:flex gap-3">
            <NeoButton variant="ghost" size="sm" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              Works
            </NeoButton>
            <NeoButton variant="primary" size="sm" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Hire_Me
            </NeoButton>
          </div>

          <div className="md:hidden">
            <div
              className="w-10 h-10 border-4 border-neo-black flex flex-col justify-between p-1 cursor-pointer hover:bg-neo-yellow active:translate-y-1 transition-all"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className={`h-1 w-full bg-neo-black transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></div>
              <div className={`h-1 w-full bg-neo-black transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`h-1 w-full bg-neo-black transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-neo-white border-b-4 border-neo-black p-4 flex flex-col gap-4 shadow-xl animate-in slide-in-from-top-5">
          <div className="flex flex-col items-center font-mono text-xs font-bold border-b-2 border-neo-black pb-4 mb-2">
            <span>LOCAL_TIME: {time || '00:00:00'}</span>
            <span className="text-neo-green">AVAILABILITY: OPEN</span>
          </div>
          <NeoButton variant="ghost" size="lg" className="w-full" onClick={() => {
            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
          }}>
            Works
          </NeoButton>
          <NeoButton variant="ghost" size="lg" className="w-full" onClick={() => {
            document.getElementById('tools')?.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
          }}>
            Demos
          </NeoButton>
          <NeoButton variant="primary" size="lg" className="w-full" onClick={() => {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
          }}>
            Hire_Me
          </NeoButton>
        </div>
      )}
    </nav>
  );
};