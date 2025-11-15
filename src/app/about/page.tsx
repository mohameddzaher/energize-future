// 'use client'

// import { motion } from 'framer-motion'
// import { FaSchool, FaTruckMoving, FaUsers, FaBaby, FaGlobeAmericas, FaRocket, FaHandshake, FaLeaf, FaHeart } from 'react-icons/fa'

// export default function AboutPage() {
//   const reveal = { hidden: { opacity: 0, y: 14 }, show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08 } }) }

// const management = [
//   {
//     name: 'Ahmed Magdy',
//     title: 'CEO',
//     img: '/images/106.jpeg',
//     desc: 'Leading growth and innovation across all divisions.',
//   },
//   {
//     name: 'Eslam Samy',
//     title: 'Head of B2C',
//     img: '/images/102.jpeg',
//     desc: 'Driving customer engagement and education operations.',
//   },
//   {
//     name: 'Hossam Mohamed',
//     title: 'COO',
//     img: '/images/103.jpeg',
//     desc: 'Overseeing logistics and operational excellence.',
//   },
// ]


//   const employees = [
//     { name: 'Mohamed Zaher', title: 'Head of Software', img: '/images/100.jpeg' },
//     { name: 'Ahmed Ehab', title: 'HR Manager', img: '/images/104.jpeg' },
//     { name: 'Ramy Ahmed', title: 'Head oF Finance', img: '/images/108.jpeg' },
//     { name: 'Hossam Helal', title: 'Head of Sales', img: '/images/107.jpeg' },
//     // { name: 'Employee 4', title: 'Caregiver', img: '/images/f.jpeg' },
//     // { name: 'Employee 5', title: 'Technician', img: '/images/f.jpeg' },
//   ]

//   return (
//     <main className="relative bg-[#0a0f1d] text-white min-h-screen antialiased pt-10">
//       <div className="relative z-10 max-w-5xl mx-auto px-4 py-10 space-y-12">

//         {/* HERO - Smaller */}
//         <section className="grid md:grid-cols-2 gap-6 items-center">
//           <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-3">
//             <motion.h1 variants={reveal} className="text-2xl md:text-3xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#f37121] to-orange-400">
//               About Energize Future Group
//             </motion.h1>
//             <motion.p variants={reveal} className="text-gray-300 text-sm">
//               Founded to empower families and businesses, <span className="text-[#f37121] font-semibold">EFG</span> integrates international education, premium childcare, and heavy transport & logistics. Committed to Vision 2030 growth.
//             </motion.p>
//           </motion.div>

//           <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="flex justify-center">
//             <div className="relative w-full max-w-xs rounded-xl overflow-hidden border border-white/10 shadow-md">
//               <img src="/images/re.jpeg" alt="About EFG" className="w-full h-40 object-cover" />
//               <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
//                 <h3 className="text-md font-bold">Building Futures Since 2024</h3>
//                 <p className="text-gray-300 text-xs mt-1">Excellence in education, childcare & logistics</p>
//               </div>
//             </div>
//           </motion.div>
//         </section>

//         {/* OUR STORY */}
//         <section className="space-y-4">
//           <div className="text-center">
//             <h2 className="text-xl md:text-2xl font-bold text-[#f37121]">Our Story</h2>
//             <p className="text-gray-400 mt-1 text-sm">
//               EFG began with a vision: to combine education, childcare, and logistics under one umbrella. Today, we drive innovation, quality, and community impact across Saudi Arabia.
//             </p>
//           </div>
//         </section>

//         {/* VALUES */}
//         <section className="space-y-4">
//           <div className="text-center">
//             <h2 className="text-xl md:text-2xl font-bold text-[#f37121]">Our Core Values</h2>
//           </div>
//           <div className="grid md:grid-cols-3 gap-4">
//             {[
//               { icon: <FaGlobeAmericas />, title: 'Visionary Growth', desc: 'Aligned with national development.' },
//               { icon: <FaRocket />, title: 'Innovation', desc: 'Tech & creative solutions.' },
//               { icon: <FaHandshake />, title: 'Partnership', desc: 'Collaboration for success.' },
//               { icon: <FaSchool />, title: 'Education Excellence', desc: 'High-quality international curricula.' },
//               { icon: <FaBaby />, title: 'Childcare Commitment', desc: 'Safe & nurturing programs.' },
//               { icon: <FaTruckMoving />, title: 'Reliable Logistics', desc: 'Efficient & tech-enabled transport.' },
//               { icon: <FaLeaf />, title: 'Sustainability', desc: 'Eco-friendly & responsible.' },
//               { icon: <FaHeart />, title: 'Community', desc: 'Supporting families & employees.' },
//               { icon: <FaUsers />, title: 'People First', desc: 'Empowering our teams.' },
//             ].map((val, i) => (
//               <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }} className="bg-white/5 p-3 rounded-lg text-center border border-white/10 shadow hover:shadow-md transition-all">
//                 <div className="text-[#f37121] text-xl mb-1 flex justify-center">{val.icon}</div>
//                 <h3 className="font-bold text-sm mb-1">{val.title}</h3>
//                 <p className="text-gray-400 text-xs">{val.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         {/* MANAGEMENT TEAM */}
//         <section className="space-y-4">
//           <div className="text-center">
//             <h2 className="text-xl md:text-2xl font-bold text-[#f37121]">Management Team</h2>
//           </div>
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//             {management.map((m, i) => (
//               <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} className="bg-white/5 p-3 rounded-lg text-center border border-white/10 shadow hover:shadow-md transition-all">
//                 <img src={m.img} alt={m.name} className="w-30 h-40 object-cover rounded-2xl mx-auto  shadow-sm" />
//                 <h3 className="font-bold text-sm mt-5">{m.name}</h3>
//                 <div className="text-[#f37121] text-sm">{m.title}</div>
//                 <p className="text-gray-400 text-xs mt-1">{m.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         {/* EMPLOYEES */}
//         <section className="space-y-4">
//           <div className="text-center">
//             <h2 className="text-xl md:text-2xl font-bold text-[#f37121]">Our Team</h2>
//           </div>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             {employees.map((e, i) => (
//               <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} className="bg-white/5 p-2 rounded-lg text-center border border-white/10 shadow hover:shadow-md transition-all">
//                 <img src={e.img} alt={e.name} className="w-25 h-40 object-cover rounded-2xl mx-auto  shadow-sm" />
//                 <h3 className="font-bold text-sm mt-5">{e.name}</h3>
//                 <div className="text-[#f37121] text-sm">{e.title}</div>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         {/* TIMELINE */}
//         <section className="space-y-4">
//           <div className="text-center">
//             <h2 className="text-xl md:text-2xl font-bold text-[#f37121]">Our Journey</h2>
//             <p className="text-gray-400 mt-1 text-sm">Milestones that shaped EFG</p>
//           </div>
//           <div className="grid md:grid-cols-4 gap-3 text-sm">
//             {[
//               { date: '2024', event: 'Group formation & initial planning' },
//               { date: '2025', event: 'Construction & setup of schools & childcare' },
//               { date: '2026', event: 'Launch first international school campuses' },
//               { date: '2027', event: 'Expansion across Saudi Arabia with logistics & education' },
//             ].map((item, i) => (
//               <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} className="bg-gray-900/70 p-3 rounded-lg text-center border border-white/10 shadow">
//                 <div className="text-[#f37121] font-bold">{item.date}</div>
//                 <div className="text-gray-400 text-sm mt-1">{item.event}</div>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//       </div>
//     </main>
//   )
// }


