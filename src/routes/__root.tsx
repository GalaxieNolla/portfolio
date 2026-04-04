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
      { title: 'Alexia Gallon — Researcher · Developer · Model' },
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
      className={`text-sm font-medium transition-colors hover:text-white ${
        isActive ? 'text-white border-b-2 border-amber-400 pb-0.5' : 'text-slate-300'
      }`}
    >
      {label}
    </Link>
  )
}

function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur border-b border-slate-700">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 text-white font-bold text-lg tracking-tight hover:opacity-90 transition-opacity">
          {/* Your new Logo and Headshot */}
          <img src="/logo.png" alt="Logo" className="h-8 w-8 object-contain" />
          <img src="/headshot.png" alt="Alexia Gallon" className="h-8 w-8 rounded-full object-cover border border-slate-700" />
          <span>Alexia Gallon</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <NavLink key={l.to} {...l} />
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-slate-300 hover:text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden bg-slate-900 border-t border-slate-700 px-4 py-4 flex flex-col gap-4">
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
    <footer className="bg-slate-900 text-slate-400 text-sm text-center py-8 mt-16">
      <p>© {new Date().getFullYear()} Alexia Gallon · Researcher · Developer · Model</p>
    </footer>
  )
}

function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col">
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
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
