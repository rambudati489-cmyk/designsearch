import "react-tabulator/lib/styles.css";
import "react-tabulator/lib/css/tabulator.min.css"; // Theme CSS
import { ReactTabulator } from "react-tabulator";

interface TabulatorTableProps {
  columns: any[]; // Array of column layouts from Tabulator
  data: any[]; // Array of your data rows/records
  options?: Record<string, any>; // Optional table configuration object
  events?: Record<string, (...args: any[]) => void>; // Optional event callback mappings
}
const TabulatorTable: React.FC<TabulatorTableProps> = ({
  columns,
  data,
  options = {},
  events = {},
}) => {
  // Set default layout if none is provided
  const defaultOptions = {
    layout: "fitColumns",
    responsiveLayout: "hide",
    ...options,
  };

  return (
    <div className="table-container">
      <ReactTabulator
        columns={columns}
        data={data}
        options={defaultOptions}
        events={events}
      />
    </div>
  );
};

export default TabulatorTable;
