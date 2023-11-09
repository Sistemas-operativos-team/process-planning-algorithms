import React, { useState } from 'react';

export const RoundRobinF = () => {
  const [output, setOutput] = useState([]);
  const [processTable, setProcessTable] = useState([]);
  const processes = [
    { name: 'Process 1', burstTime: 4 },
    { name: 'Process 2', burstTime: 3 },
    { name: 'Process 3', burstTime: 5 },
    { name: 'Process 4', burstTime: 2 },
  ];

  const timeQuantum = 2; // Tamaño del intervalo de tiempo

  const runRoundRobin = () => {
    let remainingProcesses = [...processes];
    let currentTime = 0;
    let processStatus = {};

    const timer = setInterval(() => {
      if (remainingProcesses.length === 0) {
        clearInterval(timer);
        setOutput([...output, 'Simulación de Round Robin finalizada.']);
        return;
      }

      const currentProcess = remainingProcesses.shift();
      const executionTime = Math.min(timeQuantum, currentProcess.burstTime);

      // Actualiza el estado del proceso en la tabla
      processStatus[currentProcess.name] = executionTime > 0 ? 'Ejecutando' : 'Terminado';
      setProcessTable({ ...processStatus });

      // Simula la ejecución del proceso
      setOutput([
        ...output,
        `Tiempo ${currentTime}: Ejecutando ${currentProcess.name} por ${executionTime} unidades de tiempo.`,
      ]);

      currentProcess.burstTime -= executionTime;
      currentTime += executionTime;

      if (currentProcess.burstTime > 0) {
        // Coloca el proceso al final de la cola para la próxima ejecución
        remainingProcesses.push(currentProcess);
      } else {
        setOutput([...output, `Tiempo ${currentTime}: ${currentProcess.name} ha terminado.`]);
      }
    }, 1000); // Simula 1 segundo por unidad de tiempo
  };

  return (
    <div>
      <button onClick={runRoundRobin}>Iniciar simulación de Round Robin</button>
      <div>
        {output.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
      <div>
        <h3>Estado de los procesos:</h3>
        <table>
          <thead>
            <tr>
              <th>Proceso</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(processTable).map((processName) => (
              <tr key={processName}>
                <td>{processName}</td>
                <td>{processTable[processName]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
