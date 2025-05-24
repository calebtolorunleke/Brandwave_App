import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import BioPage from "./components/BioPage";
import ErrorPage from "./components/ErrorPage";
import AboutUs from "./components/About-Us-Page/About";
import BrandwavePage from "./components/BrandwavePage";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/biopage" element={<BioPage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/About" element={<AboutUs />} />
        <Route path="/brandpage" element={<BrandwavePage />} />
        <Route path="/" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