// 'use client'

// import { motion } from 'framer-motion'
// import { FaSchool, FaTruckMoving, FaUsers, FaBaby, FaGlobeAmericas, FaRocket, FaHandshake, FaLeaf, FaHeart, FaBuilding, FaHardHat } from 'react-icons/fa'

// export default function AboutPage() {
//   const reveal = { hidden: { opacity: 0, y: 14 }, show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08 } }) }

//   const management = [
//     {
//       name: 'Ahmed Magdy',
//       title: 'CEO',
//       img: '/images/106.jpeg',
//       desc: 'Leading growth and innovation across all divisions.',
//     },
//     {
//       name: 'Eslam Samy',
//       title: 'Head of B2C',
//       img: '/images/102.jpeg',
//       desc: 'Driving customer engagement and education operations.',
//     },
//     {
//       name: 'Hossam Mohamed',
//       title: 'COO',
//       img: '/images/103.jpeg',
//       desc: 'Overseeing logistics and operational excellence.',
//     },
//   ]

//   const employees = [
//     { name: 'Mohamed Zaher', title: 'Head of Software', img: '/images/100.jpeg' },
//     { name: 'Ahmed Ehab', title: 'HR Manager', img: '/images/104.jpeg' },
//     { name: 'Ramy Ahmed', title: 'Head of Finance', img: '/images/108.jpeg' },
//     { name: 'Hossam Helal', title: 'Head of Sales', img: '/images/107.jpeg' },
//   ]

//   return (
//     <main className="relative bg-[#0a0f1d] text-white min-h-screen antialiased pt-10">
//       <div className="relative z-10 max-w-5xl mx-auto px-4 py-10 space-y-12">

//         {/* HERO - Smaller */}
//         <section className="grid md:grid-cols-2 gap-6 items-center">
//           <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-3">
//             <motion.h1 variants={reveal} className="text-2xl md:text-3xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#f37121] to-orange-400">
//               About Energize Future Group
//             </motion.h1>
//             <motion.p variants={reveal} className="text-gray-300 text-sm">
//               Founded to empower families and businesses, <span className="text-[#f37121] font-semibold">EFG</span> integrates international education, premium childcare, heavy transport & logistics, and real estate development. Committed to Vision 2030 growth.
//             </motion.p>
//           </motion.div>

//           <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="flex justify-center">
//             <div className="relative w-full max-w-xs rounded-xl overflow-hidden border border-white/10 shadow-md">
//               <img src="/images/re.jpeg" alt="About EFG" className="w-full h-40 object-cover" />
//               <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
//                 <h3 className="text-md font-bold">Building Futures Since 2024</h3>
//                 <p className="text-gray-300 text-xs mt-1">Excellence in education, childcare, logistics & real estate</p>
//               </div>
//             </div>
//           </motion.div>
//         </section>

//         {/* OUR STORY */}
//         <section className="space-y-4">
//           <div className="text-center">
//             <h2 className="text-xl md:text-2xl font-bold text-[#f37121]">Our Story</h2>
//             <p className="text-gray-400 mt-1 text-sm">
//               EFG began with a vision: to combine education, childcare, logistics, and real estate under one umbrella. Today, we drive innovation, quality, and community impact across Saudi Arabia.
//             </p>
//           </div>
//         </section>

//         {/* VALUES */}
//         <section className="space-y-4">
//           <div className="text-center">
//             <h2 className="text-xl md:text-2xl font-bold text-[#f37121]">Our Core Values</h2>
//           </div>
//           <div className="grid md:grid-cols-3 gap-4">
//             {[
//               { icon: <FaGlobeAmericas />, title: 'Visionary Growth', desc: 'Aligned with national development.' },
//               { icon: <FaRocket />, title: 'Innovation', desc: 'Tech & creative solutions.' },
//               { icon: <FaHandshake />, title: 'Partnership', desc: 'Collaboration for success.' },
//               { icon: <FaSchool />, title: 'Education Excellence', desc: 'High-quality international curricula.' },
//               { icon: <FaBaby />, title: 'Childcare Commitment', desc: 'Safe & nurturing programs.' },
//               { icon: <FaTruckMoving />, title: 'Reliable Logistics', desc: 'Efficient & tech-enabled transport.' },
//               { icon: <FaBuilding />, title: 'Quality Construction', desc: 'Premium real estate development.' },
//               { icon: <FaHardHat />, title: 'Expert Craftsmanship', desc: 'Uncompromising construction standards.' },
//               { icon: <FaLeaf />, title: 'Sustainability', desc: 'Eco-friendly & responsible.' },
//               { icon: <FaHeart />, title: 'Community', desc: 'Supporting families & employees.' },
//               { icon: <FaUsers />, title: 'People First', desc: 'Empowering our teams.' },
//             ].map((val, i) => (
//               <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }} className="bg-white/5 p-3 rounded-lg text-center border border-white/10 shadow hover:shadow-md transition-all">
//                 <div className="text-[#f37121] text-xl mb-1 flex justify-center">{val.icon}</div>
//                 <h3 className="font-bold text-sm mb-1">{val.title}</h3>
//                 <p className="text-gray-400 text-xs">{val.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         {/* BUSINESS DIVISIONS */}
//         <section className="space-y-4">
//           <div className="text-center">
//             <h2 className="text-xl md:text-2xl font-bold text-[#f37121]">Our Business Divisions</h2>
//           </div>
//           <div className="grid md:grid-cols-4 gap-4">
//             {[
//               { 
//                 icon: <FaSchool />, 
//                 title: 'Education', 
//                 desc: 'International schools with IB/CIS pathways and STEAM focus.',
//                 features: ['KG to Primary', 'Bilingual Tracks', 'STEAM Labs']
//               },
//               { 
//                 icon: <FaBaby />, 
//                 title: 'Childcare', 
//                 desc: 'Premium childcare with Montessori curriculum and parent apps.',
//                 features: ['Montessori', 'Parent App', 'Secure Facilities']
//               },
//               { 
//                 icon: <FaTruckMoving />, 
//                 title: 'Logistics', 
//                 desc: 'Heavy transport solutions with telematics and 24/7 support.',
//                 features: ['Heavy Haulage', 'Telematics', '24/7 Support']
//               },
//               { 
//                 icon: <FaBuilding />, 
//                 title: 'Real Estate', 
//                 desc: 'Premium residential and commercial developments.',
//                 features: ['Residential', 'Commercial', 'Construction']
//               },
//             ].map((div, i) => (
//               <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-white/5 p-4 rounded-lg border border-white/10 shadow hover:shadow-md transition-all">
//                 <div className="text-[#f37121] text-2xl mb-3 flex justify-center">{div.icon}</div>
//                 <h3 className="font-bold text-sm mb-2 text-center">{div.title}</h3>
//                 <p className="text-gray-400 text-xs mb-3 text-center">{div.desc}</p>
//                 <div className="space-y-1">
//                   {div.features.map((feature, j) => (
//                     <div key={j} className="flex items-center gap-2">
//                       <div className="w-1.5 h-1.5 rounded-full bg-[#f37121] flex-shrink-0"></div>
//                       <span className="text-gray-300 text-xs">{feature}</span>
//                     </div>
//                   ))}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         {/* MANAGEMENT TEAM */}
//         <section className="space-y-4">
//           <div className="text-center">
//             <h2 className="text-xl md:text-2xl font-bold text-[#f37121]">Management Team</h2>
//           </div>
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//             {management.map((m, i) => (
//               <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} className="bg-white/5 p-3 rounded-lg text-center border border-white/10 shadow hover:shadow-md transition-all">
//                 <img src={m.img} alt={m.name} className="w-30 h-40 object-cover rounded-2xl mx-auto shadow-sm" />
//                 <h3 className="font-bold text-sm mt-5">{m.name}</h3>
//                 <div className="text-[#f37121] text-sm">{m.title}</div>
//                 <p className="text-gray-400 text-xs mt-1">{m.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         {/* EMPLOYEES */}
//         <section className="space-y-4">
//           <div className="text-center">
//             <h2 className="text-xl md:text-2xl font-bold text-[#f37121]">Our Team</h2>
//           </div>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             {employees.map((e, i) => (
//               <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} className="bg-white/5 p-2 rounded-lg text-center border border-white/10 shadow hover:shadow-md transition-all">
//                 <img src={e.img} alt={e.name} className="w-25 h-40 object-cover rounded-2xl mx-auto shadow-sm" />
//                 <h3 className="font-bold text-sm mt-5">{e.name}</h3>
//                 <div className="text-[#f37121] text-sm">{e.title}</div>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         {/* TIMELINE */}
//         <section className="space-y-4">
//           <div className="text-center">
//             <h2 className="text-xl md:text-2xl font-bold text-[#f37121">Our Journey</h2>
//             <p className="text-gray-400 mt-1 text-sm">Milestones that shaped EFG</p>
//           </div>
//           <div className="grid md:grid-cols-5 gap-3 text-sm">
//             {[
//               { date: '2024', event: 'Group formation & initial planning' },
//               { date: 'Q1 2025', event: 'Construction of schools & childcare' },
//               { date: 'Q3 2025', event: 'Launch real estate division' },
//               { date: 'Q4 2025', event: 'Open first childcare center' },
//               { date: '2026', event: 'Launch international school campuses' },
//             ].map((item, i) => (
//               <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} className="bg-gray-900/70 p-3 rounded-lg text-center border border-white/10 shadow">
//                 <div className="text-[#f37121] font-bold text-sm">{item.date}</div>
//                 <div className="text-gray-400 text-xs mt-1">{item.event}</div>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//       </div>
//     </main>
//   )
// }







