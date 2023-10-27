import { ShortestJobFirst } from "./components/ShortestJobFirst";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ShortestJobFirst />} />
    </Routes>
  );
}

export default App;
