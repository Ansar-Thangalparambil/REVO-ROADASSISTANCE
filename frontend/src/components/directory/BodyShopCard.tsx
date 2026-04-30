import { BodyShopListing } from '../../types/directory';

interface BodyShopCardProps {
  listing: BodyShopListing;
}

export default function BodyShopCard({ listing }: BodyShopCardProps) {
  return (
    <article className="listing-card">
      <header className="listing-header">
        <div>
          <h3>{listing.name}</h3>
          <p className="listing-meta">
            {listing.distanceKm.toFixed(1)} km · {listing.rating} ({listing.reviewCount})
          </p>
        </div>
        {listing.acceptsInsurance && <span className="badge badge-warning">INSURANCE</span>}
      </header>

      <div className="tag-row">
        {listing.serviceTags.slice(0, 4).map((tag) => (
          <span key={tag} className="chip">
            {tag.split('_').join(' ')}
          </span>
        ))}
      </div>

      <div className="tag-row">
        {listing.brandsServiced.map((brand) => (
          <span key={brand} className="chip chip-subtle">
            {brand}
          </span>
        ))}
      </div>

      <footer className="action-row">
        <button className="btn-secondary">View Portfolio</button>
        <button className="btn-sos">Get Quote</button>
      </footer>
    </article>
  );
}
