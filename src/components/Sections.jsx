import React from 'react'
import '../styles/neopop.css'
import { Shield, GitBranch } from 'lucide-react'

export default function Sections(){
  return (
    <div className="sections">
      <div className="card">
        <h4 style={{marginTop:0}}>Diagnostic Scans</h4>
        <p style={{color:'var(--muted)'}}>Continuous scans for identity, credit behavior and risk vectors with human-grade explainability.</p>
      </div>

      <div className="card">
        <h4 style={{marginTop:0}}>Security Pipelines</h4>
        <p style={{color:'var(--muted)'}}>Multi-stage pipelines with anomaly detection, crypto-hardened keys, and proactive remediation.</p>
      </div>

      <div className="card">
        <h4 style={{marginTop:0}}>Audit Trails</h4>
        <p style={{color:'var(--muted)'}}>Immutable audit logs and human-review workflows to ensure compliance and trust.</p>
      </div>
    </div>
  )
}
