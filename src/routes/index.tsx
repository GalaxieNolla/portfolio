import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight, Code2, ShieldCheck, Microscope } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="max-w-7xl mx-auto px-4 pt-32 pb-20">
      {/* Hero Section */}
      <div className="max-w-3xl mb-24">
        <p className="text-purple-400 font-semibold text-sm uppercase tracking-[0.3em] mb-6">
          Software Engineer & Researcher
        </p>
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-[1.1]">
          Building resilient systems at the <span className="text-slate-500">intersection of tech and policy.</span>
        </h1>
        
        {/* Restored Original Bio */}
        <div className="space-y-6 mb-10">
          <p className="text-slate-300 text-xl leading-relaxed max-w-2xl">
            I’m Alexia Gallon — a Software Engineer and Researcher at the Berkeley Risk and Security Lab, focused on building resilient systems at the intersection of tech and policy.
          </p>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
            I’m driven by a deep curiosity for how digital architectures shape our world—and a commitment towards model evaluation and algorithmic accountability. I thrive on translating complex problems into clean, concise, and effective code.
          </p>
          <p className="text-slate-400 italic text-lg leading-relaxed">
            In my free time, I enjoy feeding my creative spirit.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-4">
          <Link
            to="/about"
            className="bg-white text-black font-bold px-8 py-4 rounded-full hover:bg-purple-400 transition-all flex items-center gap-2"
          >
            About Me <ArrowRight size={18} />
          </Link>
          <Link
            to="/modelling"
            className="border border-slate-800 text-white font-bold px-8 py-4 rounded-full hover:bg-slate-900 transition-all"
          >
            Creative Portfolio
          </Link>
        </div>
      </div>

      {/* Restored Original Colored Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Software Engineering - Purple Glow */}
        <div className="p-8 rounded-3xl bg-purple-500/5 border border-purple-500/10 hover:border-purple-500/40 transition-all group">
          <Code2 className="text-purple-400 mb-6 group-hover:scale-110 transition-transform" size={32} />
          <h3 className="text-xl font-bold text-white mb-3">Software Engineering</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Translating complex, high-stakes security problems into clean, concise, and effective code.
          </p>
        </div>

        {/* Security Research - Blue Glow */}
        <div className="p-8 rounded-3xl bg-blue-500/5 border border-blue-500/10 hover:border-blue-500/40 transition-all group">
          <ShieldCheck className="text-blue-400 mb-6 group-hover:scale-110 transition-transform" size={32} />
          <h3 className="text-xl font-bold text-white mb-3">Security Research</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Investigating how national security priorities shape emerging technology and international cyber strategy.
          </p>
        </div>

        {/* Model Evaluation - Pink Glow */}
        <div className="p-8 rounded-3xl bg-pink-500/5 border border-pink-500/10 hover:border-pink-500/40 transition-all group">
          <Microscope className="text-pink-400 mb-6 group-hover:scale-110 transition-transform" size={32} />
          <h3 className="text-xl font-bold text-white mb-3">Model Evaluation</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Developing frameworks for algorithmic accountability and mitigating bias in predictive systems.
          </p>
        </div>
      </div>
    </div>
  )
}
