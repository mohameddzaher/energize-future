'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function AboutPreview() {
  const [counters, setCounters] = useState({
    schools: 0,
    childcare: 0,
    trucks: 0,
    employees: 0,
  })

  useEffect(() => {
    const targets = { schools: 3, childcare: 100, trucks: 34, employees: 360 }
    const duration = 1500
    const start = performance.now()

    const animate = (time: number) => {
      const progress = Math.min((time - start) / duration, 1)
      setCounters({
        schools: Math.floor(progress * targets.schools),
        childcare: Math.floor(progress * targets.childcare),
        trucks: Math.floor(progress * targets.trucks),
        employees: Math.floor(progress * targets.employees),
      })
      if (progress < 1) requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }, [])

  return (
    <section className="relative bg-[#0a0f1d] text-white py-20 px-6 overflow-hidden">
      {/* خلفية gradient subtle */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f37121]/10 via-transparent to-[#f37121]/5 blur-3xl animate-pulse-slow pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* --- 1️⃣ Intro --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center gap-8 mt-10"
        >
          <div className="md:w-1/2 text-left space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#f37121] to-orange-500 bg-clip-text text-transparent">
              Energize Future Group ⚡
            </h2>
            <div className="w-20 h-[3px] bg-gradient-to-r from-[#f37121] to-orange-600 rounded-full" />
            <p className="text-gray-300 text-base md:text-md leading-relaxed">
              Saudi holding company integrating <strong>childcare, international education</strong> and <strong>heavy transport & logistics</strong>. We drive innovation, trust, and operational excellence.
            </p>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <img
              src="/images/f.jpeg"
              alt="About EFG"
              className="rounded-2xl shadow-lg w-full max-w-[480px] h-[260px] object-cover"
            />
          </div>
        </motion.div>

        {/* --- 2️⃣ Stats Counter --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="relative mt-28"
        >
          <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'International Schools', value: counters.schools },
              { label: 'Childcare Capacity', value: counters.childcare },
              { label: 'Trucks in Fleet', value: counters.trucks },
              { label: 'Employees & Drivers', value: counters.employees },
            ].map((stat, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-2xl shadow-md text-center hover:shadow-xl transition-all duration-300">
                <div className="text-4xl md:text-5xl font-bold text-[#f37121] mb-2">
                  {stat.value}+
                </div>
                <div className="text-sm md:text-base text-gray-300">{stat.label}</div>
                <div className="w-10 h-[2px] bg-[#f37121] rounded-full mt-2 mx-auto"></div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* --- 3️⃣ Why Choose EFG --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#f37121] mb-10 text-center">
            Why Choose <span className="text-white">EFG?</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: 'Excellence & Trust', desc: 'Operational excellence and trusted services across KSA.', icon: '🏆' },
              { title: 'Innovative Solutions', desc: 'Smart, technology-backed logistics & education solutions.', icon: '⚙️' },
              { title: 'Customer Focus', desc: 'Families, clients, and communities always at the center.', icon: '💡' },
              { title: 'Sustainable Growth', desc: 'Responsible, eco-conscious operations.', icon: '🌱' },
              { title: 'Experienced Team', desc: '360+ professionals in all divisions.', icon: '👷‍♂️' },
              { title: 'Nationwide Reach', desc: 'Coverage across major cities with 7+ operational hubs.', icon: '📍' },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="bg-gray-900 rounded-xl p-5 shadow-md border border-gray-800 hover:border-[#f37121]/50 transition-all duration-300 text-center"
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <h4 className="text-lg font-semibold text-[#f37121] mb-1">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* --- 4️⃣ Mission & Vision --- */}
        <motion.div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-[#f37121] mb-6">Our Mission & Vision</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="bg-gray-900 rounded-2xl p-6 shadow-md border border-gray-800"
            >
              <h3 className="text-xl font-semibold text-[#f37121] mb-2">Mission</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Deliver meaningful services that enrich lives, inspire growth, build trust, and drive sustainable industrial growth.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="bg-gray-900 rounded-2xl p-6 shadow-md border border-gray-800"
            >
              <h3 className="text-xl font-semibold text-[#f37121] mb-2">Vision</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Shape a future where families thrive through education, childcare, and logistics excellence.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* --- 5️⃣ Clients Carousel --- */}
        <motion.div className="mt-24 text-center overflow-hidden">
          <h3 className="text-3xl font-bold text-[#f37121] mb-10">Our Valued Clients</h3>
          <div className="relative w-full overflow-hidden">
            <motion.div animate={{ x: ['0%', '-500%'] }} transition={{ repeat: Infinity, duration: 60, ease: 'linear' }} className="flex gap-8">
              {[...Array(2)].map((_, loopIndex) => (
                <div key={loopIndex} className="flex gap-8">
                  {Array.from({ length: 20 }, (_, i) => `/images/clients/${i + 1}.jpeg`).map((logo, index) => (
                    <div key={`${loopIndex}-${index}`} className="flex items-center justify-center bg-white/5 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-gray-800 hover:border-[#f37121]/50 transition-all duration-300 min-w-[180px] h-[100px]">
                      <img src={logo} alt={`Client ${index + 1}`} className="max-w-full max-h-full object-contain drop-shadow-lg" onError={(e) => ((e.target as HTMLImageElement).style.display = 'none')} />
                    </div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}