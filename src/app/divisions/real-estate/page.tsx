// 'use client'

// import { motion } from 'framer-motion'
// import { FaBuilding, FaHardHat, FaHome, FaCity, FaRulerCombined, FaShieldAlt, FaClock, FaAward, FaUsers, FaLeaf, FaCheckCircle } from 'react-icons/fa'
// export default function RealEstatePage() {
//   const reveal = { hidden: { opacity: 0, y: 14 }, show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08 } }) }

//   const projects = [
//     {
//       title: 'EFG Residential Towers',
//       type: 'Residential',
//       location: 'Riyadh',
//       status: 'Planning',
//       image: '/images/real-estate/residential-1.jpg',
//       description: 'Luxury residential complex with modern amenities and sustainable design.',
//       features: ['Swimming Pool', 'Gym', 'Park', 'Security']
//     },
//     {
//       title: 'EFG Commercial Plaza',
//       type: 'Commercial',
//       location: 'Jeddah',
//       status: 'Design',
//       image: '/images/real-estate/commercial-1.jpg',
//       description: 'Modern commercial space for offices and retail establishments.',
//       features: ['Office Spaces', 'Retail Areas', 'Parking', 'Cafeteria']
//     },
//     {
//       title: 'EFG Luxury Villas',
//       type: 'Residential',
//       location: 'Dammam',
//       status: 'Planning',
//       image: '/images/real-estate/villas-1.jpg',
//       description: 'Premium villas with private gardens and smart home features.',
//       features: ['Smart Home', 'Private Garden', 'Garage', 'Security']
//     },
//     {
//       title: 'EFG Business Center',
//       type: 'Commercial',
//       location: 'Riyadh',
//       status: 'Design',
//       image: '/images/real-estate/business-1.jpg',
//       description: 'State-of-the-art business center with conference facilities.',
//       features: ['Conference Rooms', 'High-Speed Internet', 'Lounge', 'Support Services']
//     }
//   ]

//   const services = [
//     {
//       icon: <FaHome />,
//       title: 'Residential Development',
//       description: 'Luxury apartments, villas, and residential complexes with modern amenities and sustainable design.',
//       features: ['Luxury Apartments', 'Villas', 'Townhouses', 'Smart Homes']
//     },
//     {
//       icon: <FaCity />,
//       title: 'Commercial Projects',
//       description: 'Office buildings, retail spaces, and commercial complexes in prime locations.',
//       features: ['Office Spaces', 'Retail Centers', 'Mixed-Use', 'Business Parks']
//     },
//     {
//       icon: <FaHardHat />,
//       title: 'Construction Management',
//       description: 'End-to-end construction services from planning to delivery with quality assurance.',
//       features: ['Project Planning', 'Quality Control', 'Timely Delivery', 'Cost Management']
//     },
//     {
//       icon: <FaRulerCombined />,
//       title: 'Architectural Design',
//       description: 'Innovative architectural solutions combining functionality with aesthetic appeal.',
//       features: ['Concept Design', '3D Visualization', 'Space Planning', 'Sustainable Design']
//     }
//   ]

//   const values = [
//     {
//       icon: <FaShieldAlt />,
//       title: 'Quality Assurance',
//       description: 'Uncompromising quality standards in every project'
//     },
//     {
//       icon: <FaClock />,
//       title: 'Timely Delivery',
//       description: 'Commitment to project timelines and deadlines'
//     },
//     {
//       icon: <FaAward />,
//       title: 'Excellence',
//       description: 'Striving for excellence in design and execution'
//     },
//     {
//       icon: <Leaf />,
//       title: 'Sustainability',
//       description: 'Eco-friendly construction practices'
//     }
//   ]

//   return (
//     <main className="relative bg-[#0a0f1d] text-white min-h-screen antialiased pt-10">
//       <div className="relative z-10 max-w-6xl mx-auto px-4 py-10 space-y-16">

//         {/* HERO SECTION */}
//         <section className="grid md:grid-cols-2 gap-8 items-center">
//           <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-4">
//             <motion.h1 variants={reveal} className="text-3xl md:text-4xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#f37121] to-orange-400">
//               EFG Real Estate & Construction
//             </motion.h1>
//             <motion.p variants={reveal} className="text-gray-300 text-sm md:text-base">
//               Building tomorrows landmarks today. EFG Properties delivers premium residential and commercial developments with uncompromising quality, innovative design, and sustainable construction practices.
//             </motion.p>
            