// ---------------------------------




// 'use client'

// import { motion } from 'framer-motion'
// import { 
//   FaSchool, 
//   FaTruckMoving, 
//   FaUsers, 
//   FaBaby, 
//   FaGlobeAmericas, 
//   FaRocket, 
//   FaHandshake, 
//   FaLeaf, 
//   FaHeart, 
//   FaBuilding, 
//   FaHardHat,
//   FaAward,
//   FaChartLine,
//   FaShieldAlt,
//   FaClock,
//   FaUserTie,
//   FaGraduationCap,
//   FaHome,
//   FaCity,
//   FaRoad,
//   FaHandHoldingHeart,
//   FaLightbulb,
//   FaCogs,
//   FaRibbon
// } from 'react-icons/fa'

// export default function AboutPage() {
//   const reveal = { 
//     hidden: { opacity: 0, y: 20 }, 
//     show: { 
//       opacity: 1, 
//       y: 0,
//       transition: { 
//         duration: 0.6,
//         ease: "easeOut"
//       } 
//     } 
//   }

//   const slideInLeft = {
//     hidden: { opacity: 0, x: -30 },
//     show: { 
//       opacity: 1, 
//       x: 0,
//       transition: { 
//         duration: 0.6,
//         ease: "easeOut"
//       }
//     }
//   }

//   const slideInRight = {
//     hidden: { opacity: 0, x: 30 },
//     show: { 
//       opacity: 1, 
//       x: 0,
//       transition: { 
//         duration: 0.6,
//         ease: "easeOut"
//       }
//     }
//   }

//   const scaleIn = {
//     hidden: { opacity: 0, scale: 0.9 },
//     show: { 
//       opacity: 1, 
//       scale: 1,
//       transition: { 
//         duration: 0.5,
//         ease: "easeOut"
//       }
//     }
//   }

//   const stats = [
//     { icon: <FaBuilding />, number: '15+', label: 'Projects', suffix: '' },
//     { icon: <FaUsers />, number: '360', label: 'Employees', suffix: '+' },
//     { icon: <FaSchool />, number: '3', label: 'Schools', suffix: '' },
//     { icon: <FaTruckMoving />, number: '34', label: 'Trucks', suffix: '+' },
//     { icon: <FaBaby />, number: '100', label: 'Childcare', suffix: '+' },
//     { icon: <FaCity />, number: '5', label: 'Cities', suffix: '' },
//   ]

//   const management = [
//     {
//       name: 'Ahmed Magdy',
//       title: 'CEO & Founder',
//       img: '/images/106.jpeg',
//       desc: 'Visionary leader with 15+ years in business development and strategic growth.',
//       expertise: ['Strategy', 'Business Dev', 'Leadership'],
//       experience: '15+ years'
//     },
//     {
//       name: 'Eslam Samy',
//       title: 'Head of B2C',
//       img: '/images/102.jpeg',
//       desc: 'Expert in customer engagement and educational operations management.',
//       expertise: ['CX', 'Education', 'Operations'],
//       experience: '12+ years'
//     },
//     {
//       name: 'Hossam Mohamed',
//       title: 'COO',
//       img: '/images/103.jpeg',
//       desc: 'Operations specialist ensuring seamless integration across all divisions.',
//       expertise: ['Operations', 'Logistics', 'Quality'],
//       experience: '10+ years'
//     },
//   ]

//   const employees = [
//     { 
//       name: 'Mohamed Zaher', 
//       title: 'Head of Software', 
//       img: '/images/100.jpeg',
//       department: 'Technology',
//       specialization: 'Digital Transformation'
//     },
//     { 
//       name: 'Ahmed Ehab', 
//       title: 'HR Manager', 
//       img: '/images/104.jpeg',
//       department: 'HR',
//       specialization: 'Team Building'
//     },
//     { 
//       name: 'Ramy Ahmed', 
//       title: 'Head of Finance', 
//       img: '/images/108.jpeg',
//       department: 'Finance',
//       specialization: 'Financial Planning'
//     },
//     { 
//       name: 'Hossam Helal', 
//       title: 'Head of Sales', 
//       img: '/images/107.jpeg',
//       department: 'Business Dev',
//       specialization: 'Client Relations'
//     },
//   ]

