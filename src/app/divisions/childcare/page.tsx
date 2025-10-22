'use client'

import { motion } from 'framer-motion'
import { FaBaby, FaHeart, FaShieldAlt, FaMobileAlt, FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt, FaUsers } from 'react-icons/fa'

export default function Childcare() {
  const features = [
    {
      icon: <FaGraduationCap className="text-xl" />,
      title: "Montessori + FLYS",
      description: "Bilingual curricula combining Montessori methods with FLYS educational approach"
    },
    {
      icon: <FaMobileAlt className="text-xl" />,
      title: "Parent App",
      description: "Real-time updates, daily reports, and direct communication with caregivers"
    },
    {
      icon: <FaShieldAlt className="text-xl" />,
      title: "Secure Facilities",
      description: "State-of-the-art security systems and controlled access environments"
    },
    {
      icon: <FaHeart className="text-xl" />,
      title: "Trained Caregivers",
      description: "Highly qualified staff with specialized early childhood development training"
    }
  ]

  const programs = [
    {
      age: "6 months - 2 years",
      program: "Infant Care",
      features: ["Sensory development", "Secure bonding", "Individualized care"]
    },
    {
      age: "2-3 years", 
      program: "Toddler Program",
      features: ["Language development", "Social skills", "Creative play"]
    },
    {
      age: "3-5 years",
      program: "Preschool Prep",
      features: ["Academic readiness", "Bilingual foundation", "STEAM introduction"]
    }
  ]

  const stats = [
    { icon: <FaCalendarAlt />, value: "Q4 2025", label: "First Facility Opening" },
    { icon: <FaUsers />, value: "100+", label: "Childcare Capacity" },
    { icon: <FaMapMarkerAlt />, value: "Riyadh", label: "First Location" },
    { icon: <FaBaby />, value: "3", label: "Age Programs" }
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
    <div className="absolute inset-0 bg-[url('/images/wf.jpeg')] bg-cover bg-center opacity-10"></div>
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
        <FaBaby className="text-lg text-[#f37121]" />
        <span className="text-sm font-semibold">Childcare Division</span>
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#f37121] to-orange-400 mb-4"
      >
        EFG Childcare
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-lg text-gray-300 max-w-2xl mx-auto px-4"
      >
        Nurturing young minds with love, security, and innovative early childhood education
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
            <h2 className="text-2xl md:text-3xl font-bold text-[#f37121] mb-4">Safe & Nurturing Environment</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              EFG Childcare provides a secure, stimulating environment where children can explore, 
              learn, and grow. Our bilingual Montessori and FLYS curricula are designed to develop 
              the whole child - emotionally, socially, and academically.
            </p>
            <div className="space-y-3">
              {[
                "First facility opening Q4 2025 in Riyadh",
                "100+ childcare capacity across multiple locations",
                "Real-time parent communication app",
                "Highly trained caregivers and specialists"
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
              src="/images/wf.jpeg" 
              alt="Childcare Facility" 
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
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#f37121] mb-12">Our Approach</h2>
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

        {/* Programs */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#f37121] mb-12">Age-Specific Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-white/5 to-transparent p-6 rounded-xl border border-white/10 hover:border-[#f37121]/30 transition-all"
              >
                <div className="text-center mb-4">
                  <div className="text-[#f37121] font-bold text-sm mb-2">{program.age}</div>
                  <h3 className="text-xl font-bold">{program.program}</h3>
                </div>
                <ul className="space-y-2">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-gray-300 text-xs">
                      <div className="w-1.5 h-1.5 bg-[#f37121] rounded-full flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Locations */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <FaMapMarkerAlt className="text-xl text-[#f37121]" />
              <h2 className="text-2xl font-bold">Launch Locations</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="text-center p-4 bg-white/5 rounded-lg">
                <h3 className="text-lg font-bold text-[#f37121] mb-2">Riyadh - First Facility</h3>
                <p className="text-gray-300 text-sm mb-2">Opening: Q4 2025</p>
                <p className="text-gray-400 text-xs">Strategic location with easy access for working parents</p>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-lg">
                <h3 className="text-lg font-bold text-[#f37121] mb-2">Future Expansions</h3>
                <p className="text-gray-300 text-sm mb-2">2026-2027</p>
                <p className="text-gray-400 text-xs">Additional locations in Jeddah and Eastern Province</p>
              </div>
            </div>
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
            <h2 className="text-xl md:text-2xl font-bold text-black mb-3">Interested in Enrollment?</h2>
            <p className="text-black/80 mb-4 text-sm">
              Join our waiting list for the first Riyadh facility opening Q4 2025
            </p>
            <button className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-900 transition-colors text-sm">
              Join Waiting List
            </button>
          </div>
        </motion.section>
      </div>
    </div>
  )
}