//             <motion.div variants={reveal} className="flex flex-wrap gap-3 mt-4">
//               <div className="bg-[#f37121]/20 text-[#f37121] px-3 py-1.5 rounded-full text-sm flex items-center gap-2">
//                 <FaCheckCircle className="text-xs" />
//                 Premium Quality
//               </div>
//               <div className="bg-[#f37121]/20 text-[#f37121] px-3 py-1.5 rounded-full text-sm flex items-center gap-2">
//                 <FaCheckCircle className="text-xs" />
//                 Timely Delivery
//               </div>
//               <div className="bg-[#f37121]/20 text-[#f37121] px-3 py-1.5 rounded-full text-sm flex items-center gap-2">
//                 <FaCheckCircle className="text-xs" />
//                 Sustainable Design
//               </div>
//             </motion.div>
//           </motion.div>

//           <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="flex justify-center">
//             <div className="relative w-full max-w-md rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
//               <img src="/images/real-estate/hero.jpg" alt="Real Estate Development" className="w-full h-80 object-cover" />
//               <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
//                 <h3 className="text-xl font-bold">Building Vision 2030</h3>
//                 <p className="text-gray-300 text-sm mt-1">Premium developments across Saudi Arabia</p>
//               </div>
//             </div>
//           </motion.div>
//         </section>

