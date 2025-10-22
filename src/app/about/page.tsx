'use client'

import { motion } from 'framer-motion'
import { FaSchool, FaTruckMoving, FaUsers, FaBaby, FaGlobeAmericas, FaRocket, FaHandshake, FaLeaf, FaHeart } from 'react-icons/fa'

export default function AboutPage() {
  const reveal = { hidden: { opacity: 0, y: 14 }, show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08 } }) }

const management = [
  {
    name: 'Ahmed Magdy',
    title: 'CEO',
    img: '/images/106.jpeg',
    desc: 'Leading growth and innovation across all divisions.',
  },
  {
    name: 'Eslam Samy',
    title: 'Head of B2C',
    img: '/images/102.jpeg',
    desc: 'Driving customer engagement and education operations.',
  },
  {
    name: 'Hossam Mohamed',
    title: 'COO',
    img: '/images/103.jpeg',
    desc: 'Overseeing logistics and operational excellence.',
  },
]


  const employees = [
    { name: 'Mohamed Zaher', title: 'Head of Software', img: '/images/100.jpeg' },
    { name: 'Ahmed Ehab', title: 'HR Manager', img: '/images/104.jpeg' },
    { name: 'Ramy Ahmed', title: 'Head oF Finance', img: '/images/108.jpeg' },
    { name: 'Hossam Helal', title: 'Head of Sales', img: '/images/107.jpeg' },
    // { name: 'Employee 4', title: 'Caregiver', img: '/images/f.jpeg' },
    // { name: 'Employee 5', title: 'Technician', img: '/images/f.jpeg' },
  ]

  return (
    <main className="relative bg-[#0a0f1d] text-white min-h-screen antialiased pt-10">
      <div className="relative z-10 max-w-5xl mx-auto px-4 py-10 space-y-12">

        {/* HERO - Smaller */}
        <section className="grid md:grid-cols-2 gap-6 items-center">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-3">
            <motion.h1 variants={reveal} className="text-2xl md:text-3xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#f37121] to-orange-400">
              About Energize Future Group
            </motion.h1>
            <motion.p variants={reveal} className="text-gray-300 text-sm">
              Founded to empower families and businesses, <span className="text-[#f37121] font-semibold">EFG</span> integrates international education, premium childcare, and heavy transport & logistics. Committed to Vision 2030 growth.
            </motion.p>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="flex justify-center">
            <div className="relative w-full max-w-xs rounded-xl overflow-hidden border border-white/10 shadow-md">
              <img src="/images/re.jpeg" alt="About EFG" className="w-full h-40 object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <h3 className="text-md font-bold">Building Futures Since 2024</h3>
                <p className="text-gray-300 text-xs mt-1">Excellence in education, childcare & logistics</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* OUR STORY */}
        <section className="space-y-4">
          <div className="text-center">
            <h2 className="text-xl md:text-2xl font-bold text-[#f37121]">Our Story</h2>
            <p className="text-gray-400 mt-1 text-sm">
              EFG began with a vision: to combine education, childcare, and logistics under one umbrella. Today, we drive innovation, quality, and community impact across Saudi Arabia.
            </p>
          </div>
        </section>

        {/* VALUES */}
        <section className="space-y-4">
          <div className="text-center">
            <h2 className="text-xl md:text-2xl font-bold text-[#f37121]">Our Core Values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { icon: <FaGlobeAmericas />, title: 'Visionary Growth', desc: 'Aligned with national development.' },
              { icon: <FaRocket />, title: 'Innovation', desc: 'Tech & creative solutions.' },
              { icon: <FaHandshake />, title: 'Partnership', desc: 'Collaboration for success.' },
              { icon: <FaSchool />, title: 'Education Excellence', desc: 'High-quality international curricula.' },
              { icon: <FaBaby />, title: 'Childcare Commitment', desc: 'Safe & nurturing programs.' },
              { icon: <FaTruckMoving />, title: 'Reliable Logistics', desc: 'Efficient & tech-enabled transport.' },
              { icon: <FaLeaf />, title: 'Sustainability', desc: 'Eco-friendly & responsible.' },
              { icon: <FaHeart />, title: 'Community', desc: 'Supporting families & employees.' },
              { icon: <FaUsers />, title: 'People First', desc: 'Empowering our teams.' },
            ].map((val, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }} className="bg-white/5 p-3 rounded-lg text-center border border-white/10 shadow hover:shadow-md transition-all">
                <div className="text-[#f37121] text-xl mb-1 flex justify-center">{val.icon}</div>
                <h3 className="font-bold text-sm mb-1">{val.title}</h3>
                <p className="text-gray-400 text-xs">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* MANAGEMENT TEAM */}
        <section className="space-y-4">
          <div className="text-center">
            <h2 className="text-xl md:text-2xl font-bold text-[#f37121]">Management Team</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {management.map((m, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} className="bg-white/5 p-3 rounded-lg text-center border border-white/10 shadow hover:shadow-md transition-all">
                <img src={m.img} alt={m.name} className="w-30 h-40 object-cover rounded-2xl mx-auto  shadow-sm" />
                <h3 className="font-bold text-sm mt-5">{m.name}</h3>
                <div className="text-[#f37121] text-sm">{m.title}</div>
                <p className="text-gray-400 text-xs mt-1">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* EMPLOYEES */}
        <section className="space-y-4">
          <div className="text-center">
            <h2 className="text-xl md:text-2xl font-bold text-[#f37121]">Our Team</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {employees.map((e, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} className="bg-white/5 p-2 rounded-lg text-center border border-white/10 shadow hover:shadow-md transition-all">
                <img src={e.img} alt={e.name} className="w-25 h-40 object-cover rounded-2xl mx-auto  shadow-sm" />
                <h3 className="font-bold text-sm mt-5">{e.name}</h3>
                <div className="text-[#f37121] text-sm">{e.title}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* TIMELINE */}
        <section className="space-y-4">
          <div className="text-center">
            <h2 className="text-xl md:text-2xl font-bold text-[#f37121]">Our Journey</h2>
            <p className="text-gray-400 mt-1 text-sm">Milestones that shaped EFG</p>
          </div>
          <div className="grid md:grid-cols-4 gap-3 text-sm">
            {[
              { date: '2024', event: 'Group formation & initial planning' },
              { date: '2025', event: 'Construction & setup of schools & childcare' },
              { date: '2026', event: 'Launch first international school campuses' },
              { date: '2027', event: 'Expansion across Saudi Arabia with logistics & education' },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} className="bg-gray-900/70 p-3 rounded-lg text-center border border-white/10 shadow">
                <div className="text-[#f37121] font-bold">{item.date}</div>
                <div className="text-gray-400 text-sm mt-1">{item.event}</div>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
    </main>
  )
}