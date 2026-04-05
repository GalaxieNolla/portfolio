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
        <p className="text-slate-400 text-xl leading-relaxed mb-10 max-w-2xl">
          I’m Alexia Gallon. Based at the Berkeley Risk and Security Lab, I specialize in 
          algorithmic accountability, model evaluation, and the ethical evolution of digital architectures.
        </p>
        
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

      {/* Quick Access Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-8 rounded-3xl bg-slate-900/50 border border-white/5 hover:border-purple-500/30 transition-colors group">
          <Code2 className="text-purple-400 mb-6 group-hover:scale-110 transition-transform" size={32} />
          <h3 className="text-xl font-bold text-white mb-3">Software Engineering</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Translating complex, high-stakes security problems into clean, concise, and effective code.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-slate-900/50 border border-white/5 hover:border-purple-500/30 transition-colors group">
          <ShieldCheck className="text-purple-400 mb-6 group-hover:scale-110 transition-transform" size={32} />
          <h3 className="text-xl font-bold text-white mb-3">Security Research</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Investigating how national security priorities shape emerging technology and international cyber strategy.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-slate-900/50 border border-white/5 hover:border-purple-500/30 transition-colors group">
          <Microscope className="text-purple-400 mb-6 group-hover:scale-110 transition-transform" size={32} />
          <h3 className="text-xl font-bold text-white mb-3">Model Evaluation</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Developing frameworks for algorithmic accountability and mitigating bias in predictive systems.
          </p>
        </div>
      </div>
    </div>
  )
}
