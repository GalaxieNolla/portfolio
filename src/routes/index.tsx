import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight, BookOpen, Code2, Camera } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: Home,
})

const sections = [
  {
    icon: BookOpen,
    label: 'For Recruiters & Academics',
    title: 'Research',
    description:
      'Published work in machine learning, NLP, and AI fairness — including papers at NeurIPS, ICLR, and CVPR.',
    to: '/research',
    color: 'from-indigo-600 to-indigo-800',
    badge: 'Academia & Industry',
  },
  {
    icon: Code2,
    label: 'For Engineering Teams',
    title: 'Projects',
    description:
      'Open-source tools, full-stack applications, and systems-level software spanning Go, TypeScript, and Python.',
    to: '/projects',
    color: 'from-slate-700 to-slate-900',
    badge: 'Software Engineering',
  },
  {
    icon: Camera,
    label: 'For Photographers & Clients',
    title: 'Modelling',
    description:
      'A curated portfolio of editorial, commercial, and artistic modelling work. Available for bookings worldwide.',
    to: '/modelling',
    color: 'from-rose-800 to-pink-900',
    badge: 'Creative & Editorial',
  },
]

function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/50 via-slate-900 to-slate-900" />
        <div className="relative max-w-6xl mx-auto px-4 py-28 md:py-40">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Researcher · Developer · Model
          </p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Alex Rivera
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
            I work at the intersection of machine learning research, software engineering, and
            creative performance. Welcome to my portfolio — explore whichever world brings you here.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-white text-slate-900 font-semibold px-6 py-3 rounded-lg hover:bg-slate-100 transition-colors"
            >
              About Me <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-slate-500 text-slate-200 font-semibold px-6 py-3 rounded-lg hover:border-slate-300 hover:text-white transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Audience guide */}
      <section className="bg-amber-50 border-y border-amber-100 py-5 px-4">
        <p className="text-center text-sm text-amber-800 font-medium">
          Not sure where to go?&nbsp;
          <Link to="/research" className="underline hover:text-amber-900">Research &amp; Projects</Link>
          {' '}are for recruiters &amp; hiring teams —{' '}
          <Link to="/modelling" className="underline hover:text-amber-900">Modelling</Link>
          {' '}is for photographers &amp; creative clients.
        </p>
      </section>

      {/* Three main sections */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-slate-900 mb-2 text-center">Explore My Work</h2>
        <p className="text-slate-500 text-center mb-12">Three distinct disciplines, one portfolio.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sections.map((s) => {
            const Icon = s.icon
            return (
              <Link
                key={s.to}
                to={s.to}
                className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className={`bg-gradient-to-br ${s.color} p-8 h-full text-white`}>
                  <span className="inline-block text-xs font-semibold uppercase tracking-widest bg-white/20 rounded-full px-3 py-1 mb-6">
                    {s.badge}
                  </span>
                  <div className="mb-4">
                    <Icon size={32} className="opacity-80" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{s.title}</h3>
                  <p className="text-white/75 text-sm leading-relaxed mb-6">{s.description}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold group-hover:gap-2 transition-all">
                    View {s.title} <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Quick stats */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: '3', label: 'Publications' },
            { num: '4+', label: 'Open Source Projects' },
            { num: '5+', label: 'Years Coding' },
            { num: '50+', label: 'Shoots Completed' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-bold text-amber-400 mb-1">{stat.num}</p>
              <p className="text-slate-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
