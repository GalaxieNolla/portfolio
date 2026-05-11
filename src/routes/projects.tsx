import { createFileRoute } from '@tanstack/react-router'
import { Card, CardContent } from '@/components/ui/card'
import { Code2, Construction, GitBranch, Terminal, Github, ExternalLink } from 'lucide-react'

const allProjects = [
  {
    title: "Flow State",
    description: "An Arcane-inspired productivity app that gamifies studying.",
    tags: ["Productivity", "Gamification", "Pomodoro", "Focus", "Personal Project", "Python", "League of Legends"],
    github: "https://github.com/GalaxieNolla/flow-state",
    liveUrl: "https://youtu.be/JJk673GNfQ4",
    content: "An Arcane-inspired productivity app that gamifies studying with a Pomodoro timer, task list, and real-time distraction monitoring with nudges to keep you in the flow state."
  }
]

export const Route = createFileRoute('/projects')({
  component: Projects,
})

function Projects() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-4">
          <img src="/logo.png" alt="Logo" className="h-10 w-10 object-contain opacity-90" />
          <p className="text-purple-400 font-semibold text-sm uppercase tracking-widest">
            Software Engineering & Research
          </p>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Technical Projects</h1>
        <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
          A showcase of Alexia Gallon's technical implementations and open-source contributions.
        </p>
      </div>

      {allProjects.length === 0 ? (
        /* Building in Progress Placeholder */
        <Card className="border-dashed border-2 border-slate-800 bg-slate-900/40 py-16">
          <CardContent className="flex flex-col items-center text-center">
            <div className="bg-slate-800 p-4 rounded-full shadow-lg border border-slate-700 mb-6">
              <Construction size={40} className="text-purple-400" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">Building in Progress</h2>
            <p className="text-slate-400 max-w-md mb-10">
              I'm currently documenting my recent work in systems architecture and
              machine learning. Check back soon for detailed project breakdowns.
            </p>
          </CardContent>
        </Card>
      ) : (
          {allProjects.map((project) => (
            <Card key={project.title} className="bg-slate-900/60 border border-slate-800">
              <CardContent className="p-6">
                {/* YouTube Thumbnail */}
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block mb-4 rounded-lg overflow-hidden group relative"
                  >
                    <img
                      src={`https://img.youtube.com/vi/JJk673GNfQ4/maxresdefault.jpg`}
                      alt={project.title}
                      className="w-full object-cover group-hover:opacity-80 transition-opacity"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-black/60 rounded-full p-3 group-hover:bg-purple-600/80 transition-colors">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  </a>
                )}
                <h2 className="text-xl font-bold text-white mb-2">{project.title}</h2>
                <p className="text-slate-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-slate-800 text-purple-300 px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-slate-400 hover:text-white transition-colors">
                      <Github size={16} /> GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-slate-400 hover:text-purple-400 transition-colors">
                      <ExternalLink size={16} /> Demo
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
