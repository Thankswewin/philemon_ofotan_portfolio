import React from 'react';
import { NeoCard } from './ui/NeoCard';

const SKILLS = [
    "Python", "JavaScript", "TypeScript", "Node.js", "FastAPI", "LangChain", "OpenAI API", "Gemini API", "Pinecone", "PostgreSQL", "Supabase", "Next.js", "Tailwind"
];

const SERVICES = [
    { title: "AI Assistants", desc: "Custom chatbots & agents" },
    { title: "Process Automation", desc: "Workflow optimization" },
    { title: "Internal Tools", desc: "Admin panels & Dashboards" },
    { title: "RAG Systems", desc: "Knowledge retrieval setup" },
];

export const StackSection: React.FC = () => {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* SKILLS GRID */}
            <div>
                <h3 className="text-4xl font-black uppercase mb-8 flex items-center gap-3">
                    <span className="w-8 h-8 bg-neo-purple border-2 border-black block"></span>
                    Tech_Stack
                </h3>
                <div className="flex flex-wrap gap-3">
                    {SKILLS.map((skill, idx) => (
                        <div 
                            key={skill} 
                            className="border-2 border-neo-black bg-white px-4 py-2 font-bold font-mono shadow-[4px_4px_0px_0px_#121212] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-default uppercase"
                        >
                            {skill}
                        </div>
                    ))}
                </div>

                <div className="mt-12 p-6 border-4 border-neo-black bg-neo-black text-white relative">
                    <div className="absolute -top-4 -right-4 bg-neo-green border-2 border-black px-2 py-1 font-bold text-xs text-black transform rotate-3 shadow-sm">
                        CURRENT_STATUS
                    </div>
                    <h4 className="font-black text-xl uppercase mb-2 text-neo-yellow">Focus Areas:</h4>
                    <p className="font-mono text-sm text-gray-300">
                        Specializing in <span className="text-white font-bold">Large Language Models (LLMs)</span>, Prompt Engineering, and building Retrieval Augmented Generation (RAG) pipelines for business data.
                    </p>
                </div>
            </div>

            {/* SERVICES LIST */}
            <div>
                <h3 className="text-4xl font-black uppercase mb-8 flex items-center gap-3">
                    <span className="w-8 h-8 bg-neo-blue border-2 border-black block"></span>
                    Capabilities
                </h3>
                <div className="flex flex-col gap-4">
                    {SERVICES.map((service, idx) => (
                        <NeoCard key={idx} noPadding className="flex-row group cursor-pointer hover:bg-neo-yellow transition-colors duration-300">
                            <div className="p-4 flex justify-between items-center w-full">
                                <div>
                                    <h5 className="font-bold uppercase text-lg">{service.title}</h5>
                                    <p className="font-mono text-xs text-gray-600 group-hover:text-black">{service.desc}</p>
                                </div>
                                <div className="w-8 h-8 border-2 border-black bg-white flex items-center justify-center font-bold">
                                    {idx + 1}
                                </div>
                            </div>
                        </NeoCard>
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
};