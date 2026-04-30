import { DirectoryListing } from '../../types/directory';

interface ListingCardProps {
  listing: DirectoryListing;
}

export default function ListingCard({ listing }: ListingCardProps) {
  return (
    <article className="listing-card">
      <header className="listing-header">
        <div>
          <h3>{listing.name}</h3>
          <p className="listing-meta">
            {listing.distanceKm.toFixed(1)} km · {listing.rating} ({listing.reviewCount})
          </p>
        </div>
        <div className="listing-badges">
          {listing.verified && <span className="badge badge-verified">VERIFIED</span>}
          <span className={`badge ${listing.isOpen ? 'badge-open' : 'badge-closed'}`}>
            {listing.isOpen ? 'OPEN' : 'CLOSED'}
          </span>
        </div>
      </header>

      <div className="tag-row">
        {listing.tags.slice(0, 5).map((tag) => (
          <span key={tag} className="chip">
            {tag}
          </span>
        ))}
      </div>

      <footer className="action-row">
        <button className="btn-secondary">View</button>
        <button className="btn-secondary">Directions</button>
      </footer>
    </article>
  );
}
