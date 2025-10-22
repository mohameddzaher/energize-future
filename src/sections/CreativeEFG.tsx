'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import {
  FaSchool,
  FaTruckMoving,
  FaUsers,
  FaBaby,
  FaChartLine,
  FaRocket,
  FaHandshake,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaLeaf,
  FaCertificate,
  FaCalendarAlt,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaArrowRight,
  FaAward,
  FaShieldAlt,
  FaHeart,
  FaGraduationCap,
  FaGlobeAmericas,
  FaQuoteLeft,
} from 'react-icons/fa'

export default function CreativeEFG() {
  // counters
  const [counters, setCounters] = useState({ schools: 0, childcare: 0, trucks: 0, employees: 0 })

  useEffect(() => {
    const targets = { schools: 3, childcare: 100, trucks: 34, employees: 360 }
    const duration = 1200
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

  // small variants
  const reveal = { hidden: { opacity: 0, y: 14 }, show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08 } }) }

  return (
    <main className="relative bg-[#0a0f1d] text-white min-h-screen antialiased">
      {/* subtle background touches */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [-10, 10, -10], y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 18, ease: 'easeInOut' }}
          className="absolute -left-24 -top-20 w-72 h-72 bg-[#f37121]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [10, -10, 10], y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 22, ease: 'easeInOut' }}
          className="absolute -right-24 -bottom-24 w-80 h-80 bg-blue-500/6 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, 15, 0], y: [10, 0, 10] }}
          transition={{ repeat: Infinity, duration: 25, ease: 'easeInOut' }}
          className="absolute left-1/3 top-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12 space-y-16">

        {/* HERO */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-4">
            <motion.h1 variants={reveal} className="text-3xl md:text-4xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#f37121] to-orange-400">
              Energize Future Group
            </motion.h1>
            <motion.p variants={reveal} className="text-gray-300 max-w-md text-sm">
              Empowering generations - integrating <span className="text-[#f37121] font-semibold">childcare</span>, <span className="text-[#f37121] font-semibold">international education</span>, and <span className="text-[#f37121] font-semibold">heavy transport & logistics</span>. Trusted, compliant, and built for Vision 2030 impact.
            </motion.p>

            <motion.div variants={reveal} className="flex gap-3 mt-4">
              <button className="px-4 py-2 text-sm rounded-full bg-gradient-to-r from-[#f37121] to-orange-500 text-black font-medium shadow hover:scale-105 transition-transform flex items-center gap-2">
                Explore Divisions <FaArrowRight className="text-xs" />
              </button>
              <a href="#contact" className="px-4 py-2 text-sm rounded-full bg-white/5 text-white font-medium hover:bg-white/10 transition-colors self-center">Contact Us</a>
            </motion.div>

            <motion.div variants={reveal} className="flex flex-wrap gap-2 mt-4 text-xs text-gray-400">
              <div className="bg-white/5 px-3 py-1.5 rounded-lg flex items-center gap-1"><FaMapMarkerAlt className="text-[#f37121] text-xs" /> Headquartered: Jeddah</div>
              <div className="bg-white/5 px-3 py-1.5 rounded-lg flex items-center gap-1"><FaTruckMoving className="text-[#f37121] text-xs" /> Fleet: 34 trucks</div>
              <div className="bg-white/5 px-3 py-1.5 rounded-lg flex items-center gap-1"><FaCalendarAlt className="text-[#f37121] text-xs" /> First childcare: Q4 2025</div>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="flex justify-center">
            <div className="relative w-full max-w-sm rounded-xl overflow-hidden border border-white/10 shadow-lg">
              <img src="/images/raai.jpeg" alt="Energize hero" className="w-full h-60 object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-lg font-bold">Building Futures Since 2024</h3>
                <p className="text-gray-300 text-xs mt-1">Committed to excellence in education, childcare, and logistics</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* SMALL ICONS ROW */}
        <section className="flex flex-wrap gap-3 justify-center">
          {[
            { icon: <FaSchool />, label: 'Education' },
            { icon: <FaBaby />, label: 'Childcare' },
            { icon: <FaTruckMoving />, label: 'Logistics' },
            { icon: <FaLeaf />, label: 'Sustainability' },
            { icon: <FaHandshake />, label: 'Partnerships' },
            { icon: <FaCertificate />, label: 'Quality & Compliance' },
            // { icon: <FaAward />, label: 'Excellence' },
            { icon: <FaShieldAlt />, label: 'Safety' },
            { icon: <FaHeart />, label: 'Community' },
            { icon: <FaGraduationCap />, label: 'Learning' },
          ].map((it, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -4, scale: 1.03 }} 
              className="flex items-center gap-2 bg-white/5 text-gray-200 px-3 py-2 rounded-lg text-xs shadow hover:bg-white/10 transition-all cursor-pointer"
            >
              <div className="text-[#f37121] text-sm">{it.icon}</div>
              <div className="font-medium">{it.label}</div>
            </motion.div>
          ))}
        </section>

        {/* COUNTERS */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Schools', value: counters.schools, icon: <FaSchool />, suffix: '' },
            { label: 'Childcare Capacity', value: counters.childcare, icon: <FaBaby />, suffix: '+' },
            { label: 'Trucks', value: counters.trucks, icon: <FaTruckMoving />, suffix: '+' },
            { label: 'Employees', value: counters.employees, icon: <FaUsers />, suffix: '+' },
          ].map((s, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 16 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ delay: i * 0.1 }} 
              className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 rounded-xl p-4 text-center border border-white/10 shadow"
            >
              <div className="flex items-center justify-center text-lg text-[#f37121] mb-2">{s.icon}</div>
              <div className="text-xl font-bold">{s.value}{s.suffix}</div>
              <div className="text-gray-400 text-xs mt-1">{s.label}</div>
            </motion.div>
          ))}
        </section>

        {/* DIVISIONS DETAILED */}
        <section className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-[#f37121]">Our Business Divisions</h2>
            <p className="text-gray-400 mt-1 text-sm max-w-xl mx-auto">Three integrated pillars working together to build a better future for Saudi families and businesses</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {/* card 1 */}
            <motion.div 
              initial="hidden" 
              whileInView="show" 
              whileHover={{ y: -6 }}
              className="bg-gradient-to-b from-white/5 to-transparent rounded-xl p-4 shadow-lg border border-white/10 hover:border-[#f37121]/30 transition-all"
            >
              <div className="flex gap-3 items-start">
                <div className="w-40 h-16 rounded-lg overflow-hidden border border-white/10 shadow">
                  <img src="/images/hee.jpeg" alt="school" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#f37121]">EFG International Schools</h3>
                  <p className="text-gray-300 text-xs mt-1">Three campuses (Riyadh & Jeddah) with KG→Primary launch, IB/CIS pathways, STEAM focus and bilingual tracks.</p>
                  <div className="flex flex-wrap gap-1 mt-3 text-xs">
                    <span className="bg-[#f37121]/20 text-[#f37121] px-2 py-1 rounded-full">Accreditation</span>
                    <span className="bg-[#f37121]/20 text-[#f37121] px-2 py-1 rounded-full">STEAM Labs</span>
                    <span className="bg-[#f37121]/20 text-[#f37121] px-2 py-1 rounded-full">Bilingual</span>
                  </div>
                </div>
              </div>
              <Link 
    href="/divisions/international-schools"
    className="mt-4 w-full py-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-xs flex items-center justify-center gap-1"
  >
    Learn More <FaArrowRight className="text-xs" />
  </Link>
            </motion.div>

            {/* card 2 */}
            <motion.div 
              whileHover={{ y: -6 }}
              className="bg-gradient-to-b from-white/5 to-transparent rounded-xl p-4 shadow-lg border border-white/10 hover:border-[#f37121]/30 transition-all"
            >
              <div className="flex gap-3 items-start">
                <div className="w-40 h-16 rounded-lg overflow-hidden border border-white/10 shadow">
                  <img src="/images/wf.jpeg" alt="childcare" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#f37121]">EFG Childcare</h3>
                  <p className="text-gray-300 text-xs mt-1">Bilingual Montessori + FLYS curricula, parent app for daily reports, secure facilities and highly trained caregivers.</p>
                  <div className="flex flex-wrap gap-1 mt-3 text-xs">
                    <span className="bg-[#f37121]/20 text-[#f37121] px-2 py-1 rounded-full">Parent App</span>
                    <span className="bg-[#f37121]/20 text-[#f37121] px-2 py-1 rounded-full">Safety</span>
                    <span className="bg-[#f37121]/20 text-[#f37121] px-2 py-1 rounded-full">Montessori</span>
                  </div>
                </div>
              </div>
              <Link 
  href="/divisions/childcare"
  className="mt-4 w-full py-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-xs flex items-center justify-center gap-1"
>
  Learn More <FaArrowRight className="text-xs" />
</Link>
            </motion.div>

            {/* card 3 */}
            <motion.div 
              whileHover={{ y: -6 }}
              className="bg-gradient-to-b from-white/5 to-transparent rounded-xl p-4 shadow-lg border border-white/10 hover:border-[#f37121]/30 transition-all"
            >
              <div className="flex gap-3 items-start">
                <div className="w-40 h-16 rounded-lg overflow-hidden border border-white/10 shadow">
                  <img src="/images/f.jpeg" alt="truck" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#f37121]">Heavy Transport & Logistics</h3>
                  <p className="text-gray-300 text-xs mt-1">Project-based heavy haulage for construction, energy and manufacturing with telematics and predictive maintenance.</p>
                  <div className="flex flex-wrap gap-1 mt-3 text-xs">
                    <span className="bg-[#f37121]/20 text-[#f37121] px-2 py-1 rounded-full">Telematics</span>
                    <span className="bg-[#f37121]/20 text-[#f37121] px-2 py-1 rounded-full">Backhaul Optimization</span>
                    <span className="bg-[#f37121]/20 text-[#f37121] px-2 py-1 rounded-full">24/7 Support</span>
                  </div>
                </div>
              </div>
              <Link 
  href="/divisions/transport-logistics"
  className="mt-4 w-full py-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-xs flex items-center justify-center gap-1"
>
  Learn More <FaArrowRight className="text-xs" />
</Link>
            </motion.div>
          </div>
        </section>

        {/* MISSION & VISION */}
        <section className="grid md:grid-cols-2 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white/8 backdrop-blur rounded-xl p-4 border border-white/10 shadow-lg"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="p-2 rounded-lg bg-[#f37121]/20 text-[#f37121]">
                <FaGlobeAmericas className="text-base" />
              </div>
              <h4 className="text-lg font-bold text-[#f37121]">Our Vision</h4>
            </div>
            <p className="text-gray-300 text-sm">Shape a future where families thrive through accessible education, quality childcare and dependable logistics that support national growth.</p>
            <div className="mt-4 p-3 bg-white/5 rounded-lg">
              <p className="text-xs text-gray-400">Aligned with Vision 2030 - workforce participation & private sector growth.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white/8 backdrop-blur rounded-xl p-4 border border-white/10 shadow-lg"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="p-2 rounded-lg bg-[#f37121]/20 text-[#f37121]">
                <FaRocket className="text-base" />
              </div>
              <h4 className="text-lg font-bold text-[#f37121]">Our Mission</h4>
            </div>
            <p className="text-gray-300 text-sm">Deliver meaningful services that enrich lives, inspire growth, and build trust through innovation, safety and operational excellence.</p>
            <div className="mt-4 p-3 bg-white/5 rounded-lg">
              <p className="text-xs text-gray-400">People-first: families, employees, and communities.</p>
            </div>
          </motion.div>
        </section>

        {/* STRATEGY + TIMELINE */}
        <section className="space-y-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-[#f37121]">Roadmap & Key Milestones</h2>
            <p className="text-gray-400 mt-1 text-sm">Our strategic journey towards building a better future</p>
          </div>
          <div className="grid md:grid-cols-4 gap-3 text-sm">
            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 p-4 rounded-lg text-center border border-white/10 shadow"
            >
              <div className="text-base font-bold text-[#f37121]">Q4 2024</div>
              <div className="text-gray-400 text-xs mt-1">Group setup & fleet registration</div>
              <div className="mt-2 h-1 w-10 bg-[#f37121] rounded-full mx-auto"></div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 p-4 rounded-lg text-center border border-white/10 shadow"
            >
              <div className="text-base font-bold text-[#f37121]">Q1 2025</div>
              <div className="text-gray-400 text-xs mt-1">Start school & childcare construction</div>
              <div className="mt-2 h-1 w-10 bg-[#f37121] rounded-full mx-auto"></div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 p-4 rounded-lg text-center border border-white/10 shadow"
            >
              <div className="text-base font-bold text-[#f37121]">Q4 2025</div>
              <div className="text-gray-400 text-xs mt-1">Open first EFG Childcare (Riyadh)</div>
              <div className="mt-2 h-1 w-10 bg-[#f37121] rounded-full mx-auto"></div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 p-4 rounded-lg text-center border border-white/10 shadow"
            >
              <div className="text-base font-bold text-[#f37121]">Q3 2026</div>
              <div className="text-gray-400 text-xs mt-1">Open EFG International Schools (Riyadh & Jeddah)</div>
              <div className="mt-2 h-1 w-10 bg-[#f37121] rounded-full mx-auto"></div>
            </motion.div>
          </div>
        </section>

        {/* GROWTH INSIGHTS */}
        <section className="grid md:grid-cols-2 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 p-4 rounded-xl border border-white/10 shadow"
          >
            <div className="flex items-center gap-2 mb-3">
              <FaChartLine className="text-lg text-[#f37121]" />
              <h4 className="text-lg font-bold text-[#f37121]">Market Snapshot</h4>
            </div>
            <ul className="text-gray-300 text-sm space-y-2">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#f37121] mt-1.5 flex-shrink-0"></div>
                <span>Private K-12 TAM: USD 13–20B+</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#f37121] mt-1.5 flex-shrink-0"></div>
                <span>Pre-school market (2024): ~USD 1.29B</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#f37121] mt-1.5 flex-shrink-0"></div>
                <span>Road freight to 2030: ~USD 8.82B</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 p-4 rounded-xl border border-white/10 shadow"
          >
            <div className="flex items-center gap-2 mb-3">
              <FaRocket className="text-lg text-[#f37121]" />
              <h4 className="text-lg font-bold text-[#f37121]">Strategic Priorities</h4>
            </div>
            <ul className="text-gray-300 text-sm space-y-2">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#f37121] mt-1.5 flex-shrink-0"></div>
                <span>Accreditation & curriculum excellence</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#f37121] mt-1.5 flex-shrink-0"></div>
                <span>Fleet efficiency & telematics</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#f37121] mt-1.5 flex-shrink-0"></div>
                <span>Clustered childcare roll-out</span>
              </li>
            </ul>
          </motion.div>
        </section>

        {/* SUSTAINABILITY */}
        <section className="grid md:grid-cols-3 gap-6 items-start">
          <div className="md:col-span-2 bg-white/8 backdrop-blur p-4 rounded-xl border border-white/10 shadow-lg">
            <div className="flex items-center gap-2 mb-3">
              <FaLeaf className="text-lg text-[#f37121]" />
              <h4 className="text-lg font-bold text-[#f37121]">Sustainability & CSR</h4>
            </div>
            <p className="text-gray-300 text-sm">EFG drives eco-efficiency pilots for trucks, supports community scholarships and workplace childcare to increase female workforce participation.</p>
            <div className="grid grid-cols-3 gap-3 mt-4">
              <div className="bg-white/5 p-3 rounded-lg text-center">
                <div className="text-base font-bold text-[#f37121]">Fuel-efficiency</div>
                <p className="text-gray-400 text-xs mt-1">Reducing emissions</p>
              </div>
              <div className="bg-white/5 p-3 rounded-lg text-center">
                <div className="text-base font-bold text-[#f37121]">Scholarships</div>
                <p className="text-gray-400 text-xs mt-1">Supporting students</p>
              </div>
              <div className="bg-white/5 p-3 rounded-lg text-center">
                <div className="text-base font-bold text-[#f37121]">Community</div>
                <p className="text-gray-400 text-xs mt-1">Local initiatives</p>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 rounded-xl p-3 flex items-center justify-center h-full border border-white/10 shadow"
          >
            <div className="relative w-full h-48 rounded-lg overflow-hidden">
              <img src="/images/re.jpeg" alt="sustainability" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
                <div className="text-white">
                  <h5 className="font-bold text-sm">Green Initiatives</h5>
                  <p className="text-xs text-gray-300">Building a sustainable future</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* TEAM */}
        <section>
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-[#f37121]">Our Leadership Team</h2>
            <p className="text-gray-400 mt-1 text-sm max-w-xl mx-auto">Experienced professionals driving our vision forward</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Sameh Hassan', title: 'COO', img: '/images/mrsam2.jpg', desc: '8+ years in Management ' },
              { name: 'Nader Magdy', title: 'CEO', img: '/images/nader.jpeg', desc: '15+ years in business development' },
              { name: 'Eslam Sorour', title: 'B2C HOD', img: '/images/eslam.jpeg', desc: 'Logistics expert with 10+ years in transport' },
              { name: 'Mohamed Al Zahrani', title: 'HR Manager', img: '/images/zaa.png', desc: 'Child development specialist' },
            ].map((p, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-gradient-to-b from-white/5 to-transparent p-3 rounded-xl text-center border border-white/10 shadow hover:shadow-md transition-all"
              >
                <div className="relative inline-block">
                  <img src={p.img} alt={p.name} className="w-35 h-50 object-cover rounded-3xl mx-auto  shadow" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 bg-[#f37121] rounded-full border border-white"></div>
                </div>
                <div className="mt-3">
                  <div className="font-bold text-sm">{p.name}</div>
                  <div className="text-[#f37121] text-xs font-medium">{p.title}</div>
                  <div className="text-gray-400 text-xs mt-1">{p.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* GALLERY */}
<section>
  <div className="text-center mb-6">
    <h2 className="text-2xl font-bold text-[#f37121]">Our Gallery</h2>
    <p className="text-gray-400 mt-1 text-sm">
      Capturing moments from across our divisions
    </p>
  </div>

  <div className="grid grid-cols-2 md:grid-cols-7 gap-3">
    {[
      { title: 'Campus - Riyadh', desc: 'Modern learning environments', img: '/images/childcare/1.jpeg' },
      { title: 'Childcare Activities', desc: 'Engaging early childhood programs', img: '/images/childcare/2.jpeg' },
      { title: 'Fleet', desc: 'State-of-the-art transport solutions', img: '/images/childcare/3.jpeg' },
      { title: 'Team', desc: 'Dedicated professionals', img: '/images/childcare/4.jpeg' },
      { title: 'Facilities', desc: 'World-class infrastructure', img: '/images/childcare/5.jpeg' },
      { title: 'Events', desc: 'Community engagement', img: '/images/childcare/6.jpeg' },
      { title: 'Technology', desc: 'Innovative solutions', img: '/images/childcare/7.jpeg' },
      { title: 'Awards', desc: 'Recognition of excellence', img: '/images/childcare/8.jpeg' },
      { title: 'Awards', desc: 'Recognition of excellence', img: '/images/childcare/9.jpeg' },
      { title: 'Awards', desc: 'Recognition of excellence', img: '/images/childcare/10.jpeg' },
      { title: 'Awards', desc: 'Recognition of excellence', img: '/images/childcare/11.jpeg' },
      { title: 'Awards', desc: 'Recognition of excellence', img: '/images/childcare/12.jpeg' },
      { title: 'Awards', desc: 'Recognition of excellence', img: '/images/childcare/13.jpeg' },
      { title: 'Awards', desc: 'Recognition of excellence', img: '/images/childcare/14.jpeg' },
    ].map((item, i) => (
      <motion.div 
        key={i}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: i * 0.05 }}
        className="relative overflow-hidden rounded-xl group cursor-pointer"
      >
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-50 object-cover  transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-2">
          <div className="text-white font-bold text-xs">{item.title}</div>
          <div className="text-gray-300 text-xs">{item.desc}</div>
        </div>
      </motion.div>
    ))}
  </div>
</section>


        {/* PARTNERS & TESTIMONIALS */}
        <section className="grid md:grid-cols-3 gap-6 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 p-4 rounded-xl border border-white/10 shadow"
          >
            <h4 className="text-lg font-bold text-[#f37121] mb-3">Anchor Partners</h4>
            <div className="grid grid-cols-2 gap-3">
              {[1,2,3,4,5,6].map(i => (
                <div key={i} className="bg-white/5 p-2 rounded-lg flex items-center justify-center h-12">
                  <div className="text-gray-400 text-xs font-medium">Partner {i}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="md:col-span-2 space-y-4">
            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white/8 backdrop-blur p-4 rounded-xl border border-white/10 shadow-lg"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#f37121]/20 flex items-center justify-center text-[#f37121] flex-shrink-0">
                  <FaQuoteLeft />
                </div>
                <div>
<p className="italic text-gray-300 text-sm">
  &quot;EFG transformed our logistics operations - on-time, professional and tech-enabled. Their reliability has been crucial for our project timelines.&quot;
</p>                  <div className="mt-3 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-xs text-gray-400">CC</div>
                    <div>
                      <div className="font-bold text-[#f37121] text-sm">Construction Co.</div>
                      <div className="text-gray-400 text-xs">Major Infrastructure Developer</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white/8 backdrop-blur p-4 rounded-xl border border-white/10 shadow-lg"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#f37121]/20 flex items-center justify-center text-[#f37121] flex-shrink-0">
                  <FaQuoteLeft />
                </div>
                <div>
<p className="italic text-gray-300 text-sm">
  &quot;The childcare solution improved staff retention and morale - excellent communications and outstanding care for our employees&apos; children.&quot;
</p>                  <div className="mt-3 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-xs text-gray-400">HM</div>
                    <div>
                      <div className="font-bold text-[#f37121] text-sm">HR Manager, Industrial Firm</div>
                      <div className="text-gray-400 text-xs">Manufacturing Sector</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CONTACT CTA */}
        <section id="contact" className="bg-gradient-to-r from-gray-900/80 to-gray-800/60 backdrop-blur rounded-xl p-6 border border-white/10 shadow-lg">
          <div className="md:flex md:items-center md:justify-between gap-4">
            <div className="md:w-1/2">
              <h3 className="text-xl font-bold text-[#f37121]">Get in touch with us</h3>
              <p className="text-gray-300 mt-1 text-sm">Book a visit, partnership inquiry, or fleet contract - we reply within 24 hours.</p>
              
              <div className="mt-4 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#f37121]/20 flex items-center justify-center text-[#f37121]">
                    <FaPhoneAlt className="text-xs" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs">Phone</div>
                    <a href="tel:+966540958433" className="font-medium text-sm hover:text-[#f37121] transition-colors">+966 54 095 8433</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#f37121]/20 flex items-center justify-center text-[#f37121]">
                    <FaEnvelope className="text-xs" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs">Email</div>
                    <a href="mailto:info@energizefuture.com" className="font-medium text-sm hover:text-[#f37121] transition-colors">info@energizefuture.com</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#f37121]/20 flex items-center justify-center text-[#f37121]">
                    <FaMapMarkerAlt className="text-xs" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs">Address</div>
                    <div className="font-medium text-sm">Jeddah, Saudi Arabia</div>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-3 mt-4">
                <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#f37121] transition-colors text-xs">
                  <FaTwitter />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#f37121] transition-colors text-xs">
                  <FaLinkedin />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#f37121] transition-colors text-xs">
                  <FaInstagram />
                </a>
              </div>
            </div>

            <div className="md:w-1/2 mt-6 md:mt-0">
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <h4 className="text-base font-bold mb-3">Send us a message</h4>
                <form className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <input 
                      type="text" 
                      placeholder="First Name" 
                      className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-[#f37121] transition-colors"
                    />
                    <input 
                      type="text" 
                      placeholder="Last Name" 
                      className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-[#f37121] transition-colors"
                    />
                  </div>
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-[#f37121] transition-colors"
                  />
                  <select className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-[#f37121] transition-colors">
                    <option value="">Select Interest</option>
                    <option value="education">Education</option>
                    <option value="childcare">Childcare</option>
                    <option value="logistics">Logistics</option>
                    <option value="partnership">Partnership</option>
                  </select>
                  <textarea 
                    placeholder="Your Message" 
                    rows={3}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-[#f37121] transition-colors"
                  ></textarea>
                  <button 
                    type="submit"
                    className="w-full py-2 rounded-lg bg-gradient-to-r from-[#f37121] to-orange-500 text-black font-bold text-sm hover:scale-105 transition-transform"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        

      </div>
    </main>
  )
}