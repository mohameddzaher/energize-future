// "use client";

// import Link from "next/link";
// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import {
//   FaSchool,
//   FaTruckMoving,
//   FaUsers,
//   FaBaby,
//   FaChartLine,
//   FaRocket,
//   FaHandshake,
//   FaMapMarkerAlt,
//   FaPhoneAlt,
//   FaEnvelope,
//   FaLeaf,
//   FaCertificate,
//   FaCalendarAlt,
//   FaInstagram,
//   FaTwitter,
//   FaLinkedin,
//   FaArrowRight,
//   FaAward,
//   FaShieldAlt,
//   FaHeart,
//   FaGraduationCap,
//   FaGlobeAmericas,
//   FaQuoteLeft,
//   FaBuilding,
//   FaHome,
//   FaHardHat,
// } from "react-icons/fa";

// export default function CreativeEFG() {
//   // counters
//   const [counters, setCounters] = useState({
//     schools: 0,
//     childcare: 0,
//     trucks: 0,
//     employees: 0,
//     projects: 0,
//   });

//   useEffect(() => {
//     const targets = {
//       schools: 3,
//       childcare: 100,
//       trucks: 34,
//       employees: 360,
//       projects: 15,
//     };
//     const duration = 1200;
//     const start = performance.now();
//     const animate = (time: number) => {
//       const progress = Math.min((time - start) / duration, 1);
//       setCounters({
//         schools: Math.floor(progress * targets.schools),
//         childcare: Math.floor(progress * targets.childcare),
//         trucks: Math.floor(progress * targets.trucks),
//         employees: Math.floor(progress * targets.employees),
//         projects: Math.floor(progress * targets.projects),
//       });
//       if (progress < 1) requestAnimationFrame(animate);
//     };
//     requestAnimationFrame(animate);
//   }, []);

//   // small variants
//   const reveal = {
//     hidden: { opacity: 0, y: 14 },
//     show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08 } }),
//   };

//   return (
//     <main className="relative bg-[#0a0f1d] text-white min-h-screen antialiased">
//       {/* subtle background touches */}
//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         <motion.div
//           animate={{ x: [-10, 10, -10], y: [0, 6, 0] }}
//           transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
//           className="absolute -left-24 -top-20 w-72 h-72 bg-[#f37121]/10 rounded-full blur-3xl"
//         />
//         <motion.div
//           animate={{ x: [10, -10, 10], y: [0, -6, 0] }}
//           transition={{ repeat: Infinity, duration: 22, ease: "easeInOut" }}
//           className="absolute -right-24 -bottom-24 w-80 h-80 bg-blue-500/6 rounded-full blur-3xl"
//         />
//         <motion.div
//           animate={{ x: [0, 15, 0], y: [10, 0, 10] }}
//           transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
//           className="absolute left-1/3 top-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"
//         />
//       </div>

//       <div className="relative z-10 max-w-6xl mx-auto px-4 py-12 space-y-16">
//         {/* HERO */}
//         <section className="grid md:grid-cols-2 gap-8 items-center">
//           <motion.div
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             className="space-y-4"
//           >
//             <motion.h1
//               variants={reveal}
//               className="text-3xl md:text-4xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#f37121] to-orange-400"
//             >
//               Energize Future Group
//             </motion.h1>
//             <motion.p
//               variants={reveal}
//               className="text-gray-300 max-w-md text-sm"
//             >
//               Empowering generations - integrating{" "}
//               <span className="text-[#f37121] font-semibold">childcare</span>,{" "}
//               <span className="text-[#f37121] font-semibold">
//                 international education
//               </span>
//               ,{" "}
//               <span className="text-[#f37121] font-semibold">
//                 heavy transport & logistics
//               </span>
//               , and{" "}
//               <span className="text-[#f37121] font-semibold">
//                 real estate development
//               </span>
//               . Trusted, compliant, and built for Vision 2030 impact.
//             </motion.p>

//             <motion.div variants={reveal} className="flex gap-3 mt-4">
//               <button className="px-4 py-2 text-sm rounded-full bg-gradient-to-r from-[#f37121] to-orange-500 text-black font-medium shadow hover:scale-105 transition-transform flex items-center gap-2">
//                 Explore Divisions <FaArrowRight className="text-xs" />
//               </button>
//               <a
//                 href="#contact"
//                 className="px-4 py-2 text-sm rounded-full bg-white/5 text-white font-medium hover:bg-white/10 transition-colors self-center"
//               >
//                 Contact Us
//               </a>
//             </motion.div>

//             <motion.div
//               variants={reveal}
//               className="flex flex-wrap gap-2 mt-4 text-xs text-gray-400"
//             >
//               <div className="bg-white/5 px-3 py-1.5 rounded-lg flex items-center gap-1">
//                 <FaMapMarkerAlt className="text-[#f37121] text-xs" />{" "}
//                 Headquartered: Jeddah
//               </div>
//               <div className="bg-white/5 px-3 py-1.5 rounded-lg flex items-center gap-1">
//                 <FaTruckMoving className="text-[#f37121] text-xs" /> Fleet: 34
//                 trucks
//               </div>
//               <div className="bg-white/5 px-3 py-1.5 rounded-lg flex items-center gap-1">
//                 <FaBuilding className="text-[#f37121] text-xs" /> Projects: 15+
//                 completed
//               </div>
//             </motion.div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, scale: 0.98 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6 }}
//             className="flex justify-center"
//           >
//             <div className="relative w-full max-w-sm rounded-xl overflow-hidden border border-white/10 shadow-lg">
//               <img
//                 src="/images/raai.jpeg"
//                 alt="Energize hero"
//                 className="w-full h-60 object-cover"
//               />
//               <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
//                 <h3 className="text-lg font-bold">
//                   Building Futures Since 2024
//                 </h3>
//                 <p className="text-gray-300 text-xs mt-1">
//                   Committed to excellence in education, childcare, logistics,
//                   and real estate
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         </section>

//         {/* SMALL ICONS ROW */}
//         <section className="flex flex-wrap gap-3 justify-center">
//           {[
//             { icon: <FaSchool />, label: "Education" },
//             { icon: <FaBaby />, label: "Childcare" },
//             { icon: <FaTruckMoving />, label: "Logistics" },
//             { icon: <FaBuilding />, label: "Real Estate" },
//             { icon: <FaHardHat />, label: "Construction" },
//             { icon: <FaLeaf />, label: "Sustainability" },
//             { icon: <FaHandshake />, label: "Partnerships" },
//             { icon: <FaCertificate />, label: "Quality & Compliance" },
//             { icon: <FaShieldAlt />, label: "Safety" },
//             { icon: <FaHeart />, label: "Community" },
//             { icon: <FaGraduationCap />, label: "Learning" },
//           ].map((it, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 8 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.05 }}
//               whileHover={{ y: -4, scale: 1.03 }}
//               className="flex items-center gap-2 bg-white/5 text-gray-200 px-3 py-2 rounded-lg text-xs shadow hover:bg-white/10 transition-all cursor-pointer"
//             >
//               <div className="text-[#f37121] text-sm">{it.icon}</div>
//               <div className="font-medium">{it.label}</div>
//             </motion.div>
//           ))}
//         </section>

//         {/* COUNTERS */}
//         <section className="grid grid-cols-2 md:grid-cols-5 gap-4">
//           {[
//             {
//               label: "Schools",
//               value: counters.schools,
//               icon: <FaSchool />,
//               suffix: "",
//             },
//             {
//               label: "Childcare Capacity",
//               value: counters.childcare,
//               icon: <FaBaby />,
//               suffix: "+",
//             },
//             {
//               label: "Trucks",
//               value: counters.trucks,
//               icon: <FaTruckMoving />,
//               suffix: "+",
//             },
//             {
//               label: "Employees",
//               value: counters.employees,
//               icon: <FaUsers />,
//               suffix: "+",
//             },
//             {
//               label: "Projects",
//               value: counters.projects,
//               icon: <FaBuilding />,
//               suffix: "+",
//             },
//           ].map((s, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 16 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.1 }}
//               className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 rounded-xl p-4 text-center border border-white/10 shadow"
//             >
//               <div className="flex items-center justify-center text-lg text-[#f37121] mb-2">
//                 {s.icon}
//               </div>
//               <div className="text-xl font-bold">
//                 {s.value}
//                 {s.suffix}
//               </div>
//               <div className="text-gray-400 text-xs mt-1">{s.label}</div>
//             </motion.div>
//           ))}
//         </section>

