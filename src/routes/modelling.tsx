import { createFileRoute, Link } from '@tanstack/react-router'
import { Camera, Mail, Instagram } from 'lucide-react'

export const Route = createFileRoute('/modelling')({
  component: Modelling,
})

// Gallery items with themed gradients – replace src with real photo paths
const gallery = [
  {
    id: 1,
    category: 'Editorial',
    title: 'Autumn Contrast',
    gradient: 'from-rose-900 via-pink-800 to-orange-700',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    id: 2,
    category: 'Commercial',
    title: 'Studio White',
    gradient: 'from-slate-700 via-slate-500 to-slate-400',
    span: '',
  },
  {
    id: 3,
    category: 'Artistic',
    title: 'Blue Hour',
    gradient: 'from-blue-900 via-indigo-800 to-violet-700',
    span: '',
  },
  {
    id: 4,
    category: 'Fashion',
    title: 'Monochrome Noir',
    gradient: 'from-zinc-900 via-zinc-700 to-zinc-500',
    span: '',
  },
  {
    id: 5,
    category: 'Outdoor',
    title: 'Golden Hour',
    gradient: 'from-amber-600 via-orange-500 to-yellow-400',
    span: '',
  },
  {
    id: 6,
    category: 'Editorial',
    title: 'Winter Palette',
    gradient: 'from-sky-800 via-teal-700 to-emerald-600',
    span: 'md:col-span-2',
  },
]

function GalleryCard({ item }: { item: (typeof gallery)[0] }) {
  return (
    <div
      className={`relative group rounded-xl overflow-hidden ${item.span} aspect-square md:aspect-auto md:min-h-52`}
    >
      {/* Gradient placeholder — replace with <img> when photos are available */}
      <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`} />

      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end p-5">
        <div className="translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <span className="text-xs font-semibold uppercase tracking-widest text-white/70 mb-1 block">
            {item.category}
          </span>
          <p className="text-white font-bold text-lg">{item.title}</p>
        </div>
      </div>
    </div>
  )
}

function Modelling() {
  return (
    <div>
      {/* Dark hero */}
      <section className="bg-zinc-950 text-white">
        <div className="max-w-5xl mx-auto px-4 py-24 md:py-32">
          <div className="flex items-center gap-3 mb-6">
            <Camera size={20} className="text-rose-400" />
            <p className="text-rose-400 font-semibold text-sm uppercase tracking-widest">
              Creative Portfolio
            </p>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Modelling
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
            Editorial, commercial, and artistic work spanning studio and location shoots.
            Available for bookings worldwide — collaborating with photographers, brands,
            and creative agencies.
          </p>
          <div className="flex flex-wrap gap-6 text-sm text-zinc-500">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-rose-400 rounded-full" /> Editorial
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-rose-400 rounded-full" /> Commercial
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-rose-400 rounded-full" /> Fashion
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-rose-400 rounded-full" /> Artistic
            </span>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-zinc-900 px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {gallery.map((item) => (
              <GalleryCard key={item.id} item={item} />
            ))}
          </div>
          <p className="text-zinc-600 text-xs text-center mt-6">
            Full portfolio and high-resolution images available upon request.
          </p>
        </div>
      </section>

      {/* Photographer CTA */}
      <section className="bg-zinc-950 text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Together</h2>
          <p className="text-zinc-400 text-lg leading-relaxed mb-8">
            Available for editorial shoots, brand campaigns, look-books, and artistic collaborations.
            Experienced with both film and digital formats, indoor studio and outdoor location work.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-rose-600 hover:bg-rose-700 text-white font-semibold px-7 py-3 rounded-lg transition-colors"
            >
              <Mail size={16} /> Book a Shoot
            </Link>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-zinc-600 hover:border-zinc-400 text-zinc-300 hover:text-white font-semibold px-7 py-3 rounded-lg transition-colors"
            >
              <Instagram size={16} /> Instagram
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 border-t border-zinc-800 pt-12">
            {[
              { num: '50+', label: 'Shoots' },
              { num: '20+', label: 'Photographers' },
              { num: '5+', label: 'Countries' },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-bold text-rose-400 mb-1">{s.num}</p>
                <p className="text-zinc-500 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