//   const coreValues = [
//     {
//       icon: <FaAward />,
//       title: 'Excellence',
//       description: 'Setting industry standards through quality and continuous improvement.',
//       color: 'from-yellow-500 to-amber-500'
//     },
//     {
//       icon: <FaShieldAlt />,
//       title: 'Integrity',
//       description: 'Building trust through transparency and ethical business practices.',
//       color: 'from-blue-500 to-cyan-500'
//     },
//     {
//       icon: <FaLightbulb />,
//       title: 'Innovation',
//       description: 'Embracing technology and creative solutions to drive progress.',
//       color: 'from-purple-500 to-pink-500'
//     },
//     {
//       icon: <FaHeart />,
//       title: 'People First',
//       description: 'Prioritizing well-being and growth of employees and communities.',
//       color: 'from-red-500 to-rose-500'
//     },
//     {
//       icon: <FaLeaf />,
//       title: 'Sustainability',
//       description: 'Environmentally responsible practices and sustainable growth.',
//       color: 'from-green-500 to-emerald-500'
//     },
//     {
//       icon: <FaHandshake />,
//       title: 'Partnership',
//       description: 'Collaborative relationships creating mutual success and value.',
//       color: 'from-orange-500 to-[#f37121]'
//     },
//   ]

//   const milestones = [
//     { 
//       year: '2024', 
//       title: 'Foundation', 
//       description: 'EFG established with comprehensive vision for integrated services',
//       achievements: ['Company Registration', 'Strategic Planning']
//     },
//     { 
//       year: 'Q1 2025', 
//       title: 'Development', 
//       description: 'Commence construction and operational setup',
//       achievements: ['Construction Start', 'Fleet Acquisition']
//     },
//     { 
//       year: 'Q3 2025', 
//       title: 'Expansion', 
//       description: 'Launch real estate division and scale operations',
//       achievements: ['Real Estate Launch', 'Team Growth']
//     },
//     { 
//       year: 'Q4 2025', 
//       title: 'Launch', 
//       description: 'Open first childcare center and start operations',
//       achievements: ['Childcare Opening', 'Service Start']
//     },
//     { 
//       year: '2026', 
//       title: 'Growth', 
//       description: 'Expand across Saudi Arabia with full service portfolio',
//       achievements: ['Multi-City Expansion', 'Market Leadership']
//     },
//   ]

//   return (
//     <main className="relative bg-[#0a0f1d] text-white min-h-screen antialiased pt-8">
//       {/* Background Elements */}
//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         <motion.div
//           animate={{ x: [-10, 10, -10], y: [0, 5, 0] }}
//           transition={{ repeat: Infinity, duration: 15, ease: 'easeInOut' }}
//           className="absolute -left-20 -top-20 w-40 h-40 bg-[#f37121]/5 rounded-full blur-2xl"
//         />
//         <motion.div
//           animate={{ x: [10, -10, 10], y: [0, -5, 0] }}
//           transition={{ repeat: Infinity, duration: 18, ease: 'easeInOut' }}
//           className="absolute -right-20 -bottom-20 w-44 h-44 bg-blue-500/5 rounded-full blur-2xl"
//         />
//       </div>

//       <div className="relative z-10 max-w-4xl mx-auto px-4 py-8 space-y-16">

//         {/* HERO SECTION */}
//         <section className="grid lg:grid-cols-2 gap-6 items-center">
//           <motion.div 
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, margin: "-50px" }}
//             variants={slideInLeft}
//             className="space-y-4"
//           >
//             <div className="space-y-3">
//               <div className="inline-flex items-center gap-2 bg-[#f37121]/10 text-[#f37121] px-3 py-1 rounded-full text-xs">
//                 <FaRibbon className="text-xs" />
//                 Building Futures Since 2024
//               </div>
//               <h1 className="text-2xl md:text-3xl font-bold leading-snug">
//                 Shaping Tomorrow with{' '}
//                 <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f37121] to-orange-400">
//                   Excellence
//                 </span>
//               </h1>
//               <p className="text-sm text-gray-300 leading-relaxed">
//                 Energize Future Group combines <span className="text-[#f37121] font-medium">international education</span>,{' '}
//                 <span className="text-[#f37121] font-medium">premium childcare</span>,{' '}
//                 <span className="text-[#f37121] font-medium">advanced logistics</span>, and{' '}
//                 <span className="text-[#f37121] font-medium">real estate development</span> - 
//                 building a smarter future for Saudi Arabia.
//               </p>
//             </div>

//             <div className="flex flex-wrap gap-3">
//               <div className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded-lg border border-white/10">
//                 <FaGlobeAmericas className="text-[#f37121] text-sm" />
//                 <div>
//                   <div className="font-medium text-xs">Vision 2030</div>
//                   <div className="text-gray-400 text-xs">Aligned</div>
//                 </div>
//               </div>
//               <div className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded-lg border border-white/10">
//                 <FaUsers className="text-[#f37121] text-sm" />
//                 <div>
//                   <div className="font-medium text-xs">360+ Team</div>
//                   <div className="text-gray-400 text-xs">Professionals</div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           <motion.div
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, margin: "-50px" }}
//             variants={slideInRight}
//             className="relative"
//           >
//             <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-lg">
//               <img 
//                 src="/images/re.jpeg" 
//                 alt="EFG Headquarters" 
//                 className="w-full h-48 object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
//               <div className="absolute bottom-0 left-0 right-0 p-4">
//                 <h3 className="text-lg font-bold mb-1">Innovation Hub</h3>
//                 <p className="text-gray-300 text-sm">Where ideas become reality</p>
//               </div>
//             </div>
            
//             {/* Floating elements */}
//             <motion.div
//               animate={{ y: [-5, 5, -5] }}
//               transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
//               className="absolute -top-2 -left-2 bg-gradient-to-r from-[#f37121] to-orange-500 p-2 rounded-lg shadow"
//             >
//               <FaAward className="text-white text-sm" />
//             </motion.div>
//             <motion.div
//               animate={{ y: [5, -5, 5] }}
//               transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }}
//               className="absolute -bottom-2 -right-2 bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-lg shadow"
//             >
//               <FaRocket className="text-white text-sm" />
//             </motion.div>
//           </motion.div>
//         </section>

