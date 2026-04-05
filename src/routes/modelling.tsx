import { createFileRoute, Link } from '@tanstack/react-router'
import { Instagram, Mail, ArrowRight } from 'lucide-react'

export const Route = createFileRoute('/modeling')({
  component: Modeling,
})

const gallery = [
  { src: '/images/modelling/diamond.png', photographer: 'Isaac Alvarez', title: 'Diamond' },
  { src: '/images/modelling/side%20profile.png', photographer: 'Isaac Alvarez', title: 'Side Profile' },
  { src: '/images/modelling/editorial.png', photographer: 'Isaac Alvarez', title: 'Editorial' },
  { src: '/images/modelling/wrap.png', photographer: 'Dino Corti', title: 'Wrap' },
  { src: '/images/modelling/boom.png', photographer: 'Dino Corti', title: 'Boom' },
  { src: '/images/modelling/ribbon.png', photographer: 'Dino Corti', title: 'Ribbon' },
  { src: '/images/modelling/hair%20outside.png', photographer: 'Isaac Alvarez', title: 'Hair Outside' },
  { src: '/images/modelling/window.png', photographer: 'Isaac Alvarez', title: 'Window' },
]

function Modeling() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      {/* Header & Professional Bio */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-start">
        <div>
          <p className="text-purple-400 font-semibold text-sm uppercase tracking-[0.3em] mb-4">
            Creative Portfolio
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">Modeling & Performance</h1>
          
          <div className="flex gap-4">
            <a 
              href="https://instagram.com/gallon_of_optimism" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-400 hover:text-purple-400 transition-colors text-sm font-medium"
            >
              <Instagram size={18} /> @gallon_of_optimism
            </a>
            <Link 
              to="/contact"
              className="flex items-center gap-2 text-slate-400 hover:text-purple-400 transition-colors text-sm font-medium"
            >
              <Mail size={18} /> Booking Inquiries
            </Link>
          </div>
        </div>

        <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
          <p>
            As an emerging actress with a foundation in stage theater and short film, I am expanding my creative reach into the editorial and fashion landscape. I view myself as a <span className="text-white font-medium">blank canvas</span>—an anchor that translates a team's collective vision into a tangible narrative through movement, presence, and expressive storytelling.
          </p>
          <p>
            I am currently focused on portfolio development through high-level collaboration. Whether the project is commercial, editorial, or experimental, I thrive in environments where photographers, stylists, and directors seek a dedicated professional to bring their concepts to life.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 text-purple-400 font-semibold group"
          >
            Start a Collaboration <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Staggered Masonry Layout */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {gallery.map((item) => (
          <div 
            key={item.src} 
            className="relative group break-inside-avoid rounded-2xl overflow-hidden bg-slate-900 border border-white/5"
          >
            <img 
              src={item.src} 
              alt={item.title} 
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />
            
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
              <p className="text-white text-xl font-bold mb-1">{item.title}</p>
              <p className="text-purple-400 text-sm font-medium tracking-wide">
                Photo by {item.photographer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
