'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function RealEstateRedirect() {
  const router = useRouter()
  useEffect(() => {
    router.replace('/divisions/marketing-influencers')
  }, [router])
  return null
}
