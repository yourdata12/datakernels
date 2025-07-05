'use client'

import React, { useEffect, PropsWithChildren } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function AOSProvider({ children }: PropsWithChildren<{}>) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    })
  }, []) // ← Dependency array fixed here

  return <>{children}</>
}
