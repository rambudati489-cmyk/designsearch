import React, { useState } from "react";

interface FilterItem {
  label: string;
  count: string;
  checked?: boolean;
}

interface FilterGroup {
  title: string;
  count?: string;
  items: FilterItem[];
}

const filterGroups: FilterGroup[] = [
  {
    title: "Tape Number(s)",
    count: "3",
    items: [
      { label: "TP-100245", count: "12", checked: true },
      { label: "TP-100301", count: "8" },
      { label: "TP-100422", count: "5" },
    ],
  },
  {
    title: "Digitizer",
    items: [
      { label: "Attila Sagi", count: "452" },
      { label: "Manuel Uribe Gallegos", count: "391" },
      { label: "Mike Young", count: "210" },
      { label: "Rachel Ruth", count: "148" },
    ],
  },
  {
    title: "Style / Restriction",
    items: [
      { label: "ATH BLK", count: "3,210" },
      { label: "Cooperstown World Series", count: "1,894" },
      { label: "Bygone", count: "740" },
      { label: "C Note Insider", count: "215" },
    ],
  },
  {
    title: "Options",
    count: "4",
    items: [
      { label: "Flat", count: "3,420", checked: true },
      { label: "3D Puff", count: "1,890" },
      { label: "Appliqué", count: "950" },
      { label: "Chenille", count: "410" },
    ],
  },
  {
    title: "Type of Work",
    count: "4",
    items: [
      { label: "Cap Front", count: "4,150", checked: true },
      { label: "Back Flag", count: "2,300" },
      { label: "Woven Label", count: "1,100" },
      { label: "Side Panel", count: "890" },
    ],
  },
];

const FilterSidebar: React.FC = () => {
  const [openGroups, setOpenGroups] = useState<string[]>(
    filterGroups.map((group) => group.title),
  );

  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, boolean>
  >({
    "TP-100245": true,
    Flat: true,
    "Cap Front": true,
  });

  const toggleGroup = (title: string) => {
    setOpenGroups((current) =>
      current.includes(title)
        ? current.filter((item) => item !== title)
        : [...current, title],
    );
  };

  const toggleFilter = (label: string) => {
    setSelectedFilters((current) => ({
      ...current,
      [label]: !current[label],
    }));
  };

  const clearAll = () => {
    setSelectedFilters({});
  };

  return (
    <aside className="filter-sidebar">
      {/* Header */}
      <div className="filter-sidebar-header">
        <div className="filter-title">
          <span>Filters</span>

          <span className="filter-count">2</span>
        </div>

        <button type="button" className="clear-filters" onClick={clearAll}>
          Clear all
        </button>
      </div>

      {/* Selected Filters */}
      <div className="selected-filter-list">
        <span className="selected-filter">
          ARIDIA
          <button type="button">×</button>
        </span>

        <span className="selected-filter">
          Diamondbacks
          <button type="button">×</button>
        </span>
      </div>

      {/* Filter Groups */}
      <div className="filter-groups">
        {filterGroups.map((group) => {
          const isOpen = openGroups.includes(group.title);

          return (
            <div className="filter-group" key={group.title}>
              {/* Group Header */}
              <button
                type="button"
                className="filter-group-header"
                onClick={() => toggleGroup(group.title)}
              >
                <div className="filter-group-title">
                  <span>{group.title}</span>

                  {group.count && (
                    <span className="group-count">{group.count}</span>
                  )}
                </div>

                <span className={`filter-chevron ${isOpen ? "open" : ""}`}>
                  ⌄
                </span>
              </button>

              {/* Group Items */}
              {isOpen && (
                <div className="filter-items">
                  {group.items.map((item) => {
                    const checked = !!selectedFilters[item.label];

                    return (
                      <label className="filter-item" key={item.label}>
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggleFilter(item.label)}
                        />

                        <span className="custom-checkbox">
                          {checked && "✓"}
                        </span>

                        <span className="filter-item-label">{item.label}</span>

                        <span className="filter-item-count">{item.count}</span>
                      </label>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default FilterSidebar;
