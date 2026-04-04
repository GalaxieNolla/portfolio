import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Mail, Send, BookOpen, Code2, Camera } from 'lucide-react'

export const Route = createFileRoute('/contact')({
  component: Contact,
})

const reasons = [
  { icon: BookOpen, label: 'Research collaboration or academic inquiry' },
  { icon: Code2, label: 'Engineering role or consulting opportunity' },
  { icon: Camera, label: 'Photography booking or creative project' },
  { icon: Mail, label: 'General question or other' },
]

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center max-w-md mx-auto">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
            <Mail className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h2>
          <p className="text-slate-600 mb-6">
            Thanks for reaching out. A reply will be on its way shortly.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="px-6 py-2.5 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors text-sm font-medium"
          >
            Send Another Message
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left column */}
        <div>
          <p className="text-indigo-600 font-semibold text-sm uppercase tracking-widest mb-3">Get in Touch</p>
          <h1 className="text-4xl font-bold text-slate-900 mb-5">Contact</h1>
          <p className="text-slate-600 leading-relaxed mb-8">
            Whether you're a recruiter, a researcher, a photographer, or just curious —
            all messages are welcome. Expect a reply within 2–3 business days.
          </p>

          <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-4">
            Reasons to reach out
          </h2>
          <ul className="space-y-3">
            {reasons.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-3 text-sm text-slate-600">
                <span className="w-7 h-7 rounded-md bg-slate-100 flex items-center justify-center shrink-0">
                  <Icon size={14} className="text-slate-500" />
                </span>
                {label}
              </li>
            ))}
          </ul>
        </div>

        {/* Form */}
        <div>
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={(e) => {
              e.preventDefault()
              const form = e.currentTarget
              const formData = new FormData(form)
              fetch('/contact.html', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(
                  formData as unknown as Record<string, string>,
                ).toString(),
              }).then(() => setSubmitted(true))
            }}
            className="space-y-5"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Don't fill this out: <input name="bot-field" />
              </label>
            </p>

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors text-sm"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors text-sm"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1.5">
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors text-sm bg-white"
              >
                <option value="">Select a topic…</option>
                <option value="research">Research / Academic</option>
                <option value="engineering">Engineering / Recruiting</option>
                <option value="modelling">Modelling / Photography Booking</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors resize-none text-sm"
                placeholder="Tell me what's on your mind…"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-semibold text-sm w-full justify-center"
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
