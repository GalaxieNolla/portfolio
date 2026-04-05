import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Mail, Send, BookOpen, Code2, Camera } from 'lucide-react'

export const Route = createFileRoute('/contact')({
  component: Contact,
})

const reasons = [
  { icon: BookOpen, label: 'Research collaboration' },
  { icon: Code2, label: 'Software Engineering, data analytics, or cyber role' },
  { icon: Camera, label: 'Creative shoots' },
  { icon: Mail, label: 'Any other questions!' },
]

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <div className="text-center max-w-md mx-auto">
          <div className="w-20 h-20 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(168,85,247,0.2)]">
            <Mail className="w-10 h-10 text-purple-400" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-3">Message Sent!</h2>
          <p className="text-slate-400 mb-8 leading-relaxed">
            Thanks for reaching out! I've received your message and will get back to you within 2-3 business days.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="px-8 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl transition-all font-semibold"
          >
            Send Another Message
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#05050a] flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 w-full py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Context (Spans 5/12) */}
          <div className="lg:col-span-5 pt-4">
            <p className="text-purple-500 font-bold text-sm uppercase tracking-[0.3em] mb-4">
              Get in Touch
            </p>
            <h1 className="text-6xl font-extrabold text-white mb-6 tracking-tight">
              Contact
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              Whether you're a recruiter, creative, or scholar, I'm always open to discussing new opportunities and collaborations.
            </p>

            <div className="space-y-6">
              <h2 className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">
                Common Inquiries
              </h2>
              <ul className="grid grid-cols-1 gap-4">
                {reasons.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center shrink-0 group-hover:border-purple-500/50 transition-colors">
                      <Icon size={18} className="text-purple-400" />
                    </div>
                    <span className="text-slate-300 text-sm font-medium group-hover:text-white transition-colors">{label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: The Form (Spans 7/12) */}
          <div className="lg:col-span-7 bg-white/[0.02] border border-white/5 p-8 lg:p-12 rounded-[2.5rem] shadow-2xl">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                const form = e.currentTarget
                const formData = new FormData(form)
                const data = Object.fromEntries(formData.entries())

                fetch('https://portfolio-contact.gallon-alexia.workers.dev', { 
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(data), 
                })
                .then(async (res) => {
                  if (res.ok) { setSubmitted(true); }
                  else { alert("Error: " + await res.text()); }
                })
                .catch(() => alert("Network error: Could not reach the server."));
              }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 ml-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full px-5 py-4 bg-slate-900/50 border border-white/5 rounded-2xl text-white placeholder:text-slate-600 focus:text-white focus:bg-slate-900 focus:border-purple-500
