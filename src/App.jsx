import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Default from "./components/Default";
import BioPage from "./components/BioPage";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Default />} />
        <Route path="/biopage" element={<BioPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
