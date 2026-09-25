import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar";
import "../Common.css";
import design1 from "../assets/design1.png";
import design2 from "../assets/design2.png";
import design3 from "../assets/design3.png";
import design4 from "../assets/design4.png";
import design5 from "../assets/design5.png";
import design6 from "../assets/design6.png";
import design7 from "../assets/design7.png";
// import json from "/designSearch/sampleData.json";

// const designs = [design1, design2, design3, design4, design5, design6, design7];

function Home() {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  // const [searchedData, setSearchedData] = useState([]);

  // function searchFormaltext() {
  //   alert(searchText);
  // }

  const searchFormaltext = () => {
    if (searchText) {
      navigate("/searchEngine");
    }
  };

  return (
    <div className="home-page">
      {/* <Navbar /> */}

      <main className="home-content">
        <div className="content1">
          <div className="hero-overlay">
            <div className="hero-container">
              {/* LEFT CONTENT */}
              <div className="hero-content">
                <div className="eyebrow">
                  <span></span>
                  NEW ERA CAP - DESIGN LIBRARY
                </div>

                <div className="hero-header">
                  <h1>
                    FIND
                    <br />
                    THE
                    <br />
                    STITCH
                  </h1>

                  <div className="design-count">300,000+ DESIGNS</div>
                </div>

                <div className="search-section">
                  {/* DESCRIPTION */}
                  <p className="description">
                    Search every embroidery design in the New Era archive. Tape
                    numbers, teams, styles - all of it, instantly.
                  </p>

                  {/* SEARCH */}
                  <div className="search-container">
                    {/* <div className="search-icon">🔍</div> */}

                    <div className="search-input-wrapper">
                      <input
                        type="text"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                      />

                      {!searchText && (
                        <span className="custom-placeholder">
                          Try: 'red raised MLB logo' or search by tape number,
                          <br />
                          team, description...
                        </span>
                      )}

                      <span className="ai-search">AI SEARCH</span>
                    </div>

                    <button
                      className="search-button"
                      onClick={searchFormaltext}
                    >
                      SEARCH
                    </button>
                  </div>

                  {/* FILTERS */}
                  <div className="filters">
                    <button className="filter active">
                      <span className="checkbox checked">✓</span>
                      Active
                      <small>210,000+</small>
                    </button>

                    <button className="filter">
                      <span className="checkbox"></span>
                      Archive
                      <small>74,000</small>
                    </button>

                    <button className="filter">
                      <span className="checkbox"></span>
                      Obsolete
                      <small>15,000</small>
                    </button>
                  </div>
                </div>
              </div>

              {/* RIGHT DESIGN GRID */}
              <div className="design-grid">
                {/* TOP ROW */}
                <div className="design-card design-1">
                  <img src={design1} alt="Embroidery design 1" />
                </div>

                <div className="design-card design-2">
                  <img src={design2} alt="Embroidery design 2" />
                </div>

                {/* MIDDLE ROW */}
                <div className="design-card design-3">
                  <img src={design3} alt="Embroidery design 3" />
                </div>

                <div className="design-card design-4">
                  <img src={design4} alt="Embroidery design 4" />
                </div>

                <div className="design-card design-5">
                  <img src={design5} alt="Embroidery design 5" />
                </div>

                {/* BOTTOM ROW */}
                <div className="design-card design-6">
                  <img src={design6} alt="Embroidery design 6" />
                </div>

                <div className="design-card design-7">
                  <img src={design7} alt="Embroidery design 7" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* content section 2*/}
        <div className="coontent2">
          <div className="how-it-works">
            <div className="how-it-works-container">
              {/* Section Header */}
              <div className="section-header">
                <div className="eyebrow">HOW IT WORKS</div>

                <h2>Explore the archive with a tooling-first workflow</h2>

                <p>
                  Search by image, narrow by team and era, and export
                  production-ready files in a workflow designed for designers,
                  developers, and production teams.
                </p>
              </div>

              {/* Workflow Cards */}
              <div className="workflow-grid">
                {/* Card 1 */}
                <div className="workflow-card">
                  <div className="workflow-icon">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <circle cx="11" cy="11" r="7" />

                      <line x1="16.5" y1="16.5" x2="21" y2="21" />
                    </svg>
                  </div>

                  <div className="workflow-content">
                    <h3>Search by image</h3>

                    <p>
                      Start with a reference image, a patch style, or a vintage
                      cap detail to find matching embroidery and patch designs.
                    </p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="workflow-card">
                  <div className="workflow-icon">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M4 5h16l-6.5 7.2V19l-3 1v-7.8L4 5z" />
                    </svg>
                  </div>

                  <div className="workflow-content">
                    <h3>Filter by team / era</h3>

                    <p>
                      Narrow results by team, sport, decade, and application
                      type to surface the exact mark you need.
                    </p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="workflow-card">
                  <div className="workflow-icon">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 3v12" />

                      <path d="M7 10l5 5 5-5" />

                      <path d="M4 17v3h16v-3" />
                    </svg>
                  </div>

                  <div className="workflow-content">
                    <h3>Export production-ready files</h3>

                    <p>
                      Move from browse to build with clean exports that support
                      production planning, approvals, and final output.
                    </p>
                  </div>
                </div>
              </div>

              {/* Popular Designs */}
              <div className="popular-designs">POPULAR DESIGNS</div>
            </div>
          </div>
        </div>
        {/* Content Section 3 */}

        <div className="content3">
          <div className="popular-designs-section">
            <div className="popular-designs-container">
              <div className="popular-designs-header">
                <div className="popular-designs-eyebrow">POPULAR DESIGNS</div>

                <h2>Featured embroidery and patch thumbnails</h2>

                <p>
                  A quick-scroll showcase of standout designs, curated for
                  inspiration and fast browsing.
                </p>
              </div>

              <div className="popular-designs-grid">
                <article className="popular-design-card">
                  <div className="popular-design-image">
                    <img src={design1} alt="World Series Patch" />
                  </div>

                  <div className="popular-design-content">
                    <h3>World Series Patch</h3>

                    <p>
                      Championship embroidery with raised stitching and archival
                      detail.
                    </p>

                    <div className="popular-design-meta">
                      <span>MLB</span>
                      <span>Raised</span>
                    </div>
                  </div>
                </article>

                <article className="popular-design-card">
                  <div className="popular-design-image">
                    <img src={design2} alt="Team Classic Logo" />
                  </div>

                  <div className="popular-design-content">
                    <h3>Team Classic Logo</h3>

                    <p>
                      Core cap embroidery with clean lines and a timeless team
                      mark.
                    </p>

                    <div className="popular-design-meta">
                      <span>MLB</span>
                      <span>Flat</span>
                    </div>
                  </div>
                </article>

                <article className="popular-design-card">
                  <div className="popular-design-image">
                    <img src={design3} alt="Vintage Patch" />
                  </div>

                  <div className="popular-design-content">
                    <h3>Vintage Patch</h3>

                    <p>
                      Appliqué-style archive reference with layered texture and
                      heritage feel.
                    </p>

                    <div className="popular-design-meta">
                      <span>Archive</span>
                      <span>Appliqué</span>
                    </div>
                  </div>
                </article>

                <article className="popular-design-card">
                  <div className="popular-design-image">
                    <img src={design4} alt="Legacy Graphic" />
                  </div>

                  <div className="popular-design-content">
                    <h3>Legacy Graphic</h3>

                    <p>
                      Mascot and wordmark embroidery with bold color and graphic
                      energy.
                    </p>

                    <div className="popular-design-meta">
                      <span>MLB</span>
                      <span>Appliqué</span>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 3. Footer element at the very bottom */}
      <footer className="home-footer">
        <p>
          &copy; {new Date().getFullYear()} DesignSearch. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Home;