//         {/* DIVISIONS DETAILED */}
//         <section className="space-y-6">
//           <div className="text-center">
//             <h2 className="text-2xl font-bold text-[#f37121]">
//               Our Business Divisions
//             </h2>
//             <p className="text-gray-400 mt-1 text-sm max-w-xl mx-auto">
//               Four integrated pillars working together to build a better future
//               for Saudi families and businesses
//             </p>
//           </div>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
//             {/* card 1 */}
//             <motion.div
//               initial="hidden"
//               whileInView="show"
//               whileHover={{ y: -6 }}
//               className="bg-gradient-to-b from-white/5 to-transparent rounded-xl p-4 shadow-lg border border-white/10 hover:border-[#f37121]/30 transition-all"
//             >
//               <div className="flex flex-col gap-3 items-start">
//                 <div className="w-full h-30 rounded-lg overflow-hidden border border-white/10 shadow">
//                   <img
//                     src="/images/hee.jpeg"
//                     alt="school"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-bold text-[#f37121]">
//                     EFG International Schools
//                   </h3>
//                   <p className="text-gray-300 text-xs mt-1">
//                     Three campuses (Riyadh & Jeddah) with KG→Primary launch,
//                     IB/CIS pathways, STEAM focus and bilingual tracks.
//                   </p>
//                   <div className="flex flex-wrap gap-1 mt-3 text-xs">
//                     <span className="bg-[#f37121]/20 text-[#f37121] px-2 py-1 rounded-full">
//                       Accreditation
//                     </span>
//                     <span className="bg-[#f37121]/20 text-[#f37121] px-2 py-1 rounded-full">
//                       STEAM Labs
//                     </span>
//                   </div>
//                 </div>
//               </div>
//               <Link
//                 href="/divisions/international-schools"
//                 className="mt-4 w-full py-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-xs flex items-center justify-center gap-1"
//               >
//                 Learn More <FaArrowRight className="text-xs" />
//               </Link>
//             </motion.div>

//             {/* card 4 - REAL ESTATE */}
//             <motion.div
//               whileHover={{ y: -6 }}
//               className="bg-gradient-to-b from-white/5 to-transparent rounded-xl p-4 shadow-lg border border-white/10 hover:border-[#f37121]/30 transition-all"
//             >
//               <div className="flex flex-col gap-3 items-start">
//                 <div className="w-full h-30 rounded-lg overflow-hidden border border-white/10 shadow">
//                   <img
//                     src="/images/ew.jpeg"
//                     alt="real estate"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-bold text-[#f37121]">
//                     Real Estate & Construction
//                   </h3>
//                   <p className="text-gray-300 text-xs mt-1">
//                     Premium residential and commercial developments with quality
//                     craftsmanship, timely delivery, and innovative design.
//                   </p>
//                   <div className="flex flex-wrap gap-1 mt-3 text-xs">
//                     <span className="bg-[#f37121]/20 text-[#f37121] px-2 py-1 rounded-full">
//                       Development
//                     </span>
//                     <span className="bg-[#f37121]/20 text-[#f37121] px-2 py-1 rounded-full">
//                       Construction
//                     </span>
//                   </div>
//                 </div>
//               </div>
//               <Link
//                 href="/divisions/real-estate"
//                 className="mt-4 w-full py-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-xs flex items-center justify-center gap-1"
//               >
//                 Learn More <FaArrowRight className="text-xs" />
//               </Link>
//             </motion.div>

//             {/* card 3 */}
//             <motion.div
//               whileHover={{ y: -6 }}
//               className="bg-gradient-to-b from-white/5 to-transparent rounded-xl p-4 shadow-lg border border-white/10 hover:border-[#f37121]/30 transition-all"
//             >
//               <div className="flex flex-col gap-3 items-start">
//                 <div className="w-full h-30 rounded-lg overflow-hidden border border-white/10 shadow">
//                   <img
//                     src="/images/f.jpeg"
//                     alt="truck"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-bold text-[#f37121]">
//                     Heavy Truck & Logistics
//                   </h3>
//                   <p className="text-gray-300 text-xs mt-1">
//                     Project-based heavy haulage for construction, energy and
//                     manufacturing with telematics and predictive maintenance.
//                   </p>
//                   <div className="flex flex-wrap gap-1 mt-3 text-xs">
//                     <span className="bg-[#f37121]/20 text-[#f37121] px-2 py-1 rounded-full">
//                       Telematics
//                     </span>
//                     <span className="bg-[#f37121]/20 text-[#f37121] px-2 py-1 rounded-full">
//                       24/7 Support
//                     </span>
//                   </div>
//                 </div>
//               </div>
//               <Link
//                 href="/divisions/transport-logistics"
//                 className="mt-4 w-full py-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-xs flex items-center justify-center gap-1"
//               >
//                 Learn More <FaArrowRight className="text-xs" />
//               </Link>
//             </motion.div>

//             {/* card 2 */}
//             <motion.div
//               whileHover={{ y: -6 }}
//               className="bg-gradient-to-b from-white/5 to-transparent rounded-xl p-4 shadow-lg border border-white/10 hover:border-[#f37121]/30 transition-all"
//             >
//               <div className="flex flex-col gap-3 items-start">
//                 <div className="w-full h-30 rounded-lg overflow-hidden border border-white/10 shadow">
//                   <img
//                     src="/images/wf.jpeg"
//                     alt="childcare"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-bold text-[#f37121]">
//                     EFG Childcare
//                   </h3>
//                   <p className="text-gray-300 text-xs mt-1">
//                     Bilingual Montessori + FLYS curricula, parent app for daily
//                     reports, secure facilities and highly trained caregivers.
//                   </p>
//                   <div className="flex flex-wrap gap-1 mt-3 text-xs">
//                     <span className="bg-[#f37121]/20 text-[#f37121] px-2 py-1 rounded-full">
//                       Parent App
//                     </span>
//                     <span className="bg-[#f37121]/20 text-[#f37121] px-2 py-1 rounded-full">
//                       Safety
//                     </span>
//                   </div>
//                 </div>
//               </div>
//               <Link
//                 href="/divisions/childcare"
//                 className="mt-4 w-full py-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-xs flex items-center justify-center gap-1"
//               >
//                 Learn More <FaArrowRight className="text-xs" />
//               </Link>
//             </motion.div>
//           </div>
//         </section>

//         {/* MISSION & VISION */}
//         <section className="grid md:grid-cols-2 gap-6">
//           <motion.div
//             initial={{ opacity: 0, x: -16 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             className="bg-white/8 backdrop-blur rounded-xl p-4 border border-white/10 shadow-lg"
//           >
//             <div className="flex items-center gap-2 mb-3">
//               <div className="p-2 rounded-lg bg-[#f37121]/20 text-[#f37121]">
//                 <FaGlobeAmericas className="text-base" />
//               </div>
//               <h4 className="text-lg font-bold text-[#f37121]">Our Vision</h4>
//             </div>
//             <p className="text-gray-300 text-sm">
//               Shape a future where families thrive through accessible education,
//               quality childcare, dependable logistics, and premium real estate
//               solutions that support national growth.
//             </p>
//             <div className="mt-4 p-3 bg-white/5 rounded-lg">
//               <p className="text-xs text-gray-400">
//                 Aligned with Vision 2030 - workforce participation & private
//                 sector growth.
//               </p>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 16 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             className="bg-white/8 backdrop-blur rounded-xl p-4 border border-white/10 shadow-lg"
//           >
//             <div className="flex items-center gap-2 mb-3">
//               <div className="p-2 rounded-lg bg-[#f37121]/20 text-[#f37121]">
//                 <FaRocket className="text-base" />
//               </div>
//               <h4 className="text-lg font-bold text-[#f37121]">Our Mission</h4>
//             </div>
//             <p className="text-gray-300 text-sm">
//               Deliver meaningful services that enrich lives, inspire growth, and
//               build trust through innovation, safety, operational excellence,
//               and quality construction.
//             </p>
//             <div className="mt-4 p-3 bg-white/5 rounded-lg">
//               <p className="text-xs text-gray-400">
//                 People-first: families, employees, and communities.
//               </p>
//             </div>
//           </motion.div>
//         </section>

