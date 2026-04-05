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
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center max-w-md mx-auto">
          <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-5">
            <Mail className="w-8 h-8 text-purple-400" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Message Sent!</h2>
          <p className="text-slate-300 mb-6">
            Thanks for reaching out!<br />
            I'll send a reply back to you soon. <br />
            -AG
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="px-6 py-2.5 bg-purple-900/20 text-purple-300/80 border border-purple-500/10 rounded-lg hover:bg-purple-900/40 transition-colors text-sm font-medium"
          >
            Send Another Message
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 pt-32 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl">
        {/* Left column */}
        <div>
          <p className="text-purple-400 font-semibold text-sm uppercase tracking-widest mb-3">Get in Touch</p>
          <h1 className="text-5xl font-bold text-white mb-5">Contact</h1>
          <p className="text-slate-300 leading-relaxed mb-8">
            Whether you're a recruiter, creative, scholar, etc, feel free to reach out! Turnaround time is 2-3 business days.
          </p>

          <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-4">
            Reasons to reach out
          </h2>
          <ul className="space-y-3">
            {reasons.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-3 text-sm text-slate-300">
                <span className="w-7 h-7 rounded-md bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0">
                  <Icon size={14} className="text-purple-400" />
                </span>
                {label}
              </li>
            ))}
          </ul>
        </div>

        {/* Form */}
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              const form = e.currentTarget
              const formData = new FormData(form)
              const data = Object.fromEntries(formData.entries())

              fetch('https://portfolio-contact.gallon-alexia.workers.dev', { 
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(data), 
              })
              .then(async (res) => {
                if (res.ok) {
                  setSubmitted(true);
                } else {
                  const errorText = await res.text();
                  console.error("Worker rejected the request:", errorText);
                  alert("Worker error: " + errorText);
                }
              })
              .catch(err => {
                console.error("Network error - could not reach Worker:", err);
                alert("Network error: Check your internet or URL");
              });
            }}
            className="space-y-5"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-1.5 uppercase tracking-wider">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 focus:text-white focus:border-purple-500 outline-none transition-all text-sm autofill:shadow-[inset_0_0_0_1000px_#0f172a]"
                placeholder="Alexia"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-1.5 uppercase tracking-wider">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 focus:text-white focus:border-purple-500 outline-none transition-all text-sm autofill:shadow-[inset_0_0_0_1000px_#0f172a]"
                placeholder="gallon.alexia@gmail.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-slate-400 mb-1.5 uppercase tracking-wider">
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 focus:text-white focus:border-purple-500 outline-none transition-all text-sm appearance-none"
              >
                <option value="" className="bg-slate-900">Select a topic…</option>
                <option value="research" className="bg-slate-900">Research Collaboration</option>
                <option value="engineering" className="bg-slate-900">Software/Cyber Role</option>
                <option value="modelling" className="bg-slate-900">Creative Shoots</option>
                <option value="other" className="bg-slate-900">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-1.5 uppercase tracking-wider">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 focus:text-white focus:border-purple-500 outline-none transition-all resize-none text-sm"
                placeholder="Tell me what's on your mind…"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-4 bg-purple-600 text-white rounded-xl hover:bg-purple-500 transition-all font-bold text-sm w-full justify-center shadow-lg"
            >
              <Send size={15} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
