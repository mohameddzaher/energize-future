// 'use client'

// import { motion } from 'framer-motion'
// import Link from 'next/link'
// import { 
//   FaSchool, 
//   FaBaby, 
//   FaTruckMoving, 
//   FaUsers, 
//   FaChartLine, 
//   FaShieldAlt, 
//   FaHandshake,
//   FaRocket,
//   FaGraduationCap,
//   FaLeaf,
//   FaCogs,
//   FaHeadset,
//   FaArrowRight
// } from 'react-icons/fa'

// export default function ServicesPage() {
//   const reveal = { 
//     hidden: { opacity: 0, y: 14 }, 
//     show: (i = 0) => ({ 
//       opacity: 1, 
//       y: 0, 
//       transition: { delay: i * 0.08 } 
//     }) 
//   }

//   const services = [
//     {
//       icon: <FaSchool className="text-lg" />,
//       title: "EFG International Schools",
//       description: "Premium international education with IB/CIS pathways, STEAM focus, and bilingual tracks.",
//       features: ["KG to Primary Education", "IB & CIS Accreditation", "STEAM Labs", "Bilingual Curriculum"],
//       color: "from-blue-500/20 to-cyan-500/20",
//       borderColor: "border-blue-500/30",
//       link: "/divisions/international-schools"
//     },
//     {
//       icon: <FaBaby className="text-lg" />,
//       title: "EFG Childcare Centers",
//       description: "Comprehensive childcare solutions with Montessori approach and secure learning environments.",
//       features: ["Montessori Curriculum", "Parent Mobile App", "Secure Facilities", "Trained Caregivers"],
//       color: "from-green-500/20 to-emerald-500/20",
//       borderColor: "border-green-500/30",
//       link: "/divisions/childcare"
//     },
//     {
//       icon: <FaTruckMoving className="text-lg" />,
//       title: "Heavy Transport & Logistics",
//       description: "Reliable heavy haulage services with advanced telematics and predictive maintenance.",
//       features: ["Project-based Haulage", "Telematics & GPS", "Predictive Maintenance", "24/7 Support"],
//       color: "from-orange-500/20 to-red-500/20",
//       borderColor: "border-orange-500/30",
//       link: "/divisions/transport-logistics"
//     },
//     {
//       icon: <FaHandshake className="text-lg" />,
//       title: "Strategic Partnerships",
//       description: "Corporate partnerships for integrated education, childcare, and logistics solutions.",
//       features: ["Corporate Childcare", "Employee Benefits", "Custom Solutions", "Dedicated Support"],
//       color: "from-purple-500/20 to-pink-500/20",
//       borderColor: "border-purple-500/30",
//       link: "/contact"
//     },
//     {
//       icon: <FaShieldAlt className="text-lg" />,
//       title: "Safety & Compliance",
//       description: "Comprehensive safety protocols and regulatory compliance across all service divisions.",
//       features: ["ISO Certifications", "Regular Audits", "Safety Training", "Quality Assurance"],
//       color: "from-yellow-500/20 to-amber-500/20",
//       borderColor: "border-yellow-500/30",
//       link: "/contact"
//     },
//     {
//       icon: <FaCogs className="text-lg" />,
//       title: "Consulting Services",
//       description: "Expert consulting for education setup, childcare operations, and logistics optimization.",
//       features: ["Feasibility Studies", "Operational Setup", "Process Optimization", "Staff Training"],
//       color: "from-gray-500/20 to-slate-500/20",
//       borderColor: "border-gray-500/30",
//       link: "/contact"
//     }
//   ]

//   const stats = [
//     { number: "3", label: "School Campuses", icon: <FaSchool /> },
//     { number: "100+", label: "Childcare Capacity", icon: <FaBaby /> },
//     { number: "34", label: "Truck Fleet", icon: <FaTruckMoving /> },
//     { number: "360+", label: "Employees", icon: <FaUsers /> }
//   ]

//   return (
//     <main className="bg-[#0a0f1d] text-white min-h-screen antialiased pt-8">
//       <div className="max-w-6xl mx-auto px-4 py-8 space-y-12">

