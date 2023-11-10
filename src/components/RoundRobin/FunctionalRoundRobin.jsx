import { useState, useEffect } from "react";
import Navbar from "../NavBar/Navbar";
import "./styles.css";
import Footer from "../Footer/Footer";

const RoundRobinFuncional = () => {
  const [procesos, setProcesos] = useState([
    { id: 1, tiempo: 0 },
    { id: 2, tiempo: 0 },
    { id: 3, tiempo: 0 },
    { id: 4, tiempo: 0 }, // Nuevo proceso
    { id: 5, tiempo: 0 }, // Nuevo proceso
  ]);
  const [quantum, setQuantum] = useState(0);
  const [ordenEjecucion, setOrdenEjecucion] = useState([]);
  const [indiceProcesoActual, setIndiceProcesoActual] = useState(0);

  const ejecutarRoundRobin = () => {
    const procesosRestantes = procesos.map((p) => ({ ...p }));
    const orden = [];
    let tiempoActual = 0;

    while (procesosRestantes.length > 0) {
      for (let i = 0; i < procesosRestantes.length; i++) {
        const procesoActual = procesosRestantes[i];
        const tiempoCorte =
          procesoActual.tiempo > quantum ? quantum : procesoActual.tiempo;

        orden.push({
          id: procesoActual.id,
          tiempoInicio: tiempoActual,
          tiempoFinal: tiempoActual + tiempoCorte,
          tiempoRestante: procesoActual.tiempo,
        });

        tiempoActual += tiempoCorte;
        procesoActual.tiempo -= tiempoCorte;

        if (procesoActual.tiempo <= 0) {
          procesosRestantes.splice(i, 1);
          i--;
        }
      }
    }

    setOrdenEjecucion(orden);
    setIndiceProcesoActual(0);
  };

  const cambiarQuantum = (e) => {
    setQuantum(parseInt(e.target.value));
  };

  const cambiarTiempoProceso = (id, tiempo) => {
    const procesosActualizados = procesos.map((p) =>
      p.id === id ? { ...p, tiempo: parseInt(tiempo) } : p
    );
    setProcesos(procesosActualizados);
  };

  const reiniciarSimulacion = () => {
    setOrdenEjecucion([]);
    setIndiceProcesoActual(0);
  };

  useEffect(() => {
    const intervalo = setInterval(() => {
      if (indiceProcesoActual < ordenEjecucion.length) {
        setIndiceProcesoActual(indiceProcesoActual + 1);
      }
    }, 1000); // Cambiar el proceso cada segundo

    return () => clearInterval(intervalo);
  }, [indiceProcesoActual, ordenEjecucion]);

  return (
    <div className="sjf-page">
      <Navbar />
      <div className="sectionTitle">
        <h2>Simulación de Round Robin</h2>
      </div>
      <div className="sectionDescription">
        <p>
          El algoritmo Round Robin es un método de planificación de procesos en
          sistemas operativos. Distribuye un tiempo fijo, llamado "quantum", a
          cada proceso en una cola circular. El quantum define la duración
          máxima que un proceso puede ejecutarse en cada ronda. Si el proceso no
          se completa dentro del quantum, se mueve al final de la cola para la
          próxima ronda.
        </p>
      </div>
      <div className="simulationContainer">
        <label htmlFor="quantum">Quantum:</label>
        <br />
        <input
          type="number"
          id="quantum"
          value={quantum}
          onChange={cambiarQuantum}
        />
        <br />
        <button onClick={ejecutarRoundRobin}>Ejecutar Round Robin</button>
        <button onClick={reiniciarSimulacion}>Reiniciar Simulación</button>
        <h3>Procesos:</h3>
        <ul>
          {procesos.map((proceso) => (
            <li key={proceso.id}>
              Proceso {proceso.id} - Tiempo:
              <input
                type="number"
                value={proceso.tiempo}
                onChange={(e) =>
                  cambiarTiempoProceso(proceso.id, e.target.value)
                }
              />
            </li>
          ))}
        </ul>
        <h3>Orden de Ejecución:</h3>
        <ul>
          {ordenEjecucion
            .slice(0, indiceProcesoActual + 1)
            .map((proceso, indice) => (
              <li key={indice}>
                Proceso {proceso.id} - Tiempo de inicio: {proceso.tiempoInicio},
                Tiempo final: {proceso.tiempoFinal}, Tiempo restante:{" "}
                {proceso.tiempoRestante}
              </li>
            ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default RoundRobinFuncional;