//         {/* STRATEGY + TIMELINE */}
//         <section className="space-y-4">
//           <div className="text-center">
//             <h2 className="text-2xl font-bold text-[#f37121]">
//               Roadmap & Key Milestones
//             </h2>
//             <p className="text-gray-400 mt-1 text-sm">
//               Our strategic journey towards building a better future
//             </p>
//           </div>
//           <div className="grid md:grid-cols-5 gap-3 text-sm">
//             <motion.div
//               initial={{ opacity: 0, y: 16 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.1 }}
//               className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 p-4 rounded-lg text-center border border-white/10 shadow"
//             >
//               <div className="text-base font-bold text-[#f37121]">Q4 2024</div>
//               <div className="text-gray-400 text-xs mt-1">
//                 Group setup & fleet registration
//               </div>
//               <div className="mt-2 h-1 w-10 bg-[#f37121] rounded-full mx-auto"></div>
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0, y: 16 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 }}
//               className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 p-4 rounded-lg text-center border border-white/10 shadow"
//             >
//               <div className="text-base font-bold text-[#f37121]">Q1 2025</div>
//               <div className="text-gray-400 text-xs mt-1">
//                 Start school & childcare construction
//               </div>
//               <div className="mt-2 h-1 w-10 bg-[#f37121] rounded-full mx-auto"></div>
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0, y: 16 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3 }}
//               className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 p-4 rounded-lg text-center border border-white/10 shadow"
//             >
//               <div className="text-base font-bold text-[#f37121]">Q3 2025</div>
//               <div className="text-gray-400 text-xs mt-1">
//                 Launch real estate division
//               </div>
//               <div className="mt-2 h-1 w-10 bg-[#f37121] rounded-full mx-auto"></div>
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0, y: 16 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4 }}
//               className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 p-4 rounded-lg text-center border border-white/10 shadow"
//             >
//               <div className="text-base font-bold text-[#f37121]">Q4 2025</div>
//               <div className="text-gray-400 text-xs mt-1">
//                 Open first EFG Childcare (Riyadh)
//               </div>
//               <div className="mt-2 h-1 w-10 bg-[#f37121] rounded-full mx-auto"></div>
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0, y: 16 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.5 }}
//               className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 p-4 rounded-lg text-center border border-white/10 shadow"
//             >
//               <div className="text-base font-bold text-[#f37121]">Q3 2026</div>
//               <div className="text-gray-400 text-xs mt-1">
//                 Open EFG International Schools
//               </div>
//               <div className="mt-2 h-1 w-10 bg-[#f37121] rounded-full mx-auto"></div>
//             </motion.div>
//           </div>
//         </section>

//         {/* GROWTH INSIGHTS */}
//         <section className="grid md:grid-cols-2 gap-6">
//           <motion.div
//             initial={{ opacity: 0, x: -16 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 p-4 rounded-xl border border-white/10 shadow"
//           >
//             <div className="flex items-center gap-2 mb-3">
//               <FaChartLine className="text-lg text-[#f37121]" />
//               <h4 className="text-lg font-bold text-[#f37121]">
//                 Market Snapshot
//               </h4>
//             </div>
//             <ul className="text-gray-300 text-sm space-y-2">
//               <li className="flex items-start gap-2">
//                 <div className="w-1.5 h-1.5 rounded-full bg-[#f37121] mt-1.5 flex-shrink-0"></div>
//                 <span>Private K-12 TAM: USD 13–20B+</span>
//               </li>
//               <li className="flex items-start gap-2">
//                 <div className="w-1.5 h-1.5 rounded-full bg-[#f37121] mt-1.5 flex-shrink-0"></div>
//                 <span>Pre-school market (2024): ~USD 1.29B</span>
//               </li>
//               <li className="flex items-start gap-2">
//                 <div className="w-1.5 h-1.5 rounded-full bg-[#f37121] mt-1.5 flex-shrink-0"></div>
//                 <span>Road freight to 2030: ~USD 8.82B</span>
//               </li>
//               <li className="flex items-start gap-2">
//                 <div className="w-1.5 h-1.5 rounded-full bg-[#f37121] mt-1.5 flex-shrink-0"></div>
//                 <span>Real Estate growth: 7.5% CAGR</span>
//               </li>
//             </ul>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 16 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 p-4 rounded-xl border border-white/10 shadow"
//           >
//             <div className="flex items-center gap-2 mb-3">
//               <FaRocket className="text-lg text-[#f37121]" />
//               <h4 className="text-lg font-bold text-[#f37121]">
//                 Strategic Priorities
//               </h4>
//             </div>
//             <ul className="text-gray-300 text-sm space-y-2">
//               <li className="flex items-start gap-2">
//                 <div className="w-1.5 h-1.5 rounded-full bg-[#f37121] mt-1.5 flex-shrink-0"></div>
//                 <span>Accreditation & curriculum excellence</span>
//               </li>
//               <li className="flex items-start gap-2">
//                 <div className="w-1.5 h-1.5 rounded-full bg-[#f37121] mt-1.5 flex-shrink-0"></div>
//                 <span>Fleet efficiency & telematics</span>
//               </li>
//               <li className="flex items-start gap-2">
//                 <div className="w-1.5 h-1.5 rounded-full bg-[#f37121] mt-1.5 flex-shrink-0"></div>
//                 <span>Clustered childcare roll-out</span>
//               </li>
//               <li className="flex items-start gap-2">
//                 <div className="w-1.5 h-1.5 rounded-full bg-[#f37121] mt-1.5 flex-shrink-0"></div>
//                 <span>Premium real estate development</span>
//               </li>
//             </ul>
//           </motion.div>
//         </section>

//         {/* REAL ESTATE FOCUS SECTION */}
//         <section className="grid md:grid-cols-2 gap-6 items-start">
//           <motion.div
//             initial={{ opacity: 0, x: -16 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 p-4 rounded-xl border border-white/10 shadow"
//           >
//             <div className="flex items-center gap-2 mb-3">
//               <FaBuilding className="text-lg text-[#f37121]" />
//               <h4 className="text-lg font-bold text-[#f37121]">
//                 Real Estate & Construction Division
//               </h4>
//             </div>
//             <p className="text-gray-300 text-sm mb-4">
//               EFG Properties delivers premium residential and commercial
//               developments with uncompromising quality and innovative design.
//             </p>

//             <div className="grid grid-cols-2 gap-3 mb-4">
//               <div className="bg-white/5 p-3 rounded-lg">
//                 <div className="text-base font-bold text-[#f37121]">
//                   Residential
//                 </div>
//                 <p className="text-gray-400 text-xs mt-1">
//                   Luxury apartments & villas
//                 </p>
//               </div>
//               <div className="bg-white/5 p-3 rounded-lg">
//                 <div className="text-base font-bold text-[#f37121]">
//                   Commercial
//                 </div>
//                 <p className="text-gray-400 text-xs mt-1">
//                   Office & retail spaces
//                 </p>
//               </div>
//               <div className="bg-white/5 p-3 rounded-lg">
//                 <div className="text-base font-bold text-[#f37121]">
//                   Construction
//                 </div>
//                 <p className="text-gray-400 text-xs mt-1">Turnkey projects</p>
//               </div>
//               <div className="bg-white/5 p-3 rounded-lg">
//                 <div className="text-base font-bold text-[#f37121]">
//                   Consultancy
//                 </div>
//                 <p className="text-gray-400 text-xs mt-1">Project management</p>
//               </div>
//             </div>

//             <div className="flex flex-wrap gap-2">
//               <span className="bg-[#f37121]/20 text-[#f37121] px-2 py-1 rounded-full text-xs">
//                 Quality Craftsmanship
//               </span>
//               <span className="bg-[#f37121]/20 text-[#f37121] px-2 py-1 rounded-full text-xs">
//                 Timely Delivery
//               </span>
//               <span className="bg-[#f37121]/20 text-[#f37121] px-2 py-1 rounded-full text-xs">
//                 Innovative Design
//               </span>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 rounded-xl p-3 flex items-center justify-center h-full border border-white/10 shadow"
//           >
//             <div className="relative w-full h-68 rounded-lg overflow-hidden">
//               <img
//                 src="/images/ew.jpeg"
//                 alt="real estate projects"
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
//                 <div className="text-white">
//                   <h5 className="font-bold text-sm">Premium Developments</h5>
//                   <p className="text-xs text-gray-300">
//                     Building tomorrows landmarks today
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </section>

