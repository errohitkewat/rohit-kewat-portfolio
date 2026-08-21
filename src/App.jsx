import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import Resume from "./pages/Resume";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/:slug" element={<ProjectDetail />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
  );
};

export default App;



