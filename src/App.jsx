import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Default from "./components/Default";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Default />} />
      </Routes>
    </Router>
  );
}

export default App;
