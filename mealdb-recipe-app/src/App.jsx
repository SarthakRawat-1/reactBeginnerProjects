import "./App.css";
import Mainpage from "./Components/Mainpage.jsx";
import { Route, Routes } from "react-router-dom";
import Mealinfo from "./Components/Mealinfo.jsx";

function App() {
  return (
    // <Mainpage />
    <Routes>
      <Route path="/" element={<Mainpage />} />
      <Route path="/:mealid" element={<Mealinfo />} />
    </Routes>
  );
}

export default App;
