'use client'

import { motion } from 'framer-motion'
import { FaBullhorn, FaHashtag, FaVideo, FaChartBar, FaHandshake, FaUsers, FaCheckCircle, FaChartLine, FaAd } from 'react-icons/fa'

export default function MarketingInfluencersPage() {
  const reveal = {
    hidden: { opacity: 0, y: 14 },
    show: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.08 }
    })
  }

  const campaigns = [
    {
      title: 'Brand Awareness Campaign',
      type: 'Paid Ads',
      platform: 'Meta & TikTok',
      status: 'Active',
      description: 'Multi-platform brand awareness campaign reaching 2M+ users with targeted creatives.',
      features: ['Meta Ads', 'TikTok Ads', 'Retargeting', 'A/B Testing']
    },
    {
      title: 'Influencer Partnership Series',
      type: 'Influencer Marketing',
      platform: 'Instagram & YouTube',
      status: 'Delivered',
      description: 'Collaborated with 30+ micro and macro influencers for authentic brand storytelling.',
      features: ['Influencer Sourcing', 'Content Briefs', 'Performance Tracking', 'Reporting']
    },
    {
      title: 'Reels & Short Video Production',
      type: 'Content Creation',
      platform: 'Instagram & TikTok',
      status: 'Active',
      description: 'Creative short-form video content that drives engagement and grows organic reach.',
      features: ['Scripting', 'Production', 'Editing', 'Publishing']
    },
    {
      title: 'Performance Marketing Drive',
      type: 'Paid Performance',
      platform: 'Google & Snapchat',
      status: 'Delivered',
      description: 'ROI-focused performance campaigns with real-time analytics and conversion optimization.',
      features: ['Google Ads', 'Snapchat Ads', 'Conversion Tracking', 'ROI Reports']
    }
  ]

  const services = [
    {
      icon: <FaUsers />,
      title: 'Influencer Sourcing & Management',
      description: 'We identify, vet, and manage the right influencers for your brand — from nano to celebrity level.',
      features: ['Influencer Discovery', 'Contract Negotiation', 'Campaign Briefing', 'Performance Tracking']
    },
    {
      icon: <FaBullhorn />,
      title: 'Campaign Planning & Execution',
      description: 'End-to-end campaign management from strategy and creative to launch and optimization.',
      features: ['Strategy Development', 'Creative Direction', 'Launch Management', 'Optimization']
    },
    {
      icon: <FaVideo />,
      title: 'Content Creation (Reels / TikTok / Video)',
      description: 'High-quality short-form and long-form content tailored for each social media platform.',
      features: ['Reels Production', 'TikTok Videos', 'Brand Stories', 'UGC Content']
    },
    {
      icon: <FaAd />,
      title: 'Paid Ads (Meta / TikTok / Snapchat / Google)',
      description: 'Data-driven paid advertising campaigns that maximize reach, engagement, and conversions.',
      features: ['Meta Ads', 'TikTok Ads', 'Snapchat Ads', 'Google Ads']
    },
    {
      icon: <FaHashtag />,
      title: 'Social Media Strategy & Content Plans',
      description: 'Monthly content strategies and editorial calendars that keep your brand consistently active.',
      features: ['Content Calendars', 'Caption Writing', 'Hashtag Strategy', 'Community Management']
    },
    {
      icon: <FaHandshake />,
      title: 'Brand Partnerships & Negotiations',
      description: 'We connect brands with the right partners and negotiate deals that create mutual value.',
      features: ['Brand Matching', 'Deal Structuring', 'Contract Management', 'Partnership Reports']
    },
    {
      icon: <FaChartBar />,
      title: 'Reporting & Analytics (KPIs, ROI, Reach)',
      description: 'Transparent, real-time reporting on all key metrics — reach, conversions, ROI, and engagement.',
      features: ['KPI Dashboards', 'ROI Analysis', 'Reach & Impressions', 'Monthly Reports']
    }
  ]

  const values = [
    {
      icon: <FaChartLine />,
      title: 'Data-Driven',
      description: 'Every decision is backed by performance data and insights'
    },
    {
      icon: <FaCheckCircle />,
      title: 'Proven Results',
      description: 'Measurable outcomes with transparent reporting'
    },
    {
      icon: <FaUsers />,
      title: 'Influencer Network',
      description: 'Access to 500+ vetted influencers across all niches'
    },
    {
      icon: <FaBullhorn />,
      title: 'Creative Excellence',
      description: 'Bold, engaging content that stops the scroll'
    }
  ]

  return (
    <main className="relative bg-[#0a0f1d] text-white min-h-screen antialiased pt-10">
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-10 space-y-16">

        {/* HERO SECTION */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-4">
            <motion.h1 variants={reveal} className="text-3xl md:text-4xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#f37121] to-orange-400">
              EFG Marketing & Influencers Agency
            </motion.h1>
            <motion.p variants={reveal} className="text-gray-300 text-sm md:text-base">
              We are a Marketing & Influencers Agency that helps brands grow through performance marketing, influencer partnerships, content creation, campaign management, and measurable social media strategies.
            </motion.p>

            <motion.div variants={reveal} className="flex flex-wrap gap-3 mt-4">
              <div className="bg-[#f37121]/20 text-[#f37121] px-3 py-1.5 rounded-full text-sm flex items-center gap-2">
                <FaCheckCircle className="text-xs" />
                Influencer Network
              </div>
              <div className="bg-[#f37121]/20 text-[#f37121] px-3 py-1.5 rounded-full text-sm flex items-center gap-2">
                <FaCheckCircle className="text-xs" />
                Performance Marketing
              </div>
              <div className="bg-[#f37121]/20 text-[#f37121] px-3 py-1.5 rounded-full text-sm flex items-center gap-2">
                <FaCheckCircle className="text-xs" />
                Content Creation
              </div>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="flex justify-center">
            <div className="relative w-full max-w-md rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-gradient-to-br from-[#f37121]/10 to-orange-500/5 p-8 flex flex-col items-center gap-6">
              <div className="grid grid-cols-3 gap-4 w-full">
                {[FaBullhorn, FaHashtag, FaVideo, FaUsers, FaChartBar, FaHandshake].map((Icon, i) => (
                  <div key={i} className="w-14 h-14 rounded-xl bg-[#f37121]/20 flex items-center justify-center text-[#f37121] text-2xl mx-auto">
                    <Icon />
                  </div>
                ))}
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-[#f37121]">Marketing & Influencers</h3>
                <p className="text-gray-300 text-sm mt-1">Grow your brand with measurable impact</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* SERVICES */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#f37121]">Our Marketing & Influencer Services</h2>
            <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
              Comprehensive marketing and influencer solutions tailored to grow your brand and maximize ROI
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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

        {/* CAMPAIGNS */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#f37121]">Featured Campaigns</h2>
            <p className="text-gray-400 mt-2">Our portfolio of successful marketing & influencer campaigns</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {campaigns.map((campaign, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-b from-white/5 to-transparent rounded-xl overflow-hidden border border-white/10 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="relative h-24 bg-gradient-to-br from-[#f37121]/20 to-orange-500/10 flex items-center justify-center">
                  <div className="text-5xl text-[#f37121]/40">
                    {index === 0 ? <FaBullhorn /> : index === 1 ? <FaUsers /> : index === 2 ? <FaVideo /> : <FaChartBar />}
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      campaign.status === 'Active' ? 'bg-green-500/20 text-green-300' :
                      'bg-blue-500/20 text-blue-300'
                    }`}>
                      {campaign.status}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold">{campaign.title}</h3>
                    <span className="text-[#f37121] text-sm font-medium">{campaign.type}</span>
                  </div>

                  <p className="text-gray-300 text-sm mb-3">{campaign.description}</p>

                  <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                    <FaHashtag className="text-[#f37121]" />
                    <span>{campaign.platform}</span>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {campaign.features.map((feature, i) => (
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
            <h2 className="text-2xl md:text-3xl font-bold text-[#f37121]">Why Choose EFG Marketing & Influencers</h2>
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
              { number: '50+', label: 'Campaigns Delivered' },
              { number: '500+', label: 'Influencers Network' },
              { number: '5M+', label: 'Total Reach' },
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
          <h2 className="text-2xl md:text-3xl font-bold text-[#f37121] mb-4">Launch Your Campaign With Us</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            Ready to grow your brand through influencer marketing and performance campaigns? Contact our Marketing & Influencers team for a free strategy consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-gradient-to-r from-[#f37121] to-orange-500 text-black font-bold rounded-full hover:scale-105 transition-transform">
              Get Free Strategy Session
            </button>
            <button className="px-6 py-3 bg-white/5 text-white font-medium rounded-full border border-white/10 hover:bg-white/10 transition-colors">
              View Our Campaigns
            </button>
          </div>
        </section>

      </div>
    </main>
  )
}
