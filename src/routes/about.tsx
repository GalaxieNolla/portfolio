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
          <p className="text-slate-300 text-lg leading-relaxed mb-6">
            I'm Alexia Gallon — a Software Engineer and Researcher at the Berkeley Risk and Security Lab, focused on building resilient systems at the intersection of tech and policy.
          </p>
          <p className="text-slate-400 leading-relaxed mb-6">
            I’m driven by a deep curiosity for how digital architectures shape our world—and a commitment towards model evaluation and algorithmic accountability. I thrive on translating complex problems into clean, concise, and effective code.
          </p>
          <p className="text-slate-400 italic leading-relaxed mb-8">
            In my free time, I enjoy feeding my creative spirit.
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
              className="inline-flex items-center gap-
