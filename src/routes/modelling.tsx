import { createFileRoute, Link } from '@tanstack/react-router'
import { Camera, Mail, Instagram } from 'lucide-react'

export const Route = createFileRoute('/modelling')({
  component: Modelling,
})

const galleryCollections = [
  {
    photographer: "Isaac Alvarez",
    description: "Cinematic portraiture and high-end editorial photography.",
    images: [
      "/images/modelling/editorial.png",
      "/images/modelling/hair%20outside.png",
      "/images/modelling/side%20profile.png",
      "/images/modelling/window.png",
    ]
  },
  {
    photographer: "Dino Corti",
    description: "Dynamic studio work and artistic fashion captures.",
    images: [
      "/images/modelling/boom.png",
      "/images/modelling/diamond.png",
      "/images/modelling/ribbon.png",
      "/images/modelling/wrap.png",
    ]
  }
]

const allImages = galleryCollections.flatMap((collection) => 
  collection.images.map((imgUrl, index) => ({
    id: `${collection.photographer}-${index}`,
    url: imgUrl,
    photographer: collection.photographer,
    description: collection.description
  }))
)

function GalleryCard({ item }: { item: typeof allImages[0] }) {
  return (
    /* 1. Removed fixed 'aspect-[3/4]' 
       2. Added 'mb-4' and 'break-inside-avoid' for the Masonry flow
    */
    <div className="relative group rounded-2xl overflow-hidden mb-4 break-inside-avoid border border-white/5 bg-slate-900 shadow-xl transition-all duration-500 hover:border-purple-500/30">
      <img 
        src={item.url} 
        alt={`Photo by ${item.photographer}`} 
        className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
      />
      
      {/* Overlay: Updated to Blue/Purple Theme */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <span className="text-xs text-blue-400 font-bold uppercase tracking-widest mb-1">
          {item.photographer}
        </span>
        <p className="text-slate-300 text-sm leading-relaxed line-clamp-2">
          {item.description}
        </p>
      </div>
    </div>
  )
}

function Modelling() {
  return (
    <div className="bg-slate-950 text-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-white/5">
        {/* Ambient background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <Camera size={20} className="text-purple-500" />
            <p className="text-purple-400 font-bold text-sm uppercase tracking-[0.2em]">
              Creative Portfolio
            </p>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
            Modelling <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">& Art</span>
          </h1>
          
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
            Visual storytelling through editorial and commercial lens. Available for 
            global collaborations at the intersection of fashion and technology.
          </p>
          
          <div className="flex flex-wrap gap-3">
            {['Editorial', 'Commercial', 'Fashion', 'Artistic'].map((tag) => (
              <span key={tag} className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-slate-300 text-[10px] font-bold uppercase tracking-widest">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Staggered Masonry Gallery Grid */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* This is the magic part: 'columns-1 sm:columns-2 lg:columns-3'
              It creates the staggered Pinterest-style layout automatically.
          */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {allImages.map((img) => (
              <GalleryCard key={img.id} item={img} />
            ))}
          </div>
          
          <p className="text-slate-600 text-xs text-center mt-16 italic tracking-wide">
            High-resolution tearsheets and digital portfolio available upon request.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-white tracking-tight">Start a Project</h2>
          <p className="text-slate-400 text-lg mb-12">
            Currently booking for Summer 2026 brand campaigns and editorial features.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-bold px-10 py-4 rounded-full transition-all shadow-lg shadow-purple-900/20 group"
            >
              <Mail size={18} className="group-hover:-rotate-12 transition-transform" /> Book a Shoot
            </Link>
            <a
              href="https://instagram.com/alexiagallon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-white/10 hover:border-blue-500/50 text-slate-300 hover:text-blue-400 font-bold px-10 py-4 rounded-full transition-all backdrop-blur-sm"
            >
              <Instagram size={18} /> @alexiagallon
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