//         {/* HERO SECTION */}
//         <section className="text-center space-y-4">
//           <motion.h1 
//             initial="hidden" 
//             whileInView="show" 
//             viewport={{ once: true }} 
//             variants={reveal} 
//             className="text-2xl md:text-3xl font-bold text-[#f37121]"
//           >
//             Our Services
//           </motion.h1>
//           <motion.p 
//             initial="hidden" 
//             whileInView="show" 
//             viewport={{ once: true }} 
//             variants={reveal} 
//             className="text-gray-400 text-sm max-w-2xl mx-auto"
//           >
//             Comprehensive solutions in education, childcare, and logistics designed to meet the evolving needs 
//             of Saudi families and businesses while supporting Vision 2030 objectives.
//           </motion.p>
//         </section>

//         {/* STATS */}
//         <section className="grid grid-cols-2 md:grid-cols-4 gap-3">
//           {stats.map((stat, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1 }}
//               className="bg-white/5 p-3 rounded-lg border border-white/10 text-center"
//             >
//               <div className="text-[#f37121] flex justify-center mb-1">
//                 {stat.icon}
//               </div>
//               <div className="text-lg font-bold text-white">{stat.number}</div>
//               <div className="text-gray-400 text-xs mt-1">{stat.label}</div>
//             </motion.div>
//           ))}
//         </section>

//         {/* SERVICES GRID */}
//         <section className="space-y-8">
//           <div className="text-center space-y-2">
//             <motion.h2 
//               initial="hidden" 
//               whileInView="show" 
//               viewport={{ once: true }} 
//               variants={reveal}
//               className="text-xl font-bold text-white"
//             >
//               Core Service Divisions
//             </motion.h2>
//             <motion.p 
//               initial="hidden" 
//               whileInView="show" 
//               viewport={{ once: true }} 
//               variants={reveal}
//               className="text-gray-400 text-sm"
//             >
//               Integrated solutions that work together to build a better future
//             </motion.p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {services.map((service, index) => (
//               <motion.div
//                 key={index}
//                 initial="hidden"
//                 whileInView="show"
//                 viewport={{ once: true }}
//                 variants={reveal}
//                 custom={index}
//                 className={`bg-gradient-to-br ${service.color} border ${service.borderColor} rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 group`}
//               >
//                 <div className="text-[#f37121] mb-2 group-hover:scale-110 transition-transform duration-300">
//                   {service.icon}
//                 </div>
//                 <h3 className="text-base font-bold text-white mb-2">{service.title}</h3>
//                 <p className="text-gray-300 text-xs mb-3 leading-relaxed">{service.description}</p>
//                 <ul className="space-y-1.5 mb-3">
//                   {service.features.map((feature, featureIndex) => (
//                     <li key={featureIndex} className="flex items-center gap-2 text-xs text-gray-400">
//                       <div className="w-1.5 h-1.5 bg-[#f37121] rounded-full flex-shrink-0"></div>
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>
//                 <Link 
//                   href={service.link}
//                   className="w-full py-1.5 text-xs bg-white/10 hover:bg-white/20 text-white rounded-lg border border-white/20 transition-colors duration-300 flex items-center justify-center gap-1"
//                 >
//                   Learn More <FaArrowRight className="text-xs" />
//                 </Link>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         {/* PROCESS SECTION */}
//         <section className="bg-white/5 rounded-xl p-5 border border-white/10">
//           <motion.div
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             variants={reveal}
//             className="text-center space-y-4"
//           >
//             <h2 className="text-lg font-bold text-[#f37121]">Our Process</h2>
//             <p className="text-gray-400 text-xs max-w-2xl mx-auto">
//               We follow a structured approach to ensure quality and excellence in every service we provide
//             </p>
            
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
//               {[
//                 { step: "01", title: "Consultation", desc: "Understand your needs", icon: <FaHeadset /> },
//                 { step: "02", title: "Planning", desc: "Custom solution design", icon: <FaChartLine /> },
//                 { step: "03", title: "Implementation", desc: "Quality execution", icon: <FaRocket /> },
//                 { step: "04", title: "Support", desc: "Ongoing excellence", icon: <FaShieldAlt /> }
//               ].map((item, index) => (
//                 <div key={index} className="text-center p-3">
//                   <div className="w-10 h-10 bg-[#f37121] rounded-full flex items-center justify-center mx-auto mb-2 text-white text-sm">
//                     {item.icon}
//                   </div>
//                   <div className="text-[#f37121] text-xs font-bold mb-1">{item.step}</div>
//                   <h4 className="text-white font-semibold text-xs mb-1">{item.title}</h4>
//                   <p className="text-gray-400 text-xs">{item.desc}</p>
//                 </div>
//               ))}
//             </div>
//           </motion.div>
//         </section>

