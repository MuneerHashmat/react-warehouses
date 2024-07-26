import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WarehouseDetails from "./pages/WarehouseDetails";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/warehouse/:id" element={<WarehouseDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
