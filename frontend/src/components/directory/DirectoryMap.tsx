import { DirectoryListing } from '../../types/directory';

interface DirectoryMapProps {
  listings: DirectoryListing[];
}

const getPinClass = (category: DirectoryListing['category']) => {
  if (category === 'BODY_SHOP') return 'pin-body';
  if (category === 'FUEL_STATION') return 'pin-fuel';
  if (category === 'TYRE_SHOP' || category === 'BATTERY_SHOP') return 'pin-warning';
  if (category === 'MULTI_SERVICE') return 'pin-neutral';
  return 'pin-other';
};

export default function DirectoryMap({ listings }: DirectoryMapProps) {
  return (
    <div className="directory-map-surface">
      <div className="map-grid" />
      {listings.map((listing, i) => {
        const top = 30 + (i * 20) + '%';
        const left = 40 + (i * 15 - 10) + '%';

        return (
          <button key={listing.id} className={`map-pin ${getPinClass(listing.category)}`} style={{ top, left }}>
            <span className="pin-dot" />
            <div className="pin-label">
              <strong>{listing.name}</strong>
              <span>{listing.distanceKm.toFixed(1)} km</span>
            </div>
          </button>
        );
      })}
    </div>
  );
}
