import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight, BookOpen, ShieldCheck, Presentation } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: Home,
})

const sections = [
  {
    icon: BookOpen,
    label: 'For Researchers & Analysts',
    title: 'Research',
    description:
      'Exploring the intersection of AI ethics, security policy, and geopolitics at the Berkeley Risk and Security Lab.',
    to: '/research',
    color: 'from-indigo-600 to-indigo-800',
    badge: 'Security & Policy',
  },
  {
    icon: ShieldCheck,
    label: 'For Technical Teams',
    title: 'Projects',
    description:
      'Data science tools and software solutions built with Python, Java, and SQL, focusing on technical rigor and scalability.',
    to: '/projects',
    color: 'from-slate-700 to-slate-900',
    badge: 'Data Science',
  },
  {
    icon: Presentation,
    label: 'For Students & Educators',
    title: 'Teaching',
    description:
      'Instructional materials and ethical frameworks developed as a UGSI for Data C104: Human Contexts and Ethics of Data.',
    to: '/teaching',
    color: 'from-amber-700 to-orange-900',
    badge: 'Instruction',
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
            Researcher · Data Scientist · Educator
          </p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Alexia Gallon
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
            I study how algorithmic systems intersect with global security and social equity. 
            Currently a Data Science & Political Science student at UC Berkeley.
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
          Interested in my work at the lab?&nbsp;
          <Link to="/research" className="underline hover:text-amber-900">Research</Link>
          {' '}is for policy and security teams —{' '}
          <Link to="/teaching" className="underline hover:text-amber-900">Teaching</Link>
          {' '}covers my work with Data C104 at Berkeley.
        </p>
      </section>

      {/* Three main sections */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-slate-900 mb-2 text-center">Portfolio & Work</h2>
        <p className="text-slate-500 text-center mb-12">Bridging technical data science with human-centered policy.</p>
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
            { num: '2026', label: 'Expected Graduation' },
            { num: '2', label: 'Lab Projects' },
            { num: '100+', label: 'Students Mentored' },
            { num: '3.9+', label: 'Academic Focus' },
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
