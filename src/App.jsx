
import React from "react";
import { Routes, Route } from "react-router-dom";
import RoundRobin from "./components/RoundRobin/RoundRobin.jsx";

function App() {
    return (
        <Routes>
            <Route path="/round-robin" element={<RoundRobin />} />
        </Routes>
    );
}

export default App;