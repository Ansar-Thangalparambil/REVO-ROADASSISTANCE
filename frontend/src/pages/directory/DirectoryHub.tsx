import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/directory.css';
import DirectoryMap from '../../components/directory/DirectoryMap';
import ListingCard from '../../components/directory/ListingCard';
import ActiveFilterPills from '../../components/directory/ActiveFilterPills';
import { directoryListings } from '../../data/directoryMock';

export default function DirectoryHub() {
  const [searchQuery, setSearchQuery] = useState('');
  const filteredListings = useMemo(() => {
    const normalized = searchQuery.trim().toLowerCase();
    if (!normalized) {
      return directoryListings;
    }

    return directoryListings.filter((listing) => {
      return (
        listing.name.toLowerCase().includes(normalized) ||
        listing.tags.some((tag) => tag.toLowerCase().includes(normalized))
      );
    });
  }, [searchQuery]);

  return (
    <div className="directory-hub">
      <div className="directory-map-container">
        <DirectoryMap listings={filteredListings} />
        <div className="map-overlay-header">
          <div className="search-bar">
            <input 
              type="text" 
              placeholder="Search shops, stations, services" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="category-pills">
            <Link to="/directory" className="pill active">All</Link>
            <Link to="/directory/fuel-stations" className="pill">Fuel & EV</Link>
            <Link to="/directory/body-shops" className="pill">Body Shops</Link>
          </div>
          <ActiveFilterPills filters={[]} onRemove={() => {}} />
        </div>
      </div>

      <div className="directory-list-container">
        <div className="list-header">
          <h2>Nearby Services</h2>
          <span className="results-count">Showing {filteredListings.length} results</span>
        </div>
        
        <div className="listings-scroll-area">
          {filteredListings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </div>
    </div>
  );
}
