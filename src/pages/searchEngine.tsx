import { useEffect } from "react";
import SearchBar from "../components/SearchHeader";
import SearchFields from "../components/ResultsToolBar";
import SearchFilters from "../components/SearchFilters";
import DesignGrid from "../components/DesignGrid";
// import Pagination from "../components/common/Pagination";
import "../Common.css";
import { useState } from "react";
import designData from "/designSearch/sampleData.json";
// Change the lowercase 't' to a capital 'T'
import TabulatorTable from "../components/Tabulator/CommonTable";

const SearchEngine = () => {
  const [searchedData, setSearchedData] = useState(designData);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [userColumns, setUserColumns] = useState<any[]>([]);

  useEffect(() => {
    const displayUserSearchedData = () => {
      setSearchedData(designData);
    };
    // setViewMode("grid");
    setViewMode("list");
    displayUserSearchedData();
    showInListFormat();
  }, []);

  const showInListFormat = () => {
    setUserColumns([
      {
        title: "",
        field: "row_select",
        formatter: "rowSelection", // Adds checkboxes to individual rows
        titleFormatter: "rowSelection", // Adds the master "Select All / Unselect All" checkbox in the header
        width: 40,
        headerSort: false,
        hozAlign: "center",
        // cellClick: function(e, cell) {
        //   // REMOVE THIS BLOCK if it's causing selection glitching.
        //   // Tabulator's built-in "rowSelection" formatter handles the click toggle automatically.
        // }
      },
      {
        title: "Preview",
        field: "ThumbnailPath",
        formatter: "image", // Enables Tabulator's image loader
        width: 70,
        headerSort: false, // Usually best to disable sorting on pictures
        hozAlign: "center",
        formatterParams: {
          height: "40px", // Set concrete dimensions to keep rows uniform
          width: "40px",
        },
      },
      { title: "Tape Number", field: "DesignNumber" },
      { title: "Description", field: "Description" },
      { title: "Description", field: "FamilyCode" },
      { title: "Application", field: "Keyword" },
      { title: "Stickes", field: "StitchCount" },
      // { title: "Status", field: "StitchCount" },
    ]);
  };

  return (
    <div className="search-engine">
      {/* Top Header */}
      <SearchBar />

      {/* Search Fields */}
      <SearchFields />

      {/* Main Content */}
      <div className="search-content">
        {/* Left Filters */}
        <aside className="search-sidebar">
          <SearchFilters />
        </aside>

        {/* Right Results */}
        <main className="search-results">
          {viewMode === "grid" && <DesignGrid designs={searchedData.d.data} />}
          {viewMode == "list" && (
            <TabulatorTable columns={userColumns} data={searchedData.d.data} />
          )}
        </main>
      </div>
    </div>
  );
};

export default SearchEngine;
