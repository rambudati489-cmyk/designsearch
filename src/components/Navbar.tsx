import { Link, NavLink } from "react-router-dom";
import "../Common.css";

function SearchIcon() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="7" r="4" />
      <path d="M5 21c.6-4 3-6 7-6s6.4 2 7 6" />
    </svg>
  );
}

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Brand */}
        <Link to="/" className="navbar-brand">
          <div className="brand-logo">
            <span className="logo-new">NEW</span>
            <span className="logo-era">ERA</span>
          </div>

          <div className="brand-divider" />

          <span className="brand-name">DESIGN SEARCH</span>
        </Link>

        {/* Navigation */}
        <nav className="navbar-navigation">
          <NavLink
            to="/search"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Search
          </NavLink>

          <NavLink
            to="/image-search"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Image Search
          </NavLink>

          <NavLink
            to="/saved-searches"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Saved Searches
          </NavLink>
        </nav>

        {/* Actions */}
        <div className="navbar-actions">
          <button
            type="button"
            className="navbar-icon-button"
            aria-label="Search"
          >
            <SearchIcon />
          </button>

          <button
            type="button"
            className="navbar-icon-button"
            aria-label="User profile"
          >
            <UserIcon />
          </button>

          <div className="api-status">
            <span className="api-status-dot" />
            <span>Wilcom API: Connected</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
