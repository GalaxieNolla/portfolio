import { createFileRoute, Link } from '@tanstack/react-router'
import { Camera, Mail, Instagram } from 'lucide-react'

export const Route = createFileRoute('/modelling')({
  component: Modelling,
})

// Gallery data defined at the top to avoid "not defined" errors
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

// We "flatten" the collections so every single image gets its own card in the grid
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
    <div className="relative group rounded-xl overflow-hidden aspect-[3/4] border border-zinc-800 bg-zinc-900">
      <img 
        src={item.url} 
        alt={`Photo by ${item.photographer}`} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      {/* Overlay: Visible on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <span className="text-xs text-rose-400 font-bold uppercase tracking-widest mb-2">
          {item.photographer}
        </span>
        <p className="text-zinc-200 text-sm leading-relaxed line-clamp-3">
          {item.description}
        </p>
      </div>
    </div>
  )
}

function Modelling() {
  return (
    <div className="bg-zinc-950 text-zinc-50">
      {/* Hero Section */}
      <section className="border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-4 py-24 md:py-32">
          <div className="flex items-center gap-3 mb-6">
            <Camera size={20} className="text-rose-500" />
            <p className="text-rose-500 font-bold text-sm uppercase tracking-[0.2em]">
              Creative Portfolio
            </p>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
            Modelling
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
            Editorial, commercial, and artistic work spanning studio and location shoots. 
            Available for bookings worldwide.
          </p>
          
          <div className="flex flex-wrap gap-4">
            {['Editorial', 'Commercial', 'Fashion', 'Artistic'].map((tag) => (
              <span key={tag} className="px-4 py-1.5 rounded-full border border-zinc-800 text-zinc-400 text-xs font-medium uppercase tracking-wider">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Full Gallery Grid */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {allImages.map((img) => (
              <GalleryCard key={img.id} item={img} />
            ))}
          </div>
          <p className="text-zinc-600 text-xs text-center mt-12 italic">
            Full high-resolution portfolio available upon request.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-4 bg-zinc-900/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Work Together</h2>
          <p className="text-zinc-400 text-lg mb-10">
            Currently accepting bookings for brand campaigns and creative collaborations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-rose-600 hover:bg-rose-700 text-white font-bold px-8 py-4 rounded-full transition-all hover:scale-105"
            >
              <Mail size={18} /> Book a Shoot
            </Link>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-bold px-8 py-4 rounded-full transition-all"
            >
              <Instagram size={18} /> View Instagram
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
