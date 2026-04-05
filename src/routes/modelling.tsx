I have updated the Modelling component to reflect your new focus on acting, prioritized the specific images you requested at the top of the gallery, and adjusted the call-to-action section as specified.

TypeScript
import { createFileRoute, Link } from '@tanstack/react-router'
import { Camera, Mail, Instagram, Film } from 'lucide-react'

export const Route = createFileRoute('/modelling')({
  component: Modelling,
})

const galleryCollections = [
  {
    photographer: "Isaac Alvarez",
    description: "Cinematic portraiture and high-end editorial photography.",
    images: [
      "/images/modelling/editorial.png", // Priority 3
      "/images/modelling/hair%20outside.png",
      "/images/modelling/side%20profile.png", // Priority 2
      "/images/modelling/window.png",
    ]
  },
  {
    photographer: "Dino Corti",
    description: "Dynamic studio work and artistic fashion captures.",
    images: [
      "/images/modelling/boom.png",
      "/images/modelling/diamond.png", // Priority 1
      "/images/modelling/ribbon.png",
      "/images/modelling/wrap.png",
    ]
  }
]

// Priority sorting: Diamond, Side Profile, Editorial first
const allImages = [
  ...galleryCollections.flatMap((collection) => 
    collection.images.map((imgUrl, index) => ({
      id: `${collection.photographer}-${index}`,
      url: imgUrl,
      photographer: collection.photographer,
      description: collection.description
    }))
  )
].sort((a, b) => {
  const priority = ["diamond.png", "side%20profile.png", "editorial.png"];
  const aIndex = priority.findIndex(p => a.url.includes(p));
  const bIndex = priority.findIndex(p => b.url.includes(p));
  
  if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex;
  if (aIndex !== -1) return -1;
  if (bIndex !== -1) return 1;
  return 0;
});

function GalleryCard({ item }: { item: typeof allImages[0] }) {
  return (
    <div className="relative group rounded-2xl overflow-hidden mb-4 break-inside-avoid border border-white/5 bg-slate-900 shadow-xl transition-all duration-500 hover:border-purple-500/30">
      <img 
        src={item.url} 
        alt={`Photo by ${item.photographer}`} 
        className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
      />
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
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <Film size={20} className="text-purple-500" />
            <p className="text-purple-400 font-bold text-sm uppercase tracking-[0.2em]">
              Performance & Creative Portfolio
            </p>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
            Acting <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">& Art</span>
          </h1>
          
          <div className="space-y-6 max-w-2xl">
            <p className="text-slate-200 text-lg md:text-xl leading-relaxed font-medium">
              Emerging actress with a background on the stage through theater and short films, 
              eager to collaborate on creative acting/modeling shoots. I strive to be a 
              canvas that brings stories to life through color, movement, and presence.
            </p>
            <p className="text-slate-400 text-md leading-relaxed">
              I'd love to work with others on creative shoots whether they are more editorial 
              and fashion-oriented, portrait style, commercial, or experimental.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3 mt-10">
            {['Editorial', 'Film', 'Commercial', 'Experimental'].map((tag) => (
              <span key={tag} className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-slate-300 text-[10px] font-bold uppercase tracking-widest">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {allImages.map((img) => (
              <GalleryCard key={img.id} item={img} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-white tracking-tight">Book with me</h2>
          <p className="text-slate-400 text-lg mb-12">
            Currently looking to collaborate on TFPs, short/feature films, and editorial/commercial work.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-bold px-10 py-4 rounded-full transition-all shadow-lg shadow-purple-900/20 group"
            >
              <Mail size={18} className="group-hover:-rotate-12 transition-transform" /> Contact for Collaboration
            </Link>
            <a
              href="https://instagram.com/gallon_of_optimism"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-white/10 hover:border-blue-500/50 text-slate-300 hover:text-blue-400 font-bold px-10 py-4 rounded-full transition-all backdrop-blur-sm"
            >
              <Instagram size={18} /> @gallon_of_optimism
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