//         {/* SUSTAINABILITY */}
//         <section className="grid md:grid-cols-3 gap-6 items-start">
//           <div className="md:col-span-2 bg-white/8 backdrop-blur p-4 rounded-xl border border-white/10 shadow-lg">
//             <div className="flex items-center gap-2 mb-3">
//               <FaLeaf className="text-lg text-[#f37121]" />
//               <h4 className="text-lg font-bold text-[#f37121]">
//                 Sustainability & CSR
//               </h4>
//             </div>
//             <p className="text-gray-300 text-sm">
//               EFG drives eco-efficiency across all divisions - green building
//               standards, fuel-efficient logistics, community scholarships, and
//               workplace childcare initiatives.
//             </p>
//             <div className="grid grid-cols-3 gap-3 mt-4">
//               <div className="bg-white/5 p-3 rounded-lg text-center">
//                 <div className="text-base font-bold text-[#f37121]">
//                   Green Building
//                 </div>
//                 <p className="text-gray-400 text-xs mt-1">
//                   Sustainable construction
//                 </p>
//               </div>
//               <div className="bg-white/5 p-3 rounded-lg text-center">
//                 <div className="text-base font-bold text-[#f37121]">
//                   Fuel-efficiency
//                 </div>
//                 <p className="text-gray-400 text-xs mt-1">Reducing emissions</p>
//               </div>
//               <div className="bg-white/5 p-3 rounded-lg text-center">
//                 <div className="text-base font-bold text-[#f37121]">
//                   Community
//                 </div>
//                 <p className="text-gray-400 text-xs mt-1">Local initiatives</p>
//               </div>
//             </div>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 rounded-xl p-3 flex items-center justify-center h-full border border-white/10 shadow"
//           >
//             <div className="relative w-full h-48 rounded-lg overflow-hidden">
//               <img
//                 src="/images/re.jpeg"
//                 alt="sustainability"
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
//                 <div className="text-white">
//                   <h5 className="font-bold text-sm">Green Initiatives</h5>
//                   <p className="text-xs text-gray-300">
//                     Building a sustainable future
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </section>

//         {/* TEAM */}
//         <section>
//           <div className="text-center mb-6">
//             <h2 className="text-2xl font-bold text-[#f37121]">
//               Our Leadership Team
//             </h2>
//             <p className="text-gray-400 mt-1 text-sm max-w-xl mx-auto">
//               Experienced professionals driving our vision forward across all
//               divisions
//             </p>
//           </div>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             {[
//               {
//                 name: "Ahmed Hassan",
//                 title: "COO",
//                 img: "/images/107.jpeg",
//                 desc: "8+ years in Management",
//               },
//               {
//                 name: "Hossam Magdy",
//                 title: "CEO",
//                 img: "/images/101.jpeg",
//                 desc: "15+ years in business development",
//               },
//               {
//                 name: "Eslam Zaky",
//                 title: "B2C HOD",
//                 img: "/images/102.jpeg",
//                 desc: "Logistics expert with 10+ years",
//               },
//               {
//                 name: "Mohamed Ramy",
//                 title: "HR Manager",
//                 img: "/images/103.jpeg",
//                 desc: "Talent development specialist",
//               },
//             ].map((p, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 16 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.1 }}
//                 whileHover={{ y: -4 }}
//                 className="bg-gradient-to-b from-white/5 to-transparent p-3 rounded-xl text-center border border-white/10 shadow hover:shadow-md transition-all"
//               >
//                 <div className="relative inline-block">
//                   <img
//                     src={p.img}
//                     alt={p.name}
//                     className="w-35 h-50 object-cover rounded-3xl mx-auto shadow"
//                   />
//                   <div className="absolute bottom-0 right-0 w-4 h-4 bg-[#f37121] rounded-full border border-white"></div>
//                 </div>
//                 <div className="mt-3">
//                   <div className="font-bold text-sm">{p.name}</div>
//                   <div className="text-[#f37121] text-xs font-medium">
//                     {p.title}
//                   </div>
//                   <div className="text-gray-400 text-xs mt-1">{p.desc}</div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         {/* GALLERY */}
//         <section>
//           <div className="text-center mb-6">
//             <h2 className="text-2xl font-bold text-[#f37121]">Our Gallery</h2>
//             <p className="text-gray-400 mt-1 text-sm">
//               Capturing moments from across our divisions including real estate
//               projects
//             </p>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-7 gap-3">
//             {[
//               {
//                 title: "Campus - Riyadh",
//                 desc: "Modern learning environments",
//                 img: "/images/childcare/1.jpeg",
//               },
//               {
//                 title: "Childcare Activities",
//                 desc: "Engaging early childhood programs",
//                 img: "/images/childcare/2.jpeg",
//               },
//               {
//                 title: "Fleet",
//                 desc: "State-of-the-art transport solutions",
//                 img: "/images/childcare/3.jpeg",
//               },
//               {
//                 title: "Team",
//                 desc: "Dedicated professionals",
//                 img: "/images/childcare/4.jpeg",
//               },
//               {
//                 title: "Facilities",
//                 desc: "World-class infrastructure",
//                 img: "/images/childcare/5.jpeg",
//               },
//               {
//                 title: "Real Estate Projects",
//                 desc: "Premium developments",
//                 img: "/images/childcare/6.jpeg",
//               },
//               {
//                 title: "Construction Sites",
//                 desc: "Quality craftsmanship",
//                 img: "/images/childcare/7.jpeg",
//               },
//               {
//                 title: "Residential Projects",
//                 desc: "Luxury apartments & villas",
//                 img: "/images/childcare/8.jpeg",
//               },
//               {
//                 title: "Commercial Spaces",
//                 desc: "Office & retail developments",
//                 img: "/images/childcare/9.jpeg",
//               },
//               {
//                 title: "Project Management",
//                 desc: "Expert supervision",
//                 img: "/images/childcare/10.jpeg",
//               },
//               {
//                 title: "Design Innovation",
//                 desc: "Creative architectural solutions",
//                 img: "/images/childcare/11.jpeg",
//               },
//               {
//                 title: "Quality Control",
//                 desc: "Uncompromising standards",
//                 img: "/images/childcare/12.jpeg",
//               },
//               {
//                 title: "Community Impact",
//                 desc: "Building better neighborhoods",
//                 img: "/images/childcare/13.jpeg",
//               },
//               {
//                 title: "Sustainable Construction",
//                 desc: "Green building practices",
//                 img: "/images/childcare/14.jpeg",
//               },
//             ].map((item, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: i * 0.05 }}
//                 className="relative overflow-hidden rounded-xl group cursor-pointer"
//               >
//                 <img
//                   src={item.img}
//                   alt={item.title}
//                   className="w-full h-50 object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-2">
//                   <div className="text-white font-bold text-xs">
//                     {item.title}
//                   </div>
//                   <div className="text-gray-300 text-xs">{item.desc}</div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </section>
//         {/* IMPACT & RECOGNITION */}
//         <section className="grid md:grid-cols-2 gap-6 items-stretch">
//           <motion.div
//             initial={{ opacity: 0, x: -16 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 p-5 rounded-xl border border-white/10 shadow-lg"
//           >
//             <h4 className="text-lg font-bold text-[#f37121] mb-4">
//               Our Impact
//             </h4>
//             <div className="space-y-4">
//               {[
//                 {
//                   icon: "🏗️",
//                   title: "Construction Excellence",
//                   description:
//                     "15+ projects delivered with 100% client satisfaction",
//                 },
//                 {
//                   icon: "🎓",
//                   title: "Educational Innovation",
//                   description:
//                     "3 international schools setting new standards in KSA",
//                 },
//                 {
//                   icon: "🚛",
//                   title: "Logistics Leadership",
//                   description:
//                     "34+ truck fleet serving major industrial projects",
//                 },
//                 {
//                   icon: "👶",
//                   title: "Childcare Quality",
//                   description:
//                     "100+ children benefiting from premium childcare services",
//                 },
//               ].map((impact, i) => (
//                 <div
//                   key={i}
//                   className="flex items-start gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all"
//                 >
//                   <div className="text-2xl flex-shrink-0">{impact.icon}</div>
//                   <div>
//                     <h5 className="font-semibold text-white text-sm mb-1">
//                       {impact.title}
//                     </h5>
//                     <p className="text-gray-400 text-xs">
//                       {impact.description}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </motion.div>

