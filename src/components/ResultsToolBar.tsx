const ResultsToolbar = () => {
  return (
    <div className="results-toolbar">
      {/* Results Count */}
      <div className="results-count">
        <strong>1–24</strong>

        <span>of 17 designs matching</span>

        <strong>"Aridia Diamondbacks"</strong>
      </div>

      {/* Right Controls */}
      <div className="results-controls">
        {/* Sort */}
        <div className="sort-control">
          <span className="sort-label">Sort by:</span>

          <select className="sort-select" defaultValue="relevance">
            <option value="relevance">Relevance</option>

            <option value="newest">Newest</option>

            <option value="oldest">Oldest</option>

            <option value="name-asc">Name A–Z</option>

            <option value="name-desc">Name Z–A</option>
          </select>
        </div>

        {/* View Buttons */}
        <div className="view-controls">
          <button className="view-button active" aria-label="Grid view">
            ▦
          </button>

          <button className="view-button" aria-label="List view">
            ☰
          </button>

          <button className="view-button" aria-label="Compact grid view">
            ▦
          </button>
        </div>

        {/* Export */}
        <button className="export-button" disabled>
          <span className="export-icon">↓</span>
          Export
        </button>
      </div>
    </div>
  );
};

export default ResultsToolbar;
