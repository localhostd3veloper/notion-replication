import { lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const HomePage = lazy(() => import("./components/HomePage"));

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
