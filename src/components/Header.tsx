'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight
      if (window.scrollY > heroHeight - 80) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About us' },
    { href: '/services', label: 'Services' },
    // { href: '/clients', label: 'Clients' },
    { href: '/contact', label: 'Contact' },
    { href: '/career', label: 'Career' },
  ]

  const socialLinks = [
    { href: 'https://www.linkedin.com/company/energizelco', icon: <FaLinkedin />, color: 'text-[#0077b5]' },
    { href: 'https://x.com/energizelco', icon: <FaXTwitter />, color: 'text-gray-500' },
    { href: 'https://www.instagram.com/energizelco/', icon: <FaInstagram />, color: 'text-[#E4405F]' },
    { href: 'https://www.youtube.com/@energizelco', icon: <FaYoutube />, color: 'text-[#FF0000]' },
    { href: 'https://www.facebook.com/energizelco', icon: <FaFacebook />, color: 'text-[#1877F2]' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#0a0f1d] shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-evenly backdrop-blur-sm">
        <div className="font-bold text-white">EFG</div>

        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-6 text-sm font-bold text-white">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                prefetch
                className={`transition ${
                  pathname === link.href
                    ? 'text-[#f37121]'
                    : 'hover:text-[#f37121] text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden md:flex items-center gap-3 shrink-0">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${social.color} hover:opacity-80 transition-opacity duration-300 text-lg`}
            >
              {social.icon}
            </a>
          ))}
        </div>

        <div className="md:hidden">
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="p-2 rounded-md border"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="#f4f4f4ff"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-t bg-white shadow-md"
          >
            <div className="px-6 py-4 flex flex-col gap-3">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition ${
                    pathname === link.href
                      ? 'text-[#f37121]'
                      : 'hover:text-[#f37121] text-gray-800'
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex gap-4 mt-4 justify-center">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.color} hover:opacity-80 transition-opacity duration-300 text-lg`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
