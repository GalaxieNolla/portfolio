import { createFileRoute, Link } from '@tanstack/react-router'
import { Instagram, Mail, ArrowRight } from 'lucide-react'

export const Route = createFileRoute('/modelling')({
  component: Modeling,
})

const gallery = [
  { src: '/images/modelling/diamond.png', photographer: 'Dino Corti', handle: '@therealdinocorti' },
  { src: '/images/modelling/side%20profile.png', photographer: 'Isaac Alvarez', handle: '@isaacealvarez' },
  { src: '/images/modelling/editorial.png', photographer: 'Isaac Alvarez', handle: '@isaacealvarez' },
  { src: '/images/modelling/wrap.png', photographer: 'Dino Corti', handle: '@therealdinocorti' },
  { src: '/images/modelling/boom.png', photographer: 'Dino Corti', handle: '@therealdinocorti' },
  { src: '/images/modelling/ribbon.png', photographer: 'Dino Corti', handle: '@therealdinocorti' },
  { src: '/images/modelling/hair%20outside.png', photographer: 'Isaac Alvarez', handle: '@isaacealvarez' },
  { src: '/images/modelling/window.png', photographer: 'Isaac Alvarez', handle: '@isaacealvarez' },
]

function Modeling() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      {/* Header */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-start">
        {/* Left: Title + Bio + Links */}
        <div>
          <p className="text-purple-400 font-semibold text-sm uppercase tracking-[0.3em] mb-4">
            Creative Portfolio
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Modeling & Performance</h1>

          <div className="space-y-4 text-slate-300 text-lg leading-relaxed mb-8">
            <p>
              As an emerging actress with a foundation in stage theater and short film, I am expanding my creative reach into the{' '}
              <span className="text-white">commercial, editorial, and fashion landscape</span>. I view myself as a{' '}
              <span className="text-white font-medium">blank canvas</span>—an anchor that translates a vision into a visual narrative through movement, presence, and hues.
            </p>
            <p>
              Currently open for collaborations -- whether it is for shoots, film, or other creative projects!
            </p>
          </div>

          <div className="flex gap-6 mb-6">
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

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-purple-400 font-semibold group"
          >
            Start a Collaboration <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Right: Video */}
        <div className="rounded-2xl overflow-hidden border border-white/5 aspect-video">
          <iframe
            src="https://www.youtube.com/embed/ZdJ3fKER3JY"
            title="Performance Reel"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
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
              alt={item.photographer}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
              <p className="text-purple-400 text-sm font-medium tracking-wide">
                Photo by {item.photographer}
              </p>
              {item.handle && (
                <div className="flex items-center gap-1.5 mt-1">
                  <Instagram size={12} className="text-purple-400/80" />
                  <p className="text-purple-400 text-xs">{item.handle}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
