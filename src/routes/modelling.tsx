import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/modeling')({
  component: Modeling,
})

const gallery = [
  { src: '/diamond.png', photographer: 'Isaac Alvarez', title: 'Diamond' },
  { src: '/side profile.png', photographer: 'Isaac Alvarez', title: 'Side Profile' },
  { src: '/editorial.png', photographer: 'Isaac Alvarez', title: 'Editorial' },
  { src: '/wrap.png', photographer: 'Dino Corti', title: 'Wrap' },
  { src: '/boom.png', photographer: 'Dino Corti', title: 'Boom' },
  { src: '/ribbon.png', photographer: 'Dino Corti', title: 'Ribbon' },
  { src: '/hair outside.png', photographer: 'Isaac Alvarez', title: 'Hair Outside' },
  { src: '/window.png', photographer: 'Isaac Alvarez', title: 'Window' },
]

function Modeling() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="mb-16">
        <p className="text-purple-400 font-semibold text-sm uppercase tracking-[0.3em] mb-4">Creative Portfolio</p>
        <h1 className="text-5xl font-bold text-white mb-6">Modeling & Performance</h1>
      </div>

      {/* Staggered Masonry Layout */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {gallery.map((item) => (
          <div key={item.src} className="relative group break-inside-avoid rounded-2xl overflow-hidden bg-slate-900 border border-white/5">
            <img 
              src={item.src} 
              alt={item.title} 
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />
            
            {/* Hover Overlay */}
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
