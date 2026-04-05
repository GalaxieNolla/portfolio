import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight, Book, Shield, Camera } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="min-h-screen bg-[#05050a] text-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 pt-32 pb-20">
        <div className="max-w-3xl">
          <p className="text-purple-500 font-bold text-sm uppercase tracking-[0.4em] mb-4">
            Data/Software • Researcher • Creative
          </p>
          <h1 className="text-7xl md:text-8xl font-extrabold mb-8 tracking-tight">
            Alexia <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Gallon</span>
          </h1>
          <p className="text-slate-300 text-xl leading-relaxed mb-10 max-w-2xl">
            I study how algorithmic systems intersect with global security and social equity. 
            Currently a Data Science & Political Science student at UC Berkeley.
          </p>
          
          <div className="flex gap-4 mb-16">
            <Link
              to="/about"
              className="bg-purple-600 hover:bg-purple-500 text-white font-bold px-8 py-4 rounded-xl flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(147,51,234,0.4)]"
            >
              About Me <ArrowRight size={20} />
            </Link>
            <Link
              to="/contact"
              className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold px-8 py-4 rounded-xl transition-all"
            >
              Get in Touch
            </Link>
          </div>

          <p className="text-slate-500 text-sm">
            Interested in my work at the lab? <Link to="/research" className="text-purple-400 underline">Research</Link> is for recruiters — <Link to="/projects" className="text-blue-400 underline">Projects</Link> covers tech projects.
          </p>
        </div>
      </div>

      {/* Portfolio & Projects Section */}
      <div className="max-w-7xl mx-auto px-4 py-20 border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Portfolio & Work</h2>
          <p className="text-slate-400 italic font-serif">Transforming theory into practice.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Research Card - Purple/Blue Gradient */}
          <div className="rounded-[2.5rem] bg-gradient-to-br from-sky-600 to-blue-500 p-10 flex flex-col h-[400px] justify-between group hover:scale-[1.02] transition-transform shadow-xl">
            <div>
              <div className="bg-white/20 w-fit p-3 rounded-xl mb-6">
                <Book className="text-white" size={28} />
              </div>
              <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-2">Tech Governance</p>
              <h3 className="text-3xl font-bold text-white mb-4">Research</h3>
              <p className="text-white/80 leading-relaxed">
                Exploring the intersection of emerging technology, governance, and international relations.
              </p>
            </div>
            <Link to="/research" className="flex items-center gap-2 text-white font-bold group-hover:translate-x-2 transition-transform">
              View Research <ArrowRight size={18} />
            </Link>
          </div>

          {/* Projects Card - Deep Blue Gradient */}
          <div className="rounded-[2.5rem] bg-gradient-to-br from-blue-900 to-[#0a1525] p-10 flex flex-col h-[400px] justify-between group hover:scale-[1.02] transition-transform shadow-xl border border-white/5">
            <div>
              <div className="bg-white/10 w-fit p-3 rounded-xl mb-6">
                <Shield className="text-blue-400" size={28} />
              </div>
              <p className="text-blue-400/60 text-xs font-bold uppercase tracking-widest mb-2">Software & Systems</p>
              <h3 className="text-3xl font-bold text-white mb-4">Projects</h3>
              <p className="text-slate-400 leading-relaxed">
                Technical systems and software solutions built with Python, Java, and SQL.
              </p>
            </div>
            <Link to="/projects" className="flex items-center gap-2 text-white font-bold group-hover:translate-x-2 transition-transform">
              View Projects <ArrowRight size={18} />
            </Link>
          </div>

          {/* Creative Card - Purple/Pink Gradient */}
          <div className="rounded-[2.5rem] bg-gradient-to-br from-purple-500 to-pink-500 p-10 flex flex-col h-[400px] justify-between group hover:scale-[1.02] transition-transform shadow-xl">
            <div>
              <div className="bg-white/20 w-fit p-3 rounded-xl mb-6">
                <Camera className="text-white" size={28} />
              </div>
              <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-2">Creative & Performance</p>
              <h3 className="text-3xl font-bold text-white mb-4">Creative Work</h3>
              <p className="text-white/80 leading-relaxed">
                Commercial, editorial, and artistic visual projects.
              </p>
            </div>
            <Link to="/modelling" className="flex items-center gap-2 text-white font-bold group-hover:translate-x-2 transition-transform">
              View Creative Work <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl md:text-5xl font-extrabold text-white mb-2">2026</p>
            <p className="text-slate-500 text-sm uppercase tracking-widest font-bold">Expected Graduation</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-extrabold text-white mb-2">3</p>
            <p className="text-slate-500 text-sm uppercase tracking-widest font-bold">Publications</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-extrabold text-white mb-2">100+</p>
            <p className="text-slate-500 text-sm uppercase tracking-widest font-bold">Students Mentored</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-extrabold text-white mb-2">3</p>
            <p className="text-slate-500 text-sm uppercase tracking-widest font-bold">Cybersecurity Certs</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
