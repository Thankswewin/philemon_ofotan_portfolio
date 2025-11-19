import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProjectsSection } from './components/ProjectsSection';
import { StackSection } from './components/StackSection';
import { ToolsSection } from './components/ToolsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

const MarqueeStrip = ({ text, color = "bg-neo-black", textColor = "text-white", direction = 'left' }: { text: string, color?: string, textColor?: string, direction?: 'left'|'right' }) => (
    <div className={`${color} ${textColor} overflow-hidden py-3 border-y-4 border-neo-black whitespace-nowrap select-none relative z-20`}>
        <div className={`inline-block ${direction === 'left' ? 'animate-marquee' : 'animate-marquee-reverse'}`}>
            <span className="mx-4 font-mono font-bold uppercase text-lg tracking-widest">{text}</span>
            <span className="mx-4 font-mono font-bold uppercase text-lg tracking-widest">{text}</span>
            <span className="mx-4 font-mono font-bold uppercase text-lg tracking-widest">{text}</span>
            <span className="mx-4 font-mono font-bold uppercase text-lg tracking-widest">{text}</span>
            <span className="mx-4 font-mono font-bold uppercase text-lg tracking-widest">{text}</span>
            <span className="mx-4 font-mono font-bold uppercase text-lg tracking-widest">{text}</span>
        </div>
    </div>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col text-neo-black selection:bg-neo-yellow selection:text-black overflow-x-hidden">
      <Navbar />
      
      <main className="flex-grow relative">
        <HeroSection />
        
        <MarqueeStrip text="/// PYTHON /// TYPESCRIPT /// LANGCHAIN /// OPENAI /// GEMINI /// NODE.JS /// FASTAPI /// SUPABASE ///" />
        
        <ToolsSection />

        <StackSection />

        <MarqueeStrip text="/// BUILDING INTELLIGENT AGENTS /// AUTOMATING WORKFLOWS /// DEPLOYING SCALABLE SYSTEMS ///" color="bg-neo-yellow" textColor="text-neo-black" />

        <ProjectsSection />
        
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;