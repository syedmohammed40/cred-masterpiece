import React, {useState, useEffect} from 'react'
import '../styles/neopop.css'
import { motion, AnimatePresence } from 'framer-motion'

function badgeFor(score){
  if(score>=800) return {text:'CRED ULTRA ELITE',color:'#ffd700'}
  if(score>=700) return {text:'PREMIUM CLUB MEMBER',color:'#7c3aed'}
  if(score>=580) return {text:'CRED MEMBER',color:'#06b6d4'}
  return {text:'FOUNDATIONAL',color:'#94a3b8'}
}

export default function ScoreSimulator(){
  const [score,setScore] = useState(720)
  const b = badgeFor(score)

  return (
    <div style={{display:'flex',gap:20,alignItems:'center'}}>
      <div className="score-card">
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <div>
            <div style={{fontSize:12,color:'var(--muted)'}}>Live simulator</div>
            <div className="score-value">{score}</div>
            <div className="score-badge" style={{background:b.color+'22',color:b.color}}>{b.text}</div>
          </div>
        </div>

        <div className="progress" aria-hidden>
          <i style={{width:((score-300)/600*100)+'%'}}></i>
        </div>

        <div style={{marginTop:14}}>
          <input
            aria-label="credit score"
            type="range"
            min={300}
            max={900}
            value={score}
            onChange={e=>setScore(Number(e.target.value))}
            style={{width:'100%'}}
          />
        </div>

        <div style={{display:'flex',justifyContent:'space-between',marginTop:12}}>
          <small style={{color:'var(--muted)'}}>300</small>
          <small style={{color:'var(--muted)'}}>900</small>
        </div>
      </div>

      <div style={{maxWidth:520}}>
        <AnimatePresence mode="wait">
          <motion.div key={b.text} initial={{opacity:0,y:6}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-6}} transition={{duration:0.28}}>
            <h3 style={{margin:0,fontSize:20}}>Benefits — {b.text}</h3>
            <p style={{color:'var(--muted)',marginTop:8}}>Simulated perks and glowing accents update live. Use the slider to see upgrades, animated highlights, and dynamic badge colors.</p>
            <div style={{display:'flex',gap:10,marginTop:12}}>
              <button className="neopop-btn glow" style={{boxShadow:`0 10px 30px ${b.color+'33'}, inset 0 2px 6px rgba(255,255,255,0.03)`}}>Instant Offer</button>
              <button className="neopop-btn">Request Invite</button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
