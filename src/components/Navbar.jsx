import React from 'react'
import '../styles/neopop.css'
import { Star, Shield } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Navbar(){
  return (
    <header className="nav-fixed">
      <div className="brand">
        <div className="logo">C</div>
        <div>
          <div style={{fontSize:16}}>CRED</div>
          <div style={{fontSize:11,color:'var(--muted)'}}>Premium Experience</div>
        </div>
      </div>

      <nav className="nav-actions">
        <motion.button className="neopop-btn" whileTap={{scale:0.98}}>
          <Star size={16}/>
          Explore
        </motion.button>
        <motion.button className="neopop-btn glow" whileTap={{scale:0.98}}>
          <Shield size={14}/>
          Secure Login
        </motion.button>
      </nav>
    </header>
  )
}
