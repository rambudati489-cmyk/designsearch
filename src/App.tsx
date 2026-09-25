import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import SearchEngine from "./pages/searchEngine";
import UserManagement from "./pages/userManagement";
import "./Common.css";

function App() {
  return (
    <Routes>
      {/* Parent Layout */}
      <Route path="/" element={<Layout />}>
        {/* Home: / */}
        <Route index element={<HomePage />} />

        {/* Search Engine: /searchEngine */}
        <Route path="searchEngine" element={<SearchEngine />} />

        {/* User Management: /userManagement */}
        <Route path="userManagement" element={<UserManagement />} />
      </Route>
    </Routes>
  );
}

export default App;