//           <div className="flex flex-col gap-4 h-full">
//             <motion.div
//               initial={{ opacity: 0, y: 16 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               className="bg-white/8 backdrop-blur p-5 rounded-xl border border-white/10 shadow-lg flex-1 flex flex-col justify-center"
//             >
//               <div className="flex items-start gap-3">
//                 <div className="w-10 h-10 rounded-full bg-[#f37121]/20 flex items-center justify-center text-[#f37121] flex-shrink-0">
//                   <FaAward className="text-lg" />
//                 </div>
//                 <div className="flex-1">
//                   <h4 className="font-bold text-white text-lg mb-3">
//                     Industry Recognition
//                   </h4>
//                   <div className="space-y-3">
//                     {[
//                       "ISO 9001:2015 Certified Quality Management",
//                       "Saudi Vision 2030 Strategic Partner",
//                       "Ministry of Education Approved Curriculum",
//                       "General Authority of Transport Licensed",
//                     ].map((achievement, i) => (
//                       <div key={i} className="flex items-center gap-2">
//                         <div className="w-2 h-2 bg-[#f37121] rounded-full flex-shrink-0"></div>
//                         <span className="text-gray-300 text-sm">
//                           {achievement}
//                         </span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 16 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.1 }}
//               className="bg-gradient-to-r from-[#f37121]/10 to-orange-500/10 p-5 rounded-xl border border-[#f37121]/20 shadow-lg flex-1 flex flex-col justify-center"
//             >
//               <div className="flex items-start gap-3">
//                 <div className="w-10 h-10 rounded-full bg-[#f37121] flex items-center justify-center text-white flex-shrink-0">
//                   <FaRocket className="text-lg" />
//                 </div>
//                 <div className="flex-1">
//                   <h4 className="font-bold text-white text-lg mb-3">
//                     Growth Metrics
//                   </h4>
//                   <div className="grid grid-cols-2 gap-3">
//                     {[
//                       { value: "360+", label: "Team Members" },
//                       { value: "150+", label: "Cities" },
//                       { value: "99+", label: "Projects" },
//                       { value: "100%", label: "Satisfaction" },
//                     ].map((metric, i) => (
//                       <div
//                         key={i}
//                         className="text-center p-2 rounded-lg bg-white/5"
//                       >
//                         <div className="text-[#f37121] font-bold text-lg">
//                           {metric.value}
//                         </div>
//                         <div className="text-gray-400 text-xs">
//                           {metric.label}
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </section>

//         {/* CONTACT CTA */}
//         <section
//           id="contact"
//           className="bg-gradient-to-r from-gray-900/80 to-gray-800/60 backdrop-blur rounded-xl p-6 border border-white/10 shadow-lg"
//         >
//           <div className="md:flex md:items-center md:justify-between gap-4">
//             <div className="md:w-1/2">
//               <h3 className="text-xl font-bold text-[#f37121]">
//                 Get in touch with us
//               </h3>
//               <p className="text-gray-300 mt-1 text-sm">
//                 Book a visit, partnership inquiry, project consultation, or
//                 fleet contract - we reply within 24 hours.
//               </p>

//               <div className="mt-4 space-y-3">
//                 <div className="flex items-center gap-2">
//                   <div className="w-8 h-8 rounded-full bg-[#f37121]/20 flex items-center justify-center text-[#f37121]">
//                     <FaPhoneAlt className="text-xs" />
//                   </div>
//                   <div>
//                     <div className="text-gray-400 text-xs">Phone</div>
//                     <a
//                       href="tel:+966540958433"
//                       className="font-medium text-sm hover:text-[#f37121] transition-colors"
//                     >
//                       +966 54 095 8433
//                     </a>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-2">
//                   <div className="w-8 h-8 rounded-full bg-[#f37121]/20 flex items-center justify-center text-[#f37121]">
//                     <FaEnvelope className="text-xs" />
//                   </div>
//                   <div>
//                     <div className="text-gray-400 text-xs">Email</div>
//                     <a
//                       href="mailto:info@energizefuture.com"
//                       className="font-medium text-sm hover:text-[#f37121] transition-colors"
//                     >
//                       info@energizefuture.com
//                     </a>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-2">
//                   <div className="w-8 h-8 rounded-full bg-[#f37121]/20 flex items-center justify-center text-[#f37121]">
//                     <FaMapMarkerAlt className="text-xs" />
//                   </div>
//                   <div>
//                     <div className="text-gray-400 text-xs">Address</div>
//                     <div className="font-medium text-sm">
//                       Jeddah, Saudi Arabia
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="flex gap-3 mt-4">
//                 <a
//                   href="#"
//                   className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#f37121] transition-colors text-xs"
//                 >
//                   <FaTwitter />
//                 </a>
//                 <a
//                   href="#"
//                   className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#f37121] transition-colors text-xs"
//                 >
//                   <FaLinkedin />
//                 </a>
//                 <a
//                   href="#"
//                   className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#f37121] transition-colors text-xs"
//                 >
//                   <FaInstagram />
//                 </a>
//               </div>
//             </div>

//             <div className="md:w-1/2 mt-6 md:mt-0">
//               <div className="bg-white/5 p-4 rounded-lg border border-white/10">
//                 <h4 className="text-base font-bold mb-3">Send us a message</h4>
//                 <form className="space-y-3">
//                   <div className="grid grid-cols-2 gap-3">
//                     <input
//                       type="text"
//                       placeholder="First Name"
//                       className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-[#f37121] transition-colors"
//                     />
//                     <input
//                       type="text"
//                       placeholder="Last Name"
//                       className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-[#f37121] transition-colors"
//                     />
//                   </div>
//                   <input
//                     type="email"
//                     placeholder="Email Address"
//                     className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-[#f37121] transition-colors"
//                   />
//                   <select className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-[#f37121] transition-colors">
//                     <option value="">Select Interest</option>
//                     <option value="education">Education</option>
//                     <option value="childcare">Childcare</option>
//                     <option value="logistics">Logistics</option>
//                     <option value="real-estate">
//                       Real Estate & Construction
//                     </option>
//                     <option value="partnership">Partnership</option>
//                   </select>
//                   <textarea
//                     placeholder="Your Message"
//                     rows={3}
//                     className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-[#f37121] transition-colors"
//                   ></textarea>
//                   <button
//                     type="submit"
//                     className="w-full py-2 rounded-lg bg-gradient-to-r from-[#f37121] to-orange-500 text-black font-bold text-sm hover:scale-105 transition-transform"
//                   >
//                     Send Message
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// }


"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
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
  FaBuilding,
  FaHome,
  FaHardHat,
} from "react-icons/fa";

