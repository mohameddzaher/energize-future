'use client'

import { motion } from 'framer-motion'
import { 
  FaSchool, 
  FaBaby, 
  FaTruckMoving, 
  FaUsers, 
  FaChartLine, 
  FaShieldAlt, 
  FaHandshake,
  FaRocket,
  FaGraduationCap,
  FaLeaf,
  FaCogs,
  FaHeadset
} from 'react-icons/fa'

export default function ServicesPage() {
  const reveal = { 
    hidden: { opacity: 0, y: 14 }, 
    show: (i = 0) => ({ 
      opacity: 1, 
      y: 0, 
      transition: { delay: i * 0.08 } 
    }) 
  }

  const services = [
    {
      icon: <FaSchool className="text-2xl" />,
      title: "EFG International Schools",
      description: "Premium international education with IB/CIS pathways, STEAM focus, and bilingual tracks across multiple campuses.",
      features: ["KG to Primary Education", "IB & CIS Accreditation", "STEAM Labs", "Bilingual Curriculum", "Modern Facilities"],
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30"
    },
    {
      icon: <FaBaby className="text-2xl" />,
      title: "EFG Childcare Centers",
      description: "Comprehensive childcare solutions with Montessori approach, parent apps, and secure learning environments.",
      features: ["Montessori Curriculum", "Parent Mobile App", "Secure Facilities", "Trained Caregivers", "Daily Progress Reports"],
      color: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30"
    },
    {
      icon: <FaTruckMoving className="text-2xl" />,
      title: "Heavy Transport & Logistics",
      description: "Reliable heavy haulage services for construction, energy, and manufacturing sectors with advanced telematics.",
      features: ["Project-based Haulage", "Telematics & GPS", "Predictive Maintenance", "24/7 Support", "Backhaul Optimization"],
      color: "from-orange-500/20 to-red-500/20",
      borderColor: "border-orange-500/30"
    },
    {
      icon: <FaHandshake className="text-2xl" />,
      title: "Strategic Partnerships",
      description: "Corporate partnerships for integrated education, childcare, and logistics solutions.",
      features: ["Corporate Childcare", "Employee Benefits", "Custom Solutions", "Long-term Contracts", "Dedicated Support"],
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30"
    },
    {
      icon: <FaShieldAlt className="text-2xl" />,
      title: "Safety & Compliance",
      description: "Comprehensive safety protocols and regulatory compliance across all our service divisions.",
      features: ["ISO Certifications", "Regular Audits", "Safety Training", "Quality Assurance", "Compliance Monitoring"],
      color: "from-yellow-500/20 to-amber-500/20",
      borderColor: "border-yellow-500/30"
    },
    {
      icon: <FaCogs className="text-2xl" />,
      title: "Consulting Services",
      description: "Expert consulting for education setup, childcare operations, and logistics optimization.",
      features: ["Feasibility Studies", "Operational Setup", "Process Optimization", "Staff Training", "Quality Systems"],
      color: "from-gray-500/20 to-slate-500/20",
      borderColor: "border-gray-500/30"
    }
  ]

  const stats = [
    { number: "3", label: "School Campuses", icon: <FaSchool /> },
    { number: "100+", label: "Childcare Capacity", icon: <FaBaby /> },
    { number: "34", label: "Truck Fleet", icon: <FaTruckMoving /> },
    { number: "360+", label: "Employees", icon: <FaUsers /> }
  ]

  return (
    <main className="bg-[#0a0f1d] text-white min-h-screen antialiased pt-8">
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-16">

        {/* HERO SECTION */}
        <section className="text-center space-y-4">
          <motion.h1 
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: true }} 
            variants={reveal} 
            className="text-2xl md:text-3xl font-bold text-[#f37121]"
          >
            Our Services
          </motion.h1>
          <motion.p 
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: true }} 
            variants={reveal} 
            className="text-gray-400 text-sm max-w-2xl mx-auto"
          >
            Comprehensive solutions in education, childcare, and logistics designed to meet the evolving needs 
            of Saudi families and businesses while supporting Vision 2030 objectives.
          </motion.p>
        </section>

        {/* STATS */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 p-4 rounded-xl border border-white/10 text-center"
            >
              <div className="text-[#f37121] flex justify-center mb-2">
                {stat.icon}
              </div>
              <div className="text-xl font-bold text-white">{stat.number}</div>
              <div className="text-gray-400 text-xs mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </section>

        {/* SERVICES GRID */}
        <section className="space-y-12">
          <div className="text-center space-y-2">
            <motion.h2 
              initial="hidden" 
              whileInView="show" 
              viewport={{ once: true }} 
              variants={reveal}
              className="text-xl font-bold text-white"
            >
              Core Service Divisions
            </motion.h2>
            <motion.p 
              initial="hidden" 
              whileInView="show" 
              viewport={{ once: true }} 
              variants={reveal}
              className="text-gray-400 text-sm"
            >
              Integrated solutions that work together to build a better future
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={reveal}
                custom={index}
                className={`bg-gradient-to-br ${service.color} border ${service.borderColor} rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 group`}
              >
                <div className="text-[#f37121] mb-3 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-xs text-gray-400">
                      <div className="w-1.5 h-1.5 bg-[#f37121] rounded-full flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full mt-4 py-2 text-xs bg-white/10 hover:bg-white/20 text-white rounded-lg border border-white/20 transition-colors duration-300">
                  Learn More
                </button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PROCESS SECTION */}
        <section className="bg-white/5 rounded-xl p-6 border border-white/10">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={reveal}
            className="text-center space-y-4"
          >
            <h2 className="text-xl font-bold text-[#f37121]">Our Process</h2>
            <p className="text-gray-400 text-sm max-w-2xl mx-auto">
              We follow a structured approach to ensure quality and excellence in every service we provide
            </p>
            
            <div className="grid md:grid-cols-4 gap-4 mt-6">
              {[
                { step: "01", title: "Consultation", desc: "Understand your needs", icon: <FaHeadset /> },
                { step: "02", title: "Planning", desc: "Custom solution design", icon: <FaChartLine /> },
                { step: "03", title: "Implementation", desc: "Quality execution", icon: <FaRocket /> },
                { step: "04", title: "Support", desc: "Ongoing excellence", icon: <FaShieldAlt /> }
              ].map((item, index) => (
                <div key={index} className="text-center p-4">
                  <div className="w-12 h-12 bg-[#f37121] rounded-full flex items-center justify-center mx-auto mb-3 text-white">
                    {item.icon}
                  </div>
                  <div className="text-[#f37121] text-sm font-bold mb-1">{item.step}</div>
                  <h4 className="text-white font-semibold text-sm mb-1">{item.title}</h4>
                  <p className="text-gray-400 text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CTA SECTION */}
        <section className="text-center space-y-4">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={reveal}
            className="bg-gradient-to-r from-[#f37121]/10 to-orange-500/10 border border-[#f37121]/20 rounded-xl p-6"
          >
            <h3 className="text-lg font-bold text-white mb-2">Ready to Get Started?</h3>
            <p className="text-gray-400 text-sm mb-4 max-w-md mx-auto">
              Contact us today to discuss how our services can benefit your organization or family
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="bg-[#f37121] hover:bg-orange-500 text-white px-6 py-2 rounded-lg text-sm font-semibold transition-colors duration-300">
                Contact Sales
              </button>
              <button className="border border-[#f37121] text-[#f37121] hover:bg-[#f37121] hover:text-white px-6 py-2 rounded-lg text-sm font-semibold transition-colors duration-300">
                View Case Studies
              </button>
            </div>
          </motion.div>
        </section>

      </div>
    </main>
  )
}