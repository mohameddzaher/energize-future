// 'use client'

// import { motion } from 'framer-motion'
// import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa'

// export default function ContactPage() {
//   const reveal = { 
//     hidden: { opacity: 0, y: 14 }, 
//     show: (i = 0) => ({ 
//       opacity: 1, 
//       y: 0, 
//       transition: { delay: i * 0.08 } 
//     }) 
//   }

//   return (
//     <main className="bg-[#0a0f1d] text-white min-h-screen antialiased pt-8">
//       <div className="max-w-4xl mx-auto px-4 py-8 space-y-12">

//         {/* HERO */}
//         <section className="text-center space-y-3">
//           <motion.h1 
//             initial="hidden" 
//             whileInView="show" 
//             viewport={{ once: true }} 
//             variants={reveal} 
//             className="text-2xl md:text-3xl font-bold text-[#f37121]"
//           >
//             Contact Energize Future Group
//           </motion.h1>
//           <motion.p 
//             initial="hidden" 
//             whileInView="show" 
//             viewport={{ once: true }} 
//             variants={reveal} 
//             className="text-gray-400 text-sm max-w-md mx-auto"
//           >
//             We&apos;d love to hear from you! Reach out for inquiries, partnerships, or any questions.
//           </motion.p>
//         </section>

//         {/* CONTACT INFO & FORM */}
//         <section className="grid md:grid-cols-2 gap-8">
//           {/* Contact Info */}
//           <motion.div 
//             initial="hidden" 
//             whileInView="show" 
//             viewport={{ once: true }} 
//             variants={reveal} 
//             className="space-y-4"
//           >
//             <div className="flex items-start gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
//               <FaMapMarkerAlt className="text-[#f37121] text-lg mt-0.5 flex-shrink-0" />
//               <div>
//                 <h3 className="text-white font-medium text-sm">Headquarters</h3>
//                 <p className="text-gray-400 text-xs mt-1">Riyadh International District, Saudi Arabia</p>
//               </div>
//             </div>

//             <div className="flex items-start gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
//               <FaPhoneAlt className="text-[#f37121] text-lg mt-0.5 flex-shrink-0" />
//               <div>
//                 <h3 className="text-white font-medium text-sm">Phone</h3>
//                 <p className="text-gray-400 text-xs mt-1">+966 54 095 8433</p>
//               </div>
//             </div>

//             <div className="flex items-start gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
//               <FaEnvelope className="text-[#f37121] text-lg mt-0.5 flex-shrink-0" />
//               <div>
//                 <h3 className="text-white font-medium text-sm">Email</h3>
//                 <p className="text-gray-400 text-xs mt-1">info@energizefuture.com</p>
//               </div>
//             </div>

//             <div className="flex items-start gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
//               <FaClock className="text-[#f37121] text-lg mt-0.5 flex-shrink-0" />
//               <div>
//                 <h3 className="text-white font-medium text-sm">Business Hours</h3>
//                 <p className="text-gray-400 text-xs mt-1">Sun - Thu: 8:00 AM - 6:00 PM</p>
//               </div>
//             </div>

//             {/* Additional Info */}
//             <div className="mt-6 p-4 bg-gradient-to-r from-[#f37121]/10 to-orange-500/10 rounded-lg border border-[#f37121]/20">
//               <h4 className="text-[#f37121] font-semibold text-sm mb-2">Response Time</h4>
//               <p className="text-gray-400 text-xs">
//                 We typically respond to all inquiries within 24 hours during business days.
//               </p>
//             </div>
//           </motion.div>

//           {/* Contact Form */}
//           <motion.form 
//             initial={{ opacity: 0, y: 12 }} 
//             whileInView={{ opacity: 1, y: 0 }}
//             className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg space-y-4"
//           >
//             <div className="space-y-1">
//               <label className="text-gray-300 text-sm font-medium">Full Name</label>
//               <input 
//                 type="text" 
//                 className="w-full p-3 text-sm rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#f37121] focus:border-transparent transition-all"
//                 placeholder="Your Name" 
//               />
//             </div>

//             <div className="space-y-1">
//               <label className="text-gray-300 text-sm font-medium">Email Address</label>
//               <input 
//                 type="email" 
//                 className="w-full p-3 text-sm rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#f37121] focus:border-transparent transition-all"
//                 placeholder="you@example.com" 
//               />
//             </div>

//             <div className="space-y-1">
//               <label className="text-gray-300 text-sm font-medium">Subject</label>
//               <select className="w-full p-3 text-sm rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#f37121] focus:border-transparent transition-all">
//                 <option value="">Select inquiry type</option>
//                 <option value="partnership">Partnership</option>
//                 <option value="education">Education Services</option>
//                 <option value="childcare">Childcare Services</option>
//                 <option value="logistics">Logistics Services</option>
//                 <option value="career">Career Opportunity</option>
//                 <option value="other">Other</option>
//               </select>
//             </div>

//             <div className="space-y-1">
//               <label className="text-gray-300 text-sm font-medium">Message</label>
//               <textarea 
//                 className="w-full p-3 text-sm rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#f37121] focus:border-transparent transition-all resize-none"
//                 placeholder="Tell us how we can help you..."
//                 rows={4}
//               ></textarea>
//             </div>

