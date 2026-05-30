import { useEffect, useState } from 'react'
import type { Dog, KPI } from './dogs'

export function DogModal({ dog, onClose }: { dog: Dog; onClose: () => void }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          ×
        </button>

        <div className="modal-header">
          <div
            className="modal-photo"
            style={{ backgroundImage: `url(${dog.photo})` }}
          >
            <img src={dog.photo} alt={dog.name} />
          </div>
          <div className="modal-headline">
            <div className="modal-eyebrow">Performance Review · Q2</div>
            <h2>{dog.name}</h2>
            <div className="modal-meta">
              <span><strong>Role:</strong> {dog.role}</span>
              <span><strong>Breed:</strong> {dog.breed}</span>
              <span><strong>Age:</strong> {dog.age}</span>
              <span><strong>Overall rating:</strong> {dog.rating}</span>
            </div>
            <p className="modal-summary">{dog.summary}</p>
          </div>
        </div>

        <Section title="Key Performance Indicators">
          <div className="kpis">
            {dog.kpis.map((k) => (
              <KPIBar key={k.label} kpi={k} />
            ))}
          </div>
        </Section>

        {dog.commendations.length > 0 && (
          <Section title="Commendations">
            <ul className="bullet-list bullet-good">
              {dog.commendations.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </Section>
        )}

        {dog.incidents.length > 0 && (
          <Section title="Incidents on file">
            <ul className="bullet-list bullet-bad">
              {dog.incidents.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </Section>
        )}

        {dog.developmentAreas.length > 0 && (
          <Section title="Areas for Development">
            <ul className="bullet-list bullet-neutral">
              {dog.developmentAreas.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </Section>
        )}

        <Section title="Reviewing Manager's Note">
          <blockquote className="manager-note">{dog.managerNote}</blockquote>
          <div className="sign-off">
            <span>J. Young, Acting Line Manager</span>
          </div>
        </Section>
      </div>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="modal-section">
      <h3>{title}</h3>
      {children}
    </section>
  )
}

function KPIBar({ kpi }: { kpi: KPI }) {
  const [width, setWidth] = useState(0)
  useEffect(() => {
    const t = setTimeout(() => setWidth(kpi.score), 50)
    return () => clearTimeout(t)
  }, [kpi.score])

  const tone =
    kpi.score >= 75 ? 'bar-good' : kpi.score >= 45 ? 'bar-mid' : 'bar-bad'

  return (
    <div className="kpi">
      <div className="kpi-row">
        <span className="kpi-label">{kpi.label}</span>
        <span className="kpi-score">{kpi.score}</span>
      </div>
      <div className="kpi-track">
        <div
          className={`kpi-fill ${tone}`}
          style={{ width: `${width}%` }}
        />
      </div>
      {kpi.commentary && <div className="kpi-commentary">{kpi.commentary}</div>}
    </div>
  )
}
