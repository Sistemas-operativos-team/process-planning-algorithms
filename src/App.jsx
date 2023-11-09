<<<<<<< Updated upstream
import React, { useState } from "react";
import RoundRobin from "./components/RoundRobin";

const App = () => {
    const [cola, setCola] = useState([1, 2, 3, 4, 5]);

    return (
        <div>
            <RoundRobin cola={cola} />
        </div>
    );
};
=======
import React from "react";
import { Routes, Route } from "react-router-dom";
import ShortestJobFirst from "./components/ShortestJobFirst/ShortestJobFirst";
import Home from "./components/Home/Home";
import Fifo from "./components/Fifo/Fifo";
import RoundRobin from "./components/RoundRobin/RoundRobin.jsx";
import Priority from "./components/Priority/Priority";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sjf" element={<ShortestJobFirst />} />
            <Route path="/fifo" element={<Fifo />} />
            <Route path="/round-robin" element={<RoundRobin />} />
            <Route path="/priority" element={<Priority />} />
        </Routes>
    );
}
>>>>>>> Stashed changes

export default App;