export default function CreativeEFG() {
  // counters
  const [counters, setCounters] = useState({
    schools: 0,
    childcare: 0,
    trucks: 0,
    employees: 0,
    projects: 0,
  });

  useEffect(() => {
    const targets = {
      schools: 3,
      childcare: 100,
      trucks: 34,
      employees: 360,
      projects: 15,
    };
    const duration = 1200;
    const start = performance.now();
    const animate = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      setCounters({
        schools: Math.floor(progress * targets.schools),
        childcare: Math.floor(progress * targets.childcare),
        trucks: Math.floor(progress * targets.trucks),
        employees: Math.floor(progress * targets.employees),
        projects: Math.floor(progress * targets.projects),
      });
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, []);

  return (
    <main className="relative bg-[#0a0f1d] text-white min-h-screen antialiased">
      {/* subtle background touches */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 -top-20 w-72 h-72 bg-[#f37121]/10 rounded-full blur-3xl" />
        <div className="absolute -right-24 -bottom-24 w-80 h-80 bg-blue-500/6 rounded-full blur-3xl" />
        <div className="absolute left-1/3 top-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12 space-y-16">
        {/* HERO */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#f37121] to-orange-400">
              Energize Future Group
            </h1>
            <p className="text-gray-300 max-w-md text-sm">
              Empowering generations - integrating{" "}
              <span className="text-[#f37121] font-semibold">childcare</span>,{" "}
              <span className="text-[#f37121] font-semibold">
                international education
              </span>
              ,{" "}
              <span className="text-[#f37121] font-semibold">
                heavy transport & logistics
              </span>
              , and{" "}
              <span className="text-[#f37121] font-semibold">
                real estate development
              </span>
              . Trusted, compliant, and built for Vision 2030 impact.
            </p>

            <div className="flex gap-3 mt-4">
              <button className="px-4 py-2 text-sm rounded-full bg-gradient-to-r from-[#f37121] to-orange-500 text-black font-medium shadow hover:scale-105 transition-transform flex items-center gap-2">
                Explore Divisions <FaArrowRight className="text-xs" />
              </button>
              <a
                href="#contact"
                className="px-4 py-2 text-sm rounded-full bg-white/5 text-white font-medium hover:bg-white/10 transition-colors self-center"
              >
                Contact Us
              </a>
            </div>

            <div className="flex flex-wrap gap-2 mt-4 text-xs text-gray-400">
              <div className="bg-white/5 px-3 py-1.5 rounded-lg flex items-center gap-1">
                <FaMapMarkerAlt className="text-[#f37121] text-xs" />{" "}
                Headquartered: Jeddah
              </div>
              <div className="bg-white/5 px-3 py-1.5 rounded-lg flex items-center gap-1">
                <FaTruckMoving className="text-[#f37121] text-xs" /> Fleet: 34
                trucks
              </div>
              <div className="bg-white/5 px-3 py-1.5 rounded-lg flex items-center gap-1">
                <FaBuilding className="text-[#f37121] text-xs" /> Projects: 15+
                completed
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative w-full max-w-sm rounded-xl overflow-hidden border border-white/10 shadow-lg">
              <img
                src="/images/raai.jpeg"
                alt="Energize hero"
                className="w-full h-60 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-lg font-bold">
                  Building Futures Since 2024
                </h3>
                <p className="text-gray-300 text-xs mt-1">
                  Committed to excellence in education, childcare, logistics,
                  and real estate
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SMALL ICONS ROW */}
        <section className="flex flex-wrap gap-3 justify-center">
          {[
            { icon: <FaSchool />, label: "Education" },
            { icon: <FaBaby />, label: "Childcare" },
            { icon: <FaTruckMoving />, label: "Logistics" },
            { icon: <FaBuilding />, label: "Real Estate" },
            { icon: <FaHardHat />, label: "Construction" },
            { icon: <FaLeaf />, label: "Sustainability" },
            { icon: <FaHandshake />, label: "Partnerships" },
            { icon: <FaCertificate />, label: "Quality & Compliance" },
            { icon: <FaShieldAlt />, label: "Safety" },
            { icon: <FaHeart />, label: "Community" },
            { icon: <FaGraduationCap />, label: "Learning" },
          ].map((it, i) => (
            <div
              key={i}
              className="flex items-center gap-2 bg-white/5 text-gray-200 px-3 py-2 rounded-lg text-xs shadow hover:bg-white/10 transition-all cursor-pointer"
            >
              <div className="text-[#f37121] text-sm">{it.icon}</div>
              <div className="font-medium">{it.label}</div>
            </div>
          ))}
        </section>

        {/* COUNTERS */}
        <section className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            {
              label: "Schools",
              value: counters.schools,
              icon: <FaSchool />,
              suffix: "",
            },
            {
              label: "Childcare Capacity",
              value: counters.childcare,
              icon: <FaBaby />,
              suffix: "+",
            },
            {
              label: "Trucks",
              value: counters.trucks,
              icon: <FaTruckMoving />,
              suffix: "+",
            },
            {
              label: "Employees",
              value: counters.employees,
              icon: <FaUsers />,
              suffix: "+",
            },
            {
              label: "Projects",
              value: counters.projects,
              icon: <FaBuilding />,
              suffix: "+",
            },
          ].map((s, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 rounded-xl p-4 text-center border border-white/10 shadow"
            >
              <div className="flex items-center justify-center text-lg text-[#f37121] mb-2">
                {s.icon}
              </div>
              <div className="text-xl font-bold">
                {s.value}
                {s.suffix}
              </div>
              <div className="text-gray-400 text-xs mt-1">{s.label}</div>
            </div>
          ))}
        </section>

        {/* DIVISIONS DETAILED */}
        <section className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-[#f37121]">
              Our Business Divisions
            </h2>
            <p className="text-gray-400 mt-1 text-sm max-w-xl mx-auto">
              Four integrated pillars working together to build a better future
              for Saudi families and businesses
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* card 1 */}
            <div className="bg-gradient-to-b from-white/5 to-transparent rounded-xl p-4 shadow-lg border border-white/10 hover:border-[#f37121]/30 transition-all">
              <div className="flex flex-col gap-3 items-start">
                <div className="w-full h-30 rounded-lg overflow-hidden border border-white/10 shadow">
                  <img
                    src="/images/hee.jpeg"
                    alt="school"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#f37121]">
                    EFG International Schools
                  </h3>
                  <p className="text-gray-300 text-xs mt-1">
                    Three campuses (Riyadh & Jeddah) with KG→Primary launch,
                    IB/CIS pathways, STEAM focus and bilingual tracks.
                  </p>
                  <div className="flex flex-wrap gap-1 mt-3 text-xs">
                    <span className="bg-[#f37121]/20 text-[#f37121] px-2 py-1 rounded-full">
                      Accreditation
                    </span>
                    <span className="bg-[#f37121]/20 text-[#f37121] px-2 py-1 rounded-full">
                      STEAM Labs
                    </span>
                  </div>
                </div>
              </div>
              <Link
                href="/divisions/international-schools"
                className="mt-4 w-full py-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-xs flex items-center justify-center gap-1"
              >
                Learn More <FaArrowRight className="text-xs" />
              </Link>
            </div>

            {/* card 4 - REAL ESTATE */}
            <div className="bg-gradient-to-b from-white/5 to-transparent rounded-xl p-4 shadow-lg border border-white/10 hover:border-[#f37121]/30 transition-all">
              <div className="flex flex-col gap-3 items-start">
                <div className="w-full h-30 rounded-lg overflow-hidden border border-white/10 shadow">
                  <img
                    src="/images/ew.jpeg"
                    alt="real estate"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#f37121]">
                    Real Estate & Construction
                  </h3>
                  <p className="text-gray-300 text-xs mt-1">
                    Premium residential and commercial developments with quality
                    craftsmanship, timely delivery, and innovative design.
                  </p>
                  <div className="flex flex-wrap gap-1 mt-3 text-xs">
                    <span className="bg-[#f37121]/20 text-[#f37121] px-2 py-1 rounded-full">
                      Development
                    </span>
                    <span className="bg-[#f37121]/20 text-[#f37121] px-2 py-1 rounded-full">
                      Construction
                    </span>
                  </div>
                </div>
              </div>
              <Link
                href="/divisions/real-estate"
                className="mt-4 w-full py-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-xs flex items-center justify-center gap-1"
              >
                Learn More <FaArrowRight className="text-xs" />
              </Link>
            </div>

            {/* card 3 */}
            <div className="bg-gradient-to-b from-white/5 to-transparent rounded-xl p-4 shadow-lg border border-white/10 hover:border-[#f37121]/30 transition-all">
              <div className="flex flex-col gap-3 items-start">
                <div className="w-full h-30 rounded-lg overflow-hidden border border-white/10 shadow">
                  <img
                    src="/images/f.jpeg"
                    alt="truck"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#f37121]">
                    Heavy Truck & Logistics
                  </h3>
                  <p className="text-gray-300 text-xs mt-1">
                    Project-based heavy haulage for construction, energy and
                    manufacturing with telematics and predictive maintenance.
                  </p>
                  <div className="flex flex-wrap gap-1 mt-3 text-xs">
                    <span className="bg-[#f37121]/20 text-[#f37121] px-2 py-1 rounded-full">
                      Telematics
                    </span>
                    <span className="bg-[#f37121]/20 text-[#f37121] px-2 py-1 rounded-full">
                      24/7 Support
                    </span>
                  </div>
                </div>
              </div>
              <Link
                href="/divisions/transport-logistics"
                className="mt-4 w-full py-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-xs flex items-center justify-center gap-1"
              >
                Learn More <FaArrowRight className="text-xs" />
              </Link>
            </div>

            {/* card 2 */}
            <div className="bg-gradient-to-b from-white/5 to-transparent rounded-xl p-4 shadow-lg border border-white/10 hover:border-[#f37121]/30 transition-all">
              <div className="flex flex-col gap-3 items-start">
                <div className="w-full h-30 rounded-lg overflow-hidden border border-white/10 shadow">
                  <img
                    src="/images/wf.jpeg"
                    alt="childcare"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#f37121]">
                    EFG Childcare
                  </h3>
                  <p className="text-gray-300 text-xs mt-1">
                    Bilingual Montessori + FLYS curricula, parent app for daily
                    reports, secure facilities and highly trained caregivers.
                  </p>
                  <div className="flex flex-wrap gap-1 mt-3 text-xs">
                    <span className="bg-[#f37121]/20 text-[#f37121] px-2 py-1 rounded-full">
                      Parent App
                    </span>
                    <span className="bg-[#f37121]/20 text-[#f37121] px-2 py-1 rounded-full">
                      Safety
                    </span>
                  </div>
                </div>
              </div>
              <Link
                href="/divisions/childcare"
                className="mt-4 w-full py-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-xs flex items-center justify-center gap-1"
              >
                Learn More <FaArrowRight className="text-xs" />
              </Link>
            </div>
          </div>
        </section>

        {/* MISSION & VISION */}
        <section className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/8 backdrop-blur rounded-xl p-4 border border-white/10 shadow-lg">
            <div className="flex items-center gap-2 mb-3">
              <div className="p-2 rounded-lg bg-[#f37121]/20 text-[#f37121]">
                <FaGlobeAmericas className="text-base" />
              </div>
              <h4 className="text-lg font-bold text-[#f37121]">Our Vision</h4>
            </div>
            <p className="text-gray-300 text-sm">
              Shape a future where families thrive through accessible education,
              quality childcare, dependable logistics, and premium real estate
              solutions that support national growth.
            </p>
            <div className="mt-4 p-3 bg-white/5 rounded-lg">
              <p className="text-xs text-gray-400">
                Aligned with Vision 2030 - workforce participation & private
                sector growth.
              </p>
            </div>
          </div>

          <div className="bg-white/8 backdrop-blur rounded-xl p-4 border border-white/10 shadow-lg">
            <div className="flex items-center gap-2 mb-3">
              <div className="p-2 rounded-lg bg-[#f37121]/20 text-[#f37121]">
                <FaRocket className="text-base" />
              </div>
              <h4 className="text-lg font-bold text-[#f37121]">Our Mission</h4>
            </div>
            <p className="text-gray-300 text-sm">
              Deliver meaningful services that enrich lives, inspire growth, and
              build trust through innovation, safety, operational excellence,
              and quality construction.
            </p>
            <div className="mt-4 p-3 bg-white/5 rounded-lg">
              <p className="text-xs text-gray-400">
                People-first: families, employees, and communities.
              </p>
            </div>
          </div>
        </section>

        {/* STRATEGY + TIMELINE */}
        <section className="space-y-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-[#f37121]">
              Roadmap & Key Milestones
            </h2>
            <p className="text-gray-400 mt-1 text-sm">
              Our strategic journey towards building a better future
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-3 text-sm">
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 p-4 rounded-lg text-center border border-white/10 shadow">
              <div className="text-base font-bold text-[#f37121]">Q4 2024</div>
              <div className="text-gray-400 text-xs mt-1">
                Group setup & fleet registration
              </div>
              <div className="mt-2 h-1 w-10 bg-[#f37121] rounded-full mx-auto"></div>
            </div>
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 p-4 rounded-lg text-center border border-white/10 shadow">
              <div className="text-base font-bold text-[#f37121]">Q1 2025</div>
              <div className="text-gray-400 text-xs mt-1">
                Start school & childcare construction
              </div>
              <div className="mt-2 h-1 w-10 bg-[#f37121] rounded-full mx-auto"></div>
            </div>
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 p-4 rounded-lg text-center border border-white/10 shadow">
              <div className="text-base font-bold text-[#f37121]">Q3 2025</div>
              <div className="text-gray-400 text-xs mt-1">
                Launch real estate division
              </div>
              <div className="mt-2 h-1 w-10 bg-[#f37121] rounded-full mx-auto"></div>
            </div>
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 p-4 rounded-lg text-center border border-white/10 shadow">
              <div className="text-base font-bold text-[#f37121]">Q4 2025</div>
              <div className="text-gray-400 text-xs mt-1">
                Open first EFG Childcare (Riyadh)
              </div>
              <div className="mt-2 h-1 w-10 bg-[#f37121] rounded-full mx-auto"></div>
            </div>
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 p-4 rounded-lg text-center border border-white/10 shadow">
              <div className="text-base font-bold text-[#f37121]">Q3 2026</div>
              <div className="text-gray-400 text-xs mt-1">
                Open EFG International Schools
              </div>
              <div className="mt-2 h-1 w-10 bg-[#f37121] rounded-full mx-auto"></div>
            </div>
          </div>
        </section>

        {/* GROWTH INSIGHTS */}
        <section className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 p-4 rounded-xl border border-white/10 shadow">
            <div className="flex items-center gap-2 mb-3">
              <FaChartLine className="text-lg text-[#f37121]" />
              <h4 className="text-lg font-bold text-[#f37121]">
                Market Snapshot
              </h4>
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
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#f37121] mt-1.5 flex-shrink-0"></div>
                <span>Real Estate growth: 7.5% CAGR</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 p-4 rounded-xl border border-white/10 shadow">
            <div className="flex items-center gap-2 mb-3">
              <FaRocket className="text-lg text-[#f37121]" />
              <h4 className="text-lg font-bold text-[#f37121]">
                Strategic Priorities
              </h4>
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
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#f37121] mt-1.5 flex-shrink-0"></div>
                <span>Premium real estate development</span>
              </li>
            </ul>
          </div>
        </section>

        {/* REAL ESTATE FOCUS SECTION */}
        <section className="grid md:grid-cols-2 gap-6 items-start">
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 p-4 rounded-xl border border-white/10 shadow">
            <div className="flex items-center gap-2 mb-3">
              <FaBuilding className="text-lg text-[#f37121]" />
              <h4 className="text-lg font-bold text-[#f37121]">
                Real Estate & Construction Division
              </h4>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              EFG Properties delivers premium residential and commercial
              developments with uncompromising quality and innovative design.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-white/5 p-3 rounded-lg">
                <div className="text-base font-bold text-[#f37121]">
                  Residential
                </div>
                <p className="text-gray-400 text-xs mt-1">
                  Luxury apartments & villas
                </p>
              </div>
              <div className="bg-white/5 p-3 rounded-lg">
                <div className="text-base font-bold text-[#f37121]">
                  Commercial
                </div>
                <p className="text-gray-400 text-xs mt-1">
                  Office & retail spaces
                </p>
              </div>
              <div className="bg-white/5 p-3 rounded-lg">
                <div className="text-base font-bold text-[#f37121]">
                  Construction
                </div>
                <p className="text-gray-400 text-xs mt-1">Turnkey projects</p>
              </div>
              <div className="bg-white/5 p-3 rounded-lg">
                <div className="text-base font-bold text-[#f37121]">
                  Consultancy
                </div>
                <p className="text-gray-400 text-xs mt-1">Project management</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="bg-[#f37121]/20 text-[#f37121] px-2 py-1 rounded-full text-xs">
                Quality Craftsmanship
              </span>
              <span className="bg-[#f37121]/20 text-[#f37121] px-2 py-1 rounded-full text-xs">
                Timely Delivery
              </span>
              <span className="bg-[#f37121]/20 text-[#f37121] px-2 py-1 rounded-full text-xs">
                Innovative Design
              </span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 rounded-xl p-3 flex items-center justify-center h-full border border-white/10 shadow">
            <div className="relative w-full h-68 rounded-lg overflow-hidden">
              <img
                src="/images/ew.jpeg"
                alt="real estate projects"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
                <div className="text-white">
                  <h5 className="font-bold text-sm">Premium Developments</h5>
                  <p className="text-xs text-gray-300">
                    Building tomorrows landmarks today
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SUSTAINABILITY */}
        <section className="grid md:grid-cols-3 gap-6 items-start">
          <div className="md:col-span-2 bg-white/8 backdrop-blur p-4 rounded-xl border border-white/10 shadow-lg">
            <div className="flex items-center gap-2 mb-3">
              <FaLeaf className="text-lg text-[#f37121]" />
              <h4 className="text-lg font-bold text-[#f37121]">
                Sustainability & CSR
              </h4>
            </div>
            <p className="text-gray-300 text-sm">
              EFG drives eco-efficiency across all divisions - green building
              standards, fuel-efficient logistics, community scholarships, and
              workplace childcare initiatives.
            </p>
            <div className="grid grid-cols-3 gap-3 mt-4">
              <div className="bg-white/5 p-3 rounded-lg text-center">
                <div className="text-base font-bold text-[#f37121]">
                  Green Building
                </div>
                <p className="text-gray-400 text-xs mt-1">
                  Sustainable construction
                </p>
              </div>
              <div className="bg-white/5 p-3 rounded-lg text-center">
                <div className="text-base font-bold text-[#f37121]">
                  Fuel-efficiency
                </div>
                <p className="text-gray-400 text-xs mt-1">Reducing emissions</p>
              </div>
              <div className="bg-white/5 p-3 rounded-lg text-center">
                <div className="text-base font-bold text-[#f37121]">
                  Community
                </div>
                <p className="text-gray-400 text-xs mt-1">Local initiatives</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 rounded-xl p-3 flex items-center justify-center h-full border border-white/10 shadow">
            <div className="relative w-full h-48 rounded-lg overflow-hidden">
              <img
                src="/images/re.jpeg"
                alt="sustainability"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
                <div className="text-white">
                  <h5 className="font-bold text-sm">Green Initiatives</h5>
                  <p className="text-xs text-gray-300">
                    Building a sustainable future
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TEAM */}
        <section>
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-[#f37121]">
              Our Leadership Team
            </h2>
            <p className="text-gray-400 mt-1 text-sm max-w-xl mx-auto">
              Experienced professionals driving our vision forward across all
              divisions
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                name: "Ahmed Hassan",
                title: "COO",
                img: "/images/107.jpeg",
                desc: "8+ years in Management",
              },
              {
                name: "Hossam Magdy",
                title: "CEO",
                img: "/images/101.jpeg",
                desc: "15+ years in business development",
              },
              {
                name: "Eslam Zaky",
                title: "B2C HOD",
                img: "/images/102.jpeg",
                desc: "Logistics expert with 10+ years",
              },
              {
                name: "Mohamed Ramy",
                title: "HR Manager",
                img: "/images/103.jpeg",
                desc: "Talent development specialist",
              },
            ].map((p, i) => (
              <div
                key={i}
                className="bg-gradient-to-b from-white/5 to-transparent p-3 rounded-xl text-center border border-white/10 shadow hover:shadow-md transition-all"
              >
                <div className="relative inline-block">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-35 h-50 object-cover rounded-3xl mx-auto shadow"
                  />
                  <div className="absolute bottom-0 right-0 w-4 h-4 bg-[#f37121] rounded-full border border-white"></div>
                </div>
                <div className="mt-3">
                  <div className="font-bold text-sm">{p.name}</div>
                  <div className="text-[#f37121] text-xs font-medium">
                    {p.title}
                  </div>
                  <div className="text-gray-400 text-xs mt-1">{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* GALLERY */}
        <section>
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-[#f37121]">Our Gallery</h2>
            <p className="text-gray-400 mt-1 text-sm">
              Capturing moments from across our divisions including real estate
              projects
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-7 gap-3">
            {[
              {
                title: "Campus - Riyadh",
                desc: "Modern learning environments",
                img: "/images/childcare/1.jpeg",
              },
              {
                title: "Childcare Activities",
                desc: "Engaging early childhood programs",
                img: "/images/childcare/2.jpeg",
              },
              {
                title: "Fleet",
                desc: "State-of-the-art transport solutions",
                img: "/images/childcare/3.jpeg",
              },
              {
                title: "Team",
                desc: "Dedicated professionals",
                img: "/images/childcare/4.jpeg",
              },
              {
                title: "Facilities",
                desc: "World-class infrastructure",
                img: "/images/childcare/5.jpeg",
              },
              {
                title: "Real Estate Projects",
                desc: "Premium developments",
                img: "/images/childcare/6.jpeg",
              },
              {
                title: "Construction Sites",
                desc: "Quality craftsmanship",
                img: "/images/childcare/7.jpeg",
              },
              {
                title: "Residential Projects",
                desc: "Luxury apartments & villas",
                img: "/images/childcare/8.jpeg",
              },
              {
                title: "Commercial Spaces",
                desc: "Office & retail developments",
                img: "/images/childcare/9.jpeg",
              },
              {
                title: "Project Management",
                desc: "Expert supervision",
                img: "/images/childcare/10.jpeg",
              },
              {
                title: "Design Innovation",
                desc: "Creative architectural solutions",
                img: "/images/childcare/11.jpeg",
              },
              {
                title: "Quality Control",
                desc: "Uncompromising standards",
                img: "/images/childcare/12.jpeg",
              },
              {
                title: "Community Impact",
                desc: "Building better neighborhoods",
                img: "/images/childcare/13.jpeg",
              },
              {
                title: "Sustainable Construction",
                desc: "Green building practices",
                img: "/images/childcare/14.jpeg",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-xl group cursor-pointer"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-50 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-2">
                  <div className="text-white font-bold text-xs">
                    {item.title}
                  </div>
                  <div className="text-gray-300 text-xs">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* IMPACT & RECOGNITION */}
        <section className="grid md:grid-cols-2 gap-6 items-stretch">
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 p-5 rounded-xl border border-white/10 shadow-lg">
            <h4 className="text-lg font-bold text-[#f37121] mb-4">
              Our Impact
            </h4>
            <div className="space-y-4">
              {[
                {
                  icon: "🏗️",
                  title: "Construction Excellence",
                  description:
                    "15+ projects delivered with 100% client satisfaction",
                },
                {
                  icon: "🎓",
                  title: "Educational Innovation",
                  description:
                    "3 international schools setting new standards in KSA",
                },
                {
                  icon: "🚛",
                  title: "Logistics Leadership",
                  description:
                    "34+ truck fleet serving major industrial projects",
                },
                {
                  icon: "👶",
                  title: "Childcare Quality",
                  description:
                    "100+ children benefiting from premium childcare services",
                },
              ].map((impact, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all"
                >
                  <div className="text-2xl flex-shrink-0">{impact.icon}</div>
                  <div>
                    <h5 className="font-semibold text-white text-sm mb-1">
                      {impact.title}
                    </h5>
                    <p className="text-gray-400 text-xs">
                      {impact.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 h-full">
            <div className="bg-white/8 backdrop-blur p-5 rounded-xl border border-white/10 shadow-lg flex-1 flex flex-col justify-center">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#f37121]/20 flex items-center justify-center text-[#f37121] flex-shrink-0">
                  <FaAward className="text-lg" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-white text-lg mb-3">
                    Industry Recognition
                  </h4>
                  <div className="space-y-3">
                    {[
                      "ISO 9001:2015 Certified Quality Management",
                      "Saudi Vision 2030 Strategic Partner",
                      "Ministry of Education Approved Curriculum",
                      "General Authority of Transport Licensed",
                    ].map((achievement, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#f37121] rounded-full flex-shrink-0"></div>
                        <span className="text-gray-300 text-sm">
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#f37121]/10 to-orange-500/10 p-5 rounded-xl border border-[#f37121]/20 shadow-lg flex-1 flex flex-col justify-center">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#f37121] flex items-center justify-center text-white flex-shrink-0">
                  <FaRocket className="text-lg" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-white text-lg mb-3">
                    Growth Metrics
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { value: "360+", label: "Team Members" },
                      { value: "150+", label: "Cities" },
                      { value: "99+", label: "Projects" },
                      { value: "100%", label: "Satisfaction" },
                    ].map((metric, i) => (
                      <div
                        key={i}
                        className="text-center p-2 rounded-lg bg-white/5"
                      >
                        <div className="text-[#f37121] font-bold text-lg">
                          {metric.value}
                        </div>
                        <div className="text-gray-400 text-xs">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT CTA */}
        <section
          id="contact"
          className="bg-gradient-to-r from-gray-900/80 to-gray-800/60 backdrop-blur rounded-xl p-6 border border-white/10 shadow-lg"
        >
          <div className="md:flex md:items-center md:justify-between gap-4">
            <div className="md:w-1/2">
              <h3 className="text-xl font-bold text-[#f37121]">
                Get in touch with us
              </h3>
              <p className="text-gray-300 mt-1 text-sm">
                Book a visit, partnership inquiry, project consultation, or
                fleet contract - we reply within 24 hours.
              </p>

              <div className="mt-4 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#f37121]/20 flex items-center justify-center text-[#f37121]">
                    <FaPhoneAlt className="text-xs" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs">Phone</div>
                    <a
                      href="tel:+966540958433"
                      className="font-medium text-sm hover:text-[#f37121] transition-colors"
                    >
                      +966 54 095 8433
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#f37121]/20 flex items-center justify-center text-[#f37121]">
                    <FaEnvelope className="text-xs" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs">Email</div>
                    <a
                      href="mailto:info@energizefuture.com"
                      className="font-medium text-sm hover:text-[#f37121] transition-colors"
                    >
                      info@energizefuture.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#f37121]/20 flex items-center justify-center text-[#f37121]">
                    <FaMapMarkerAlt className="text-xs" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs">Address</div>
                    <div className="font-medium text-sm">
                      Jeddah, Saudi Arabia
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mt-4">
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#f37121] transition-colors text-xs"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#f37121] transition-colors text-xs"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#f37121] transition-colors text-xs"
                >
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
                    <option value="real-estate">
                      Real Estate & Construction
                    </option>
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
  );
}