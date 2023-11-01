import React, { useState, useEffect } from 'react';

export const ShortestJobFirst = () => {
  const [processes, setProcesses] = useState([
    { id: 1, name: 'Process A', arrivalTime: 0, burstTime: 4 },
    { id: 2, name: 'Process B', arrivalTime: 0, burstTime: 2 },
    { id: 3, name: 'Process C', arrivalTime: 0, burstTime: 1 },
    { id: 4, name: 'Process D', arrivalTime: 0, burstTime: 3 },
    { id: 5, name: 'Process E', arrivalTime: 0, burstTime: 2 },
    { id: 6, name: 'Process F', arrivalTime: 0, burstTime: 20 },
    { id: 7, name: 'Process G', arrivalTime: 0, burstTime: 5 },
  ]);

  const [currentTime, setCurrentTime] = useState(0);
  const [runningProcess, setRunningProcess] = useState(null);
  const [isSimulationRunning, setIsSimulationRunning] = useState(false);

  const [description, setDescription] = useState(
    'Shortest Job First (SJF) is a CPU scheduling algorithm that selects the process with the smallest burst time for execution.'
  );

  const handleBurstTimeChange = (processId, newBurstTime) => {
    if (!isNaN(newBurstTime)) {
      setProcesses((prevProcesses) =>
        prevProcesses.map((process) =>
          process.id === processId
            ? { ...process, burstTime: newBurstTime }
            : process
        )
      );
    }
  };

  const startSimulation = () => {
    if (!isSimulationRunning) {
      setIsSimulationRunning(true);
    }
  };

  const reloadPage = () => {
    window.location.reload();
  };

  useEffect(() => {
    if (isSimulationRunning) {
      const runSJF = () => {
        // Filtra los procesos que ya han llegado
        const arrivedProcesses = processes.filter(
          (process) => process.arrivalTime <= currentTime
        );

        if (arrivedProcesses.length === 0) {
          return;
        }

        arrivedProcesses.sort((a, b) => a.burstTime - b.burstTime);

        const nextProcessToRun = arrivedProcesses[0];
        setRunningProcess(nextProcessToRun);

        const updatedProcesses = processes.filter(
          (process) => process.id !== nextProcessToRun.id
        );
        setProcesses(updatedProcesses);
        setCurrentTime(currentTime + nextProcessToRun.burstTime);
      };

      const simulationInterval = setInterval(runSJF, 1000);

      return () => {
        clearInterval(simulationInterval);
        setIsSimulationRunning(false);
      };
    }
  }, [currentTime, processes, isSimulationRunning]);

  return (
    <div>
      <h1>Shortest Job First (SJF) Simulation</h1>
      <button onClick={startSimulation}>Siguiente proceso</button>
      <button onClick={reloadPage}>Reiniciar simulación</button>
      <div>
        <h2>Current Time: {currentTime}</h2>
        <h2>
          Running Process: {runningProcess ? runningProcess.name : 'None'}
        </h2>
      </div>
      <div>
        <h2>Description of SJF Algorithm:</h2>
        <p>{description}</p>
      </div>
      <div>
        <h2>Process Queue:</h2>
        <ul>
          {processes.map((process) => (
            <li key={process.id}>
              {process.name} Burst Time:
              <input
                type="number"
                value={process.burstTime}
                onChange={(e) =>
                  handleBurstTimeChange(
                    process.id,
                    parseInt(e.target.value, 10)
                  )
                }
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
