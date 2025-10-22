'use client'

import { motion } from 'framer-motion'
import { FaSchool, FaGraduationCap, FaGlobeAmericas, FaAward, FaUsers, FaMapMarkerAlt, FaCalendarAlt, FaBook } from 'react-icons/fa'

export default function InternationalSchools() {
  const features = [
    {
      icon: <FaGraduationCap className="text-xl" />,
      title: "IB/CIS Pathways",
      description: "International Baccalaureate and Council of International Schools accreditation"
    },
    {
      icon: <FaGlobeAmericas className="text-xl" />,
      title: "Bilingual Education",
      description: "Arabic-English bilingual tracks with cultural integration"
    },
    {
      icon: <FaAward className="text-xl" />,
      title: "STEAM Focus",
      description: "Science, Technology, Engineering, Arts, and Mathematics curriculum"
    },
    {
      icon: <FaUsers className="text-xl" />,
      title: "Expert Faculty",
      description: "Internationally trained teachers and specialists"
    }
  ]

  const campuses = [
    {
      location: "Riyadh Campus",
      status: "Opening Q3 2026",
      capacity: "500+ students",
      programs: "KG to Primary"
    },
    {
      location: "Jeddah Campus",
      status: "Opening Q3 2026", 
      capacity: "500+ students",
      programs: "KG to Primary"
    },
    {
      location: "Riyadh Expansion",
      status: "Phase 2 - 2027",
      capacity: "800+ students",
      programs: "Secondary Education"
    }
  ]

  const stats = [
    { icon: <FaSchool />, value: "3", label: "Campuses" },
    { icon: <FaUsers />, value: "1000+", label: "Student Capacity" },
    { icon: <FaBook />, value: "IB/CIS", label: "Accreditation" },
    { icon: <FaCalendarAlt />, value: "2026", label: "First Opening" }
  ]

  return (
    <div className="min-h-screen bg-[#0a0f1d] text-white">
      {/* Header */}
<motion.header
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  className="relative overflow-hidden bg-gradient-to-br from-[#0a0f1d] to-[#1a1f2e] pt-10 md:pt-1"
>
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-[url('/images/hee.jpeg')] bg-cover bg-center opacity-10"></div>
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0f1d]"></div>
  </div>
  
  <div className="relative max-w-6xl mx-auto px-4 py-12 md:py-20">
    <div className="text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="inline-flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full border border-white/10 mb-6"
      >
        <FaSchool className="text-lg text-[#f37121]" />
        <span className="text-sm font-semibold">Education Division</span>
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-3xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#f37121] to-orange-400 mb-4"
      >
        EFG International Schools
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-lg text-gray-300 max-w-2xl mx-auto px-4"
      >
        World-class international education with Saudi cultural values, preparing students for global success
      </motion.p>
    </div>
  </div>
</motion.header>

      {/* Stats */}
      <section className="max-w-6xl mx-auto px-4 mt-8 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="bg-gradient-to-br from-white/5 to-transparent p-4 rounded-xl border border-white/10 text-center"
            >
              <div className="text-[#f37121] mb-2 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-xl font-bold">{stat.value}</div>
              <div className="text-gray-400 text-xs mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 pb-16 space-y-16">
        {/* Overview */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#f37121] mb-4">Educational Excellence</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              EFG International Schools represent our commitment to providing exceptional education that 
              combines international standards with local cultural values. Our campuses are designed to 
              nurture curious minds and develop future leaders.
            </p>
            <div className="space-y-3">
              {[
                "Three strategic campuses in Riyadh and Jeddah",
                "KG to Primary launch with Secondary expansion plans",
                "IB and CIS accreditation pathways",
                "Bilingual Arabic-English curriculum"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#f37121] rounded-full flex-shrink-0"></div>
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white/5 rounded-xl p-4 border border-white/10">
            <img 
              src="/images/hee.jpeg" 
              alt="School Campus" 
              className="w-full h-64 md:h-80 object-cover rounded-lg"
            />
          </div>
        </motion.section>

        {/* Features */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#f37121] mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-white/5 to-transparent p-4 rounded-xl border border-white/10 text-center hover:border-[#f37121]/30 transition-all"
              >
                <div className="text-[#f37121] mb-3 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-xs leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Campuses */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#f37121] mb-12">Our Campuses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {campuses.map((campus, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-white/5 to-transparent p-6 rounded-xl border border-white/10 hover:border-[#f37121]/30 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <FaMapMarkerAlt className="text-[#f37121]" />
                  <h3 className="text-lg font-bold">{campus.location}</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">Status:</span>
                    <span className="text-[#f37121] font-semibold text-sm">{campus.status}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">Capacity:</span>
                    <span className="text-white text-sm">{campus.capacity}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">Programs:</span>
                    <span className="text-white text-sm">{campus.programs}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-[#f37121] to-orange-500 rounded-xl p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-3">Ready to Learn More?</h2>
            <p className="text-black/80 mb-4 text-sm">
              Contact us for campus tours, admission information, or partnership opportunities
            </p>
            <button className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-900 transition-colors text-sm">
              Get In Touch
            </button>
          </div>
        </motion.section>
      </div>
    </div>
  )
}