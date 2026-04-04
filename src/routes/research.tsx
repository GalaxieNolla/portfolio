import { createFileRoute } from '@tanstack/react-router'
import { allResearch } from 'content-collections'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ExternalLink, FileText, ShieldAlert, Globe, Gavel } from 'lucide-react'

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
            className="h-10 w-10 object-contain opacity-80" 
          />
          <p className="text-indigo-600 font-semibold text-sm uppercase tracking-widest">
            Security & Policy Research
          </p>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Research Portfolio</h1>
        <p className="text-slate-600 text-lg max-w-2xl leading-relaxed">
          Alexia Gallon's work examines the sociotechnical impacts of **predictive policing**, 
          the evolution of **cyber espionage**, and the shifting landscape of **International Relations**.
        </p>
      </div>

      {/* Focus Areas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        <div className="p-4 bg-slate-50 border border-slate-100 rounded-lg flex flex-col items-center text-center">
          <Gavel size={20} className="text-indigo-600 mb-2" />
          <p className="text-xs font-bold text-slate-800 uppercase tracking-tight">Predictive Policing</p>
        </div>
        <div className="p-4 bg-slate-50 border border-slate-100 rounded-lg flex flex-col items-center text-center">
          <ShieldAlert size={20} className="text-indigo-600 mb-2" />
          <p className="text-xs font-bold text-slate-800 uppercase tracking-tight">Cyber Espionage</p>
        </div>
        <div className="p-4 bg-slate-50 border border-slate-100 rounded-lg flex flex-col items-center text-center">
          <Globe size={20} className="text-indigo-600 mb-2" />
          <p className="text-xs font-bold text-slate-800 uppercase tracking-tight">Intl. Relations</p>
        </div>
      </div>

      {/* Papers Grid */}
      <div className="space-y-6">
        {papers.length > 0 ? (
          papers.map((paper) => (
            <Card key={paper._meta.path} className="border-slate-200 hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2 text-xs text-slate-400">
                      <span className="font-semibold text-indigo-600 uppercase tracking-wider">{paper.venue || 'Research Report'}</span>
                      <span>•</span>
                      <span>{new Date(paper.date).getFullYear()}</span>
                    </div>
                    <CardTitle className="text-xl leading-snug">{paper.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed mb-4 text-sm">{paper.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {paper.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-[10px] uppercase font-bold bg-slate-100">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  {paper.pdf && (
                    <a href={paper.pdf} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-800 font-medium transition-colors">
                      <FileText size={14} /> View Analysis
                    </a>
                  )}
                  {paper.externalUrl && (
                    <a href={paper.externalUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 font-medium transition-colors">
                      <ExternalLink size={14} /> Source Link
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="text-center py-12 border-2 border-dashed border-slate-200 rounded-xl bg-slate-50/30">
            <p className="text-slate-500 font-medium">Currently digitizing research findings on Chinese cyber operations and algorithmic bias in law enforcement.</p>
          </div>
        )}
      </div>
    </div>
  )
}
