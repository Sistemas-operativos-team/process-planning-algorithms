import React, { useState, useEffect } from "react";

export const ShortestJobFirst = () => {
  const [processes, setProcesses] = useState([
    { id: 1, name: "Proceso A", arrivalTime: 0, burstTime: 4 },
    { id: 2, name: "Proceso B", arrivalTime: 0, burstTime: 2 },
    { id: 3, name: "Proceso C", arrivalTime: 0, burstTime: 1 },
    { id: 4, name: "Proceso D", arrivalTime: 0, burstTime: 3 },
    { id: 5, name: "Proceso E", arrivalTime: 0, burstTime: 2 },
    { id: 6, name: "Proceso F", arrivalTime: 0, burstTime: 20 },
    { id: 7, name: "Proceso G", arrivalTime: 0, burstTime: 5 },
  ]);

  const [currentTime, setCurrentTime] = useState(0);
  const [runningProcess, setRunningProcess] = useState(null);
  const [isSimulationRunning, setIsSimulationRunning] = useState(false);

  const [description, setDescription] = useState(
    "El algoritmo de planificación de trabajos más cortos primero (SJF) es un algoritmo de planificación no preemptivo que selecciona el proceso en espera con el menor tiempo de ejecución restante para ejecutarse a continuación. El algoritmo SJF se basa en la idea de que los procesos que tardan menos en ejecutarse deberían tener prioridad sobre los procesos que tardan más en ejecutarse. Esto se debe a que los procesos más cortos tendrán un tiempo de espera más corto, lo que mejorará la utilización del procesador.Para implementar el algoritmo SJF, se debe mantener una lista de procesos en espera. La lista se debe ordenar por el tiempo de ejecución restante de cada proceso. Cuando un proceso termina de ejecutarse, se elimina de la lista."
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
      <h1>Simulación de Shortest Job First (SJF)</h1>
      <div>
        <h2>Tiempo total actual: {currentTime}</h2>
      </div>
      <div>
        <h2>Descripción del algoritmo:</h2>
        <p>{description}</p>
      </div>
      <div>
        <h2>
          Proceso actual: {runningProcess ? runningProcess.name : "Ninguno"}
        </h2>
        <button onClick={startSimulation}>Siguiente proceso</button>
        <button onClick={reloadPage}>Reiniciar simulación</button>
        <h2>Procesos en espera:</h2>
        <ul>
          {processes.map((process) => (
            <li key={process.id}>
              {process.name} Tiempo de ráfaga:
              <br />
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
