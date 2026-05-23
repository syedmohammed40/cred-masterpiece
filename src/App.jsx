import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ScoreSimulator from './components/ScoreSimulator'
import Sections from './components/Sections'
import './styles/neopop.css'

export default function App(){
  return (
    <div className="app-container">
      <Navbar />

      <main>
        <Hero>
          <div style={{marginTop:22}}>
            <ScoreSimulator />
          </div>
        </Hero>

        <section style={{padding:'0 28px 40px'}}>
          <Sections />
        </section>
      </main>
    </div>
  )
}
