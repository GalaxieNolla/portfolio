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
    role: 'Data C104 UGSI / Reader',
    org: 'UC Berkeley CDSS',
    desc: 'Leading discussion sections on algorithmic accountability and evaluating student research on AI ethics.',
    icon: GraduationCap,
  },
  {
    year: '2025 – Present',
    role: 'Research Apprentice',
    org: 'Berkeley Risk and Security Lab',
    desc: "Analyzing China's 14th Five-Year Plans and tracking emerging tech priorities under Dr. Elaine Korzak.",
    icon: Lightbulb,
  },
  {
    year: '2021 – Present',
    role: 'BA Data Science & Political Science',
    org: 'UC Berkeley',
    desc: 'Focused on the intersection of national security, algorithmic bias, and human-computer interaction.',
    icon: GraduationCap,
  },
]

function About() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      {/* Hero */}
      <div className="flex flex-col md:flex-row gap-12 items-start mb-16">
        <div className="flex-1">
          <p className="text-purple-400 font-semibold text-sm uppercase tracking-widest mb-3">About Me</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Data scientist, researcher,<br />and policy analyst.
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed mb-4">
            I'm Alexia Gallon — a student at UC Berkeley exploring how data-driven systems 
            intersect with global security and social equity. My work is rooted in the "Three Cs": 
            Creativity, Curiosity, and Communication.
          </p>
          <p className="text-slate-400 leading-relaxed mb-4">
            Through my research at the Berkeley Risk and Security Lab, I investigate how national 
            security priorities shape emerging technology. I also serve as a UGSI for Data C104, 
            helping peers navigate the complex ethical landscapes of modern data science.
          </p>
          <p className="text-slate-400 leading-relaxed mb-8">
            I am passionate about bridging the gap between technical rigor and human-centric policy, 
            with a specific interest in mitigating bias in predictive algorithms and understanding 
            international cyber strategy.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/research"
              className="inline-flex items-center gap-2 bg-purple-600 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-purple-700 transition-colors text-sm"
            >
              View Research <ArrowRight size={14} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-slate-700 text-slate-300 font-semibold px-5 py-2.5 rounded-lg hover:border-slate-500 transition-colors text-sm"
            >
              <Download size={14} /> Download CV
            </Link>
          </div>
        </div>
        <div className="md:w-72">
          {/* Ensure your image is in /public/headshot.jpg */}
          <img
            src="/headshot.jpg" 
            alt="Alexia Gallon"
            className="w-full rounded-2xl object-cover shadow-2xl border border-slate-800"
          />
          <div className="mt-4 flex items-center gap-2 text-slate-500 text-sm">
            <MapPin size={14} />
            <span>Berkeley, CA</span>
          </div>
        </div>
      </div>

      <Separator className="mb-16 bg-slate-800" />

      {/* Skills */}
      <section className="mb-16">
        <div className="flex items-center gap-2 mb-8">
          <Lightbulb size={20} className="text-purple-400" />
          <h2 className="text-2xl font-bold text-white">Skills & Expertise</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm bg-slate-800 text-slate-300 hover:bg-slate-700 border-none">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Separator className="mb-16 bg-slate-800" />

      {/* Timeline */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-10">Background</h2>
        <div className="relative pl-8 border-l-2 border-slate-800 space-y-10">
          {timeline.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.role} className="relative">
                <div className="absolute -left-[2.35rem] w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <Icon size={14} className="text-white" />
                </div>
                <p className="text-xs text-slate-500 font-semibold uppercase tracking-widest mb-1">{item.year}</p>
                <h3 className="text-lg font-bold text-white">{item.role}</h3>
                <p className="text-purple-400 text-sm font-medium mb-2">{item.org}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
