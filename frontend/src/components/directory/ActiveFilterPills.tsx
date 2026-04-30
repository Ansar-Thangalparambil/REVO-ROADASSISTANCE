interface ActiveFilterPillsProps {
  filters: string[];
  onRemove: (filter: string) => void;
}

export default function ActiveFilterPills({ filters, onRemove }: ActiveFilterPillsProps) {
  if (!filters.length) {
    return null;
  }

  return (
    <div className="active-filter-row">
      {filters.map((filter) => (
        <button key={filter} className="active-filter-pill" onClick={() => onRemove(filter)}>
          {filter.split('_').join(' ')} ×
        </button>
      ))}
    </div>
  );
}
