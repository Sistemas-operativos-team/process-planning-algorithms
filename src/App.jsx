import { Routes, Route } from "react-router-dom";
import { ShortestJobFirst } from "./components/ShortestJobFirst/ShortestJobFirst";
import Home from "./components/Home/Home.jsx";
import Fifo from "./components/Fifo/Fifo.jsx";
import RoundRobin from "./components/RoundRobin/RoundRobin.jsx";
import Priority from "./components/Priority/Priority.jsx";
import FunctionalRoundRobin from "./components/RoundRobin/FunctionalRoundRobin.jsx";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Home />}></Route>
      <Route path="/sjf" element={<ShortestJobFirst />} />
      <Route path={"/home"} element={<Home />}></Route>
      <Route path={"/fifo"} element={<Fifo />}></Route>
      <Route path={"/round-robin"} element={<FunctionalRoundRobin />}></Route>
      <Route path={"/priority"} element={<Priority />}></Route>
    </Routes>
  );
}

export default App;
