import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight, BookOpen, Camera, ShieldCheck, Presentation } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: Home,
})

const sections = [
  {
    icon: BookOpen,
    label: 'For Researchers, Policy Analysts, and Academics',
    title: 'Research',
    description:
      'Exploring the intersection of emerging technology, governance, and international relations.',
    to: '/research',
    /* Updated: Indigo to Deep Purple */
    color: 'from-purple-500 to-blue-500',
    badge: 'Tech Governance',
  },
  {
    icon: ShieldCheck,
    label: 'For Technical Teams',
    title: 'Projects',
    description:
      'Technical systems and software solutions built with Python, Java, and SQL—ranging from data pipelines to cyber training.',
    to: '/projects',
    /* Color: Deep Blue */
    color: 'from-blue-700 to-slate-900',
    badge: 'Software & Systems',
  },
  {
    icon: Camera,
    label: 'For Photographers, Directors, and Agencies',
    title: 'Creative Work',
    description:
      'Commercial, editorial, and artistic visual projects.',
    to: '/modeling',
    /* Color: Electric Blue/Purple */
    color: 'from-indigo-500 via-purple-600 to-pink-500',
    badge: 'Creative & Performance',
  },
]

function Home() {
  return (
    <div className="bg-slate-950">
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden">
        {/* Updated Gradient: Now Purple-tinted */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/30 via-slate-950 to-slate-950" />
        
        <div className="relative max-w-6xl mx-auto px-4 py-28 md:py-40">
          <p className="text-purple-400 text-sm font-semibold uppercase tracking-[0.3em] mb-4">
            Data/Software · Researcher · Creative
          </p>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 tracking-tight">
            Alexia <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Gallon</span>
          </h1>
          
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
            I study how algorithmic systems intersect with global security and social equity. 
            Currently a Data Science & Political Science student at UC Berkeley.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-purple-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-purple-500 transition-all shadow-lg shadow-purple-500/20 group"
            >
              About Me <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-slate-700 text-slate-300 font-semibold px-6 py-3 rounded-lg hover:border-blue-500 hover:text-white transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Audience Guide Banner: Changed from Yellow to Purple Tint */}
      <section className="bg-purple-900/10 border-y border-purple-500/10 py-5 px-4">
        <p className="text-center text-sm text-slate-400 font-medium">
          Interested in my work at the lab?&nbsp;
          <Link to="/research" className="text-purple-400 underline underline-offset-4 hover:text-purple-300">Research</Link>
          {' '}is for policy and security teams —{' '}
          <Link to="/teaching" className="text-blue-400 underline underline-offset-4 hover:text-blue-300">Teaching</Link>
          {' '}covers my work with Data C104 at Berkeley.
        </p>
      </section>

      {/* Portfolio Grid */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-white mb-2 text-center">Portfolio & Work</h2>
        <p className="text-slate-500 text-center mb-12 italic">Bridging technical data science with human-centered policy.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sections.map((s) => {
            const Icon = s.icon
            return (
              <Link
                key={s.to}
                to={s.to}
                className="group relative rounded-2xl overflow-hidden border border-white/5 hover:border-purple-500/30 transition-all shadow-md"
              >
                <div className={`bg-gradient-to-br ${s.color} p-8 h-full text-white`}>
                  <span className="inline-block text-xs font-semibold uppercase tracking-widest bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-3 py-1 mb-6">
                    {s.badge}
                  </span>
                  <div className="mb-4">
                    <Icon size={32} className="opacity-80 group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{s.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-6">{s.description}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold group-hover:gap-2 transition-all">
                    View {s.title} <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="bg-slate-900/50 border-t border-white/5 py-16">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: '2026', label: 'Expected Graduation' },
            { num: '2', label: 'Lab Projects' },
            { num: '100+', label: 'Students Mentored' },
            { num: '3.9+', label: 'Academic Focus' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-bold text-purple-400 mb-1">{stat.num}</p>
              <p className="text-slate-500 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
