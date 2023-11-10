
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

const RoundRobin = () => {
    const [processes, setProcesses] = useState([]);
    const [currentProcessIndex, setCurrentProcessIndex] = useState(0);
    const [timeQuantum, setTimeQuantum] = useState(2); // Puedes ajustar el quantum según tus necesidades
    const [simulationLog, setSimulationLog] = useState([]);

    const handleAddProcess = () => {
        // Simplemente agrega un proceso a la cola
        setProcesses([...processes, `Proceso ${processes.length + 1}`]);
    };

    const handleStartSimulation = () => {
        // Inicia la simulación al hacer clic en el botón
        setSimulationLog([]);
        setCurrentProcessIndex(0);

        const intervalId = setInterval(() => {
            // Agrega el proceso actual al registro de simulación
            setSimulationLog((prevLog) => [
                ...prevLog,
                `Ejecutando ${processes[currentProcessIndex]}`,
            ]);

            // Mueve el índice al siguiente proceso
            setCurrentProcessIndex((prevIndex) => (prevIndex + 1) % processes.length);
        }, timeQuantum * 1000);

        // Detén la simulación después de un tiempo o cuando no haya procesos
        setTimeout(() => {
            clearInterval(intervalId);
        }, timeQuantum * processes.length * 1000);
    };

    return (
        <div>
            <label>
                Procesos: {processes.join(', ')}
            </label>
            <br />
            <button onClick={handleAddProcess}>Agregar Proceso</button>
            <br />
            <label>
                Quantum de Tiempo:
                <input
                    type="number"
                    value={timeQuantum}
                    onChange={(e) => setTimeQuantum(parseInt(e.target.value))}
                />
            </label>
            <br />
            <button onClick={handleStartSimulation}>Iniciar Simulación</button>
            <br />
            <div>
                <h3>Registro de Simulación:</h3>
                <ul>
                    {simulationLog.map((log, index) => (
                        <li key={index}>{log}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default RoundRobin;
