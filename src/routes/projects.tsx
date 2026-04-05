import { createFileRoute } from '@tanstack/react-router'
import { Card, CardContent } from '@/components/ui/card'
import { Code2, Construction, GitBranch, Terminal } from 'lucide-react'

export const Route = createFileRoute('/projects')({
  component: Projects,
})

function Projects() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-4">
          <img 
            src="/logo.png" 
            alt="Logo" 
            className="h-10 w-10 object-contain opacity-90" 
          />
          <p className="text-purple-400 font-semibold text-sm uppercase tracking-widest">
            Software Engineering & Research
          </p>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Technical Projects</h1>
        <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
          A showcase of Alexia Gallon's technical implementations and open-source contributions.
        </p>
      </div>

      {/* Work in Progress Placeholder */}
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl">
            <div className="flex items-start gap-3 text-left p-4 bg-slate-900/60 rounded-lg border border-slate-800">
              <Terminal size={18} className="text-purple-400 mt-1" />
              <div>
                <p className="font-semibold text-slate-200 text-sm">Systems</p>
                <p className="text-xs text-slate-500">Linux troubleshooting & server admin</p>
              </div>
            </div>
            <div className="flex items-start gap-3 text-left p-4 bg-slate-900/60 rounded-lg border border-slate-800">
              <GitBranch size={18} className="text-purple-400 mt-1" />
              <div>
                <p className="font-semibold text-slate-200 text-sm">Java/WebNet</p>
                <p className="text-xs text-slate-500">Data structures & graph algorithms</p>
              </div>
            </div>
            <div className="flex items-start gap-3 text-left p-4 bg-slate-900/60 rounded-lg border border-slate-800">
              <Code2 size={18} className="text-purple-400 mt-1" />
              <div>
                <p className="font-semibold text-slate-200 text-sm">ML Research</p>
                <p className="text-xs text-slate-500">Probability models & optimization</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
