import { HeadContent, Scripts, createRootRoute, Outlet } from '@tanstack/react-router'
import { Link, useRouterState } from '@tanstack/react-router'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Alexia Gallon — Security Researcher · Developer · Model' },
    ],
  }),
  shellComponent: RootDocument,
  component: RootLayout,
})

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/research', label: 'Research' },
  { to: '/projects', label: 'Projects' },
  { to: '/modelling', label: 'Modelling' },
  { to: '/contact', label: 'Contact' },
]

function NavLink({ to, label, onClick }: { to: string; label: string; onClick?: () => void }) {
  const state = useRouterState()
  const isActive = state.location.pathname === to

  return (
    <Link
      to={to}
      onClick={onClick}
      className={`text-sm font-medium transition-all hover:text-white relative py-1 ${
        isActive ? 'text-white' : 'text-slate-400'
      }`}
    >
      {label}
      {isActive && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-400 rounded-full" />
      )}
    </Link>
  )
}

function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-slate-900 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-3 text-white font-bold text-lg tracking-tight hover:opacity-80 transition-opacity"
          onClick={() => setOpen(false)}
        >
          {/* Fixed Logo: No absolute positioning, no headshot overlap */}
          <img 
            src="/logo.png" 
            alt="Logo" 
            className="h-8 w-8 object-contain" 
          />
          <span>Alexia Gallon</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <NavLink key={l.to} {...l} />
          ))}
        </nav>

        <button
          className="md:hidden p-2 text-slate-300 hover:text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-slate-900 border-b border-slate-800 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((l) => (
            <NavLink key={l.to} {...l} onClick={() => setOpen(false)} />
          ))}
        </nav>
      )}
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-500 text-xs text-center py-10 mt-auto">
      <p>© {new Date().getFullYear()} Alexia Gallon · Security Researcher · Developer · Model</p>
    </footer>
  )
}

function RootLayout() {
  return (
    /* Legibility Fix: Ensure the text is slate-50 (near white) against the slate-950 background */
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-50">
      <Nav />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body className="antialiased">
        {children}
        <Scripts />
      </body>
    </html>
  )
}
