import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import ActiveFilterPills from '../../components/directory/ActiveFilterPills';
import BodyShopCard from '../../components/directory/BodyShopCard';
import DirectoryMap from '../../components/directory/DirectoryMap';
import TagFilterDrawer from '../../components/directory/TagFilterDrawer';
import { bodyShopFilterGroups, bodyShops } from '../../data/directoryMock';
import '../../styles/directory.css';

export default function BodyShopsPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [matchMode, setMatchMode] = useState<'any' | 'all'>('any');

  const filtered = useMemo(() => {
    if (!selectedTags.length) {
      return bodyShops;
    }

    return bodyShops.filter((shop) => {
      if (matchMode === 'all') {
        return selectedTags.every((tag) => shop.serviceTags.includes(tag));
      }
      return selectedTags.some((tag) => shop.serviceTags.includes(tag));
    });
  }, [selectedTags, matchMode]);

  const toggleTag = (tag: string) => {
    setSelectedTags((current) =>
      current.includes(tag) ? current.filter((value) => value !== tag) : [...current, tag],
    );
  };

  const removeTag = (tag: string) => {
    setSelectedTags((current) => current.filter((value) => value !== tag));
  };

  return (
    <div className="directory-hub">
      <div className="directory-map-container">
        <DirectoryMap listings={filtered} />
        <div className="map-overlay-header">
          <div className="search-bar">
            <button className="btn-secondary" onClick={() => setIsDrawerOpen(true)}>
              Filter
            </button>
          </div>
          <div className="category-pills">
            <Link to="/directory" className="pill">All</Link>
            <Link to="/directory/fuel-stations" className="pill">Fuel & EV</Link>
            <Link to="/directory/body-shops" className="pill active">Body Shops</Link>
          </div>
          <ActiveFilterPills filters={selectedTags} onRemove={removeTag} />
        </div>
      </div>

      <div className="directory-list-container">
        <div className="list-header">
          <h2>Body Shop Finder</h2>
          <span className="results-count">{filtered.length} shops matched</span>
        </div>
        <div className="listings-scroll-area">
          {filtered.map((listing) => (
            <BodyShopCard key={listing.id} listing={listing} />
          ))}
        </div>
      </div>

      <TagFilterDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        groups={bodyShopFilterGroups}
        selected={selectedTags}
        onToggleTag={toggleTag}
        matchMode={matchMode}
        onMatchModeChange={setMatchMode}
        onClear={() => setSelectedTags([])}
      />
    </div>
  );
}
