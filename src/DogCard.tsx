import type { Dog } from './dogs'

const ratingClass: Record<Dog['rating'], string> = {
  'Exceeds Expectations': 'rating-exceeds',
  'Meets Expectations': 'rating-meets',
  'Partially Meets': 'rating-partial',
  'Below Expectations': 'rating-below',
  'Under Review': 'rating-pending',
}

export function DogCard({ dog, onOpen }: { dog: Dog; onOpen: () => void }) {
  const avg = Math.round(
    dog.kpis.reduce((s, k) => s + k.score, 0) / dog.kpis.length,
  )
  return (
    <button className="card" onClick={onOpen}>
      <div
        className="card-photo"
        style={{ backgroundImage: `url(${dog.photo})` }}
      >
        <img src={dog.photo} alt={dog.name} loading="lazy" />
      </div>
      <div className="card-body">
        <div className="card-head">
          <h2>{dog.name}</h2>
          <span className={`rating-pill ${ratingClass[dog.rating]}`}>
            {dog.rating}
          </span>
        </div>
        <div className="card-role">{dog.role}</div>
        <div className="card-breed">{dog.breed} · {dog.age}</div>
        <div className="card-score">
          <div className="score-num">{avg}</div>
          <div className="score-label">Composite KPI</div>
        </div>
        <p className="card-summary">{dog.summary}</p>
        <div className="card-cta">Open full review →</div>
      </div>
    </button>
  )
}
