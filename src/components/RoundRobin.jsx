import React from "react";

const RoundRobin = ({ cola }) => {
    const [indiceActual, setIndiceActual] = useState(0);

    useEffect(() => {
        // Inicializamos el algoritmo de round robin
        setIndiceActual(0);
    }, []);
    //A medida que actualiza la página
    // verá que el índice actual avanza a través de la cola.
    // Actualizamos el estado del algoritmo
    useEffect(() => {
        // Si la cola no está vacía, avanzamos al siguiente elemento
        if (cola.length > 0) {
            setIndiceActual((indiceActual + 1) % cola.length);
        }
    }, [cola]);

    return (
        <div>
            <p>Índice actual: {indiceActual}</p>
            <ul>
                {cola.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default RoundRobin;