//         {/* CTA SECTION */}
//         <section className="text-center space-y-4">
//           <motion.div
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             variants={reveal}
//             className="bg-gradient-to-r from-[#f37121]/10 to-orange-500/10 border border-[#f37121]/20 rounded-xl p-5"
//           >
//             <h3 className="text-base font-bold text-white mb-2">Ready to Get Started?</h3>
//             <p className="text-gray-400 text-xs mb-3 max-w-md mx-auto">
//               Contact us today to discuss how our services can benefit your organization or family
//             </p>
//             <div className="flex flex-col sm:flex-row gap-2 justify-center">
//               <button className="bg-[#f37121] hover:bg-orange-500 text-white px-4 py-2 rounded-lg text-xs font-semibold transition-colors duration-300">
//                 Contact Sales
//               </button>
//               <button className="border border-[#f37121] text-[#f37121] hover:bg-[#f37121] hover:text-white px-4 py-2 rounded-lg text-xs font-semibold transition-colors duration-300">
//                 View Case Studies
//               </button>
//             </div>
//           </motion.div>
//         </section>

//       </div>
//     </main>
//   )
// }

'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
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
  FaHeadset,
  FaArrowRight,
  FaBuilding
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
      icon: <FaSchool className="text-lg" />,
      title: "EFG International Schools",
      description: "Premium international education with IB/CIS pathways, STEAM focus, and bilingual tracks.",
      features: ["KG to Primary Education", "IB & CIS Accreditation", "STEAM Labs", "Bilingual Curriculum"],
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30",
      link: "/divisions/international-schools"
    },
    {
      icon: <FaBaby className="text-lg" />,
      title: "EFG Childcare Centers",
      description: "Comprehensive childcare solutions with Montessori approach and secure learning environments.",
      features: ["Montessori Curriculum", "Parent Mobile App", "Secure Facilities", "Trained Caregivers"],
      color: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30",
      link: "/divisions/childcare"
    },
    {
      icon: <FaTruckMoving className="text-lg" />,
      title: "Heavy Transport & Logistics",
      description: "Reliable heavy haulage services with advanced telematics and predictive maintenance.",
      features: ["Project-based Haulage", "Telematics & GPS", "Predictive Maintenance", "24/7 Support"],
      color: "from-orange-500/20 to-red-500/20",
      borderColor: "border-orange-500/30",
      link: "/divisions/transport-logistics"
    },
    {
      icon: <FaBuilding className="text-lg" />,
      title: "Real Estate & Construction",
      description: "Premium residential and commercial developments with quality craftsmanship and sustainable design.",
      features: ["Residential Complexes", "Commercial Spaces", "Quality Construction", "Timely Delivery"],
      color: "from-purple-500/20 to-indigo-500/20",
      borderColor: "border-purple-500/30",
      link: "/divisions/real-estate"
    },
    {
      icon: <FaHandshake className="text-lg" />,
      title: "Strategic Partnerships",
      description: "Corporate partnerships for integrated education, childcare, and logistics solutions.",
      features: ["Corporate Childcare", "Employee Benefits", "Custom Solutions", "Dedicated Support"],
      color: "from-yellow-500/20 to-amber-500/20",
      borderColor: "border-yellow-500/30",
      link: "/contact"
    },
    {
      icon: <FaShieldAlt className="text-lg" />,
      title: "Safety & Compliance",
      description: "Comprehensive safety protocols and regulatory compliance across all service divisions.",
      features: ["ISO Certifications", "Regular Audits", "Safety Training", "Quality Assurance"],
      color: "from-gray-500/20 to-slate-500/20",
      borderColor: "border-gray-500/30",
      link: "/contact"
    }
  ]

  const stats = [
    { number: "3", label: "School Campuses", icon: <FaSchool /> },
    { number: "100+", label: "Childcare Capacity", icon: <FaBaby /> },
    { number: "34", label: "Truck Fleet", icon: <FaTruckMoving /> },
    { number: "15+", label: "Real Estate Projects", icon: <FaBuilding /> },
    { number: "360+", label: "Employees", icon: <FaUsers /> }
  ]

  return (
    <main className="bg-[#0a0f1d] text-white min-h-screen antialiased pt-8">
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-12">

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
            Comprehensive solutions in education, childcare, logistics, and real estate designed to meet 
            the evolving needs of Saudi families and businesses while supporting Vision 2030 objectives.
          </motion.p>
        </section>

        {/* STATS */}
        <section className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 p-3 rounded-lg border border-white/10 text-center"
            >
              <div className="text-[#f37121] flex justify-center mb-1">
                {stat.icon}
              </div>
              <div className="text-lg font-bold text-white">{stat.number}</div>
              <div className="text-gray-400 text-xs mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </section>

        {/* SERVICES GRID */}
        <section className="space-y-8">
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
              Four integrated pillars working together to build a better future
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={reveal}
                custom={index}
                className={`bg-gradient-to-br ${service.color} border ${service.borderColor} rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 group`}
              >
                <div className="text-[#f37121] mb-2 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-base font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300 text-xs mb-3 leading-relaxed">{service.description}</p>
                <ul className="space-y-1.5 mb-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-xs text-gray-400">
                      <div className="w-1.5 h-1.5 bg-[#f37121] rounded-full flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  href={service.link}
                  className="w-full py-1.5 text-xs bg-white/10 hover:bg-white/20 text-white rounded-lg border border-white/20 transition-colors duration-300 flex items-center justify-center gap-1"
                >
                  Learn More <FaArrowRight className="text-xs" />
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PROCESS SECTION */}
        <section className="bg-white/5 rounded-xl p-5 border border-white/10">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={reveal}
            className="text-center space-y-4"
          >
            <h2 className="text-lg font-bold text-[#f37121]">Our Process</h2>
            <p className="text-gray-400 text-xs max-w-2xl mx-auto">
              We follow a structured approach to ensure quality and excellence in every service we provide
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
              {[
                { step: "01", title: "Consultation", desc: "Understand your needs", icon: <FaHeadset /> },
                { step: "02", title: "Planning", desc: "Custom solution design", icon: <FaChartLine /> },
                { step: "03", title: "Implementation", desc: "Quality execution", icon: <FaRocket /> },
                { step: "04", title: "Support", desc: "Ongoing excellence", icon: <FaShieldAlt /> }
              ].map((item, index) => (
                <div key={index} className="text-center p-3">
                  <div className="w-10 h-10 bg-[#f37121] rounded-full flex items-center justify-center mx-auto mb-2 text-white text-sm">
                    {item.icon}
                  </div>
                  <div className="text-[#f37121] text-xs font-bold mb-1">{item.step}</div>
                  <h4 className="text-white font-semibold text-xs mb-1">{item.title}</h4>
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
            className="bg-gradient-to-r from-[#f37121]/10 to-orange-500/10 border border-[#f37121]/20 rounded-xl p-5"
          >
            <h3 className="text-base font-bold text-white mb-2">Ready to Get Started?</h3>
            <p className="text-gray-400 text-xs mb-3 max-w-md mx-auto">
              Contact us today to discuss how our integrated services can benefit your organization or family
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <button className="bg-[#f37121] hover:bg-orange-500 text-white px-4 py-2 rounded-lg text-xs font-semibold transition-colors duration-300">
                Contact Sales
              </button>
              <button className="border border-[#f37121] text-[#f37121] hover:bg-[#f37121] hover:text-white px-4 py-2 rounded-lg text-xs font-semibold transition-colors duration-300">
                View Case Studies
              </button>
            </div>
          </motion.div>
        </section>

      </div>
    </main>
  )
}