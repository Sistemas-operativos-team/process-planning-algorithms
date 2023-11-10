import "./style.css";
import NavBar from "../NavBar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";
// eslint-disable-next-line no-unused-vars
import React, {useState, useEffect, useRef} from 'react';

const RoundRobin = () => {
    const [description, setDescription] = useState(
        "El algoritmo de planificación round robin es un algoritmo de planificación de procesos simple y justo que se utiliza en muchos sistemas operativos. Su objetivo es asignar el tiempo de la CPU de manera equitativa a todos los procesos que están listos para ejecutarse.\n" +
        "El funcionamiento del algoritmo round robin es el siguiente:\n" +
        "Los procesos se colocan en una cola circular.\n" +
        "El proceso en la parte superior de la cola recibe una cantidad fija de tiempo de CPU, que se denomina quantum.\n" +
        "Cuando el quantum expira, el proceso se coloca al final de la cola y el siguiente proceso en la cola recibe el tiempo de CPU.\n" +
        "Este proceso se repite hasta que todos los procesos hayan recibido su turno. " +
        "Sin embargo, el algoritmo round robin también tiene algunas desventajas:\n" +
        "Puede ser ineficiente para procesos de larga duración, ya que pueden tener que esperar mucho tiempo antes de recibir su turno.\n" +
        "Puede ser ineficiente para procesos que necesitan más tiempo de CPU que el quantum."
    );

    const [processes, setProcesses] = useState([]);
    const [currentProcessIndex, setCurrentProcessIndex] = useState(0);
    const [timeQuantum, setTimeQuantum] = useState(2);
    const [simulationLog, setSimulationLog] = useState([]);
    const intervalRef = useRef(null);



    const handleAddProcess = () => {
        setProcesses([...processes, `Proceso ${processes.length + 1}`]);
    };

    const executeProcess = () => {
        setSimulationLog((prevLog) => [
            ...prevLog,
            `Ejecutando ${processes[currentProcessIndex]}`,
        ]);
    };

    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const executeNextProcess = async () => {
        console.log(`Antes de ejecutar: ${processes[currentProcessIndex]}`);
        executeProcess();
        await sleep(timeQuantum * 1000);
        console.log(`Después de ejecutar: ${processes[currentProcessIndex]}`);

        if (processes[currentProcessIndex].isFinished) {
            setCurrentProcessIndex((prevIndex) => (prevIndex + 1) % processes.length);
        }

    };

    const handleStartSimulation = async () => {
        if (processes.length === 0) {
            alert('Agrega procesos antes de iniciar la simulación.');
            return;
        }

        setSimulationLog([]);
        setCurrentProcessIndex(0);

        const runSimulation = async () => {
            await executeNextProcess();
            setCurrentProcessIndex((prevIndex) => (prevIndex + 1) % processes.length);
        };

        runSimulation(); // Iniciar el primer proceso

        intervalRef.current = setInterval(runSimulation, timeQuantum * 1000);
    };

    const handleStopSimulation = () => {
        clearInterval(intervalRef.current);
    };

    return (
        <>
             <div className="sjf-page">
                <NavBar />
                 <div className="all">
                     <div className="sectionTitle">
                         <h1>Simulación de Round Robin </h1>
                     </div>
                     <div className="sectionDescription">
                         <h2>Descripción del algoritmo:</h2>
                         <p>{description}</p>
                     </div>
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
                            value={isNaN(timeQuantum) ? '' : timeQuantum}
                            onChange={(e) => {
                                const value = parseInt(e.target.value, 10);
                                setTimeQuantum(isNaN(value) ? '' : value);
                            }}
                        />
                    </label>
                    <br />
                    <button onClick={handleStartSimulation}>Iniciar Simulación</button>
                    <button onClick={handleStopSimulation}>Detener Simulación</button>
                    <br />
                    <div>
                        <h3>Registro de Simulación:</h3>
                        <ul>
                            {simulationLog.map((log, index) => (
                                <li key={index}>{log}</li>
                            ))}
                        </ul>
                    </div>
                    <Footer />
                 </div>
             </div>
        </>
    );
};

export default RoundRobin;





