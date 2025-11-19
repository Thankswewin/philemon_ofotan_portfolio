import React from 'react';

interface NeoCardProps {
  children: React.ReactNode;
  title?: string;
  color?: string;
  className?: string;
  noPadding?: boolean;
}

export const NeoCard: React.FC<NeoCardProps> = ({
  children,
  title,
  color = 'bg-neo-white',
  className = '',
  noPadding = false
}) => {
  return (
    <div className={`border-4 border-neo-black shadow-neo flex flex-col h-full transition-transform hover:-translate-y-1 ${color} ${className}`}>
      {title && (
        <div className="border-b-4 border-neo-black p-3 bg-neo-black text-white flex justify-between items-center select-none">
          <h3 className="font-bold uppercase tracking-widest text-sm truncate font-mono">
            <span className="text-neo-yellow mr-2">&gt;&gt;</span>
            {title}
          </h3>
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-neo-white border border-black hover:bg-neo-red cursor-pointer"></div>
            <div className="w-3 h-3 bg-neo-white border border-black hover:bg-neo-blue cursor-pointer"></div>
          </div>
        </div>
      )}
      <div className={`flex-grow relative ${noPadding ? 'p-0' : 'p-6'}`}>
        {children}
      </div>
    </div>
  );
};