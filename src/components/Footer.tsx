// 'use client'

// export default function Footer() {
//   return (
//     <footer className="bg-[#0a0f1d] text-gray-400 border-t border-white/10">
//       <div className="max-w-6xl mx-auto px-4 py-8">
        
//         {/* Main Footer Content */}
//         <div className="grid md:grid-cols-4 gap-6 mb-6">
          
//           {/* Brand Section */}
//           <div className="space-y-3">
//             <div className="flex items-center gap-2">
//               <div className="w-8 h-8 bg-gradient-to-r from-[#f37121] to-orange-500 rounded flex items-center justify-center">
//                 <span className="text-white font-bold text-sm">EFG</span>
//               </div>
//               <div>
//                 <h3 className="text-white font-bold text-base">Energize Future</h3>
//                 <p className="text-[#f37121] text-xs">Group</p>
//               </div>
//             </div>
//             <p className="text-xs text-gray-400 leading-relaxed">
//               Building a better future through integrated education, childcare, and logistics solutions aligned with Saudi Vision 2030.
//             </p>
//             <div className="flex gap-2">
//               <a href="https://www.linkedin.com/company/energizelco" className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#f37121] transition-all duration-300 flex items-center justify-center group">
//                 <span className="text-gray-400 group-hover:text-white transition-colors text-xs">in</span>
//               </a>
//               <a href="https://x.com/energizelco" className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#f37121] transition-all duration-300 flex items-center justify-center group">
//                 <span className="text-gray-400 group-hover:text-white transition-colors text-xs">𝕏</span>
//               </a>
//               <a href="https://www.instagram.com/energizelco/" className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#f37121] transition-all duration-300 flex items-center justify-center group">
//                 <span className="text-gray-400 group-hover:text-white transition-colors text-xs">📷</span>
//               </a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="text-white font-semibold mb-3 text-sm border-l-2 border-[#f37121] pl-2">Quick Links</h4>
//             <ul className="space-y-2">
//               {['About Us', 'Our Services', 'Careers', 'News & Media'].map((item) => (
//                 <li key={item}>
//                   <a href="#" className="text-gray-400 hover:text-[#f37121] transition-colors duration-300 flex items-center gap-1 group text-xs">
//                     <div className="w-1 h-1 bg-[#f37121] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
//                     {item}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Our Divisions */}
//           <div>
//             <h4 className="text-white font-semibold mb-3 text-sm border-l-2 border-[#f37121] pl-2">Our Divisions</h4>
//             <ul className="space-y-2">
//               {[
//                 'EFG International Schools',
//                 'EFG Childcare Centers', 
//                 'Heavy Transport & Logistics',
//                 'Strategic Partnerships'
//               ].map((item) => (
//                 <li key={item}>
//                   <a href="#" className="text-gray-400 hover:text-[#f37121] transition-colors duration-300 flex items-center gap-1 group text-xs">
//                     <div className="w-1 h-1 bg-[#f37121] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
//                     {item}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div className="space-y-3">
//             <h4 className="text-white font-semibold mb-3 text-sm border-l-2 border-[#f37121] pl-2">Get In Touch</h4>
//             <div className="space-y-2">
//               <div className="flex items-start gap-2 group cursor-pointer">
//                 <div className="w-6 h-6 bg-[#f37121]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
//                   <span className="text-[#f37121] text-xs">📧</span>
//                 </div>
//                 <div>
//                   <p className="text-gray-400 text-xs group-hover:text-[#f37121] transition-colors">
//                     info@energizefuture.com
//                   </p>
//                   <p className="text-xs text-gray-500">Email us anytime</p>
//                 </div>
//               </div>
              
//               <div className="flex items-start gap-2 group cursor-pointer">
//                 <div className="w-6 h-6 bg-[#f37121]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
//                   <span className="text-[#f37121] text-xs">📞</span>
//                 </div>
//                 <div>
//                   <p className="text-gray-400 text-xs group-hover:text-[#f37121] transition-colors">
//                     +966 54 095 8433
//                   </p>
//                   <p className="text-xs text-gray-500">Call us directly</p>
//                 </div>
//               </div>
              
//               <div className="flex items-start gap-2">
//                 <div className="w-6 h-6 bg-[#f37121]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
//                   <span className="text-[#f37121] text-xs">📍</span>
//                 </div>
//                 <div>
//                   <p className="text-gray-400 text-xs">Jeddah, Saudi Arabia</p>
//                   <p className="text-xs text-gray-500">Headquarters</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//         </div>

