import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import DirectoryMap from '../../components/directory/DirectoryMap';
import FuelStationCard from '../../components/directory/FuelStationCard';
import '../../styles/directory.css';
import { fuelStations } from '../../data/directoryMock';

export default function FuelStationsPage() {
  const [availableNowOnly, setAvailableNowOnly] = useState(false);

  const filtered = useMemo(() => {
    if (!availableNowOnly) {
      return fuelStations;
    }

    return fuelStations.filter((station) =>
      Object.values(station.availability).some(Boolean),
    );
  }, [availableNowOnly]);

  return (
    <div className="directory-hub">
      <div className="directory-map-container">
        <DirectoryMap listings={filtered} />
        <div className="map-overlay-header">
          <div className="search-bar">
            <label className="toggle-row">
              <input
                type="checkbox"
                checked={availableNowOnly}
                onChange={(event) => setAvailableNowOnly(event.target.checked)}
              />
              Available now only
            </label>
          </div>
          <div className="category-pills">
            <Link to="/directory" className="pill">All</Link>
            <Link to="/directory/fuel-stations" className="pill active">Fuel & EV</Link>
            <Link to="/directory/body-shops" className="pill">Body Shops</Link>
          </div>
        </div>
      </div>

      <div className="directory-list-container">
        <div className="list-header">
          <h2>Fuel & Water Stations</h2>
          <span className="results-count">{filtered.length} stations</span>
        </div>
        <div className="listings-scroll-area">
          {filtered.map((listing) => (
            <FuelStationCard key={listing.id} listing={listing} />
          ))}
        </div>
      </div>
    </div>
  );
}