//         {/* STATISTICS */}
//         <section className="space-y-6">
//           <motion.div
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, margin: "-50px" }}
//             variants={reveal}
//             className="text-center space-y-3"
//           >
//             <h2 className="text-xl md:text-2xl font-bold text-[#f37121]">
//               By The Numbers
//             </h2>
//             <p className="text-gray-400 text-sm max-w-xl mx-auto">
//               Our growth story in key metrics that define our impact
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-2 lg:grid-cols-6 gap-3">
//             {stats.map((stat, index) => (
//               <motion.div
//                 key={index}
//                 initial="hidden"
//                 whileInView="show"
//                 viewport={{ once: true, margin: "-50px" }}
//                 variants={scaleIn}
//                 transition={{ delay: index * 0.1 }}
//                 whileHover={{ y: -3, scale: 1.02 }}
//                 className="bg-gradient-to-br from-white/5 to-white/10 p-3 rounded-lg border border-white/10 text-center shadow hover:shadow-md transition-all"
//               >
//                 <div className="text-lg text-[#f37121] mb-1 flex justify-center">
//                   {stat.icon}
//                 </div>
//                 <div className="text-lg font-bold text-white">
//                   {stat.number}{stat.suffix}
//                 </div>
//                 <div className="text-gray-400 text-xs mt-1">
//                   {stat.label}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         {/* CORE VALUES */}
//         <section className="space-y-8">
//           <motion.div
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, margin: "-50px" }}
//             variants={reveal}
//             className="text-center space-y-3"
//           >
//             <h2 className="text-xl md:text-2xl font-bold text-[#f37121]">
//               Our Values
//             </h2>
//             <p className="text-gray-400 text-sm max-w-2xl mx-auto">
//               Principles that guide every decision and relationship
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {coreValues.map((value, index) => (
//               <motion.div
//                 key={index}
//                 initial="hidden"
//                 whileInView="show"
//                 viewport={{ once: true, margin: "-50px" }}
//                 variants={scaleIn}
//                 transition={{ delay: index * 0.1 }}
//                 whileHover={{ y: -4, scale: 1.02 }}
//                 className="group relative bg-gradient-to-br from-white/5 to-transparent p-4 rounded-xl border border-white/10 shadow hover:shadow-lg transition-all duration-300"
//               >
//                 <div className={`inline-flex p-2 rounded-lg bg-gradient-to-r ${value.color} text-white text-lg mb-3 group-hover:scale-105 transition-transform duration-300`}>
//                   {value.icon}
//                 </div>
//                 <h3 className="text-base font-bold mb-2 text-white group-hover:text-[#f37121] transition-colors">
//                   {value.title}
//                 </h3>
//                 <p className="text-gray-300 text-sm leading-relaxed">
//                   {value.description}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         {/* BUSINESS DIVISIONS */}
//         <section className="space-y-8">
//           <motion.div
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, margin: "-50px" }}
//             variants={reveal}
//             className="text-center space-y-3"
//           >
//             <h2 className="text-xl md:text-2xl font-bold text-[#f37121]">
//               Our Divisions
//             </h2>
//             <p className="text-gray-400 text-sm max-w-xl mx-auto">
//               Four integrated divisions creating comprehensive solutions
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 gap-4">
//             {[
//               { 
//                 icon: <FaGraduationCap />, 
//                 title: 'Education', 
//                 desc: 'International schools with innovative learning approaches',
//                 features: ['IB/CIS Accreditation', 'STEAM Curriculum', 'Bilingual Programs'],
//                 color: 'from-blue-500 to-cyan-500',
//                 stats: '3 Campuses'
//               },
//               { 
//                 icon: <FaBaby />, 
//                 title: 'Childcare', 
//                 desc: 'Premium early childhood education with safety standards',
//                 features: ['Montessori', 'Parent App', 'Secure Facilities'],
//                 color: 'from-pink-500 to-rose-500',
//                 stats: '100+ Capacity'
//               },
//               { 
//                 icon: <FaTruckMoving />, 
//                 title: 'Logistics', 
//                 desc: 'Advanced transport solutions with technology',
//                 features: ['Heavy Haulage', 'Telematics', '24/7 Support'],
//                 color: 'from-green-500 to-emerald-500',
//                 stats: '34+ Trucks'
//               },
//               { 
//                 icon: <FaBuilding />, 
//                 title: 'Real Estate', 
//                 desc: 'Premium developments with sustainable practices',
//                 features: ['Residential', 'Commercial', 'Quality Craftsmanship'],
//                 color: 'from-purple-500 to-indigo-500',
//                 stats: '15+ Projects'
//               },
//             ].map((division, index) => (
//               <motion.div
//                 key={index}
//                 initial="hidden"
//                 whileInView="show"
//                 viewport={{ once: true, margin: "-50px" }}
//                 variants={index % 2 === 0 ? slideInLeft : slideInRight}
//                 transition={{ delay: index * 0.1 }}
//                 whileHover={{ y: -5, scale: 1.02 }}
//                 className="group relative bg-gradient-to-br from-white/5 to-transparent p-4 rounded-xl border border-white/10 shadow hover:shadow-lg transition-all duration-300"
//               >
//                 <div className={`inline-flex p-2 rounded-lg bg-gradient-to-r ${division.color} text-white text-lg mb-3`}>
//                   {division.icon}
//                 </div>
//                 <h3 className="text-base font-bold mb-2 text-white">{division.title}</h3>
//                 <p className="text-gray-300 text-xs mb-3 leading-relaxed">{division.desc}</p>
                
//                 <div className="space-y-1 mb-3">
//                   {division.features.map((feature, i) => (
//                     <div key={i} className="flex items-center gap-2 text-xs">
//                       <div className="w-1.5 h-1.5 rounded-full bg-[#f37121] flex-shrink-0" />
//                       <span className="text-gray-400">{feature}</span>
//                     </div>
//                   ))}
//                 </div>
                
//                 <div className="pt-3 border-t border-white/10">
//                   <div className="text-[#f37121] font-bold text-sm">{division.stats}</div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         {/* LEADERSHIP TEAM */}
//         <section className="space-y-8">
//           <motion.div
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, margin: "-50px" }}
//             variants={reveal}
//             className="text-center space-y-3"
//           >
//             <h2 className="text-xl md:text-2xl font-bold text-[#f37121]">
//               Leadership
//             </h2>
//             <p className="text-gray-400 text-sm">
//               Visionary leaders driving our growth strategy
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-3 gap-4">
//             {management.map((member, index) => (
//               <motion.div
//                 key={index}
//                 initial="hidden"
//                 whileInView="show"
//                 viewport={{ once: true, margin: "-50px" }}
//                 variants={scaleIn}
//                 transition={{ delay: index * 0.15 }}
//                 whileHover={{ y: -3 }}
//                 className="group text-center bg-gradient-to-br from-white/5 to-transparent p-4 rounded-xl border border-white/10 shadow hover:shadow-md transition-all"
//               >
//                 <div className="relative inline-block mb-3">
//                   <img 
//                     src={member.img} 
//                     alt={member.name} 
//                     className="w-20 h-20 object-cover rounded-xl mx-auto shadow group-hover:shadow-md transition-all"
//                   />
//                   <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-[#f37121] to-orange-500 text-white p-1 rounded-full shadow">
//                     <FaUserTie className="text-xs" />
//                   </div>
//                 </div>
                
//                 <h3 className="text-base font-bold text-white mb-1">{member.name}</h3>
//                 <div className="text-[#f37121] text-sm font-medium mb-2">{member.title}</div>
//                 <div className="text-gray-400 text-xs mb-2">{member.experience}</div>
//                 <p className="text-gray-300 text-xs mb-3 leading-relaxed">{member.desc}</p>
                