//         {/* Vision 2030 Banner */}
//         <div className="bg-gradient-to-r from-[#f37121]/10 to-orange-500/10 border border-[#f37121]/20 rounded-lg p-4 mb-6">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-3">
//               <div className="w-10 h-10 bg-[#f37121] rounded-full flex items-center justify-center">
//                 <span className="text-white font-bold text-sm">2030</span>
//               </div>
//               <div>
//                 <h4 className="text-white font-bold text-sm">Saudi Vision 2030 Partner</h4>
//                 <p className="text-gray-400 text-xs">Committed to building a vibrant society and thriving economy</p>
//               </div>
//             </div>
//             <div className="text-right">
//               <p className="text-[#f37121] font-semibold text-sm">Building Futures</p>
//               <p className="text-gray-400 text-xs">Since 2024</p>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-white/10 pt-4">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-3">
//             <div className="text-xs text-gray-400">
//               © 2025 Energize Future Group. All rights reserved.
//             </div>
//             <div className="flex items-center gap-4 text-xs text-gray-400">
//               <span className="flex items-center gap-1">
//                 <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
//                 Currently Hiring
//               </span>
//               {/* <span>•</span>
//               <span>ISO 9001:2015 Certified</span> */}
//             </div>
//           </div>
//         </div>

//       </div>
//     </footer>
//   )
// }

'use client'

import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  const openInNewTab = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/energizelco',
      icon: <FaLinkedin className="text-xs" />
    },
    {
      name: 'Twitter', 
      url: 'https://x.com/energizelco',
      icon: <FaTwitter className="text-xs" />
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/energizelco/',
      icon: <FaInstagram className="text-xs" />
    }
  ]

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Services', href: '/services' },
    { name: 'Careers', href: '/careers' },
    { name: 'News & Media', href: '/news' }
  ]

  const divisions = [
    { name: 'EFG International Schools', href: '/divisions/international-schools' },
    { name: 'EFG Childcare Centers', href: '/divisions/childcare' },
    { name: 'Heavy Transport & Logistics', href: '/divisions/transport-logistics' },
    { name: 'Real Estate & Construction', href: '/divisions/real-estate' }
  ]

  const contactInfo = [
    {
      icon: '📧',
      text: 'info@energizefuture.com',
      subtext: 'Email us anytime',
      type: 'email'
    },
    {
      icon: '📞', 
      text: '+966 54 095 8433',
      subtext: 'Call us directly',
      type: 'phone'
    },
    {
      icon: '📍',
      text: 'Jeddah, Saudi Arabia',
      subtext: 'Headquarters', 
      type: 'location'
    }
  ]

  return (
    <footer className="bg-[#0a0f1d] text-gray-400 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-6">
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-6 mb-6">
          
          {/* Brand Section */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-[#f37121] to-orange-500 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">EFG</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-sm">Energize Future</h3>
                <p className="text-[#f37121] text-xs">Group</p>
              </div>
            </div>
            
            <p className="text-xs text-gray-400 leading-relaxed">
              Building a better future through integrated education, childcare, logistics, and real estate solutions aligned with Saudi Vision 2030.
            </p>
            
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <button
                  key={social.name}
                  onClick={() => openInNewTab(social.url)}
                  className="w-7 h-7 rounded-full bg-white/5 hover:bg-[#f37121] transition-all duration-300 flex items-center justify-center group cursor-pointer"
                  aria-label={`Visit our ${social.name}`}
                >
                  <span className="text-gray-400 group-hover:text-white transition-colors">
                    {social.icon}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-xs border-l-2 border-[#f37121] pl-2">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-[#f37121] transition-colors duration-300 flex items-center gap-1 group text-xs"
                  >
                    <div className="w-1 h-1 bg-[#f37121] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Divisions */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-xs border-l-2 border-[#f37121] pl-2">
              Our Divisions
            </h4>
            <ul className="space-y-2">
              {divisions.map((division) => (
                <li key={division.name}>
                  <a 
                    href={division.href}
                    className="text-gray-400 hover:text-[#f37121] transition-colors duration-300 flex items-center gap-1 group text-xs"
                  >
                    <div className="w-1 h-1 bg-[#f37121] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    {division.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold mb-3 text-xs border-l-2 border-[#f37121] pl-2">
              Get In Touch
            </h4>
            <div className="space-y-2">
              {contactInfo.map((contact, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-2 group cursor-pointer"
                >
                  <div className="w-5 h-5 bg-[#f37121]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[#f37121] text-xs">{contact.icon}</span>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs group-hover:text-[#f37121] transition-colors">
                      {contact.text}
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">{contact.subtext}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Vision 2030 Banner */}
        <div className="bg-gradient-to-r from-[#f37121]/10 to-orange-500/10 border border-[#f37121]/20 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#f37121] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">2030</span>
              </div>
              <div>
                <h4 className="text-white font-bold text-xs">Saudi Vision 2030 Partner</h4>
                <p className="text-gray-400 text-xs">Committed to building a vibrant society and thriving economy</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-[#f37121] font-semibold text-xs">Building Futures</p>
              <p className="text-gray-400 text-xs">Since 2024</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <div className="text-xs text-gray-400">
              © 2025 Energize Future Group. All rights reserved.
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                Currently Hiring
              </span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}