//             <button 
//               type="submit" 
//               className="w-full bg-gradient-to-r from-[#f37121] to-orange-500 hover:from-orange-500 hover:to-[#f37121] transition-all text-white font-semibold py-3 px-4 rounded-lg text-sm shadow-lg hover:shadow-xl transform hover:scale-105 duration-300"
//             >
//               Send Message
//             </button>
//           </motion.form>
//         </section>

//         {/* MAP */}
//         <section className="mt-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="bg-white/5 p-4 rounded-xl border border-white/10"
//           >
//             <h3 className="text-white font-semibold text-sm mb-3">Visit Our Headquarters</h3>
//             <div className="aspect-video rounded-lg overflow-hidden border border-white/10">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.123456!2d46.721234!3d24.713567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f12345abcd%3A0x123456abcdef!2sRiyadh%20International%20District!5e0!3m2!1sen!2ssa!4v1695234567890"
//                 className="w-full h-full"
//                 allowFullScreen
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//               ></iframe>
//             </div>
//           </motion.div>
//         </section>

//       </div>
//     </main>
//   )
// }


'use client'

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa'

export default function ContactPage() {
  return (
    <main className="bg-[#0a0f1d] text-white min-h-screen antialiased pt-8">
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-12">

        {/* HERO */}
        <section className="text-center space-y-3">
          <h1 className="text-2xl md:text-3xl font-bold text-[#f37121]">
            Contact Energize Future Group
          </h1>
          <p className="text-gray-400 text-sm max-w-md mx-auto">
            We&apos;d love to hear from you! Reach out for inquiries, partnerships, or any questions.
          </p>
        </section>

        {/* CONTACT INFO & FORM */}
        <section className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
              <FaMapMarkerAlt className="text-[#f37121] text-lg mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="text-white font-medium text-sm">Headquarters</h3>
                <p className="text-gray-400 text-xs mt-1">Riyadh International District, Saudi Arabia</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
              <FaPhoneAlt className="text-[#f37121] text-lg mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="text-white font-medium text-sm">Phone</h3>
                <p className="text-gray-400 text-xs mt-1">+966 54 095 8433</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
              <FaEnvelope className="text-[#f37121] text-lg mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="text-white font-medium text-sm">Email</h3>
                <p className="text-gray-400 text-xs mt-1">info@energizefuture.com</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
              <FaClock className="text-[#f37121] text-lg mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="text-white font-medium text-sm">Business Hours</h3>
                <p className="text-gray-400 text-xs mt-1">Sun - Thu: 8:00 AM - 6:00 PM</p>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-6 p-4 bg-gradient-to-r from-[#f37121]/10 to-orange-500/10 rounded-lg border border-[#f37121]/20">
              <h4 className="text-[#f37121] font-semibold text-sm mb-2">Response Time</h4>
              <p className="text-gray-400 text-xs">
                We typically respond to all inquiries within 24 hours during business days.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg space-y-4">
            <div className="space-y-1">
              <label className="text-gray-300 text-sm font-medium">Full Name</label>
              <input 
                type="text" 
                className="w-full p-3 text-sm rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#f37121] focus:border-transparent transition-all"
                placeholder="Your Name" 
              />
            </div>

            <div className="space-y-1">
              <label className="text-gray-300 text-sm font-medium">Email Address</label>
              <input 
                type="email" 
                className="w-full p-3 text-sm rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#f37121] focus:border-transparent transition-all"
                placeholder="you@example.com" 
              />
            </div>

            <div className="space-y-1">
              <label className="text-gray-300 text-sm font-medium">Subject</label>
              <select className="w-full p-3 text-sm rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#f37121] focus:border-transparent transition-all">
                <option value="">Select inquiry type</option>
                <option value="partnership">Partnership</option>
                <option value="education">Education Services</option>
                <option value="childcare">Childcare Services</option>
                <option value="logistics">Logistics Services</option>
                <option value="career">Career Opportunity</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-gray-300 text-sm font-medium">Message</label>
              <textarea 
                className="w-full p-3 text-sm rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#f37121] focus:border-transparent transition-all resize-none"
                placeholder="Tell us how we can help you..."
                rows={4}
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-[#f37121] to-orange-500 hover:from-orange-500 hover:to-[#f37121] transition-all text-white font-semibold py-3 px-4 rounded-lg text-sm shadow-lg hover:shadow-xl transform hover:scale-105 duration-300"
            >
              Send Message
            </button>
          </form>
        </section>

        {/* MAP */}
        <section className="mt-8">
          <div className="bg-white/5 p-4 rounded-xl border border-white/10">
            <h3 className="text-white font-semibold text-sm mb-3">Visit Our Headquarters</h3>
            <div className="aspect-video rounded-lg overflow-hidden border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.123456!2d46.721234!3d24.713567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f12345abcd%3A0x123456abcdef!2sRiyadh%20International%20District!5e0!3m2!1sen!2ssa!4v1695234567890"
                className="w-full h-full"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>

      </div>
    </main>
  )
}