'use client'

import { motion } from 'framer-motion'
import { FaTruckMoving, FaShieldAlt, FaCogs, FaChartLine, FaMapMarkerAlt, FaHeadset, FaRoad, FaCog } from 'react-icons/fa'

export default function TransportLogistics() {
  const services = [
    {
      icon: <FaTruckMoving className="text-xl" />,
      title: "Heavy Haulage",
      description: "Specialized transport for construction, energy, and manufacturing"
    },
    {
      icon: <FaCogs className="text-xl" />,
      title: "Project Logistics",
      description: "End-to-end project management for complex requirements"
    },
    {
      icon: <FaChartLine className="text-xl" />,
      title: "Telematics",
      description: "Advanced GPS tracking and fleet management technology"
    },
    {
      icon: <FaShieldAlt className="text-xl" />,
      title: "Predictive Maintenance",
      description: "AI-driven maintenance scheduling to minimize downtime"
    }
  ]

  const fleet = [
    {
      type: "Heavy Duty Trucks",
      count: "34+",
      features: ["40-ton capacity", "Specialized trailers", "All-terrain capability"]
    },
    {
      type: "Support Vehicles", 
      count: "12+",
      features: ["Maintenance units", "Escort vehicles", "Emergency response"]
    },
    {
      type: "Specialized Equipment",
      count: "8+",
      features: ["Cranes", "Low-loaders", "Custom configurations"]
    }
  ]

  const stats = [
    { icon: <FaTruckMoving />, value: "34+", label: "Trucks" },
    { icon: <FaRoad />, value: "24/7", label: "Operations" },
    { icon: <FaHeadset />, value: "100%", label: "Support" },
    { icon: <FaCog />, value: "AI", label: "Technology" }
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
    <div className="absolute inset-0 bg-[url('/images/f.jpeg')] bg-cover bg-center opacity-10"></div>
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
        <FaTruckMoving className="text-lg text-[#f37121]" />
        <span className="text-sm font-semibold">Logistics Division</span>
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#f37121] to-orange-400 mb-4"
      >
        Heavy Transport & Logistics
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-lg text-gray-300 max-w-2xl mx-auto px-4"
      >
        Reliable, technology-driven logistics solutions for Saudi Arabia growing infrastructure needs
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
            <h2 className="text-2xl md:text-3xl font-bold text-[#f37121] mb-4">Powering Saudi Infrastructure</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
Our heavy transport and logistics division supports Saudi Arabia Vision 2030 
with reliable, efficient transportation solutions for critical infrastructure projects. 
With 34+ trucks and advanced telematics, we ensure your projects stay on schedule.
            </p>
            <div className="space-y-3">
              {[
                "34+ truck fleet with specialized equipment",
                "Advanced telematics and real-time tracking",
                "24/7 operational support and maintenance",
                "Backhaul optimization for maximum efficiency"
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
              src="/images/f.jpeg" 
              alt="Transport Fleet" 
              className="w-full h-64 md:h-80 object-cover rounded-lg"
            />
          </div>
        </motion.section>

        {/* Services */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#f37121] mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-white/5 to-transparent p-4 rounded-xl border border-white/10 text-center hover:border-[#f37121]/30 transition-all"
              >
                <div className="text-[#f37121] mb-3 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                <p className="text-gray-300 text-xs leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Fleet */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#f37121] mb-12">Our Fleet</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {fleet.map((vehicle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-white/5 to-transparent p-6 rounded-xl border border-white/10 hover:border-[#f37121]/30 transition-all"
              >
                <div className="text-center mb-4">
                  <div className="text-[#f37121] font-bold text-xl mb-2">{vehicle.count}</div>
                  <h3 className="text-lg font-bold">{vehicle.type}</h3>
                </div>
                <ul className="space-y-2">
                  {vehicle.features.map((feature, featureIndex) => (
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

        {/* Technology */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-r from-[#f37121]/10 to-orange-500/10 rounded-xl p-6 border border-[#f37121]/20">
            <div className="flex items-center gap-3 mb-6">
              <FaCogs className="text-xl text-[#f37121]" />
              <h2 className="text-2xl font-bold">Technology & Innovation</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-bold text-[#f37121] mb-3">Telematics & Tracking</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  {[
                    "Real-time GPS tracking and monitoring",
                    "Route optimization and fuel efficiency", 
                    "Predictive maintenance scheduling",
                    "Automated reporting and analytics"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#f37121] rounded-full flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#f37121] mb-3">Operational Excellence</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  {[
                    "24/7 customer support and monitoring",
                    "Backhaul optimization for efficiency",
                    "Compliance and safety management",
                    "Emergency response protocols"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#f37121] rounded-full flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
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
            <h2 className="text-xl md:text-2xl font-bold text-black mb-3">Need Logistics Solutions?</h2>
            <p className="text-black/80 mb-4 text-sm">
              Get a custom quote for your project transportation needs
            </p>
            <button className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-900 transition-colors text-sm">
              Request Quote
            </button>
          </div>
        </motion.section>
      </div>
    </div>
  )
}