//                 <div className="flex flex-wrap gap-1 justify-center">
//                   {member.expertise.map((skill, i) => (
//                     <span key={i} className="bg-white/5 px-2 py-1 rounded text-xs text-gray-300 border border-white/10">
//                       {skill}
//                     </span>
//                   ))}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         {/* KEY TEAM MEMBERS */}
//         <section className="space-y-8">
//           <motion.div
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, margin: "-50px" }}
//             variants={reveal}
//             className="text-center space-y-3"
//           >
//             <h2 className="text-xl md:text-2xl font-bold text-[#f37121]">
//               Our Team
//             </h2>
//             <p className="text-gray-400 text-sm">
//               Professionals powering our operational excellence
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
//             {employees.map((employee, index) => (
//               <motion.div
//                 key={index}
//                 initial="hidden"
//                 whileInView="show"
//                 viewport={{ once: true, margin: "-50px" }}
//                 variants={scaleIn}
//                 transition={{ delay: index * 0.1 }}
//                 whileHover={{ y: -3, scale: 1.02 }}
//                 className="group text-center bg-gradient-to-br from-white/5 to-transparent p-3 rounded-lg border border-white/10 shadow hover:shadow-md transition-all"
//               >
//                 <img 
//                   src={employee.img} 
//                   alt={employee.name} 
//                   className="w-12 h-12 object-cover rounded-lg mx-auto mb-2 shadow group-hover:shadow-md transition-all"
//                 />
//                 <h3 className="font-bold text-sm text-white mb-1">{employee.name}</h3>
//                 <div className="text-[#f37121] text-xs font-medium mb-1">{employee.title}</div>
//                 <div className="text-gray-400 text-xs">{employee.department}</div>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         {/* MILESTONE TIMELINE */}
//         <section className="space-y-8">
//           <motion.div
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, margin: "-50px" }}
//             variants={reveal}
//             className="text-center space-y-3"
//           >
//             <h2 className="text-xl md:text-2xl font-bold text-[#f37121]">
//               Our Journey
//             </h2>
//             <p className="text-gray-400 text-sm max-w-xl mx-auto">
//               Strategic milestones defining our path to excellence
//             </p>
//           </motion.div>

//           <div className="relative">
//             {/* Timeline line */}
//             <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[#f37121] to-orange-500 rounded-full" />
            
//             <div className="space-y-6">
//               {milestones.map((milestone, index) => (
//                 <motion.div
//                   key={index}
//                   initial="hidden"
//                   whileInView="show"
//                   viewport={{ once: true, margin: "-50px" }}
//                   variants={slideInLeft}
//                   transition={{ delay: index * 0.15 }}
//                   className="relative flex items-start gap-4"
//                 >
//                   {/* Timeline dot */}
//                   <div className="absolute left-3 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 bg-[#f37121] rounded-full border-2 border-[#0a0f1d] shadow z-10 mt-1" />

//                   {/* Content */}
//                   <div className="ml-8 md:ml-0 md:w-full md:pl-8">
//                     <motion.div
//                       whileHover={{ scale: 1.02 }}
//                       className="bg-gradient-to-br from-white/5 to-transparent p-4 rounded-lg border border-white/10 shadow hover:shadow-md transition-all"
//                     >
//                       <div className="text-[#f37121] font-bold text-sm mb-1">{milestone.year}</div>
//                       <h3 className="text-base font-bold text-white mb-2">{milestone.title}</h3>
//                       <p className="text-gray-300 text-xs mb-3 leading-relaxed">{milestone.description}</p>
//                       <div className="space-y-1">
//                         {milestone.achievements.map((achievement, i) => (
//                           <div key={i} className="flex items-center gap-2 text-xs">
//                             <div className="w-1.5 h-1.5 rounded-full bg-[#f37121] flex-shrink-0" />
//                             <span className="text-gray-400">{achievement}</span>
//                           </div>
//                         ))}
//                       </div>
//                     </motion.div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* CTA SECTION */}
//         <motion.section
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, margin: "-50px" }}
//           variants={scaleIn}
//           className="text-center bg-gradient-to-r from-[#f37121]/10 to-orange-500/10 rounded-2xl p-6 border border-[#f37121]/20"
//         >
//           <h2 className="text-xl md:text-2xl font-bold text-[#f37121] mb-3">
//             Join Our Journey
//           </h2>
//           <p className="text-gray-300 text-sm max-w-md mx-auto mb-4">
//             Be part of our mission to build a better future through integrated excellence.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-3 justify-center">
//             <motion.button 
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="px-6 py-2 bg-gradient-to-r from-[#f37121] to-orange-500 text-black font-bold rounded-full text-sm shadow"
//             >
//               Explore Careers
//             </motion.button>
//             <motion.button 
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="px-6 py-2 bg-white/5 text-white font-medium rounded-full border border-white/10 hover:bg-white/10 transition-colors text-sm"
//             >
//               Partner With Us
//             </motion.button>
//           </div>
//         </motion.section>

//       </div>
//     </main>
//   )
// }

'use client'

import { motion } from 'framer-motion'
import { 
  FaSchool, 
  FaTruckMoving, 
  FaUsers, 
  FaBaby, 
  FaGlobeAmericas, 
  FaRocket, 
  FaHandshake, 
  FaLeaf, 
  FaHeart, 
  FaBuilding, 
  FaHardHat,
  FaAward,
  FaChartLine,
  FaShieldAlt,
  FaClock,
  FaUserTie,
  FaGraduationCap,
  FaHome,
  FaCity,
  FaRoad,
  FaHandHoldingHeart,
  FaLightbulb,
  FaCogs,
  FaRibbon
} from 'react-icons/fa'

