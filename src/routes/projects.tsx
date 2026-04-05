import { createFileRoute } from '@tanstack/react-router'
import { allProjects } from 'content-collections' // Assumes you have a 'projects' collection
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ExternalLink, Github, Terminal, ShieldAlert, Gavel } from 'lucide-center'

export const Route = createFileRoute('/projects')({
  component: Projects,
})

function Projects() {
  // Sort projects by date (newest first)
  const projects = [...allProjects].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-4">
          <img src="/logo.png" alt="Logo" className="h-10 w-10 object-contain opacity-80" />
          <p className="text-indigo-600 font-semibold text-sm uppercase tracking-widest">
            Portfolio & Case Studies
          </p>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Technical Projects</h1>
        <p className="text-slate-600 text-lg max-w-2xl leading-relaxed">
          Technical implementations in **algorithmic fairness**, **system security**, and **data science**.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.length > 0 ? (
          projects.map((project) => (
            <Card key={project._meta.path} className="border-slate-200 hover:shadow-lg transition-all group">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <div className="flex gap-2">
                    {project.tags?.includes('Security') && <ShieldAlert size={18} className="text-red-500" />}
                    {project.tags?.includes('Policy') && <Gavel size={18} className="text-indigo-500" />}
                  </div>
                  <span className="text-xs font-mono text-slate-400">{new Date(project.date).getFullYear()}</span>
                </div>
                <CardTitle className="group-hover:text-indigo-600 transition-colors">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags?.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-[10px] uppercase">{tag}</Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.github && (
                    <a href={project.github} className="text-slate-600 hover:text-slate-900 flex items-center gap-1 text-sm font-medium">
                      <Github size={14} /> Code
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} className="text-indigo-600 hover:text-indigo-800 flex items-center gap-1 text-sm font-medium">
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="col-span-full py-20 text-center border-2 border-dashed border-slate-200 rounded-2xl bg-slate-50/50">
            <Terminal size={32} className="mx-auto text-slate-400 mb-4" />
            <p className="text-slate-500 font-medium">No projects found. Add .md files to your /content/projects folder.</p>
          </div>
        )}
      </div>
    </div>
  )
}