import React from 'react';
import { Project } from '../types';
import { NeoButton } from './ui/NeoButton';

const PROJECTS: Project[] = [
    {
        id: "CS_01",
        title: "Internal Knowledge Bot",
        description: "RAG pipeline indexing PDFs and internal docs. Uses hybrid search for precise employee answers.",
        tags: ["Python", "LangChain", "Vector DB"],
        link: "https://github.com/Thankswewin/internal-knowledge-qa",
        imageUrl: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop",
        status: 'LIVE'
    },
    {
        id: "CS_02",
        title: "Task Automation Suite",
        description: "AI workflow that converts raw CSV data into natural language reports and email drafts.",
        tags: ["Node.js", "OpenAI", "Automation"],
        link: "https://github.com/Thankswewin/task-automation",
        imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
        status: 'BETA'
    },
    {
        id: "CS_03",
        title: "CSV Insight Explorer",
        description: "Natural language interface for non-technical users to query and visualize CSV datasets.",
        tags: ["React", "Pandas", "FastAPI"],
        link: "https://github.com/Thankswewin/csv-insight-explorer",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        status: 'ARCHIVED'
    },
    {
        id: "CS_04",
        title: "Content Repurposer",
        description: "System to turn long-form articles into multi-platform social posts automatically.",
        tags: ["AI Agents", "Next.js", "Social API"],
        link: "https://github.com/Thankswewin/content-repurposer",
        imageUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop",
        status: 'LIVE'
    }
];

export const ProjectsSection: React.FC = () => {
    return (
        <section id="projects" className="py-16 px-4 bg-neo-blue border-t-4 border-neo-black relative">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000)', backgroundSize: '20px 20px', backgroundPosition: '0 0, 10px 10px' }}></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="bg-neo-black text-white p-4 mb-12 border-4 border-white shadow-neo flex flex-col md:flex-row justify-between items-start md:items-end">
                    <div>
                        <h2 className="text-5xl md:text-7xl font-black uppercase leading-none">Case<br />Studies</h2>
                        <p className="font-mono text-sm mt-2 text-neo-yellow">/ROOT/PROJECTS/ARCHIVE</p>
                    </div>
                    <NeoButton variant="secondary" className="mt-4 md:mt-0" onClick={() => window.open('https://github.com/Thankswewin', '_blank')}>
                        VIEW_GITHUB_REPO
                    </NeoButton>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {PROJECTS.map((project) => (
                        <div key={project.id} className="group relative">
                            {/* Folder Tab */}
                            <div className="w-32 h-8 bg-neo-black text-white text-xs font-bold flex items-center justify-center ml-4 border-x-4 border-t-4 border-neo-black transform translate-y-[4px] z-0">
                                ID_{project.id}
                            </div>

                            {/* Card Content */}
                            <div className="bg-white border-4 border-neo-black p-4 shadow-neo transition-all duration-200 group-hover:-translate-y-2 group-hover:shadow-neo-lg relative z-10 flex flex-col h-full min-h-[450px]">
                                <div className="mb-4 pb-4 border-b-4 border-black">
                                    <div className="flex justify-between items-start mb-2">
                                        <span className={`text-xs font-bold px-2 py-1 text-white uppercase border-2 border-black ${project.status === 'LIVE' ? 'bg-neo-green' :
                                                project.status === 'BETA' ? 'bg-neo-orange' : 'bg-gray-500'
                                            }`}>
                                            {project.status}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-black uppercase leading-tight">{project.title}</h3>
                                </div>

                                <div className="bg-gray-100 border-2 border-black h-48 overflow-hidden relative mb-4 group-hover:border-neo-blue transition-colors">
                                    <img
                                        src={project.imageUrl}
                                        alt={project.title}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110"
                                    />
                                    {/* Scanline overlay */}
                                    <div className="absolute inset-0 bg-[url('https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHJ5bnh4ODQ5dGR5bnh4ODQ5dGR5bnh4ODQ5dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/l41lFw057lAJQMxv2/giphy.gif')] opacity-10 pointer-events-none mix-blend-overlay"></div>
                                </div>

                                <p className="font-mono text-sm mb-4 flex-grow border-l-2 border-neo-yellow pl-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-[10px] font-bold bg-neo-black text-white px-2 py-1 uppercase">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <a href={project.link} target="_blank" rel="noreferrer" className="mt-auto">
                                    <NeoButton size="md" variant="primary" className="w-full">
                                        SOURCE_CODE &rarr;
                                    </NeoButton>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};