export default function AboutPage() {
  // common easing as cubic-bezier array to satisfy TS types
  const defaultEase = [0.42, 0, 0.58, 1]

  const reveal = { 
    hidden: { opacity: 0, y: 20 }, 
    show: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: defaultEase
      } 
    } 
  }

  const slideInLeft = {
    hidden: { opacity: 0, x: -30 },
    show: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.6,
        ease: defaultEase
      }
    }
  }

  const slideInRight = {
    hidden: { opacity: 0, x: 30 },
    show: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.6,
        ease: defaultEase
      }
    }
  }

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5,
        ease: defaultEase
      }
    }
  }

  const stats = [
    { icon: <FaBuilding />, number: '15+', label: 'Projects', suffix: '' },
    { icon: <FaUsers />, number: '360', label: 'Employees', suffix: '+' },
    { icon: <FaSchool />, number: '3', label: 'Schools', suffix: '' },
    { icon: <FaTruckMoving />, number: '34', label: 'Trucks', suffix: '+' },
    { icon: <FaBaby />, number: '100', label: 'Childcare', suffix: '+' },
    { icon: <FaCity />, number: '5', label: 'Cities', suffix: '' },
  ]

  const management = [
    {
      name: 'Ahmed Magdy',
      title: 'CEO & Founder',
      img: '/images/106.jpeg',
      desc: 'Visionary leader with 15+ years in business development and strategic growth.',
      expertise: ['Strategy', 'Business Dev', 'Leadership'],
      experience: '15+ years'
    },
    {
      name: 'Eslam Samy',
      title: 'Head of B2C',
      img: '/images/102.jpeg',
      desc: 'Expert in customer engagement and educational operations management.',
      expertise: ['CX', 'Education', 'Operations'],
      experience: '12+ years'
    },
    {
      name: 'Hossam Mohamed',
      title: 'COO',
      img: '/images/103.jpeg',
      desc: 'Operations specialist ensuring seamless integration across all divisions.',
      expertise: ['Operations', 'Logistics', 'Quality'],
      experience: '10+ years'
    },
  ]

  const employees = [
    { 
      name: 'Mohamed Zaher', 
      title: 'Head of Software', 
      img: '/images/100.jpeg',
      department: 'Technology',
      specialization: 'Digital Transformation'
    },
    { 
      name: 'Ahmed Ehab', 
      title: 'HR Manager', 
      img: '/images/104.jpeg',
      department: 'HR',
      specialization: 'Team Building'
    },
    { 
      name: 'Ramy Ahmed', 
      title: 'Head of Finance', 
      img: '/images/108.jpeg',
      department: 'Finance',
      specialization: 'Financial Planning'
    },
    { 
      name: 'Hossam Helal', 
      title: 'Head of Sales', 
      img: '/images/107.jpeg',
      department: 'Business Dev',
      specialization: 'Client Relations'
    },
  ]

  const coreValues = [
    {
      icon: <FaAward />,
      title: 'Excellence',
      description: 'Setting industry standards through quality and continuous improvement.',
      color: 'from-yellow-500 to-amber-500'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Integrity',
      description: 'Building trust through transparency and ethical business practices.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <FaLightbulb />,
      title: 'Innovation',
      description: 'Embracing technology and creative solutions to drive progress.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <FaHeart />,
      title: 'People First',
      description: 'Prioritizing well-being and growth of employees and communities.',
      color: 'from-red-500 to-rose-500'
    },
    {
      icon: <FaLeaf />,
      title: 'Sustainability',
      description: 'Environmentally responsible practices and sustainable growth.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <FaHandshake />,
      title: 'Partnership',
      description: 'Collaborative relationships creating mutual success and value.',
      color: 'from-orange-500 to-[#f37121]'
    },
  ]

  const milestones = [
    { 
      year: '2024', 
      title: 'Foundation', 
      description: 'EFG established with comprehensive vision for integrated services',
      achievements: ['Company Registration', 'Strategic Planning']
    },
    { 
      year: 'Q1 2025', 
      title: 'Development', 
      description: 'Commence construction and operational setup',
      achievements: ['Construction Start', 'Fleet Acquisition']
    },
    { 
      year: 'Q3 2025', 
      title: 'Expansion', 
      description: 'Launch real estate division and scale operations',
      achievements: ['Real Estate Launch', 'Team Growth']
    },
    { 
      year: 'Q4 2025', 
      title: 'Launch', 
      description: 'Open first childcare center and start operations',
      achievements: ['Childcare Opening', 'Service Start']
    },
    { 
      year: '2026', 
      title: 'Growth', 
      description: 'Expand across Saudi Arabia with full service portfolio',
      achievements: ['Multi-City Expansion', 'Market Leadership']
    },
  ]

  return (
    <main className="relative bg-[#0a0f1d] text-white min-h-screen antialiased pt-8">
      {/* Background Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [-10, 10, -10], y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 15, ease: defaultEase }}
          className="absolute -left-20 -top-20 w-40 h-40 bg-[#f37121]/5 rounded-full blur-2xl"
        />
        <motion.div
          animate={{ x: [10, -10, 10], y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 18, ease: defaultEase }}
          className="absolute -right-20 -bottom-20 w-44 h-44 bg-blue-500/5 rounded-full blur-2xl"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-8 space-y-16">

        {/* HERO SECTION */}
        <section className="grid lg:grid-cols-2 gap-6 items-center">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={slideInLeft}
            className="space-y-4"
          >
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 bg-[#f37121]/10 text-[#f37121] px-3 py-1 rounded-full text-xs">
                <FaRibbon className="text-xs" />
                Building Futures Since 2024
              </div>
              <h1 className="text-2xl md:text-3xl font-bold leading-snug">
                Shaping Tomorrow with{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f37121] to-orange-400">
                  Excellence
                </span>
              </h1>
              <p className="text-sm text-gray-300 leading-relaxed">
                Energize Future Group combines <span className="text-[#f37121] font-medium">international education</span>,{' '}
                <span className="text-[#f37121] font-medium">premium childcare</span>,{' '}
                <span className="text-[#f37121] font-medium">advanced logistics</span>, and{' '}
                <span className="text-[#f37121] font-medium">real estate development</span> - 
                building a smarter future for Saudi Arabia.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded-lg border border-white/10">
                <FaGlobeAmericas className="text-[#f37121] text-sm" />
                <div>
                  <div className="font-medium text-xs">Vision 2030</div>
                  <div className="text-gray-400 text-xs">Aligned</div>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded-lg border border-white/10">
                <FaUsers className="text-[#f37121] text-sm" />
                <div>
                  <div className="font-medium text-xs">360+ Team</div>
                  <div className="text-gray-400 text-xs">Professionals</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={slideInRight}
            className="relative"
          >
            <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-lg">
              <img 
                src="/images/re.jpeg" 
                alt="EFG Headquarters" 
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-lg font-bold mb-1">Innovation Hub</h3>
                <p className="text-gray-300 text-sm">Where ideas become reality</p>
              </div>
            </div>
            
            {/* Floating elements */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ repeat: Infinity, duration: 3, ease: defaultEase }}
              className="absolute -top-2 -left-2 bg-gradient-to-r from-[#f37121] to-orange-500 p-2 rounded-lg shadow"
            >
              <FaAward className="text-white text-sm" />
            </motion.div>
            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{ repeat: Infinity, duration: 4, ease: defaultEase, delay: 0.5 }}
              className="absolute -bottom-2 -right-2 bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-lg shadow"
            >
              <FaRocket className="text-white text-sm" />
            </motion.div>
          </motion.div>
        </section>

        {/* STATISTICS */}
        <section className="space-y-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={reveal}
            className="text-center space-y-3"
          >
            <h2 className="text-xl md:text-2xl font-bold text-[#f37121]">
              By The Numbers
            </h2>
            <p className="text-gray-400 text-sm max-w-xl mx-auto">
              Our growth story in key metrics that define our impact
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-6 gap-3">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                variants={scaleIn}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -3, scale: 1.02 }}
                className="bg-gradient-to-br from-white/5 to-white/10 p-3 rounded-lg border border-white/10 text-center shadow hover:shadow-md transition-all"
              >
                <div className="text-lg text-[#f37121] mb-1 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-lg font-bold text-white">
                  {stat.number}{stat.suffix}
                </div>
                <div className="text-gray-400 text-xs mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CORE VALUES */}
        <section className="space-y-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={reveal}
            className="text-center space-y-3"
          >
            <h2 className="text-xl md:text-2xl font-bold text-[#f37121]">
              Our Values
            </h2>
            <p className="text-gray-400 text-sm max-w-2xl mx-auto">
              Principles that guide every decision and relationship
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                variants={scaleIn}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="group relative bg-gradient-to-br from-white/5 to-transparent p-4 rounded-xl border border-white/10 shadow hover:shadow-lg transition-all duration-300"
              >
                <div className={`inline-flex p-2 rounded-lg bg-gradient-to-r ${value.color} text-white text-lg mb-3 group-hover:scale-105 transition-transform duration-300`}>
                  {value.icon}
                </div>
                <h3 className="text-base font-bold mb-2 text-white group-hover:text-[#f37121] transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* BUSINESS DIVISIONS */}
        <section className="space-y-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={reveal}
            className="text-center space-y-3"
          >
            <h2 className="text-xl md:text-2xl font-bold text-[#f37121]">
              Our Divisions
            </h2>
            <p className="text-gray-400 text-sm max-w-xl mx-auto">
              Four integrated divisions creating comprehensive solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { 
                icon: <FaGraduationCap />, 
                title: 'Education', 
                desc: 'International schools with innovative learning approaches',
                features: ['IB/CIS Accreditation', 'STEAM Curriculum', 'Bilingual Programs'],
                color: 'from-blue-500 to-cyan-500',
                stats: '3 Campuses'
              },
              { 
                icon: <FaBaby />, 
                title: 'Childcare', 
                desc: 'Premium early childhood education with safety standards',
                features: ['Montessori', 'Parent App', 'Secure Facilities'],
                color: 'from-pink-500 to-rose-500',
                stats: '100+ Capacity'
              },
              { 
                icon: <FaTruckMoving />, 
                title: 'Logistics', 
                desc: 'Advanced transport solutions with technology',
                features: ['Heavy Haulage', 'Telematics', '24/7 Support'],
                color: 'from-green-500 to-emerald-500',
                stats: '34+ Trucks'
              },
              { 
                icon: <FaBuilding />, 
                title: 'Real Estate', 
                desc: 'Premium developments with sustainable practices',
                features: ['Residential', 'Commercial', 'Quality Craftsmanship'],
                color: 'from-purple-500 to-indigo-500',
                stats: '15+ Projects'
              },
            ].map((division, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                variants={index % 2 === 0 ? slideInLeft : slideInRight}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative bg-gradient-to-br from-white/5 to-transparent p-4 rounded-xl border border-white/10 shadow hover:shadow-lg transition-all duration-300"
              >
                <div className={`inline-flex p-2 rounded-lg bg-gradient-to-r ${division.color} text-white text-lg mb-3`}>
                  {division.icon}
                </div>
                <h3 className="text-base font-bold mb-2 text-white">{division.title}</h3>
                <p className="text-gray-300 text-xs mb-3 leading-relaxed">{division.desc}</p>
                
                <div className="space-y-1 mb-3">
                  {division.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#f37121] flex-shrink-0" />
                      <span className="text-gray-400">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-3 border-t border-white/10">
                  <div className="text-[#f37121] font-bold text-sm">{division.stats}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* LEADERSHIP TEAM */}
        <section className="space-y-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={reveal}
            className="text-center space-y-3"
          >
            <h2 className="text-xl md:text-2xl font-bold text-[#f37121]">
              Leadership
            </h2>
            <p className="text-gray-400 text-sm">
              Visionary leaders driving our growth strategy
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-4">
            {management.map((member, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                variants={scaleIn}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -3 }}
                className="group text-center bg-gradient-to-br from-white/5 to-transparent p-4 rounded-xl border border-white/10 shadow hover:shadow-md transition-all"
              >
                <div className="relative inline-block mb-3">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-20 h-20 object-cover rounded-xl mx-auto shadow group-hover:shadow-md transition-all"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-[#f37121] to-orange-500 text-white p-1 rounded-full shadow">
                    <FaUserTie className="text-xs" />
                  </div>
                </div>
                
                <h3 className="text-base font-bold text-white mb-1">{member.name}</h3>
                <div className="text-[#f37121] text-sm font-medium mb-2">{member.title}</div>
                <div className="text-gray-400 text-xs mb-2">{member.experience}</div>
                <p className="text-gray-300 text-xs mb-3 leading-relaxed">{member.desc}</p>
                
                <div className="flex flex-wrap gap-1 justify-center">
                  {member.expertise.map((skill, i) => (
                    <span key={i} className="bg-white/5 px-2 py-1 rounded text-xs text-gray-300 border border-white/10">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* KEY TEAM MEMBERS */}
        <section className="space-y-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={reveal}
            className="text-center space-y-3"
          >
            <h2 className="text-xl md:text-2xl font-bold text-[#f37121]">
              Our Team
            </h2>
            <p className="text-gray-400 text-sm">
              Professionals powering our operational excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {employees.map((employee, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                variants={scaleIn}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -3, scale: 1.02 }}
                className="group text-center bg-gradient-to-br from-white/5 to-transparent p-3 rounded-lg border border-white/10 shadow hover:shadow-md transition-all"
              >
                <img 
                  src={employee.img} 
                  alt={employee.name} 
                  className="w-12 h-12 object-cover rounded-lg mx-auto mb-2 shadow group-hover:shadow-md transition-all"
                />
                <h3 className="font-bold text-sm text-white mb-1">{employee.name}</h3>
                <div className="text-[#f37121] text-xs font-medium mb-1">{employee.title}</div>
                <div className="text-gray-400 text-xs">{employee.department}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* MILESTONE TIMELINE */}
        <section className="space-y-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={reveal}
            className="text-center space-y-3"
          >
            <h2 className="text-xl md:text-2xl font-bold text-[#f37121]">
              Our Journey
            </h2>
            <p className="text-gray-400 text-sm max-w-xl mx-auto">
              Strategic milestones defining our path to excellence
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[#f37121] to-orange-500 rounded-full" />
            
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={slideInLeft}
                  transition={{ delay: index * 0.15 }}
                  className="relative flex items-start gap-4"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-3 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 bg-[#f37121] rounded-full border-2 border-[#0a0f1d] shadow z-10 mt-1" />

                  {/* Content */}
                  <div className="ml-8 md:ml-0 md:w-full md:pl-8">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-gradient-to-br from-white/5 to-transparent p-4 rounded-lg border border-white/10 shadow hover:shadow-md transition-all"
                    >
                      <div className="text-[#f37121] font-bold text-sm mb-1">{milestone.year}</div>
                      <h3 className="text-base font-bold text-white mb-2">{milestone.title}</h3>
                      <p className="text-gray-300 text-xs mb-3 leading-relaxed">{milestone.description}</p>
                      <div className="space-y-1">
                        {milestone.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#f37121] flex-shrink-0" />
                            <span className="text-gray-400">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={scaleIn}
          className="text-center bg-gradient-to-r from-[#f37121]/10 to-orange-500/10 rounded-2xl p-6 border border-[#f37121]/20"
        >
          <h2 className="text-xl md:text-2xl font-bold text-[#f37121] mb-3">
            Join Our Journey
          </h2>
          <p className="text-gray-300 text-sm max-w-md mx-auto mb-4">
            Be part of our mission to build a better future through integrated excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-gradient-to-r from-[#f37121] to-orange-500 text-black font-bold rounded-full text-sm shadow"
            >
              Explore Careers
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-white/5 text-white font-medium rounded-full border border-white/10 hover:bg-white/10 transition-colors text-sm"
            >
              Partner With Us
            </motion.button>
          </div>
        </motion.section>

      </div>
    </main>
  )
}
