import CommonModal from "../components/Modal/CommonModal";
import { useState } from "react";

interface DesignGridProps {
  designs: any[];
}

const DesignGrid = ({ designs }: DesignGridProps) => {
  debugger;
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);
  const [modalStatus, setModalStatus] = useState(Boolean);

  const handleCardClick = (id: any) => {
    debugger;
    console.log("clicked Value :", id);

    let findClickedValue = designs.find((item: any) => item.DesignId === id);
    console.log(findClickedValue);

    let htmlContent = (
      <div className="design-modal-content">
        {/* ================= HEADER ================= */}
        <div className="design-modal-header">
          <div className="design-header-left">
            <h2>{findClickedValue.DesignNumber}</h2>

            <span className="design-active">Active</span>

            <span className="design-type">Embroidery Master</span>
          </div>

          <button className="modal-header-close" onClick={handleCloseModal}>
            ×
          </button>
        </div>

        {/* ================= ACTION BAR ================= */}
        <div className="design-action-bar">
          <button className="action-button primary">↓ Download DST File</button>

          <button className="action-button">▣ Download Image</button>

          <button className="action-button outline">Export High-Res PNG</button>

          <button className="jobtracker-button">
            Open in Jobtracker Suite →
          </button>

          <button className="close-button" onClick={handleCloseModal}>
            Close
          </button>
        </div>

        {/* ================= MAIN CONTENT ================= */}
        <div className="design-modal-main">
          {/* LEFT SIDE */}
          <div className="design-modal-left">
            {/* IMAGE */}
            <div className="modal-design-image">
              <img
                src={findClickedValue.ThumbnailPath}
                alt={findClickedValue.Description}
                className="thumbImage"
              />
            </div>

            {/* TEAM COLORS */}
            <div className="team-colors">
              <div className="section-title">OFFICIAL TEAM COLORS</div>

              <div className="color-list">
                <div className="color-item">
                  <div className="color-box"></div>
                  <span>#071930</span>
                </div>

                <div className="color-item">
                  <div className="color-box"></div>
                  <span>#E3D4AD</span>
                </div>

                <div className="color-item">
                  <div className="color-box"></div>
                  <span>#000000</span>
                </div>

                <div className="color-item">
                  <div className="color-box"></div>
                  <span>#B0BCEA</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="design-modal-right">
            {/* TABS */}
            <div className="modal-tabs">
              <button className="modal-tab active">Details & Specs</button>

              <button className="modal-tab">ROAL Integration</button>

              <button className="modal-tab">Related Designs (3)</button>
            </div>

            {/* DETAILS GRID */}
            <div className="details-grid">
              <div className="detail-box">
                <span>TAPE NUMBER</span>
                <strong>{findClickedValue.DesignNumber}</strong>
              </div>

              <div className="detail-box">
                <span>STITCH COUNT</span>
                <strong>
                  {findClickedValue.StitchCount?.toLocaleString()}
                </strong>
              </div>

              <div className="detail-box">
                <span>DESIGN HEIGHT</span>
                <strong>{findClickedValue.HeightIN} in</strong>
              </div>

              <div className="detail-box">
                <span>DESIGN WIDTH</span>
                <strong>{findClickedValue.WidthIN} in</strong>
              </div>

              <div className="detail-box">
                <span>TOTAL COLORS</span>
                <strong>{findClickedValue.NumColors} Ply</strong>
              </div>

              <div className="detail-box">
                <span>DIGITIZER</span>
                <strong>{findClickedValue.Digitizer}</strong>
              </div>

              <div className="detail-box">
                <span>LICENSE</span>
                <strong>{findClickedValue.License}</strong>
              </div>

              <div className="detail-box">
                <span>CREATED DATE</span>
                <strong>{findClickedValue.CreateDate}</strong>
              </div>
            </div>

            {/* CLASSIFICATION */}
            <div className="classification-section">
              <span className="section-title">CLASSIFICATION TAGS</span>

              <div className="tag-list">
                <span>{findClickedValue.Keyword}</span>

                <span>{findClickedValue.TypeOfWork}</span>

                <span>{findClickedValue.Style}</span>

                <span>{findClickedValue.Sport}</span>
              </div>
            </div>

            {/* RELATED VERSION */}
            <div className="related-section">
              <span className="section-title">RELATED VERSIONS</span>

              <div className="related-card">
                <img
                  src={findClickedValue.ThumbnailPath}
                  alt={findClickedValue.Description}
                />

                <div>
                  <strong>{findClickedValue.Description}</strong>

                  <small>
                    {findClickedValue.StitchCount?.toLocaleString()} st
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= FOOTER ================= */}
        <div className="design-modal-footer">
          <div>
            <span>THREAD COLOR SEQUENCE</span>

            <p>Found via: "{findClickedValue.Description}"</p>
          </div>

          <div className="footer-badges">
            <span>Active library</span>

            <span>2 filters</span>
          </div>
        </div>
      </div>
    );
    setModalContent(htmlContent);
    setModalStatus(true);
    console.log(htmlContent);
  };

  const handleCloseModal = () => {
    setModalStatus(false);
  };
  const handleAgree = () => {};

  return (
    <div className="design-grid">
      {designs.map((design) => (
        <div
          className="design-card"
          key={design.DesignId}
          onClick={() => handleCardClick(design.DesignId)}
        >
          {/* Design Image */}
          <div className="design-image">
            <img
              id="design.DesignId"
              src={design.ThumbnailPath}
              alt={design.Description}
            />
          </div>

          {/* Design Details */}
          <div className="design-details">
            {/* Design Number */}
            {/* <span className="design-number">{design.DesignNumber}</span> */}
            {/* Number + Stitch Count */}
            <div className="design-number-row">
              <span className="design-number">{design.DesignNumber}</span>

              <span className="design-stitch">{design.StitchCount} </span>
            </div>

            {/* Description */}
            <h3 className="design-description">{design.Description}</h3>

            {/* Style */}
            <span className="design-style">{design.Style}</span>

            {/* Bottom Row */}
            <div className="design-footer">
              <span className="design-keyword">{design.Keyword}</span>

              <span className="design-status">
                <span className="status-dot"></span>
                Active
              </span>
            </div>
          </div>
        </div>
      ))}
      <CommonModal
        isOpen={modalStatus}
        onClose={handleCloseModal}
        // title="Design Details"
        // save={handleAgree}
      >
        {modalContent}
      </CommonModal>
    </div>
  );
};

export default DesignGrid;
