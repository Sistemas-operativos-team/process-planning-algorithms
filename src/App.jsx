import { ShortestJobFirst } from "./components/ShortestJobFirst";
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShortestJobFirst/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
