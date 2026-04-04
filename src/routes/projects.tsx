import { createFileRoute } from '@tanstack/react-router'
import { allProjects } from 'content-collections'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Github, Code2 } from 'lucide-react'

export const Route = createFileRoute('/projects')({
  component: Projects,
})

function Projects() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="mb-12">
        <p className="text-slate-500 font-semibold text-sm uppercase tracking-widest mb-3">
          Software Engineering
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Projects</h1>
        <p className="text-slate-600 text-lg max-w-2xl leading-relaxed">
          Open-source tools, full-stack applications, and research-adjacent software across
          systems programming, machine learning, and web development.
        </p>
      </div>

      {/* Audience note */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10 flex gap-4">
        <Code2 size={20} className="text-slate-600 shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-semibold text-slate-800 mb-1">For Engineering Recruiters & Teams</p>
          <p className="text-sm text-slate-600">
            These projects span backend systems, ML pipelines, and full-stack development.
            Source code and live demos are linked below. Detailed write-ups available on request.
          </p>
        </div>
      </div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {allProjects.map((project) => (
          <Card key={project._meta.path} className="flex flex-col border-slate-200 hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl leading-snug">{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <p className="text-slate-600 mb-4 flex-1 leading-relaxed text-sm">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs font-medium">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-4 pt-3 border-t border-slate-100">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 font-medium transition-colors"
                  >
                    <Github size={15} /> GitHub
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
                  >
                    <ExternalLink size={15} /> Live Demo
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
