import React from 'react';
import { NeoButton } from './ui/NeoButton';
import { NeoCard } from './ui/NeoCard';

export const HeroSection: React.FC = () => {
    return (
        <section className="py-16 px-4 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                {/* LEFT: INTRO */}
                <div className="lg:col-span-7 flex flex-col gap-6 z-10">
                    <div className="bg-neo-green border-4 border-neo-black inline-block w-max px-4 py-1 transform -rotate-1 shadow-neo-sm">
                        <span className="font-bold text-sm uppercase">Available for AI roles & projects</span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black uppercase leading-[0.85] tracking-tighter">
                        AI<br />
                        <span className="text-neo-blue text-stroke-black glitch-hover cursor-default">Engineer</span><br />
                        & Builder.
                    </h1>
                    <p className="font-mono text-lg max-w-lg bg-white p-2 border-l-4 border-neo-black">
                        I am Philemon Ofotan. I build intelligent agents, automations, and data-driven products that solve real problems for teams and businesses.
                    </p>
                    <div className="flex flex-wrap gap-4 mt-4">
                        <NeoButton size="lg" onClick={() => document.getElementById('tools')?.scrollIntoView({ behavior: 'smooth' })}>
                            TRY_AI_TOOLS
                        </NeoButton>
                        <NeoButton variant="secondary" size="lg" onClick={() => window.open('https://github.com/Thankswewin', '_blank')}>
                            GITHUB
                        </NeoButton>
                    </div>
                </div>

                {/* RIGHT: PROFILE CARD */}
                <div className="lg:col-span-5">
                    <NeoCard title="IDENTITY_MATRIX" color="bg-neo-black" className="text-white min-h-[400px]">
                        <div className="flex justify-center mb-6">
                            <div className="w-64 h-64 border-4 border-white bg-gray-800 overflow-hidden relative group">
                                <div className="absolute inset-0 bg-neo-blue mix-blend-overlay opacity-0 group-hover:opacity-20 transition-opacity z-10"></div>
                                <img
                                    src="/profile.jpg"
                                    onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=1000&auto=format&fit=crop' }}
                                    alt="Philemon Ofotan"
                                    className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                        </div>
                        <div className="font-mono text-sm leading-relaxed space-y-2">
                            <div className="border-b border-gray-700 pb-2">
                                <span className="text-gray-500">NAME:</span> <span className="text-neo-yellow font-bold">Philemon Ofotan</span>
                            </div>
                            <div className="border-b border-gray-700 pb-2">
                                <span className="text-gray-500">LOCATION:</span> <span className="text-white">Nigeria</span>
                            </div>
                            <div className="border-b border-gray-700 pb-2">
                                <span className="text-gray-500">SPECIALTY:</span> <span className="text-neo-green">LLMs & Automation</span>
                            </div>

                            <div className="grid grid-cols-3 gap-2 mt-4 pt-2 text-center">
                                <div className="bg-gray-800 p-2 border border-gray-600 hover:bg-gray-700 transition-colors">
                                    <div className="text-xl font-bold text-neo-blue">15+</div>
                                    <div className="text-[10px] text-gray-400">PROJECTS</div>
                                </div>
                                <div className="bg-gray-800 p-2 border border-gray-600 hover:bg-gray-700 transition-colors">
                                    <div className="text-xl font-bold text-neo-red">5+</div>
                                    <div className="text-[10px] text-gray-400">TOOLS</div>
                                </div>
                                <div className="bg-gray-800 p-2 border border-gray-600 hover:bg-gray-700 transition-colors">
                                    <div className="text-xl font-bold text-neo-yellow">3</div>
                                    <div className="text-[10px] text-gray-400">COUNTRIES</div>
                                </div>
                            </div>
                        </div>
                    </NeoCard>
                </div>
            </div>
        </section>
    );
};