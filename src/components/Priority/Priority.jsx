import React, {useState} from 'react';
import styles from './styles.module.css';
import NavBar from "../NavBar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";

const Priority = () => {
    const [simulating, setSimulating] = useState(false);
    const [simulationData, setSimulationData] = useState([]);
    const [processCount, setProcessCount] = useState(3);
    const [executionTimes, setExecutionTimes] = useState([]);
    const [currentProcess, setCurrentProcess] = useState(null);
    const [remainingTime, setRemainingTime] = useState(null);
    const [processSimulation, setProcessSimulation] = useState('0');

    const handleProcessCountChange = (e) => {
        const count = parseInt(e.target.value, 10);
        if (count > 12 || count < 1) {
            alert('Ingrese una cantidad de procesos válida entre 1 y 12');
        } else {
            setProcessCount(count);
        }
    };

    const handleExecutionTimeChange = (e, processIndex, field) => {
        const value = e.target.value.trim() === '' ? '' : Number(e.target.value);

        if ((field === 'time' || field === 'priority') && (value !== '' && (isNaN(value) || value < 1 || value > (field === 'time' ? 20 : 10)))) {
            alert(`${field === 'time' ? 'El tiempo' : 'La prioridad'} debe ser un número entre 1 y ${field === 'time' ? 20 : 10}`);
            return;
        }

        const updateExecutionTimes = [...executionTimes];
        updateExecutionTimes[processIndex] = { ...updateExecutionTimes[processIndex], [field]: value };
        setExecutionTimes(updateExecutionTimes);
    }

    const simulatePriority = () => {
        setProcessSimulation('1');
        const processes = [];
        for (let i = 1; i <= processCount; i++) {
            const {time, priority} = executionTimes[i - 1] || {time: 1, priority: 1};
            processes.push({ id: i, executionTime: time, priority });
        }
        processes.sort((a, b) => a.priority - b.priority);
        processes.reverse();
        setSimulationData(processes);

        const runNextProcess = () => {
            if (processes.length > 0) {
                const executedProcess = processes.shift();
                setCurrentProcess(executedProcess);
                setRemainingTime(executedProcess.executionTime);
                const executionInterval = setInterval(() => {
                    setRemainingTime(time => time - 1);
                }, 1000);
                setTimeout(() => {
                    clearInterval(executionInterval);
                    runNextProcess();
                }, executedProcess.executionTime * 1000);
            } else {
                setCurrentProcess(null);
                setRemainingTime(null);
                setSimulating(false);
                setProcessSimulation('2');
            }
        };

        runNextProcess();
        setSimulating(true);
    };

    const clearSimulation = () => {
        setSimulating(false);
        setProcessSimulation('2');
        setSimulationData([]);
        setCurrentProcess(null);
        setExecutionTimes(Array(processCount).fill({time: '', priority: ''}));
        setRemainingTime(null);
        setProcessOrder([]);
    };

    return (
        <div className={styles.all}>
            <NavBar/>
            <div className={styles.allSectionInfo}>
                <center><h1 className={styles.sectionTitle}>Priority</h1></center>
                <div className={styles.content}>
                    <div className={styles.planContent}>
                        <div className={styles.sectionDescription}>
                            <p>En este algoritmo, se asigna una prioridad a cada proceso y se atienden los procesos en función de su prioridad. Los procesos con mayor prioridad se asignan
                                a los recursos primero, mientras que los procesos con menor prioridad se ejecutan después</p>
                            <p>
                                La prioridad de los procesos puede ser determinada por varios factores, como la cantidad de tiempo que cada proceso requiere para su ejecución, la cantidad de
                                recursos del sistema que el proceso necesita, la importancia del proceso para el sistema, entre otros. La asignación de prioridades puede ser estática, es decir,
                                se establece al momento de la creación del proceso y no cambia durante su vida útil (Ver simulación), o puede ser dinámica, es decir, puede cambiar en respuesta a
                                ciertas condiciones del sistema
                            </p>
                            <p>
                                Un aspecto importante a considerar en el algoritmo de planificación por prioridad es la inanición. La inanición se produce cuando un proceso de baja prioridad nunca
                                se ejecuta porque siempre hay algún proceso de mayor prioridad esperando para ser ejecutado. Una solución común a este problema es el envejecimiento, que aumenta la
                                prioridad de un proceso cuanto más tiempo lleva esperando.
                            </p>
                        </div>
                        <div className={styles.simulationContainer}>
                            <div>
                                <label className={styles.textInformation}>Cantidad de Procesos:</label>
                                <input type="number" value={processCount} onChange={handleProcessCountChange} />
                            </div>
                            <div className={styles.timePriorityContainer}>
                                <label className={styles.textInformation}>Tiempo : Prioridad</label>
                                <div className={styles.processList}>
                                    {Array.from({ length: processCount }, (_, index) => (
                                        <div key={index} className={styles.processItem}>
                                            <div className={styles.processInfo}>
                                                <label>Proceso {index + 1}:</label>
                                            </div>
                                            <div className={styles.processFields}>
                                                <input
                                                    type="text"
                                                    value={executionTimes[index]?.time || ''}
                                                    onChange={(e) => handleExecutionTimeChange(e, index, 'time')}
                                                    placeholder="Tiempo"
                                                />
                                                <input
                                                    type="text"
                                                    value={executionTimes[index]?.priority || ''}
                                                    onChange={(e) => handleExecutionTimeChange(e, index, 'priority')}
                                                    placeholder="Prioridad"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {simulating && (
                                <div className={styles.simulationFIFO}>
                                    <table className={styles.processStack}>
                                        <thead>
                                        <tr>
                                            <th>Proceso</th>
                                            <th>Tiempo</th>
                                            <th>Prioridad</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {simulationData.filter(process => !process.isExecuted).map((process) => (
                                            <tr key={process.id}>
                                                <td>Proceso {process.id}</td>
                                                <td>{process.executionTime}</td>
                                                <td>{process.priority}</td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                    <div className={styles.timeRemaining}>
                                        {currentProcess && (
                                            <div>
                                                <label className={styles.labelInfo}>Ejecutándose</label>
                                                <div> Proceso {currentProcess.id} </div>
                                                <label className={styles.labelInfo}>Tiempo restante</label>
                                                <div>{remainingTime}</div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                            {processSimulation==='2'  && <div className={styles.finished}>Simulación finalizada</div>}
                            <button className={styles.simulationButton} onClick={simulating ? clearSimulation : simulatePriority}>
                                {simulating ? 'Detener Simulación' : 'Iniciar Simulación'}
                            </button>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    );
};

export default Priority;
