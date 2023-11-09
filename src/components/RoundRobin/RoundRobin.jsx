import React, { useState } from "react";

const RoundRobin = () => {
    const [cantidadProcesos, setCantidadProcesos] = useState(3);
    const [tiempoEjecucion, setTiempoEjecucion] = useState([100, 200, 300]);

    const runRoundRobin = () => {
        const cola = [];
        for (let i = 0; i < cantidadProcesos; i++) {
            cola.push({
                tiempo: tiempoEjecucion[i],
                prioridad: i,
            });
        }

        let tiempoActual = 0;
        while (!cola.isEmpty()) {
            const proceso = cola.dequeue();
            proceso.tiempo -= 1;
            if (proceso.tiempo <= 0) {
                proceso.estado = "Terminado";
            } else {
                cola.enqueue(proceso);
            }
            tiempoActual += 1;
        }

        setTiempoEjecucion(cola.map((proceso) => proceso.tiempo));
    };

    return (
        <div>
            <h1>Algoritmo de round robin</h1>
            <p>
                Ingrese la cantidad de procesos y el tiempo de ejecución de cada uno.
            </p>
            <div>
                <label for="cantidadProcesos">Cantidad de procesos</label>
                <input type="number" id="cantidadProcesos" value={cantidadProcesos} onChange={(e) => setCantidadProcesos(e.target.value)} />
            </div>
            <div>
                {cantidadProcesos > 0 &&
                    cantidadProcesos.times((i) => (
                        <div key={i}>
                            <label for="tiempoEjecucion-{i}">Tiempo de ejecución del proceso {i + 1}</label>
                            <input
                                type="number"
                                id="tiempoEjecucion-{i}"
                                value={tiempoEjecucion[i]}
                                onChange={(e) => setTiempoEjecucion((tiempoEjecucion => [
                                    ...tiempoEjecucion.slice(0, i),
                                    e.target.value,
                                    ...tiempoEjecucion.slice(i + 1),
                                ]))}
                            />
                        </div>
                    ))}
            </div>
            <button onClick={runRoundRobin}>Iniciar simulación</button>
            <p>
                El resultado de la simulación se mostrará en la tabla a continuación.
            </p>
            <table>
                <thead>
                <tr>
                    <th>Proceso</th>
                    <th>Tiempo de ejecución</th>
                    <th>Estado</th>
                </tr>
                </thead>
                <tbody>
                {tiempoEjecucion.map((tiempo, i) => (
                    <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{tiempo}</td>
                        <td>{tiempo <= 0 ? "Terminado" : "Ejecutandose"}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default RoundRobin;