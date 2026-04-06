import { createFileRoute } from '@tanstack/react-router'
import { allResearch } from 'content-collections'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ExternalLink, FileText, ShieldAlert, Globe, Gavel, Beaker, GraduationCap, Search } from 'lucide-react'

export const Route = createFileRoute('/research')({
  component: Research,
})

function Research() {
  const papers = [...allResearch].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-4">
          <img 
            src="/logo.png" 
            alt="Logo" 
            className="h-10 w-10 object-contain opacity-90" 
          />
          <p className="text-purple-400 font-semibold text-sm uppercase tracking-widest">
            Security, Tech, & Policy Research
          </p>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Research Portfolio</h1>
        <div className="space-y-4">
          <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
            I am currently a <strong className="text-white">Research Assistant at the Berkeley Risk and Security Lab (BRSL)</strong>, investigating emerging cyber threats and AI-integration into nuclear weapons systems.
          </p>
          <p className="text-slate-400 text-md max-w-2xl leading-relaxed">
            My previous work has analyzed <strong className="text-slate-200">predictive policing</strong> algorithms, the evolution of <strong className="text-slate-200">Chinese cyber espionage</strong>, and comparative labor force policy.
          </p>
        </div>
      </div>

      {/* Focus Areas */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg flex flex-col items-center text-center">
          <Beaker size={20} className="text-purple-400 mb-2" />
          <p className="text-xs font-bold text-slate-200 uppercase tracking-tight">Risk Analysis</p>
        </div>
        <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg flex flex-col items-center text-center">
          <Gavel size={20} className="text-purple-400 mb-2" />
          <p className="text-xs font-bold text-slate-200 uppercase tracking-tight">Algorithmic Bias</p>
        </div>
        <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg flex flex-col items-center text-center">
          <ShieldAlert size={20} className="text-purple-400 mb-2" />
          <p className="text-xs font-bold text-slate-200 uppercase tracking-tight">Cybersecurity</p>
        </div>
        <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg flex flex-col items-center text-center">
          <Globe size={20} className="text-purple-400 mb-2" />
          <p className="text-xs font-bold text-slate-200 uppercase tracking-tight">Intl. Policy</p>
        </div>
      </div>

      {/* External Profiles */}
      <div className="flex flex-wrap gap-4 mb-12">
        <a 
          href="https://scholar.google.com/citations?user=Dmgb8qQAAAAJ" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-slate-900/50 border border-slate-800 rounded-lg text-slate-300 hover:text-white hover:border-purple-500/50 transition-all text-sm font-medium group"
        >
          <GraduationCap size={16} className="text-purple-400 group-hover:scale-110 transition-transform" />
          Google Scholar
        </a>
        <a 
          href="https://www.
