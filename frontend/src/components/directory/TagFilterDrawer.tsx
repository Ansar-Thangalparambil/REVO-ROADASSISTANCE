interface TagFilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  groups: Record<string, string[]>;
  selected: string[];
  onToggleTag: (tag: string) => void;
  matchMode: 'any' | 'all';
  onMatchModeChange: (mode: 'any' | 'all') => void;
  onClear: () => void;
}

export default function TagFilterDrawer({
  isOpen,
  onClose,
  groups,
  selected,
  onToggleTag,
  matchMode,
  onMatchModeChange,
  onClear,
}: TagFilterDrawerProps) {
  return (
    <>
      <div className={`drawer-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}></div>
      <div className={`filter-drawer ${isOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <h3>Filter Directory</h3>
          <button className="close-btn" onClick={onClose}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
        
        <div className="drawer-content">
          <div className="filter-group">
            <h4>Match Strategy</h4>
            <div className="toggle-switch-wrapper">
              <label className="toggle-label">
                <input
                  type="radio"
                  name="match"
                  checked={matchMode === 'any'}
                  onChange={() => onMatchModeChange('any')}
                />
                <span>Match Any</span>
              </label>
              <label className="toggle-label">
                <input
                  type="radio"
                  name="match"
                  checked={matchMode === 'all'}
                  onChange={() => onMatchModeChange('all')}
                />
                <span>Match All</span>
              </label>
            </div>
          </div>

          <div className="filter-accordion">
            {Object.entries(groups).map(([group, tags]) => (
              <details key={group} open>
                <summary>{group}</summary>
                <div className="checkbox-grid">
                  {tags.map((tag) => (
                    <label key={tag}>
                      <input
                        type="checkbox"
                        checked={selected.includes(tag)}
                        onChange={() => onToggleTag(tag)}
                      />
                      {tag.split('_').join(' ')}
                    </label>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </div>

        <div className="drawer-footer">
          <button
            className="btn-text"
            onClick={() => {
              onClear();
            }}
          >
            Clear All
          </button>
          <button className="btn-primary" onClick={onClose}>Apply Filters</button>
        </div>
      </div>
    </>
  );
}
