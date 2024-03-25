import HomePage from "./pages/Home/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BusSchedulesResults from "./pages/Bus-Schedules-Results/BusSchedulesResults";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/bus-schedules-results"
          element={<BusSchedulesResults />}
        />
      </Routes>
    </Router>
  );
}

export default App;
