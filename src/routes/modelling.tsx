import { createFileRoute } from '@tanstack/react-router'
import { Send, BookOpen, Code, Camera, HelpCircle, Linkedin } from 'lucide-react'

export const Route = createFileRoute('/contact')({
  component: Contact,
})

function Contact() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side: Text Content */}
        <div>
          <p className="text-purple-400 font-semibold text-sm uppercase tracking-widest mb-4">
            Get in Touch
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact</h1>
          <p className="text-slate-200 text-lg leading-relaxed mb-8">
            Whether you're a recruiter, a researcher, a photographer, or just 
            curious — all messages are welcome. Expect a reply within 2–3 
            business days.
          </p>

          {/* LinkedIn Connection */}
          <a 
            href="https://www.linkedin.com/in/alexia-gallon" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-4 py-2 bg-slate-900 border border-slate-700 rounded-full text-white hover:border-purple-500 transition-all mb-10 group"
          >
            <Linkedin size={18} className="text-purple-400 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium">Connect on LinkedIn</span>
          </a>

          <div className="space-y-6">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
              Reasons to reach out
            </p>
            <div className="flex items-center gap-4 text-slate-200">
              <div className="p-2 bg-slate-900 border border-slate-700 rounded-lg">
                <BookOpen size={18} className="text-purple-400" />
              </div>
              <span className="text-sm font-medium">Research collaboration</span>
            </div>
            <div className="flex items-center gap-4 text-slate-200">
              <div className="p-2 bg-slate-900 border border-slate-700 rounded-lg">
                <Code size={18} className="text-purple-400" />
              </div>
              <span className="text-sm font-medium">Software Engineering, data analytics, or cyber role</span>
            </div>
            <div className="flex items-center gap-4 text-slate-200">
              <div className="p-2 bg-slate-900 border border-slate-700 rounded-lg">
                <Camera size={18} className="text-purple-400" />
              </div>
              <span className="text-sm font-medium">Creative shoots</span>
            </div>
            <div className="flex items-center gap-4 text-slate-200">
              <div className="p-2 bg-slate-900 border border-slate-700 rounded-lg">
                <HelpCircle size={18} className="text-purple-400" />
              </div>
              <span className="text-sm font-medium">Any other questions!</span>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-200 mb-2">Name</label>
              <input 
                type="text" 
                placeholder="Your name"
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-200 mb-2">Email</label>
              <input 
                type="email" 
                placeholder="your@email.com"
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-200 mb-2">Subject</label>
              <select className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors">
                <option className="bg-slate-950">Select a topic...</option>
                <option className="bg-slate-950">Research</option>
                <option className="bg-slate-950">Technical Role</option>
                <option className="bg-slate-950">Creative/Modelling</option>
                <option className="bg-slate-950">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-200 mb-2">Message</label>
              <textarea 
                rows={5}
                placeholder="Tell me what's on your mind..."
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
              />
            </div>
          </div>

          <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-indigo-900/40 flex items-center justify-center gap-2">
            <Send size={18} />
            Send Message
          </button>
        </div>
      </div>
    </div>
  )
}
