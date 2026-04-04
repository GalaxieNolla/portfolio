import { marked } from 'marked'
import { createFileRoute } from '@tanstack/react-router'
import { allJobs, allEducations } from 'content-collections'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { FileText, Briefcase, GraduationCap } from 'lucide-react'

export const Route = createFileRoute('/resume')({
  component: Resume,
})

function Resume() {
  const jobs = [...allJobs].sort(
    (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
  )

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="mb-12">
        <p className="text-indigo-600 font-semibold text-sm uppercase tracking-widest mb-3">
          Professional Background
        </p>
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Resume</h1>
            <p className="text-slate-600 text-lg max-w-2xl">
              Work experience, education, and skills.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 border border-slate-300 text-slate-700 font-semibold px-5 py-2.5 rounded-lg hover:border-slate-500 transition-colors text-sm"
          >
            <FileText size={14} /> Download PDF
          </a>
        </div>
      </div>

      <Separator className="mb-12" />

      {/* Work Experience */}
      <section className="mb-12">
        <div className="flex items-center gap-2 mb-8">
          <Briefcase size={20} className="text-indigo-600" />
          <h2 className="text-2xl font-bold text-slate-900">Work Experience</h2>
        </div>
        <div className="space-y-6">
          {jobs.map((job) => (
            <Card key={job.jobTitle + job.company} className="border-slate-200">
              <CardHeader>
                <div className="flex justify-between items-start flex-wrap gap-3">
                  <div>
                    <CardTitle className="text-xl mb-1">{job.jobTitle}</CardTitle>
                    <p className="text-indigo-600 font-medium text-sm">
                      {job.company} · {job.location}
                    </p>
                  </div>
                  <Badge variant="secondary" className="text-xs shrink-0">
                    {job.startDate} – {job.endDate || 'Present'}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-5 leading-relaxed text-sm">{job.summary}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {job.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                {job.content && (
                  <div
                    className="mt-4 prose prose-sm max-w-none text-slate-600"
                    dangerouslySetInnerHTML={{ __html: marked(job.content) }}
                  />
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="mb-12" />

      {/* Education */}
      <section>
        <div className="flex items-center gap-2 mb-8">
          <GraduationCap size={20} className="text-indigo-600" />
          <h2 className="text-2xl font-bold text-slate-900">Education</h2>
        </div>
        <div className="space-y-6">
          {allEducations.map((edu) => (
            <Card key={edu.school} className="border-slate-200">
              <CardHeader>
                <div className="flex justify-between items-start flex-wrap gap-3">
                  <div>
                    <CardTitle className="text-xl mb-1">{edu.school}</CardTitle>
                    <p className="text-indigo-600 font-medium text-sm">{edu.summary}</p>
                  </div>
                  {edu.startDate && (
                    <Badge variant="secondary" className="text-xs shrink-0">
                      {edu.startDate} – {edu.endDate || 'Present'}
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {edu.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                {edu.content && (
                  <div
                    className="prose prose-sm max-w-none text-slate-600"
                    dangerouslySetInnerHTML={{ __html: marked(edu.content) }}
                  />
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
