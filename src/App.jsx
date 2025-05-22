import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";

import AboutUs from "./components/About-Us-Page/About";
import Default from "./components/Default";
import BioPage from "./components/BioPage";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Default />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/biopage" element={<BioPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