//         {/* SERVICES */}
//         <section className="space-y-8">
//           <div className="text-center">
//             <h2 className="text-2xl md:text-3xl font-bold text-[#f37121]">Our Services</h2>
//             <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
//               Comprehensive real estate and construction solutions tailored to meet your needs
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {services.map((service, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//                 whileHover={{ y: -5 }}
//                 className="bg-gradient-to-b from-white/5 to-transparent p-6 rounded-xl border border-white/10 shadow-lg hover:shadow-xl transition-all"
//               >
//                 <div className="text-3xl text-[#f37121] mb-4">{service.icon}</div>
//                 <h3 className="text-lg font-bold mb-3">{service.title}</h3>
//                 <p className="text-gray-300 text-sm mb-4">{service.description}</p>
//                 <ul className="space-y-2">
//                   {service.features.map((feature, i) => (
//                     <li key={i} className="flex items-center gap-2 text-xs text-gray-400">
//                       <div className="w-1.5 h-1.5 rounded-full bg-[#f37121] flex-shrink-0"></div>
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         {/* PROJECTS */}
//         <section className="space-y-8">
//           <div className="text-center">
//             <h2 className="text-2xl md:text-3xl font-bold text-[#f37121]">Featured Projects</h2>
//             <p className="text-gray-400 mt-2">Our portfolio of premium developments</p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-6">
//             {projects.map((project, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//                 className="bg-gradient-to-b from-white/5 to-transparent rounded-xl overflow-hidden border border-white/10 shadow-lg hover:shadow-xl transition-all"
//               >
//                 <div className="relative h-48 overflow-hidden">
//                   <img 
//                     src={project.image} 
//                     alt={project.title}
//                     className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
//                   />
//                   <div className="absolute top-3 right-3">
//                     <span className={`px-2 py-1 rounded-full text-xs font-medium ${
//                       project.status === 'Planning' ? 'bg-blue-500/20 text-blue-300' :
//                       project.status === 'Design' ? 'bg-purple-500/20 text-purple-300' :
//                       'bg-green-500/20 text-green-300'
//                     }`}>
//                       {project.status}
//                     </span>
//                   </div>
//                 </div>
                
//                 <div className="p-5">
//                   <div className="flex items-center justify-between mb-2">
//                     <h3 className="text-lg font-bold">{project.title}</h3>
//                     <span className="text-[#f37121] text-sm font-medium">{project.type}</span>
//                   </div>
                  
//                   <p className="text-gray-300 text-sm mb-3">{project.description}</p>
                  
//                   <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
//                     <FaBuilding className="text-[#f37121]" />
//                     <span>{project.location}</span>
//                   </div>
                  
//                   <div className="flex flex-wrap gap-1">
//                     {project.features.map((feature, i) => (
//                       <span key={i} className="bg-white/5 px-2 py-1 rounded text-xs text-gray-300">
//                         {feature}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         {/* VALUES */}
//         <section className="space-y-8">
//           <div className="text-center">
//             <h2 className="text-2xl md:text-3xl font-bold text-[#f37121]">Why Choose EFG Properties</h2>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {values.map((value, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//                 className="bg-white/5 p-6 rounded-xl text-center border border-white/10 shadow-lg"
//               >
//                 <div className="text-3xl text-[#f37121] mb-4 flex justify-center">{value.icon}</div>
//                 <h3 className="text-lg font-bold mb-2">{value.title}</h3>
//                 <p className="text-gray-300 text-sm">{value.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         {/* STATS */}
//         <section className="bg-gradient-to-r from-gray-900/80 to-gray-800/60 rounded-2xl p-8 border border-white/10 shadow-lg">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
//             {[
//               { number: '15+', label: 'Projects Completed' },
//               { number: '5', label: 'Cities' },
//               { number: '50+', label: 'Team Members' },
//               { number: '100%', label: 'Client Satisfaction' },
//             ].map((stat, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: index * 0.1 }}
//               >
//                 <div className="text-2xl md:text-3xl font-bold text-[#f37121]">{stat.number}</div>
//                 <div className="text-gray-300 text-sm mt-1">{stat.label}</div>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         {/* CTA */}
//         <section className="text-center bg-gradient-to-r from-[#f37121]/10 to-orange-500/10 rounded-2xl p-8 border border-[#f37121]/20">
//           <h2 className="text-2xl md:text-3xl font-bold text-[#f37121] mb-4">Start Your Project With Us</h2>
//           <p className="text-gray-300 max-w-2xl mx-auto mb-6">
//             Ready to bring your vision to life? Contact our real estate team for consultation and project development.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="px-6 py-3 bg-gradient-to-r from-[#f37121] to-orange-500 text-black font-bold rounded-full hover:scale-105 transition-transform">
//               Get Consultation
//             </button>
//             <button className="px-6 py-3 bg-white/5 text-white font-medium rounded-full border border-white/10 hover:bg-white/10 transition-colors">
//               View Portfolio
//             </button>
//           </div>
//         </section>

//       </div>
//     </main>
//   )
// }

'use client'

import { motion } from 'framer-motion'
import { FaBuilding, FaHardHat, FaHome, FaCity, FaRulerCombined, FaShieldAlt, FaClock, FaAward, FaUsers, FaLeaf, FaCheckCircle } from 'react-icons/fa'

export default function RealEstatePage() {
  const reveal = { 
    hidden: { opacity: 0, y: 14 }, 
    show: (i = 0) => ({ 
      opacity: 1, 
      y: 0, 
      transition: { delay: i * 0.08 } 
    }) 
  }

  const projects = [
    {
      title: 'EFG Residential Towers',
      type: 'Residential',
      location: 'Riyadh',
      status: 'Planning',
      image: '/images/ew.jpeg',
      description: 'Luxury residential complex with modern amenities and sustainable design.',
      features: ['Swimming Pool', 'Gym', 'Park', 'Security']
    },
    {
      title: 'EFG Commercial Plaza',
      type: 'Commercial',
      location: 'Jeddah',
      status: 'Design',
      image: '/images/tttt.jpeg',
      description: 'Modern commercial space for offices and retail establishments.',
      features: ['Office Spaces', 'Retail Areas', 'Parking', 'Cafeteria']
    },
    {
      title: 'EFG Luxury Villas',
      type: 'Residential',
      location: 'Dammam',
      status: 'Planning',
      image: '/images/vill.jpeg',
      description: 'Premium villas with private gardens and smart home features.',
      features: ['Smart Home', 'Private Garden', 'Garage', 'Security']
    },
    {
      title: 'EFG Business Center',
      type: 'Commercial',
      location: 'Riyadh',
      status: 'Design',
      image: '/images/28B Tower.jpeg',
      description: 'State-of-the-art business center with conference facilities.',
      features: ['Conference Rooms', 'High-Speed Internet', 'Lounge', 'Support Services']
    }
  ]

  const services = [
    {
      icon: <FaHome />,
      title: 'Residential Development',
      description: 'Luxury apartments, villas, and residential complexes with modern amenities and sustainable design.',
      features: ['Luxury Apartments', 'Villas', 'Townhouses', 'Smart Homes']
    },
    {
      icon: <FaCity />,
      title: 'Commercial Projects',
      description: 'Office buildings, retail spaces, and commercial complexes in prime locations.',
      features: ['Office Spaces', 'Retail Centers', 'Mixed-Use', 'Business Parks']
    },
    {
      icon: <FaHardHat />,
      title: 'Construction Management',
      description: 'End-to-end construction services from planning to delivery with quality assurance.',
      features: ['Project Planning', 'Quality Control', 'Timely Delivery', 'Cost Management']
    },
    {
      icon: <FaRulerCombined />,
      title: 'Architectural Design',
      description: 'Innovative architectural solutions combining functionality with aesthetic appeal.',
      features: ['Concept Design', '3D Visualization', 'Space Planning', 'Sustainable Design']
    }
  ]

  const values = [
    {
      icon: <FaShieldAlt />,
      title: 'Quality Assurance',
      description: 'Uncompromising quality standards in every project'
    },
    {
      icon: <FaClock />,
      title: 'Timely Delivery',
      description: 'Commitment to project timelines and deadlines'
    },
    {
      icon: <FaAward />,
      title: 'Excellence',
      description: 'Striving for excellence in design and execution'
    },
    {
      icon: <FaLeaf />,
      title: 'Sustainability',
      description: 'Eco-friendly construction practices'
    }
  ]

  return (
    <main className="relative bg-[#0a0f1d] text-white min-h-screen antialiased pt-10">
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-10 space-y-16">

        {/* HERO SECTION */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-4">
            <motion.h1 variants={reveal} className="text-3xl md:text-4xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#f37121] to-orange-400">
              EFG Real Estate & Construction
            </motion.h1>
            <motion.p variants={reveal} className="text-gray-300 text-sm md:text-base">
              Building tomorrows landmarks today. EFG Properties delivers premium residential and commercial developments with uncompromising quality, innovative design, and sustainable construction practices.
            </motion.p>
            
            <motion.div variants={reveal} className="flex flex-wrap gap-3 mt-4">
              <div className="bg-[#f37121]/20 text-[#f37121] px-3 py-1.5 rounded-full text-sm flex items-center gap-2">
                <FaCheckCircle className="text-xs" />
                Premium Quality
              </div>
              <div className="bg-[#f37121]/20 text-[#f37121] px-3 py-1.5 rounded-full text-sm flex items-center gap-2">
                <FaCheckCircle className="text-xs" />
                Timely Delivery
              </div>
              <div className="bg-[#f37121]/20 text-[#f37121] px-3 py-1.5 rounded-full text-sm flex items-center gap-2">
                <FaCheckCircle className="text-xs" />
                Sustainable Design
              </div>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="flex justify-center">
            <div className="relative w-full max-w-md rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img src="/images/ew.jpeg" alt="Real Estate Development" className="w-full h-80 object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-xl font-bold">Building Vision 2030</h3>
                <p className="text-gray-300 text-sm mt-1">Premium developments across Saudi Arabia</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* SERVICES */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#f37121]">Our Services</h2>
            <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
              Comprehensive real estate and construction solutions tailored to meet your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-b from-white/5 to-transparent p-6 rounded-xl border border-white/10 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="text-3xl text-[#f37121] mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold mb-3">{service.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-gray-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#f37121] flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#f37121]">Featured Projects</h2>
            <p className="text-gray-400 mt-2">Our portfolio of premium developments</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-b from-white/5 to-transparent rounded-xl overflow-hidden border border-white/10 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-3 right-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Planning' ? 'bg-blue-500/20 text-blue-300' :
                      project.status === 'Design' ? 'bg-purple-500/20 text-purple-300' :
                      'bg-green-500/20 text-green-300'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold">{project.title}</h3>
                    <span className="text-[#f37121] text-sm font-medium">{project.type}</span>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-3">{project.description}</p>
                  
                  <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                    <FaBuilding className="text-[#f37121]" />
                    <span>{project.location}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.features.map((feature, i) => (
                      <span key={i} className="bg-white/5 px-2 py-1 rounded text-xs text-gray-300">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* VALUES */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#f37121]">Why Choose EFG Properties</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 p-6 rounded-xl text-center border border-white/10 shadow-lg"
              >
                <div className="text-3xl text-[#f37121] mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                <p className="text-gray-300 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* STATS */}
        <section className="bg-gradient-to-r from-gray-900/80 to-gray-800/60 rounded-2xl p-8 border border-white/10 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { number: '15+', label: 'Projects Completed' },
              { number: '5', label: 'Cities' },
              { number: '50+', label: 'Team Members' },
              { number: '100%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-2xl md:text-3xl font-bold text-[#f37121]">{stat.number}</div>
                <div className="text-gray-300 text-sm mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-gradient-to-r from-[#f37121]/10 to-orange-500/10 rounded-2xl p-8 border border-[#f37121]/20">
          <h2 className="text-2xl md:text-3xl font-bold text-[#f37121] mb-4">Start Your Project With Us</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            Ready to bring your vision to life? Contact our real estate team for consultation and project development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-gradient-to-r from-[#f37121] to-orange-500 text-black font-bold rounded-full hover:scale-105 transition-transform">
              Get Consultation
            </button>
            <button className="px-6 py-3 bg-white/5 text-white font-medium rounded-full border border-white/10 hover:bg-white/10 transition-colors">
              View Portfolio
            </button>
          </div>
        </section>

      </div>
    </main>
  )
}