import React, { useState, useEffect } from 'react';

export const ShortestJobFirst = () => {
  const [processes, setProcesses] = useState([
    { id: 1, name: 'Process A', arrivalTime: 0, burstTime: 4 },
    { id: 2, name: 'Process B', arrivalTime: 2, burstTime: 2 },
    { id: 3, name: 'Process C', arrivalTime: 4, burstTime: 1 },
    { id: 4, name: 'Process D', arrivalTime: 5, burstTime: 3 },
  ]);

  const [currentTime, setCurrentTime] = useState(0);
  const [runningProcess, setRunningProcess] = useState(null);

  useEffect(() => {
    const runSJF = () => {
      if (processes.length === 0) return;

      // Filtra los procesos que ya han llegado
      const arrivedProcesses = processes.filter(process => process.arrivalTime <= currentTime);

      // Ordena los procesos por su tiempo de ráfaga (burst time)
      arrivedProcesses.sort((a, b) => a.burstTime - b.burstTime);

      if (arrivedProcesses.length === 0) {
        setCurrentTime(currentTime + 1); // Avanzar el tiempo si no hay procesos listos
        return;
      }

      const nextProcessToRun = arrivedProcesses[0];
      setRunningProcess(nextProcessToRun);

      // Actualiza el estado de los procesos y avanza el tiempo
      setProcesses(prevProcesses => prevProcesses.filter(process => process.id !== nextProcessToRun.id));
      setCurrentTime(currentTime + nextProcessToRun.burstTime);

      // Simular la ejecución del proceso
      setTimeout(() => {
        setRunningProcess(null);
      }, nextProcessToRun.burstTime * 1000); // Simulación de tiempo real
    };

    // Llama a la función de simulación cada segundo
    const simulationInterval = setInterval(runSJF, 1000);

    // Limpia el intervalo cuando se desmonta el componente
    return () => clearInterval(simulationInterval);
  }, [currentTime, processes]);

  return (
    <div>
      <h1>Shortest Job First (SJF) Simulation</h1>
      <div>
        <h2>Current Time: {currentTime}</h2>
        <h2>Running Process: {runningProcess ? runningProcess.name : 'None'}</h2>
      </div>
      <div>
        <h2>Process Queue:</h2>
        <ul>
          {processes.map(process => (
            <li key={process.id}>{process.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
