import { FuelStationListing } from '../../types/directory';

interface FuelStationCardProps {
  listing: FuelStationListing;
}

export default function FuelStationCard({ listing }: FuelStationCardProps) {
  return (
    <article className="listing-card">
      <header className="listing-header">
        <div>
          <h3>{listing.name}</h3>
          <p className="listing-meta">
            {listing.distanceKm.toFixed(1)} km · {listing.rating} ({listing.reviewCount})
          </p>
        </div>
        <span className={`badge ${listing.is24Hours ? 'badge-open' : 'badge-closed'}`}>
          {listing.is24Hours ? '24 HOURS' : 'LIMITED'}
        </span>
      </header>

      <div className="tag-row">
        {listing.fuelTypes.map((type) => (
          <span key={type} className="chip">
            {type}
          </span>
        ))}
      </div>

      <div className="tag-row">
        {listing.amenities.slice(0, 3).map((amenity) => (
          <span key={amenity} className="chip chip-subtle">
            {amenity}
          </span>
        ))}
      </div>

      <footer className="action-row">
        <button className="btn-secondary">View Station</button>
        <button className="btn-secondary">Directions</button>
      </footer>
    </article>
  );
}
