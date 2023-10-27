import { ShortestJobFirst } from "./components/ShortestJobFirst/ShortestJobFirst.jsx";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Fifo from "./components/Fifo/Fifo.jsx";
import RoundRobin from "./components/RoundRobin/RoundRobin.jsx";

function App() {
  return (
    <Routes>
        <Route path={"/"} element={<Home/>}></Route>
        <Route path="/sjf" element={<ShortestJobFirst />} />
        <Route path={"/home"} element={<Home/>}></Route>
        <Route path={"/fifo"} element={<Fifo/>}></Route>
        <Route path={"/roundrobin"} element={<RoundRobin/>}></Route>
        {/*<Route path={"/priority"} element={}></Route>*/}
    </Routes>
  );
}

export default App;
