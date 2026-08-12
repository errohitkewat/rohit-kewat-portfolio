import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";

const App = () => {
  return (
    <Routes>
      {/* Main portfolio */}
      <Route path="/" element={<Home />} />

      {/* Project detail */}
      <Route
        path="/projects/:slug"
        element={<ProjectDetail />}
      />
    </Routes>
  );
};

export default App;