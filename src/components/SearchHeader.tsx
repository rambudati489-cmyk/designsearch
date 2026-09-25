import React, { useState } from "react";

const SearchHeader: React.FC = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    if (!searchText.trim()) {
      return;
    }

    console.log("Search:", searchText);
  };

  return (
    <section className="search-header">
      {/* =========================
                TOP SEARCH ROW
            ========================== */}

      <div className="search-top-row">
        <div className="main-search-box">
          {/* Search Icon */}
          <span className="main-search-icon">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <circle
                cx="11"
                cy="11"
                r="7"
                stroke="currentColor"
                strokeWidth="1.8"
              />

              <path
                d="M16.5 16.5L21 21"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </span>

          {/* Search Input */}
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Aridia Diamondbacks"
          />

          {/* AI Search */}
          {!searchText && (
            <span className="ai-search-badge">AI-Powered Search Active</span>
          )}

          {/* Microphone */}
          <button
            type="button"
            className="search-icon-button"
            aria-label="Voice search"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
              <rect
                x="9"
                y="3"
                width="6"
                height="12"
                rx="3"
                stroke="currentColor"
                strokeWidth="1.8"
              />

              <path
                d="M5 11a7 7 0 0 0 14 0"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />

              <path
                d="M12 18v3"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {/* Settings / Camera */}
          <button
            type="button"
            className="search-icon-button"
            aria-label="Image search"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
              <rect
                x="3"
                y="6"
                width="18"
                height="14"
                rx="2"
                stroke="currentColor"
                strokeWidth="1.8"
              />

              <circle
                cx="12"
                cy="13"
                r="3"
                stroke="currentColor"
                strokeWidth="1.8"
              />

              <path
                d="M8 6l1.5-3h5L16 6"
                stroke="currentColor"
                strokeWidth="1.8"
              />
            </svg>
          </button>
        </div>

        {/* Search Button */}
        <button
          type="button"
          className="main-search-button"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {/* =========================
                SECOND ROW
            ========================== */}

      {/* <div className="search-fields-row">
       
        <div className="search-field">
          <label htmlFor="design-number">Design Number</label>

          <input id="design-number" type="text" placeholder="e.g. C120997F" />
        </div>

       
        <div className="search-field">
          <label htmlFor="style-restriction">Style / Restriction Code</label>

          <input
            id="style-restriction"
            type="text"
            placeholder="e.g. World Series 1914"
          />
        </div>
      </div> */}

      {/* =========================
                BOTTOM ROW
            ========================== */}

      <div className="search-status-row">
        {/* Status Filters */}
        <div className="status-filters">
          <button className="status-filter active">
            <span className="status-checkbox checked">✓</span>

            <span>Active</span>

            <small>210,000+</small>
          </button>

          <button className="status-filter">
            <span className="status-checkbox"></span>

            <span>Archive</span>

            <small>74,000</small>
          </button>

          <button className="status-filter">
            <span className="status-checkbox"></span>

            <span>Obsolete</span>

            <small>15,000</small>
          </button>
        </div>

        {/* Database Status */}
        <div className="database-status">
          <span className="database-dot"></span>

          <span>ROAL Database Online</span>
        </div>
      </div>
    </section>
  );
};

export default SearchHeader;
