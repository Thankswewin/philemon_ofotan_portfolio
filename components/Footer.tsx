import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neo-white border-t-4 border-neo-black py-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-neo-black"></div>
                <p className="font-mono font-bold text-sm uppercase">
                    © {new Date().getFullYear()} PHILEMON OFOTAN // ALL RIGHTS RESERVED.
                </p>
            </div>
            <div className="flex gap-6 font-mono text-sm underline decoration-2 decoration-neo-red">
                <a href="https://www.instagram.com/pheelymon.oftan/" target="_blank" className="hover:text-neo-red hover:no-underline bg-white">INSTAGRAM</a>
                <a href="https://www.linkedin.com/in/philemon-ofotan-083266368/" target="_blank" className="hover:text-neo-red hover:no-underline bg-white">LINKEDIN</a>
                <a href="https://github.com/Thankswewin" target="_blank" className="hover:text-neo-red hover:no-underline bg-white">GITHUB</a>
            </div>
        </div>
    </footer>
  );
};