import { createFileRoute } from '@tanstack/react-router'
import { allResearch } from 'content-collections'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ExternalLink, FileText, ShieldAlert, Globe, Gavel, Beaker } from 'lucide-react'

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
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
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

      {/* Papers Grid */}
      <div className="space-y-6">
        {papers.length > 0 ? (
          papers.map((paper) => (
            <Card key={paper._meta.path} className="bg-slate-900/40 border-slate-800 hover:border-slate-700 transition-colors shadow-2xl">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2 text-xs text-slate-500">
                      <span className="font-semibold text-purple-400 uppercase tracking-wider">{paper.venue || 'Research Report'}</span>
                      <span>•</span>
                      <span>{new Date(paper.date).getFullYear()}</span>
                    </div>
                    <CardTitle className="text-xl leading-snug text-white">{paper.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400 leading-relaxed mb-4 text-sm">{paper.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {paper.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-[10px] uppercase font-bold bg-slate-800 text-slate-300 border-none">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  {paper.pdf && (
                    <a href={paper.pdf} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 font-medium transition-colors">
                      <FileText size={14} /> View Analysis
                    </a>
                  )}
                  {paper.externalUrl && (
                    <a href={paper.externalUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white font-medium transition-colors">
                      <ExternalLink size={14} /> Source Link
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="text-center py-12 border-2 border-dashed border-slate-800 rounded-xl bg-slate-900/20">
            <p className="text-slate-500 font-medium px-4">Currently synthesizing research findings from the Berkeley Risk and Security Lab.</p>
          </div>
        )}
      </div>
    </div>
  )
}
