import React, { useState } from 'react';
import { NeoCard } from './ui/NeoCard';
import { NeoButton } from './ui/NeoButton';
import * as GeminiService from '../services/geminiService';

// --- SHARED COMPONENTS ---
const ToolHeader = ({ desc, stack, repoLink }: { desc: string, stack: string[], repoLink: string }) => (
  <div className="mb-4 border-b-2 border-black pb-3">
    <p className="font-mono text-sm font-bold leading-tight mb-3">{desc}</p>
    <div className="flex justify-between items-end">
      <div className="flex flex-wrap gap-1">
        {stack.map(s => (
          <span key={s} className="text-[10px] font-bold bg-gray-200 px-1 border border-gray-400 uppercase">{s}</span>
        ))}
      </div>
      <a href={repoLink} target="_blank" rel="noreferrer" className="text-[10px] font-bold underline hover:bg-neo-yellow hover:no-underline px-1 transition-colors">
        [VIEW_REPO]
      </a>
    </div>
  </div>
);

// --- TERMINAL OUTPUT COMPONENT ---
const TerminalOutput = ({ content, color = "text-neo-green" }: { content: string, color?: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Simple parser for **bold** text
  const formatText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index} className="text-white font-bold">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <div className="bg-neo-black border-2 border-black mt-auto flex flex-col shadow-inner min-h-[150px] max-h-60 relative group">
      <div className="bg-gray-800 px-2 py-1 flex justify-between items-center border-b border-gray-700">
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-red-500"></div>
          <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
        </div>
        <button
          onClick={handleCopy}
          className="text-[10px] text-gray-400 hover:text-white uppercase font-mono flex items-center gap-1 transition-colors"
          title="Copy to clipboard"
        >
          {copied ? (
            <span className="text-green-400">COPIED!</span>
          ) : (
            <>
              <span>COPY</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
              </svg>
            </>
          )}
        </button>
      </div>
      <div className={`p-4 font-mono text-xs ${color} overflow-y-auto flex-grow`}>
        <div className="whitespace-pre-wrap leading-relaxed">
          {formatText(content)}
          <span className="animate-pulse inline-block w-2 h-4 bg-current align-middle ml-1"></span>
        </div>
      </div>
    </div>
  );
};

// --- EMAIL ASSISTANT ---
const EmailAssistant = () => {
  const [tone, setTone] = useState('professional');
  const [notes, setNotes] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!notes) return;
    setLoading(true);
    const text = await GeminiService.generateEmail(tone, notes);
    setResult(text);
    setLoading(false);
  };

  return (
    <NeoCard title="AI_EMAIL_BOT.EXE" className="h-full">
      <div className="flex flex-col gap-4 h-full">
        <ToolHeader
          desc="Turn short notes into professional emails automatically."
          stack={["Prompt Eng", "Gemini API", "UX"]}
          repoLink="https://github.com/Thankswewin/ai-email-assistant"
        />

        <div className="flex gap-2">
          <select
            value={tone}
            onChange={(e) => setTone(e.target.value)}
            className="bg-white border-2 border-black p-2 font-mono text-sm w-full outline-none focus:bg-neo-yellow transition-colors"
          >
            <option value="professional">Professional</option>
            <option value="friendly">Friendly</option>
            <option value="direct">Direct</option>
          </select>
        </div>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Enter rough notes here..."
          className="bg-white border-2 border-black p-3 font-mono text-sm h-24 resize-none outline-none focus:bg-gray-50 transition-colors"
        />
        <NeoButton onClick={handleGenerate} disabled={loading} className="w-full">
          {loading ? 'GENERATING...' : 'GENERATE_EMAIL'}
        </NeoButton>
        {result && <TerminalOutput content={result} />}
      </div>
    </NeoCard>
  );
};

