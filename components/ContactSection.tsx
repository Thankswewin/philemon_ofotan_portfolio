import React from 'react';
import { NeoButton } from './ui/NeoButton';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="bg-neo-black text-white py-24 border-t-4 border-white relative overflow-hidden">
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 opacity-20" 
             style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <div className="inline-block bg-neo-red text-white px-4 py-1 font-mono text-sm font-bold border-2 border-white mb-6 animate-bounce">
                OPEN FOR WORK
            </div>
            
            <h2 className="text-6xl md:text-8xl font-black uppercase leading-none mb-8 text-stroke-white">
                Let's Build<br/>Intelligence.
            </h2>
            
            <p className="font-mono text-gray-400 mb-12 max-w-xl mx-auto">
                Ready to disrupt the ordinary? I am currently accepting new contracts for AI development and automation projects.
            </p>

            <div className="flex flex-col md:flex-row gap-6 justify-center">
                <a href="mailto:pheelymon@gmail.com">
                    <NeoButton size="lg" className="bg-neo-yellow text-neo-black hover:bg-white border-white text-xl w-full md:w-auto">
                        pheelymon@gmail.com
                    </NeoButton>
                </a>
                <a href="https://www.linkedin.com/in/philemon-ofotan-083266368/" target="_blank" rel="noreferrer">
                    <NeoButton variant="ghost" size="lg" className="text-white border-white hover:bg-white hover:text-black text-xl w-full md:w-auto">
                        LINKEDIN_PROFILE
                    </NeoButton>
                </a>
            </div>
        </div>
    </section>
  );
};