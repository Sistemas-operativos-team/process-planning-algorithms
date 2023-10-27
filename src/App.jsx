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

export default App;