import { createFileRoute, Link } from '@tanstack/react-router'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { ArrowRight, Download, MapPin, GraduationCap, Lightbulb } from 'lucide-react'

export const Route = createFileRoute('/about')({
  component: About,
})

const skills = {
  Technical: ['Python', 'Java', 'SQL', 'Linux', 'Git', 'LaTeX', 'PyTorch', 'Data Mining'],
  Domain: ['AI Ethics', 'Cybersecurity', 'Political Science', 'Geopolitics', 'Public Policy'],
  Professional: ['Research', 'Teaching (UGSI)', 'Communication', 'Technical Writing'],
}

const timeline = [
  {
    year: '2025 – Present',
    role: 'Data C104 UGSI / Teaching Assistant',
    org: 'UC Berkeley CDSS',
    desc: 'Leading discussion sections on algorithmic accountability, the principle-practice gap, and ethics.',
    icon: GraduationCap,
  },
  {
    year: '2025 – Present',
    role: 'Research Apprentice',
    org: 'Berkeley Risk and Security Lab (BRSL)',
    desc: "(1) Analyzing China's 14th Five-Year Plans with Intel Fellow Matthew Studer, (2) tracking Russian & Chinese spyware with Dr. Elaine Korzak, and (3) creating unique solutions to address AI integration into nuclear weapons operations.",
    icon: Lightbulb,
  },
  {
    year: '2022 – Present',
    role: 'B.A. Data Science & Political Science',
    org: 'UC Berkeley',
    desc: 'Focused on the intersection of technology, policy, and human-computer interaction.',
    icon: GraduationCap,
  },
]

function About() {
  return (
    <div className="max-w-5xl mx-auto px-4 pt-32 pb-20"> {/* Standardized padding */}
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row gap-12 items-start mb-24">
        <div className="flex-1">
          <p className="text-purple-400 font-semibold text-sm uppercase tracking-[0.3em] mb-4">About Me</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight tracking-tight">
            Data scientist, researcher,<br />and policy analyst.
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed mb-6">
            I'm Alexia Gallon — a Software Engineer and Researcher at the Berkeley Risk and Security Lab, focused on building resilient systems at the intersection of tech and policy.
          </p>
          <p className="text-slate-400 leading-relaxed mb-6">
            I’m driven by a deep curiosity for how digital architectures shape our world—and a commitment towards model evaluation and algorithmic accountability.
          </p>
          <p className="text-slate-500 italic leading-relaxed mb-10">
            In my free time, I enjoy feeding my creative spirit.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link
              to="/research"
              className="inline-flex items-center gap-2 bg-purple-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-purple-500 transition-all text-sm shadow-lg shadow-purple-500/20"
            >
              View Research <ArrowRight size={16} />
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 border border-white/10 text-slate-300 font-bold px-6 py-3 rounded-xl hover:bg-white/5 transition-all text-sm"
            >
              <Download size={16} /> Download CV
            </a>
          </div>
        </div>

        {/* Headshot with hover effect */}
        <div className="md:w-80 shrink-0">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <img
              src="/headshot.png" 
              alt="Alexia Gallon"
              className="relative w-full rounded-2xl object-cover shadow-2xl border border-white/10 aspect-[4/5]"
            />
          </div>
          <div className="mt-6 flex items-center gap-2 text-slate-500 text-xs uppercase tracking-widest justify-center">
            <MapPin size={14} className="text-purple-500" />
            <span>Berkeley, CA</span>
          </div>
        </div>
      </div>

      <Separator className="mb-20 bg-white/5" />

      {/* Skills Section */}
      <section className="mb-24">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center">
            <Lightbulb size={18} className="text-purple-400" />
          </div>
          <h2 className="text-2xl font-bold text-white">Skills & Expertise</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] mb-6">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-3 py-1 text-xs bg-white/5 text-slate-300 border border-white/5 hover:border-purple-500/30 transition-colors">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Separator className="mb-20 bg-white/5" />

      {/* Timeline Section */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-12">Background</h2>
        <div className="relative pl-8 border-l border-white/5 space-y-12">
          {timeline.map((item) => {
            const Icon = item.icon
            return (
              <div key={`${item.role}-${item.year}`} className="relative group">
                <div className="absolute -left-[2.55rem] w-10 h-10 bg-[#05050a] border border-white/10 rounded-xl flex items-center justify-center group-hover:border-purple-500 transition-colors">
                  <Icon size={16} className="text-purple-400" />
                </div>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] mb-2">{item.year}</p>
                <h3 className="text-xl font-bold text-white mb-1">{item.role}</h3>
                <p className="text-purple-400 text-sm font-semibold mb-4">{item.org}</p>
                <p className="text-slate-400 text-base leading-relaxed max-w-2xl">{item.desc}</p>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
