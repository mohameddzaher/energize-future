'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaBriefcase, FaUsers, FaCalendarAlt, FaTools, FaCheckCircle } from 'react-icons/fa'

export default function CareerPage() {
  const jobs = [
    { 
      id: 1,
      title: 'Logistics Coordinator', 
      location: 'Riyadh, Saudi Arabia', 
      type: 'Full-time', 
      fullDesc: {
        overview: 'Manage transport schedules and shipments, liaising with clients and warehouses to ensure smooth operations.',
        responsibilities: [
          'Coordinate daily transport operations.',
          'Communicate with clients and warehouses.',
          'Ensure timely delivery of shipments.',
          'Maintain accurate transport records.'
        ],
        requirements: [
          'Bachelor degree in logistics or related field.',
          'Strong organizational skills.',
          'Experience in supply chain management.',
          'Good communication skills.'
        ],
        perks: [
          'Competitive salary',
          'Health insurance',
          'Training opportunities',
          'Friendly work environment'
        ]
      }
    },
    { 
      id: 2,
      title: 'Childcare Teacher', 
      location: 'Riyadh, Saudi Arabia', 
      type: 'Full-time', 
      fullDesc: {
        overview: 'Provide educational and nurturing support to children, plan activities, and communicate with parents.',
        responsibilities: [
          'Design and implement educational activities.',
          'Supervise children during activities.',
          'Maintain daily reports on child development.',
          'Communicate with parents about progress.'
        ],
        requirements: [
          'Degree in Early Childhood Education or related.',
          'Patience and communication skills.',
          'Experience in childcare is preferred.',
          'Ability to work in a team.'
        ],
        perks: [
          'Competitive salary',
          'Professional development opportunities',
          'Friendly team environment',
          'Health benefits'
        ]
      }
    },
    { 
      id: 3,
      title: 'Administrative Assistant', 
      location: 'Riyadh, Saudi Arabia', 
      type: 'Full-time', 
      fullDesc: {
        overview: 'Handle office administrative tasks, support management, and maintain communication with clients and partners.',
        responsibilities: [
          'Manage schedules and appointments.',
          'Prepare reports and correspondence.',
          'Assist management in office operations.',
          'Maintain client communications.'
        ],
        requirements: [
          'Bachelor degree in Business Administration or related.',
          'Strong organizational skills.',
          'Proficient in MS Office.',
          'Good communication skills.'
        ],
        perks: [
          'Competitive salary',
          'Health insurance',
          'Team building activities',
          'Professional growth opportunities'
        ]
      }
    },
  ]

  const [expandedJobId, setExpandedJobId] = useState<number | null>(null)
  const [formData, setFormData] = useState({ name: '', email: '', cvLink: '', message: '' })

  const toggleJob = (id: number) => {
    setExpandedJobId(expandedJobId === id ? null : id)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your application!')
    setFormData({ name: '', email: '', cvLink: '', message: '' })
  }

  const reveal = { hidden: { opacity: 0, y: 14 }, show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08 } }) }

  return (
    <main className="bg-[#0a0f1d] text-white min-h-screen antialiased">
      <div className="max-w-6xl mx-auto px-4 py-12 space-y-16">

        {/* HERO */}
        <section className="text-center space-y-4">
          <motion.h1 initial="hidden" whileInView="show" viewport={{ once: true }} variants={reveal} className="text-3xl md:text-3xl font-bold text-[#f37121] pt-10">
            Join Our Team
          </motion.h1>
          <motion.p initial="hidden" whileInView="show" viewport={{ once: true }} variants={reveal} className="text-gray-400 text-sm md:text-base">
            Explore current openings and apply directly via the form below.
          </motion.p>
        </section>

        {/* JOB CARDS */}
        <section className="grid md:grid-cols-3 gap-6">
          {jobs.map((job, i) => (
            <motion.div key={job.id} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} className="bg-white/5 p-4 rounded-lg border border-white/10 shadow hover:shadow-md transition-all space-y-2">
              
              <div className="flex items-center gap-2 text-[#f37121]"><FaBriefcase /> <span className="font-bold">{job.title}</span></div>
              <div className="flex items-center gap-2 text-gray-300 text-xs"><FaUsers /> <span>{job.location}</span></div>
              <div className="flex items-center gap-2 text-gray-300 text-xs"><FaCalendarAlt /> <span>{job.type}</span></div>

              <button onClick={() => toggleJob(job.id)} className="text-[#f37121] hover:text-orange-500 font-semibold text-sm mt-2">
                {expandedJobId === job.id ? 'Show Less' : 'See More'}
              </button>

              {expandedJobId === job.id && (
                <div className="mt-2 text-gray-300 text-xs border-t border-white/10 pt-2 space-y-2">
                  <h4 className="font-semibold text-[#f37121]">Overview</h4>
                  <p>{job.fullDesc.overview}</p>

                  <h4 className="font-semibold text-[#f37121]">Responsibilities</h4>
                  <ul className="list-disc list-inside">
                    {job.fullDesc.responsibilities.map((r, idx) => <li key={idx}>{r}</li>)}
                  </ul>

                  <h4 className="font-semibold text-[#f37121]">Requirements</h4>
                  <ul className="list-disc list-inside">
                    {job.fullDesc.requirements.map((r, idx) => <li key={idx}>{r}</li>)}
                  </ul>

                  <h4 className="font-semibold text-[#f37121]">Perks</h4>
                  <ul className="list-disc list-inside">
                    {job.fullDesc.perks.map((p, idx) => <li key={idx}>{p}</li>)}
                  </ul>
                </div>
              )}

            </motion.div>
          ))}
        </section>

        {/* APPLICATION FORM */}
        <section className="mt-12 bg-white/5 p-6 rounded-lg border border-white/10 shadow-md max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#f37121] mb-4 text-center">Apply Now</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label className="text-gray-300 text-sm">Full Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required className="mt-1 p-2 rounded bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#f37121]" placeholder="Your Name" />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-300 text-sm">Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required className="mt-1 p-2 rounded bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#f37121]" placeholder="you@example.com" />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-300 text-sm">CV Link</label>
              <input type="url" name="cvLink" value={formData.cvLink} onChange={handleChange} required className="mt-1 p-2 rounded bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#f37121]" placeholder="Link to your CV (Google Drive, Dropbox, etc.)" />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-300 text-sm">Message (Optional)</label>
              <textarea name="message" value={formData.message} onChange={handleChange} className="mt-1 p-2 rounded bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#f37121]" placeholder="Write a short message..." rows={4}></textarea>
            </div>
            <button type="submit" className="bg-[#f37121] hover:bg-orange-500 transition text-white px-4 py-2 rounded font-semibold w-full">
              Submit Application
            </button>
          </form>
        </section>

      </div>
    </main>
  )
}