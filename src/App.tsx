import { useState, useEffect } from 'react'
import { dogs, type Dog } from './dogs'
import { DogCard } from './DogCard'
import { DogModal } from './DogModal'

export default function App() {
  const [selected, setSelected] = useState<Dog | null>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : ''
  }, [selected])

  return (
    <div className="app">
      <header className="hero">
        <div className="hero-tag">CONFIDENTIAL · INTERNAL USE ONLY</div>
        <h1>Q2 Canine Performance Review</h1>
        <p className="hero-sub">
          Six-direct-report cohort · Reporting period: 7 days of unsupervised
          stewardship · Reviewing manager: <em>Justin Young (Acting)</em>
        </p>
        <div className="hero-stats">
          <Stat label="Direct reports" value="6" />
          <Stat label="Incidents logged" value="20" />
          <Stat label="Shoes destroyed" value="2" />
          <Stat label="Tables (in defence)" value="1" />
        </div>
      </header>

      <main className="grid">
        {dogs.map((d) => (
          <DogCard key={d.name} dog={d} onOpen={() => setSelected(d)} />
        ))}
      </main>

      <section className="acknowledgement">
        <div className="ack-eyebrow">Acknowledgement · Special Recognition</div>
        <h3>Amjad</h3>
        <p>
          The reviewing manager wishes to formally recognise <strong>Amjad</strong>,
          who stepped in to cover walks and feeding while the regular dogsitter
          was away for Eid. Cohort coverage would not have been possible without
          him, and at no point during the period did six dogs go un-walked or
          un-fed, which is the highest praise the role allows.
        </p>
        <p className="ack-footnote">
          A formal apology is also owed: in the course of duty, one (1) of
          Amjad's shoes was claimed and destroyed by India. The reviewing
          manager regrets the incident and considers replacement an action
          item on this report.
        </p>
        <div className="ack-signoff">J. Young, Acting Line Manager</div>
      </section>

      <footer className="footer">
        <p>
          Prepared for the returning principal stakeholder. Distribution
          restricted to immediate household.
        </p>
      </footer>

      {selected && <DogModal dog={selected} onClose={() => setSelected(null)} />}
    </div>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="stat">
      <div className="stat-value">{value}</div>
      <div className="stat-label">{label}</div>
    </div>
  )
}
