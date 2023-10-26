import styles from './styles.module.css';

function InfoAlgorithms() {
    return (
        <div className={styles.allSectionInfo}>
            <center><h1 className={styles.sectionTitle}>Algoritmos de Planificación de Procesos</h1></center>
            <div className={styles.content}>

                <div className={styles.planContent}>
                    <div className={styles.sectionDescription}>
                        <p>Los algoritmos de planificación de procesos son un componente fundamental de los sistemas operativos que se
                            encargan de administrar y controlar la ejecución de múltiples tareas o procesos en una computadora.
                            Su principal objetivo es garantizar un uso eficiente de los recursos del sistema, como la CPU, al asignar tiempos de
                            ejecución a cada proceso de manera justa y equitativa. Estos algoritmos determinan el orden en que los procesos se ejecutan
                            y cómo se comparten los recursos del sistema entre ellos.</p>
                        <p>En esencia, los algoritmos de planificación de procesos buscan optimizar el rendimiento del sistema, minimizar los tiempos de
                            espera, maximizar la utilización de la CPU y garantizar una respuesta rápida a las solicitudes de los usuarios. Dependiendo
                            de la naturaleza de los procesos y los requisitos del sistema, existen diferentes estrategias de planificación, como el
                            planificador de tipo FIFO (Primero en entrar, primero en salir), el planificador de tipo SJF (Shortest Job First) o el
                            Round Robin, cada uno con sus propias ventajas y desventajas. Estos algoritmos son esenciales para lograr una administración
                            eficiente de los recursos en sistemas computacionales modernos.</p>
                    </div>
                    <div className={styles.buttonContainer}>
                        <button className={styles.algorithmButton}>FIFO</button>
                        <button className={styles.algorithmButton}>SJF</button>
                        <button className={styles.algorithmButton}>Round Robin</button>
                    </div>
                    <a href={"variables.css"}></a>
                </div>
            </div>
        </div>
    );
}

export default InfoAlgorithms;