// --- SME COPYWRITER ---
const SmeCopywriter = () => {
  const [type, setType] = useState('fashion brand');
  const [platform, setPlatform] = useState('Instagram');
  const [offer, setOffer] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!offer) return;
    setLoading(true);
    const text = await GeminiService.generateSocialCaptions(type, platform, offer);
    setResult(text);
    setLoading(false);
  };

  return (
    <NeoCard title="NAIJA_SME_COPY.APP" className="h-full">
      <div className="flex flex-col gap-4 h-full">
        <ToolHeader
          desc="Generate social media captions tailored for Nigerian small businesses."
          stack={["Localized AI", "Marketing", "Context"]}
          repoLink="https://github.com/Thankswewin/naija-sme-copy-assistant"
        />

        <div className="grid grid-cols-2 gap-2">
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="bg-white border-2 border-black p-2 font-mono text-xs outline-none focus:bg-neo-yellow transition-colors"
          >
            <option value="fashion brand">Fashion</option>
            <option value="food delivery">Food</option>
            <option value="tech startup">Tech</option>
            <option value="hair salon">Salon</option>
          </select>
          <select
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
            className="bg-white border-2 border-black p-2 font-mono text-xs outline-none focus:bg-neo-yellow transition-colors"
          >
            <option value="Instagram">Instagram</option>
            <option value="Twitter">Twitter</option>
            <option value="WhatsApp">WhatsApp</option>
          </select>
        </div>
        <input
          value={offer}
          onChange={(e) => setOffer(e.target.value)}
          placeholder="E.g. 20% off weekend promo"
          className="bg-white border-2 border-black p-3 font-mono text-sm outline-none focus:bg-gray-50 transition-colors"
        />
        <NeoButton onClick={handleGenerate} disabled={loading} className="w-full" variant="secondary">
          {loading ? 'WRITING...' : 'CREATE_CAPTIONS'}
        </NeoButton>
        {result && <TerminalOutput content={result} color="text-neo-yellow" />}
      </div>
    </NeoCard>
  );
};

// --- INTERVIEW PREP ---
const InterviewPrep = () => {
  const [role, setRole] = useState('');
  const [focus, setFocus] = useState('technical');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!role) return;
    setLoading(true);
    const text = await GeminiService.generateInterviewQuestions(role, focus);
    setResult(text);
    setLoading(false);
  };

  return (
    <NeoCard title="INTERVIEW_PREP_BOT" className="h-full">
      <div className="flex flex-col gap-4 h-full">
        <ToolHeader
          desc="Generates practice questions from a job title and focus area."
          stack={["Education", "Few-shot", "RAG-lite"]}
          repoLink="https://github.com/Thankswewin/interview-prep-assistant"
        />

        <div className="flex gap-2">
          <input
            value={role}
            onChange={(e) => setRole(e.target.value)}
            placeholder="Job Title (e.g. Frontend Dev)"
            className="bg-white border-2 border-black p-3 font-mono text-sm w-2/3 outline-none focus:bg-gray-50 transition-colors"
          />
          <select
            value={focus}
            onChange={(e) => setFocus(e.target.value)}
            className="bg-white border-2 border-black p-2 font-mono text-xs w-1/3 outline-none focus:bg-neo-yellow transition-colors"
          >
            <option value="technical">Tech</option>
            <option value="behavioral">Behavior</option>
            <option value="system design">System</option>
          </select>
        </div>
        <NeoButton onClick={handleGenerate} disabled={loading} className="w-full" variant="alert">
          {loading ? 'THINKING...' : 'GET_QUESTIONS'}
        </NeoButton>
        {result && <TerminalOutput content={result} color="text-white" />}
      </div>
    </NeoCard>
  );
};

// --- MEETING NOTES ---
const MeetingNotes = () => {
  const [notes, setNotes] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!notes) return;
    setLoading(true);
    const text = await GeminiService.summarizeMeeting(notes);
    setResult(text);
    setLoading(false);
  };

  return (
    <NeoCard title="MEETING_SUMMARIZER" className="h-full">
      <div className="flex flex-col gap-4 h-full">
        <ToolHeader
          desc="Condenses raw notes into actions, decisions, and highlights."
          stack={["Summarization", "Extraction", "NLP"]}
          repoLink="https://github.com/Thankswewin/meeting-notes-summarizer"
        />

        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Paste meeting notes here..."
          className="bg-white border-2 border-black p-3 font-mono text-sm h-24 resize-none outline-none focus:bg-gray-50 transition-colors"
        />
        <NeoButton onClick={handleGenerate} disabled={loading} className="w-full" variant="primary">
          {loading ? 'ANALYZING...' : 'SUMMARIZE'}
        </NeoButton>
        {result && <TerminalOutput content={result} color="text-neo-blue" />}
      </div>
    </NeoCard>
  );
};

export const ToolsSection: React.FC = () => {
  return (
    <section id="tools" className="py-20 px-4 bg-gray-200 border-t-4 border-neo-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-5xl md:text-6xl font-black uppercase mb-4">Live AI Lab</h2>
          <p className="font-mono text-lg border-l-4 border-neo-red pl-4 max-w-2xl">
            Functional demos running on Gemini 2.5 Flash. <br />
            <span className="bg-neo-yellow text-xs font-bold px-1">INTERACTIVE</span> Try them out below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          <EmailAssistant />
          <SmeCopywriter />
          <InterviewPrep />
          <MeetingNotes />
        </div>
      </div>
    </section>
  );
};
