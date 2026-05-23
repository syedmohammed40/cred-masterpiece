import React from 'react'
import '../styles/neopop.css'
import { motion } from 'framer-motion'

export default function Hero({children}){
  return (
    <section className="hero">
      <div className="hero-left">
        <h1 className="title">Experience credit luxury — reimagined.</h1>
        <p className="subtitle">A premium CRED landing clone with physical-style controls, high-fidelity motion and real-time score simulation.</p>

        <div style={{display:'flex',gap:12,alignItems:'center'}}>
          <motion.button className="neopop-btn glow" whileHover={{y:-4}} whileTap={{y:2}}>Get Invite</motion.button>
          <motion.button className="neopop-btn" whileHover={{y:-4}} whileTap={{y:2}}>Learn More</motion.button>
        </div>

        {children}
      </div>

      <div style={{display:'flex',flexDirection:'column',gap:12,alignItems:'flex-end'}}>
        <div className="score-card">
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <div>
              <div style={{fontSize:12,color:'var(--muted)'}}>Your credit score</div>
              <div className="score-value">—</div>
            </div>
            <div style={{fontSize:12,color:'var(--muted)'}}>CRED Diagnostics</div>
          </div>
          <div className="progress"><i style={{width:'30%'}} /></div>
        </div>
      </div>
    </section>
  )
}
