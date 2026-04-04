import { createFileRoute } from '@tanstack/react-router'
import { allResearch } from 'content-collections'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ExternalLink, FileText, BookOpen, Award } from 'lucide-react'

export const Route = createFileRoute('/research')({
  component: Research,
})

function VenueIcon({ venue }: { venue?: string }) {
  if (!venue) return null
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-700 bg-indigo-50 border border-indigo-100 rounded-full px-2.5 py-0.5">
      <Award size={11} /> {venue}
    </span>
  )
}

function Research() {
  const papers = [...allResearch].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="mb-12">
        <p className="text-indigo-600 font-semibold text-sm uppercase tracking-widest mb-3">
          Academic Work
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Research</h1>
        <p className="text-slate-600 text-lg max-w-2xl leading-relaxed">
          My research focuses on deep learning, NLP, multimodal AI, and algorithmic fairness.
          Publications at NeurIPS, ICLR, and CVPR.
        </p>
      </div>

      {/* Audience note */}
      <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-5 mb-10 flex gap-4">
        <BookOpen size={20} className="text-indigo-600 shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-semibold text-indigo-800 mb-1">For Recruiters & Hiring Managers</p>
          <p className="text-sm text-indigo-700">
            My research demonstrates deep expertise in applied machine learning and a track record
            of peer-reviewed contributions. Full PDFs and code repositories are linked where available.
          </p>
        </div>
      </div>

      {/* Papers */}
      <div className="space-y-6">
        {papers.map((paper) => (
          <Card key={paper._meta.path} className="border-slate-200 hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <VenueIcon venue={paper.venue} />
                    <span className="text-xs text-slate-400">
                      {new Date(paper.date).getFullYear()}
                    </span>
                  </div>
                  <CardTitle className="text-xl leading-snug">{paper.title}</CardTitle>
                </div>
              </div>
              {paper.authors && paper.authors.length > 0 && (
                <p className="text-sm text-slate-500 mt-1">
                  {paper.authors.join(', ')}
                </p>
              )}
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 leading-relaxed mb-4">{paper.description}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {paper.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                {paper.arxiv && (
                  <a
                    href={paper.arxiv}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
                  >
                    <ExternalLink size={14} /> arXiv
                  </a>
                )}
                {paper.pdf && (
                  <a
                    href={paper.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
                  >
                    <FileText size={14} /> PDF
                  </a>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
